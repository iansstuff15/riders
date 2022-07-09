import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import ButtonComponent from '../components/button'
import InputComponent from '../components/input'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'
import {RiArrowRightSFill} from 'react-icons/ri'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {MdEmail,MdPassword} from 'react-icons/md'
import { motion } from 'framer-motion'
import LoginWithProvider from '../components/loginWithProvider'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookF} from 'react-icons/fa'
import { NextPage } from 'next'
export default function Home (): NextPage | React.ReactNode {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


  const handleSubmit=()=>{
    toast.success('logged in')
  }

  return (
    <Layout>
      <div className={styles.grid}>
      
      <motion.form
       initial={{
        scaleX:0,
        // opacity:0,
        
    }}
    animate={{
       scaleX:1,
    //    opacity:1,
       transformOrigin:'left',
    }}
    transition={{
        duration:.2,
      
       
    }}
      className={styles.form} onSubmit={()=>handleSubmit()}>
      <motion.h1
       initial={{
        opacity:0,
        y:'1rem'
      }}
      animate={{
        opacity:1,
        y:0,
      }}
      transition={{
        delay:.3,
        duration:1,
        type:"spring",
      }}
      className={styles.into_text}
      >Welcome Back</motion.h1>
      <motion.h1
       initial={{
        opacity:0,
        y:'1rem'
      }}
      animate={{
        opacity:1,
        y:0,
      }}
      transition={{
        delay:.5,
        duration:1,
        type:"spring",
      }}
      className={styles.subject}
      >Sign In</motion.h1>
      <motion.h1
       initial={{
        opacity:0,
        y:'1rem'
      }}
      animate={{
        opacity:1,
        y:0,
      }}
      transition={{
        delay:.7,
        duration:1,
        type:"spring",
      }}
      className={styles.subtext}
      >to Continue</motion.h1>
      <br/>
      <br/>
      <InputComponent  type={'email'} label={'Email'} placeholder={'test@email.com'} required onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)}>
        <MdEmail scale={20}/>
      </InputComponent>
      <InputComponent delay={.3} label={'Password'} type={'password'} placeholder={'Test#123'} required onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}>
        <MdPassword scale={20}/>
      </InputComponent>
      <ButtonComponent type={'submit'}>
          <strong>Login</strong>
          <RiArrowRightSFill scale={40}/>
      </ButtonComponent>
      <br/>
      <br/>
     
      <br/>
      <motion.h4 
        initial={{
          opacity:0,
          y:'.3rem'
        }}
        animate={{
          opacity:1,
          y:0,
        }}
        transition={{
          delay:1,
          duration:1,
          type:"spring",
        }}
        
      className={styles.subtle_text}>Or Sign in with</motion.h4>
      
      <br/>
      
      <div className={styles.provider_container}>
      <LoginWithProvider provider={'Google'}>
         <Image src='/google.svg' width={15} height={15} alt='google logo'/>
      </LoginWithProvider>
       
      <LoginWithProvider provider={'Microsoft'} delay={.5}>
       <Image src='/microsoft.svg' width={15} height={15} alt='microsoft logo'/>
      </LoginWithProvider>
      </div>
      <br/>
      <motion.h4 
        initial={{
          opacity:0,
          y:'.3rem'
        }}
        animate={{
          opacity:1,
          y:0,
        }}
        transition={{
          delay:1,
          duration:1,
          type:"spring",
        }}
        
     >Dont have an account yet? Sign up here </motion.h4>
      </motion.form>

      <motion.div
      initial={{
        opacity:0,
        y:'-5rem'
      }}
      animate={{
        y:0,
        opacity: 1,
      }}
      transition={{
        duration:1.3,
        type:'spring',
        delay:.5
      }}
      >
          <Image src={'/attention.png'} width={500} height={500} alt={'road attention illustration'}/>
     
      </motion.div>
      
      </div>
     
    </Layout>
  )
}
