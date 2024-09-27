import React from "react";
import Router from "next/router";
import makeStyles from '@mui/styles/makeStyles';
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import headersStyle from "../styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import { Typography, Divider, Box } from "@mui/material";
import Button from "/components/CustomButtons/Button.js";
import SectionServicesRight from "../pages-sections/components/SectionServicesRight.js";
import SectionServicesLeft from "../pages-sections/components/SectionServicesLeft.js";
import { services } from "../data/services-data.js";

const useStyles = makeStyles(headersStyle);

const routeToAiDetails = () => {
  Router.push("/ai-details");
}

const routeToContactUs = () => {
  Router.push("/contact-us");
}

export default function ServicesDetails({ ...rest }) {
  const classes = useStyles();
  console.log('Loaded Services data : ', services ? services.length : 0);
  return (
    <> <h3>Services   </h3>
      <Header
        brand=""
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="info"
        disableGutters={true}
      />
      <div className={classes.container} style={{ marginTop: "5.5em", backgroundColor:"" }}>
        <GridContainer style={{ marginBottom: '.25rem' }}>
          <GridItem md={6} style={{ color: '#112A46' }}>
            <h1 style={{
              fontFamily: 'Montserrat',
              fontSize: '2rem',
              lineHeight: '2rem',
              fontWeight: '600',
              textAlign: "left",
              color: '#112A46'
            }}>  Services
            </h1>
            {/* <Divider style={{
              backgroundColor: '#007bff',
              color: '#007bff',
              border: '#007bff',
              borderRadius: '5px',
              borderTop: '0.25rem solid #007bff',
              width: '50%',
              marginBottom:"1.5rem"
            }}></Divider> */}
          </GridItem>
        </GridContainer>
        {services && services[0] && (<GridContainer id='0' style={{ marginBottom: '.25rem' }}>
          <SectionServicesLeft data={services[0]} />
        </GridContainer>)}
        {services && services[1] && (<GridContainer id='1' style={{ marginBottom: '.25rem' }}>
          <SectionServicesRight data={services[1]} />
        </GridContainer>)}
        {services && services[2] && (<GridContainer id='2' style={{ marginBottom: '.25rem' }}>
          <SectionServicesLeft data={services[2]} />
        </GridContainer>)}
        {services && services[3] && (<GridContainer id='3' style={{ marginBottom: '.25rem' }}>
          <SectionServicesRight data={services[3]} />
        </GridContainer>)}
        {services && services[4] && (<GridContainer id='4' style={{ marginBottom: '.25rem' }}>
          <SectionServicesLeft data={services[4]} />
        </GridContainer>)}
        {services && services[5] && (<GridContainer id='5' style={{ marginBottom: '.25rem' }}>
          <SectionServicesRight data={services[5]} />
        </GridContainer>)}
        {/* {services && services[6] && (<GridContainer id='6' style={{ marginBottom: '.25rem' }}>
          <SectionServicesLeft data={services[6]} />
        </GridContainer>)}
        {services && services[7] && (<GridContainer id='7' style={{ marginBottom: '.25rem' }}>
          <SectionServicesRight data={services[7]} />
        </GridContainer>)}
        {services && services[8] && (<GridContainer id='8' style={{ marginBottom: '.25rem' }}>
          <SectionServicesLeft data={services[8]} />
        </GridContainer>)} */}
       
      </div>
    </>
  );
}
