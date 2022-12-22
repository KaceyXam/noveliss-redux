import styles from "./Header.module.scss";
import { useEffect, useState, MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
	const router = useRouter();

	const [mousePosX, setMousePosX] = useState(0);
	const [scrollPos, setScrollPos] = useState(0);

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		setMousePosX(() => e.nativeEvent.clientX);
	};

	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPos(position);
		console.log(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	useEffect(() => {
		console.log(mousePosX);
	}, [mousePosX]);

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
					<li className={styles.navElement}>
						<Link
							href="/"
							className={`${router.pathname === "/" ? `${styles.active}` : ""}`}
						>
							Home
						</Link>
					</li>
					<li className={styles.navElement}>
						<Link
							href="/about"
							className={`${
								router.pathname === "/about" ? `${styles.active}` : ""
							}`}
						>
							About
						</Link>
					</li>
					<li className={styles.navElement}>
						<Link
							href="/music"
							className={`${
								router.pathname === "/music" ? `${styles.active}` : ""
							}`}
						>
							Music
						</Link>
					</li>
					<li className={styles.navElement}>
						<Link
							href="/store"
							className={`${
								router.pathname === "/store" ? `${styles.active}` : ""
							}`}
						>
							Store
						</Link>
					</li>
					<li className={styles.navElement}>
						<Link
							href="/contact"
							className={`${
								router.pathname === "/contact" ? `${styles.active}` : ""
							}`}
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
			<header onMouseMove={handleMouseMove} className={styles.wrapper}></header>
		</>
	);
}
