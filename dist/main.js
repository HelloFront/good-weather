(()=>{"use strict";const e=e=>fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${e.coord.lat}&lon=${e.coord.lon}&appid=8f2d10659d69f6a82084691de1384df0`).then((e=>e.json())),t=e=>(e||(e="Sarny"),fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=8f2d10659d69f6a82084691de1384df0`).then((e=>e.ok?e.json():Promise.reject(e.status))).catch((e=>alert("Вы ввели неизвестный город \nКод ошибки : "+e)))),n=n=>{function s(e){const t=new Date,n=document.querySelector("main");n.innerHTML="",n.insertAdjacentHTML("beforeend",`\n        <div class="main-top-block">\n        <div class="top-left-block item">\n            <p class="out-location">${e.name} ${e.sys.country}</p>\n            <hr>\n            <div class="top-left-bottom-block">\n                <div class="left-side">\n                    <img class="weather-img" src="img/${e.weather[0].icon}.svg" alt="weather">\n                    <span class="out-wind">Speed: ${e.wind.speed.toFixed(1)} m/s</span>\n                </div>\n                <div class="right-side">\n                    <p class="out-date">${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()]}</p>\n                    <p class="out-description">${e.weather[0].main}</p>\n                    <p class="out-deg-temp">${(e.main.temp-273.15).toFixed(1)}&deg;C</p>\n                    <p class="out-fareng-temp">${(9*(e.main.temp-273.15)/5+32).toFixed(1)}&deg;F</p>\n                </div>\n            </div>\n        </div>\n        <div class="top-right-block item">\n            <p class="out-location">Details</p>\n            <hr>\n            <div class="right-inner-block">\n                <div class="left-side">\n                    <p>Wind speed . . . </p>\n                    <p>Temperature . . .  </p>\n                    <p>Feels like . . . </p>\n                    <p>Clouds . . . </p>\n                    <p>Pressure . . . </p>\n                </div>\n                <div class="right-side">\n                    <p class="out-wind-speed">${e.wind.speed} km/h</p>\n                    <p class="out-temperature">${(e.main.temp-273.15).toFixed(1)}&deg;C</p>\n                    <p class="out-feels-like">${(e.main.feels_like-273.15).toFixed(1)}&deg;C</p>\n                    <p class="out-clouds-cover">${e.clouds.all}%</p>\n                    <p class="out-pressure">${(e.main.pressure/1.333).toFixed()}mm</p>\n                </div>\n            </div>\n        </div>\n    </div>`)}n?s(n):t().then((t=>{s(t),e(t).then((e=>function(e){console.log(e);const t=new Date,n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s=document.querySelector(".section-dayly-weather > .container");s.innerHTML="",e.daily.forEach(((e,a)=>{console.log(t),console.log(e.temp.day),s.insertAdjacentHTML("beforeend",` \n            <div class="dayly-weather">\n            <p class="day">${n[t.getDay()+a]}</p>\n            <img class="icon-weather" src="img/${e.weather[0].icon}.svg" alt="icon">\n            <div class="temp">\n                <p class="max-temp"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.5 2c.827 0 1.5.673 1.5 1.5v7.525c0 1.569.514 2.287 1.411 3.05 1.01.858 1.589 2.106 1.589 3.425 0 2.481-2.019 4.5-4.5 4.5s-4.5-2.019-4.5-4.5c0-1.319.579-2.567 1.59-3.425.896-.761 1.41-1.48 1.41-3.05v-7.525c0-.827.673-1.5 1.5-1.5zm0-2c-1.933 0-3.5 1.567-3.5 3.5v7.525c0 .587-.258 1.145-.705 1.525-1.403 1.192-2.295 2.965-2.295 4.95 0 3.59 2.909 6.5 6.5 6.5s6.5-2.91 6.5-6.5c0-1.985-.892-3.758-2.295-4.95-.447-.38-.705-.938-.705-1.525v-7.525c0-1.933-1.567-3.5-3.5-3.5zm2.107 14.718c-1.012-.89-1.607-1.734-1.607-3.22v-1.498h-1v1.498c0 1.484-.597 2.332-1.607 3.22-.794.698-1.393 1.642-1.393 2.782 0 1.933 1.567 3.5 3.5 3.5s3.5-1.567 3.5-3.5c0-1.14-.599-2.083-1.393-2.782zm8.393-12.718h-2v5h-3l4 4 4-4h-3v-5z"/></svg></p>\n                <p class="min-temp"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.5 2c.827 0 1.5.673 1.5 1.5v7.525c0 1.569.514 2.287 1.411 3.05 1.01.858 1.589 2.106 1.589 3.425 0 2.481-2.019 4.5-4.5 4.5s-4.5-2.019-4.5-4.5c0-1.319.579-2.567 1.59-3.425.896-.761 1.41-1.48 1.41-3.05v-7.525c0-.827.673-1.5 1.5-1.5zm0-2c-1.933 0-3.5 1.567-3.5 3.5v7.525c0 .587-.258 1.145-.705 1.525-1.403 1.192-2.295 2.965-2.295 4.95 0 3.59 2.909 6.5 6.5 6.5s6.5-2.91 6.5-6.5c0-1.985-.892-3.758-2.295-4.95-.447-.38-.705-.938-.705-1.525v-7.525c0-1.933-1.567-3.5-3.5-3.5zm2.107 14.718c-1.012-.89-1.607-1.734-1.607-3.22v-6.498h-1v6.498c0 1.484-.597 2.332-1.607 3.22-.794.698-1.393 1.642-1.393 2.782 0 1.933 1.567 3.5 3.5 3.5s3.5-1.567 3.5-3.5c0-1.14-.599-2.083-1.393-2.782zm6.393-3.718h2v-5h3l-4-4-4 4h3v5z"/></svg></p>\n            </div>\n            <div class="temp">\n                <p class="max-temp">${(e.temp.min-273.15).toFixed(1)}&deg;</p>\n                <p class="min-temp">${(e.temp.max-273.15).toFixed()}&deg;</p>\n            </div>\n        </div>`)}))}(e)))}))};n(),document.querySelectorAll(".btns button").forEach((s=>s.addEventListener("click",(s=>{let a=s.target.innerText;t(a).then((t=>{n(t),e(t)}))})))),(()=>{const s=document.querySelector(".search-block input"),a=document.querySelector(".accept");document.body.addEventListener("keydown",(a=>{if(s.value&&"Enter"===a.key){let a=s.value;s.value="",t(a).then((t=>{n(t),e(t)}))}})),a.addEventListener("click",(()=>{let a=s.value;s.value="",a&&t(a).then((t=>{n(t),e(t)}))}))})()})();