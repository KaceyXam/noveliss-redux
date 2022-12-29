import Head from "next/head";
import { FormEvent } from "react";
import MainLayout from "../components/layouts/MainLayout";
import Image from "next/image";

import styles from "./Contact.module.scss";

export default function Contact() {
	const contactHandle = (e: FormEvent) => {
		e.preventDefault();
		console.log("Working Properly");
	};

	return (
		<>
			<Head>
				<title>Noveliss | Contact</title>
			</Head>
			<MainLayout>
				<main>
					<section className={styles.formsWrapper}>
						<form onSubmit={contactHandle} className={styles.contactForm}>
							<h2>Contact Us</h2>
							<label htmlFor="name">Name:</label>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="e.g. John Doe"
							/>
							<label htmlFor="email">Email:</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="e.g. youraddress@email.com"
							/>
							<label htmlFor="message">Message:</label>
							<textarea
								id="message"
								name="message"
								placeholder="Type your message here..."
							/>
							<button type="submit">Submit</button>
						</form>
						<div className={styles.donate}>
							<h2>Donate</h2>
							<div className={styles.imageWrapper}>
								<Image
									src="/images/dojo-dreamers.png"
									fill
									style={{ objectFit: "cover" }}
									alt="Dojo Dreamers"
								/>
							</div>
							<p>
								I love making music for you all, and if you love my music,
								please feel free to help me out
							</p>
							<button>Donate</button>
						</div>
					</section>
				</main>
			</MainLayout>
		</>
	);
}
