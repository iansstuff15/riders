import styles   from '../styles/footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {

    return(
        <footer className={styles.container}>
            <div 
            style={{
                gridColumn:`1/span 2`,   
            }}
            >
            <Image src={'/logo.png'} width={50} height={50} alt='R.I.D.E.R.S. logo'/>
            <h2>R.I.D.E.R.S</h2>
            <h5>Road Infrastructure Design Evaluation and Reporting System</h5>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore.
            </p>
            </div>
           
            <div>
                <h3>Navigation</h3>
                <h6>Dashboard</h6>
                <h6>Roads</h6>
                <h6>Search</h6>
                <h6>Validate</h6>
                <h6>Profile</h6>
            </div>
            <div>
                <h3>Developed by</h3>
                <h6>Depamaylo, Bea Michelle Anne P.</h6>
                <h6>Mateo, Niña Marie S.</h6>
                <h6>Powell, Diriangen Lempira D.</h6>
                <h6>Tecson, Kevin I.</h6>
                <h6>Villanueva, Nikko E.</h6>
            </div>
            <div>
                <h3>Developed in</h3>
                <Link href={'https://www.tip.edu.ph/'} passHref>
                    <a target={'_blank'}>
                     <h6>Technological Institute of the Philippines</h6>
                    </a>
                </Link>
                <Link href={'https://goo.gl/maps/KpguyMd2BoSrzYFv9'} passHref>
                    <a target={'_blank'}>
                     <h6>938 Aurora Blvd, Cubao, Quezon City, 1109 Metro Manila</h6>
                    </a>
                </Link>
            </div>
        </footer>
    )
}

export default Footer