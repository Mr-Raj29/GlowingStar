import React from 'react'
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram


} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>GlowingStar</h1>
            <p>Solution To All Your Education Problems</p>
        </main>


    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
            <p>
                We are your one and only solutions for all your Edutech Problems.
                We are leading Edutech company whose aim is to increase the problem solving ability of children.
            </p>

        </div>



    </div>


<div className="home3" id="about">
<div>
    <h1>
        who we are?
    </h1>
    <p>
    GlowingStar is an innovative EdTech platform dedicated to empowering students and enhancing their problem-solving abilities. We understand the importance of problem-solving skills in today's rapidly evolving world, where critical thinking and adaptability are essential. Our platform provides a comprehensive range of educational resources, interactive tools, and personalized guidance to help students develop strong problem-solving capabilities. Through engaging and challenging exercises, real-world scenarios, and expert guidance, GlowingStar equips students with the necessary skills to analyze, strategize, and find creative solutions. We are passionate about fostering a generation of confident problem solvers who can thrive in any academic or professional endeavor. Join us on GlowingStar and unlock your true problem-solving potential.
    </p>
</div>

</div>

<div className="home4"  id="brands">

    <div>
        <h1>Brands</h1>
        <article>
            <div style={{
                animationDelay:"0.3s",
            }
               
            }>
              <AiFillGoogleCircle />


            <p>Google</p>
            </div>

            <div style={{
                animationDelay:"0.5s",
            }
               
            }>
              <AiFillAmazonCircle />


            <p>Amazon</p>
            </div>

            <div style={{
                animationDelay:"0.7s",
            }
               
            }>
              <AiFillYoutube />


            <p>Youtube</p>
            </div>

            <div style={{
                animationDelay:"1s",
            }
               
            }>
              <AiFillInstagram />


            <p>Instagram</p>
            </div>
        </article>
    </div>
</div>


    
    
    </>
  );
};

export default Home