import { removeElement, editQuantity, selectedList } from "../store/storeSlice";
import { useDispatch, useSelector } from "react-redux";
import type { shopItemType } from "../store/store";
import { ChangeEvent } from "react";
import styles from "./StoreList.module.scss";

export default function StoreList() {
	const storeState = useSelector(selectedList);

	return (
		<ul className={styles.list}>
			{storeState.map((value, index) => (
				<StoreListItem value={value} index={index} key={index} />
			))}
		</ul>
	);
}

function StoreListItem({
	value,
	index,
}: {
	value: shopItemType;
	index: number;
}) {
	const dispatch = useDispatch();

	const handleQuantity = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		let newNum = parseInt(e.target.value);
		if (isNaN(newNum)) {
			newNum = 1;
		}
		dispatch(editQuantity([index, newNum]));
	};

	return (
		<li className={styles.listItem}>
			<h3>{value.name}</h3>
			<span className={styles.amount}>
				<label htmlFor="quantity">Amount: </label>
				<input id="quantity" type="number" value={value.quantity} onChange={handleQuantity} />
			</span>
			<div className={styles.price}>
				${(value.price * value.quantity).toFixed(2)}
			</div>
			<div>{value.size}</div>
			<div>{value.color}</div>
			<button onClick={() => dispatch(removeElement(index))}>
				Remove Item
			</button>
		</li>
	);
}
