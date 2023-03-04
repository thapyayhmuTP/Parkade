function getLocation(fun) 
{
    var is_safari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
    var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome/') > -1;
    console.log(is_safari, is_chrome);
    if (navigator.geolocation && (!is_safari || is_chrome)) {
        navigator.geolocation.getCurrentPosition(function(loc) {
          fun(loc.coords.latitude, loc.coords.longitude);
        })
    }
    else {
        alert("Geolocation is not supported by this browser.");
        fun(51.454514, -2.587910);
    }
}

function loadMap(lat,lon) 
{
    location.href="map.html?lat="+lat+"&lon="+lon;
}

function show(btn, classifier,name) 
{
  
  var tabs = document.getElementsByClassName("w3-bar-item");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("w3-grey");
    tabs[i].classList.add("w3-brown");
  }
  
  btn.classList.remove("w3-brown");
  btn.classList.add("w3-grey");
  
  var x = document.getElementsByClassName(classifier);
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  
  var panel = document.getElementById(name);
  panel.style.display = "block";
  
  var iframe = panel.getElementsByTagName("iframe");
  iframe[0].src = iframe[0].src;
}