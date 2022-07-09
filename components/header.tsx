import Image from 'next/image'
import styles from '../styles/components/header.module.scss'
const Header = () => {
    
    return(
        <header className={styles.container}>
            <Image src={'/logo.png'} width={50} height={50} alt='R.I.D.E.R.S. logo'/>
        </header>
    )
}
export default Header