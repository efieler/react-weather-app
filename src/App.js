import "./App.css";
import Header from "./Header";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Header />
        <CurrentWeather defaultCity="Dallas" />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
