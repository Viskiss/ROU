import clsx from "clsx";

import styles from "./BlogItem.module.css";

const BlogItem = (props) => {
  return (
    <div className={clsx(styles.item, props.style)}>
      <div className={styles.text}>
        <p>{props.title}</p>
        <h3>{props.title2}</h3>
        <p>{props.text}</p>
      </div>
      <div className={styles.user}>
        <img src={props.img} alt="" />
        <h3>{props.name}</h3>
        <span>{props.likes}</span>
      </div>
    </div>
  );
};

export default BlogItem;
