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
						<svg
							width="240"
							height="48"
							viewBox="0 0 240 48"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_5_4)">
								<path
									d="M0 44.8547C2.97532 32.2551 5.95064 19.6486 8.92596 7.03508C8.92596 0.417512 13.9486 1.99014 19.3069 1.93447V5.66425L47.0572 0C40.3697 17.2015 45.2943 46.657 23.0424 47.3181C23.7979 44.3468 23.5671 40.4013 25.4838 38.5573C33.3744 30.9725 30.8981 20.8339 34.7175 11.419C1.3291 15.2183 20.3912 60.087 0 44.8547Z"
									fill="#CCCCCC"
								/>
								<path
									d="M110.078 47.3181C99.9414 40.2204 105.838 31.1186 107.727 21.9542C103.53 8.55206 128.013 16.4918 135.981 14.432C137.562 24.508 127.818 20.9174 121.053 21.2584C116.709 20.987 114.492 22.2743 115.338 27.3262H130.252C130.895 38.272 120.815 33.9646 113.386 34.7092C111.91 44.1589 124.173 39.3088 130.651 40.4361C131.126 52.1334 117.996 45.8777 110.078 47.3181Z"
									fill="#CCCCCC"
								/>
								<path
									d="M44.7697 47.3181C41.8807 41.2015 45.9729 16.8258 53.164 14.7939C59.4038 15.1209 70.953 11.419 74.3247 17.953C66.2522 42.301 75.325 50.1502 44.7697 47.3181ZM50.7297 40.5335C66.1192 41.786 64.1326 32.9696 66.8188 21.7454C50.9885 18.9342 54.2553 28.036 50.7576 40.5474L50.7297 40.5335Z"
									fill="#CCCCCC"
								/>
								<path
									d="M175.357 47.3181C174.952 32.7608 195.728 47.1511 197.043 34.6326C190.572 33.9368 177.96 37.7918 179.596 27.6741C180.121 9.92983 195.182 15.2322 208.585 14.4529C209.242 29.6782 186.899 12.5602 186.613 27.7159C206.745 25.9553 208.501 31.1116 198.365 47.3598L175.357 47.3181Z"
									fill="#CCCCCC"
								/>
								<path
									d="M206.081 47.3181C206.458 32.8026 222.1 47.0328 228.353 34.6118C220.946 33.7698 209.249 38.0911 210.054 27.9942C210.054 10.2012 226.031 15.0861 239.175 14.4181C240.574 29.9496 216.224 12.6089 218.084 27.7228C224.016 28.1334 237.14 25.009 234.978 34.9319C233.88 39.7542 233.25 44.8269 227.836 47.3181H206.081Z"
									fill="#CCCCCC"
								/>
								<path
									d="M83.2017 47.318C81.1591 36.6715 79.1234 26.018 77.0109 14.9748C81.208 13.5343 84.0481 13.4856 84.7686 18.9759C85.4646 24.2617 87.1014 29.382 89.6023 34.0968C92.2699 27.7506 94.9397 21.4021 97.6119 15.0513C103.908 18.802 104.677 21.1609 101.571 27.1174C95.9051 34.6744 95.0237 50.018 83.2017 47.318Z"
									fill="#CCCCCC"
								/>
								<path
									d="M131.84 47.3181C134.75 37.3813 137.436 27.3819 140.773 17.5703C154.064 4.78749 143.151 33.0879 142.668 40.5683C153.273 39.5732 169.95 35.3911 154.875 47.3181H131.84Z"
									fill="#CCCCCC"
								/>
								<path
									d="M162.556 47.3181C166.012 38.2361 168.575 28.8422 170.209 19.2682C170.971 14.4947 173.427 13.5831 178.337 15.2601C174.182 25.5727 176.98 46.5596 162.556 47.3181Z"
									fill="#CCCCCC"
								/>
							</g>
							<defs>
								<clipPath id="clip0_5_4">
									<rect width="239.238" height="48" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</li>
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
