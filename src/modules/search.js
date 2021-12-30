import daylyWeather from "./daylyWeather";
import getData from "./getData";
import {renderWeather, render, renderDaily, renderMemorySearch} from "./renderWeather";

const search = (arr) => {
    const rememberSearch = document.querySelector('.rememberSearch');
    const input = document.querySelector('.search-block input');
    const btn = document.querySelector('.accept');

    input.addEventListener('focus', () => {
        if(localStorage.length !== 0) {
            renderMemorySearch()
            rememberSearch.style.display = 'block'
        }
    })

    if(arr) {
        arr.forEach(item => {
            item.addEventListener('click', getWeather)
        });
    }

    document.body.addEventListener('keydown', (e) => {
        if(input.value && e.key === 'Enter') {
            let value = input.value;
            input.value = '';
            getData(value).then(json => {
                if(json){
                    renderWeather(json);
                    daylyWeather(json);
                    pushStorage(json);
                    rememberSearch.style.display = 'none'
                }
            })
        }
    })

    btn.addEventListener('click', () => {
        let value = input.value;
        input.value = '';

        if(value) getData(value).then(json => {
            if(json){
                renderWeather(json);
                daylyWeather(json);
                pushStorage(json);
                rememberSearch.style.display = 'none'
            }
        })
    })

    function pushStorage (obj) {
        let storage = [];
        let status = true;
        if(localStorage.length === 0) {
            storage.push(obj);
            localStorage.setItem('search', JSON.stringify(storage));
        }else {
            storage = JSON.parse(localStorage.getItem('search'));
            storage.forEach(item => {
                if(item.name === obj.name) status = false;
            });
            if(status) {
                storage.push(obj);
                localStorage.setItem('search', JSON.stringify(storage));
            }
        }
    }

    function getWeather () {
        let value = this.dataset.sity;

        getData(value).then(json => {
            renderWeather(json);
            daylyWeather(json);
            pushStorage(json);
            rememberSearch.style.display = 'none'
        })
    }
}

export default search