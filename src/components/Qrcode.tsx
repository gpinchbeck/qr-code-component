import styles from "./Qrcode.module.css";

export function Qrcode() {
  return (
    <div className={styles.panel}>
      <img src="/image-qr-code.png" height="auto" width="100%" />

      <div className={styles.text}>
        <h1>Improve your front-end skills by building projects</h1>

        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
