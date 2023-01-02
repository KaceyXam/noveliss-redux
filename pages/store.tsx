import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import styles from "./Store.module.scss";
import LatestItem from "../components/LatestItem";
import ShopItem from "../components/ShopItem";
import shopJson from "../lib/shop.json";

export default function Store() {
	return (
		<>
			<Head>
				<title>Noveliss | Store</title>
			</Head>
			<MainLayout>
				<main className={styles.main}>
					<LatestItem {...shopJson[0]} />
					<span className="line" />
					<section className={styles.shopWrapper}>
						{shopJson.map((item, i) => {
							return <ShopItem {...item} key={i} />;
						})}
					</section>
				</main>
			</MainLayout>
		</>
	);
}
