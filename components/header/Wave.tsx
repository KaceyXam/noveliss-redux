import styles from "./Wave.module.scss";
import SvgLoader from "../svg/SvgLoader";
import Image from "next/image"

export default function Wave() {
  return (
    <header className={styles.wrapper}>
      <h1 className={styles.title}>Noveliss</h1>
      <div className={styles.title} aria-hidden>
        <SvgLoader height={90} fill="black" />
      </div>
      <div className="imageWrapper">
        <Image 
          src="/images/wave/wave.webp" 
          alt="Hero Image" 
          fill 
        />
      </div>
    </header>
  )
}
