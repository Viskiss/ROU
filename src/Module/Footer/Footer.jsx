import AboutItem from "./components/AboutItem";
import ServiceItem from "./components/ServiceItem";
import ContactItem from "./components/ContactItem";
import { ABOUT_ITEM, SERVICE_ITEM, CONTACT_ITEM } from "./footer.constants";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.input}>
          <img src="/Images/ImgHeader/RouHeaderLogo.png" alt="" />
          <p>
            Fectetur adipisicing elit, sed do eius mod tempor Lorem ipsum dolor
            sit amet, con sectetur adipisicing elitt ut labore
          </p>
          <form className={styles.form}>
            <input type="text" placeholder="Submit email" />
            <button>
              <img src="/Images/Footer/04.png" alt="" />
            </button>
          </form>
        </div>
        <div className={styles.item}>
          <h3>About</h3>
          {ABOUT_ITEM.map((a) => (
            <AboutItem key={a.title} title={a.title} href={a.href} />
          ))}
        </div>

        <div className={styles.item}>
          <h3>Services</h3>
          {SERVICE_ITEM.map((b) => (
            <ServiceItem key={b.title} title={b.title} />
          ))}
        </div>

        <div className={styles.item}>
          <h3>Get in Touch</h3>
          {CONTACT_ITEM.map((c) => (
            <ContactItem
              key={c.title}
              title={c.title}
              href={c.href}
              img={c.img}
            />
          ))}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
