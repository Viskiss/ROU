import styles from "./ContactItem.module.css";

const ContactItem = (props) => {
  return (
    <div className={styles.info}>
      <img src={props.img} alt="" />
      <div>
        <h3>{props.title}</h3>
        <p>{props.info}</p>
      </div>
    </div>
  );
};

export default ContactItem;
