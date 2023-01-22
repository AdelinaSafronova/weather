                                            //функция app будет входной точкой. это будет асинхронная функция

import { getWeatherData } from "./api.js";  //нужно добавить js
import { createContent } from "./appContent.js";
import { createHeader } from "./appHeader.js";

const app = async () => {
                                                     //убедимся поучаем ли мы погоду вообще
    const weather = await getWeatherData(JSON.parse(localStorage.getItem('city')) || 'Москва');  //по умолчанию будет стоять Москва, но если пользователь уже был на сайте и получал погоду по своему городу,то localStorage.getItem('city'))
    const header = createHeader(weather.name); //создали инстанс
    const content = createContent(weather);  //appContent.js
    document.body.append(header, content); //добавили в тело header и content
    console.log(weather);
}
app();