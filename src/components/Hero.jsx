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
          Somos una empresa comprometida con brindar productos lacteos de excelente calidad: Quesos menonitas, crema mantequilla y entre otros productos regionales de Chihuahua.
          De igual forma ofrecemos opciones de bebidas variadas para acompañar su día a día, jugos naturales, licuados, refrescos y aguas de sabor.
        </p>
      </div>
    </section>
  );
}
