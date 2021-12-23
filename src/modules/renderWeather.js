import getData from "./getData"

const renderWeather = (obj) => {
    if(!obj) {
        getData().then(data => render(data))
    } else render(obj)

    function render (obj) {
        console.log(obj);
        const day = new Date();
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const mainBlock = document.querySelector('main');
        mainBlock.innerHTML = ''
        mainBlock.insertAdjacentHTML('beforeend', `
        <div class="main-top-block">
        <div class="top-left-block item">
            <p class="out-location">${obj.name}</p>
            <hr>
            <div class="top-left-bottom-block">
                <div class="left-side">
                    <img class="weather-img" src="img/${obj.weather[0].icon}.svg" alt="weather">
                    <span class="out-wind">Speed: ${obj.wind.speed} km/h</span>
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
                    <p class="out-wind-speed">${obj.wind.speed} km/h</p>
                    <p class="out-temperature">${(obj.main.temp - 273.15).toFixed(1)}&deg;C</p>
                    <p class="out-feels-like">${(obj.main.feels_like - 273.15).toFixed(1)}&deg;C</p>
                    <p class="out-clouds-cover">${obj.clouds.all}%</p>
                    <p class="out-pressure">${obj.main.pressure}mm</p>
                </div>
            </div>
        </div>
    </div>`)
    }   
}

export default renderWeather


