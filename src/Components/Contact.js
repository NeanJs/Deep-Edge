import React from "react";
import { FaLandmark, FaMailBulk, FaPhone } from "react-icons/fa";
import "../Styles/Contact.css";
function Contact() {
	return (
		<div className="contact">
			<div className="contact__sections">
				<div className="contact__left">
					<div className="header__Container">
						<h3 className="title">Keep in touch</h3>
						<h1 className="header">Contact Us</h1>
					</div>
					<div className="inputFieldsContainer">
						<input type="text" placeholder="Name" />
						<input type="text" placeholder="Email" />
						<input type="text" placeholder="Subject" />
						<textarea type="text" placeholder="Message" />
						<button className="btn">Send Message</button>
					</div>
				</div>
				<div className="contact__right">
					<img className="maps" src={require("../images/maps.JPG")} alt="map" />
					<div className="contactDetails">
						<div className="phone">
							<h4 className="titleContact">
								<FaPhone />
								Phones
							</h4>
							<h5 className="descriptionContact">1234567879</h5>
							<h5 className="descriptionContact">1234567879</h5>
						</div>
						<div className="Emails">
							<h4 className="titleContact">
								<FaMailBulk /> Emails
							</h4>
							<h5 className="descriptionContact">company@mail.com</h5>
							<h5 className="descriptionContact">mail@company.com</h5>
						</div>
						<div className="Address">
							<h4 className="titleContact">
								<FaLandmark />
								Address
							</h4>
							<h5 className="descriptionContact">Stree 12, Dallas, Texas</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
