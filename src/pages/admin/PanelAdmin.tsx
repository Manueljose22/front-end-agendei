import { Outlet } from 'react-router-dom';
import { NavBar } from '../../components/layout/NavBar';
import { SideBar } from '../../components/layout/sidebar/SideBar';
import { useState } from 'react';






export const PanelAdmin = () => {
  const [isOpen, setOpen] = useState(''); 
  
  const toggleSidebar =() =>{
    isOpen === 'close' ? setOpen(' ') : setOpen('close') 
  }
  
  return (
    <main className={`w-100 d-flex`}>
        <SideBar isOpen={isOpen} />
        <section className='d-flex flex-column w-100'>
          <NavBar toggleSidebar={toggleSidebar} />
          <div className="py-3 container-fluid mh-100">
              <Outlet />
          </div>
        </section>
    </main>
  )
}
