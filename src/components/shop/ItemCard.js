import "../../style/ItemCard.css";

function ItemCard({ image, name, price, onClick }) {
	return (
		<div className="item-card">
			<img src={image} alt={name} />
			<p className="item-name">{name}</p>
			<p className="item-price">{`$${price}`}</p>
			<button onClick={() => console.log(name)}>Add to cart</button>
		</div>
	);
}

export default ItemCard;
