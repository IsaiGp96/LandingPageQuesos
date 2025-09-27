import { Card, CardContent } from '../ui/Card';
import { juicies } from '../products/juicies';
import { ScrollReveal } from '../../hooks/ScrollReveal';
import styles from "../../css/juice.module.scss";

export default function Juice() {
  const precios = [
    { label: 'Jumbo', value: 100 },
    { label: 'Mediano', value: 60 },
    { label: 'Chico', value: 40 },
  ];

  return (
    <>
      <section id="jugos" className={styles.section}>
        <ScrollReveal once trigger="middle" offset={40}>
          {(active) => (
            <h3 className={`${styles.title} ${active ? styles.visible : styles.hidden}`}>
              Jugos frescos la vitamina
            </h3>
          )}
        </ScrollReveal>

        <div className={styles.priceGrid}>
          {precios.map((p, i) => (
            <ScrollReveal key={p.label} once offset={40}>
              {(active) => (
                <h3
                  className={`${styles.priceItem} ${active ? styles.visible : styles.hidden}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {p.label}: ${p.value.toFixed(2)}
                </h3>
              )}
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="jugos-lista" className={styles.sectionList}>
        <div className={styles.juiceGrid}>
          {juicies.map((product, i) => (
            <ScrollReveal key={product.id} once offset={80}>
              {(active) => (
                <Card
                  className={`${styles.card} ${active ? styles.visible : styles.hidden}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className={styles.cardImage}
                    loading="lazy"
                  />
                  <CardContent>
                    <h4 className={styles.cardTitle}>{product.name}</h4>
                    <p className={styles.cardPrice}>{product.price}</p>
                  </CardContent>
                </Card>
              )}
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
