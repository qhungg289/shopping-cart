import "../../style/Cart.css";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import ItemInCart from "./ItemInCart";

function Cart({ selectedPhones }) {
	const [totalCheckout, setTotalCheckout] = useState(0);

	useEffect(() => {
		selectedPhones.forEach((phone) => {
			setTotalCheckout(
				(prevTotalCheckout) => prevTotalCheckout + phone.price * phone.amount
			);
		});
	}, [selectedPhones]);

	return (
		<div className="cart">
			<p className="total-checkout">{`Total: $${totalCheckout}`}</p>
			<div>
				{selectedPhones.map((phone) => (
					<ItemInCart phone={phone} key={uuidv4()} />
				))}
			</div>
		</div>
	);
}

export default Cart;
