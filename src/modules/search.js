import daylyWeather from "./daylyWeather";
import getData from "./getData";
import {renderWeather, render, renderDaily} from "./renderWeather";

const search = () => {
    const input = document.querySelector('.search-block input');
    const btn = document.querySelector('.accept');

    document.body.addEventListener('keydown', (e) => {
        if(input.value && e.key === 'Enter') {
            let value = input.value;
            input.value = '';
            getData(value).then(json => {
                renderWeather(json);
                daylyWeather(json);
            })
        }
    })

    btn.addEventListener('click', () => {
        let value = input.value;
        input.value = '';

        if(value) getData(value).then(json => {
            renderWeather(json);
            daylyWeather(json);
        })
    })
}

export default search