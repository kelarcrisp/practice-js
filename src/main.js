import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Constructor-Name } from './backend-code';

window.addEventListener('load', ()=> {
    let lat;
  let long;


  if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(position =>{
    long = position.coords.longitude;
    lat = position.coords.lttitude;

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const api = `${proxy}https://api.darksky.net/forecast/1ddc868dd4e1192dd84f96232c2cc0e0/${lat},${long}`;

    fetch(api).then(response =>{
      return response.json();
    })
    .then(data =>{
      console.log(data);
    });
  });
  }
});


//20 minutes in
