import React, { useEffect } from "react";
import makeStyles from '@mui/styles/makeStyles';
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Subject from "@mui/icons-material/Subject";
import Card from "/components/Card/Card.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardBody from "/components/Card/CardBody.js";
import CardFooter from "/components/Card/CardFooter.js";
import CardAvatar from "/components/Card/CardAvatar.js";
import Muted from "/components/Typography/Muted.js";
import { Button, Divider, Typography } from "@mui/material";
import Info from "/components/Typography/Info.js";
import teamsStyle from "/styles/jss/novel-logiks/pages/sectionsSections/teamsStyle.js";
import styles from "/styles/jss/novel-logiks/pages/componentsSections/sectionCards.js";

const useStyles = makeStyles(styles);

// const useStyles = makeStyles(teamsStyle);

export default function SectionTeams({ ...rest }) {
  const classes = useStyles();
  const [activeRotate1, setActiveRotate1] = React.useState("");
  const [activeRotate2, setActiveRotate2] = React.useState("");
  const [activeRotate3, setActiveRotate3] = React.useState("");

  React.useEffect(() => {
    if (window) {
      window.addEventListener("resize", addStylesForRotatingCards);
    }
    addStylesForRotatingCards();
    return function cleanup() {
      if (window) {
        window.removeEventListener("resize", addStylesForRotatingCards);
      }
    };
  });
  const addStylesForRotatingCards = () => {
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  };
  return (
    <div className="cd-section" {...rest}>
      {/* Team 1 START */}
      <div className={classes.team}>
        <div className={classes.container}>
          <GridContainer style={{ marginBottom: '2rem' }}>
            <GridItem md={6} style={{ color: '#091133' }}>
              <h1 style={{
                fontFamily: 'Montserrat',
                fontSize: '2rem',
                lineHeight: '2rem',
                fontWeight: '600',
                textAlign: "left"
              }}>  Meet the Team
              </h1>
              <Divider style={{
                backgroundColor: '#E5AF52',
                color: '#E5AF52',
                border: '#E5AF52',
                borderRadius: '5px',
                borderTop: '0.25rem solid #E5AF52',
                width: '50%'
              }}></Divider>
            </GridItem>

            <GridItem md={6} style={{ color: '#091133' }}>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} lg={6}>
              <div className={classes.rotatingCardContainer}>
                <Card background className={classes.cardRotate}>
                  <div
                    className={
                      classes.front}
                    style={{
                      backgroundColor: "#E5AF52"
                    }}
                  >
                    <CardBody background className={classes.cardBodyRotate}>
                      <h5 sx={{ color: '#091133', fontSize: "1.5rem", lineHeight: "1.5rem", fontWeight: "600" }} style={{ color: '#091133', fontSize: "1.5rem", lineHeight: "1.5rem", fontWeight: "600" }}>
                        Sunil
                      </h5>
                      <h5 sx={{ color: '#091133', fontSize: "1rem", lineHeight: "1rem", fontWeight: "400", textAlign: "center" }} style={{ color: '#091133', fontSize: "1rem", lineHeight: "1rem", fontWeight: "400", textAlign: "center" ,padding:"0px" , margin:"0px"}}>
                        CEO
                      </h5>
                    </CardBody>
                  </div>
                  <div
                    className={classes.back}
                    style={{
                      backgroundColor: '#E5AF52', fontFamily: "Montserrat", fontSize: "0.85rem", lineHeight: "0.85rem", fontWeight: '400', color: '#091133'
                    }}
                  >
                    <CardBody background className={classes.cardBodyRotate}>
                      <h5 sx={{ color: '#091133', fontSize: "1.5rem", lineHeight: "1.5rem", fontWeight: "600" }} style={{ color: '#091133', fontSize: "1.5rem", lineHeight: "1.5rem", fontWeight: "600" }}>
                        Sunil
                      </h5>
                      <h5 sx={{ color: '#091133', fontSize: "1rem", lineHeight: "1rem", fontWeight: "400", textAlign: "center" }} style={{ color: '#091133', fontSize: "1rem", lineHeight: "1rem", fontWeight: "400", textAlign: "center" ,padding:"0px" , margin:"0px"}}>
                        CEO
                      </h5>
                      <h5 sx={{ color: '#091133', fontSize: "0.85rem", lineHeight: "1rem", fontWeight: "400", textAlign: "left" }} style={{ color: '#091133', fontSize: "0.85rem", lineHeight: "1rem", fontWeight: "400", textAlign: "left" }}>
                        A Full Stack Developer is a professional who possesses the skills and expertise to work on both the front-end and back-end development of web applications. 
                        They are proficient in a variety of programming languages, frameworks, and technologies, enabling them to handle the complete development process.
                        Expertise in Front-End Development, Back-End Development, Server Management and Deployment, Security Best Practices , Collaboration and Communication.
                      </h5>
                    </CardBody>
                  </div>
                </Card>
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={6}>
              <div className={classes.rotatingCardContainer}>
                <Card background className={classes.cardRotate}>
                  <div
                    className={
                      classes.front
                    }
                    style={{
                      backgroundColor: '#E5AF52'
                    }}
                  >
                    <CardBody background className={classes.cardBodyRotate}>
                      <h5 sx={{ color: '#091133', fontSize: "1.5rem", lineHeight: "1.5rem", fontWeight: "600" }} style={{ color: '#091133', fontSize: "1.5rem", lineHeight: "1.5rem", fontWeight: "600" }}>
                        Raju
                      </h5>
                      <h5 sx={{ color: '#091133', fontSize: "1rem", lineHeight: "1rem", fontWeight: "400", textAlign: "center" }} style={{ color: '#091133', fontSize: "1rem", lineHeight: "1rem", fontWeight: "400", textAlign: "center" ,padding:"0px" , margin:"0px"}}>
                        Cloud Architect
                      </h5>
                    </CardBody>
                  </div>
                  <div
                    className={classes.back}
                    style={{
                      backgroundColor: '#E5AF52', fontFamily: "Montserrat", fontSize: "0.85rem", fontWeight: '400'
                    }}
                  >
                    <CardBody background className={classes.cardBodyRotate}>
                      <h5 sx={{ color: '#091133', fontSize: "1.5rem", lineHeight: "1.5rem", fontWeight: "600" }} style={{ color: '#091133', fontSize: "1.5rem", lineHeight: "1.5rem", fontWeight: "600" }}>
                      Raju
                      </h5>
                      <h5 sx={{ color: '#091133', fontSize: "1rem", lineHeight: "1rem", fontWeight: "400", textAlign: "center" }} style={{ color: '#091133', fontSize: "1rem", lineHeight: "1.25rem", fontWeight: "400", textAlign: "center",padding:"0px" , margin:"0px" }}>
                      Cloud Architect
                      </h5>
                      <h5 sx={{ color: '#091133', fontSize: "0.85rem", lineHeight: "1.1rem", fontWeight: "400", textAlign: "left" }} style={{ color: '#091133', fontSize: "0.85rem", lineHeight: "1.1rem", fontWeight: "400", textAlign: "left" }}>
                      Raju is a professional who is responsible for designing, implementing, and managing an organization's cloud computing architecture. This role involves making strategic decisions about the adoption and integration of cloud services to meet business requirements.
                      Rajus's Key aspects include, Cloud Strategy and Planning, Architecture Design, Cloud Service Integration, Security and Compliance, Cost Optimization, Migration Planning, Performance Optimization , Disaster Recovery and Business Continuity and Collaboration with Stakeholders.
                      </h5>
                    </CardBody>
                  </div>
                </Card>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Team 1 END */}
    </div>
  );
}
