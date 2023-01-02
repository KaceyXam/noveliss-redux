import { FormEvent, useState } from "react";
import styles from "./ShopItem.module.scss";
import Image from "next/image";
import type { storeItem } from "../pages/_app";

export default function ShopItem(props: storeItem) {
	const [size, setSize] = useState("small");

	const selectHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSize(e.target.value);
	};

	const shopFormHandle = (e: FormEvent) => {
		e.preventDefault();
		if (props.sizes === undefined) {
			alert(props.name);
			return;
		}
		const chosenSize = size;
		alert(`${props.name} ${chosenSize[0].toUpperCase() + size.substring(1)}`);
	};

	const sizes = props.sizes;

	const outOfStock = props.stock === 0;

	return (
		<form onSubmit={shopFormHandle} className={styles.shopItem}>
			<div className="imageWrapper">
				<Image src={props.imageSrc} alt={props.name} fill />
			</div>
			<h3>{props.name}</h3>
			{sizes != undefined ? (
				<select name="size" id="size" onChange={selectHandle}>
					{sizes.map((size, i) => {
						return (
							<option value={size} key={i}>
								{size[0].toUpperCase() + size.substring(1)}
							</option>
						);
					})}
				</select>
			) : null}
			{outOfStock && <span className={styles.outStock}>Out of stock</span>}
			<button disabled={outOfStock} type="submit">
				Add to cart: ${props.price}
			</button>
		</form>
	);
}
