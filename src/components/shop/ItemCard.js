import "../../style/ItemCard.css";

function ItemCard({ phone, onClick }) {
	return (
		<div className="item-card">
			<img src={phone.image} alt={phone.name} />
			<p className="item-name">{phone.name}</p>
			<p className="item-price">{`$${phone.price}`}</p>
			<button onClick={() => onClick(phone)}>Add to cart</button>
		</div>
	);
}

export default ItemCard;
