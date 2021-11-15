import "../../style/Shop.css";
import ItemCard from "./ItemCard";
import Pixel6 from "../../assets/pixel6.jpg";
import Pixel6Pro from "../../assets/pixel6pro.jpg";
import Pixel5a from "../../assets/pixel5a.jpg";
import S21Ultra from "../../assets/s21ultra.jpg";
import ZFold3 from "../../assets/zfold3.png";
import ZFlip3 from "../../assets/zflip3.png";
import iPhone13 from "../../assets/iphone13.png";
import iPhone13Pro from "../../assets/iphone13pro.jpg";
import iPhone13ProMax from "../../assets/iphone13promax.jpg";
import { v4 as uuidv4 } from "uuid";
import { Switch, Route, NavLink } from "react-router-dom";

const phonesList = [
	{ name: "Google Pixel 6", price: 599, image: Pixel6, brand: "Google" },
	{ name: "Google Pixel 6 Pro", price: 899, image: Pixel6Pro, brand: "Google" },
	{ name: "Google Pixel 5a", price: 449, image: Pixel5a, brand: "Google" },
	{ name: "Galaxy S21 Ultra", price: 1199, image: S21Ultra, brand: "Samsung" },
	{ name: "Galaxy Z Fold 3", price: 1799, image: ZFold3, brand: "Samsung" },
	{ name: "Galaxy Z Flip 3", price: 999, image: ZFlip3, brand: "Samsung" },
	{ name: "iPhone 13", price: 799, image: iPhone13, brand: "Apple" },
	{ name: "iPhone 13 Pro", price: 999, image: iPhone13Pro, brand: "Apple" },
	{
		name: "iPhone 13 Pro Max",
		price: 1099,
		image: iPhone13ProMax,
		brand: "Apple",
	},
];

function Shop({ onClick }) {
	return (
		<div className="shop-container">
			<div className="side-bar">
				<NavLink exact activeClassName="active-side-bar" to="/shop/">
					All
				</NavLink>
				<NavLink activeClassName="active-side-bar" to="/shop/google">
					Google
				</NavLink>
				<NavLink activeClassName="active-side-bar" to="/shop/samsung">
					Samsung
				</NavLink>
				<NavLink activeClassName="active-side-bar" to="/shop/apple">
					Apple
				</NavLink>
			</div>
			<Switch>
				<Route path="/shop/google">
					<div className="shop">
						{phonesList
							.filter((phone) => phone.brand === "Google")
							.map((phone) => (
								<ItemCard phone={phone} key={uuidv4()} onClick={onClick} />
							))}
					</div>
				</Route>
				<Route path="/shop/samsung">
					<div className="shop">
						{phonesList
							.filter((phone) => phone.brand === "Samsung")
							.map((phone) => (
								<ItemCard phone={phone} key={uuidv4()} onClick={onClick} />
							))}
					</div>
				</Route>
				<Route path="/shop/apple">
					<div className="shop">
						{phonesList
							.filter((phone) => phone.brand === "Apple")
							.map((phone) => (
								<ItemCard phone={phone} key={uuidv4()} onClick={onClick} />
							))}
					</div>
				</Route>
				<Route path="/shop/">
					<div className="shop">
						{phonesList.map((phone) => (
							<ItemCard phone={phone} key={uuidv4()} onClick={onClick} />
						))}
					</div>
				</Route>
			</Switch>
		</div>
	);
}

export default Shop;
