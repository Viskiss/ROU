import style from "./Service.module.css";
import image1 from "./Img/01.png";
import image2 from "./Img/02.png";
import image3 from "./Img/03.png";
import image4 from "./Img/04.png";
import image5 from "./Img/05.png";
import image6 from "./Img/06.png";
import arrow from "./Img/arrow.png";

function Service() {
  return (
    <div className={style.service}>
      <div className={style.textContent}>
        <p>What we do</p>
        <h2>Service to solve all kinds of business problem</h2>
      </div>
      <div className={style.itemsContent}>
        <div className={style.item}>
          <img src={image1} alt="" />
          <h3>Business Automation</h3>
          <p>
            Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud
            exerci tation
          </p>
          <img src={arrow} alt="" />
        </div>
        <div className={style.item}>
          <img src={image2} alt="" />
          <h3>Business Automation</h3>
          <p>
            Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud
            exerci tation
          </p>
          <img src={arrow} alt="" />
        </div>
        <div className={style.item}>
          <img src={image3} alt="" />
          <h3>Business Automation</h3>
          <p>
            Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud
            exerci tation
          </p>
          <img src={arrow} alt="" />
        </div>
        <div className={style.item}>
          <img src={image4} alt="" />
          <h3>Business Automation</h3>
          <p>
            Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud
            exerci tation
          </p>
          <img src={arrow} alt="" />
        </div>
        <div className={style.item}>
          <img src={image5} alt="" />
          <h3>Business Automation</h3>
          <p>
            Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud
            exerci tation
          </p>
          <img src={arrow} alt="" />
        </div>
        <div className={style.item}>
          <img src={image6} alt="" />
          <h3>Business Automation</h3>
          <p>
            Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud
            exerci tation
          </p>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Service;
