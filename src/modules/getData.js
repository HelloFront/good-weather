const getData = (sity) => {
    if(!sity) sity = 'London'
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${sity}&appid=8f2d10659d69f6a82084691de1384df0`)
        .then(res => res.json())
}

export default getData