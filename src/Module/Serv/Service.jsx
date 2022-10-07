import ServiceItem from "./components/ServiceItem";
import { ITEM } from "./serviceItem.constanc";

import style from "./Service.module.css";

function Service() {
  return (
    <div className={style.service}>
      <div className={style.textContent}>
        <p>What we do</p>
        <h2>Service to solve all kinds of business problem</h2>
      </div>
      <div className={style.itemsContent}>
        {ITEM.map((a) => (
          <ServiceItem
            key={a.title}
            title={a.title}
            text={a.text}
            firstImg={a.firstImg}
            twoImg={a.twoImg}
          />
        ))}
      </div>
    </div>
  );
}

export default Service;
