$(document).ready(function() {

  var bank = new Bank();

  accountDetails();

  function accountDetails() {
    $('#accountName').text(bank.accountName);
    $('#accountNumber').text(bank.accountNumber);
  }


  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  var thermostat = new Thermostat();
  updateTemperature();
  $('#power-saving').text('on')

  $('#temperature-up').on('click', function() { // event listener
    thermostat.up(); // update model
    updateTemperature();
  })

  $('#temperature-down').on('click', function() { // event listener
    thermostat.down(); // update model
    updateTemperature();
  })

  $('#temperature-reset').on('click', function() { // event listener
    thermostat.resetTemperature(); // update model
    updateTemperature();
  })

  $('#powersaving-off').on('click', function() { // event listener
    thermostat.switchPowerSavingModeOff(); // update model
    $('#power-saving').text('off')
    updateTemperature();
  })

  $()

  $('#powersaving-on').on('click', function() { // event listener
    thermostat.switchPowerSavingModeOn(); // update model
    $('#power-saving').text('on')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    if(thermostat.energyUsage() === 'low-usage') {
      $('#temperature').css('color', 'green')
    } else if(thermostat.energyUsage() === 'medium-usage') {
      $('#temperature').css('color', 'black')
    } else {
      $('#temperature').css('color', 'red')
    }
  }


  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
     $('#current-temperature').text(bank.accountName);
    })
  }

})
