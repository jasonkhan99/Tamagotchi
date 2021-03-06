import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Pet } from '../src/tamagotchi.js';

$(document).ready(function() {
  let request = new XMLHttpRequest();
  const url = `api.giphy.com/v1/gifs/{gif_id}`;
  $("form#name").submit(function(event) {
    event.preventDefault();
    $("#showName").text($("#petName").val());
    $("#game").show();
    $("form").hide();
    let newPet = new Pet(Math.floor((Math.random() * (100 - 50)) + 50), Math.floor((Math.random() * (100 - 50)) + 50), Math.floor((Math.random() * (100 - 50)) + 50));
    newPet.degredation();
    $("#foodBar").text(newPet.food);
    $("#playBar").text(newPet.happiness);
    $("#napBar").text(newPet.sleep);

// Feed Pet -----

    $("#feedPet").click(function() {
      newPet.feedPet();
      let request = new XMLHttpRequest();
      const url = `http://api.giphy.com/v1/gifs?api_key=dc6zaTOxFJmzC&ids=dKZRRvQhrT2HS`
  
      request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response) 
        }
      }
      request.open("GET", url, true);
      request.send(); 
      const getElements = function (response) {
      $("#sleeping").hide();  
      $("#havingfun").hide()  
      $("#eating").show();  
      $('#eating').html(`<img src=${response.data[0].images.downsized_large.url}></img>`);
      }
    });

// Play With Pet -----

    $("#playWithPet").click(function() {
      newPet.playWithPet();
      let request = new XMLHttpRequest();
      const url = `http://api.giphy.com/v1/gifs?api_key=dc6zaTOxFJmzC&ids=1qnuGtWiouZUI`
  
      request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response) 
        }
      }
      request.open("GET", url, true);
      request.send(); 
      const getElements = function (response) {
      $("#eating").hide();  
      $("#sleeping").hide();
      $("#havingfun").show();  
      $('#havingfun').html(`<img src=${response.data[0].images.downsized_large.url}></img>`);
      }
    });

// Rest -----

    $("#restPet").click(function() {
      newPet.restPet();
      let request = new XMLHttpRequest();
      const url = `http://api.giphy.com/v1/gifs?api_key=dc6zaTOxFJmzC&ids=xT8qBvH1pAhtfSx52U`
  
      request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response) 
        }
      }
      request.open("GET", url, true);
      request.send(); 
      const getElements = function (response) {
      $("#havingfun").hide()  
      $("#eating").hide();
      $("#sleeping").show();  
      $('#sleeping').html(`<img src=${response.data[0].images.downsized_large.url}></img>`);
      }
    });

    setInterval(function() {
      $("#foodBar").html(newPet.food);
      $("#playBar").html(newPet.happiness);
      $("#napBar").html(newPet.sleep);
      $("#foodBar").css("width", newPet.food + "%");
      $("#playBar").css("width", newPet.happiness + "%");
      $("#napBar").css("width", newPet.sleep + "%");
    });

// death function

    $("#tryAgain").click(function() {
      location.reload();
      return false;
    });
  });
}); 
