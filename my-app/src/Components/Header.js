import "../App.css";
 
import {  NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header(props) {

  const navi=useNavigate()

function handleLogout(e){
  e.preventDefault()
  localStorage.removeItem("token");
  props.setIsLoggedIn(false)
  navi("/")
}


  return (
    <>
   <header >
        <h1 >foodparadise</h1> 
    </header>
    <body> 
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {props.isLoggedIn ?
        <NavLink onClick={handleLogout}>Logout</NavLink>:
        <NavLink to="/login" >Login</NavLink>}
    </nav>
    </body>
    </>
  );
}

export default Header;