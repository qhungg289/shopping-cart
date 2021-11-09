import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./style/App.css";
import NavBar from "./components/navigation/NavBar";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Cart from "./components/shop/Cart";
import { useState } from "react";

function App() {
	const [selectedItems, setSelectedItems] = useState([]);

	return (
		<BrowserRouter>
			<div className="App">
				<NavBar itemsAmount={selectedItems.length} />
				<Switch>
					<Route path="/shop">
						<Shop />
					</Route>
					<Route path="/cart">
						<Cart selectedItems={selectedItems} />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
