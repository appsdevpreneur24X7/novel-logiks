import React from "react";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
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
import { Button, Divider, Typography } from "@mui/material";
import { home } from "../../data/home-data";
import SectionHomeLeft from "../components/SectionHomeLeft";
import SectionHomeRight from "../components/SectionHomeRight";
const useStyles = makeStyles(headersStyle);

export default function SectionAboutUsDetails({ ...rest }) {
  const classes = useStyles();
  const routeToAiDetails = () => {
    Router.push("/ai-details");
  }

  const routeToContactUs = () => {
    Router.push("/contact-us");
  }

  return (
    <div className="cd-section" {...rest}>
      {/* HEADER 1 START */}

      <div className={classes.container} style={{marginTop:"10rem"}}>
        <GridContainer style={{ marginBottom: '.25rem', marginTop:"2rem" }}>
          <GridItem md={12} style={{ color: '#112A46' }}>
            <h1 style={{
              fontFamily: 'Montserrat',
              fontSize: '2rem',
              lineHeight: '2rem',
              fontWeight: '600',
              textAlign: "left",
              color: '#112A46'
            }}>  About Us
            </h1>
            <Divider style={{
              backgroundColor: '#5288E5',
              color: '#5288E5',
              border: '#5288E5',
              borderRadius: '5px',
              borderTop: '0.25rem solid #5288E5',
              width: '25%'
            }}></Divider>
          </GridItem>
        </GridContainer>
        <GridContainer style={{ marginBottom: '2rem', marginTop: '2rem' }}>
          {home && home[0] && (<GridContainer id='0'>
            <SectionHomeLeft data={home[0]} />
          </GridContainer>)}
          {home && home[1] && (<GridContainer id='2' >
            <SectionHomeRight data={home[1]} />
          </GridContainer>)}
          {home && home[2] && (<GridContainer id='2' >
            <SectionHomeLeft data={home[2]} />
          </GridContainer>)}
        </GridContainer>
        <GridContainer >
          <GridItem xs={12} sm={4} md={4} style={{ marginTop: "2rem" }}>
            <Card blog style={{ minHeight: "15rem", height: "15rem" ,backgroundColor:"#5288E5"}}>
              <CardBody>
                <GridItem style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                  <a href="#pablo" onClick={(e) => e.preventDefault()} style={{ width: "2rem", height: "2rem", textAlign: "center", justifyContent: "center" ,color: '#FFFFFF'}}>
                    <img src="/img/resized_imgs/mission.png" alt="..." style={{ width: "2rem", height: "2rem", textAlign: "center", justifyContent: "center" ,color: '#FFFFFF'}} />
                  </a>
                </GridItem>
                <h6 className={classes.cardCategory} style={{
                  fontFamily: 'Montserrat',
                  fontSize: '1.5rem',
                  lineHeight: '1.5rem',
                  fontWeight: '600',
                  textAlign: "center",
                  color: '#FFFFFF'
                }}>Vision</h6>
                <h4
                  style={{
                    color: '#FFFFFF',
                    fontSize: "0.85rem",
                    lineHeight: '1rem',
                    fontFamily: 'Montserrat', fontWeight: 300

                  }}>
                  <Grid container>
                    <Grid item xs={12}>
                      To contribute to the overall wellbeing of the communities we operate our business.
                    </Grid>
                  </Grid>
                </h4>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            {/* <Card blog style={{ backgroundColor: "#5288E5", minHeight:"15rem", height:"15rem" }}> */}
            <Card blog style={{ minHeight: "15rem", height: "15rem" ,backgroundColor:"#5288E5"}}>
              <CardBody>
                <GridItem style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                  <a href="#pablo" onClick={(e) => e.preventDefault()} style={{ width: "2rem", height: "2rem", textAlign: "center", justifyContent: "center" }}>
                    <img src="/img/resized_imgs/mission.png" alt="..." style={{ width: "2rem", height: "2rem", textAlign: "center", justifyContent: "center" }} />
                  </a>
                </GridItem>
                <h6 className={classes.cardCategory} style={{
                  fontFamily: 'Montserrat',
                  fontSize: '1.5rem',
                  lineHeight: '1.5rem',
                  fontWeight: '600',
                  textAlign: "center",
                  color: '#FFFFFF'
                }}> Mission</h6>
                <h4
                  style={{
                    color: '#FFFFFF',
                    fontSize: "0.85rem",
                    lineHeight: '1rem',
                    fontFamily: 'Montserrat', fontWeight: 300
                  }}>
                  <Grid container >
                    <Grid item xs={12}>
                      To inspire people and improve lives through technology delivered by us.
                    </Grid>
                  </Grid>
                </h4>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4} md={4} style={{ marginTop: "2rem" }}>
          <Card blog style={{ minHeight: "15rem", height: "15rem" ,backgroundColor:"#5288E5"}}>
              <CardBody >
                <GridItem style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                  <a href="#pablo" onClick={(e) => e.preventDefault()} style={{ width: "2rem", height: "2rem", textAlign: "center", justifyContent: "center" }}>
                    <img src="/img/resized_imgs/mission.png" alt="..." style={{ width: "2rem", height: "2rem", textAlign: "center", justifyContent: "center" }} />
                  </a>
                </GridItem>
                <h6 className={classes.cardCategory} style={{
                  fontFamily: 'Montserrat',
                  fontSize: '1.5rem',
                  lineHeight: '1.5rem',
                  fontWeight: '600',
                  textAlign: "center",
                  color: '#FFFFFF'
                }}> Values</h6>
                <h4
                  style={{
                    color: '#FFFFFF',
                    fontSize: "0.85rem",
                    lineHeight: '1rem',
                    fontFamily: 'Montserrat', fontWeight: 300
                  }}>
                  <Grid container>
                    <Grid item xs={6}>
                      Oneness
                    </Grid>
                    <Grid item xs={6}>
                      Trust
                    </Grid>
                    <Grid item xs={6}>
                      Humour
                    </Grid>
                    <Grid item xs={6}>
                      Integrity
                    </Grid>
                    <Grid item xs={6}>
                      Thrive
                    </Grid>
                    <Grid item xs={6}>
                      Strive
                    </Grid>
                  </Grid>
                </h4>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}