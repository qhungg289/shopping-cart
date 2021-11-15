import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../../style/NavBar.css";

function NavBar({ itemsAmount }) {
	return (
		<div className="nav">
			<Link to="/" className="logo">
				<h1>Connect</h1>
			</Link>
			<ul>
				<li>
					<NavLink exact to="/" activeClassName="active">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/shop" activeClassName="active">
						Shop
					</NavLink>
				</li>
				<li>
					<NavLink exact to="/cart">
						<div className="cart-nav">
							<FontAwesomeIcon icon={faShoppingCart} />
							<span>{itemsAmount}</span>
						</div>
					</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default NavBar;
