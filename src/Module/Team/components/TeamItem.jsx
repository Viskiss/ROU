import styles from "./TeamItem.module.css";

const TeamItem = (props) => {
  return (
    <div className={`${styles.item} ${props.style}`}>
      <div>
        <img src={props.img} alt="" />
      </div>
      <div>
        <h3>{props.name}</h3>
        <p>{props.job}</p>
      </div>
    </div>
  );
};

export default TeamItem;
