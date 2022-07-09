import { ButtonTypes } from '../types/types';
export interface LayoutProps {
    children: React.ReactNode
   
  
  }

  export interface InputProps{
  
    placeholder?: string
    delay?: number
    label?: string
    type: string
  
    [x:string]: any;
    children: React.ReactNode
  }

export interface ButtonProps{
  children: React.ReactNode
  provider?: string
  delay?: number
  type?: 'submit'
  [x:string]: any;
}