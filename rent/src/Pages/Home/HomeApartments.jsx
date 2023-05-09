import React from 'react';
import styled from "../Home/HomeApartments.module.scss";
const Home = () => {
  return (
    <div className={styled.part_1}>
      <div className="container">
        <div className="row">
            <div className="col-xl-6">
             <div className={styled.texts}>
             <h2>Apartment marketing solutions that work as hard as you do. Period.</h2>  
              <p><span>Rent. is more than a marketplace.</span> We help you easily attract new renters, engage prospects during their search, and nurture resident relationships.</p>
             
              <div className={styled.button}>
              <button>Learn How</button>
               <div className={styled.button2}>
               <button>Get in Touch</button></div>            
              </div>
             </div>
            </div>
            <div className="col-xl-6">
                <div className={styled.img_overlay}>
                    <img src="https://solutions.rent.com/wp-content/uploads/2022/06/Rent.-LinkedIn-Covers-276-%C3%97-559-px.png" alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Home
