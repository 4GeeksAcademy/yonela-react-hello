import React from "react";
import Navbar from "./navbar"
import Header from "./header";
import Galeria from "./galeria";
import Footer from "./footer";

const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Header/>
			<Galeria/>
			<Footer/>

		</div>
	);
};

export default Home;
