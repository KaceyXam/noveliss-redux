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
			<div className="imageWrapper">
				<Image src={imgSrc}  alt={imgAlt} fill />
			</div>
			<div className={styles.latestTitle}>{children}</div>
		</section>
	);
}
