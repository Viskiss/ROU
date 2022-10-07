import ContactItem from "./components/ContactItem";
import InputItem from "./components/InputItem";
import { INPUT_ITEM, CONTACT_ITEM } from "./contact.constants";

import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.header}>
        <p>Contact Us</p>
        <h2>Stay connected with us for any reason</h2>
      </div>
      <div className={styles.items}>
        <div className={`${styles.item} ${styles.item1}`}>
          <h3>Write us a message</h3>
          <div className={styles.form}>
            <form>
              {INPUT_ITEM.map((a) => (
                <InputItem
                  key={a.placeholder}
                  placeholder={a.placeholder}
                  type={a.type}
                />
              ))}
              <textarea placeholder="Start writing message here" />
              <br />
              <button>Get Started</button>
            </form>
          </div>
        </div>
        <div className={`${styles.item} ${styles.item2}`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor inci didunt ut labore et dolore magna aliqua.
          </p>

          <div className={styles.information}>
            <address>
              {CONTACT_ITEM.map((b) => (
                <ContactItem
                  key={b.title}
                  title={b.title}
                  info={b.info}
                  img={b.img}
                />
              ))}
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
