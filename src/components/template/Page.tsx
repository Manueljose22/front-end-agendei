import { ReactNode } from 'react';
import styles from './Page.module.css';
import logo from '../../assets/logo.png';


type ImgProps = {
    children: ReactNode;
    title: string;
}



export const PageBackGround = ({children, title}: ImgProps) =>{
    return (
        <div className='row p-0 m-0'>
            <div className="col-lg-5 col-md-12">
                <div className="log text-center py-5">
                    <img src={logo} className='img-fluid w-25' alt="" />
                </div>
                <div className="title px-5">
                    <h1 className='fs-4 text-center fw-bolder px-4'>
                        {title}
                    </h1>
                </div>
                {children}
            </div>
            <div className={`${styles.img} col-lg-7 col-md-7`}></div>
        </div>
    )
}