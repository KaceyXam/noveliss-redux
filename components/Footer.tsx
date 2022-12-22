import { FormEvent } from "react";
import styles from "./Footer.module.scss";

function MailingList() {
	const handleForm = (e: FormEvent) => {
		e.preventDefault();
		console.log("Yay, Form has been submitted");
	};

	return (
		<div className={styles.mailingList}>
			<h4>Join our mailing list for the latest news</h4>
			<form onSubmit={handleForm} className={styles.emailInput}>
				<input type="email" placeholder="youraddress@email.com" />
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
}

export default function Footer() {
	return (
		<footer className={styles.footerMain}>
			<h3 className={styles.where}>Where to find Noveliss</h3>
			<ul className={styles.socialLinks}>
				<li className={styles.social}>YouTube</li>
				<li className={styles.social}>FaceBook</li>
				<li className={styles.social}>Instagram</li>
				<li className={styles.social}>Twitter</li>
			</ul>
			<MailingList />
			<span className={styles.copyright}>
				Not officially owned by Noveliss | All right belong to Noveliss | Site
				designed and developed by Kacey Kniffen
			</span>
		</footer>
	);
}
