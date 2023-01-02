import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Image from "next/image";
import styles from "./Store.module.scss";
import LatestItem from "../components/LatestItem";
import type { storeItem } from "./_app";
import { FormEvent, FormEventHandler } from "react";
import ShopItem from "../components/ShopItem";

const bookDescription =
	"The first collaboration album between Noveliss and Dixon Hill comes in the form of a concept album based on the I Ching or Book of Changes. The track list was constructed using the ancient text and its overall theme stems from the wisdom therein. Conceived, written, and recorded in isolation, Book of Changes sets Noveliss as a hermetic sage seeking seeking balance and enlightenment over Dixon Hill's ethereal musical backdrops. Dixon Hill used samples, live instruments, and field recordings to create the sonic template for this record. Each song transitions smoothly from one to another using melodic elements and natural sounds to tether the songs together for a cohesive listening experience.";

const storeContents: storeItem[] = [
	{
		name: "Book of Changes: Vinyl",
		stock: 0,
		price: 50.0,
		description: bookDescription,
		imageSrc: "/images/book-of-changes.webp",
	},
	{
		name: "Maverick Hunters: Vinyl",
		stock: 1000,
		price: 50.0,
		imageSrc: "/images/maverick-hunters-vinyl.webp",
	},
	{
		name: "RKM 2.0 Bundle",
		stock: 1000,
		price: 40.0,
		imageSrc: "/images/rkm-bundle.webp",
		sizes: ["small", "medium", "large", "xl"],
	},
	{
		name: "Swordcast 50th Episode Tee",
		stock: 1000,
		price: 40.0,
		imageSrc: "/images/rkm-bundle.webp",
		sizes: ["small", "medium", "large", "xl"],
	},
	{
		name: "RKM 1.0 Bundle",
		stock: 1000,
		price: 40.0,
		imageSrc: "/images/rkm-bundle.webp",
		sizes: ["small", "medium", "large", "xl"],
	},
	{
		name: "Noveliss Logo Bundle",
		stock: 1000,
		price: 40.0,
		imageSrc: "/images/rkm-bundle.webp",
		sizes: ["small", "medium", "large", "xl"],
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
					<section className={styles.shopWrapper}>
						{storeContents.map((item, i) => {
							return <ShopItem {...item} key={i} />;
						})}
					</section>
				</main>
			</MainLayout>
		</>
	);
}
