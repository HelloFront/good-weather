const getData = (sity) => {
    if(!sity) sity = 'London'
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${sity}&appid=8f2d10659d69f6a82084691de1384df0`)
        .then(res => {
            if(res.ok) {
                return res.json()
            } else return Promise.reject(res.status)
        })
        .catch((e) => alert('Вы ввели неизвестный город \n' + 'Код ошибки : ' + e))
}

export default getData