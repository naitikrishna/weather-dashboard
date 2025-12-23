# 🌦️ Smart Weather Dashboard

A real-time weather application built with Vanilla JS that adapts to your environment.

## 🚀 Key Features
- **Dynamic Theming:** Automatically switches to Dark Mode after sunset in the searched city.
- **Persistence:** Remembers your last 5 searches using browser `LocalStorage`.
- **Geolocation:** One-tap weather updates for your current coordinates.
- **Responsive Design:** Works on desktop, tablet, and mobile.
- Utilized the **Fetch API** with a try...catch architecture to manage asynchronous requests to the OpenWeatherMap REST endpoint.

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3 (Custom Variables), JavaScript (ES6+)
- **API:** OpenWeatherMap API
- **Deployment:** [Live Dashboard](https://naitikrishna.github.io/weather-dashboard/)

## 📸 How to Run
1. Clone the repository.
2. Open `index.html` in your browser.
3. Enter your OpenWeatherMap API key in `script.js`.

## Performance Optimization: Input Debouncing
* Implemented a **Custom Debounce Function** to limit API rate-consumption.
* Reduced redundant network overhead by delaying execution until the user completes their input string, optimizing for lower-bandwidth environments.

## 🔗 Live Demo
[View the Live Project Here](https://naitikrishna.github.io/weather-dashboard/)
