import { useEffect, useState } from "react";
import styled from "styled-components";
import "./style.css";
import {
  BiUser,
  BiMenuAltRight,
  BiChevronLeft,
  BiChevronRight,
  BiRightArrowAlt,
} from "react-icons/bi";
import shuttle from "./assets/shuttle.png";
import dimg from "./assets/Darth_Vader.png";

const Portfolio = () => {
  useEffect(() => {
    const panes = document.querySelectorAll(".pane-container .pane");
    for (let j = 0; j < panes.length; j++) {
      const btn = document.createElement("div");
      btn.classList.add("btn");
      //   btn.innerHTML = `${(<BiRightArrowAlt></BiRightArrowAlt>)}`;
      //   btn.innerHTML = "Hellow There";
      btn.innerHTML = "Hello There";
      panes[j].appendChild(btn);

      panes[j].addEventListener("mouseover", () => {
        panes.forEach((pane) => {
          pane.style.background = "rgba(0,0,0,0.552)";
        });
        panes[j].style.background = "transparent";
      });
      panes[j].addEventListener("mouseout", () => {
        panes.forEach((pane) => {
          pane.style.background = "";
        });
        panes[j].style.background = "";
      });
    }
    const btn = document.querySelector(".discover");
    const curtains = document.querySelectorAll(".curtain");

    const discover_page = document.querySelector(".discover-page");
    const pane_container = document.querySelector(".pane-container");

    const discoverPage = () => {
      curtains.forEach((curtain) => {
        curtain.classList.add("active");
      });
      discover_page.classList.add("acitve");
    };

    btn.addEventListener("click", discoverPage);

    const back = document.querySelector(".ret.left");
    const nxt = document.querySelector(".ret.right");

    back.addEventListener("click", () => {
      curtains.forEach((curtain) => {
        curtain.classList.remove("active");
      });
      discover_page.classList.remove("acitve");
    });
    let index = 0;
    const nxtPane = () => {
      panes.forEach((pane) => {
        pane.style.background = "rgba(0,0,0,0.552)";
        panes[index].style.background = "transparent";
        index++;
        if (index >= panes.length) {
          index = 0;
        }
      });
    };
    nxt.addEventListener("click", nxtPane);
  }, []);
  return (
    <div className="port3-body">
      <div className="container">
        <div className="nav-bar">
          <h1>infinity</h1>
          <div className="control-bar">
            <BiUser name="user" className="menu account"></BiUser>
            <BiMenuAltRight
              name="menu-alt-right"
              className="menu"
            ></BiMenuAltRight>
          </div>
        </div>
        <div className="logo-container">
          <div className="logo">
            <div className="mini-logo"></div>
            <div className="semi-mini-logo"></div>
          </div>
          <div className="semi-logo"></div>
        </div>
        <div className="text-container">
          <h1>Personal</h1>
          <h2>react Study</h2>
          <h3>
            React is a free and open-source front-end JavaScript library for
            building user interfaces based on UI components. It is maintained by
            Meta and a community of individual developers and companies.
          </h3>
          <button className="discover">
            <span>Discover</span>
          </button>
        </div>
      </div>
      {/* style전달기법 유의. */}
      <div className="curtain c1" style={{ "--i": 1 }}></div>
      <div className="curtain c2" style={{ "--i": 2 }}></div>
      <div className="curtain c3" style={{ "--i": 3 }}></div>

      <div className="discover-page">
        <div className="return">
          <BiChevronLeft
            className="ret left"
            type="solid"
            name="chevron-left"
          ></BiChevronLeft>
          <BiChevronRight
            className="ret right"
            type="solid"
            name="chevron-right"
          ></BiChevronRight>
        </div>
        <div className="pane-container">
          <div className="pane" style={{ "--j": 1 }}>
            <h4>01</h4>
            <div className="text-container">
              {/* <img src={shuttle} alt="" /> */}
              <img src={dimg} alt="" />

              <h1>performance</h1>
              <h3>- performance tracking</h3>
              <span>performance is the key</span>
              <ul>
                <li>alpha index</li>
                <li>beta index</li>
                <li>gamma index</li>
              </ul>
            </div>
          </div>
          <div className="pane" style={{ "--j": 2 }}>
            <h4>02</h4>
            <div className="text-container">
              {/* <img src={shuttle} alt="" /> */}
              <img src={dimg} alt="" />

              <h1>security</h1>
              <h3>- security tracking</h3>
              <span>security is the key</span>
              <ul>
                <li> index</li>
                <li> index</li>
                <li> index</li>
              </ul>
            </div>
          </div>
          <div className="pane" style={{ "--j": 3 }}>
            <h4>03</h4>
            <div className="text-container">
              {/* <img src={shuttle} alt="" /> */}
              <img src={dimg} alt="" />

              <h1>hide title</h1>
              <h3>- sub title</h3>
              <span>detail is the key</span>
              <ul>
                <li> index</li>
                <li> index</li>
                <li> index</li>
              </ul>
            </div>
          </div>
          <div className="pane" style={{ "--j": 4 }}>
            <h4>04</h4>
            <div className="text-container">
              {/* <img src={shuttle} alt="" /> */}
              <img src={dimg} alt="" />
              <h1>hide title</h1>
              <h3>- sub title</h3>
              <span>detail is the key</span>
              <ul>
                <li> index</li>
                <li> index</li>
                <li> index</li>
              </ul>
            </div>
          </div>
          <div className="pane" style={{ "--j": 5 }}>
            <h4>05</h4>
            <div className="text-container">
              {/* <img src={shuttle} alt="" /> */}
              <img src={dimg} alt="" />
              <h1>hide title</h1>
              <h3>- sub title</h3>
              <span>detail is the key</span>
              <ul>
                <li> index</li>
                <li> index</li>
                <li> index</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
