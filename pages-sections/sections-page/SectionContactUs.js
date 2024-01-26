import React from "react";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import { makeStyles } from '@mui/styles';
import headersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import { Typography, Divider, Button, Box } from "@mui/material";
import Router from "next/router";
import { contactUs } from "../../data/contact-us-data";

const useStyles = makeStyles(headersStyle);

export default function SectionContactUs({ ...rest }) {
  const classes = useStyles();
  const routeToAiDetails = () => {
    Router.push("/ai-details");
  }

  const routeToContactUs = () => {
    Router.push("/contact-us");
  }
  return (
    <div className="cd-section" {...rest} style={{ background: "#5288E5" }} >
      <div className={classes.container} >
        <GridContainer style={{ marginBottom: '2rem' ,marginTop: '4rem' }}>
          <GridItem md={6} style={{ color: '#112A46' }}>
            <h1 style={{
              fontFamily: 'Montserrat',
              fontSize: '2rem',
              lineHeight: '2rem',
              fontWeight: '600',
              textAlign: "left",
              color: '#112A46'
            }}>  Contact Us
            </h1>
            <Divider style={{
              backgroundColor: '#112A46',
              color: '#112A46',
              border: '#112A46',
              borderRadius: '5px',
              borderTop: '0.25rem solid #112A46',
              width: '40%'
            }}></Divider>
          </GridItem>
        </GridContainer>
        <GridContainer style={{ margin: '2rem' }}>
          <GridItem md={6} style={{ color: '#212121' }}>
            <Typography
              sx={{
                fontFamily: 'Montserrat',
                textAlign: "left",
                color: '#212121',
                fontSize: {
                  lg: '1.5rem',
                  md: '1.5rem',
                  sm: '1.5rem',
                  xs: '1.25rem'
                }
              }}
              style={{
                lineHeight: '1.875rem',
                textAlign: "left",
                fontWeight: "400",
                marginBottom: "3rem"
              }}
            >  {contactUs.points[0]}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Montserrat',
                textAlign: "left",
                color: '#212121',
                fontSize: {
                  lg: '1.5rem',
                  md: '1.5rem',
                  sm: '1.5rem',
                  xs: '1.25rem'
                }
              }}
              style={{
                lineHeight: '1.875rem',
                textAlign: "left",
                fontWeight: "400",
                marginBottom: "3rem"
              }}
            >  {contactUs.points[1]}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Montserrat',
                color: '#212121',
                fontSize: {
                  lg: '1.875rem',
                  md: '1.875rem',
                  sm: '1.875rem',
                  xs: '1.5rem'
                },
                lineHeight: {
                  lg: '1.875rem',
                  md: '1.875rem',
                  sm: '1.875rem',
                  xs: '1.5rem'
                },
              }}
              style={{
                fontWeight: "600",
                textAlign: "left",
                color: '#112A46',
                marginBottom: "1rem"
              }}
            >  {contactUs.points[2]}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Montserrat',
                color: '#212121',
                fontSize: {
                  lg: '1.875rem',
                  md: '1.875rem',
                  sm: '1.875rem',
                  xs: '1.5rem'
                },
                lineHeight: {
                  lg: '1.875rem',
                  md: '1.875rem',
                  sm: '1.875rem',
                  xs: '1.5rem'
                },
              }}
              style={{
                fontWeight: "600",
                textAlign: "left",
                color: '#112A46',
                marginBottom: "1rem"
              }}
            >  {contactUs.points[3]}
            </Typography>
          </GridItem>
          <GridItem md={6} style={{ color: '#212121' }}>
            <GridContainer style={{ marginBottom: "2rem" }}>
              <GridItem md={3} sm={3} style={{ textAlign: "center" }}>
                <img src="/img/resized_imgs/contact-us-office.png" alt="..." style={{ width: "3.75rem", height: "3.75rem", textAlign: "center", justifyContent: "center" }} />
              </GridItem>
              <GridItem md={9} sm={9}>
                <GridItem>
                  <Typography
                   sx={{
                    textAlign: {
                      lg: 'left',
                      md: 'left',
                      sm: 'left',
                      xs: 'center'
                    },
                    fontSize: {
                      lg: '1.25rem',
                      md: '1.25rem',
                      sm: '1.25rem',
                      xs: '1rem'
                    }
                  }}
                  style={{
                    fontFamily: 'Montserrat',
                    lineHeight: '1.5rem',
                    fontWeight: '600',
                    color: '#212121',
                  }}
                  >  {contactUs.address_lines[0]}
                  </Typography>
                </GridItem>
                <GridItem>
                  <Typography
                   sx={{
                    textAlign: {
                      lg: 'left',
                      md: 'left',
                      sm: 'left',
                      xs: 'center'
                    },
                    fontSize: {
                      lg: '1.25rem',
                      md: '1.25rem',
                      sm: '1.25rem',
                      xs: '1rem'
                    }
                  }}
                  style={{
                    fontFamily: 'Montserrat',
                    lineHeight: '1.5rem',
                    fontWeight: '500',
                    color: '#212121',
                  }}
                  >   {contactUs.address_lines[1]}
                  </Typography>
                </GridItem>
                <GridItem>
                  <Typography
                   sx={{
                    textAlign: {
                      lg: 'left',
                      md: 'left',
                      sm: 'left',
                      xs: 'center'
                    },
                    fontSize: {
                      lg: '1.25rem',
                      md: '1.25rem',
                      sm: '1.25rem',
                      xs: '1rem'
                    }
                  }}
                  style={{
                    fontFamily: 'Montserrat',
                    lineHeight: '1.5rem',
                    fontWeight: '500',
                    color: '#212121',
                  }}
                  >  {contactUs.address_lines[2]}
                  </Typography>
                </GridItem>
                <GridItem>
                  <Typography
                     sx={{
                      textAlign: {
                        lg: 'left',
                        md: 'left',
                        sm: 'left',
                        xs: 'center'
                      },
                      fontSize: {
                        lg: '1.25rem',
                        md: '1.25rem',
                        sm: '1.25rem',
                        xs: '1rem'
                      }
                    }}
                    style={{
                      fontFamily: 'Montserrat',
                      lineHeight: '1.5rem',
                      fontWeight: '500',
                      color: '#212121',
                    }}
                  >  {contactUs.address_lines[3]}
                  </Typography>
                </GridItem>
              </GridItem>
            </GridContainer>

            {/* Email Section */}
            <GridContainer style={{ marginBottom: "2rem" }}>
              <GridItem md={3} sm={3} style={{ textAlign: "center", margin: "auto" }}>
                <img src="/img/resized_imgs/contact-us-email.png" alt="..." style={{ width: "3.75rem", height: "3.75rem", textAlign: "center", justifyContent: "center" }} />
              </GridItem>
              <GridItem md={9} sm={9}>
                <GridItem>
                  <Typography
                     sx={{
                      textAlign: {
                        lg: 'left',
                        md: 'left',
                        sm: 'left',
                        xs: 'center'
                      },
                      fontSize: {
                        lg: '1.25rem',
                        md: '1.25rem',
                        sm: '1.25rem',
                        xs: '1rem'
                      }
                    }}
                    style={{
                      fontFamily: 'Montserrat',
                      lineHeight: '1.5rem',
                      fontWeight: '500',
                      color: '#212121',
                    }}
                  >  {contactUs.email_ids[0]}
                  </Typography>
                </GridItem>
                <GridItem>
                  <Typography
                    sx={{
                      textAlign: {
                        lg: 'left',
                        md: 'left',
                        sm: 'left',
                        xs: 'center'
                      },
                      fontSize: {
                        lg: '1.25rem',
                        md: '1.25rem',
                        sm: '1.25rem',
                        xs: '1rem'
                      }
                    }}
                    style={{
                      fontFamily: 'Montserrat',
                      lineHeight: '1.5rem',
                      fontWeight: '500',
                      color: '#212121',
                    }}
                  > {contactUs.email_ids[1]}
                  </Typography>
                </GridItem>
              </GridItem>
            </GridContainer>

            {/* Phone No Section */}
            <GridContainer style={{ marginBottom: "2rem" }}>
              <GridItem md={3} sm={3} style={{ textAlign: "center", margin: "auto" }}>
                <img src="/img/resized_imgs/contact-us-call.png" alt="..." style={{ width: "3.75rem", height: "3.75rem", textAlign: "center", justifyContent: "center" }} />
              </GridItem>
              <GridItem md={9} sm={9}>
                <GridItem>
                  <Typography
                     sx={{
                      textAlign: {
                        lg: 'left',
                        md: 'left',
                        sm: 'left',
                        xs: 'center'
                      },
                      fontSize: {
                        lg: '1.25rem',
                        md: '1.25rem',
                        sm: '1.25rem',
                        xs: '1rem'
                      }
                    }}
                    style={{
                      fontFamily: 'Montserrat',
                      lineHeight: '1.25rem',
                      fontWeight: '600',
                      color: '#212121',
                      padding:"1rem"
                    }}
                  >   {contactUs.phone_no[0]}
                  </Typography>
                </GridItem>
              </GridItem>
            </GridContainer>

            {/* Working Hours Section */}
            <GridContainer style={{ marginBottom: "2rem" }}>
              <GridItem md={3} sm={3} style={{ textAlign: "center", margin: "auto" }}>
                <img src="/img/resized_imgs/contact-us-timing.png" alt="..." style={{ width: "3.75rem", height: "3.75rem", textAlign: "center", justifyContent: "center" }} />
              </GridItem>
              <GridItem md={9} sm={9}>
                <GridItem>
                  <Typography
                     sx={{
                      textAlign: {
                        lg: 'left',
                        md: 'left',
                        sm: 'left',
                        xs: 'center'
                      },
                      fontSize: {
                        lg: '1.25rem',
                        md: '1.25rem',
                        sm: '1.25rem',
                        xs: '1rem'
                      }
                    }}
                    style={{
                      fontFamily: 'Montserrat',
                      lineHeight: '1.25rem',
                      fontWeight: '500',
                      color: '#212121',
                      padding:"1rem"
                    }}
                  >  {contactUs.working_hours}
                  </Typography>
                </GridItem>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div >
  );
}
