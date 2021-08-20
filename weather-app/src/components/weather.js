function Weather({ current }) {
  return (
    <div class="weather-container">
      <div class="weather-box">
        <h1> Wind </h1>
        <p>{current.gust_kph + "km/h"}</p>
      </div>
      <div class="weather-box">
        <h1> Index UV </h1>
        <p>{current.uv}</p>
      </div>
      <div class="weather-box">
        <h1> Temperature </h1>
        <p>{current.temp_c + "°"}</p>
      </div>
      <div class="weather-box">
        <h1> Humidity</h1>
        <p>{current.humidity + "%"} </p>
      </div>
    </div>
  );
}
export default Weather;
