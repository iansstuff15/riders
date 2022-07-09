import styles from '../styles/layout.module.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './header';
import Footer from './footer';
import React from 'react';
import { LayoutProps } from '../interfaces/interface';


const Layout:React.FC<LayoutProps> = ({children})=>(
<div>   
    <Header/>
    <div className={styles.container}>
        <div className={styles.child_container}>
            {children}
        </div>
        <ToastContainer theme='colored' hideProgressBar autoClose={900} closeButton={false} position={'bottom-right'}/>
    </div>
    <Footer/>
</div>
)

export default Layout