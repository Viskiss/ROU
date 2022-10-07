import { ITEM } from "./portfolio.constance"
import PortfolioItem from "./components/PortfolioItem";

import styles from "./Portfolio.module.css";


function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <div className={styles.header}>
        <p>Our Projects</p>
        <h2>Check the real innovation of problem solving</h2>
      </div>
      <div className={styles.items}>
        {ITEM.map((a) => (
          <PortfolioItem
          key={a.title}
          title={a.title}
          title2={a.title2}
          text={a.text}
          img={a.img}
          style={a.style}
           />
        ))}
      </div>
      <div className={styles.btn}>
        <button>Go to Portfolio</button>
      </div>
    </div>
  );
}

export default Portfolio;
