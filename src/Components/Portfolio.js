import React from "react";
import "../Styles/Portfolio.css";

function Portfolio() {
	return (
		<div className="portfolio">
			<div className="portfolio__wrapper">
				<div className="portfolio__headerContainer">
					{" "}
					<h4 className="portfolio__title">our works</h4>
					<h1 className="portfolio__header">Portfolio</h1>
				</div>

				<div className="projects__Container">
					<div className="project">
						<img
							className="project__img"
							src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODV8fGlkZWF8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
						/>
					</div>
					<div className="project">
						<img
							className="project__img"
							src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGlkZWF8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
						/>
					</div>
					<div className="project">
						<img
							className="project__img"
							src="https://images.unsplash.com/photo-1494386346843-e12284507169?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGlkZWF8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
						/>
					</div>
					<div className="project">
						<img
							className="project__img"
							src="https://images.unsplash.com/photo-1529310399831-ed472b81d589?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8aWRlYXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
