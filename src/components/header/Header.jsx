import './header.css'
import { Navigate } from 'react-router-dom';

const Header = () => {
function logOut(){
  // auth.signOut();
  Navigate('/')
}


  return (
    <nav className='header'>
      <h1>Financy</h1>
      <p className='link'>Logout</p>
      
    </nav>
  )
}

export default Header