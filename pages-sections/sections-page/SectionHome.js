import React from "react";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import { makeStyles } from '@mui/styles';
import headersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import Router from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";
import { home } from "../../data/home-data";
import SectionHomeLeft from "../components/SectionHomeLeft";
import SectionHomeRight from "../components/SectionHomeRight";
import aiVideo from "../../public/video/ai-medical.mp4";
const useStyles = makeStyles(headersStyle);

export default function SectionHeaders({ ...rest }) {
  const classes = useStyles();
  console.log(home)
  const routeToAiDetails = () => {
    Router.push("/ai-details");
  }

  const routeToContactUs = () => {
    Router.push("/sections#contactUs");
  }
  return (
    <div className="cd-section" {...rest} style={{ marginTop: "5rem", width: "100%" }} >
      <div className={classes.container} >
      <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}></div>
      <video autoPlay loop muted style={{ position: "relative", width: "100%", height: "100%", objectFit: "cover" }}>
        <source src={aiVideo} type="video/mp4" />
      </video>
        <GridContainer style={{ marginBottom: '2rem', zIndex:100}}>
          <GridItem md={12} style={{ color: '#112A46', paddingTop: "3rem" }}>
            <Typography
              sx={{
                fontFamily: 'Montserrat',
                fontSize: {
                  lg: '3.125rem',
                  md: '3.125rem',
                  sm: '2rem',
                  xs: '2rem'
                },
                lineHeight: {
                  lg: '4.125rem',
                  md: '4.125rem',
                  sm: '3rem',
                  xs: '3rem'
                }
              }}
              style={{
                fontFamily: 'Montserrat',
                fontWeight: '600',
                textAlign: "left",
                color: '#091133',
                marginBottom: "2rem"
              }}
            >  We provide Digital Solutions cutting across Sectors.
            </Typography>
            <div style={{ marginBottom: "2rem", color: "#112A46", fontFamily: 'Montserrat', }}>
              To ignite expansion and ward off competitors, organizations should integrate hardware, software, and services to create customized solutions that address customers' needs and potentially address undiscovered challenges. Digitization has the potential not only to bring about transformation by cutting costs and enhancing core processes but can, and often should, serve as a substantial source of additional revenue. At Novel Logiks, we guide organizations in taking successful transformative strides, leveraging our industry-wide experience and capabilities.
            </div>
            <h2 style={{
              color: "#112A46",
              fontFamily: "Montserrat",
              fontSize: '1.125rem',
              lineHeight: '1.5rem',
              fontWeight: '600',
              textAlign: "left",
              marginBottom: "2rem"
            }}>Catapult Beyond Imaginable Future.
            </h2>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} style={{ textAlign: "center" }}>
                <Button
                  size="medium"
                  variant="contained"
                  type="submit"
                  style={{
                    textTransform: "none",
                    color: '#112A46',
                    background: '#5288E5',
                    textAlign: "left",
                    margin: '1em',
                    boxShadow: "none",
                    width: "11.813rem",
                    height: "2.5rem",
                    borderRadius: "0px"
                  }}
                  onClick={routeToContactUs}
                >
                  Contact Us
                </Button>
                <Button
                  size="medium"
                  variant="contained"
                  type="submit"
                  style={{
                    margin: '1em',
                    textTransform: "none",
                    color: '#112A46',
                    borderColor: 'black',
                    border: '2px solid',
                    background: '#FFF',
                    boxShadow: "none",
                    width: "11.813rem",
                    height: "2.5rem",
                    borderRadius: "0px"
                  }}
                  onClick={routeToAiDetails}
                >
                  Learn More
                </Button>
              </GridItem>
            </GridContainer>
          </GridItem>
          {/* <GridItem md={6} style={{ color: '#112A46',padding: "0rem", textAlign: "center", justifyContent:"center", marginTop:"10rem" }}>
            <GridContainer style={{ color: '#112A46',padding: "0rem", textAlign: "center", justifyContent:"center" }}>
              <GridItem md={12} >
              <img
                  src="img/resized_imgs/digital_transform.png"
                  alt="Digital Transform"
                  style={{ width: '100%' }}
                />
              </GridItem>
            </GridContainer>
          </GridItem> */}
        </GridContainer>
        <GridContainer style={{ marginBottom: "2rem", background: "#5288E5" }}>
          <GridItem md={6} style={{ color: '#112A46', background: '#5288E5', backgroundImage: "url('img/resized_imgs/circuit_lines.png')", backgroundSize: "50rem" }}>
            <h1 style={{
              fontFamily: 'Montserrat',
              fontSize: '1.8rem',
              lineHeight: '2rem',
              fontWeight: '600', textAlign: "left",
              color: '#112A46'
            }}>Novel Logiks AI Force One !
            </h1>
            <h2 style={{
              fontFamily: 'Montserrat',
              fontSize: '1.8rem',
              lineHeight: '2rem',
              fontWeight: '500', textAlign: "left"
            }} >Transformative AI capabilities helps enterprises gather escape velocity to the future ,
              propelling business and lives like never before.
            </h2>
          </GridItem>
          <GridItem md={6} style={{
            color: '#112A46', background: '#5288E5', display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Box
              m={1}
              display="flex"
              justifyContent="center"
              alignItems="center" style={{ top: '50%', left: '50%' }}
            >
              <Button
                size="medium"
                variant="contained"
                type="submit"
                sx={{
                  width: {
                    lg: '23.438rem',
                    md: '23.438rem',
                    sm: '18rem',
                    xs: '18rem'
                  },
                }}

                style={{
                  textTransform: "none",
                  color: '#112A46',
                  borderRadius: '5px',
                  backgroundColor: '#E5AF52',
                  textAlign: "center",
                  height: "4.4rem",
                  fontWeight: "600",
                  fontSize: "2.5rem",
                  boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
                }}
                onClick={routeToAiDetails}
              >
                Explore Now
              </Button>
            </Box>
          </GridItem>
        </GridContainer>
        {home && home[0] && (<GridContainer id='0'>
          <SectionHomeLeft data={home[0]} />
        </GridContainer>)}
        {home && home[1] && (<GridContainer id='2' >
          <SectionHomeRight data={home[1]} />
        </GridContainer>)}
        {home && home[2] && (<GridContainer id='2' >
          <SectionHomeLeft data={home[2]} />
        </GridContainer>)}
      </div>
      {/* </div> */}
    </div >
  );
}
