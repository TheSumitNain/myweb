import React from "react";
import { Icon } from "@iconify/react";
import Footer from "./Footer";

const Service = () => {
  return (
    <>
      <div className="service">
        <p>Our Services</p>
      </div>
      <div className="box" style={{ background: "#caf1de" }}>
        <div className="box_left">
          <div className="drop" style={{ color: "#01b4ff" }}>
            <div className="content">
              <h2>
                <Icon className="icon" icon="logos:react" />
              </h2>
              <p style={{ color: "#01b4ff" }}>React</p>
              <a style={{ background: "#01b4ff" }}>Read More</a>
            </div>
          </div>
        </div>
        <div className="box_right">
          <p align="justify" data-aos="zoom-in-right">
            We are using React.js(JavaScript lightweight library) for UI (User
            Interface). JavaScript library that helps develop fast and
            user-friendly web-applications. Compared to other frameworks, such
            as Vue.js, Ember.js, or Angular.js <br />
            Most famous companies like as Facebook, Instagram, Whatsapp etc also
            using React for fast performace and stability.
          </p>
        </div>
      </div>

      <div className="box" style={{ background: "#e1f8dc" }}>
        <div className="box_right">
          <p align="justify" data-aos="zoom-in-right">
            We uses firebase services (provided by Google) for authentication
            (signup, login, logout, login with google, facebook, github, twitter
            etc), database, storage & hosting-deployment. Its totally secure
            with Google Securities.
          </p>
        </div>
        <div className="box_left">
          <div className="drop" style={{ color: "#be01fe" }}>
            <div className="content">
              <h2>
                <Icon className="icon" icon="logos:firebase" />
              </h2>
              <p style={{ color: "#be01fe" }}>Firebase</p>
              <a style={{ background: "#be01fe" }}>Read More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="box box2" style={{ background: "#caf1de" }}>
        <div className="box_left">
          <div className="drop" style={{ color: "#ff0f5b" }}>
            <div className="content">
              <h2>
                <Icon className="icon" icon="vscode-icons:file-type-scss" />
              </h2>
              <p style={{ color: "#ff0f5b" }}>Scss</p>
              <a style={{ background: "#ff0f5b" }}>Read More</a>
            </div>
          </div>
        </div>
        <div className="box_right">
          <p align="justify" data-aos="zoom-in-right">
            We create smooth and responsive website for all devices (laptop,
            desktop, tablet and mobile), We try to implement advance features
            like as Scss, Bootstrap & MaterialUI, React-Iconify, Google-Fonts
            and etc for awesome frontend impression on users.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;

// <div className="container">
{
  /* <div className="drop" style={{ color: "#01b4ff" }}>
  <div className="content">
    <h2>
      <Icon className="icon" icon="logos:react" />
    </h2>
    <p>React</p>
    <a style={{ background: "#01b4ff" }}>Read More</a>
  </div>
</div> */
}
// <div className="drop" style={{ color: "#be01fe" }}>
//   <div className="content">
//     <h2>
//       <Icon className="icon" icon="logos:firebase" />
//     </h2>
//     <p>Firebase</p>
//     <a style={{ background: "#be01fe" }}>Read More</a>
//   </div>
// </div>

// <div className="drop" style={{ color: "#ff0f5b" }}>
//   <div className="content">
//     <h2>
//       <Icon className="icon" icon="vscode-icons:file-type-scss" />
//     </h2>
//     <p>Scss</p>
//     <a style={{ background: "#ff0f5b" }}>Read More</a>
//   </div>
// </div>
// </div>

// {/* <div className="service_list">
// <div data-aos="zoom-in-right" className="service_card">
//   <Icon className="icon" icon="vscode-icons:file-type-scss" />
//   <h4>Scss</h4>
// </div>
// <div data-aos="zoom-in-up" className="service_card">
//   <Icon className="icon" icon="logos:react" />
//   <h4>React</h4>
// </div>
// <div data-aos="zoom-in-right" className="service_card">
//   <Icon className="icon" icon="logos:firebase" />
//   <h4>Firebase</h4>
// </div>
// </div> */}

// <p align="justify">
// We create websites with advance technologies like as ReactJS,
// Javascript, Firebase, SCSS, React-Bootstrap, FormSpark and many
// more...
// </p>
// <p align="justify">
// We are using React.js(JavaScript lightweight library) for UI (User
// Interface). JavaScript library that helps develop fast and
// user-friendly web-applications. Compared to other frameworks, such as
// Vue.js, Ember.js, or Angular.js <br />
// Most famous companies like as Facebook, Instagram, Whatsapp etc also
// using React for fast performace and stability.
// </p>
// <p align="justify">
// We uses firebase services (provided by Google) for authentication
// (signup, login, logout, login with google, facebook, github, twitter
// etc), database, storage & hosting-deployment. Its totally secure with
// Google Securities.
// </p>
// <p align="justify">
// For smooth & responsive website, we implements SCSS, Bootstrap &
// MaterialUI, React-Iconify, Google-Fonts for good looking.
// </p>
