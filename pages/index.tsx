import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";

export default function Home() {
	return (
		<>
			<Head>
				<title>Noveliss | Home</title>
			</Head>
			<MainLayout>Home Page</MainLayout>
		</>
	);
}
