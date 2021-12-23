const getData = (sity) => {
    if(!sity) sity = 'Sarny'
    const main = document.querySelector('main');
    main.insertAdjacentHTML('beforeend', '<img class="spinner" style="width: 100%; padding-bottom: 100%;" src="https://i.pinimg.com/originals/2b/02/15/2b02159fee58d573c079ad5212d56b63.gif" alt="">')

    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${sity}&appid=8f2d10659d69f6a82084691de1384df0`)
        .then(res => {
            if(res.ok) {
                return res.json()
            } else return Promise.reject(res.status)
        })
        .catch((e) => alert('Вы ввели неизвестный город \n' + 'Код ошибки : ' + e))
        .finally(()=> {
            document.querySelector('.spinner').remove();
        })
}

export default getData