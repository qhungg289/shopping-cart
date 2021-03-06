import { HashRouter, Switch, Route } from "react-router-dom";
import "./style/App.css";
import NavBar from "./components/navigation/NavBar";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Cart from "./components/shop/Cart";
import { useState } from "react";

function App() {
	const [selectedPhones, setSelectedPhones] = useState([]);

	function addPhoneToCart(phone) {
		if (
			!selectedPhones.some(
				(prevSelectedPhone) => phone.name === prevSelectedPhone.name
			)
		) {
			setSelectedPhones([...selectedPhones, { ...phone, amount: 1 }]);
		} else {
			let tempSelectedPhone = [...selectedPhones];
			let tempPhone;

			for (let i = 0; i < tempSelectedPhone.length; i++) {
				if (phone.name === tempSelectedPhone[i].name) {
					tempPhone = { ...tempSelectedPhone[i] };
					tempPhone.amount++;
					tempSelectedPhone[i] = tempPhone;
					break;
				}
			}

			setSelectedPhones(tempSelectedPhone);
		}
	}

	function removePhoneFormCart(phone) {
		let tempSelectedPhone = [...selectedPhones];
		const index = tempSelectedPhone.indexOf(phone);

		tempSelectedPhone.splice(index, 1);

		setSelectedPhones(tempSelectedPhone);
	}

	function handleAmountChange(phone, value) {
		let tempSelectedPhone = [...selectedPhones];
		let tempPhone;
		const index = tempSelectedPhone.indexOf(phone);

		tempPhone = { ...tempSelectedPhone[index] };
		tempPhone.amount = value;
		tempSelectedPhone[index] = tempPhone;

		setSelectedPhones(tempSelectedPhone);
	}

	return (
		<HashRouter>
			<div className="App">
				<NavBar itemsAmount={selectedPhones.length} />
				<Switch>
					<Route path="/shop">
						<Shop onClick={addPhoneToCart} />
					</Route>
					<Route path="/cart">
						<Cart
							selectedPhones={selectedPhones}
							handleCheckout={() => setSelectedPhones([])}
							onChange={handleAmountChange}
							onClick={removePhoneFormCart}
						/>
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</HashRouter>
	);
}

export default App;
