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
import aiVideo from '../../public/video/ai-medical.mp4';
const useStyles = makeStyles(headersStyle);

export default function SectionHeaders({ ...rest }) {
  const classes = useStyles();
  console.log(home)
  const serviceImageUrl = 'img/lsk_imgs/business_home..png'
  const routeToAiDetails = () => {
    Router.push("/ai-details");
  }

  const routeToContactUs = () => {
    Router.push("/sections#contactUs");
  }
  return (
    <div className="cd-section" {...rest} style={{ marginTop: "7.5rem" }} >
      <div className={classes.container} style={{ mamarginBottom: '1rem', width:'100%', maxWidth:'100%'}} >
        <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}></div>
        {/* IMAGE OVERLAY
        https://www.google.com/search?q=video+background+play+and+text+overlay+example+react&rlz=1C1UEAD_enIN1061IN1061&oq=video+background++play+and+text+overlay+example+react&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigAdIBCTIxNzE3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:f428bed4,vid:LSRNmhLS76o,st:0
        */}
        <video autoPlay loop muted style={{ position: "absolute", width: "100%", height: "100vh", objectFit: "cover" }} >
          <source src={aiVideo} type="video/mp4" />
        </video>
        <GridContainer >
          <GridItem md={12} style={{ color: '#112A46', marginTop: "10rem" }}>
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
                color: '#FFFFFF',
                margin: "2rem"
              }}
            >  We provide Digital Solutions cutting across Sectors.
            </Typography>
            <div style={{ margin: "1rem", color: "#FFFFFF", fontFamily: 'Montserrat', }}>
              <h2 style={{
                fontFamily: 'Montserrat',
                fontSize: '1.8rem',
                lineHeight: '2rem',
                fontWeight: '500', textAlign: "left"
              }} >Transformative AI capabilities helps enterprises gather escape velocity to the future ,
                propelling business and lives like never before.
              </h2>
            </div>

          </GridItem>
        </GridContainer>
        <GridContainer style={{ mamarginBottom: "5rem" }}>
          <GridItem md={12} style={{
            color: '#FFFFFF', display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "2rem"

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
                  backgroundColor: '#5288E5',
                  textAlign: "center",
                  fontSize: "1.25rem",
                  height: "2.5rem",
                  fontWeight: "600",
                  boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
                }}
                onClick={routeToAiDetails}
              >
                Explore
              </Button>
            </Box>
          </GridItem>
        </GridContainer>
      </div>
      {/* <div className={classes.container}>
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
          </div> 
           <div >
            <GridContainer>
            
            </GridContainer>
          </div>
       
        </Carousel>
      </div> */}
    </div >
  );
}
