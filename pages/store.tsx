import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Image from "next/image";
import styles from "./Store.module.scss";
import LatestItem from "../components/LatestItem";
import type { storeItem } from "./_app";

const bookDescription =
	"The first collaboration album between Noveliss and Dixon Hill comes in the form of a concept album based on the I Ching or Book of Changes. The track list was constructed using the ancient text and its overall theme stems from the wisdom therein. Conceived, written, and recorded in isolation, Book of Changes sets Noveliss as a hermetic sage seeking seeking balance and enlightenment over Dixon Hill's ethereal musical backdrops. Dixon Hill used samples, live instruments, and field recordings to create the sonic template for this record. Each song transitions smoothly from one to another using melodic elements and natural sounds to tether the songs together for a cohesive listening experience.";

const storeContents: storeItem[] = [
	{
		name: "Book of Changes: Vinyl",
		stock: {
			inStock: false,
			quantity: 1000,
		},
		price: 50.0,
		description: bookDescription,
		imageSrc: "/images/book-of-changes.webp",
	},
];

export default function Store() {
	return (
		<>
			<Head>
				<title>Noveliss | Store</title>
			</Head>
			<MainLayout>
				<main className={styles.main}>
					<LatestItem {...storeContents[0]} />
					<span className="line" />
					<section className={styles.frequently}>
						<div className={styles.bought}>
							<h3>Frequently purchased together</h3>
							<div className={styles.items}>
								<div className="imageWrapper">
									<Image src="/images/book-of-changes.webp" alt="" fill />
								</div>
								<span className="plus" />
								<div className="imageWrapper">
									<Image src="/images/book-of-changes.webp" alt="" fill />
								</div>
							</div>
						</div>
						<div className={styles.addCart}>
							<p>No Items Selected</p>
							<button>Add selected items to cart</button>
						</div>
					</section>
				</main>
			</MainLayout>
		</>
	);
}
