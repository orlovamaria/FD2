// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const APP_ID = 'b95dfbb0525dd7b042a9590b3309ae19';

const WEATHER_URI = 'https://api.openweathermap.org/data/2.5/weather'

const getResource = async(url) => {
    try{
        const res = await fetch(url);
        return res.json();
        
    } catch(err){
        throw new Error(`Error code ${err.status}`)
    }
}

const getWeatherInfo = async(place = 'Minsk') => {
    const result = await getResource(`${WEATHER_URI}?q=${place}&appid=${APP_ID}&lang=ru`)
    // console.log(result)
    return result;
}

getWeatherInfo()

const currentWeatherPicture = (temp) => {
    const currentPicture = document.querySelector('#weather-current');

    if(temp > 20){
        currentPicture.setAttribute('src', 'images/tropical.jpg')
    }
    else if(temp > 0 && temp < 30){
        currentPicture.setAttribute('src', 'images/fall.jpg')
    }
    else{
        currentPicture.setAttribute('src', 'images/winter.jpg')
    }
}


const renderWeatherApp = async() => {
    const currentPlace = document.querySelector('#place').value.trim();
    const data = await getWeatherInfo(currentPlace);
    // console.log(data)

    const currentTemp = document.querySelector('#current-temp')
    const currentWind = document.querySelector('#current-wind')
    const directionWind = document.querySelector('#direction-wind')
    const tempMin = document.querySelector('#temp-min');
    const tempMax = document.querySelector('#temp-max');
    const сurrentWeatherMess = document.querySelector('#сurrent-weather-mess')

    currentTemp.innerHTML = Math.round(data.main.temp - 273);
    currentWind.innerHTML = Math.ceil(data.wind.speed)

    directionWind.innerHTML = data.wind.gust
    tempMin.innerHTML = Math.round(data.main.temp_min - 273);
    tempMax.innerHTML = Math.round(data.main.temp_max - 273);
    сurrentWeatherMess.innerHTML = data.weather[0].description
    currentWeatherPicture(Math.round(data.main.temp - 273))
}

const searchBtn = document.querySelector('#get-info')

searchBtn.addEventListener('click', renderWeatherApp)