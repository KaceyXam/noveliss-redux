import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";

export default function Home() {
	return (
		<>
			<Head>
				<title>Noveliss | About</title>
			</Head>
			<MainLayout>About Page</MainLayout>
		</>
	);
}
