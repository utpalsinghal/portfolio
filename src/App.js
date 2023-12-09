import "./styles/App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
	return (
		<div className='App'>
			<Header />
			<Home />
			<About />
			<Projects />
			<Experience />
			<Contact />
		</div>
	);
}

export default App;
