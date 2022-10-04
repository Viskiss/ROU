import style from "./Team.module.css";
import imageOne from "./Img/01.png";
import imageTwo from "./Img/02.png";
import imageThree from "./Img/03.png";
import imageFour from "./Img/04.png";

function Team() {
  return (
    <div className={style.portfolio}>
      <div className={style.header}>
        <p>Meet our team</p>
        <h2>Awesome people with great business skills</h2>
      </div>
      <div className={style.items}>
        <div className={`${style.item} ${style.item1}`}>
          <div>
            <img src={imageOne} alt="" />
          </div>
          <div className={style.textContent}>
            <h3>Bruce Wayne</h3>
            <p>Founder & CEO</p>
          </div>
        </div>
        <div className={`${style.item} ${style.item2}`}>
          <div>
            <img src={imageTwo} alt="" />
          </div>
          <div className={style.textContent}>
            <h3>Clark Kent</h3>
            <p>Manager</p>
          </div>
        </div>
        <div className={`${style.item} ${style.item3}`}>
          <div>
            <img src={imageThree} alt="" />
          </div>
          <div className={style.textContent}>
            <h3>Jessica Parker</h3>
            <p>Developer</p>
          </div>
        </div>
        <div className={`${style.item} ${style.item4}`}>
          <div>
            <img src={imageFour} alt="" />
          </div>
          <div className={style.textContent}>
            <h3>Justin Pakerman</h3>
            <p>Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
