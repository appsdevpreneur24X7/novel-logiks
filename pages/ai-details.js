/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardBody from "/components/Card/CardBody.js";
import CardFooter from "/components/Card/CardFooter.js";
import headersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import featuresStyle from "/styles/jss/novel-logiks/pages/sectionsSections/featuresStyle.js";
import { Divider } from "@mui/material";
import Button from "/components/CustomButtons/Button.js";
import styles from "/styles/jss/novel-logiks/pages/componentsSections/sectionCards.js";
// import Footer from "../components/Footer/Footer.js";
import Footer from "/components/Footer/Footer.js";
const useStyles = makeStyles(styles);

export default function AiDetails() {
  const classes = useStyles();

  const routeToContactUs = () => {
    Router.push("/contact-us");
  }

  return (
    <>
      <Header
        brand=""
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="info"
        disableGutters={true}
      />
      <div className={classes.container} style={{ marginTop: "5.5em" }}>
        <GridContainer style={{ marginBottom: '.25rem', color: '#112A46', background: '#5288E5' }}>
          <GridItem md={12} style={{ color: '#112A46' }}>
            <h1 style={{
              fontFamily: 'Montserrat',
              fontSize: '2rem',
              lineHeight: '2rem',
              fontWeight: '600',
              textAlign: "left",
              color: '#112A46',
              marginTop: "10rem"
            }}>  Novel Logiks in Artificial Intelligence
            </h1>
            <Divider style={{
              backgroundColor: '#112A46',
              color: '#112A46',
              border: '#112A46',
              borderRadius: '5px',
              borderTop: '0.25rem solid #112A46',
              width: '40%',
            }}></Divider>
          </GridItem>
        </GridContainer>
        <GridContainer style={{ marginBottom: "2rem", color: '#112A46', background: '#5288E5' }}>
          <GridItem xs={12} sm={4} md={4}>
            <Card profile plain style={{ backgroundColor: "white" }}>
              <CardHeader image plain>
              <img src="/img/resized_imgs/ai-gen-modified.jpg" alt="..." />
              </CardHeader>
              <CardBody plain>
                <h3 style={{
                  fontFamily: 'Montserrat',
                  fontSize: '1.25rem',
                  lineHeight: '2rem',
                  fontWeight: '600',
                  textAlign: "left",
                  color: '#112A46'
                }}>Generative Artificial Intelligence: Unleashing The Creative
                  Power Of Algorithms
                </h3>
              </CardBody>
              <CardFooter
                profile
                plain
                className={classes.justifyContentCenter}
              >
                <Button
                  size="medium"
                  variant="contained"
                  type="submit"
                  fullWidth
                  style={{
                    textTransform: "none",
                    color: '#FFF',
                    background: '#5288E5',
                    textAlign: "left",
                    marginLeft: '2em',
                    marginRight: '2em',
                    boxShadow:"none"
                  }}
                  onClick={() => console.log("")}
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <Card profile plain style={{ backgroundColor: "white" }}>
              <CardHeader image plain>
              <img src="/img/resized_imgs/ai-pred.jpg" alt="..." />
              </CardHeader>
              <CardBody plain>
                <h3 style={{
                  fontFamily: 'Montserrat',
                  fontSize: '1.25rem',
                  lineHeight: '2rem',
                  fontWeight: '600',
                  textAlign: "left",
                  color: '#112A46'
                }}>Predictive
                  Maintenance Using AI:
                  Ensuring Efficiency
                  And Reliability
                </h3>
              </CardBody>
              <CardFooter
                profile
                plain
                className={classes.justifyContentCenter}
              >
                <Button
                  size="medium"
                  variant="contained"
                  type="submit"
                  fullWidth
                  style={{
                    textTransform: "none",
                    color: '#FFF',
                    background: '#5288E5',
                    textAlign: "left",
                    marginLeft: '2em',
                    marginRight: '2em',
                    boxShadow:"none"
                  }}
                  onClick={() => console.log("")}
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <Card profile plain style={{ backgroundColor: "white" }}>
              <CardHeader image plain>
              <img src="/img/resized_imgs/ai-vision-modified.jpg" alt="..." />
              </CardHeader>
              <CardBody plain>
                <h3 style={{
                  fontFamily: 'Montserrat',
                  fontSize: '1.25rem',
                  lineHeight: '2rem',
                  fontWeight: '600',
                  textAlign: "left",
                  color: '#112A46'
                }}>AI and Computer
                  Vision: Transforming
                  Visual Data Into
                  Intelligent Insights
                </h3>
              </CardBody>
              <CardFooter
                profile
                plain
                className={classes.justifyContentCenter}
              >
                <Button
                  size="medium"
                  variant="contained"
                  type="submit"
                  fullWidth
                  style={{
                    textTransform: "none",
                    color: '#FFF',
                    background: '#5288E5',
                    textAlign: "left",
                    marginLeft: '2em',
                    marginRight: '2em',
                    boxShadow:"none"
                  }}
                  onClick={() => console.log("")}
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer style={{ marginBottom: "2rem", color: '#112A46', background: '#FFF' }}>
          <GridItem md={12} style={{ color: '#112A46' }}>
            <h1 style={{
              fontFamily: 'Montserrat',
              fontSize: '2rem',
              lineHeight: '2rem',
              fontWeight: '600',
              textAlign: "left",
              color: '#112A46'
            }}>  Generative Artificial Intelligence: Unleashing The Creative Power Of Algorithms

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
        <GridContainer style={{ marginBottom: "2rem", color: '#112A46', background: '#FFF' }}>
          <h4>
            At Novel Logiks, we’re passionate about demystifying the magic behind Generative Artificial Intelligence (AI) and showing you how it works. Generative AI is
            a groundbreaking technology that enables computers to not only process data
            but also create entirely new content, ranging from text and images to music and
            even more.
          </h4>
          <ul>
            <li>
              <h4> Training Data: Generative AI systems learn from vast amounts of data.
                They analyze and recognize patterns, styles, and structures within this
                data. This data can be anything from thousands of books for generating
                text to a massive collection of images for creating artwork.</h4></li>
            <li><h4>
              Neural Networks: These AI models are built upon complex neural networks, often referred to as deep learning models. These networks consist
              of interconnected layers of artificial neurons, mimicking the structure of
              the human brain.</h4></li>

            <li><h4>Learning Patterns: During the training process, the AI system learns
              to understand and mimic the patterns present in the training data. For instance, a text-based generative AI might learn sentence structures, grammar rules, and vocabulary from a large corpus of text.</h4></li>

            <li><h4>Generating New Content: Once trained, the generative AI can generate entirely new content by extrapolating from the patterns it has learned.
              For instance, it can write articles, compose music, or create art that is inspired by the patterns it has seen in its training data.</h4></li>

            <li><h4>Fine-Tuning: Generative AI models can also be fine-tuned for specific
              tasks or styles. This allows us to customize the AI’s output to match your
              unique requirements, whether it’s generating marketing copy, designing
              logos, or composing music that fits your brand.</h4></li>

            <li><h4>Iterative Improvement: The AI can continually refine its output based
              on feedback and additional training data, ensuring that its creations become increasingly sophisticated and tailored to your needs.</h4></li>
          </ul>
          <h4>
            Generative AI isn’t just a tool; it’s a revolutionary leap forward in creativity
            and problem-solving. It can save time, reduce costs, and inspire new possibilities
            across various industries. Whether you’re in art, marketing, research, or any
            field where creativity and innovation are essential, Novel Logiks can help you
            harness the transformative potential of Generative AI.
            Join us in exploring the fascinating world of Generative AI and witness how
            algorithms can bring your vision to life, one generated masterpiece at a time.
          </h4>
        </GridContainer>
        <GridContainer style={{ marginBottom: "2rem", textAlign: "center" }}>
          <GridItem xs={12} sm={12} md={12}>
            <Button
              size="medium"
              variant="contained"
              type="submit"
              style={{
                textTransform: "none",
                color: '#FFF',
                background: '#5288E5',
                textAlign: "left",
                margin: '1em',
                width: "10rem",
                boxShadow:"none"
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
                color: '#FFF',
                borderColor: 'black',
                border: '2px solid',
                background: '#5288E5',
                textAlign: "right",
                width: "10rem"
              }}
              onClick={() => console.log("Need to Handle Routing ?")}
            >
              See Other Services
            </Button>
          </GridItem>
        </GridContainer>

        <GridContainer style={{ marginBottom: "2rem", color: '#112A46', background: '#FFF' }}>
          <GridItem md={12} style={{ color: '#112A46' }}>
            <h1 style={{
              fontFamily: 'Montserrat',
              fontSize: '2rem',
              lineHeight: '2rem',
              fontWeight: '600',
              textAlign: "left",
              color: '#112A46'
            }}>  Predictive Maintenance Using AI: Ensuring Efficiency And Reliability
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
        <GridContainer style={{ marginBottom: "2rem", color: '#112A46', background: '#FFF' }}>
          <h4>
            At Novel Logiks, we’re dedicated to demystifying the world of Predictive Maintenance and showcasing its pivotal role in enhancing efficiency and reliability in
            various industries. Predictive Maintenance is a proactive approach that utilizes
            cutting-edge technology and data-driven insights to predict when equipment
            or machinery is likely to fail. This methodology ensures minimal downtime,
            reduces costs, and maximizes operational efficiency
          </h4>
          <ul>
            <li>
              Data Collection: Predictive Maintenance begins with the collection of
              vast amounts of data from sensors, machinery, and other relevant sources.
              These data streams provide valuable insights into the health and performance of equipment.</li>
            <li>
              Data Analysis: Advanced analytics and machine learning algorithms
              are employed to process and analyze the collected data. Patterns and
              anomalies are identified, allowing us to foresee potential issues before they
              become critical.
            </li>

            <li><h4>Predictive Models: Predictive Maintenance models are developed based
              on historical data and patterns. These models can accurately predict when
              maintenance is required, taking into account factors like usage, environmental conditions, and wear and tear.</h4></li>

            <li><h4>Maintenance Alerts: When the predictive models detect a potential
              issue, maintenance alerts are generated. These alerts provide timely notifications to maintenance teams, allowing them to schedule repairs or
              replacements before a breakdown occurs.</h4></li>

            <li><h4>Optimized Maintenance Schedules: Predictive Maintenance optimizes maintenance schedules by prioritizing tasks based on urgency and
              criticality. This reduces unnecessary maintenance and associated costs.
            </h4></li>

            <li><h4>Cost Reduction and Efficiency: By addressing maintenance needs precisely when required, Predictive Maintenance minimizes downtime, lowers
              repair costs and extends the lifespan of the equipment. This results in
              significant cost savings and improved operational efficiency.</h4></li>

            <li><h4>Continuous Improvement: Predictive Maintenance is an ongoing process that continually learns and adapts. As more data is collected and
              analyzed, the system becomes more accurate and refined, further enhancing its predictive capabilities.</h4></li>
          </ul>
          <h4>
            Predictive Maintenance isn’t just a maintenance strategy; it’s a transformative approach that revolutionizes how industries operate. Whether you’re
            in manufacturing, energy, transportation, or any sector relying on machinery
            and equipment, Novel Logiks can help you implement Predictive Maintenance
            solutions that keep your operations running smoothly and efficiently.
            Join us in exploring the world of Predictive Maintenance and experience
            firsthand how it can drive efficiency, reduce costs, and ensure the reliability of
            your assets.

          </h4>
        </GridContainer>
        <GridContainer style={{ marginBottom: "2rem", textAlign: "center" }}>
          <GridItem xs={12} sm={12} md={12}>
            <Button
              size="medium"
              variant="contained"
              type="submit"
              style={{
                textTransform: "none",
                color: '#FFF',
                background: '#5288E5',
                textAlign: "left",
                margin: '1em',
                width: "10rem",
                boxShadow:"none"
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
                marginLeft: '2em',
                marginRight: '2em',
                textTransform: "none",
                color: '#112A46',
                borderColor: 'black',
                border: '2px solid',
                background: '#FFF',
                textAlign: "right",
                width: "10rem"
              }}
              onClick={() => console.log("Need to Handle Routing ?")}
            >
              See Other Services
            </Button>
          </GridItem>
        </GridContainer>

        <GridContainer style={{ marginBottom: "2rem", color: '#112A46', background: '#FFF' }}>
          <GridItem md={12} style={{ color: '#112A46' }}>
            <h1 style={{
              fontFamily: 'Montserrat',
              fontSize: '2rem',
              lineHeight: '2rem',
              fontWeight: '600',
              textAlign: "left",
              color: '#112A46'
            }}>  AI and Computer Vision: Transforming Visual Data into Intelligent Insights
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
        <GridContainer style={{ marginBottom: "2rem", color: '#112A46', background: '#FFF' }}>
          <h4>
            Welcome to Novel Logiks, where we delve into the captivating world of AI and
            Computer Vision, unlocking the potential of visual data for intelligent decisionmaking. Computer Vision, powered by Artificial Intelligence, allows machines
            to interpret and understand the visual world around us, offering a myriad of
            applications across various industries
          </h4>
          <ul>
            <li>
              <h4> Image and Video Input: Computer Vision begins with the input of
                images or videos from cameras, sensors, or other sources. These visual
                data sources can range from surveillance footage to medical images and
                industrial inspections.
              </h4></li>
            <li><h4>
              Feature Extraction: Advanced algorithms are applied to extract meaningful features and patterns from the visual data. This process can identify
              objects, faces, gestures, and more, depending on the application.
            </h4></li>
            <li><h4>
              Machine Learning Models: AI models, such as Convolutional Neural Networks (CNNs) and Transformers, are employed to analyze the extracted features. These models are trained on large datasets to recognize
              and classify objects, detect anomalies, or even predict future events
            </h4></li>
            <li><h4>
              Object Recognition and Tracking: Computer Vision can identify and
              track objects in real-time, making it invaluable in fields like autonomous
              vehicles, retail analytics, and security systems
            </h4></li>
            <li><h4>
              Anomaly Detection: It can spot deviations from normal patterns, crucial for quality control in manufacturing, medical diagnostics, and infrastructure maintenance
            </h4></li>
            <li><h4>Visual Insights: Computer Vision translates visual data into actionable
              insights. For instance, it can assess product defects, monitor traffic flow,
              or even assist in medical diagnoses by analyzing medical images.
            </h4></li>
            <li><h4>Enhanced User Experience: In applications like augmented reality
              (AR) and gaming, Computer Vision enriches the user experience by overlaying virtual elements on the real world</h4></li>
            <li><h4>Continuous Learning: Computer Vision systems continually improve
              their accuracy and performance through feedback and additional training
              data, ensuring their reliability in various environments
            </h4></li>
          </ul>
          <h4>
            AI-driven Computer Vision isn’t just about seeing; it’s about understanding
            and making informed decisions. Whether you’re in healthcare, manufacturing,
            retail, or any industry relying on visual data, Novel Logiks can help you harness
            the transformative power of AI and Computer Vision to gain deeper insights,
            increase efficiency, and drive innovation.
            Join us in exploring the boundless possibilities of AI and Computer Vision,
            where visual data becomes a source of knowledge and a catalyst for intelligent
            solutions
          </h4>
        </GridContainer>
        <GridContainer style={{ marginBottom: "2rem", textAlign: "center" }}>
          <GridItem xs={12} sm={12} md={12}>
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
                width: "10rem",
                boxShadow:"none"
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
                width: "10rem"
              }}
              onClick={() => console.log("Need to Handle Routing ?")}
            >
              See Other Services
            </Button>
          </GridItem>
        </GridContainer>

        {/* //FOOTER */}
        <Footer
        className={classes.footer}
        content={
          <div>
            <div className={classes.left}>
              <Button
                href="https://twitter.com/novellogikshill"
                target="_blank"
                color="twitter"
                justIcon
                simple
              >
                <i className="fab fa-twitter" />
              </Button>
              <Button
                href="https://instagram.com/novellogikshill?igshid=MzNlNGNkZWQ4Mg=="
                target="_blank"
                color="instagram"
                justIcon
                simple
              >
                <i className="fab fa-instagram" />
              </Button>
              <Button href="https://www.facebook.com/people/Novel Logiks/100094870993690"
                justIcon simple color="facebook">
                <i className="fab fa-facebook-square" />
              </Button>
            </div>
            <div className={classes.right}>
              <a
                href="  "
                target="_blank"
                style={{ color: "gray" }}
              >
                All rights reserved by Novel Logiks Copyright ©2023
              </a>{" "}
            </div>
          </div>
        }
      />
      </div>
    </>
  );
}
