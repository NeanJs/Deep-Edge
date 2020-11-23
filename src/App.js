import React from "react";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Team from "./Components/Team";
function App() {
	return (
		<div className="app">
			<Home />
			<About />
			<Services />
			<Portfolio />
			<Team />
			<Contact />
		</div>
	);
}

export default App;
