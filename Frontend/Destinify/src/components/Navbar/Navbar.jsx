import React from 'react'
import { RiShutDownLine } from "react-icons/ri";
import './Navbar.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutCall } from '../../features/userLogedIn/userLogedInSlice';
function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handelLogout = () => {
        try{
            const res = dispatch(logoutCall())
            navigate('/login')
        }catch(err){
            console.log(err)
        }
    }
    const handelHome = () => {
      navigate('/')
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
            <div className="container">
              <a className="navbar-brand" onClick={handelHome} style={{cursor:"pointer"}}>Destinyfi</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto" style={{ width: '100%', justifyContent: 'center' }}>
                  <li className="nav-item"><a className="nav-link" href="#">Discover</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Trips</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Review</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Forums</a></li>
                </ul>
              </div>
              <a className='logoutBtn' onClick={handelLogout}><RiShutDownLine /> LogOut</a>
            </div>
          </nav>
  )
}

export default Navbar