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

const phonesList = [
	{ name: "Google Pixel 6", price: 599, image: Pixel6 },
	{ name: "Google Pixel 6 Pro", price: 899, image: Pixel6Pro },
	{ name: "Google Pixel 5a", price: 449, image: Pixel5a },
	{ name: "Galaxy S21 Ultra", price: 1199, image: S21Ultra },
	{ name: "Galaxy Z Fold 3", price: 1799, image: ZFold3 },
	{ name: "Galaxy Z Flip 3", price: 999, image: ZFlip3 },
	{ name: "iPhone 13", price: 799, image: iPhone13 },
	{ name: "iPhone 13 Pro", price: 999, image: iPhone13Pro },
	{ name: "iPhone 13 Pro Max", price: 1099, image: iPhone13ProMax },
];

function Shop({ onClick }) {
	return (
		<div className="shop">
			{phonesList.map((phone) => (
				<ItemCard phone={phone} key={uuidv4()} onClick={onClick} />
			))}
		</div>
	);
}

export default Shop;
