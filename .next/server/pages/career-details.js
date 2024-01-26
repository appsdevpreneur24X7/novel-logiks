"use strict";
(() => {
var exports = {};
exports.id = 843;
exports.ids = [843];
exports.modules = {

/***/ 2562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CareerDetails)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8409);
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header_Header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4889);
/* harmony import */ var _components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6659);
/* harmony import */ var _components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4041);
/* harmony import */ var _components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6680);
/* harmony import */ var _styles_jss_novel_logiks_pages_sectionsSections_headersStyle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4866);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data_careers_data_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1042);
/* harmony import */ var _components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6568);
/* harmony import */ var _components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(571);
/* harmony import */ var _styles_jss_novel_logiks_pages_sectionsPageStyle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3874);
/*eslint-disable*/ 

// nodejs library that concatenates classes

// @mui/icons-material










const useStyles = _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2___default()(_styles_jss_novel_logiks_pages_sectionsSections_headersStyle_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
function CareerDetails() {
    const classes = useStyles();
    const { careers  } = _data_careers_data_js__WEBPACK_IMPORTED_MODULE_9__/* .careersData */ ._;
    const { 0: positions , 1: setPositions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>[]);
    const { 0: locations , 1: setLocations  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>[]);
    const { 0: employmentTypes , 1: setEmploymentTypes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>[]);
    const { 0: searchResults , 1: setSearchResults  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>[]);
    const { 0: selectedPosition , 1: setSelectedPosition  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>null);
    const { 0: selectedEmploymentType , 1: setSelectedEmploymentType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>null);
    const { 0: selectedLocation , 1: setSelectedLocation  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>null);
    const { 0: enableSearch , 1: setEnableSearch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>true);
    let filteredCareers = [];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log("Loading Careers : ", careers.length, careers);
        if (careers && careers.length > 0) {
            setPositions(()=>careers.map((each)=>each.position));
            const tempLocs = careers.map((each)=>each.location);
            const tempEmploymentTypes = careers.map((each)=>each.employmentType);
            setLocations(()=>tempLocs.filter((value, index, array)=>array.indexOf(value) === index));
            setEmploymentTypes(()=>tempEmploymentTypes.filter((value, index, array)=>array.indexOf(value) === index));
        }
    }, []);
    const searchHandler = ()=>{
        // debugger;
        console.log(`selectedPosition :${selectedPosition} , Selected Location : ${selectedLocation} , Selected Employment : ${selectedEmploymentType}`);
        if (selectedPosition && selectedPosition.length > 0) {
            filteredCareers = careers.filter((value, index, array)=>value["position"] === selectedPosition);
            console.log("filteredCareers : ", filteredCareers);
            setSearchResults(()=>filteredCareers);
        } else if (selectedLocation && selectedLocation.length > 0) {
            if (filteredCareers && filteredCareers.length > 0) {
                filteredCareers = filteredCareers.filter((value, index, array)=>value.location === selectedLocation);
                console.log("filteredCareers : ", filteredCareers);
            } else {
                filteredCareers = careers.filter((value, index, array)=>value.location === selectedLocation);
                console.log("filteredCareers : ", filteredCareers);
            }
            setSearchResults(()=>filteredCareers);
        } else if (selectedEmploymentType && selectedEmploymentType.length > 0) {
            if (filteredCareers && filteredCareers.length > 0) {
                filteredCareers = filteredCareers.filter((value, index, array)=>value.employmentType === selectedEmploymentType);
                console.log("filteredCareers : ", filteredCareers);
            } else {
                filteredCareers = careers.filter((value, index, array)=>value.employmentType === selectedEmploymentType);
                console.log("filteredCareers : ", filteredCareers);
            }
            setSearchResults(()=>filteredCareers);
        }
    };
    const renderCareerResults = ()=>{
        console.log("Exec  Data Found");
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                overflowY: "scroll",
                height: "600px",
                minHeight: "600px"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Paper, {
                sx: {
                    borderRadius: "10px",
                    width: "90%",
                    textAlign: "left",
                    marginLeft: "auto",
                    marginRight: "auto"
                },
                children: searchResults && searchResults.length > 0 ? searchResults.map((ser)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                style: {
                                    marginTop: "2rem"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        xs: 12,
                                        sm: 12,
                                        md: 12,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                                            style: {
                                                color: "black",
                                                fontSize: "1rem",
                                                fontWeight: "550",
                                                fontFamily: "Montserrat",
                                                marginLeft: "2em",
                                                marginTop: "3em"
                                            },
                                            children: [
                                                "Job Title : ",
                                                ser && ser.position
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        xs: 12,
                                        sm: 12,
                                        md: 12,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                                            component: "div",
                                            style: {
                                                color: "black",
                                                fontSize: "1rem",
                                                fontWeight: "550",
                                                fontFamily: "Montserrat",
                                                marginLeft: "2em"
                                            },
                                            children: [
                                                "Experience : ",
                                                ser && ser.experience
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        xs: 12,
                                        sm: 12,
                                        md: 12,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                                            component: "div",
                                            style: {
                                                color: "black",
                                                fontSize: "1rem",
                                                fontWeight: "550",
                                                fontFamily: "Montserrat",
                                                marginLeft: "2em"
                                            },
                                            children: [
                                                "Employment Type : ",
                                                ser && ser.employmentType
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        xs: 12,
                                        sm: 12,
                                        md: 12,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                                            component: "div",
                                            style: {
                                                color: "black",
                                                fontSize: "1rem",
                                                fontWeight: "550",
                                                fontFamily: "Montserrat",
                                                marginLeft: "2em"
                                            },
                                            children: [
                                                "Location: ",
                                                ser && ser.location
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                                component: "div",
                                style: {
                                    color: "black",
                                    fontSize: "1rem",
                                    fontWeight: "550",
                                    fontFamily: "Montserrat",
                                    marginLeft: "2em"
                                },
                                children: "Role & Responsibilities :"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            " ",
                            ser.rolesResponsibilities.map((r, indx)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                                            component: "div",
                                            style: {
                                                color: "black",
                                                fontSize: "0.85rem",
                                                fontFamily: "Montserrat",
                                                marginLeft: "3em"
                                            },
                                            children: r
                                        })
                                    })
                                }, indx);
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                xs: 12,
                                sm: 12,
                                md: 12,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                                        component: "div",
                                        style: {
                                            color: "black",
                                            fontSize: "1rem",
                                            fontWeight: "550",
                                            fontFamily: "Montserrat",
                                            marginLeft: "2em"
                                        },
                                        children: "Skillset :"
                                    }),
                                    "  ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "  ",
                                    ser.skillSet.map((r, indx)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                                                    component: "div",
                                                    style: {
                                                        color: "black",
                                                        fontSize: "0.85rem",
                                                        fontFamily: "Montserrat",
                                                        marginLeft: "3em"
                                                    },
                                                    children: r
                                                })
                                            })
                                        }, indx);
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Divider, {})
                                ]
                            })
                        ]
                    });
                }) : null
            })
        });
    };
    const renderNoDataFound = ()=>{
        console.log("Exec No Data Found");
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Paper, {
            sx: {
                borderRadius: "10px",
                width: "90%",
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "2em",
                height: "5em"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                variant: "h6",
                component: "div",
                style: {
                    color: "black",
                    fontSize: "1.25rem",
                    lineHeight: "1em",
                    fontFamily: '"Montserrat"'
                },
                children: "No Positions Found."
            })
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        style: {
            backgroundColor: "#FFFFFF"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header_Header_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                brand: "",
                links: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    dropdownHoverColor: "info"
                }),
                fixed: true,
                color: "info",
                disableGutters: true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    marginTop: "5em",
                    backgroundColor: "#FFFFFF"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Paper, {
                        sx: {
                            borderRadius: "10px",
                            width: "90%",
                            marginLeft: "auto",
                            textAlign: "center",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: "auto"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                item: true,
                                xs: 12,
                                style: {
                                    marginTop: "5em",
                                    marginBottom: "3em",
                                    textAlign: "center",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "90%"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                                    style: {
                                        color: "black",
                                        fontSize: "2.25rem",
                                        fontFamily: "Montserrat",
                                        marginTop: "5em"
                                    },
                                    children: "Want to work with us?"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                spacing: 2,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        item: true,
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        style: {
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            gap: "0.5em"
                                        },
                                        sx: {
                                            marginLeft: {
                                                lg: "auto",
                                                md: "auto",
                                                sm: "auto",
                                                xs: "3em"
                                            }
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Autocomplete, {
                                            disablePortal: true,
                                            size: "small",
                                            id: "combo-box-position",
                                            style: {
                                                textAlign: "left"
                                            },
                                            options: positions,
                                            value: selectedPosition,
                                            onChange: (event, value)=>{
                                                console.log("value : ", value);
                                                setSelectedPosition(value);
                                                setEnableSearch(()=>false);
                                            },
                                            renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
                                                    ...params,
                                                    label: "Positions"
                                                })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        item: true,
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        style: {
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            gap: "0.5em"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Autocomplete, {
                                            disablePortal: true,
                                            size: "small",
                                            id: "combo-box-location",
                                            options: locations,
                                            style: {
                                                textAlign: "left"
                                            },
                                            value: selectedLocation,
                                            onChange: (event, value)=>{
                                                console.log("Selected Location  : ", value);
                                                setSelectedLocation(value);
                                                setEnableSearch(()=>false);
                                                return;
                                            },
                                            renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
                                                    ...params,
                                                    label: "Location"
                                                })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        item: true,
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        style: {
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            gap: "0.5em"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Autocomplete, {
                                            disablePortal: true,
                                            size: "small",
                                            id: "combo-box-employment-type",
                                            options: employmentTypes,
                                            style: {
                                                textAlign: "left"
                                            },
                                            sx: {
                                                margintop: "0.25em"
                                            },
                                            value: selectedEmploymentType,
                                            onChange: (event, value)=>{
                                                console.log("Selected Employment Type  : ", value);
                                                setSelectedEmploymentType(value);
                                                setEnableSearch(()=>false);
                                                return;
                                            },
                                            renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
                                                    ...params,
                                                    label: "Employment Type"
                                                })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        item: true,
                                        xs: 12,
                                        style: {
                                            marginTop: "2em",
                                            marginBottom: "2em",
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                            size: "medium",
                                            variant: "contained",
                                            type: "submit",
                                            justify: "center",
                                            style: {
                                                alignItems: "center",
                                                alignItems: "center",
                                                textAlign: "center",
                                                textTransform: "none",
                                                color: "#112A46",
                                                background: "#5288E5",
                                                width: "10rem"
                                            },
                                            disabled: enableSearch ? true : false,
                                            onClick: searchHandler,
                                            children: "Search"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    searchResults && searchResults.length !== 0 && renderCareerResults(),
                    !searchResults && (selectedPosition !== null || selectedLocation !== null || selectedEmploymentType !== null) && renderNoDataFound(),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        className: classes.footer,
                        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: classes.left,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                            href: "https://twitter.com/novellogikshill",
                                            target: "_blank",
                                            color: "twitter",
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                            href: "https://instagram.com/novellogikshill?igshid=MzNlNGNkZWQ4Mg==",
                                            target: "_blank",
                                            color: "instagram",
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fab fa-instagram"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                            href: "https://www.facebook.com/people/Novel Logiks/100094870993690",
                                            justIcon: true,
                                            simple: true,
                                            color: "facebook",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fab fa-facebook-square"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: classes.right,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: " ",
                                            target: "_blank",
                                            style: {
                                                color: "gray"
                                            },
                                            children: "All rights reserved by Novel Logiks Copyright \xa92023"
                                        }),
                                        " "
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 7372:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Favorite");

/***/ }),

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3882:
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 7898:
/***/ ((module) => {

module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 9483:
/***/ ((module) => {

module.exports = require("@mui/material/Hidden");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 4192:
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 1431:
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 8409:
/***/ ((module) => {

module.exports = require("@mui/styles/makeStyles");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,270,664,441,999,39,866,568,828], () => (__webpack_exec__(2562)));
module.exports = __webpack_exports__;

})();