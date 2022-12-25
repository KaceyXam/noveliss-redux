import { ReactNode } from "react";
import Image from "next/image";
import styles from "./HomeCard.module.scss";

type Props = {
	children: ReactNode;
	imgSrc: string;
	imgAlt: string;
};

export default function HomeCard({ children, imgSrc, imgAlt }: Props) {
	return (
		<section className={styles.latest}>
			<Image src={imgSrc} width={488} height={275} alt={imgAlt} />
			<div className={styles.latestTitle}>{children}</div>
		</section>
	);
}
