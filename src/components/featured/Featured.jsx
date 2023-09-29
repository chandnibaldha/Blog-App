import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Hey,This is the blog of the creative ideas and Discover the stories!
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
            necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
            porro sequi, totam minima consequuntur, aspernatur deleniti vero
            repellendus dorales.
          </p>
          <button className={styles.button}>ReadMore</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
