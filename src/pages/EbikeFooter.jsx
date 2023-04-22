import React from 'react';
import info from "./../images/warranty.jpg";
import battery from "./../images/batteryRange.jpg";
import "./styles/EbikeFooter.css";

function EbikeFooter() {
  return (
    <div className='row footer'>
     <section className="card col-md-6 first" style={{width:"400px"}}>
      <img className="card-img-top" src={info} alt="Card image"/>
      <div className="card-body">
      <h4 className="card-title">Shipping Information</h4>
      <p className="card-text">People interested in this Ebike can click the link. The link
      will take you to the Ebike website. The Ecotric company handles all <big>financial</big> and <big>Shipping</big>
      procedures. This is my pick for a <big>reliable</big> and <big>affordable</big> Ebike. I hope this Information
      was helpful to you. 
      </p>
    </div>
    </section>

    <section className="card col-md-6 second" style={{width:"400px"}}>
      <img className="card-img-top" src={battery} alt="Card image"/>
      <div className="card-body">
      <h4 className="card-title">Eco Friendly Transportation.</h4>
      <p className="card-text">
        Bicycle are naturally <big>eco friendly</big>, and Ebike are also zero emmissions and eco friendly.
        Convenient for a <big>down town commute</big>, and getting around in <big>busy traffic</big>.
         This Ebike will save you <big>time</big> and <big>money</big> at the end of the day.
         <big> Click</big> the link below for more <big>information</big>.
      </p>
      <a href="https://www.ecotric.com/products/48v-fat-tire-portable-folding-electric-bike?sca_ref=1702814.1Cxz8HsOjN" className="btn btn-primary">The 20Cheetah</a>
    </div>
    </section>
   </div>
  )
}

export default EbikeFooter
