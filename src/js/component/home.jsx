import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = ({segundos}) => {
	let string = segundos.toString();
	let unidad = string[string.length -1]
	let decena = string[string.length -2]
	let centena = string[string.length -3]
	let mil = string[string.length -4]

	return (
		<div className="text-center">
			<button className="btn btn-primary"><i className="fa-solid fa-clock"></i></button>
			<button className="btn btn-primary">{mil===undefined? "0": mil}</button>
			<button className="btn btn-primary">{centena===undefined? "0": centena}</button>
			<button className="btn btn-primary">{decena===undefined? "0": decena}</button>
			<button className="btn btn-primary">{unidad===undefined? "0": unidad}</button>
		</div>
	);
};

export default Home;
