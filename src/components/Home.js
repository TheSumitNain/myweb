import React from "react";
import { Icon } from "@iconify/react";
import mainImg from "../images/res2.png";
import Footer from "./Footer";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
      <section>
        <div class="circle"></div>
        <div class="content">
          <div class="textBox">
            <h2>
              I'm <span>Sumit Nain</span> <br />A Web-developer
            </h2>
            <p>
              who aims to work with small businesses and marginalized
              communities to bring their passions to life. I offer development
              services of websites!
            </p>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div class="imgBox">
            <img src={mainImg} alt="img" class="starbucks" />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Home;

{
  /* Looking For Web-Developer

 I am a frontend web-developer, who aims to work with small        
        businesses and marginalized communities to bring their passions to
               life. I offer development services of websites! */
}

{
  /* <button>
                  <a href="tel:+918685087807">
                    <Icon icon="material-symbols:call" />
                  </a>
                </button>
              
                <button>
                  <a href="https://github.com/TheSumitNain/">
                    <Icon icon="icomoon-free:github" />
                  </a>
                </button>
  
                <button>
                  <a href="https://www.instagram.com/thesumitnain/">
                    <Icon icon="ion:logo-instagram" />
                  </a>
                </button> */
}
