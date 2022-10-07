import Header from "./HAModule/header/Header";
import HeroContent from "./HAModule/heroContent/HeroContent";

import styles from "./HeroArea.module.css";

function HeroArea() {
  return (
    <div className={styles.heroArea}>
      <Header />
      <HeroContent />
    </div>
  );
}

export default HeroArea;
