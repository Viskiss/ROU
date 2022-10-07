import styles from "./Testimonial.module.css";

function Testimonial() {
  return (
    <div className={styles.testimonial}>
      <div className={styles.header}>
        <div className={styles.head}>
          <p>Testimonial</p>
          <h2>They are awesome!</h2>
        </div>

        <div className={styles.text}>
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
      <div className={styles.image}>
        {" "}
        <img src="/Images/Testimonial/01.jpg" alt="" />
      </div>
    </div>
  );
}

export default Testimonial;
