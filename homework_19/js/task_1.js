const requestBtn = document.getElementById("request-forecast");
const dateInfo = document.getElementById('date');
const tempInfo = document.getElementById('temp');
const tempFeelsLike = document.getElementById('temp-feels');
const description = document.getElementById('description');
const humiduty = document.getElementById('humidity');
const wind = document.getElementById('wind');

//Getting different formats of date to display on widget
const datee = new Date().toString();
const dayText = datee.slice(0, 4);
const monthText = datee.slice(4, 7);
const dayNumber = datee.slice(8, 10);
const year = datee.slice(11, 15);
const currentTime = datee.slice(16, 24);

// Capitalize first letter of desired field retrieved from server
const capitalizeString = (string) => {
    if (string.length > 0) return string[0].toUpperCase() + string.slice(1);
};

const fetchData = async (lat, long, apiKey) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
        );
        if (!response.ok) throw new Error(`Request error: ${response.status}`);

        return await response.json();
    } catch (error) {
        console.error(`Error in fetchData: ${error.message}`);
        throw error;
    }
};

requestBtn.addEventListener("click", async () => {
    try {
        const apiKey = "2e351b6c702651f02d8b29b561c3774e";
        const lat = 1.290270;
        const lon = 103.851959;
        const weatherJson = await fetchData(lat, lon, apiKey);

        const weatherDescr = capitalizeString(weatherJson.weather[0].description);
        const weatherTemp = Number(weatherJson.main.temp).toFixed();
        const weatherTempFeelsLike = Number(weatherJson.main.feels_like).toFixed();
        const weatherHumid = weatherJson.main.humidity;
        const weatherWind = weatherJson.wind.speed;
        const city = weatherJson.name;

        dateInfo.textContent = `${monthText} ${dayNumber}, ${year} - ${dayText}`;
        tempInfo.textContent = `Temperature: ${weatherTemp} C`;
        tempFeelsLike.textContent = `Feels like ${weatherTempFeelsLike} C`;
        description.textContent = `Weather in ${city} now: ${weatherDescr}`;
        humiduty.textContent = `Humidity: ${weatherHumid}%`;
        wind.textContent = `Wind: ${weatherWind} m/s`;
    } catch (error) {
        console.error(`Error in click event handler: ${error.message}`);
    }
});