import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import styles from "./Home.module.scss";
import LatestVideo from "../components/LatestVideo";
import LatestPodcast from "../components/LatestPodcast";

export default function Home() {
	return (
		<>
			<Head>
				<title>Noveliss | Home</title>
			</Head>
			<MainLayout>
				<main className={styles.mainSection}>
					<LatestVideo />
					<LatestPodcast />
				</main>
			</MainLayout>
		</>
	);
}
