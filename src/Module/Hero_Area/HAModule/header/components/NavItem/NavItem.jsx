import styles from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <>
      <a className={styles.a} href={`/${props.title}`.toLowerCase()}>
        {props.title}
      </a>
    </>
  );
};

export default NavItem;
