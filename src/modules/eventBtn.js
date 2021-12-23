import getData from "./getData";
import renderWeather from "./renderWeather";

const eventBtn = () => {
    const allBtns = document.querySelectorAll('.btns button');

    allBtns.forEach(item => item.addEventListener('click', (e) => {
        let sity = e.target.innerText
        getData(sity).then(json => {
            renderWeather(json)
        })
    }))
}

export default eventBtn