import React from "react";
import { Icon } from "@iconify/react";
import Tooltip from '@mui/material/Tooltip';
import Footer from "./Footer";
import {Link} from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="project_main">
        <div className="project_heading">
          <h1>Projects</h1>
          <h6>Our recently done projects</h6>
        </div>

        <div className="projects">
          <div className="project_card" data-aos="fade-left">
            <div className="project_card_top">
              <div className="project_card_header">
                <div>
                  <Icon className="project_icon" icon="ph:folder-simple-thin" />
                </div>
                <div>
                <a href="https://github.com/TheSumitNain/marsoverseas.co.in">
                <Tooltip title="Source Code" placement="top">
                  <Icon className="project_icon" icon="uit:github-alt" />
                  </Tooltip>
                  </a>
                  <a href="https://marsoverseas.co.in/">
                <Tooltip title="MarsOverseas.co.in" placement="top">
                  <Icon className="project_icon" icon="system-uicons:external" />
                  </Tooltip>
                  </a>
                </div>
              </div>
              <h4>MarsOverseas.co.in</h4>
              <p>
                MarsOverseas is a study-visa based website. They provide PTE,
                IELTS service & also helps student to go abroad.
              </p>
            </div>
            <div className="project_card_bottom">
              <p>React Firebase Authentication Scss Bootstrap</p>
            </div>
          </div>

          <div className="project_card" data-aos="fade-left">
            <div className="project_card_top">
              <div className="project_card_header">
                <div>
                  <Icon className="project_icon" icon="ph:folder-simple-thin" />
                </div>
                <div>
                <a href="https://github.com/TheSumitNain/dishahelpdesk">
                <Tooltip title="Source Code" placement="top">
                  <Icon className="project_icon" icon="uit:github-alt" />
                  </Tooltip>
                  </a>
                  <a href="https://dishahelpdesk.com/">
                  <Tooltip title="DishaHelpDesk.com" placement="top">
                  <Icon className="project_icon" icon="system-uicons:external" />
                  </Tooltip>
                  </a>
                </div>
              </div>
              <h4>DishaHelpDesk.com</h4>
              <p>
                DishaHelpDesk is a form based website, it helps peoples and
                students that are looking for job.
              </p>
            </div>
            <div className="project_card_bottom">
              <p>React FormSpark Yup Formik Firebase</p>
            </div>
          </div>

          <div className="project_card" data-aos="fade-left">
            <div className="project_card_next">
              <p>Next May Be Your's...</p>
              <button>
                <Link to="/contact">Contact Us </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer /> 
    </>
  );
};

export default Projects;