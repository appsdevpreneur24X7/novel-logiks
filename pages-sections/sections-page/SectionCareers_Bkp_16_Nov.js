// import React, { useEffect, useState } from "react";
// import makeStyles from '@mui/styles/makeStyles';
// import GridContainer from "/components/Grid/GridContainer.js";
// import GridItem from "/components/Grid/GridItem.js";
// import Muted from "/components/Typography/Muted.js";
// import SearchIcon from '@mui/icons-material/Search';
// import careersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/careersStyle.js";
// import { Autocomplete, Box, Button, Divider, TextField } from "@mui/material";
// import { careers } from "../../data/careers-data";
// import Router from "next/router";
// const useStyles = makeStyles(careersStyle);

// export default function SectionCareersBkp9Nov({ ...rest }) {
//   const classes = useStyles();
//   const routeToCareerDetails = () => {
//     Router.push("/career-details");
//   }
//   const [specialitySelect, setSpecialitySelect] = React.useState("1");
//   const [autoCompletePosition, setAutoCompletePosition] =
//     useState(() => "");
//   const [autoCompleteLocation, setAutoCompleteLocation] =
//     useState(() => "");
//   const [employmentType, setEmploymentType] =
//     useState(() => "");

//   const [positions, setPositions] =
//     useState(() => []);

//   const [locations, setLocations] =
//     useState(() => []);

//   const [employmentTypes, setEmploymentTypes] =
//     useState(() => []);

//   useEffect(() => {
//     console.log("Loading Careers : ", careers.length, careers);
//     if (careers && careers.length > 0) {
//       setPositions(() => careers.map(each => each.position));
//       const tempLocs = careers.map(each => each.location);
//       const tempEmploymentTypes = careers.map(each => each.employmentType);
//       setLocations(() => tempLocs.filter((value, index, array) => array.indexOf(value) === index));
//       setEmploymentTypes(() => tempEmploymentTypes.filter((value, index, array) => array.indexOf(value) === index));
//     }
//   }, []);
//   console.log("positions : ", positions);
//   return (
//     <div className="cd-section" {...rest}>
//       {/* Careers 1START */}
//       <div className={classes.career}>
//         <div className={classes.container}>
//           <GridContainer>
//             <GridItem md={12} style={{ color: '#112A46', textAlign: "left" }}>
//               <h1 style={{
//                 fontFamily: 'Montserrat',
//                 fontSize: '2rem',
//                 lineHeight: '2rem',
//                 fontWeight: '600',
//                 textAlign: "left"
//               }}>  Careers
//               </h1>
//               <Divider style={{
//                 backgroundColor: '#5288E5',
//                 color: '#5288E5',
//                 border: '#5288E5',
//                 borderRadius: '5px',
//                 borderTop: '0.25rem solid #5288E5',
//                 width: '40%'
//               }}></Divider>
//               <Muted>
//                 <h4 className={classes.cardTitle} style={{ textAlign: "left" }}>
//                   Navigate your career in the right direction.</h4><br/>
//                 <h4 >Every Voice Matters , join us to be the Voice that will define our future.</h4>
//                 <h4 >We intend to build a workforce that is diverse irrespective of gender, religion, age, country of origin and what have you.
//                 </h4>
//               </Muted>
//               <h4 >At Novel Logiks Technologies, we endeavor to provide a formidable platform for professionals who will be our change agents – catalysts who are torchbearers of our fortitude to excel and redefine the limits of technology to make our clients successful. Our hiring team focuses on the recruitment of talented professionals in the industry. If you are experienced in the pursuit of excellence in IT, and looking for challenging opportunities to actualize your fire within, look no further. A career at Novel Logiks Technologies offers just that and a lot more.</h4>
//               <GridContainer style={{ marginBottom: "2rem" }}>
//                             <GridItem xs={12} sm={12} md={12} style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}>
//                                 <Button
//                                     size="medium"
//                                     variant="contained"
//                                     type="submit"
//                                     style={{
//                                         textTransform: "none",
//                                         color: '#112A46',
//                                         background: '#5288E5',
//                                         textAlign: "left",
//                                         marginLeft: '2em',
//                                         marginRight: '2em',

//                                         width: "10rem",
//                                     }}
//                                     onClick={routeToCareerDetails}
//                                 >
//                                     Apply Now
//                                 </Button>
//                             </GridItem>
//                         </GridContainer>
//             </GridItem>
//           </GridContainer>
//         </div>
//       </div>
//     </div>
//   );
// }
