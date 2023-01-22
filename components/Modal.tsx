import { ReactNode, useEffect } from "react";
import styles from "./Modal.module.scss";
import { useRef } from "react";
import StoreList from "./StoreList";

interface ModalProps {
	children: ReactNode;
	toggleFunc: () => void;
}

export default function Modal(props: ModalProps) {
	return (
		<div className={styles.modalWrap} onClick={props.toggleFunc}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<div className={styles.cartTitle}>Your Cart:</div>
				<StoreList />
				<button onClick={props.toggleFunc}>Close</button>
			</div>
		</div>
	);
}
