const WeekForecast = ({ data }) => {
  return (
    <div className="flex items-center gap-6">
      {data.forecast
        ? data.forecast.forecastday.map((day, index) => (
            <div key={index} className="bg-white/40 p-2 text-center rounded-lg">
              <p>{new Date(day.date).toLocaleString("en-US", { weekday: "short" })}</p>
              <img className="forecast-icon" src={day.day.condition.icon} alt={day.day.condition.text} />
              <div className="forecast-temps">
                <p className="forecast-temp-high">H {day.day.maxtemp_f.toFixed()}°</p>
                <p className="forecast-temp-low">L {day.day.mintemp_f.toFixed()}°</p>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default WeekForecast;
