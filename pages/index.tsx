import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import styles from "./Home.module.scss";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Head>
				<title>Noveliss | Home</title>
			</Head>
			<MainLayout>
				<main className={styles.mainSection}>
					<section className={styles.latest}>
						<Image
							src="/images/feng-shui.jpg"
							width={488}
							height={275}
							alt="Feng Shui (Official Music Video) Thumbnail"
						/>
						<div className={styles.latestTitle}>
							<h2>Latest Video</h2>
							<h3>Feng Shui</h3>
							<a
								href="https://www.youtube.com/watch?v=bnF7ZCVLgDA"
								target="_blank"
								rel="noreferrer"
								className="a_button"
							>
								Watch on Youtube
							</a>
						</div>
					</section>
					<section className={styles.latest}>
						<Image
							src="/images/feng-shui.jpg"
							width={488}
							height={275}
							alt="Feng Shui (Official Music Video) Thumbnail"
						/>
						<div className={styles.latestTitle}>
							<h2>Latest Video</h2>
							<h3>Feng Shui</h3>
							<a
								href="https://www.youtube.com/watch?v=bnF7ZCVLgDA"
								target="_blank"
								rel="noreferrer"
								className="a_button"
							>
								Watch on Youtube
							</a>
						</div>
					</section>
					<section className={styles.latest}>
						<Image
							src="/images/feng-shui.jpg"
							width={488}
							height={275}
							alt="Feng Shui (Official Music Video) Thumbnail"
						/>
						<div className={styles.latestTitle}>
							<h2>Latest Video</h2>
							<h3>Feng Shui</h3>
							<a
								href="https://www.youtube.com/watch?v=bnF7ZCVLgDA"
								target="_blank"
								rel="noreferrer"
								className="a_button"
							>
								Watch on Youtube
							</a>
						</div>
					</section>
				</main>
			</MainLayout>
		</>
	);
}
