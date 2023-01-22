import Head from "next/head";
import { ReactNode, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Modal from "../Modal";
import StoreList from "../StoreList";

export default function MainLayout({ children }: { children: ReactNode }) {
	const [showCart, setShowCart] = useState(false);

	return (
		<>
			<Head>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Header />
			<div id="content" />
			{children}
			<button className="cartBtn" onClick={() => setShowCart(() => !showCart)}>
				Cart
			</button>
			{showCart && (
				<Modal toggleFunc={() => setShowCart(() => !showCart)}>
					This is some content
				</Modal>
			)}
			<Footer />
		</>
	);
}
