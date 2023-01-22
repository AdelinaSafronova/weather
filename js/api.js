//функция по работе с данными о погоде. Для данных используйте API Openweathermap
//async - асинхронная функция
export const getWeatherData = async (city) => {
    //619750cdc925bc67eefe6a977db7da2d - ключ API в ЛК
    try {

        //url из Current weather data
        //передаем параметр по названию города q=${city}. долгота и широта нам здесь не нужна.их я удалила. в appid вставили ключ API. в url дописали возможность восприятия русского языка lang=ru.units=metric
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=619750cdc925bc67eefe6a977db7da2d&lang=ru&units=metric` //что бы получать цельсий, используем units=metric
            );   //будем делать запрос с помощью метода fetch.может отправлять сетевые запросы на сервер и подгружать новую информацию по мере необходимости
                                      //дожидаемся получения данных о погоде и возвращаем response.json
        return await response.json(); //return await вместе означает, что мы дважды ждем одной и той же операции — первый раз в асинхронной функции и затем в снова, когда асинхронная функция вызывается в разных частях код
    } catch (error) {
        console.error(error);
    }
}