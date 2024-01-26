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
    <div className="cd-section" {...rest}>
      {/* HEADER 1 START */}

      <div className={classes.container}>
        <GridContainer style={{ marginBottom: '.25rem' }}>
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
          <GridItem md={6} style={{ color: '#112A46' }}>
            <Typography
              style={{
                fontFamily: 'Montserrat',
                fontSize: '1rem',
                lineHeight: '1.5rem',
                fontWeight: '300',
                textAlign: "left"
              }}>
              We are an aspiring young organization led by founders with technology consulting experience
              of 2000 + Man months between them touching upon a gamut of industries. After 2 decades of
              experience in the technology industry and medical fraternity many of the current leaders
              including exceptional tech talent from Gen Z interconnected by common threads came
              together to set up Novel Logiks Technologies– Ants are known to be hardworking and industrious,
              in addition a Novel Logiks is one that is ingeniously clever in conception or execution, the name
              reverberates with the ethos that we had in mind while this was an “Idea”.
            </Typography>
            <br />
            <Typography
              style={{
                fontFamily: 'Montserrat',
                fontSize: '1rem',
                lineHeight: '1.5rem',
                fontWeight: '300',
                textAlign: "left",
              }}>
              We decided to bring in our experience to drive business outcomes and partner with
              organizations with cutting edge technologies to position themselves to be market
              differentiators to customers we serve. Our Network of tech experts, product owners are
              spread across geographies to at best provide a near shore experience where required and
              with significant talent capabilities spread across India.
            </Typography>
            <br />
            <Typography style={{
              fontFamily: 'Montserrat',
              fontSize: '1rem',
              lineHeight: '1.5rem',
              fontWeight: '300',
              textAlign: "left"
            }}>
              We seek to be the partner of trust and execution in an ever changing world defined by
              automation, artificial intelligence and other digital transformation avenues. We also are
              passionate about helping customers with set up of Global Business Services given our
              extensive work experience in setting up Global Captives prior to our entrepreneurial journey

            </Typography>
          </GridItem>
          <GridItem md={6} style={{ color: '#112A46' }}>
            <GridContainer>
              <GridItem md={12} style={{ textAlign: "center", justifyContent: "center" }} >
                <img
                  src="img/resized_imgs/hero-section.png"
                  alt="ai pic"
                  style={{ width: '100%' }}
                />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <GridContainer >
          <GridItem xs={12} sm={4} md={4} style={{ marginTop: "2rem" }}>
          <Card blog style={{ minHeight:"15rem", height:"15rem" }}>
              <CardBody>
                <GridItem style={{textAlign:"center", justifyContent:"center", alignItems:"center"}}>
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
                  color: '#112A46'
                }}>Vision</h6>
                <h4
                  style={{
                    color: 'black',
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
          <Card blog style={{ backgroundColor: "#112A46", minHeight:"15rem", height:"15rem" }}>
              <CardBody>
                <GridItem style={{textAlign:"center", justifyContent:"center", alignItems:"center"}}>
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
                  color: '#112A46'
                }}> Mission</h6>
                <h4
                  style={{
                    color: 'black',
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
            <Card blog style={{  minHeight:"15rem", height:"15rem" }}>
              <CardBody >
                <GridItem style={{textAlign:"center", justifyContent:"center", alignItems:"center"}}>
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
                  color: '#112A46'
                }}> Values</h6>
                <h4
                  style={{
                    color: 'black',
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