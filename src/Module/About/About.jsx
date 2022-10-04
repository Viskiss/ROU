import style from "./About.module.css";
import image1 from "./Img/01.png";

function About() {
  return (
    <div className={style.aboutContent}>
      <div className={style.textContent}>
        <h1>Most innovative creative team</h1>
        <p>
          Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exerction
        </p>
        <p className={style.textP}>
          Ouis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excep teur sint occae cat cupidatat
          non proident, sunt in culpa qui officia deser unt mollit anim id est
          labor
        </p>
        <button className={style.button}>Get Started</button>
      </div>
      <div className={style.imageContent}>
        <img className={style.img1} src={image1} alt="heroImage" />
      </div>
    </div>
  );
}

export default About;
