import TeamItem from "./components/TeamItem";
import { ITEM } from "./team.constants";

import style from "./Team.module.css";

function Team() {
  return (
    <div className={style.portfolio}>
      <div className={style.header}>
        <p>Meet our team</p>
        <h2>Awesome people with great business skills</h2>
      </div>
      <div className={style.items}>
        {ITEM.map((a) => (
          <TeamItem key={a.name} name={a.name} job={a.job} img={a.img} />
        ))}
      </div>
    </div>
  );
}

export default Team;
