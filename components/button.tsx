
import styles from '../styles/components/button.module.scss'
import { motion } from 'framer-motion'
import React from 'react'
import { ButtonProps } from '../interfaces/interface'
const ButtonComponent: React.FC<ButtonProps> = ({children, ...otherProps}) => {



    return(
        <motion.button 
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
          }}
          whileHover={{
            backgroundColor: '#012d57',
            scale:.9,
          }}
         
        className={styles.button} {...otherProps}>
            {
                children
            }
        </motion.button>
    )
}

export default ButtonComponent