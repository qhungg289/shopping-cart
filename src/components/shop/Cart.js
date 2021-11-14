import "../../style/Cart.css";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import ItemInCart from "./ItemInCart";
import Modal from "../misc/Modal";

function Cart({ selectedPhones, onChange, onClick, handleCheckout }) {
	const [totalCheckout, setTotalCheckout] = useState(0);
	const [isCheckout, setIsCheckout] = useState(false);

	useEffect(() => {
		setTotalCheckout(0);
		selectedPhones.forEach((phone) => {
			setTotalCheckout(
				(prevTotalCheckout) => prevTotalCheckout + phone.price * phone.amount
			);
		});
	}, [selectedPhones]);

	return (
		<div className="cart">
			<div className="checkout-container">
				<p className="total-checkout">{`Total: $${totalCheckout}`}</p>
				<button onClick={() => setIsCheckout(!isCheckout)}>Checkout</button>
			</div>
			<div className="selected-phones-container">
				{selectedPhones.length !== 0 ? (
					selectedPhones.map((phone) => (
						<ItemInCart
							phone={phone}
							key={uuidv4()}
							onChange={onChange}
							onClick={onClick}
						/>
					))
				) : (
					<p className="empty-cart-msg">It's kinda empty in here right now!</p>
				)}
			</div>
			{isCheckout && (
				<Modal
					totalCost={totalCheckout}
					onClick={() => {
						setIsCheckout(!isCheckout);
						handleCheckout();
					}}
				/>
			)}
		</div>
	);
}

export default Cart;
