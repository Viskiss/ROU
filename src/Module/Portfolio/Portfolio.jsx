import style from "./Portfolio.module.css";
import imageOne from "./Img/01.png";
import imageTwo from "./Img/02.png";
import imageThree from "./Img/03.png";

function Portfolio() {
  return (
    <div className={style.portfolio}>
      <div className={style.header}>
        <p>Our Projects</p>
        <h2>Check the real innovation of problem solving</h2>
      </div>
      <div className={style.items}>
        <div className={`${style.item} ${style.item1}`}>
          <div>
            <img src={imageOne} alt="" />
          </div>
          <div className={style.textContent}>
            <p>Development</p>
            <h3>Jodi kokhono vul hoye jay tumi oporadh nio na</h3>
            <p>
              Excepteur sint occae cat cupidatat non proident, sunt in culpa qui
              officia deser unt mollit a do eiusmod tempor incididunt ut labore
              et dolore magna aliqua.{" "}
            </p>
            <button>View Project</button>
          </div>
        </div>
        <div className={`${style.item} ${style.item2}`}>
          <div>
            <img src={imageTwo} alt="" />
          </div>
          <div className={style.textContent}>
            <p>Research & Analytics</p>
            <h3>Ei biristi veja rate tuminei bole somoy amar katena</h3>
            <p>
              Excepteur sint occae cat cupidatat non proident, sunt in culpa qui
              officia deser unt mollit a do eiusmod tempor incididunt ut labore
              et dolore magna aliqua.{" "}
            </p>
            <button>View Project</button>
          </div>
        </div>
        <div className={`${style.item} ${style.item3}`}>
          <div>
            <img src={imageThree} alt="" />
          </div>
          <div className={style.textContent}>
            <p>UI/UX Engineering</p>
            <h3>Ami jare chaire se thake mori ontore </h3>
            <p>
              Excepteur sint occae cat cupidatat non proident, sunt in culpa qui
              officia deser unt mollit a do eiusmod tempor incididunt ut labore
              et dolore magna aliqua.{" "}
            </p>
            <button>View Project</button>
          </div>
        </div>
      </div>
      <div className={style.btn}>
        <button>Go to Portfolio</button>
      </div>
    </div>
  );
}

export default Portfolio;
