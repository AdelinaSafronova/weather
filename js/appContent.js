import { directionOfwWind, capitalizeFirstLetter } from "./helper.js";

export const createContent = (data) => {
    const main = document.createElement('main');
    const section = document.createElement('section');
    const container = document.createElement('div');
    const inner = document.createElement('div');
    const iconBloc = document.createElement('img');
    const temperature = document.createElement('h2');
    const units = document.createElement('span'); //значок градуса
    const description = document.createElement('p'); //преимущественно солнечно-блок
    const weatherInfo = document.createElement('div');  //доп.данные о погоде
    const weatherInfoList = document.createElement('ul');  //создаю список и элементы:влажность,давление и.т.д
    const weatherInfoWind = document.createElement('li');
    const weatherInfoPressure = document.createElement('li');
    const weatherInfoHumidity = document.createElement('li');
    const weatherInfoClouds = document.createElement('li');

    section.classList.add('weather');
    container.classList.add('container', 'weather__container');
    inner.classList.add('weather__inner');
    iconBloc.classList.add('weather__icon');
    temperature.classList.add('weather__temperature');
    units.classList.add('weather__units');
    description.classList.add('weather__description');
    weatherInfo.classList.add('weather-info');
    weatherInfoList.classList.add('weather-info__list');
    weatherInfoWind.classList.add('weather-info__item');
    weatherInfoHumidity.classList.add('weather-info__item');
    weatherInfoPressure.classList.add('weather-info__item');
    weatherInfoClouds.classList.add('weather-info__item');

    temperature.textContent = Math.floor(data.main.temp); //округление температуры. температура в поле main
    description.textContent = capitalizeFirstLetter(data.weather[0].description);
    iconBloc.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    units.textContent = 'o';
//создает title
    const createWeatherItemTitle = (text) => {
        const span = document.createElement('span');
        span.textContent = text;

        return span;
    }
//создает контент
    const createWeatherItemContent = (text) => {
        const p = document.createElement('p');
        p.textContent = text;

        return p;
    }


    weatherInfoWind.append(
        createWeatherItemTitle('Ветер'),
        createWeatherItemContent(data.wind.speed + ' м/с, ' + directionOfwWind(data.wind.deg))
    );

    weatherInfoPressure.append(
        createWeatherItemTitle('Давление'),
        createWeatherItemContent(data.main.pressure + ' мм рт. ст.')
    );

    weatherInfoHumidity.append(
        createWeatherItemTitle('Влажность'),
        createWeatherItemContent(data.main.humidity + ' %')
    );

    weatherInfoClouds.append(
        createWeatherItemTitle('Облачность'),
        createWeatherItemContent(data.clouds.all + ' %')
    );

    main.append(section);
    section.append(container);
    container.append(inner, description, weatherInfo);
    inner.append(iconBloc, temperature, units);
    weatherInfo.append(weatherInfoList);
    weatherInfoList.append(     //элементы списка
        weatherInfoWind, 
        weatherInfoPressure, 
        weatherInfoHumidity, 
        weatherInfoClouds
    );

    return main; //возврашаем весь контент
}