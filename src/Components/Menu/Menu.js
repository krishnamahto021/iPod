import styles from "./Menu.module.css";
export const Menu = (props) => {
  const { activeIndex } = props;
  const getActiveMenu = (index) => {
    if (index === activeIndex) {
      return `${styles.activeClass}`;
    } else {
      return null;
    }
  };
  return (
    <>
      <div className={styles.menu}>
        <h1 className={styles.heading}>iPod</h1>
        <hr />
        <div className={styles.menuItems}>
          <p className={getActiveMenu(0)}>
            Songs{" "}
            {activeIndex === 0 ? (
              <span style={{ fontWeight: 900 }}>&gt;</span>
            ) : null}
          </p>
          <p className={getActiveMenu(1)}>
            Albums{" "}
            {activeIndex === 1 ? (
              <span style={{ fontWeight: 900 }}>&gt;</span>
            ) : null}
          </p>
          <p className={getActiveMenu(2)}>
            Artists{" "}
            {activeIndex === 2 ? (
              <span style={{ fontWeight: 900 }}>&gt;</span>
            ) : null}
          </p>
          <p className={getActiveMenu(3)}>
            Playlists{" "}
            {activeIndex === 3 ? (
              <span style={{ fontWeight: 900 }}>&gt;</span>
            ) : null}
          </p>
        </div>
      </div>
    </>
  );
};
