const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=37729291edfa73e5654bc594532a508c";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = Math.floor(jsObject.main.temp);
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);
});

const forecastURL = "api.openweathermap.org/data/2.5/forecast?id=5604473&appid=37729291edfa73e5654bc594532a508c";

fetch(forecastURL)
  .then((response) => response.json()) 
  .then((jsObject) => {

    let dayOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri"];

    for (let i = 0; i < jsObject.list.length; i++)
    {
        let date = new Date(jsObject.list[i].dt * 1000);
        let day = dayOfWeek[date.getDay()];
        let time = jsObject.list[i].dt_txt.substring(11);

        let x = 0;

        if (time == '18:00:00' && x <= 4)
        {
           document.getElementById('day' + x).textContent = day;
           document.getElementById('forecast' + x).textContent = jsObject.list[i].main.temp;

           const iconsrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
           document.getElementById('icon' + x).setAttribute('src', iconsrc);
        }

    }
  });