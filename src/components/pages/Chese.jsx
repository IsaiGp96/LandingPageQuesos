import { ScrollReveal } from '../../hooks/ScrollReveal';
import { cheess } from "../products/cheeses";
import styles from "../../css/chese.module.scss";

const priceList = [
  { id: 'sierra-verde', name: 'Queso Sierra Verde', price: 166 },
  { id: 'sello-oro', name: 'Queso Sello De Oro', price: 182 },
  { id: 'selecto', name: 'Queso Selecto', price: 178 },
  { id: 'para-elote', name: 'Queso Para Elote', price: 50 },
  { id: 'los-pinos', name: 'Queso Los Pinos', price: 172 },
  { id: 'requeson', name: 'Queso Requeson', price: 98 },
  { id: 'asadero-tortilla', name: 'Queso Asadero Tortilla', price: 150 },
  { id: 'ranchero', name: 'Queso Ranchero', price: 150 },
  { id: 'panela', name: 'Queso Panela', price: 136 },
  { id: 'laurel-barra', name: 'Queso Laurel Barra', price: 158 },
  { id: 'laurel-rueda', name: 'Queso Laurel De Rueda', price: 158 },
];

const fmt = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
  minimumFractionDigits: 2,
});

export default function Chese() {
  return (
    <section id="quesos" className={styles.section}>
      <ScrollReveal once trigger="middle" offset={40}>
        {(active) => (
          <h3 className={`${styles.title} ${active ? styles.visible : styles.hidden}`}>
            Quesos frescos
          </h3>
        )}
      </ScrollReveal>

      <div className={styles.priceGrid}>
        {priceList.map((item, i) => (
          <ScrollReveal key={item.id} once offset={60}>
            {(active) => (
              <div
                className={`${styles.priceItem} ${active ? styles.visible : styles.hidden}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className={styles.itemName}>{item.name}</span>
                <span className={styles.itemPrice}>{fmt.format(item.price)}</span>
              </div>
            )}
          </ScrollReveal>
        ))}
        <span className={styles.note}>* Todos los precios incluyen IVA</span>
      </div>
    </section>
  );
}
