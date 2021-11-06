import { Link, NavLink } from "react-router-dom";
import "../../style/NavBar.css";

function NavBar() {
	return (
		<div className="nav">
			<Link to="/" className="logo">
				<h1>Connect</h1>
			</Link>
			<nav>
				<ul>
					<li>
						<NavLink to="/" activeClassName="active">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/shop" activeClassName="active">
							Shop
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default NavBar;
