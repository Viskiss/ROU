import BlogItem from "./components/BlogItem";
import { ITEM } from "./blog.constants";

import styles from "./Blog.module.css";

function Blog() {
  return (
    <div className={styles.blog}>
      <div className={styles.header}>
        <div>
          <p>From Our Blog</p>
          <h2>Get lastest update</h2>
        </div>
        <div>
          <div className={styles.btn}>
            <button>Go to Blog</button>
          </div>
        </div>
      </div>
      <div className={styles.items}>
        {ITEM.map((a) => (
          <BlogItem
          key={a.title}
            title={a.title}
            title2={a.title2}
            text={a.text}
            img={a.img}
            name={a.name}
            likes={a.likes}
            style={a.style}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
