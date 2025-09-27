import { Card, CardContent } from '../ui/Card';
import { smoothies } from "../products/smoothies";
import { cereal, lacteos } from '../products/cereal';
import { ScrollReveal } from '../../hooks/ScrollReveal';
import styles from "../../css/smoothie.module.scss";

export default function Smoothie() {
  const precios = [
    { label: 'Jumbo', value: 100 },
    { label: 'Grande', value: 60 },
  ];

  return (
    <>
      <section id="smoothies" className={styles.section}>
        <ScrollReveal once trigger="middle" offset={40}>
          {(active) => (
            <h3 className={`${styles.title} ${active ? styles.titleVisible : styles.titleHidden}`}>
              Arma tu licuado nutritivo
            </h3>
          )}
        </ScrollReveal>

        <div className={styles.priceGrid}>
          {precios.map((p, i) => (
            <ScrollReveal key={p.label} once offset={40}>
              {(active) => (
                <h3
                  className={`${styles.priceItem} ${active ? styles.priceVisible : styles.priceHidden}`}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  {p.label}: ${p.value.toFixed(2)}
                </h3>
              )}
            </ScrollReveal>
          ))}
        </div>

        <div className={styles.gridProducts}>
          {smoothies.map((product, i) => (
            <ScrollReveal key={product.id} once offset={80}>
              {(active) => (
                <Card
                  className={`${styles.card} ${active ? styles.cardVisible : styles.cardHidden}`}
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

      <section id="cereales" className={styles.section}>
        <ScrollReveal once trigger="middle" offset={40}>
          {(active) => (
            <h3 className={`${styles.title} ${active ? styles.titleVisible : styles.titleHidden}`}>
              Cereales para acompañar
            </h3>
          )}
        </ScrollReveal>

        <div className={styles.gridProducts}>
          {cereal.map((product, i) => (
            <ScrollReveal key={product.id} once offset={80}>
              {(active) => (
                <Card
                  className={`${styles.card} ${active ? styles.cardVisible : styles.cardHidden}`}
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
                  </CardContent>
                </Card>
              )}
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="lacteos" className={styles.section}>
        <ScrollReveal once trigger="middle" offset={40}>
          {(active) => (
            <h3 className={`${styles.title} ${active ? styles.titleVisible : styles.titleHidden}`}>
              El lácteo de tu preferencia
            </h3>
          )}
        </ScrollReveal>

        <div className={styles.gridProductsAlt}>
          {lacteos.map((product, i) => (
            <ScrollReveal key={product.id} once offset={80}>
              {(active) => (
                <Card
                  className={`${styles.card} ${active ? styles.cardVisible : styles.cardHidden}`}
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
