
// const APP_ID = 'b95dfbb0525dd7b042a9590b3309ae19'; /* ключ */
const WEATHER_FOR_5DAY = 'https://api.openweathermap.org/data/2.5/forecast';



const getInfoWeatherForFiveDays = async(place = 'Minsk') => {
    const result = await getResource(`${WEATHER_FOR_5DAY}?q=${place}&appid=${APP_ID}`);
    return result;
};

const renderTempApp = async() => {
    try{
        const currentPlace = document.querySelector('#place').value.trim();
        const data = await getInfoWeatherForFiveDays(currentPlace);
        const withHeader = document.querySelector('.with-header');

        withHeader.innerHTML = '';
        data.list.forEach((elem) => {
            const currentTemp = Math.round(elem.main.temp - 273);

            withHeader.innerHTML += `
            <li class="collection-item"><div>${elem.dt_txt}<a href="#!" class="secondary-content"><i class="material-icons">${currentTemp} degrees</i></a></div></li>
            `;
        });
    }catch(err){
        console.log('Error >>>', err);
    }
};

searchBtn.addEventListener('click', renderTempApp);



