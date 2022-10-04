import logo from "../../Img/RouHeaderLogo.png";
import facebook from "../../Img/facebook.png";
import youtube from "../../Img/youtube.png";
import instagram from "../../Img/instagram.png";
import twitter from "../../Img/twitter.png";
import style from "./Header.module.css";

function Header() {
  return (
    <div>
      <nav className={style.nav}>
        <img className={style.logo} src={logo} alt="Logo" />
        <button className={style.button}>Home</button>
        <button className={style.button}>About</button>
        <button className={style.button}>Service</button>
        <button className={style.button}>Works</button>
        <button className={style.button}>News</button>
        <button className={style.button}>Contact</button>
        <button className={style.buttonBig}>Get A Quote</button>
        <button className={style.buttonLogo}>
          <img src={facebook} alt="facebook" />
        </button>
        <button className={style.buttonLogo}>
          <img src={twitter} alt="twitter" />
        </button>
        <button className={style.buttonLogo}>
          <img src={youtube} alt="youtube" />
        </button>
        <button className={style.buttonLogo}>
          <img src={instagram} alt="instagram" />
        </button>
      </nav>
    </div>
  );
}

export default Header;
