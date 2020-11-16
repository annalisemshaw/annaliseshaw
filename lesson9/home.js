const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    console.table(jsonObject);
    for (let i = 0; i < towns.length; i++ ) {
        if(towns[i].name == 'Preston' || towns[i].name == 'Fish Haven' || towns[i].name == 'Soda Springs') {
    let card = document.createElement('section');
    let info = document.createElement('section');
    let h1 = document.createElement('h1')
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let img = document.createElement('img');

    h1.textContent = towns[i].name;
    h2.textContent = towns[i].motto;
    p.textContent = 'Year founded: ' + towns[i].yearFounded;
    p2.textContent = 'Population: ' + towns[i].currentPopulation;
    p3.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;

    card.setAttribute('class', 'cardsection');
    info.setAttribute('class', 'info');
    img.setAttribute('src', 'imgs/' + towns[i].photo);
    img.setAttribute('alt', 'Photo of ' + towns[i].name)

    info.appendChild(h1);
    info.appendChild(h2);
    info.appendChild(p);
    info.appendChild(p2);
    info.appendChild(p3);
    card.appendChild(info);
    card.appendChild(img);
    


    document.querySelector('div.cards').appendChild(card);
    }
}
});