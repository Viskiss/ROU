import style from "./Blog.module.css";
import imageOne from "./Img/01.jpg";
import imageTwo from "./Img/02.jpg";
import imageThree from "./Img/03.jpeg";

function Blog() {
  return (
    <div className={style.blog}>
      <div className={style.header}>
        <div>
          <p>From Our Blog</p>
          <h2>Get lastest update</h2>
        </div>
        <div>
          <div className={style.btn}>
            <button>Go to Blog</button>
          </div>
        </div>
      </div>
      <div className={style.items}>
        <div className={`${style.item1} ${style.item}`}>
          <div className={style.text}>
            <p>App Development</p>
            <h3>When the musics over turn off the light</h3>
            <p>
              Excep teur sint occae cat cupid atat non proident, sunt in culpa
              qui officia deser unt mollit ..
            </p>
          </div>

          <div className={style.user}>
            <img src={imageOne} alt="" />
            <h3>Sharmin Eity</h3>
            <span>♡ 22</span>
          </div>
        </div>
        <div className={`${style.item2} ${style.item}`}>
          <div className={style.text}>
            <p>Design</p>
            <h3>When the musics over turn off the light</h3>
            <p>
              Excep teur sint occae cat cupid atat non proident, sunt in culpa
              qui officia deser unt mollit ..
            </p>
          </div>

          <div className={style.user}>
            <img src={imageTwo} alt="" />
            <h3>Sanjida Ema</h3>
            <span>♡ 22</span>
          </div>
        </div>
        <div className={`${style.item3} ${style.item}`}>
          <div className={style.text}>
            <p>Research</p>
            <h3>When the musics over turn off the light</h3>
            <p>
              Excep teur sint occae cat cupid atat non proident, sunt in culpa
              qui officia deser unt mollit ..
            </p>
          </div>

          <div className={style.user}>
            <img src={imageThree} alt="" />
            <h3>Nayna Eva</h3>
            <span>♡ 22</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
