
import styles from './Header.module.css'
import igniteLogo from '../assets/Ignite simbol.svg'
export const Header = () => {
  return (
    <div>
    <header className={styles.header}>
        <img src={igniteLogo} alt="LogoTipo do Ignite" />
    <strong>Ignite Feed</strong>

    </header>
    </div>
  )
}
