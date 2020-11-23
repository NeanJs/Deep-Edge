import React from "react";
import "../Styles/About.css";

function About() {
	return (
		<div className="about">
			<div className="section__left">
				<div className="textContainer">
					<h4 className="about__intro">Who we are</h4>
					<h1 className="about__title">About Agency</h1>
					<p className="about__description">
						We are deep group. Our Company philosophy is to create the kind of
						website that most businessess want: easy to find, stylish and
						appealing, quick loadiing, mobile responsive and easy to buy from.
					</p>
					<br />
					<p className="about__description">
						Trained as industries designers we have a deep-rooted beilief in
						rational function and sustainable aesthetics. Our methodical
						approach is focused on revealing the essence of each design
						challenge to allow us to creat holistic and durable solutions.
					</p>
				</div>
				<img
					src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
					alt=""
					className="floatingImg"
				/>
			</div>
		</div>
	);
}

export default About;
