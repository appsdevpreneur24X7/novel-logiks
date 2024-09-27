/*eslint-disable*/
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import headersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import featuresStyle from "/styles/jss/novel-logiks/pages/sectionsSections/featuresStyle.js";

import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardFooter from "/components/Card/CardFooter.js";
import Button from "/components/CustomButtons/Button.js";
import { services } from "../../data/services-data";
import { Typography } from "@mui/material";

const useStyles = makeStyles(featuresStyle);

const SectionServicesCarousalCard = (props)=> { 
    const classes = useStyles();
    console.log("props Passed to Carousal Card : ",props);
    const {index} = props
    console.log("props Passed to Carousal Card : ",index);
    return (
        <GridItem xs={12} sm={6} md={4}>
            {/* <Card plain blog style={{ background: "#007bff", borderColor: "#007bff", borderStyle: "solid", borderWidth: "medium" }}> */}
            <Card plain blog>
                <CardHeader plain image>
                    <img src={services[index].serviceImageUrl} alt="..." style={{ height: "15rem"}} />
                </CardHeader>
                <CardBody plain>
                    <Typography style={{
                        fontFamily: 'Montserrat',
                        fontSize: '1.125rem',
                        lineHeight: '1.719rem',
                        fontWeight: '600',
                        textAlign: "left",
                        color: '#212121',
                        padding: "0.5rem"
                    }}>
                        {services[index].serviceTitle}
                    </Typography>
                    <Typography style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: '0.875rem',
                        lineHeight: '1.719rem',
                        fontWeight: '500',
                        textAlign: "left",
                        color: '#212121',
                        padding: "1rem"
                    }}>
                        {services[index].serviceOneLiner}
                    </Typography>
                </CardBody>
            </Card>
        </GridItem>
    );
}

export default SectionServicesCarousalCard

