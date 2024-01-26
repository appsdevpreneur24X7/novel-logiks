import React from "react";
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
import TrendingUp from "@mui/icons-material/TrendingUp";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import Info from "/components/Typography/Info.js";

import blogsStyle from "/styles/jss/novel-logiks/pages/sectionsSections/blogsStyle.js";
import { Divider, Typography } from "@mui/material";

const useStyles = makeStyles(blogsStyle);

export default function SectionIndustriesBkp({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>

      {/* Industries 2 START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer style={{ marginBottom: '.25rem' }}>
            <GridItem md={6} style={{ color: '#112A46' }}>
              <h1 style={{
                fontFamily: 'Montserrat',
                fontSize: '2rem',
                lineHeight: '2rem',
                fontWeight: '600',
                textAlign: "left",
                color: '#112A46'
              }}>  Industries
              </h1>
              <Divider style={{
                backgroundColor: '#5288E5',
                color: '#5288E5',
                border: '#5288E5',
                borderRadius: '5px',
                borderTop: '0.25rem solid #5288E5',
                width: '40%'
              }}></Divider>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={4}>
              <Card plain blog>
                <CardHeader plain image>
                  <a href="#pablito" onClick={(e) => e.preventDefault()}>
                    <img src="/img/resized_imgs/industry-retail.jpg" alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage:
                        "url('/img/resized_imgs/industry-retail.jpg')",
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <Typography style={{
                    fontFamily: 'Montserrat',
                    fontSize: '1rem',
                    lineHeight: '2rem',
                    fontWeight: '600',
                    textAlign: "left",
                    color: '#112A46'
                  }}>
                    Retail
                  </Typography>
                  <Typography style={{
                    fontFamily: 'Montserrat',
                    fontSize: '0.85rem',
                    lineHeight: '1.5rem',
                    fontWeight: '300',
                    textAlign: "left",
                    color: '#112A46'
                  }}>
                    The rise of e-commerce and omnichannel, changing customer behavior, hyperpersonalization, and increased supply chain complexity have reshaped the industry impacting retailer profits over the past 5 Years. Novel Logiks with its business and technical knowhow helps you achieve the imperative scalability in the technical architecture and operating model to keep pace with the changing landscape.
                  </Typography>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <Card plain blog>
                <CardHeader plain image>
                  <a href="#pablito" onClick={(e) => e.preventDefault()}>
                    <img src="/img/resized_imgs/industry-automotive.jpg" alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage:
                        "url('/img/resized_imgs/industry-automotive.jpg')",
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <Typography style={{
                    fontFamily: 'Montserrat',
                    fontSize: '1rem',
                    lineHeight: '2rem',
                    fontWeight: '600',
                    textAlign: "left",
                    color: '#112A46'
                  }}>
                    Automotive
                  </Typography>
                  <Typography style={{
                    fontFamily: 'Montserrat',
                    fontSize: '0.85rem',
                    lineHeight: '1.5rem',
                    fontWeight: '300',
                    textAlign: "left",
                    color: '#112A46'
                  }}>
                    Disruptive technologies, coupled with emerging markets and evolving consumer preferences towards ownership, are set to revolutionize how industry players adapt to shifting consumer behavior, form partnerships, and lead digital business transformation. Novel Logiks helps in this strategic move to shape the organizations evolution with its IOT and Software Solutions.
                  </Typography>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <Card plain blog>
                <CardHeader plain image>
                  <a href="#pablito" onClick={(e) => e.preventDefault()}>
                    <img src="/img/resized_imgs/industry-cpg.jpg" alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage:
                        "url('/img/resized_imgs/industry-cpg.jpg')",
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <Typography style={{
                    fontFamily: 'Montserrat',
                    fontSize: '1rem',
                    lineHeight: '2rem',
                    fontWeight: '600', 
                    textAlign: "left",
                    color: '#112A46'
                  }}>CPG</Typography>
                  <Typography style={{
                    fontFamily: 'Montserrat',
                    fontSize: '0.85rem',
                    lineHeight: '1.5rem',
                    fontWeight: '300',
                    textAlign: "left",
                    color: '#112A46'
                  }}>
                    The CPG industry is revolutionized by digital transformation impacting consumer communication, sales strategies, data utilization and supply chain and manufacturing operations , Novel Logiks brings  expertise in the top notch digital initiatives to aid companies in achieving innovation , efficiency and operational improvements that propel their success.
                  </Typography>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <Card plain blog>
                <CardHeader plain image>
                  <a href="#pablito" onClick={(e) => e.preventDefault()}>
                    <img src="/img/latest/ship-building.png" alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage:
                        "url('/img/latest/ship-building.png')",
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <Typography style={{
                    fontFamily: 'Montserrat',
                    fontSize: '1rem',
                    lineHeight: '2rem',
                    fontWeight: '600',
                    textAlign: "left",
                    color: '#112A46'
                  }}>Shipping
                  </Typography>
                  <Typography style={{
                    fontFamily: 'Montserrat',
                    fontSize: '0.85rem',
                    lineHeight: '1.5rem',
                    fontWeight: '300',
                    textAlign: "left",
                    color: '#112A46'
                  }}>
                    The shipbuilding and ship repair industry is projected to lose approximately 33% of skilled workforce and 48% of management by 2028. There is huge potential to increase cost savings, decrease production timelines, and drive down inefficiencies in Lifecyle management of ships. Novel Logiks brings in the expertise in emergent technologies including the Internet of Things, Big Data, Robotic automation of processes, and Artificial Intelligence (AI)
                  </Typography>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <Card plain blog>
                <CardHeader plain image>
                  <a href="#pablito" onClick={(e) => e.preventDefault()}>
                    <img src="/img/latest/manufacturing_ai.jpg" alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage:
                        "url('/img/latest/manufacturing_ai.jpg')",
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <Typography style={{
                    fontFamily: 'Montserrat',
                    fontSize: '1rem',
                    lineHeight: '2rem',
                    fontWeight: '600',
                    textAlign: "left",
                    color: '#112A46'
                  }}>Manufacturing</Typography>
                  <Typography style={{
                    fontFamily: 'Montserrat',
                    fontSize: '0.85rem',
                    lineHeight: '1.5rem',
                    fontWeight: '300',
                    textAlign: "left",
                    color: '#112A46'
                  }}>
                    Novel Logiks synergies with Manufacturing industry brings in Advanced Analytics for planning and forecasting, digital tools to improve productivity and safety , Automated processes to improve efficiency , reduce error rates and increase efficiencies and advanced supply chain enterprise platforms on cloud.
                  </Typography>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <Card plain blog>
                <CardHeader plain image>
                  <a href="#pablito" onClick={(e) => e.preventDefault()}>
                    <img src="/img/latest/pharma.jpg" alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage:
                        "url('/img/latest/pharma.jpg')",
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <Typography style={{
                    fontFamily: 'Montserrat',
                    fontSize: '1rem',
                    lineHeight: '2rem',
                    fontWeight: '600',
                    textAlign: "left",
                    color: '#112A46'
                  }}>Pharma</Typography>
                  <Typography style={{
                    fontFamily: 'Montserrat',
                    fontSize: '0.85rem',
                    lineHeight: '1.5rem',
                    fontWeight: '300',
                    textAlign: "left",
                    color: '#112A46'
                  }}>
                    Amidst the challenges posed by increasing intricacy, expenses, and regulatory demands, a growing number of pharmaceutical executives are turning their attention to Industry 4.0 manufacturing and implementation of cloud based enterprise applications. This promises to significantly curtail pharmaceutical manufacturing expenses, elevate product quality, and alleviate capacity limitations.  Novel Logiks offers Industry 4.0 Support.
                  </Typography>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <Card plain blog>
                <CardHeader plain image>
                  <a href="#pablito" onClick={(e) => e.preventDefault()}>
                    <img src="/img/telecom1.jpg" alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage:
                        "url('/img/telecom1.jpg')",
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <Typography style={{
                    fontFamily: 'Montserrat',
                    fontSize: '1rem',
                    lineHeight: '2rem',
                    fontWeight: '600',
                    textAlign: "left",
                    color: '#112A46'
                  }}>Telecom</Typography>
                  <Typography style={{
                    fontFamily: 'Montserrat',
                    fontSize: '0.85rem',
                    lineHeight: '1.5rem',
                    fontWeight: '300',
                    textAlign: "left",
                    color: '#112A46'
                  }}>
                    The telecom industry in this era has witnessed customer-focused disruptions,
                    where digital-native companies have established a new benchmark for seamless
                    online experiences, compelling traditional telecom companies to reimagine their customer engagement
                    approaches. Additionally, business-model disruptions have emerged, driven by transformative technologies
                    like AI, big data, RPA and the Internet of Things, reshaping the way services are delivered and value is captured.
                    leverage Novel Logiks expertise to stay ahead.
                  </Typography>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <Card plain blog>
                <CardHeader plain image>
                  <a href="#pablito" onClick={(e) => e.preventDefault()}>
                    <img src="/img/energy1.jpg" alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage:
                        "url('/img/energy1.jpg')",
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <Typography style={{
                    fontFamily: 'Montserrat',
                    fontSize: '1rem',
                    lineHeight: '2rem',
                    fontWeight: '600',
                    textAlign: "left",
                    color: '#112A46'
                  }}>Energy and Utlities
                  </Typography>
                  <Typography style={{
                    fontFamily: 'Montserrat',
                    fontSize: '0.85rem',
                    lineHeight: '1.5rem',
                    fontWeight: '300',
                    textAlign: "left",
                    color: '#112A46'
                  }}>
                    Energy and natural resources companies are rapidly expediting their digital transformation endeavors across various use cases, in the wake o
                    challenges posed by decarbonization and decentralisation. These include enhancing operational productivity, elevating the customer experience, exploring new business models, improving organizational performance,
                    and fulfilling ESG (Environmental, Social, and Governance) goals.Novel Logiks helps modernization which in turn
                    providers custoers diversity their business models and opportunity to gain new revenue streams.
                  </Typography>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
