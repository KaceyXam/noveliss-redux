import "../styles/globals.scss";
import type { AppProps } from "next/app";

export type storeItem = {
	name: string;
	stock: {
		inStock: boolean;
		quantity?: number;
	};
	description?: string;
	price: number;
	imageSrc: string;
};

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
