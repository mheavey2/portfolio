import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div id={styles.footerContainer}>
      <div id={styles.footerLeft}>
        <p>© Margaret Heavey 2025. All Rights Reserved. </p>
      </div>
      <div id={styles.footerRight}>
        <p>Built with React and Javascript</p>
      </div>
    </div>
  );
}
