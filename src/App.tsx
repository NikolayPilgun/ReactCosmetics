import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Slider from "./components/slider/Slider";
import "./styles/index.scss";

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<Slider />
		</div>
	);
}

export default App;
