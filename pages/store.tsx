import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Image from "next/image";
import styles from "./Store.module.scss";

export default function Store() {
	return (
		<>
			<Head>
				<title>Noveliss | Store</title>
			</Head>
			<MainLayout>
				<main className={styles.main}>
					<section className={styles.latestItem}>
						<div className="imageWrapper">
							<Image
								src="/images/book-of-changes.webp"
								alt="Book of Changes: Vinyl"
								fill
								style={{ objectFit: "cover", gridColumn: "1" }}
							/>
						</div>
						<div className={styles.latestContent}>
							<h2>Book of Changes: Vinyl</h2>
							<h3 className={styles.outStock}>Out of stock</h3>
							<p>
								The first collaboration album between Noveliss and Dixon Hill
								comes in the form of a concept album based on the I Ching or
								Book of Changes. The track list was constructed using the
								ancient text and its overall theme stems from the wisdom
								therein. Conceived, written, and recorded in isolation, Book of
								Changes sets Noveliss as a hermetic sage seeking seeking balance
								and enlightenment over Dixon Hill's ethereal musical backdrops.
								Dixon Hill used samples, live instruments, and field recordings
								to create the sonic template for this record. Each song
								transitions smoothly from one to another using melodic elements
								and natural sounds to tether the songs together for a cohesive
								listening experience.
							</p>
							<button className={styles.outStockButton}>
								Add to cart: $50.00
							</button>
						</div>
					</section>
				</main>
			</MainLayout>
		</>
	);
}
