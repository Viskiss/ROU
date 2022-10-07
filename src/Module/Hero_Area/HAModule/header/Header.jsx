import { NavItem, SocialLink } from "./components";
import { BTN_TITLE, SOCIAL_LINK } from "./Header.constants";

import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <nav className={styles.nav}>
        <img
          className={styles.logo}
          src="/Images/ImgHeader/RouHeaderLogo.png"
          alt="Logo"
        />

        {BTN_TITLE.map((a) => (
          <NavItem key={a.title} title={a.title} />
        ))}

        <button className={styles.buttonBig}>Get A Quote</button>

        {SOCIAL_LINK.map((sl) => (
          <SocialLink key={sl.src} src={sl.src} href={sl.href} />
        ))}
      </nav>
    </div>
  );
}

export default Header;
