import React from "react";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import { makeStyles } from '@mui/styles';
import headersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import Link from 'next/link'
import Card from "/components/Card/Card.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardBody from "/components/Card/CardBody.js";
import Warning from "/components/Typography/Warning.js";
// import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Divider, Typography } from "@mui/material";
import { aboutUs } from "../../data/about-us-data.js";
import SectionAboutUsCard from "./SectionAboutUsCard.js";
const useStyles = makeStyles(headersStyle);

export default function SectionHeaders({ ...rest }) {
  const classes = useStyles();
  const routeToAiDetails = () => {
    Router.push("/ai-details");
  }

  const routeToContactUs = () => {
    Router.push("/contact-us");
  }

  return (
    <div className="cd-section" {...rest} style={{background : "#5288E5"}}>
      {/* HEADER 1 START */}

      <div className={classes.container}>
        <GridContainer >
          <GridItem xs={12} sm={4} md={4} style={{ marginTop: "2rem" }}>
            <SectionAboutUsCard index={0} />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <SectionAboutUsCard index={1} />
          </GridItem>
          <GridItem xs={12} sm={4} md={4} style={{ marginTop: "2rem" }}>
            <SectionAboutUsCard index={2} />
          </GridItem>
        </GridContainer>
         {/*  CONTACT US AND SEE ALL SERVICES */}
         {/* <GridContainer style={{ marginBottom: "2rem", textAlign: "center" }}>
          <GridItem xs={12} sm={12} md={12}>
            <Button
              size="medium"
              variant="contained"
              type="submit"
              sx={{
                width: {
                  lg: '21rem',
                  md: '21rem',
                  sm: '15rem',
                  xs: '15rem'
                },
                height:{
                  lg: '4rem',
                  md: '4rem',
                  sm: '3rem',
                  xs: '3rem' 
                },
                fontSize : {
                  lg: '1.5rem',
                  md: '1.5rem',
                  sm: '1.25rem',
                  xs: '1.125rem' 
              }
              }}

              style={{
                textTransform: "none",
                fontFamily:"Montserrat",
                fontSize:"1.5rem",
                fontWeight : "600",
                color: '#112A46',
                background: '#5288E5',
                textAlign: "left",
                margin: '1em',
                fontSize : "1.5rem",
                boxShadow: "none",
                borderRadius:"0px"
              }}
              onClick={()=>{}}
            >
              More About Us
            </Button>
            <Button
              size="medium"
              variant="contained"
              type="submit"
              sx={{
                width: {
                  lg: '21rem',
                  md: '21rem',
                  sm: '15rem',
                  xs: '15rem'
                },
                height:{
                  lg: '4rem',
                  md: '4rem',
                  sm: '3rem',
                  xs: '3rem' 
                },
                fontSize : {
                  lg: '1.5rem',
                  md: '1.5rem',
                  sm: '1.25rem',
                  xs: '1.125rem' 
              }
              }}

              style={{
                color: '#112A46',
                textTransform: "none",
                fontFamily:"Montserrat",
                fontSize:"1.5rem",
                borderColor: 'black',
                border: '2px solid',
                background: '#5288E5',
                textAlign: "right",
                boxShadow: "none",
                borderRadius:"0px",
                fontWeight : "600"
              }}
              onClick={()=>{}}
            >
              Meet Our Team
            </Button>
          </GridItem>
        </GridContainer> */}
      </div>
    </div>
  );
}