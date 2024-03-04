import styles from '../styles/Header.module.css'
import spaceXLogo from '/space-x-logo.png';


function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <img src={spaceXLogo} alt="Space-X" className={styles.logo}/>
            </div>
        </header>
    )
}

export default Header