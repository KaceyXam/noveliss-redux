import { removeElement, editQuantity, selectedList } from "../store/storeSlice";
import { useDispatch, useSelector } from "react-redux";
import type { shopItemType } from "../store/store";
import { ChangeEvent } from "react";
import styles from "./StoreList.module.scss";

export default function StoreList() {
	const storeState = useSelector(selectedList);

	return (
		<table className={styles.list}>
			<thead>
				<tr>
					<td>Item Name:</td>
					<td>Quantity:</td>
					<td>Size:</td>
					<td>Color:</td>
					<td>Price:</td>
				</tr>
			</thead>
			<tbody>
				{storeState.map((value, index) => (
					<StoreListItem value={value} index={index} key={index} />
				))}
			</tbody>
		</table>
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
		<tr className={styles.listItem}>
			<td>{value.name}</td>
			<td className={styles.amount}>
				<input
					id="quantity"
					type="number"
					value={value.quantity}
					onChange={handleQuantity}
				/>
			</td>
			<td>{value.size}</td>
			<td>{value.color}</td>
			<td className={styles.price}>
				${(value.price * value.quantity).toFixed(2)}
			</td>
			<td className={styles.removeButton}>
				<button onClick={() => dispatch(removeElement(index))}>X</button>
			</td>
		</tr>
	);
}
