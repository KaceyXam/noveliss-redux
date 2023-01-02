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
				<h3 className={`${props.stock === 0 ? styles.outStock : ""}`}>
					{props.stock >= 0 ? `${props.stock} left` : "Out of Stock"}
				</h3>
				<p>{props.description}</p>
				<button className={styles.outStockButton} disabled={props.stock === 0}>
					Add to cart: ${props.price}
				</button>
			</div>
		</section>
	);
}
