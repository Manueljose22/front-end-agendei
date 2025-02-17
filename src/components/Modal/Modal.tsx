import React,{  Dispatch, ReactNode} from 'react';
import styles from './Modal.module.css';

type ModalProps ={
    isOpen: boolean;
    setOpen: Dispatch<React.SetStateAction<boolean>>;
    children: ReactNode;
}


export const Modal = ({isOpen, setOpen, children}: ModalProps) => {
  
    if (isOpen) {
        return (
            <div className={styles.background}>
                <div className={styles.modal}>
                    {/* <div className="end">
                        <button className='bg-transparent border-0 float-end' onClick={()=> setOpen(!isOpen)}>X</button>
                    </div> */}
                    {children}
                </div>
            </div>
        )
    }

}
