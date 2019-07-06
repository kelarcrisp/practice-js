import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Constructor-Name } from './backend-code';

window.addEventListener('load', ()=> {
  let lat;
  let long;
  let temperatureDescription = document.querySelector(".temperature-description");

  let temperatureDegree = document.querySelector(".temperature-degree");

  let locationTimezone = document.querySelector(".location-timezone");

  let temperatureSection = document.querySelector(".temperature-section");
  
  if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(position =>{
    long = position.coords.longitude;
    lat = position.coords.latitude;

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const api = `${proxy}https://api.darksky.net/forecast/1ddc868dd4e1192dd84f96232c2cc0e0/${lat},${long}`;

    fetch(api)
    .then(response => {
      return response.json();
    })
    .then(data =>{
      const { temperature,summary } = data.currently;
      //set dom elements from the API
      temperatureDegree.textContent = temperature;
      temperatureDescription.textContent = summary;
      locationTimezone.textContent = data.timezone;
    });
  });
  }
  temperatureSection
});


//20 minutes in
