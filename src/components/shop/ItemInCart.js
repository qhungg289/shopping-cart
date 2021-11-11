import "../../style/ItemInCart.css";
import { useState } from "react";

function ItemInCart({ phone }) {
	const [amount, setAmount] = useState(1);

	return (
		<div className="item-in-cart">
			<div className="item-image-container">
				<img src={phone.image} alt={phone.name} />
			</div>
			<div className="item-info-container">
				<p>{phone.name}</p>
				<p>{`$${phone.price}`}</p>
				<label>
					Amount:
					<input
						type="number"
						name="phones-amount"
						id="phones-amount"
						value={amount}
						min="0"
						onChange={(e) => setAmount(e.target.value)}
					/>
				</label>
			</div>
		</div>
	);
}

export default ItemInCart;
