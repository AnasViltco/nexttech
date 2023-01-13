import Navbar from "../components/Navbar";
import styles from "../styles/index.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand_box}>
        <Navbar />
      </div>

      <div className={styles.text_box}>
        <h1 className={styles.heading_primary}>
          <span className={styles.heading_primary_main}>
            Welcome to the world of Listing
          </span>
          <span className={styles.thapatext}> Here you will find your listing </span>
        </h1>
        <a
          href="#"
          className={`${styles.btn} ${styles.btn_white} ${styles.btn_animated}`}>
            <Link href="/blog">
          Lets Begin
          </Link>
        </a>
      </div>
    </header>
  );
};

export default Header;
