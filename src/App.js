import "./App.css";
import Header from "./Header";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Search from "./Search";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Header />
        <CurrentWeather />
        <Forecast />
        <Search />
        <Footer />
      </div>
    </div>
  );
}
