import type { storeItem } from "../pages/_app";
import styles from "./LatestItem.module.scss";
import Image from "next/image";

export default function LatestItem(props: storeItem) {
	return (
		<section className={styles.latestItem}>
			<div className="imageWrapper">
				<Image
					src={props.imageSrc}
					alt={props.name}
					fill
					style={{ objectFit: "cover", gridColumn: "1" }}
				/>
			</div>
			<div className={styles.latestContent}>
				<h2>{props.name}</h2>
				<h3 className={`${!props.stock.inStock ? styles.outStock : ""}`}>
					{props.stock.inStock && props.stock.quantity
						? `${props.stock.quantity} left`
						: "Out of Stock"}
				</h3>
				<p>{props.description}</p>
				<button className={styles.outStockButton}>
					Add to cart: ${props.price}
				</button>
			</div>
		</section>
	);
}
