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
		const chosenSize = size;
		alert(chosenSize);
	};

	const sizes = props.sizes;

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
			<button type="submit">Add to cart: $40.00</button>
		</form>
	);
}
