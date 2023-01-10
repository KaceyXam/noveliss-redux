import styles from "./Header.module.scss";
import { useEffect, useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import SvgLoader from './svg/SvgLoader';
import Wave from "./header/Wave";

function NavLinks() {
	const router = useRouter();

	return (
		<>
			<li className={styles.navElement}>
				<Link
					href="/#content"
					className={`${router.pathname === "/" ? `${styles.active}` : ""}`}
				>
					Home
				</Link>
			</li>
			<li className={styles.navElement}>
				<Link
					href="/about#content"
					className={`${
						router.pathname === "/about" ? `${styles.active}` : ""
					}`}
				>
					About
				</Link>
			</li>
			<li className={styles.navElement}>
				<Link
					href="/store#content"
					className={`${
						router.pathname === "/store" ? `${styles.active}` : ""
					}`}
				>
					Store
				</Link>
			</li>
			<li className={styles.navElement}>
				<Link
					href="/contact#content"
					className={`${
						router.pathname === "/contact" ? `${styles.active}` : ""
					}`}
				>
					Contact
				</Link>
			</li>
		</>
	);
}

export default function Header() {
	const [showDrop, setShowDrop] = useState(false);

	const [scrollPos, setScrollPos] = useState(0);

	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPos(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	return (
		<>
			<nav
				className={styles.mainNav}
				style={
					{
						"--shadow-color": `${
							scrollPos >= 100 ? "#10101090" : "transparent"
						}`,
					} as React.CSSProperties
				}
			>
				<ul className={styles.navList}>
					<li className={styles.logoSvg}>
						<SvgLoader height={46} />
					</li>
					<NavLinks />
					<li className={styles.dropBtn}>
						<button
							onClick={() => setShowDrop(!showDrop)}
							className={styles.hamburger}
						>
							<svg viewBox="0 0 100 80" width="40" height="40">
								<rect width="100" height="15" rx="8"></rect>
								<rect y="35" width="100" height="15" rx="8"></rect>
								<rect y="70" width="100" height="15" rx="8"></rect>
							</svg>
						</button>
					</li>
				</ul>
				<ul className={`${styles.dropMenu} ${showDrop && styles.show}`}>
					<NavLinks />
				</ul>
			</nav>
			<Wave />
		</>
	);
}
