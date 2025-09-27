import { Card, CardContent } from '../components/ui/Card';
import { ScrollReveal } from '../hooks/ScrollReveal';
import styles from "../css/products.module.scss";

const products = [
  { id: 1, name: 'Queso Laurel', price: '150 MXN/kg', image: '/images/laurel.png' },
  { id: 2, name: 'Licuado Jumbo', price: '90 MXN', image: '/images/licuado.png' },
  { id: 3, name: 'Jugo Grande', price: '60 MXN', image: '/images/jugo.png' },
];

export default function Products() {
  return (
    <section id="smoothies" className={styles.section}>
      <ScrollReveal once trigger="middle" offset={40}>
        {(active) => (
          <h3 className={`${styles.title} ${active ? styles.titleVisible : styles.titleHidden}`}>
            Arma tu licuado nutritivo
          </h3>
        )}
      </ScrollReveal>
      <div className={styles.grid}>
        {products.map((product, i) => (
          <ScrollReveal key={product.id} once offset={80}>
            {(active) => (
              <Card
                className={`${styles.card} ${active ? styles.cardVisible : styles.cardHidden}`}
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.cardImage}
                  loading="lazy"
                />
                <CardContent className={styles.cardContent}>
                  <div>
                    <h4 className={styles.cardTitle}>{product.name}</h4>
                    <p className={styles.cardPrice}>{product.price}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
