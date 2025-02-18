import React, { useEffect, useState } from "react";
import makeStyles from '@mui/styles/makeStyles';
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import careersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/careersStyle.js";
import { Autocomplete, Box, Button, Divider, TextField, Typography, Paper } from "@mui/material";
import { careersData } from "../../data/careers-data";
import Router from "next/router";
const useStyles = makeStyles(careersStyle);

export default function SectionCareers({ ...rest }) {
  const classes = useStyles();
  const routeToCareerDetails = () => {
    Router.push("/career-details");
  }
  const { careers } = careersData;
  const [positions, setPositions] =
    useState(() => []);

  const [locations, setLocations] =
    useState(() => []);

  const [employmentTypes, setEmploymentTypes] =
    useState(() => []);

  const [searchResults, setSearchResults] =
    useState(() => []);

  const [selectedPosition, setSelectedPosition] =
    useState(() => null);
  const [selectedEmploymentType, setSelectedEmploymentType] =
    useState(() => null);
  const [selectedLocation, setSelectedLocation] =
    useState(() => null);
  const [enableSearch, setEnableSearch] =
    useState(() => true);
  let filteredCareers = [];
  useEffect(() => {
    console.log("Loading Careers : ", careers.length, careers);
    if (careers && careers.length > 0) {
      setPositions(() => careers.map(each => each.position));
      const tempLocs = careers.map(each => each.location);
      const tempEmploymentTypes = careers.map(each => each.employmentType);
      setLocations(() => tempLocs.filter((value, index, array) => array.indexOf(value) === index));
      setEmploymentTypes(() => tempEmploymentTypes.filter((value, index, array) => array.indexOf(value) === index));
    }
  }, []);

  const searchHandler = () => {
    console.log(`selectedPosition :${selectedPosition} , Selected Location : ${selectedLocation} , Selected Employment : ${selectedEmploymentType}`);
    if (selectedPosition && selectedPosition.length > 0) {
      filteredCareers = careers.filter((value, index, array) => value['position'] === selectedPosition);
      console.log('filteredCareers : ', filteredCareers);
      setSearchResults(() => filteredCareers);
    } else if (selectedLocation && selectedLocation.length > 0) {
      if (filteredCareers && filteredCareers.length > 0) {
        filteredCareers = filteredCareers.filter((value, index, array) => value.location === selectedLocation);
        console.log('filteredCareers : ', filteredCareers);
      } else {
        filteredCareers = careers.filter((value, index, array) => value.location === selectedLocation);
        console.log('filteredCareers : ', filteredCareers);
      }
      setSearchResults(() => filteredCareers);
    } else if (selectedEmploymentType && selectedEmploymentType.length > 0) {
      if (filteredCareers && filteredCareers.length > 0) {
        filteredCareers = filteredCareers.filter((value, index, array) => value.employmentType === selectedEmploymentType);
        console.log('filteredCareers : ', filteredCareers);
      } else {
        filteredCareers = careers.filter((value, index, array) => value.employmentType === selectedEmploymentType);
        console.log('filteredCareers : ', filteredCareers);
      }
      setSearchResults(() => filteredCareers);
    }
  }

  const renderCareerResults = () => {
    console.log("Exec  Data Found");
    return (<div style={{
      overflowY: 'scroll',
      height: '600px', minHeight: '600px'
    }}>
      <Paper sx={{ borderRadius: '10px', width: '90%', textAlign: "left", marginLeft: "auto", marginRight: "auto" }} >
        {searchResults && searchResults.length > 0 ? searchResults.map(ser => {
          return <div>
            {/* <div xs={12} > */}
            <GridContainer style={{ marginTop: "1rem" }}>
              <GridItem xs={12} sm={12} md={12}>
                <Typography style={{ color: "black", fontSize: "1rem", fontWeight: "550", fontFamily: 'Montserrat', marginLeft: "2em", marginTop: "3em" }}>
                  Job Title : {ser && ser.position}
                </Typography>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <Typography component="div" style={{ color: "black", fontSize: "1rem", fontWeight: "550", fontFamily: 'Montserrat', marginLeft: "2em" }}>
                  Experience : {ser && ser.experience}
                </Typography>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <Typography component="div" style={{ color: "black", fontSize: "1rem", fontWeight: "550", fontFamily: 'Montserrat', marginLeft: "2em" }}>
                  Employment Type : {ser && ser.employmentType}
                </Typography>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <Typography component="div" style={{ color: "black", fontSize: "1rem", fontWeight: "550", fontFamily: 'Montserrat', marginLeft: "2em" }}>
                  Location: {ser && ser.location}
                </Typography>
              </GridItem>

            </GridContainer>
            <Typography component="div" style={{ color: "black", fontSize: "1rem", fontWeight: "550", fontFamily: 'Montserrat', marginLeft: "2em" }}>
              Role & Responsibilities :
            </Typography><br /> {ser.rolesResponsibilities.map((r, indx) => {
              return (
                <ul key={indx}>
                  <li><Typography component="div" style={{ color: "black", fontSize: "0.85rem", fontFamily: 'Montserrat', marginLeft: "3em" }}>{r}</Typography></li>
                </ul>)
            }
            )
            }
            <br />
            <GridItem xs={12} sm={12} md={12}>
              <Typography component="div" style={{ color: "black", fontSize: "1rem", fontWeight: "550", fontFamily: 'Montserrat', marginLeft: "2em" }}>
                Skillset :</Typography>  <br />  {ser.skillSet.map((r, indx) => {
                  return (
                    <ul key={indx}>
                      <li><Typography component="div" style={{ color: "black", fontSize: "0.85rem", fontFamily: 'Montserrat', marginLeft: "3em" }}>{r}</Typography></li>
                    </ul>)
                }
                )
              }
              {/* <Divider /> */}
            </GridItem>
          </div>
        }) : null}
      </Paper>
    </div>
    )
  }

  const renderNoDataFound = () => {
    console.log("Exec No Data Found");
    return (
      <Paper sx={{ borderRadius: '10px', width: '90%', textAlign: "center", marginLeft: "auto", marginRight: "auto", marginTop: "2em", height: "5em" }} >
        <Typography variant="h6" component="div" style={{ color: "black", fontSize: "1.25rem", lineHeight: '1em', fontFamily: '"Montserrat"' }}>
          No Positions Found.
        </Typography>
      </Paper>
    )
  }
  return (
    <div className="cd-section" {...rest}>
      {/* Careers 1START */}
      <div className={classes.container}>

        <GridContainer style={{ marginBottom: '2rem' }}>
          <GridItem md={8} style={{ color: '#112A46' }}>
            <h1 style={{
              fontFamily: 'Montserrat',
              fontSize: '2rem',
              lineHeight: '1.25rem',
              fontWeight: '600',
              textAlign: "left",
              color: '#112A46',


            }}>  Careers
            </h1>
            {/* <Divider style={{
              background: "#0D47A1",
              color: '#0D47A1',
              border: '#0D47A1',
              borderRadius: '5px',
              borderTop: '0.25rem solid #0D47A1',
              width: '40%'
            }}></Divider> */}
            <Typography
              sx={{
                fontFamily: 'Montserrat',
                lineHeight: '1.25rem',
                fontWeight: '600',
                color: '#112A46',
                textAlign: {
                  lg: 'left',
                  md: 'left',
                  sm: 'left',
                  xs: 'left'
                },
                fontSize: {
                  lg: '1.5rem',
                  md: '1.5rem',
                  sm: '1.5rem',
                  xs: '1.25rem'
                },
                margin: "2rem"
              }}
            >{careersData.points[0]}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Montserrat',
                lineHeight: '1.25rem',
                fontWeight: '500',
                color: '#112A46',
                textAlign: {
                  lg: 'left',
                  md: 'left',
                  sm: 'left',
                  xs: 'left'
                },
                fontSize: {
                  lg: '1rem',
                  md: '1rem',
                  sm: '1rem',
                  xs: '0.95rem'
                },
                margin: "2rem"
              }}
            >{careersData.points[1]}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Montserrat',
                lineHeight: '1.25rem',
                fontWeight: '500',
                color: '#112A46',
                textAlign: {
                  lg: 'left',
                  md: 'center',
                  sm: 'center',
                  xs: 'center'
                },
                fontSize: {
                  lg: '1rem',
                  md: '1rem',
                  sm: '1rem',
                  xs: '0.95rem'
                },
                margin: "2rem"
              }}
            >{careersData.points[2]}
            </Typography>
          </GridItem>
          <GridItem md={4} style={{ color: '#112A46', backgroundImage: "url('img/resized_imgs/bulb_careers_bg.png')", backgroundSize: "cover" }}>
            <GridContainer style={{ marginBottom: "1rem", gap: "2rem" }}>
              <GridItem md={12} sm={12} style={{ textAlign: "center", margin: "auto" }}>
              </GridItem>
              {/* POSITIONS */}
              <GridItem md={12} sm={12} style={{ textAlign: "center", margin: "auto", background: "white" }}>
                <Autocomplete
                  disablePortal
                  size="small"
                  id="combo-box-position"
                  style={{ textAlign: "left", color: "black", background: "#D3D3D3" }}
                  options={positions}
                  value={selectedPosition}
                  onChange={(event, value) => {
                    console.log("value : ", value);
                    setSelectedPosition(value);
                    setEnableSearch(() => false);
                  }}
                  renderInput={(params) => <TextField {...params} label="Positions" style={{ textAlign: "left", color: "black", background: "#D3D3D3" }} />}
                />
              </GridItem>

              {/* LOCATIONS */}
              <GridItem md={12} sm={12} style={{ textAlign: "center", margin: "auto", background: "white" }}>
                <Autocomplete
                  disablePortal
                  size="small"
                  id="combo-box-location"
                  options={locations}
                  style={{ textAlign: "left", color: "black", background: "#D3D3D3" }}
                  value={selectedLocation}
                  onChange={(event, value) => {
                    console.log("Selected Location  : ", value);
                    setSelectedLocation(value);
                    setEnableSearch(() => false);
                    return;
                  }}
                  renderInput={(params) => <TextField {...params} label="Location" />}
                />
              </GridItem>

              {/* EMPLOYMENT TYPE */}
              <GridItem md={12} sm={12} style={{ textAlign: "center", margin: "auto", background: "white" }}>
                <Autocomplete
                  disablePortal
                  size="small"
                  id="combo-box-employment-type"
                  options={employmentTypes}
                  style={{ textAlign: "left", color: "black", background: "#D3D3D3" }}
                  sx={{ margintop: "0.25em" }}
                  value={selectedEmploymentType}
                  onChange={(event, value) => {
                    console.log("Selected Employment Type  : ", value);
                    setSelectedEmploymentType(value);
                    setEnableSearch(() => false);
                    return;
                  }}
                  renderInput={(params) => <TextField {...params} label="Employment Type" />}
                />
              </GridItem>

              <GridItem md={12} sm={12} style={{ textAlign: "center", margin: "auto", background: "white" }}>
                <Button
                   size="medium"
                   variant="contained"
                   type="submit"
                   sx={{
                     width: {
                       lg: '10rem',
                       md: '10rem',
                       sm: '11rem',
                       xs: '12.5rem'
                     },
                   }}
   
                   style={{
                     textTransform: "none",
                     color: '#FFFFFF',
                     borderRadius: '5px',
                     backgroundColor: '#0D47A1',
                     textAlign: "center",
                     fontSize: "1.25rem",
                     height: "2.5rem",
                     fontWeight: "600",
                     boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
                   }}
                  onClick={searchHandler}
                >
                  Search
                </Button>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <GridContainer style={{ marginBottom: '2rem', marginTop: "1rem" }}>
          {searchResults && searchResults.length !== 0 && (renderCareerResults())}
          {!searchResults && (selectedPosition !== null || selectedLocation !== null || selectedEmploymentType !== null) && (renderNoDataFound())}
        </GridContainer>
      </div>
    </div>
  );
}
