import React from 'react';
import './styles/EbikePage.css';
import brakespic from "./../images/brakes.jpg";
import suspensionpic from "./../images/frontsuspension.jpg"

function EbikePage() {
  return (
    <div className='row maintenance'>
    <section className="card col-md-6 first" style={{width:"400px"}}>
      <div className="card-body">
      <h4 className="card-title">Brakes</h4>
      <p className="card-text">The <big>20Cheetah</big> features <big>160mm</big> disc brakes front and rear.
        <big> Mechanical</big> Disc Brakes with matching pads for fast and <big>reliable braking</big>. Line pull
        adjustable levers for finger comfort. The brake system is <big>standardized</big>, and <big>replacement 
        pads</big> are easy to find.
        </p>
        <img className="card-img-top" src={brakespic} alt="Card image"/>
    </div>
    </section>
    
    <section className="card col-md-6 second" style={{width:"400px"}}>
     
      <div className="card-body">
      <h4 className="card-title">Suspension</h4>
      <p className="card-text">The <big>20Cheetah</big> has a <big>soft frontend suspension</big> and a hard tail.
      The tail can be made a little softer with a suspension seat. There are always minor things to do
      for an increased comfort level. This Ebike is <big>reliable</big> and <big>good</big> for street,
       or off road <big>adventure</big>.
      </p>
      <img className="card-img-top" src={suspensionpic} alt="Card image"/>
    </div>
    </section>
    </div>
  )
}

export default EbikePage
