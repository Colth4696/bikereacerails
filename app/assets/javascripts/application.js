// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
var locations=[
    ["Dustin Green", 40.00, -105.35],
    ["Jason Finn", 39.95, -105.24],
    ["Howard Thompson", 40.06, -105.26],
    ["Maggie Lantz", 40.03, -105.23],
    ["Lawrence Duran", 40.04, -105.23],
    ["Irene Molina", 39.96, -105.22],
    ["Nancy Garner", 39.98, -105.21],
    ["Tara Taylor", 40.00, 105.25],
    ["Alejandro Smith", 40.02, -105.26],
    ["Tricia Renshaw", 40.02, -105.30],
    ["Travis Cook", 40.01, -105.20],
    ["Joan Brooks", 39.98, -105.24],
    ["Joseph Rodgers", 39.99, -105.25],
    ["Matthew Gregson", 40.01, -105.29],
    ["Katie Dunlap", 39.97, -105.27],
    ["Leo Howard", 39.97, -105.33],
    ["Maria Baisden", 40.00, -105.29],
    ["Sandy Townsend", 40.05, -105.30],
    ["Melinda Stephenson", 39.99, -105.31],
    ["Jason Nichols", 40.01, -105.32]
  ]
  
  
  function fetch_data(page){
      fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=00342b0d5608f47b7fbe2e865e25bea6&tags=bikerace,BoulderBikeTour,bikes&privacy_filter=1&per_page=40&page='+page+'&format=json&nojsoncallback=1')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        var photos = myJson.photos.photo
        for(i=0; i<photos.length;i++){
          var url = make_url(photos[i].farm,photos[i].server,photos[i].id,photos[i].secret)
          add_image(url)
          console.log(url)
        }
      });
  }
  
  function make_url(farm_id,server_id,id,secret){
    return("https://farm"+farm_id+".staticflickr.com/"+server_id+"/"+id+"_"+secret+"_m.jpg")
  }
  
  function add_image(url){
    var placeholder = document.getElementById("photos")
    var img = document.createElement("img")
    img.setAttribute("src",url)
    img.setAttribute("class","img")
    placeholder.appendChild(img)
  }
  
  function next() {
    current_page += 1;
    fetch_data(current_page);
  }
  
  function back() {
    current_page -= 1;
    if(current_page<=0) {
      current_page=1;
    }
    fetch_data(current_page);
  
  }
  
  function InitMap() {
  
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: new google.maps.LatLng(40.00, -105.30),
    mapTypeId: google.maps.MapTypeId.ROADMAP});
  
    var infowindow = new google.maps.InfoWindow();
  
    var marker, i;
  
    for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map});
  
    google.maps.event.addListener(marker, 'click', (function (marker, i) {
    return function () {
    infowindow.setContent(locations[i][0]);
    infowindow.open(map, marker);
    }
    })(marker, i));
    }
  }
  