// src\components\Hero.tsx
import styles from "../css/hero.module.scss";

export default function Hero() {
  return (
    <section id="inicio" className={styles.heroSection}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h2 className={styles.title}>
          Descubre el auténtico sabor de Chihuahua
        </h2>
        <p className={styles.subtitle}>
          Quesos artesanales y jugos naturales que nutren cuerpo y alma.
        </p>
      </div>
    </section>
  );
}
