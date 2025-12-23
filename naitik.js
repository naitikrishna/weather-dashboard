const apiKey = '0bade5601caec8b98016ed6c244c2aec'; 

// Event Listeners
document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) fetchWeather(`q=${city}`);
});

document.getElementById('geoBtn').addEventListener('click', getLocation);

async function fetchWeather(query) {
    const url = `https://api.openweathermap.org/data/2.5/weather?${query}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === "404") return alert("City not found!");
        
        updateUI(data);
        saveToRecent(data.name);
    } catch (err) {
        console.error("Fetch error:", err);
    }
}

function updateUI(data) {
    const display = document.getElementById('weatherDisplay');
    display.style.display = 'block';
    
    document.getElementById('cityName').innerText = data.name;
    document.getElementById('temp').innerText = `${Math.round(data.main.temp)}°C`;
    document.getElementById('desc').innerText = data.weather[0].description;
    document.getElementById('humidity').innerText = `${data.main.humidity}%`;
    document.getElementById('wind').innerText = `${data.wind.speed} km/h`;
    document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    // Smart Night Mode Logic
    const isNight = Date.now() / 1000 > data.sys.sunset || Date.now() / 1000 < data.sys.sunrise;
    document.body.classList.toggle('dark-mode', isNight);
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(pos => {
        fetchWeather(`lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`);
    });
}

function saveToRecent(city) {
    let recents = JSON.parse(localStorage.getItem('recentCities')) || [];
    if (!recents.includes(city)) {
        recents.push(city);
        if (recents.length > 5) recents.shift();
        localStorage.setItem('recentCities', JSON.stringify(recents));
        renderRecents();
    }
}

function renderRecents() {
    const container = document.getElementById('recentSearches');
    const recents = JSON.parse(localStorage.getItem('recentCities')) || [];
    container.innerHTML = recents.map(city => 
        `<button class="chip" onclick="fetchWeather('q=\'${city}\'')">${city}</button>`
    ).join('');
}

window.onload = renderRecents;