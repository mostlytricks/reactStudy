import React, { useEffect, useState } from "react";
import styled from "styled-components";

// import { BiToggleLeft, BiToggleRight, BiMenu, BiX } from "react-icons/bi";
import "./portfolio.css";
import "./portfolioHero.css";

const Hero = () => {
  return (
    <section className="hero section">
      <div className="container">
        <h1 className="title main-title">
          Crea<span className="inline-image has-sparkles"></span>tive
          <br /> UX/UI Designer
          <br /> Develope<span className="has-sparkles-alt">r</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
