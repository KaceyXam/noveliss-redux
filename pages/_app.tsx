import "../styles/globals.scss";
import type { AppProps } from "next/app";
import {wrapper} from "../store/store";

export type storeItem = {
	name: string;
	stock: number;
	description?: string;
	price: number;
	imageSrc: string;
	sizes?: string[];
	colors?: string[];
};

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);