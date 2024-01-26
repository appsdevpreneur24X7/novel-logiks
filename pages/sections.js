import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import SectionHome from "/pages-sections/sections-page/SectionHome.js";
import SectionAboutUs from "/pages-sections/sections-page/SectionAboutUs.js";
import SectionServices from "/pages-sections/sections-page/SectionServices.js";
import SectionServicesCarousel from "/pages-sections/sections-page/SectionServicesCarousel.js";
import SectionContactUs from "/pages-sections/sections-page/SectionContactUs.js";
import SectionIndustries from "/pages-sections/sections-page/SectionIndustries.js";
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
  const showAllServices = ()=>{
    console.log("Routing to /service-details Page ");
    Router.push("/service-details");
  }

  const routeToContactUs = ()=>{
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
        <SectionServices id="services" />
        <SectionAboutUs id="aboutus" />
        <SectionIndustries id="industries" />
        <SectionTeams id="teams" />
        {/* <SectionContactUs id="contactUs" /> */}
        <SectionCareers id="careers" />
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
              href="#industries"
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
                  smoothScroll("industries");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Industries</span>
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
        </ul>
      </nav>
      <Footer
        className={classes.footer}
        content={
          <div style={{ background: "#FBFBFD" }}>
            {/* <div className={classes.container} >
              <GridContainer style={{ marginBottom: '2rem', marginTop: '4rem', alignItems: "baseline" }}>
                <GridItem md={4} style={{ color: '#112A46' }}>
                  ©2023 Novel Logiks Technologies
                </GridItem>
                <GridItem md={4} style={{ color: '#112A46', verticalAlign: "baseline" }}>
                  <img src="/img/resized_imgs/transparent-logo.png" alt="novellogiks" style={{ width: "4rem", height: "4rem", marginRight: "1.5rem" }} />
                  <img src="/img/resized_imgs/logo-watermark.png" alt="novellogiks" style={{ marginRight: "1.5rem" }} />
                </GridItem>
                <GridItem md={4} style={{ color: '#112A46' }}>
                  <Button
                    size="medium"
                    variant="contained"
                    type="submit"
                    justify="center"
                    style={{
                      textTransform: "none",
                      color: '#112A46',
                      background: '#dfe3ee',
                      width: '6.75rem',
                      height: "2rem",
                      whiteSpace: 'nowrap',
                      boxShadow: "none"
                    }}
                    onClick={() => { }}
                  >
                    Contact Us
                  </Button>
                </GridItem>
              </GridContainer>
            </div> */}
            <Divider />
            <div style={{ float: "left" }}>
              ©2023 Novel Logiks Pvt Ltd
              {/* {linksData.map(each => (<Link href={each.href} >
                <a
                  style={{ color: '#111111' }}
                  onClick={()=>{}}
                >
                  <span style={{
                    whiteSpace: "nowrap", fontFamily: '"Open Sans", sans-serif', fontSize: '0.875rem',
                    lineHeight: '2rem', margin:"1rem"
                  }}> {each.title}</span>
                </a>
              </Link>))} */}
            </div>
            <div style={{ float: "right" }}>
              <Button
                href="https://twitter.com/novellogikshill"
                target="_blank"
                color="twitter"
                justIcon
                simple
              >
                <i className="fab fa-twitter" />
              </Button>
              <Button
                href="https://instagram.com/novellogikshill?igshid=MzNlNGNkZWQ4Mg=="
                target="_blank"
                color="instagram"
                justIcon
                simple
              >
                <i className="fab fa-instagram" />
              </Button>
              <Button href="https://www.facebook.com/people/Novel Logiks/100094870993690"
                justIcon simple color="facebook">
                <i className="fab fa-facebook-square" />
              </Button>
            </div>
          </div>
        }
      />
    </div>
  );
}
