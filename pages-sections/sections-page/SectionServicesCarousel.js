/*eslint-disable*/
import React from "react";
import Router from "next/router";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";
import Carousel from "react-slick";
// @mui/icons-material
import Favorite from "@mui/icons-material/Favorite";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Parallax from "/components/Parallax/Parallax.js";
import headersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import featuresStyle from "/styles/jss/novel-logiks/pages/sectionsSections/featuresStyle.js";

import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardFooter from "/components/Card/CardFooter.js";
import Button from "/components/CustomButtons/Button.js";
import { services } from "../../data/services-data";
import { Typography } from "@mui/material";
import SectionServicesCarousalCard from "./SectionServicesCarousalCard";


const useStyles = makeStyles(featuresStyle);

export default function SectionServicesCarousel() {
  const classes = useStyles();
  console.log("Services Data : ", services)
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  const showAllServices = ()=>{
    console.log("Routing to /service-details Page ");
    Router.push("/service-details");
  }

  const routeToContactUs = ()=>{
    console.log("Routing to /contactUs Page ");
    Router.push("/sections#contactUs");
  }
  
  return (
    <>
      <Header
        brand=""
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="info"
        disableGutters={true}
      />
      <div className={classes.container}>
        <Carousel {...settings}>
          {/* <div >
            <GridContainer>
             <SectionServicesCarousalCard index ={0}/>
             <SectionServicesCarousalCard index ={1}/>
             <SectionServicesCarousalCard index ={2}/>
            </GridContainer>
          </div>
          <div >
            <GridContainer>
              <SectionServicesCarousalCard index ={3}/>
             <SectionServicesCarousalCard index ={4}/>
             <SectionServicesCarousalCard index ={5}/>
            </GridContainer>
          </div> */}
           <div >
            <GridContainer>
              {services.map((each,index)=> <SectionServicesCarousalCard index ={index}/>)}
             {/* <SectionServicesCarousalCard index ={0}/> */}
            </GridContainer>
          </div>
       
        </Carousel>
        {/*  CONTACT US AND SEE ALL SERVICES */}
        {/* <GridContainer style={{ marginBottom: "2rem", textAlign: "center" }}>
          <GridItem xs={12} sm={12} md={12}>
            <Button
                size="medium"
                variant="contained"
                type="submit"
                sx={{
                  width: {
                    lg: '10rem',
                    md: '10rem',
                    sm: '11rem',
                    xs: '12.5rem'
                  },
                }}

                style={{
                  textTransform: "none",
                  color: '#FFFFFF',
                  borderRadius: '5px',
                  backgroundColor: '#0D47A1',
                  textAlign: "center",
                  fontSize: "1.25rem",
                  height: "2.5rem",
                  fontWeight: "600",
                  boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
                }}
                onClick={showAllServices}
              >
                Explore
              </Button>
          </GridItem>
        </GridContainer> */}
      </div>
    </>
  );
}
