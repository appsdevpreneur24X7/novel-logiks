import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import featuresStyle from "../../styles/jss/novel-logiks/pages/sectionsSections/featuresStyle.js";

const useStyles = makeStyles(featuresStyle);

export default function SectionHomeLeft({ ...rest }) {
  const routeToAiDetails = () => {
    Router.push("/ai-details");
  };

  const routeToContactUs = () => {
    Router.push("/contact-us");
  };

  const classes = useStyles();
  const { data } = rest;
  console.log("data : ", data);
  const { serviceTitle, serviceImageUrl } = data;
  return (
    // <div className="cd-section" {...rest}>
    <div className={classes.container} {...rest}>
      {/* Services Left START */}
      <div className={classes.features3} style={{ padding: "0px" }}>
        <GridContainer style={{ minHeight: "100%", alignItems: "center" }}>
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

          {/* ✅ This GridItem now takes full height and centers content */}
          <GridItem
            xs={12}
            sm={6}
            md={6}
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              minHeight: "100%",
            }}
          >
            <div style={{ width: "100%" }}>
              <h1
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "1rem",
                  lineHeight: "1.25rem",
                  fontWeight: "600",
                  textAlign: "left",
                  color: "#112A46",
                  margin: "2rem",
                }}
              >
                {serviceTitle}
              </h1>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
