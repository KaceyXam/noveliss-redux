import Head from "next/head";
import { FormEvent } from "react";
import MainLayout from "../components/layouts/MainLayout";

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
					<form className={styles.contactForm}>
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
						<textarea id="message" name="message" />
					</form>
				</section>
			</MainLayout>
		</>
	);
}
