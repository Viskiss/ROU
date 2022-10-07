import styles from "./ServiceItem.module.css";

const ServiceItem = (props) => {
  return (
    <div className={styles.item}>
      <img src={props.firstImg} alt="" />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <img src={props.twoImg} alt="" />
    </div>
  );
};

export default ServiceItem;
