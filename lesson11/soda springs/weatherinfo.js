const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=37729291edfa73e5654bc594532a508c";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temperature').textContent = Math.floor(jsObject.main.temp);
    document.getElementById('condition').textContent = jsObject.weather[0].main;
    document.getElementById('wind-speed').textContent = jsObject.wind.speed;
    document.getElementById('humid').textContent = jsObject.main.humidity;
});

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=37729291edfa73e5654bc594532a508c";
fetch(forecastURL)
  .then((response) => response.json()) 
  .then((jsObject) => {
    console.log(jsObject);
    
    var dayOfWeek = new Array(7);
    dayOfWeek[0] = "Sun";
    dayOfWeek[1] = "Mon";
    dayOfWeek[2] = "Tue";
    dayOfWeek[3] = "Wed";
    dayOfWeek[4] = "Thu";
    dayOfWeek[5] = "Fri";
    dayOfWeek[6] = "Sat";

    var x = 1;
    for (var i = 0; i < jsObject.list.length; i++ ) {
        var time = jsObject.list[i].dt_txt.substring(11);
        var date = new Date(jsObject.list[i].dt * 1000);
        var day = dayOfWeek[date.getDay()];
        if (time == '18:00:00' && x <= 5) {
            document.getElementById('day' + x).textContent = day;
            document.getElementById('temp' + x).textContent = Math.floor(jsObject.list[i].main.temp);

            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
            const desc = jsObject.list[i].weather[0].description;
            document.getElementById('icon' + x).setAttribute('src', imagesrc);
            document.getElementById('icon' + x).setAttribute('alt', desc);

            x++
        }
    }
  });
