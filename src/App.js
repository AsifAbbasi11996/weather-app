// import logo from './logo.svg';
import './App.css';
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButton from './components/TopButton';
import Inputs from './components/Inputs';
import TimeandLoaction from './components/TimeandLoaction';
import TemperatureandDetails from './components/TemperatureandDetails';
import Forecast from './components/Forecast';
import getWeatherData from './services/weatherServices';


function App() {

  const fetchWeather = async () => {
    const data = await getWeatherData('weather', { q: "mumbai" });
    console.log(data);
  };

  fetchWeather();

  return (
    <div className="max-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <UilReact />
      <TopButton />
      <Inputs />
      <TimeandLoaction />
      <TemperatureandDetails />
      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />
      

    </div>
  );
}

export default App;
