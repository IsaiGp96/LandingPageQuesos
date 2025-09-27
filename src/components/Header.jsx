import { MagneticText } from "../hooks/MagneticTextx";
import styles from "../css/header.module.scss";

export default function Header() {
  const text = "Quesos de los campos";
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3 className={styles.title}>
            <MagneticText body={text} className="inline-flex select-none font-extrabold">
              {(tokens) =>
                tokens.map((token, index) => (
                  <MagneticText.Token
                    key={index}
                    body={token}
                    className={styles.token}
                  />
                ))
              }
            </MagneticText>
          </h3>
        </div>
      </div>
    </header>
  );
}
