import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/portfolio/header";
import Hero from "../components/portfolio/hero";
import About from "../components/portfolio/about";

const Portfolio = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <About></About>
    </>
  );
};

export default Portfolio;
