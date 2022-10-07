import styles from "./SocialLink.module.css";

const SocialLink = (props) => {
  return (
    <>
      <a className={styles.aLogo} href={props.href}>
        <img src={props.src} alt="" />
      </a>
    </>
  );
};

export default SocialLink;
