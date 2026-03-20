import React, { useState } from "react";
import { useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { Light } from "./Light";

//create your first component
const Home = () => {
	const [currentActiveLight, setCurrentActiveLight] = useState("yellow");
	const colors = ["red", "yellow", "green"];

	useEffect(() => {
		console.log(">>> 😎 running side effect, current light is", currentActiveLight);
		setTimeout(() => {
			console.log(">>> 🧙🏽‍♂️ running interval callback, current light is", currentActiveLight);
			// setState((previous) => value)
			setCurrentActiveLight((currentColor) => {
				if (currentColor === "red") {
					return "yellow";
				}
				if (currentColor === "yellow") {
					return "green";
				}
				return "red";
			});
		}, 5000);
	}, [currentActiveLight]);

	return (
		<div className="container">
			<div className="row justify-content-center align-items-center">
				<div className="d-flex flex-column align-items-center">
					<div className="vertical-support"></div>
					<div className="traffic-light">
						{colors.map((color, index) => 
							<Light key={index} color={color} on={currentActiveLight === color} setCurrentActiveLight={setCurrentActiveLight}  />
						
						)};
					</div>
				</div>
			</div>

		</div>
	);
};

export default Home;