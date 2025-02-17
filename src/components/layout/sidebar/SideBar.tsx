import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SideBar.module.css';
import {FaAngleRight,FaBookMedical,FaUser} from 'react-icons/fa';
import { BiSolidDashboard, BiSolidHome } from 'react-icons/bi';
import { ISideBarProps } from './types';
import logo from '../../../assets/logo-white.png';
import { FaUserDoctor } from 'react-icons/fa6';




function SideBar({isOpen}: ISideBarProps) {

  const [isActive, setActive] = useState<number | null>(null);

  useEffect(()=>{
    setActive(Number(localStorage.getItem("index")));
  },[])

  const handleClick = (index: number)=>{
    localStorage.setItem("index", index.toString())
    setActive(index);

  }

  return (
    <aside className={`bg-sidebar ${styles.sidebar} ${styles[isOpen]}`}>
        <li className='list-unstyled fs-3 pt-2 mb-5 px-4'>
            <img className='' src={logo} alt="Agendei" /> 
        </li>

       <div className="px-4 fw-3 my-3 border-bottom-sm d-flex align-items-center">
          <Link className="text-white d-flex align-items-center"  to={'/panel/dashboard'} >
              <BiSolidHome size={20} className='me-3' />
              Dashboard
            </Link>
       </div>
       <nav className='mt-3 px-4'>
          <li onClick={() => handleClick(1)} className={` ${isActive === 1 ? styles.bg_active : ''} pointer list-unstyled d-flex align-items-center mb-3'`}>
            <Link className="text-white d-flex align-items-center"  to={'/panel/management'} >
              <FaBookMedical size={20} className='me-3' />Gestão Geral<FaAngleRight/>
            </Link>
          </li>
          <li onClick={() => handleClick(2)} className={` ${isActive === 2 ? styles.bg_active : ''} pointer list-unstyled d-flex align-items-center mb-3'`}>
            <Link className="text-white d-flex align-items-center"  to={'/panel/appointments'} >
              <BiSolidDashboard size={20} className='me-3' />Agendamentos<FaAngleRight/>
            </Link>
          </li>
          
          <li onClick={() => handleClick(3)} 
            className={` ${isActive === 3 ? styles.bg_active : ''} ${styles.btn_down}
             d-flex align-items-center mb-3 list-unstyled collapsed pointer align-items-center mt-2`} >
            
            <Link className="text-white d-flex align-items-center" to={'/panel/doctors'}> 
              <FaUserDoctor size={20} className='me-3' /> 
                Médicos
              <FaAngleRight/>
            </Link>
            
          </li>

          <li onClick={() => handleClick(4)} 
            className={` ${isActive === 4 ? styles.bg_active : ''} ${styles.btn_down}
             d-flex align-items-center mb-3 list-unstyled collapsed pointer align-items-center mt-2`} >
            
            <Link className="text-white d-flex align-items-center" to={'/panel/users'}> 
              <FaUser size={20} className='me-3' /> 
                Administradores 
              <FaAngleRight/>
            </Link>
            
          </li>
          
        {/* configuration */}

          {/* <li className='my-2 list-unstyled'>
              <Link className="text-white d-flex align-items-center" to={'/dashboard/admin/configuration'}> 
                <FaGear size={20} className='m-2' /> 
                  Configurações
                </Link>
          </li> */}
         
       </nav>
       
    </aside>
  )
}

export { SideBar }