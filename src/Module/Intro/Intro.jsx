import style from "./Intro.module.css";
import imageOne from "./Img/01.png";
import imageTwo from "./Img/02.png";
import imageThree from "./Img/03.png";

function Intro() {
  return (
    <div className={style.intro}>
      <div className={style.header}>
        <p>Build trust first</p>
        <h2>Control your business with a single tap</h2>
      </div>
      <div className={style.items}>
        <div className={`${style.item1} ${style.item}`}>
          <img src={imageOne} alt="" />
          <h3>Complete business Control</h3>
          <p>
            Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud
            exerci tation{" "}
          </p>
        </div>
        <div className={`${style.item2} ${style.item}`}>
          <img src={imageTwo} alt="" />
          <h3>Critical analytics and report</h3>
          <p>
            Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud
            exerci tation{" "}
          </p>
        </div>
        <div className={`${style.item3} ${style.item}`}>
          <img src={imageThree} alt="" />
          <h3>User satisfaction guarranted</h3>
          <p>
            Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud
            exerci tation{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
