import styles from './MenuItems.module.css';
export function MenuItems({menu}){
    return(
        <>
            <div className={styles.menu}>
                <div className={styles.heading}>
                {menu}
                </div>
            </div>
        </>
    )
}