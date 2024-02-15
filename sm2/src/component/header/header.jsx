import Logo from "/header/logo.png";
import styles from "./header.module.css";

const LINKS = [
  { name: "Главная", href: "/" },
  { name: "Библиотека", href: "/library" },
  { name: "GitHub", href: "" },
  { name: "Контакты", href: "/contact" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_content}>
          <a href="" className="link">
            <img src={Logo} alt="" className="logo" />
          </a>
          <nav className={styles.menu}>
            {LINKS.map((item) => (
              <div className={styles.menu_item} key={item.name}>
                <a href={item.href} className={styles.link}>
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div className="header_buttons">
            <a href="" className="btn">
              войти
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
