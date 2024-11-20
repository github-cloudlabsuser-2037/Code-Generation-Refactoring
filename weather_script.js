const fetch = require('node-fetch');

const API_KEY = '81666199fe30e191bd70f701b2b0ff34'; // Reemplaza con tu clave de API
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather(city) {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error al recuperar los datos del clima');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function displayWeather(city) {
    const weatherData = await getWeather(city);
    if (weatherData) {
        console.log(`El clima en ${city}:`);
        console.log(`Temperatura: ${weatherData.main.temp}°C`);
        console.log(`Humedad: ${weatherData.main.humidity}%`);
        console.log(`Descripción: ${weatherData.weather[0].description}`);
    }
}

// Ejemplo de uso
displayWeather('Madrid');