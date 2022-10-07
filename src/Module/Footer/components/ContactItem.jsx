const ContactItem = (props) => {
  return (
    <div>
      <img src={props.img} alt="" />
      <a href={props.href}>{props.title}</a>
    </div>
  );
};

export default ContactItem;
