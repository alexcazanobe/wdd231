export  async function loadWeather() {
    const apiKey ='dde0b4ba2227f1d4c5bb6abb85dfe0dd';
    const lat = -38.7196;
    const lon = -62.2724;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    try {

        // --- actually weather ---
        const response = await fetch(url);
        if (!response.ok) throw new Error('Weather fetch failed');
        const data = await response.json();

        document.getElementById('current-temp').innerHTML = `${data.main.temp}&deg;C`;
        
        const icon = data.weather[0].icon;
        const desc = data.weather[0].description;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        document.getElementById('weather-icon').alt = desc;
        document.getElementById('weather-desc').textContent = desc;

        document.getElementById('humidity').textContent = `${data.main.humidity}%`;

        const sunrise = new Date(data.sys.sunrise * 1000);
        const sunset = new Date(data.sys.sunset * 1000);
        document.getElementById('sunrise').textContent = sunrise.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        document.getElementById('sunset').textContent = sunset.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });  

        // --- forecast ---
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        const forecastResponse = await fetch(forecastUrl);
        if (!forecastResponse.ok) throw new Error('Forecast fetch failed');
        const forecastData = await forecastResponse.json();

        const daily = {};
        forecastData.list.forEach(item => {
            const date = item.dt_txt.split(' ')[0];
            if (!daily[date] && item.dt_txt.includes('12:00:00')) {
                daily[date] = item;
            }
        });

        const days = Object.keys(daily)
        if (days.length >= 3) {
            document.getElementById('forecast-today').innerHTML = `${Math.round(daily[days[0]].main.temp)}&deg;C, ${daily[days[0]].weather[0].description}`;
            document.getElementById('forecast-tomorrow').innerHTML = `${Math.round(daily[days[1]].main.temp)}&deg;C, ${daily[days[1]].weather[0].description}`;
            document.getElementById('forecast-next').innerHTML = `${Math.round(daily[days[2]].main.temp)}&deg;C, ${daily[days[2]].weather[0].description}`;
        }

    } catch (error) {
        console.error('Error loading weather:',error);
    }

        
    }

