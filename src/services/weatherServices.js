const API_KEY ="91fecaf40083dd2007f4ea4f8f36d717";
const BASE_URL = "https://api.openweathermap.org/data/3.0";
// const BASE_URL = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=91fecaf40083dd2007f4ea4f8f36d717";


const getWeatherData = (infoType, seacrhParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...seacrhParams, appid:API_KEY });

    return fetch(url)
    .then((res) => res.json())
};

const getFormattedWeatherData = async (seacrhParams) => {
    const formattedCurrnetWeather = await getWeatherData('weather')
}