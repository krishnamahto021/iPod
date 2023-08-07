import styles from "./Menu.module.css";
export const Menu = (props) => {
  const { activeIndex,setMenu,setOnMenu} = props;
  const getActiveMenu = (index) => {
    if (index === activeIndex) {
      return `${styles.activeClass}`;
    } else {
      return null;
    }
  };

  const handleMenuItemsClick = ()=>{
    setOnMenu(true);
    switch(activeIndex){
      case 0:
        setMenu('Songs');
        break;
      
      case 1:
        setMenu('Albums');
        break;
      
      case 2:
        setMenu('Artists');
        break;
      
      case 3:
        setMenu('Playlists');
        break;
      
      default:
        setMenu(null);
        break;
    }
  }
  return (
    <>
      <div className={styles.menu}>
        <h1 className={styles.heading}>iPod</h1>
        <hr />
        <div className={styles.menuItems}>
          <p className={getActiveMenu(0)} onClick={handleMenuItemsClick}>
            Songs{" "}
            {activeIndex === 0 ? (
              <span style={{ fontWeight: 900 }}>&gt;</span>
            ) : null}
          </p>
          <p className={getActiveMenu(1)} onClick={handleMenuItemsClick}>
            Albums{" "}
            {activeIndex === 1 ? (
              <span style={{ fontWeight: 900 }}>&gt;</span>
            ) : null}
          </p>
          <p className={getActiveMenu(2)} onClick={handleMenuItemsClick}>
            Artists{" "}
            {activeIndex === 2 ? (
              <span style={{ fontWeight: 900 }}>&gt;</span>
            ) : null}
          </p>
          <p className={getActiveMenu(3)} onClick={handleMenuItemsClick}>
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
