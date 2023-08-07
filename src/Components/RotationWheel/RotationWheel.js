import ZingTouch from "zingtouch";
import styles from "./Rotation.module.css";
import forward from "../../assets/forward.png";
import backward from "../../assets/backward.png";
import pause from "../../assets/pause.jpg";
import { useEffect, useRef } from "react";

export const RotationWheel = (props) => {
  const rotationRef = useRef(null);
  const {onRotate,currentIndex,onMenu,setOnMenu}=props;

  useEffect(() => {
    if (rotationRef.current) {
      const gestureRegion = new ZingTouch.Region(rotationRef.current);
      const rotationGesture = new ZingTouch.Rotate({ numInputs: 1 });

      let currentAngle = 0;

      gestureRegion.bind(rotationRef.current, rotationGesture, function (e) {
        const angleChange = e.detail.distanceFromLast;
        currentAngle += angleChange;
        if (Math.abs(currentAngle) >= 15) {
          let newMenuIndex;
          if (currentAngle >= 0) {
            newMenuIndex = (currentIndex + 1) % 4;
          } else {
            newMenuIndex = (currentIndex - 1 + 4) % 4;
          }
          currentAngle = 0;
          if (onRotate) {
            onRotate(newMenuIndex);
          }
        }
      });

      return () => {
        gestureRegion.unbind(rotationRef.current, rotationGesture);
      };
    }
  }, [currentIndex, onRotate]);

  const handleMenuClick = ()=>{
    setOnMenu(!onMenu);
  }
  return (
    <>
      <div className={styles.box} ref={rotationRef}>
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
              <span className={styles.menu} onClick={handleMenuClick}>Menu</span>
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
