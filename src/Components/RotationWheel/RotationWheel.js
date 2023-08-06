import styles from "./Rotation.module.css";
import forward from "../../assets/forward.png";
import backward from "../../assets/backward.png";
import pause from "../../assets/pause.jpg";
export const RotationWheel = () => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.outerCircle}>
          <div className={styles.row}>
            <div className={styles.left}>
              <img src={backward} alt="Backward" />
            </div>
            <div className={styles.right}>
              <img src={forward} alt="Forward" />
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.top}>
              <span className={styles.menu}>Menu</span>
            </div>
            <div className={styles.bottom}>
              <img src={pause} alt="Pause" id={styles.pause} />
            </div>
          </div>
          <div className={styles.innerCircle}></div>
        </div>
      </div>
    </>
  );
};
