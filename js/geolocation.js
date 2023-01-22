import { getWeatherData } from "./api.js";
import { resetWeatherContent } from "./helper.js";

export const handleWeatherByGeolocation = () => {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }
    const success = async(pos) => {
        const crd = pos.coords;

        const response = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&lang=ru&apiKey=ffeb1ad29127497b9083875e461fa72d`); //ключ и url из сайта https://myprojects.geoapify.com/
        const result = await response.json();
        const weather = await getWeatherData(result.features[0].properties.city);
        resetWeatherContent(result.features[0].properties.city, weather) //сначала передаем наш город,потом погоду
    }
    const error = (err) => {
        console.log(err.code + '' + err.message);
    } 
    navigator.geolocation.getCurrentPosition(success,error, options);
}