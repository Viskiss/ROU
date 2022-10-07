import clsx from "clsx";

import styles from "./CardItem.module.css";

const CardItem = (props) => {
  return (
    <div className={clsx(styles.item, props.style)}>
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default CardItem;
