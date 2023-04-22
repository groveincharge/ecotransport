import React from 'react'
import './styles/EbikeFeatures.css';
import speedpic from "./../images/speedrail.jpg";
import batterypic from "./../images/battery.jpg"

function EbikeFeatures() {
  return (
    <div className='row features'>
    <section className="card col-md-6 first" style={{width:"400px"}}>
      <div className="card-body">
      <h4 className="card-title">Motor</h4>
      <p className="card-text">
      <big>48V 15AH</big> high quality Li-Lion battery & energy saving motor.
      Max travel range up to <big>29 miles</big> under pure electric mode and <big>52 miles</big> in pedal assisted mode. 
      All class 2 Ebikes will travel at around <big>21-24 mph</big> with a fully charged battery. The Ebike
      industry is standardized. If you want more of anything, you will have to customize your Ebike.
      </p>
      <img className="card-img-top" src={speedpic} alt="Card image"/>
    </div>
    </section>

    <section className="card col-md-6 second" style={{width:"400px"}}>
      <div className="card-body">
      <h4 className="card-title">Maintenance</h4>
      <p className="card-text">Ebikes require a <big>minimum</big> amount of maintenance. You charge your battery,
      change your brake pads; and fix a flat tire. Your warranty should cover any major issues. 
      The <big>Ecotric Company</big> is a leader in the Ebike Industry, and all problems are solved according
      to industry standards. <big>Terms</big> and <big>conditions</big> are determined according to purchase agreement.
     </p>
     <img className="card-img-top" src={batterypic} alt="Card image"/>
    </div>
    </section>
    </div>
  )
}

export default EbikeFeatures
