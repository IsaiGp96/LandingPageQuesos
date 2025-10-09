import styles from "../css/header.module.scss";

export default function Header() {
  const text = "Quesos de los campos";

  const handleScroll = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3 className={styles.title}>{text}</h3>
        </div>

        <nav className={styles.nav}>
          <ul>
            <li onClick={() => handleScroll("#productos")}>Productos</li>
            <li onClick={() => handleScroll("#quesos")}>Quesos</li>
            <li onClick={() => handleScroll("#jugos")}>Jugos</li>
            <li onClick={() => handleScroll("#smoothies")}>Licuados</li>
            <li onClick={() => handleScroll("#footer")}>Contacto</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
