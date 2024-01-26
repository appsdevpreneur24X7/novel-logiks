import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import featuresStyle from "/styles/jss/novel-logiks/pages/sectionsSections/featuresStyle.js";
import { Button, Divider, Typography } from "@mui/material";

const useStyles = makeStyles(featuresStyle);

export default function SectionServicesRight({ ...rest }) {
  const classes = useStyles();
  const { data } = rest
  console.log('data : ', data);
  const { serviceTitle, serviceImageUrl, servicePoints } = data

  return (
    // <div className="cd-section" {...rest}>
      <div className={classes.container} {...rest}>
        {/* Services Right START */}
        {/* <div className={classes.features3}> */}
          <GridContainer style={{ backgroundColor: "#E5AF52" ,borderRadius:"5px"}}>
            <GridItem xs={12} sm={8} md={8}>
              <h1 style={{
                fontFamily: 'Montserrat',
                fontSize: '2rem',
                lineHeight: '2rem',
                fontWeight: '600',
                textAlign: "left",
                color: '#112A46'
              }}>{serviceTitle}</h1>
              <Divider style={{
                backgroundColor: '#5288E5',
                color: '#5288E5',
                border: '#5288E5',
                borderRadius: '5px',
                borderTop: '0.25rem solid #5288E5',
                width: '50%',
                marginBottom:"1.5rem"
              }}></Divider>
              <Typography component="div" style={{ textAlign: "left" }}>
                <ul>
                  {servicePoints.map((each, idx) => <li key={idx}><h5>{each}</h5></li>)}
                </ul>
              </Typography>
              {/* <GridContainer style={{ marginBottom: "2rem" }}>
                <GridItem xs={12} sm={12} md={12} style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                  <Button
                    size="medium"
                    variant="contained"
                    type="submit"
                    style={{
                      textTransform: "none",
                      color: '#112A46',
                      background: '#5288E5',
                      textAlign: "left",
                      marginLeft: '2em',
                      marginRight: '2em',
                      boxShadow:"none",
                      width: "10rem",
                    }}
                    onClick={() => console.log("Clicked")}
                  >
                    Contact Us
                  </Button>
                </GridItem>
              </GridContainer> */}
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <div className={classes.phoneContainer} >
                <img src={serviceImageUrl} alt="..." style={{
                    marginTop: "30px", marginBottom: "30px",
                    width: '15rem', height: "20rem",
                    minWidth: '15rem', borderRadius: "5px", objectFit:"cover",
                    boxShadow: '0 5px 20px 0px rgba(0, 0, 0, 0.2), 0 13px 24px -11px rgba(156, 39, 176, 0.6)'
                }} />
              </div>
            </GridItem>
          </GridContainer>
        {/* </div> */}
      </div>
    // </div>
  );
}
