/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import Link from "next/link";
import { headerLinksData } from "../../data/header-links-data.js";
import makeStyles from '@mui/styles/makeStyles';

// @mui/icons-material
import Button from "/components/CustomButtons/Button.js";
import styles from "/styles/jss/novel-logiks/components/headerLinksStyle.js";
import { Typography } from "@mui/material";
import Router from "next/router";
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
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
  var onClickSections = {};

  const { dropdownHoverColor } = props;
  const classes = useStyles();
  console.log(headerLinksData);
  const { links } = headerLinksData;
  return (
    <>
      <img src="/img/resized_imgs/transparent-logo.png" alt="novellogiks" style={{ width: "4rem", height: "4rem", marginRight: "1.5rem" }} />
      <div >
        <img
         src="/img/logo/nl-main-title.png" alt="Novel Logiks" style={{ marginRight: "1.5rem" }} />
         {/* <h1 style={{
                fontFamily: 'Montserrat',
                fontSize: '2rem',
                lineHeight: '2rem',
                fontWeight: '600',
                textAlign: "left"
              }}>  Novel Logiks
              </h1> */}
      </div>
      <span style={{ marginLeft: "auto", marginRight: "1.5rem"  }}></span>
      {links.map(each => (<Link href={each.href} >
        <a
          className={classes.dropdownLink} style={{ color: '#111111' }}
          onClick={(e) => {
            if (each.title === "Services" || each.title === "About")
              Router.push(each.href)
            else
              smoothScroll(e, each.smoothScroll)
          }
          }
        >
          <span style={{
            whiteSpace: "nowrap", fontFamily: '"Open Sans", sans-serif', fontSize: '0.875rem',
            lineHeight: '2rem'
          }}> {each.title}</span>
        </a>
      </Link>))}
    </>

  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};
