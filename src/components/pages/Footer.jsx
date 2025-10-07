import React, { useState } from 'react';
import { ScrollReveal } from '../../hooks/ScrollReveal';
import styles from "../../css/footer.module.scss";
import wp from '../../assets/icons/wp.png';

export default function Footer() {
  const bank = {
    banco: 'Scotiabank',
    beneficiario: 'Ana Lilia Pérez Aguilar',
    clabe: '044150215052831672',
    referencia: 'Nombre + Fecha',
  };

  const [copied, setCopied] = useState('');
  const copy = async (label, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(''), 1500);
    } catch { setCopied(''); }
  };

  const whatsappNumber = "526144942122";
  const whatsappMessage = "Hola, quiero confirmar mi pago de Quesos de los Campos";

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <ScrollReveal once offset={40}>
          {(active) => (
            <div className={`${styles.reveal} ${active ? styles.revealVisible : styles.revealHidden}`}>
              <div className={styles.dir}>
                <h5>Quesos de los Campos</h5>
                <p>Av Fedor Dostoyevzki 303-E Col, Quintas Quijote II Etapa, Chihuahua 2000, 31136 Chihuahua, Chih.</p>
                <p>Contacto: +52 614-123-4567</p>
              </div>
            </div>
          )}
        </ScrollReveal>

        <ScrollReveal once offset={40}>
          {(active) => (
            <div className={`${styles.reveal} ${active ? styles.revealVisible : styles.revealHidden}`}>
              <iframe
                className="w-full h-48 sm:h-64 rounded-2xl"
                loading="lazy"
                src="https://maps.google.com/maps?q=Av+Fedor+Dostoyevzki+303-E+Col,+Quintas+Quijote+II+Etapa,+Chihuahua+2000,+31136+Chihuahua,+Chih.&t=m&z=15&output=embed&iwloc=near"
                title="Ubicación"
                aria-label="Ubicación Quesos de los Campos"
              ></iframe>
            </div>
          )}
        </ScrollReveal>

        <ScrollReveal once offset={40}>
          {(active) => (
            <div className={`${styles.paymentBox} ${active ? styles.revealVisible : styles.revealHidden}`}>
              <div className={styles.payIntro}>
                <h6>Pago por transferencia</h6>
                <p>Banco: <span>{bank.banco}</span></p>
              </div>

              <dl className={styles.payList}>
                <dt className={styles.term}>Beneficiario</dt>
                <dd className={`${styles.value} ${styles.beneficiario}`}>{bank.beneficiario}</dd>

                <dt className={styles.term}>CLABE</dt>
                <dd className={styles.value}>
                  <span className={styles.mono}>{bank.clabe}</span>
                  <button onClick={() => copy('clabe', bank.clabe)} className={styles.copyBtn}>Copiar</button>
                </dd>

                <dt className={styles.term}>Referencia</dt>
                <dd className={styles.value}>{bank.referencia}</dd>
              </dl>

              <div aria-live="polite">
                {copied === 'clabe' && 'CLABE copiada ✅'}
              </div>

              <p>* Envía tu comprobante por WhatsApp para confirmar tu compra.</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
                aria-label="Enviar pedido por WhatsApp"
              >
                <img className={styles.wp_image} src={wp} alt="" />
              </a>
            </div>
          )}
        </ScrollReveal>
      </div>

      <div className={styles.legal}>
        © {new Date().getFullYear()} Quesos de los Campos. Todos los derechos reservados.
      </div>
      <span className={styles.note}>Todos los precios incluyen IVA</span>
    </footer>
  );
}
