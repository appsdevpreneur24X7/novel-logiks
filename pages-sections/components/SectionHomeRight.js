import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import featuresStyle from "/styles/jss/novel-logiks/pages/sectionsSections/featuresStyle.js";
import { Button, Divider, Typography } from "@mui/material";

const useStyles = makeStyles(featuresStyle);

export default function SectionHomeRight({ ...rest }) {
  const classes = useStyles();
  const { data } = rest;
  console.log("data : ", data);
  const { serviceTitle, serviceImageUrl } = data;
  const routeToAiDetails = () => {
    Router.push("/ai-details");
  };

  const routeToContactUs = () => {
    Router.push("/contact-us");
  };

  return (
    <div className={classes.container} {...rest}>
      <div className={classes.features3} style={{ padding: "0px" }}>
        <GridContainer style={{ minHeight: "100%", alignItems: "center" }}>
          <GridItem xs={12} sm={6} md={6}>
            <h1
              style={{
                fontFamily: "Montserrat",
                fontSize: "1rem",
                lineHeight: "1.25rem",
                fontWeight: "600",
                textAlign: "left",
                color: "#112A46",
              }}
            >
              {serviceTitle}
            </h1>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <GridItem
              md={12}
              style={{ textAlign: "center", justifyContent: "center" }}
            >
              <img
                src={serviceImageUrl}
                alt="ai pic"
                style={{
                  width: "100%",
                  boxShadow: "0 3px 10px rgb(0 0 0 / 0.5)",
                  borderRadius: "5px",
                }}
              />
            </GridItem>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
