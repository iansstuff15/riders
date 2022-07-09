import styles from '../styles/button.module.scss'
import { motion } from 'framer-motion'
import React from 'react'
import { ButtonProps } from '../interfaces/interface'

const LoginWithProvider:React.FC<ButtonProps> = ({provider,children,delay=0}) => {

    return(
        
        <motion.span
        initial={{
            opacity:0,
            x:'-1rem'
          }}
          animate={{
            opacity:1,
            x:0,
          }}
          transition={{
            duration:1,
            type:"spring",
            delay: (1.1+delay),
          }}
          whileHover={{
            transition:{
                delay:0,
                duration:.5,
                 type:"spring",
                 
            },
            backgroundColor: '#ebebeb',
            
          }}
          
         
        className={styles.button}
        style={{
            backgroundColor: 'white',
            color: 'black',
        }}
        >
            {
                children
            }
            <strong style={{
                marginLeft: '.3rem',
                fontWeight: 900,
            }}>
                {provider}
            </strong>
        </motion.span>
    )
}

export default LoginWithProvider