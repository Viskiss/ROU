import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.aboutContent}>
      <div className={styles.textContent}>
        <h1>Most innovative creative team</h1>
        <p>
          Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exerction
        </p>
        <p className={styles.textP}>
          Ouis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excep teur sint occae cat cupidatat
          non proident, sunt in culpa qui officia deser unt mollit anim id est
          labor
        </p>
        <button className={styles.button}>Get Started</button>
      </div>
      <div className={styles.imageContent}>
        <img
          className={styles.img1}
          src="/Images/About/01.png"
          alt="heroImage"
        />
      </div>
    </div>
  );
}

export default About;
