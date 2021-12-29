const daylyWeather = (data) => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=8f2d10659d69f6a82084691de1384df0`)
        .then(res => res.json())
}

export default daylyWeather