import React from "react";
import "../Styles/Services.css";
import { FaShoppingCart, FaCode, FaThumbsUp } from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";

function Services() {
	return (
		<div className="services">
			<div className="services__Section">
				<div className="section__Left">
					<div className="services__textContainer">
						<div className="topText">
							<h4 className="service__intro">What we do</h4>
							<h1 className="service__title">Our Services</h1>
						</div>

						<div className="servicesContainer">
							<div className="servicesCard">
								<div className="card__Icon">
									<FaShoppingCart />
								</div>

								<h2 className="card__Title">Online Marketing</h2>
								<p className="card__description">
									The internet has transformed business marketing. It is the
									core of your marketing.
								</p>
							</div>
							<div className="servicesCard">
								<div className="card__Icon">
									<FaCode />
								</div>
								<h2 className="card__Title">Web Development</h2>
								<p className="card__description">
									Proving the power of good content is professional services
									that we can offer.
								</p>
							</div>{" "}
							<div className="servicesCard">
								<div className="card__Icon">
									<BsFillGrid1X2Fill />
								</div>
								<h2 className="card__Title">Web Design</h2>
								<p className="card__description">
									Building and launching your website is just the start. It must
									works properly.
								</p>
							</div>{" "}
							<div className="servicesCard">
								<div className="card__Icon">
									<FaThumbsUp />
								</div>
								<h2 className="card__Title">SEO</h2>
								<p className="card__description">
									95% of the google searches traffic goes to the site that
									appears at number first.
								</p>
							</div>
						</div>
					</div>
				</div>
				<img
					className="services__float"
					src="https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=710&q=80"
				></img>
			</div>
		</div>
	);
}

export default Services;
