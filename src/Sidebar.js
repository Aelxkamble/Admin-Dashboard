import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Sidebar.css'
import { Link } from 'react-router-dom';

function Sidebar() {
  const [active,setActive]=useState(1);
  return (
    <div className='sidebar d-flex justify-content-between flex-column bg-dark text-white py-3 ps-3 pe-5 vh-100'>
      <div>
        <a href='' className='text-decoration-none text-white'>
          <i className='bi bi-code-slash fs-4 me-4'></i>
          <span className='fs-3'>SideBar</span>
        </a>
        <hr className='text-white mt-2'/>
        <ul className='nav nav-pills flex-column mt-4'>
          <li className={active===1?'active  nav-item p-2':"nav-items p-2" } onClick={e=>setActive(1)}>
            <Link to="/" className='text-decoration-none text-white p-3'>
              <i className='bi bi-speedometer2 me-3 fs-4'></i>
              <span className='fs-4'><strong>Dashboard</strong></span>
            </Link>
          </li>
          
          <li className={active===2?'active  nav-item p-2':"nav-items p-2" } onClick={e=>setActive(2)}>
            <Link to="/users" className='text-decoration-none text-white p-2'>
              <i className='bi bi-people me-3 fs-4'></i>
              <span className='fs-4'><strong>Users</strong></span>
            </Link>
          </li>
          <li className={active===3?'active  nav-item p-2':"nav-items p-2" } onClick={e=>setActive(3)}>
            <Link to="/orders" className='text-decoration-none text-white p-2'>
              <i className='bi bi-table me-3 fs-4'></i>
              <span className='fs-4'><strong>Orders</strong></span>
            </Link>
          </li>
          <li className={active===4?'active  nav-item p-2':"nav-items p-2" } onClick={e=>setActive(4)}>
            <span className='text-decoration-none p-2'>
              <i className='bi bi-grid me-3 fs-4'></i>
              <span className='fs-4'><strong>Report</strong></span>
            </span>
          </li>
        </ul>
      </div>
      <div>
        <hr className='text-white'/>
        <div className='nav-item p-2'>
            <a href='' className='text-decoration-none text-white p-1'>
              <i className='bi bi-person-circle me-3 fs-4'></i>
              <span className='fs-4'><strong>Balaji</strong></span>
            </a>
          </div>
      </div>
    </div>
  )
}

export default Sidebar
