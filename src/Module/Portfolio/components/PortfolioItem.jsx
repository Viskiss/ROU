import clsx from "clsx";

import styles from "./PortrfolioItem.module.css";

const PortfolioItem = (props) => {
  const handleMouseMove = (event) => {
    const eventItem = event.target;

    const middleItem = {
      height: eventItem.offsetHeight / 2,
      width: eventItem.offsetWidth / 2,
    };
    eventItem.style.transform = `rotateY(${
      (event.nativeEvent.offsetX - middleItem.height) / 25
    }deg) rotateX(${-(event.nativeEvent.offsetY - middleItem.width) / 25}deg)`;
  };

  return (
    <div className={clsx(styles.item, props.style)}>
      <div>
        <img onMouseMove={handleMouseMove} src={props.img} alt="" />
      </div>

      <div className={styles.textContent}>
        <p>{props.title}</p>
        <h3>{props.title2}</h3>
        <p>{props.text}</p>
        <button>View Project</button>
      </div>
    </div>
  );
};

export default PortfolioItem;
