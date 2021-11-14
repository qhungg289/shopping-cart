import "../../style/Cart.css";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import ItemInCart from "./ItemInCart";

function Cart({ selectedPhones, onChange, onClick }) {
	const [totalCheckout, setTotalCheckout] = useState(0);

	useEffect(() => {
		setTotalCheckout(0); // set totalCheckout back to 0
		selectedPhones.forEach((phone) => {
			setTotalCheckout(
				(prevTotalCheckout) => prevTotalCheckout + phone.price * phone.amount
				// Multiply the price with the amount and then add to the totalCheckout
			);
		});
	}, [selectedPhones]); // Run when selectedPhones update

	return (
		<div className="cart">
			<div className="checkout-container">
				<p className="total-checkout">{`Total: $${totalCheckout}`}</p>
				<button>Checkout</button>
			</div>
			<div className="selected-phones-container">
				{selectedPhones.map((phone) => (
					<ItemInCart
						phone={phone}
						key={uuidv4()}
						onChange={onChange}
						onClick={onClick}
					/>
				))}
			</div>
		</div>
	);
}

export default Cart;
