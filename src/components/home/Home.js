import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="home">
			<h1>Tap into your imagination</h1>
			<p>
				With the very best quality products and exceptional warranty policies.
				You can put your trust in us for take care of your need for a good
				smartphone.
			</p>
			<Link to="/shop">
				<button>View our products</button>
			</Link>
		</div>
	);
}

export default Home;
