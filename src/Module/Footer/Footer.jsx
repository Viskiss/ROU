import style from "./Footer.module.css";
import imageOne from "./Img/01.png";
import imageTwo from "./Img/02.png";
import imageThree from "./Img/03.png";
import imageBtn from "./Img/04.png";
import logo from "../Hero_Area/Img/RouHeaderLogo.png";

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.footer}>
        <div className={style.input}>
          <img src={logo} alt="" />
          <p>
            Fectetur adipisicing elit, sed do eius mod tempor Lorem ipsum dolor
            sit amet, con sectetur adipisicing elitt ut labore
          </p>
          <form className={style.form}>
            <input type="text" placeholder="Submit email" />
            <button>
              <img src={imageBtn} alt="" />
            </button>
          </form>
        </div>
        <div className={style.item}>
          <h3>About</h3>
          <a href="">About Us</a>
          <a href="">Service</a>
          <a href="">Our Storiy</a>
          <a href="">Success</a>
          <a href="">Support</a>
        </div>

        <div className={style.item}>
          <h3>Service</h3>
          <a href="">Development</a>
          <a href="">Maintanance</a>
          <a href="">Consyltancy</a>
          <a href="">Desing</a>
        </div>

        <div className={style.item}>
          <h3>Get in Touch</h3>
          <div>
            <img src={imageOne} alt="" />
            <a href=""> 22/1 Bardeshi, Amin Bazar Dhaka 1348</a>
          </div>
          <div>
            <img src={imageTwo} alt="" />
            <a href=""> xuwelkhan@gmail.com</a>
          </div>

          <div>
            <img src={imageThree} alt="" />
            <a href=""> +88 01679 252595</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
