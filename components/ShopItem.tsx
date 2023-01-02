import { FormEvent, useState } from "react";
import styles from "./ShopItem.module.scss";
import Image from "next/image";
import type { storeItem } from "../pages/_app";

export default function ShopItem(props: storeItem) {
	const [size, setSize] = useState(props.sizes ? props.sizes[0] : undefined);
	const [color, setColor] = useState(
		props.colors ? props.colors[0] : undefined
	);

	const sizeHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSize(e.target.value);
	};
	const colorHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setColor(e.target.value);
	};

	const shopFormHandle = (e: FormEvent) => {
		e.preventDefault();
		if (size === undefined) {
			alert(props.name);
			return;
		}
		const chosenSize = size;
		if (color === undefined) {
			alert(
				`${props.name} ${chosenSize[0].toUpperCase() + chosenSize.substring(1)}`
			);
			return;
		}
		const chosenColor = color;
		alert(
			`${props.name} ${chosenSize[0].toUpperCase() + chosenSize.substring(1)} ${
				chosenColor[0].toUpperCase() + chosenColor.substring(1)
			}`
		);
	};

	const sizes = props.sizes;
	const colors = props.colors;

	const outOfStock = props.stock === 0;

	return (
		<form onSubmit={shopFormHandle} className={styles.shopItem}>
			<div className="imageWrapper">
				<Image src={props.imageSrc} alt={props.name} fill />
			</div>
			<h3>{props.name}</h3>
			{sizes != undefined ? (
				<select name="size" id="size" onChange={sizeHandle}>
					{sizes.map((size, i) => {
						return (
							<option value={size} key={i}>
								{size[0].toUpperCase() + size.substring(1)}
							</option>
						);
					})}
				</select>
			) : null}
			{colors != undefined ? (
				<select name="size" id="size" onChange={colorHandle}>
					{colors.map((color, i) => {
						return (
							<option value={color} key={i}>
								{color[0].toUpperCase() + color.substring(1)}
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
