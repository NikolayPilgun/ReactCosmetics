import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Slider from "./components/slider/Slider";
import Virtual from "./components/virtual/Virtual";
import "./styles/index.scss";

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<Slider />
			<Virtual />
			<Products />
		</div>
	);
}

export default App;
