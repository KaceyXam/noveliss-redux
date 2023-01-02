import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Image from "next/image";
import styles from "./Store.module.scss";
import LatestItem from "../components/LatestItem";
import type { storeItem } from "./_app";
import { FormEvent, FormEventHandler } from "react";

const bookDescription =
	"The first collaboration album between Noveliss and Dixon Hill comes in the form of a concept album based on the I Ching or Book of Changes. The track list was constructed using the ancient text and its overall theme stems from the wisdom therein. Conceived, written, and recorded in isolation, Book of Changes sets Noveliss as a hermetic sage seeking seeking balance and enlightenment over Dixon Hill's ethereal musical backdrops. Dixon Hill used samples, live instruments, and field recordings to create the sonic template for this record. Each song transitions smoothly from one to another using melodic elements and natural sounds to tether the songs together for a cohesive listening experience.";

const storeContents: storeItem[] = [
	{
		name: "Book of Changes: Vinyl",
		stock: 10000,
		price: 50.0,
		description: bookDescription,
		imageSrc: "/images/book-of-changes.webp",
	},
	{
		name: "RKM 1.0 Bundle",
		stock: 10000,
		price: 50.0,
		imageSrc: "/images/book-of-changes.webp",
		sizes: ["small", "medium", "large", "xl"],
	},
];

export default function Store() {
	const shopFormHandle = (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<>
			<Head>
				<title>Noveliss | Store</title>
			</Head>
			<MainLayout>
				<main className={styles.main}>
					<LatestItem {...storeContents[0]} />
					<span className="line" />
					<section className={styles.shopWrapper}>
						<form onSubmit={shopFormHandle} className={styles.shopItem}>
							<div className="imageWrapper">
								<Image
									src={"/images/rkm-bundle.webp"}
									alt={"RKM 1.0 Bundle"}
									fill
								/>
							</div>
							<h3>RKM 1.0 Bundle</h3>
							<select name="size" id="size">
								<option value="small">Small</option>
								<option value="medium">Medium</option>
								<option value="large">Large</option>
								<option value="xl">XL</option>
							</select>
							<button type="submit">Add to cart: $40.00</button>
						</form>
						<form onSubmit={shopFormHandle} className={styles.shopItem}>
							<div className="imageWrapper">
								<Image
									src={"/images/rkm-bundle.webp"}
									alt={"RKM 1.0 Bundle"}
									fill
								/>
							</div>
							<h3>RKM 1.0 Bundle</h3>
							<select name="size" id="size">
								<option value="small">Small</option>
								<option value="medium">Medium</option>
								<option value="large">Large</option>
								<option value="xl">XL</option>
							</select>
							<button type="submit">Add to cart</button>
						</form>
						<form onSubmit={shopFormHandle} className={styles.shopItem}>
							<div className="imageWrapper">
								<Image
									src={"/images/rkm-bundle.webp"}
									alt={"RKM 1.0 Bundle"}
									fill
								/>
							</div>
							<h3>RKM 1.0 Bundle</h3>
							<select name="size" id="size">
								<option value="small">Small</option>
								<option value="medium">Medium</option>
								<option value="large">Large</option>
								<option value="xl">XL</option>
							</select>
							<button type="submit">Add to cart</button>
						</form>
						<form onSubmit={shopFormHandle} className={styles.shopItem}>
							<div className="imageWrapper">
								<Image
									src={"/images/rkm-bundle.webp"}
									alt={"RKM 1.0 Bundle"}
									fill
								/>
							</div>
							<h3>RKM 1.0 Bundle</h3>
							<select name="size" id="size">
								<option value="small">Small</option>
								<option value="medium">Medium</option>
								<option value="large">Large</option>
								<option value="xl">XL</option>
							</select>
							<button type="submit">Add to cart</button>
						</form>
					</section>
				</main>
			</MainLayout>
		</>
	);
}
