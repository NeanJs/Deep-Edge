import React from "react";
import "../Styles/Home.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
function Home() {
	return (
		<div className="homePage">
			<img
				className="halfBg"
				src="https://images.unsplash.com/photo-1568359415889-fbe562be5ea1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
				alt="halfBG"
			/>
			<div className="homePage__navigation">
				<div className="logoContainer">
					<h4 className="logo">deep|Growing Together</h4>
					{/* <img className="brandLogo" src="" alt="" /> */}
				</div>
				<ul className="socialMedia__container">
					<a
						href="https://www.facebook.com/nijan.adhikarii"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebookF />
					</a>

					<a
						href="https://www.instagram.com/nijan.adhikari"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram />
					</a>

					<a
						href="https://www.twitter.com/iamNeann"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaTwitter />
					</a>
				</ul>
			</div>
			<div className="homePage__main">
				<div className="main__Contents">
					<h5 className="content__intro">We are creative</h5>
					<h2 className="content__title">Digital Agency</h2>
					<p className="content__description">
						We pride ourselves in great work ethic, intergrity and providing
						end-results.
					</p>
					<button className="getStarted">Get Started</button>
				</div>
			</div>
		</div>
	);
}

export default Home;
