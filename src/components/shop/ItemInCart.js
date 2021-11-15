import "../../style/ItemInCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function ItemInCart({ phone, onChange, onClick }) {
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
						value={phone.amount}
						min="0"
						onChange={(e) => onChange(phone, e.target.value)}
					/>
				</label>
				<span onClick={() => onClick(phone)}>
					<FontAwesomeIcon icon={faTrashAlt} />
					<p className="remove-button">Remove</p>
				</span>
			</div>
		</div>
	);
}

export default ItemInCart;
