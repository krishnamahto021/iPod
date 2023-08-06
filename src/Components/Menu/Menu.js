import styles from './Menu.module.css';
export const Menu = () =>{
    return(
        <>
            <div className={styles.menu}>
                <h1 className={styles.heading}>iPod</h1>
                <hr />
                <div className={styles.menuItems}>
                    <p>Songs</p>
                    <p>Albums</p>
                    <p>Artists</p>
                    <p>Playlists</p>
                </div>
            </div>
        </>
    )
}