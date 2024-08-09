import type { NextPage } from "next";
import styles from "./index.module.css";

const Cover: NextPage = () => {
  return (
    <div className={styles.cover}>
      <img className={styles.focusIcon} alt="" src="/focus@2x.png" />
      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      <section className={styles.socialTemplatesParent}>
        <div className={styles.socialTemplates}>Social Templates</div>
        <div className={styles.toShowcaseYour}>to showcase your portfolio</div>
      </section>
    </div>
  );
};

export default Cover;
