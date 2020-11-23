import React from "react";
import "../Styles/Team.css";
import {
	FaFacebook,
	FaFacebookF,
	FaInstagram,
	FaTwitter,
} from "react-icons/fa";

function Team() {
	return (
		<div className="team">
			<div className="team__wrapper">
				<div className="team__headerContainer">
					{" "}
					<h4 className="team__title">Meet the staff</h4>
					<h1 className="team__header">our team</h1>
				</div>

				<div className="team__Container">
					<div className="teamCard">
						<img
							className="team__img"
							src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
						/>
						<div className="infoCard">
							<div className="titleJob">
								<h3 className="name">Elvis Griffin </h3>
								<h4 className="descriptionJob">Manager</h4>
							</div>
							<div className="socialLinks">
								<FaFacebookF />
								<FaInstagram />
								<FaTwitter />
							</div>
						</div>
					</div>{" "}
					<div className="teamCard">
						<img
							className="team__img"
							src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
						/>
						<div className="infoCard">
							<div className="titleJob">
								<h3 className="name">Jennie Lacy</h3>
								<h4 className="descriptionJob">UI/UX Designer</h4>
							</div>
							<div className="socialLinks">
								<FaFacebookF />
								<FaInstagram />
								<FaTwitter />
							</div>
						</div>
					</div>
					<div className="teamCard">
						<img
							className="team__img"
							src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODB8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
						/>
						<div className="infoCard">
							<div className="titleJob">
								<h3 className="name">David Stacey</h3>
								<h4 className="descriptionJob">Software Engineer</h4>
							</div>
							<div className="socialLinks">
								<FaFacebookF />
								<FaInstagram />
								<FaTwitter />
							</div>
						</div>
					</div>{" "}
					<div className="teamCard">
						<img
							className="team__img"
							src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
						/>
						<div className="infoCard">
							<div className="titleJob">
								<h3 className="name">Elvis Jennings</h3>
								<h4 className="descriptionJob">Product Manager</h4>
							</div>
							<div className="socialLinks">
								<FaFacebookF />
								<FaInstagram />
								<FaTwitter />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Team;
