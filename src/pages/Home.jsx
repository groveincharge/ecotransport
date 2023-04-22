import React from 'react';
import "./styles/Home.css";
import programpic from "./../images/cheetahpic.jpg";
import foldingpic from "./../images/mattfold.jpg";

function Home() {
  return (
    <div className="row home">
      <section className="card col-md-6 first" style={{width:"400px"}}>
      <div className="card-body">
      <h4 className="card-title">Consider the 20Cheetah!</h4>
      <p className="card-text">The <big>20Cheetah</big> has the latest in Ebike technology. Use the back rack at your convenience, outdoor hobbies,
      grocery shopping, and minor pick-up jobs. This <big>cargo Ebike</big> is definitely worth
      the money. Ecotric Matt Green <big>48V</big> Fat Tire Portable and Folding Electric Bike with color LCD display.<br/>
      <big>price</big>: $1,299.99
      </p>
      <img className="card-img-top" src={programpic} alt="Card image"/>
    </div>
    </section>
    
    <section className="card col-md-6 second" style={{width:"400px"}}>
      <div className="card-body">
      <h4 className="card-title">Fold in to save Space.</h4>
      <p className="card-text">This is just a <big>fun Ebike</big> at a <big>good price</big>.
        I recommend this Ebike for the person who just wants to have fun, and convenience
         with 2-wheel transportation. Nobody wants to be <big>stuck</big> in busy local traffic.
          A <big>20Cheetah</big> Ebike might be the <big>answer</big>.</p>
          <img className="card-img-top" src={foldingpic} alt="Card image"/>
    </div>
    </section>
</div>

  )
}

export default Home
