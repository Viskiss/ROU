import style from "./HeroContent.module.css";

function HeroContent() {
  return (
    <div className={style.heroContent}>
      <div className={style.textContent}>
        <h1>Work Smartly with Endless Possibility</h1>
        <p>
          Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exerction{" "}
        </p>
        <button className={style.button}>Get Started</button>
      </div>
      <div className={style.imageContent}>
        <img src="/Images/ImgHeader/HeroImage.png" alt="heroImage" />
      </div>
    </div>
  );
}

export default HeroContent;
