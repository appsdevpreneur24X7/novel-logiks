import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import SectionHome from "/pages-sections/sections-page/SectionHome.js";
import SectionAboutUsDetails from "/pages-sections/sections-page/SectionAboutUsDetails.js";
import SectionServices from "/pages-sections/sections-page/SectionServices.js";
import SectionServicesCarousel from "/pages-sections/sections-page/SectionServicesCarousel.js";
import SectionContactUs from "/pages-sections/sections-page/SectionContactUs.js";
import SectionProducts from "/pages-sections/sections-page/SectionProducts.js";
import SectionCareers from "/pages-sections/sections-page/SectionCareers.js";
import SectionTeams from "/pages-sections/sections-page/SectionTeams.js";
import sectionsPageStyle from "/styles/jss/novel-logiks/pages/sectionsPageStyle.js";
import Footer from "../components/Footer/Footer";
import Button from "/components/CustomButtons/Button.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import headersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import { Typography, Divider, Box, List, ListItem } from "@mui/material";
import Link from "next/link";
import { linksData } from "../data/links-data.js";

const useStyles = makeStyles(sectionsPageStyle);

export default function SectionsPage() {
  React.useEffect(() => {
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (window.location.href.lastIndexOf("#") > 0) {
      document.getElementById(href).scrollIntoView();
    }
    window.addEventListener("scroll", updateView);
    updateView();
    return function cleanup() {
      window.removeEventListener("scroll", updateView);
    };
  });
  const updateView = () => {
    var contentSections = document.getElementsByClassName("cd-section");
    var navigationItems = document
      .getElementById("cd-vertical-nav")
      .getElementsByTagName("a");

    for (let i = 0; i < contentSections.length; i++) {
      var activeSection =
        parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
      if (
        contentSections[i].offsetTop - window.innerHeight / 2 <
        window.pageYOffset &&
        contentSections[i].offsetTop +
        contentSections[i].scrollHeight -
        window.innerHeight / 2 >
        window.pageYOffset
      ) {
        navigationItems[activeSection].classList.add("is-selected");
      } else {
        navigationItems[activeSection].classList.remove("is-selected");
      }
    }
  };
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
  const smoothScroll = (target) => {
    var targetScroll = document.getElementById(target);
    scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  const showAllServices = () => {
    console.log("Routing to /service-details Page ");
    Router.push("/service-details");
  }

  const routeToContactUs = () => {
    console.log("Routing to /contactUs Page ");
    Router.push("/sections#contactUs");
  }

  const classes = useStyles();
  return (
    <div>
      <Header
        color="info"
        brand=""
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
      />
      <div className={classes.main}>
        <SectionHome id="home" />
        <SectionAboutUsDetails id="about-us" />
        <SectionServices id="services" />
        <SectionProducts id="products" />
        {/* <SectionIndustries id="industries" /> */}
        <SectionTeams id="teams" />
        <SectionCareers id="careers" />
        <SectionContactUs id="contactUs" />
      </div>
      <nav id="cd-vertical-nav" style={{ display: 'none' }}>
        <ul>
          <li>
            <a
              href="#home"
              data-number="1"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("home");
                }
              }
              }
            >
              <span className="cd-dot" />
              <span className="cd-label">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#aboutus"
              data-number="2"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("aboutus");
                }
              }
              }
            >
              <span className="cd-dot" />
              <span className="cd-label">About</span>
            </a>
          </li>
          <li>
            <a
              href="#services"
              data-number="3"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("services");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Services</span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              data-number="4"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("products");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Products</span>
            </a>
          </li>
          <li>
            <a
              href="#teams"
              data-number="5"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("teams");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Teams</span>
            </a>
          </li>
          <li>
            <a
              href="#offices"
              data-number="6"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("offices");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Offices</span>
            </a>
          </li>
          <li>
            <a
              href="#careers"
              data-number="7"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("careers");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Careers</span>
            </a>
          </li>
          <li>
            <a
              href="#contactUs"
              data-number="7"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("contactUs");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Contact Us</span>
            </a>
          </li>
        </ul>
      </nav>
      <Footer
        className={classes.footer}
        content={
          <div>
            <Divider />
            <div className={classes.container} >
              <GridContainer style={{alignItems: "baseline" }}>
                <GridItem md={6} >
                  <h4 style ={{fontFamily:"Montserrat", fontSize : "0.75rem", color:"#091133"}}>©2023 Novel Logiks Technologies</h4>
                </GridItem>
                <GridItem md={6} style={{ color: '#112A46', verticalAlign: "baseline" }}>
                  <Button
                    // href=""
                    target="_blank"
                    color="twitter"
                    justIcon
                    simple
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    // href=""
                    target="_blank"
                    color="instagram"
                    justIcon
                    simple
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                  <Button
                    // href=""
                    justIcon simple color="facebook">
                    <i className="fab fa-facebook-square" />
                  </Button>
                </GridItem>

              </GridContainer>
            </div>
          </div>
        }
      />
    </div>
  );
}
