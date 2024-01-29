import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import featuresStyle from "/styles/jss/novel-logiks/pages/sectionsSections/featuresStyle.js";
import { Button, Divider, Typography } from "@mui/material";

const useStyles = makeStyles(featuresStyle);

export default function SectionHomeRight({ ...rest }) {
    const classes = useStyles();
    const { data } = rest
    console.log('data : ', data);
    const { serviceTitle, serviceImageUrl } = data
    const routeToAiDetails = () => {
        Router.push("/ai-details");
    }

    const routeToContactUs = () => {
        Router.push("/contact-us");
    }

    return (
        <div className={classes.container} {...rest}>
            <div className={classes.features3} style={{ padding: "0px" }}>
                <GridContainer>
                <GridItem xs={12} sm={6} md={6} sx={{
                        paddingTop:{
                            xs:"3rem",
                            sm:"3rem",
                            md:"5rem",
                            lg:"5rem",
                        }
                    }}>
                        <h1 style={{
                            fontFamily: "Montserrat",
                            fontSize: '1.719rem',
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
                            width: '40%'
                        }}></Divider>
                        {/* <GridContainer style={{ textAlign: "center" }}>
                            <GridItem xs={12} sm={12} md={12} style={{ marginTop: "5rem"}}>
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
                                        textAlign: "right",
                                        boxShadow: "none",
                                        width: "11.813rem",
                                        height: "2.5rem",
                                        borderRadius: "0px"
                                    }}
                                    onClick={() => console.log("Need to Handle Routing ?")}
                                >
                                    Learn More
                                </Button>
                            </GridItem>
                        </GridContainer> */}
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6}>
                        <GridItem md={12} style={{ textAlign: "center", justifyContent: "center" }} >
                            <img
                                src={serviceImageUrl}
                                alt="ai pic"
                                style={{ width: '100%', boxShadow: '0 3px 10px rgb(0 0 0 / 0.5)', borderRadius:"5px" }}
                            />
                        </GridItem>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
