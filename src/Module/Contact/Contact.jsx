import style from "./Contact.module.css";
import image1 from "./Img/01.png";
import image2 from "./Img/02.png";
import image3 from "./Img/03.png";

function Contact() {
  return (
    <div className={style.contact}>
      <div className={style.header}>
        <p>Contact Us</p>
        <h2>Stay connected with us for any reason</h2>
      </div>
      <div className={style.items}>
        <div className={`${style.item} ${style.item1}`}>
          <h3>Write us a message</h3>
          <div className={style.form}>
            <form>
              <input placeholder="Your name" />
              <br />
              <input placeholder="Your email" />
              <br />
              <input placeholder="Subject" />
              <br />
              <input placeholder="Start writing message here" />
              <br />
              <button>Get Started</button>
            </form>
          </div>
        </div>
        <div className={`${style.item} ${style.item2}`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor inci didunt ut labore et dolore magna aliqua.
          </p>

          <div className={style.information}>
            <div className={style.info}>
              <img src={image1} alt="" />
              <div>
                <h3>Phone</h3>
                <p>0123-4567-8910</p>
              </div>
            </div>
            <div className={style.info}>
              <img src={image2} alt="" />
              <div>
                <h3>Email</h3>
                <p>hello@rainydesign.com</p>
              </div>
            </div>
            <div className={style.info}>
              <img src={image3} alt="" />
              <div>
                <h3>Addres</h3>
                <p>20, Bordeshi, Amin Bazar Savar, Dhaka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
