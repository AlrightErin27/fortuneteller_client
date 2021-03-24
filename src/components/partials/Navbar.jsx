import { Link } from "react-router-dom";
import CrystalBall from "../CrystalBall";

export default function Navbar(props) {
  
  const loggedIn = (
    <>
        <Link to='/'>
          <span onClick={props.handleLogout}>Log out</span>
        </Link>
    
        <Link to='/profile'>
          Profile
        </Link>
      </>
    )
    
    const loggedOut = (
      <>
      <Link to='/register'>
        Register
      </Link>
    
      <Link to='/login'>
        Login
      </Link>
    </>
  );
  return (
    <nav className="navbar">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/crystal-ball" className="link">
        Crystal Ball
      </Link>

      {props.currentUser ? loggedIn : loggedOut}
    </nav>
  )
}