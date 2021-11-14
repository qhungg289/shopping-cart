import "../../style/Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function Modal({ onClick, totalCost }) {
	return (
		<div className="modal">
			<div className="modal-content">
				<FontAwesomeIcon className="icon" icon={faCheckCircle} />
				<p>
					{`Your order will cost `}
					<b>{`$${totalCost}`}</b>
				</p>
				<p>Thank you for choosing us 😀!</p>
				<button className="close-button" onClick={onClick}>
					Done
				</button>
			</div>
		</div>
	);
}

export default Modal;
