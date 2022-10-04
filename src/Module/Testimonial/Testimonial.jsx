import style from "./Testimonial.module.css";
import image from "./Img/01.jpg";

function Testimonial() {
  return (
    <div className={style.testimonial}>
      <div className={style.header}>
        <div className={style.head}>
          <p>Testimonial</p>
          <h2>They are awesome!</h2>
        </div>

        <div className={style.text}>
          <p>
            Kollit a do eiusmod tempor incididunt ut labore et do irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            {" "}
            <b>Kabir Manja</b> Music Producer
          </p>
        </div>
      </div>
      <div className={style.image}>
        {" "}
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Testimonial;
