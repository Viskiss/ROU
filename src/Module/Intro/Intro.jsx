import CardItem from "./components/CardItem";
import { ITEM } from "./card.constance";

import styles from "./Intro.module.css";

function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.header}>
        <p>Build trust first</p>
        <h2>Control your business with a single tap</h2>
      </div>
      <div className={styles.items}>
        {ITEM.map((a) => (
          <CardItem
            key={a.title}
            title={a.title}
            text={a.text}
            img={a.img}
            style={a.style}
          />
        ))}
      </div>
    </div>
  );
}

export default Intro;
