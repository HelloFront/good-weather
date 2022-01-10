import daylyWeather from "./daylyWeather";
import getData from "./getData";
import search from "./search";

export const renderWeather = (obj) => {
    if(!obj) {
        getData().then(data => {
            if(data) {
                render(data);
                daylyWeather(data).then(json => renderDaily(json));
            }
        })
    } else {
        render(obj);
        daylyWeather(obj).then(json => renderDaily(json));
    }
}
export function render (obj) {
    if(!obj) return;

    const day = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const mainBlock = document.querySelector('main');

    mainBlock.innerHTML = ''
    mainBlock.insertAdjacentHTML('beforeend', `
    <div class="main-top-block">
    <div class="top-left-block item">
        <p class="out-location">${obj.name} ${obj.sys.country}</p>
        <hr>
        <div class="top-left-bottom-block">
            <div class="left-side">
                <img class="weather-img" src="img/${obj.weather[0].icon}.svg" alt="weather">
                <span class="out-wind">Speed: ${(obj.wind.speed).toFixed(1)} m/s</span>
            </div>
            <div class="right-side">
                <p class="out-date">${days[day.getDay()]}</p>
                <p class="out-description">${obj.weather[0].main}</p>
                <p class="out-deg-temp">${(obj.main.temp - 273.15).toFixed(1)}&deg;C</p>
                <p class="out-fareng-temp">${((obj.main.temp - 273.15) * 9/5 + 32).toFixed(1)}&deg;F</p>
            </div>
        </div>
    </div>
    <div class="top-right-block item">
        <p class="out-location">Details</p>
        <hr>
        <div class="right-inner-block">
            <div class="left-side">
                <p>Wind speed . . . </p>
                <p>Temperature . . .  </p>
                <p>Feels like . . . </p>
                <p>Clouds . . . </p>
                <p>Pressure . . . </p>
            </div>
            <div class="right-side">
                <p class="out-wind-speed">${obj.wind.speed} m/s</p>
                <p class="out-temperature">${(obj.main.temp - 273.15).toFixed(1)}&deg;C</p>
                <p class="out-feels-like">${(obj.main.feels_like - 273.15).toFixed(1)}&deg;C</p>
                <p class="out-clouds-cover">${obj.clouds.all}%</p>
                <p class="out-pressure">${(obj.main.pressure/1.333).toFixed()}mm</p>
            </div>
        </div>
    </div>
</div>`)
}   

export function renderDaily (obj) {
    const day = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const outWeather = document.querySelector('.section-dayly-weather > .container');
    outWeather.innerHTML = '';

    obj.daily.forEach((element,index) => {
        outWeather.insertAdjacentHTML('beforeend', ` 
        <div class="dayly-weather" data-id="${index}">
        <p class="day">${days[day.getDay() + index]}</p>
        <img class="icon-weather" src="img/${element.weather[0].icon}.svg" alt="icon">
        <div class="temp">
            <p class="max-temp"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.5 2c.827 0 1.5.673 1.5 1.5v7.525c0 1.569.514 2.287 1.411 3.05 1.01.858 1.589 2.106 1.589 3.425 0 2.481-2.019 4.5-4.5 4.5s-4.5-2.019-4.5-4.5c0-1.319.579-2.567 1.59-3.425.896-.761 1.41-1.48 1.41-3.05v-7.525c0-.827.673-1.5 1.5-1.5zm0-2c-1.933 0-3.5 1.567-3.5 3.5v7.525c0 .587-.258 1.145-.705 1.525-1.403 1.192-2.295 2.965-2.295 4.95 0 3.59 2.909 6.5 6.5 6.5s6.5-2.91 6.5-6.5c0-1.985-.892-3.758-2.295-4.95-.447-.38-.705-.938-.705-1.525v-7.525c0-1.933-1.567-3.5-3.5-3.5zm2.107 14.718c-1.012-.89-1.607-1.734-1.607-3.22v-1.498h-1v1.498c0 1.484-.597 2.332-1.607 3.22-.794.698-1.393 1.642-1.393 2.782 0 1.933 1.567 3.5 3.5 3.5s3.5-1.567 3.5-3.5c0-1.14-.599-2.083-1.393-2.782zm8.393-12.718h-2v5h-3l4 4 4-4h-3v-5z"/></svg></p>
            <p class="min-temp"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.5 2c.827 0 1.5.673 1.5 1.5v7.525c0 1.569.514 2.287 1.411 3.05 1.01.858 1.589 2.106 1.589 3.425 0 2.481-2.019 4.5-4.5 4.5s-4.5-2.019-4.5-4.5c0-1.319.579-2.567 1.59-3.425.896-.761 1.41-1.48 1.41-3.05v-7.525c0-.827.673-1.5 1.5-1.5zm0-2c-1.933 0-3.5 1.567-3.5 3.5v7.525c0 .587-.258 1.145-.705 1.525-1.403 1.192-2.295 2.965-2.295 4.95 0 3.59 2.909 6.5 6.5 6.5s6.5-2.91 6.5-6.5c0-1.985-.892-3.758-2.295-4.95-.447-.38-.705-.938-.705-1.525v-7.525c0-1.933-1.567-3.5-3.5-3.5zm2.107 14.718c-1.012-.89-1.607-1.734-1.607-3.22v-6.498h-1v6.498c0 1.484-.597 2.332-1.607 3.22-.794.698-1.393 1.642-1.393 2.782 0 1.933 1.567 3.5 3.5 3.5s3.5-1.567 3.5-3.5c0-1.14-.599-2.083-1.393-2.782zm6.393-3.718h2v-5h3l-4-4-4 4h3v5z"/></svg></p>
        </div>
        <div class="temp">
            <p class="max-temp">${(element.temp.min - 273.15).toFixed(1)}&deg;</p>
            <p class="min-temp">${(element.temp.max - 273.15).toFixed()}&deg;</p>
        </div>
    </div>`)
    });
}

export function renderMemorySearch () {
    const rememberSearch = document.querySelector('.rememberSearch');
    const storage = JSON.parse(localStorage.getItem('search'));

    rememberSearch.innerHTML = ''
    storage.forEach(item => {
        getData(item).then(json => {
            rememberSearch.insertAdjacentHTML('beforeend', `
            <div class="item" data-sity="${json.name}">
                <div class="left">
                    <p class="sity">${json.name}</p>
                    <p class="country">${json.sys.country}</p>
                </div>
                <div class="right">
                    <img src="img/${json.weather[0].icon}.svg" alt="icon">
                    <div class="temp">${(json.main.temp - 273.15).toFixed(1)}&deg;</div>
                </div>
                <hr>
            </div>`)
        })
    });
}


