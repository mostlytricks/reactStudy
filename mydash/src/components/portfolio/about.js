import React, { useEffect, useState } from "react";
import styled from "styled-components";

// import { BiToggleLeft, BiToggleRight, BiMenu, BiX } from "react-icons/bi";
import "./portfolio.css";
import "./portfolioAbout.css";

import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiPython,
  DiJava,
} from "react-icons/di";

const About = () => {
  return (
    <section className="about section" id="about-me">
      <div className="container">
        <div className="section-description d-grid">
          <div className="scroll-reveal-left">
            <p className="description">
              안녕하세요, <span className="text-bold">인생</span>은 쉽지 않고 갈
              길은 멉니다. 하나 둘 <span className="text-bold">셋</span> 하면
              화이팅 하시죠. 하나 둘 <br />
              <span className="text-bold">화이팅!</span>
            </p>
          </div>
          <div className="scroll-reveal-right">
            <div className="description-image has-sparkles">
              <img src="./assets/Darth_Vader.png" alt=""></img>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="tech-stack d-grid">
          <div className="tech-stack-item" data-tooltip="HTML5">
            <i className="bx bxl-html5">
              <DiHtml5></DiHtml5>
            </i>
          </div>

          <div className="tech-stack-item" data-tooltip="HTML5">
            <i className="bx bxl-css3">
              <DiCss3></DiCss3>
            </i>
          </div>

          <div className="tech-stack-item" data-tooltip="HTML5">
            <i className="bx bxl-javascript">
              <DiJavascript></DiJavascript>
            </i>
          </div>

          <div className="tech-stack-item" data-tooltip="HTML5">
            <i className="bx bxl-react">
              <DiReact></DiReact>
            </i>
          </div>

          <div className="tech-stack-item" data-tooltip="HTML5">
            <i className="bx bxl-python">
              <DiPython></DiPython>
            </i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
