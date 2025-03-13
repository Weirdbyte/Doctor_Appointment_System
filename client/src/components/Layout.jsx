import React from 'react'
import '../styles/LayoutStyles.css';
import { Sidebar } from 'lucide-react';
import { SidebarMenu } from '../Data/navdata';
import { Link,useLocation, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Layout = ({children}) => {
    const {user} =  useSelector(state=>state.user);
    const location = useLocation();
  return (
    <>
        <div className='main'>
            <div className='layout'>
                <div className='sidebar'>
                    <div className='logo'>
                        <h6>DOC APP</h6>
                    </div>
                    <div className='menu'>
                        {SidebarMenu.map((menu)=>{
                            const isActive= location.pathname === menu.path;
                            return(

                                <div key={menu.path}  className={`menu-item ${isActive ? 'active' : ''}`} >
                                    <i className={menu.icon}></i>
                                    <Link to={menu.path}>{menu.name}</Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='content'>
                    <div className='header'>
                        <div className='header-content'>
                            <i className='fa-solid fa-bell'></i>
                            <Link to = "/profile" className='fa-solid fa-circle-user'></Link>
                        </div>
                        
                    </div>
                    <div className='body'>{children}</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Layout