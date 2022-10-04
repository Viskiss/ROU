import Header from "./HAModule/header/Header";
import HeroContent from "./HAModule/heroContent/HeroContent";
import style from "./HeroArea.module.css";

function HeroArea() {
  return (
    <div className={style.heroArea}>
      <Header />
      <HeroContent />
    </div>
  );
}

export default HeroArea;
