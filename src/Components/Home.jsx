import React from 'react'
import '../style/home.css';
import vg from '../images/2.webp'



function Home() {
  return (
    <>
       <div className="mainbox">

       
      <section className="home">
          
      </section>

      {/*  about section  */}

      <section className="about">
          <img src={vg} alt="Graphics" />
          <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea accusamus quod ipsa eos eum dolor modi obcaecati architecto, dignissimos cumque nesciunt, doloribus consequuntur, aperiam adipisci soluta cupiditate. Consequatur, mollitia debitis!</p>
          </div>
      </section>
      </div>
    </>
  )
}

export default Home
