import getData from "./getData";
import renderWeather from "./renderWeather";

const search = () => {
    const input = document.querySelector('.search-block input');
    const btn = document.querySelector('.accept');

    document.body.addEventListener('keydown', (e) => {
        if(input.value && e.key === 'Enter') {
            let value = input.value;
            input.value = '';
            getData(value).then(json => renderWeather(json))
        }
    })

    btn.addEventListener('click', () => {
        let value = input.value;
        input.value = '';

        getData(value).then(json => renderWeather(json))
    })
}

export default search