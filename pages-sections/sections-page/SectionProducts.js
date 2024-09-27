/* eslint-disable */
import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import Icon from "@mui/material/Icon";
// @mui/icons-material
import { Divider } from "@mui/material";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TuneIcon from '@mui/icons-material/Tune';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import Dashboard from "@mui/icons-material/Dashboard";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
import Badge from "/components/Badge/Badge.js";

import projectsStyle from "/styles/jss/novel-logiks/pages/sectionsSections/projectsStyle.js";

const useStyles = makeStyles(projectsStyle);

export default function SectionProducts({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container} style={{ marginTop: "5rem" }}>
        <GridContainer style={{ marginBottom: '.25rem', marginTop: "2rem" }}>
          <GridItem md={12} style={{ color: '#112A46' }}>
            <h1 style={{
              fontFamily: 'Montserrat',
              fontSize: '2rem',
              lineHeight: '2rem',
              fontWeight: '600',
              textAlign: "left",
              color: '#112A46'
            }}>  Products
            </h1>
            {/* <Divider style={{
              backgroundColor: '#007bff',
              color: '#007bff',
              border: '#007bff',
              borderRadius: '5px',
              borderTop: '0.25rem solid #007bff',
              width: '30%'
            }}></Divider> */}
          </GridItem>
        </GridContainer>
        {/* Project 4 START */}
        <div className={classes.projects + " " + classes.projects4}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem
                xs={12}
                sm={8}
                md={8}
                className={
                  classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                }
              >
                {/* <h2 className={classes.title}>
                  Some of Our Awesome E-Commerce Products
                </h2> */}
                <h5 className={classes.description} style={{fontSize:"1.125rem", fontWeight:"500", fontFamily:"Montserrat"}}>
                  We understood Who’s target buyer?what they need and What are their pain points? and we came up with a solution.
                </h5>
                <div className={classes.sectionSpace} />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={7} md={7} className={classes.mlAuto}>
                <Card
                  background
                  className={classes.card4}
                  style={{
                    backgroundImage: "url('/img/lsk_imgs/tagline-client.png')"
                  }}
                >
                  <CardBody background className={classes.cardBody4}>
                    <a href="#pablo" onClick={(e) => e.preventDefault}>
                      <h3 className={classes.cardTitle}>Tagline E-Commerce Client</h3>
                      <p className={classes.cardDescription}>
                        E-Commerce Client App to facilitate procuring Vishudha Groceries in Domestic and Bulk .
                      </p>
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
                <InfoArea
                  className={classes.info4} style={{fontSize:"0.85rem", fontWeight:"500", color:"#000"}}
                  title="E-Commerce Application"
                  description="We've created the design of the website using modern Tech Stack"
                  icon={ShoppingCartCheckoutIcon}
                  iconColor="warning"
                />
                <InfoArea
                  className={classes.info4} style={{fontSize:"0.85rem", fontWeight:"500", color:"#000"}}
                  title="Saves Time"
                  description="I would save lot of time of the customer by just relaxing and ordering the Groceries needed to any where "
                  icon={QueryBuilderIcon}
                  iconColor="warning"
                />
                <InfoArea
                  className={classes.info4} style={{fontSize:"0.85rem", fontWeight:"500", color:"#000"}}
                  title="Free Shipping"
                  description="Deliver Goods on Time and handle the goods with Care"
                  icon={LocalShippingIcon}
                  iconColor="warning"
                />
              </GridItem>
            </GridContainer>
            <hr />
            <GridContainer>
              <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
                <InfoArea
                  className={classes.info4} style={{fontSize:"0.85rem", fontWeight:"500", color:"#000"}}
                  title="Admin Panel"
                  description="Admin Panel for accessing all the modules in Vishudha Ecommerce Business"
                  icon={AdminPanelSettingsIcon}
                  iconColor="warning"
                />
                <InfoArea
                  className={classes.info4} style={{fontSize:"0.85rem", fontWeight:"500", color:"#000"}}
                  title="Analytics Integrated"
                  description="Fully Integrated with Analytics to track the Sales"
                  icon={AnalyticsIcon}
                  iconColor="warning"
                />
                <InfoArea
                  className={classes.info4} style={{fontSize:"0.85rem", fontWeight:"500", color:"#000"}}
                  title="Intuitive Dashboard "
                  description="Intuitive Dashboard based on the Roles"
                  icon={Dashboard}
                  iconColor="warning"
                />
                <InfoArea 
                  className={classes.info4} style={{fontSize:"0.85rem", fontWeight:"500", color:"#000"}}
                  title="Configure "
                  description="Can Configure all the Categories, Sub categories, Products, Prices, Discounts and Taxes details"
                  icon={TuneIcon}
                  iconColor="warning"
                />
              </GridItem>
              <GridItem xs={12} sm={7} md={7} className={classes.mrAuto}>
                <Card
                  background
                  className={classes.card4}
                  style={{
                    backgroundImage: "url('/img/lsk_imgs/tagline-mis.png')"
                  }}
                >
                  <CardBody background className={classes.cardBody4}>
                    <a href="#pablo" onClick={(e) => e.preventDefault}>
                      <h3 className={classes.cardTitle}>Tagline E-Commerce MIS</h3>
                      <p className={classes.cardDescription}>
                        Admin module to facilitate all the backend operations of Tagline Traders.
                      </p>
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>);
}
