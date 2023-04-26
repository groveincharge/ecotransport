import { Outlet, Link } from "react-router-dom";
import "./styles/Navbar.css";
import { useEffect } from "react";
import logo from "./../images/ebikelogo.png"

function Navbar() {

  //selected link
   let activePage = window.location.pathname;

   //match selected link and add active attribute
  useEffect(() => {
  const navlinks = document.querySelectorAll('.nav-link')

  navlinks.forEach(link => {

    if (window.location.href === link.href){
      link.classList.add('active')
    }
  })
 
  },[activePage])
  
  

  return (
  <div className="bg-dark nav">
    <nav className="navbar navbar-expand-md navbar-dark row">
      <div className="col-md-4 mylogo">
    <img className="card-img-top" src={logo} alt="Card image"
      style={{width:"20%", height:"20%",}}/>
      <a className="navbar-brand" href="https://www.ecotric.com/products/48v-fat-tire-portable-folding-electric-bike?sca_ref=1702814.1Cxz8HsOjN">The 20Cheetah</a>
      </div>

      <div className="col-md-8 mylink">
    <button className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#mynavbar" 
            aria-expanded="false" 
            aria-controls="mynavbar"
            aria-label="toggle-navigation"
            >
     <span className="navbar-toggler-icon"></span>
  </button>

    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/features" className="nav-link">Features</Link>
        </li>
        <li className="nav-item">
          <Link to="/maintenance" className="nav-link">Maintenance</Link>
        </li>
        <Outlet/>
      </ul>
  </div>
  </div>
 
</nav>
</div>
  );
}

export default Navbar;