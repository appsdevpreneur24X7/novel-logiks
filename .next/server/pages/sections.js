"use strict";
(() => {
var exports = {};
exports.id = 30;
exports.ids = [30];
exports.modules = {

/***/ 5767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SectionsPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/styles/makeStyles"
var makeStyles_ = __webpack_require__(8409);
var makeStyles_default = /*#__PURE__*/__webpack_require__.n(makeStyles_);
// EXTERNAL MODULE: ./components/Header/Header.js + 1 modules
var Header = __webpack_require__(4889);
// EXTERNAL MODULE: ./components/Header/HeaderLinks.js + 1 modules
var HeaderLinks = __webpack_require__(6659);
// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var Grid_GridContainer = __webpack_require__(4041);
// EXTERNAL MODULE: ./components/Grid/GridItem.js
var Grid_GridItem = __webpack_require__(6680);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
// EXTERNAL MODULE: ./styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js
var headersStyle = __webpack_require__(4866);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "@mui/material/useMediaQuery"
const useMediaQuery_namespaceObject = require("@mui/material/useMediaQuery");
;// CONCATENATED MODULE: ./data/home-data.js
const home = [
    {
        serviceTitle: "End-to end IT service expertise enabling better managed integrated portfolios",
        serviceImageUrl: "img/resized_imgs/end-end-it.png"
    },
    {
        serviceTitle: "AI / IOT Advisory experience across industries solving real problems, enabling innovation",
        serviceImageUrl: "img/resized_imgs/iot-advisory.png"
    },
    {
        serviceTitle: "Delivery Driven by outcomes bettering expected, Speed on time, Customer Centric Culture.",
        serviceImageUrl: "img/resized_imgs/delivery-driven.png"
    }, 
];

// EXTERNAL MODULE: ./styles/jss/novel-logiks/pages/sectionsSections/featuresStyle.js
var featuresStyle = __webpack_require__(7684);
;// CONCATENATED MODULE: ./pages-sections/components/SectionHomeLeft.js







const useStyles = makeStyles_default()(featuresStyle/* default */.Z);
function SectionHomeLeft({ ...rest }) {
    const routeToAiDetails = ()=>{
        Router.push("/ai-details");
    };
    const routeToContactUs = ()=>{
        Router.push("/contact-us");
    };
    const classes = useStyles();
    const { data  } = rest;
    console.log("data : ", data);
    const { serviceTitle , serviceImageUrl ,  } = data;
    return(// <div className="cd-section" {...rest}>
    /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.container,
        ...rest,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.features3,
            style: {
                padding: "0px"
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                        xs: 12,
                        sm: 6,
                        md: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                            md: 12,
                            style: {
                                textAlign: "center",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: serviceImageUrl,
                                alt: "ai pic",
                                style: {
                                    width: "80%"
                                }
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                        xs: 12,
                        sm: 6,
                        md: 6,
                        sx: {
                            paddingTop: {
                                xs: "3rem",
                                sm: "3rem",
                                md: "5rem",
                                lg: "5rem"
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                style: {
                                    fontFamily: "Montserrat",
                                    fontSize: "1.719rem",
                                    lineHeight: "2rem",
                                    fontWeight: "600",
                                    textAlign: "left",
                                    color: "#112A46"
                                },
                                children: serviceTitle
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                                style: {
                                    backgroundColor: "#5288E5",
                                    color: "#5288E5",
                                    border: "#5288E5",
                                    borderRadius: "5px",
                                    borderTop: "0.25rem solid #5288E5",
                                    width: "40%"
                                }
                            })
                        ]
                    })
                ]
            })
        })
    }));
};

;// CONCATENATED MODULE: ./pages-sections/components/SectionHomeRight.js







const SectionHomeRight_useStyles = makeStyles_default()(featuresStyle/* default */.Z);
function SectionHomeRight({ ...rest }) {
    const classes = SectionHomeRight_useStyles();
    const { data  } = rest;
    console.log("data : ", data);
    const { serviceTitle , serviceImageUrl  } = data;
    const routeToAiDetails = ()=>{
        Router.push("/ai-details");
    };
    const routeToContactUs = ()=>{
        Router.push("/contact-us");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.container,
        ...rest,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.features3,
            style: {
                padding: "0px"
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                        xs: 12,
                        sm: 6,
                        md: 6,
                        sx: {
                            paddingTop: {
                                xs: "3rem",
                                sm: "3rem",
                                md: "5rem",
                                lg: "5rem"
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                style: {
                                    fontFamily: "Montserrat",
                                    fontSize: "1.719rem",
                                    lineHeight: "2rem",
                                    fontWeight: "600",
                                    textAlign: "left",
                                    color: "#112A46"
                                },
                                children: serviceTitle
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                                style: {
                                    backgroundColor: "#5288E5",
                                    color: "#5288E5",
                                    border: "#5288E5",
                                    borderRadius: "5px",
                                    borderTop: "0.25rem solid #5288E5",
                                    width: "40%"
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                        xs: 12,
                        sm: 6,
                        md: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                            md: 12,
                            style: {
                                textAlign: "center",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: serviceImageUrl,
                                alt: "ai pic",
                                style: {
                                    width: "80%"
                                }
                            })
                        })
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./public/video/ai-medical.mp4
/* harmony default export */ const ai_medical = ("/_next/static/media/ai-medical.d9e01b29e3198ed37776cd8a94d2a56b.mp4");
;// CONCATENATED MODULE: ./pages-sections/sections-page/SectionHome.js














const SectionHome_useStyles = (0,styles_.makeStyles)(headersStyle/* default */.Z);
function SectionHeaders({ ...rest }) {
    const classes = SectionHome_useStyles();
    console.log(home);
    const routeToAiDetails = ()=>{
        router_default().push("/ai-details");
    };
    const routeToContactUs = ()=>{
        router_default().push("/sections#contactUs");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "cd-section",
        ...rest,
        style: {
            marginTop: "5rem",
            width: "100%"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("video", {
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    style: {
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                        src: ai_medical,
                        type: "video/mp4"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridContainer/* default */.Z, {
                    style: {
                        marginBottom: "2rem"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                        md: 12,
                        style: {
                            color: "#112A46",
                            paddingTop: "3rem"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    fontFamily: "Montserrat",
                                    fontSize: {
                                        lg: "3.125rem",
                                        md: "3.125rem",
                                        sm: "2rem",
                                        xs: "2rem"
                                    },
                                    lineHeight: {
                                        lg: "4.125rem",
                                        md: "4.125rem",
                                        sm: "3rem",
                                        xs: "3rem"
                                    }
                                },
                                style: {
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    textAlign: "left",
                                    color: "#091133",
                                    marginBottom: "2rem"
                                },
                                children: "  We provide Digital Solutions cutting across Sectors."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    marginBottom: "2rem",
                                    color: "#112A46",
                                    fontFamily: "Montserrat"
                                },
                                children: "To ignite expansion and ward off competitors, organizations should integrate hardware, software, and services to create customized solutions that address customers' needs and potentially address undiscovered challenges. Digitization has the potential not only to bring about transformation by cutting costs and enhancing core processes but can, and often should, serve as a substantial source of additional revenue. At Novel Logiks, we guide organizations in taking successful transformative strides, leveraging our industry-wide experience and capabilities."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                style: {
                                    color: "#112A46",
                                    fontFamily: "Montserrat",
                                    fontSize: "1.125rem",
                                    lineHeight: "1.5rem",
                                    fontWeight: "600",
                                    textAlign: "left",
                                    marginBottom: "2rem"
                                },
                                children: "Catapult Beyond Imaginable Future."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridContainer/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 12,
                                    md: 12,
                                    style: {
                                        textAlign: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                            size: "medium",
                                            variant: "contained",
                                            type: "submit",
                                            style: {
                                                textTransform: "none",
                                                color: "#112A46",
                                                background: "#5288E5",
                                                textAlign: "left",
                                                margin: "1em",
                                                boxShadow: "none",
                                                width: "11.813rem",
                                                height: "2.5rem",
                                                borderRadius: "0px"
                                            },
                                            onClick: routeToContactUs,
                                            children: "Contact Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                            size: "medium",
                                            variant: "contained",
                                            type: "submit",
                                            style: {
                                                margin: "1em",
                                                textTransform: "none",
                                                color: "#112A46",
                                                borderColor: "black",
                                                border: "2px solid",
                                                background: "#FFF",
                                                boxShadow: "none",
                                                width: "11.813rem",
                                                height: "2.5rem",
                                                borderRadius: "0px"
                                            },
                                            onClick: routeToAiDetails,
                                            children: "Learn More"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                    style: {
                        marginBottom: "2rem",
                        background: "#5288E5"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                            md: 6,
                            style: {
                                color: "#112A46",
                                background: "#5288E5",
                                backgroundImage: "url('img/resized_imgs/circuit_lines.png')",
                                backgroundSize: "50rem"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    style: {
                                        fontFamily: "Montserrat",
                                        fontSize: "1.8rem",
                                        lineHeight: "2rem",
                                        fontWeight: "600",
                                        textAlign: "left",
                                        color: "#112A46"
                                    },
                                    children: "Novel Logiks AI Force One !"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    style: {
                                        fontFamily: "Montserrat",
                                        fontSize: "1.8rem",
                                        lineHeight: "2rem",
                                        fontWeight: "500",
                                        textAlign: "left"
                                    },
                                    children: "Transformative AI capabilities helps enterprises gather escape velocity to the future , propelling business and lives like never before."
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                            md: 6,
                            style: {
                                color: "#112A46",
                                background: "#5288E5",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                m: 1,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                style: {
                                    top: "50%",
                                    left: "50%"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    size: "medium",
                                    variant: "contained",
                                    type: "submit",
                                    sx: {
                                        width: {
                                            lg: "23.438rem",
                                            md: "23.438rem",
                                            sm: "18rem",
                                            xs: "18rem"
                                        }
                                    },
                                    style: {
                                        textTransform: "none",
                                        color: "#112A46",
                                        borderRadius: "5px",
                                        backgroundColor: "#E5AF52",
                                        textAlign: "center",
                                        height: "4.4rem",
                                        fontWeight: "600",
                                        fontSize: "2.5rem",
                                        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"
                                    },
                                    onClick: routeToAiDetails,
                                    children: "Explore Now"
                                })
                            })
                        })
                    ]
                }),
                home && home[0] && /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridContainer/* default */.Z, {
                    id: "0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SectionHomeLeft, {
                        data: home[0]
                    })
                }),
                home && home[1] && /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridContainer/* default */.Z, {
                    id: "2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SectionHomeRight, {
                        data: home[1]
                    })
                }),
                home && home[2] && /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridContainer/* default */.Z, {
                    id: "2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SectionHomeLeft, {
                        data: home[2]
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__(571);
// EXTERNAL MODULE: ./components/Card/Card.js + 1 modules
var Card = __webpack_require__(2643);
// EXTERNAL MODULE: ./components/Card/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(3082);
// EXTERNAL MODULE: ./components/Card/CardBody.js + 1 modules
var CardBody = __webpack_require__(222);
// EXTERNAL MODULE: ./components/Typography/Warning.js
var Warning = __webpack_require__(4951);
// EXTERNAL MODULE: external "@mui/material/styles"
var material_styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1168);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
// EXTERNAL MODULE: ./data/about-us-data.js
var about_us_data = __webpack_require__(5870);
// EXTERNAL MODULE: ./pages-sections/sections-page/SectionAboutUsCard.js
var sections_page_SectionAboutUsCard = __webpack_require__(539);
;// CONCATENATED MODULE: ./pages-sections/sections-page/SectionAboutUs.js












// import { Grid } from "@mui/material";







const SectionAboutUs_useStyles = (0,styles_.makeStyles)(headersStyle/* default */.Z);
function SectionAboutUs_SectionHeaders({ ...rest }) {
    const classes = SectionAboutUs_useStyles();
    const routeToAiDetails = ()=>{
        Router.push("/ai-details");
    };
    const routeToContactUs = ()=>{
        Router.push("/contact-us");
    };
    return /*#__PURE__*/ _jsx("div", {
        className: "cd-section",
        ...rest,
        style: {
            background: "#5288E5"
        },
        children: /*#__PURE__*/ _jsx("div", {
            className: classes.container,
            children: /*#__PURE__*/ _jsxs(GridContainer, {
                children: [
                    /*#__PURE__*/ _jsx(GridItem, {
                        xs: 12,
                        sm: 4,
                        md: 4,
                        style: {
                            marginTop: "2rem"
                        },
                        children: /*#__PURE__*/ _jsx(SectionAboutUsCard, {
                            index: 0
                        })
                    }),
                    /*#__PURE__*/ _jsx(GridItem, {
                        xs: 12,
                        sm: 4,
                        md: 4,
                        children: /*#__PURE__*/ _jsx(SectionAboutUsCard, {
                            index: 1
                        })
                    }),
                    /*#__PURE__*/ _jsx(GridItem, {
                        xs: 12,
                        sm: 4,
                        md: 4,
                        style: {
                            marginTop: "2rem"
                        },
                        children: /*#__PURE__*/ _jsx(SectionAboutUsCard, {
                            index: 2
                        })
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: external "@mui/icons-material/ShoppingCartCheckout"
const ShoppingCartCheckout_namespaceObject = require("@mui/icons-material/ShoppingCartCheckout");
var ShoppingCartCheckout_default = /*#__PURE__*/__webpack_require__.n(ShoppingCartCheckout_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/MedicalInformation"
const MedicalInformation_namespaceObject = require("@mui/icons-material/MedicalInformation");
;// CONCATENATED MODULE: external "@mui/icons-material/CloudDone"
const CloudDone_namespaceObject = require("@mui/icons-material/CloudDone");
;// CONCATENATED MODULE: external "@mui/icons-material/Terminal"
const Terminal_namespaceObject = require("@mui/icons-material/Terminal");
;// CONCATENATED MODULE: external "@mui/icons-material/MonetizationOn"
const MonetizationOn_namespaceObject = require("@mui/icons-material/MonetizationOn");
;// CONCATENATED MODULE: external "@mui/icons-material/AccountTree"
const AccountTree_namespaceObject = require("@mui/icons-material/AccountTree");
;// CONCATENATED MODULE: external "@mui/icons-material/Speed"
const Speed_namespaceObject = require("@mui/icons-material/Speed");
;// CONCATENATED MODULE: external "@mui/icons-material/Psychology"
const Psychology_namespaceObject = require("@mui/icons-material/Psychology");
;// CONCATENATED MODULE: external "@mui/icons-material/QueryStats"
const QueryStats_namespaceObject = require("@mui/icons-material/QueryStats");
// EXTERNAL MODULE: ./data/services-data.js
var services_data = __webpack_require__(9707);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "@mui/icons-material/Favorite"
var Favorite_ = __webpack_require__(7372);
// EXTERNAL MODULE: ./components/Parallax/Parallax.js + 1 modules
var Parallax = __webpack_require__(7482);
// EXTERNAL MODULE: ./components/Card/CardFooter.js + 1 modules
var CardFooter = __webpack_require__(5793);
;// CONCATENATED MODULE: ./pages-sections/sections-page/SectionServicesCarousalCard.js
/*eslint-disable*/ 













const SectionServicesCarousalCard_useStyles = makeStyles_default()(featuresStyle/* default */.Z);
const SectionServicesCarousalCard = (props)=>{
    const classes = SectionServicesCarousalCard_useStyles();
    console.log("props Passed to Carousal Card : ", props);
    const { index  } = props;
    console.log("props Passed to Carousal Card : ", index);
    return /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
        xs: 12,
        sm: 6,
        md: 4,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
            plain: true,
            blog: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(CardHeader/* default */.Z, {
                    plain: true,
                    image: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: services_data/* services */.u[index].serviceImageUrl,
                        alt: "...",
                        style: {
                            height: "20rem",
                            padding: "0.5rem",
                            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                    plain: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            style: {
                                fontFamily: "Montserrat",
                                fontSize: "1.125rem",
                                lineHeight: "1.719rem",
                                fontWeight: "600",
                                textAlign: "left",
                                color: "#212121",
                                padding: "0.5rem"
                            },
                            children: services_data/* services */.u[index].serviceTitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            style: {
                                fontFamily: '"Open Sans", sans-serif',
                                fontSize: "0.875rem",
                                lineHeight: "1.719rem",
                                fontWeight: "300",
                                textAlign: "left",
                                color: "#212121",
                                padding: "1rem"
                            },
                            children: services_data/* services */.u[index].serviceOneLiner
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const sections_page_SectionServicesCarousalCard = (SectionServicesCarousalCard);

;// CONCATENATED MODULE: ./pages-sections/sections-page/SectionServicesCarousel.js
/*eslint-disable*/ 


// nodejs library that concatenates classes



// @mui/icons-material

// core components















const SectionServicesCarousel_useStyles = makeStyles_default()(featuresStyle/* default */.Z);
function SectionServicesCarousel() {
    const classes = SectionServicesCarousel_useStyles();
    console.log("Services Data : ", services_data/* services */.u);
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    const showAllServices = ()=>{
        console.log("Routing to /service-details Page ");
        router_default().push("/service-details");
    };
    const routeToContactUs = ()=>{
        console.log("Routing to /contactUs Page ");
        router_default().push("/sections#contactUs");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                brand: "",
                links: /*#__PURE__*/ jsx_runtime_.jsx(HeaderLinks/* default */.Z, {
                    dropdownHoverColor: "info"
                }),
                fixed: true,
                color: "info",
                disableGutters: true
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                        ...settings,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(sections_page_SectionServicesCarousalCard, {
                                            index: 0
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(sections_page_SectionServicesCarousalCard, {
                                            index: 1
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(sections_page_SectionServicesCarousalCard, {
                                            index: 2
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(sections_page_SectionServicesCarousalCard, {
                                            index: 3
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(sections_page_SectionServicesCarousalCard, {
                                            index: 4
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(sections_page_SectionServicesCarousalCard, {
                                            index: 5
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridContainer/* default */.Z, {
                        style: {
                            marginBottom: "2rem",
                            textAlign: "center"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 12,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    size: "medium",
                                    variant: "contained",
                                    type: "submit",
                                    sx: {
                                        width: {
                                            lg: "21rem",
                                            md: "21rem",
                                            sm: "15rem",
                                            xs: "15rem"
                                        },
                                        height: {
                                            lg: "4rem",
                                            md: "4rem",
                                            sm: "3rem",
                                            xs: "3rem"
                                        },
                                        fontSize: {
                                            lg: "1.5rem",
                                            md: "1.5rem",
                                            sm: "1.25rem",
                                            xs: "1.125rem"
                                        }
                                    },
                                    style: {
                                        textTransform: "none",
                                        fontFamily: "Montserrat",
                                        fontSize: "1.5rem",
                                        fontWeight: "600",
                                        color: "#112A46",
                                        background: "#5288E5",
                                        textAlign: "left",
                                        margin: "1em",
                                        fontSize: "1.5rem",
                                        boxShadow: "none",
                                        borderRadius: "0px"
                                    },
                                    onClick: routeToContactUs,
                                    children: "Contact Us"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    size: "medium",
                                    variant: "contained",
                                    type: "submit",
                                    sx: {
                                        width: {
                                            lg: "21rem",
                                            md: "21rem",
                                            sm: "15rem",
                                            xs: "15rem"
                                        },
                                        height: {
                                            lg: "4rem",
                                            md: "4rem",
                                            sm: "3rem",
                                            xs: "3rem"
                                        },
                                        fontSize: {
                                            lg: "1.5rem",
                                            md: "1.5rem",
                                            sm: "1.25rem",
                                            xs: "1.125rem"
                                        }
                                    },
                                    style: {
                                        color: "#112A46",
                                        textTransform: "none",
                                        fontFamily: "Montserrat",
                                        fontSize: "1.5rem",
                                        borderColor: "black",
                                        border: "2px solid",
                                        background: "#FFF",
                                        textAlign: "right",
                                        boxShadow: "none",
                                        borderRadius: "0px",
                                        fontWeight: "600"
                                    },
                                    onClick: showAllServices,
                                    children: "See all Services"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages-sections/sections-page/SectionServices.js




// @mui/icons-material









// core components






const SectionServices_useStyles = makeStyles_default()(headersStyle/* default */.Z);
const routeToAiDetails = ()=>{
    Router.push("/ai-details");
};
const routeToContactUs = ()=>{
    Router.push("/contact-us");
};
function SectionServices({ ...rest }) {
    const classes = SectionServices_useStyles();
    console.log("Loaded Services data : ", services_data/* services */.u ? services_data/* services.length */.u.length : 0);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "cd-section",
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridContainer/* default */.Z, {
                    style: {
                        marginBottom: ".25rem"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                        md: 6,
                        style: {
                            color: "#112A46"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                style: {
                                    fontFamily: "Montserrat",
                                    fontSize: "2rem",
                                    lineHeight: "2rem",
                                    fontWeight: "600",
                                    textAlign: "left",
                                    color: "#112A46"
                                },
                                children: "  Services"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                                style: {
                                    backgroundColor: "#5288E5",
                                    color: "#5288E5",
                                    border: "#5288E5",
                                    borderRadius: "5px",
                                    borderTop: "0.25rem solid #5288E5",
                                    width: "40%"
                                }
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SectionServicesCarousel, {})
            ]
        })
    });
};

;// CONCATENATED MODULE: ./data/contact-us-data.js
const contactUs = {
    points: [
        "Let’s move your technology and business strategy forward. ",
        "You need a partner. ",
        "Talk to our experts now",
        "We’re here to help!", 
    ],
    address_lines: [
        "Novel Logiks ",
        "Opp ISB , Gachibowli",
        "Hyderabad, TS 500075", 
    ],
    email_ids: [
        "contact@novellogiks.com",
        "hr@novellogiks.com", 
    ],
    phone_no: [
        "(+91) 7032405627", 
    ],
    working_hours: "Mon Fri, 8:00-22:00"
};

;// CONCATENATED MODULE: ./pages-sections/sections-page/SectionContactUs.js









const SectionContactUs_useStyles = (0,styles_.makeStyles)(headersStyle/* default */.Z);
function SectionContactUs({ ...rest }) {
    const classes = SectionContactUs_useStyles();
    const routeToAiDetails = ()=>{
        router_default().push("/ai-details");
    };
    const routeToContactUs = ()=>{
        router_default().push("/contact-us");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "cd-section",
        ...rest,
        style: {
            background: "#5288E5"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridContainer/* default */.Z, {
                    style: {
                        marginBottom: "2rem",
                        marginTop: "4rem"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                        md: 6,
                        style: {
                            color: "#112A46"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                style: {
                                    fontFamily: "Montserrat",
                                    fontSize: "2rem",
                                    lineHeight: "2rem",
                                    fontWeight: "600",
                                    textAlign: "left",
                                    color: "#112A46"
                                },
                                children: "  Contact Us"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                                style: {
                                    backgroundColor: "#112A46",
                                    color: "#112A46",
                                    border: "#112A46",
                                    borderRadius: "5px",
                                    borderTop: "0.25rem solid #112A46",
                                    width: "40%"
                                }
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                    style: {
                        margin: "2rem"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                            md: 6,
                            style: {
                                color: "#091133"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                    sx: {
                                        fontFamily: "Montserrat",
                                        textAlign: "left",
                                        color: "#091133",
                                        fontSize: {
                                            lg: "1.2rem",
                                            md: "1.2rem",
                                            sm: "1.25rem",
                                            xs: "1.25rem"
                                        }
                                    },
                                    style: {
                                        lineHeight: "1.313rem",
                                        textAlign: "left",
                                        fontWeight: "400",
                                        marginBottom: "3rem"
                                    },
                                    children: [
                                        "  ",
                                        contactUs.points[0]
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                    sx: {
                                        fontFamily: "Montserrat",
                                        textAlign: "left",
                                        color: "#091133",
                                        fontSize: {
                                            lg: "1.2rem",
                                            md: "1.2rem",
                                            sm: "1.25rem",
                                            xs: "1.25rem"
                                        }
                                    },
                                    style: {
                                        lineHeight: "1.313rem",
                                        textAlign: "left",
                                        fontWeight: "400",
                                        marginBottom: "3rem"
                                    },
                                    children: [
                                        "  ",
                                        contactUs.points[1]
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                    sx: {
                                        fontFamily: "Montserrat",
                                        textAlign: "left",
                                        color: "#091133",
                                        fontSize: {
                                            lg: "1.2rem",
                                            md: "1.2rem",
                                            sm: "1.25rem",
                                            xs: "1.25rem"
                                        }
                                    },
                                    style: {
                                        lineHeight: "1.5rem",
                                        textAlign: "left",
                                        fontWeight: "600",
                                        marginBottom: "3rem"
                                    },
                                    children: [
                                        "  ",
                                        contactUs.points[2]
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                    sx: {
                                        fontFamily: "Montserrat",
                                        textAlign: "left",
                                        color: "#091133",
                                        fontSize: {
                                            lg: "1.2rem",
                                            md: "1.2rem",
                                            sm: "1.25rem",
                                            xs: "1.25rem"
                                        }
                                    },
                                    style: {
                                        lineHeight: "1.5rem",
                                        textAlign: "left",
                                        fontWeight: "600",
                                        marginBottom: "3rem"
                                    },
                                    children: [
                                        "  ",
                                        contactUs.points[3]
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                            md: 6,
                            style: {
                                color: "#091133"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                                    style: {
                                        marginBottom: "2rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                            md: 3,
                                            sm: 3,
                                            style: {
                                                textAlign: "center"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/img/resized_imgs/contact-us-office.png",
                                                alt: "...",
                                                style: {
                                                    width: "2.25rem",
                                                    height: "2.25rem",
                                                    textAlign: "center",
                                                    justifyContent: "center"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                                            md: 9,
                                            sm: 9,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                        sx: {
                                                            textAlign: {
                                                                lg: "left",
                                                                md: "left",
                                                                sm: "left",
                                                                xs: "center"
                                                            },
                                                            fontSize: {
                                                                lg: "1.25rem",
                                                                md: "1.25rem",
                                                                sm: "1.25rem",
                                                                xs: "1rem"
                                                            }
                                                        },
                                                        style: {
                                                            fontFamily: "Montserrat",
                                                            lineHeight: "1.5rem",
                                                            fontWeight: "600",
                                                            color: "#091133"
                                                        },
                                                        children: [
                                                            "  ",
                                                            contactUs.address_lines[0]
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                        sx: {
                                                            textAlign: {
                                                                lg: "left",
                                                                md: "left",
                                                                sm: "left",
                                                                xs: "center"
                                                            },
                                                            fontSize: {
                                                                lg: "1.25rem",
                                                                md: "1.25rem",
                                                                sm: "1.25rem",
                                                                xs: "1rem"
                                                            }
                                                        },
                                                        style: {
                                                            fontFamily: "Montserrat",
                                                            lineHeight: "1.5rem",
                                                            fontWeight: "500",
                                                            color: "#091133"
                                                        },
                                                        children: [
                                                            "   ",
                                                            contactUs.address_lines[1]
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                        sx: {
                                                            textAlign: {
                                                                lg: "left",
                                                                md: "left",
                                                                sm: "left",
                                                                xs: "center"
                                                            },
                                                            fontSize: {
                                                                lg: "1.25rem",
                                                                md: "1.25rem",
                                                                sm: "1.25rem",
                                                                xs: "1rem"
                                                            }
                                                        },
                                                        style: {
                                                            fontFamily: "Montserrat",
                                                            lineHeight: "1.5rem",
                                                            fontWeight: "500",
                                                            color: "#091133"
                                                        },
                                                        children: [
                                                            "  ",
                                                            contactUs.address_lines[2]
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                        sx: {
                                                            textAlign: {
                                                                lg: "left",
                                                                md: "left",
                                                                sm: "left",
                                                                xs: "center"
                                                            },
                                                            fontSize: {
                                                                lg: "1.25rem",
                                                                md: "1.25rem",
                                                                sm: "1.25rem",
                                                                xs: "1rem"
                                                            }
                                                        },
                                                        style: {
                                                            fontFamily: "Montserrat",
                                                            lineHeight: "1.5rem",
                                                            fontWeight: "500",
                                                            color: "#091133"
                                                        },
                                                        children: [
                                                            "  ",
                                                            contactUs.address_lines[3]
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                                    style: {
                                        marginBottom: "2rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                            md: 3,
                                            sm: 3,
                                            style: {
                                                textAlign: "center",
                                                margin: "auto"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/img/resized_imgs/contact-us-email.png",
                                                alt: "...",
                                                style: {
                                                    width: "2.25rem",
                                                    height: "2.25rem",
                                                    textAlign: "center",
                                                    justifyContent: "center",
                                                    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                                            md: 9,
                                            sm: 9,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                        sx: {
                                                            textAlign: {
                                                                lg: "left",
                                                                md: "left",
                                                                sm: "left",
                                                                xs: "center"
                                                            },
                                                            fontSize: {
                                                                lg: "1.25rem",
                                                                md: "1.25rem",
                                                                sm: "1.25rem",
                                                                xs: "1rem"
                                                            }
                                                        },
                                                        style: {
                                                            fontFamily: "Montserrat",
                                                            lineHeight: "1.5rem",
                                                            fontWeight: "500",
                                                            color: "#091133"
                                                        },
                                                        children: [
                                                            "  ",
                                                            contactUs.email_ids[0]
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                        sx: {
                                                            textAlign: {
                                                                lg: "left",
                                                                md: "left",
                                                                sm: "left",
                                                                xs: "center"
                                                            },
                                                            fontSize: {
                                                                lg: "1.25rem",
                                                                md: "1.25rem",
                                                                sm: "1.25rem",
                                                                xs: "1rem"
                                                            }
                                                        },
                                                        style: {
                                                            fontFamily: "Montserrat",
                                                            lineHeight: "1.5rem",
                                                            fontWeight: "500",
                                                            color: "#091133"
                                                        },
                                                        children: [
                                                            " ",
                                                            contactUs.email_ids[1]
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                                    style: {
                                        marginBottom: "2rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                            md: 3,
                                            sm: 3,
                                            style: {
                                                textAlign: "center",
                                                margin: "auto"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/img/resized_imgs/contact-us-call.png",
                                                alt: "...",
                                                style: {
                                                    width: "2.25rem",
                                                    height: "2.25rem",
                                                    textAlign: "center",
                                                    justifyContent: "center",
                                                    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                            md: 9,
                                            sm: 9,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                    sx: {
                                                        textAlign: {
                                                            lg: "left",
                                                            md: "left",
                                                            sm: "left",
                                                            xs: "center"
                                                        },
                                                        fontSize: {
                                                            lg: "1.25rem",
                                                            md: "1.25rem",
                                                            sm: "1.25rem",
                                                            xs: "1rem"
                                                        }
                                                    },
                                                    style: {
                                                        fontFamily: "Montserrat",
                                                        lineHeight: "1.25rem",
                                                        fontWeight: "500",
                                                        color: "#091133",
                                                        padding: "1rem"
                                                    },
                                                    children: [
                                                        "   ",
                                                        contactUs.phone_no[0]
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                                    style: {
                                        marginBottom: "2rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                            md: 3,
                                            sm: 3,
                                            style: {
                                                textAlign: "center",
                                                margin: "auto"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/img/resized_imgs/contact-us-timing.png",
                                                alt: "...",
                                                style: {
                                                    width: "2.25rem",
                                                    height: "2.25rem",
                                                    textAlign: "center",
                                                    justifyContent: "center",
                                                    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                            md: 9,
                                            sm: 9,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                    sx: {
                                                        textAlign: {
                                                            lg: "left",
                                                            md: "left",
                                                            sm: "left",
                                                            xs: "center"
                                                        },
                                                        fontSize: {
                                                            lg: "1.25rem",
                                                            md: "1.25rem",
                                                            sm: "1.25rem",
                                                            xs: "1rem"
                                                        }
                                                    },
                                                    style: {
                                                        fontFamily: "Montserrat",
                                                        lineHeight: "1.25rem",
                                                        fontWeight: "500",
                                                        color: "#091133",
                                                        padding: "1rem"
                                                    },
                                                    children: [
                                                        "  ",
                                                        contactUs.working_hours
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: external "@mui/material/Icon"
var Icon_ = __webpack_require__(3843);
;// CONCATENATED MODULE: external "@mui/icons-material/AdminPanelSettings"
const AdminPanelSettings_namespaceObject = require("@mui/icons-material/AdminPanelSettings");
var AdminPanelSettings_default = /*#__PURE__*/__webpack_require__.n(AdminPanelSettings_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Analytics"
const Analytics_namespaceObject = require("@mui/icons-material/Analytics");
var Analytics_default = /*#__PURE__*/__webpack_require__.n(Analytics_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/LocalShipping"
const LocalShipping_namespaceObject = require("@mui/icons-material/LocalShipping");
var LocalShipping_default = /*#__PURE__*/__webpack_require__.n(LocalShipping_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Tune"
const Tune_namespaceObject = require("@mui/icons-material/Tune");
var Tune_default = /*#__PURE__*/__webpack_require__.n(Tune_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/QueryBuilder"
const QueryBuilder_namespaceObject = require("@mui/icons-material/QueryBuilder");
var QueryBuilder_default = /*#__PURE__*/__webpack_require__.n(QueryBuilder_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/Dashboard"
var Dashboard_ = __webpack_require__(7235);
var Dashboard_default = /*#__PURE__*/__webpack_require__.n(Dashboard_);
// EXTERNAL MODULE: ./components/InfoArea/InfoArea.js + 1 modules
var InfoArea = __webpack_require__(5190);
// EXTERNAL MODULE: ./components/Badge/Badge.js + 1 modules
var Badge = __webpack_require__(8423);
// EXTERNAL MODULE: ./styles/jss/novel-logiks.js
var novel_logiks = __webpack_require__(6441);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/pages/sectionsSections/projectsStyle.js

const projectsSection = {
    container: novel_logiks/* container */.nC,
    mlAuto: novel_logiks/* mlAuto */.hU,
    mrAuto: novel_logiks/* mrAuto */.kq,
    title: novel_logiks/* title */.TN,
    description: novel_logiks/* description */.WL,
    coloredShadow: novel_logiks/* coloredShadow */.DF,
    cardTitle: novel_logiks/* cardTitle */.X5,
    textCenter: {
        textAlign: "center"
    },
    projects: {
        padding: "80px 0"
    },
    tabSpace: {
        padding: "20px 0 50px 0px"
    },
    cardCategory: {
        color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.7) !important",
        marginTop: "10px"
    },
    cardTitleWhite: {
        ...novel_logiks/* cardTitle */.X5,
        color: novel_logiks/* whiteColor */.zQ + "  !important",
        marginTop: "10px !important"
    },
    cardDescription: {
        color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.7) !important"
    },
    sectionSpace: {
        height: "70px",
        display: "block"
    },
    marginTop20: {
        marginTop: "20px"
    },
    card2: {
        textAlign: "center"
    },
    sectionDark: {
        ...novel_logiks/* sectionDark */.Yw,
        backgroundSize: "550% 450%",
        "& $title, & $cardTitle": {
            color: novel_logiks/* whiteColor */.zQ
        },
        "& $cardCategory": {
            color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.5) !important"
        },
        "& $cardDescription": {
            color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.76) !important"
        }
    },
    projects3: {
        "& $title": {
            marginBottom: "80px",
            marginTop: "5px"
        },
        "& h6": {
            marginBottom: "5px"
        }
    },
    card4: {
        marginTop: "0",
        marginBottom: "0",
        "& $cardTitle": {
            color: novel_logiks/* whiteColor */.zQ
        }
    },
    cardBody4: {
        paddingTop: "140px",
        paddingBottom: "140px"
    },
    info4: {
        padding: "0"
    },
    projects4: {
        "& hr": {
            margin: "70px auto",
            maxWidth: "970px"
        }
    }
};
/* harmony default export */ const projectsStyle = (projectsSection);

;// CONCATENATED MODULE: ./pages-sections/sections-page/SectionProjects.js
/* eslint-disable */ 



// @mui/icons-material







// core components







const SectionProjects_useStyles = makeStyles_default()(projectsStyle);
function SectionProjects({ ...rest }) {
    const classes = SectionProjects_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "cd-section",
        ...rest,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.projects + " " + classes.projects4,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridContainer/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                            xs: 12,
                            sm: 8,
                            md: 8,
                            className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: classes.title,
                                    children: "Some of Our Awesome E-Commerce Products"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: classes.description,
                                    children: "We understood Who’s target buyer?what they need and What are their pain points? and we came up with a solution."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.sectionSpace
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                xs: 12,
                                sm: 5,
                                md: 5,
                                className: classes.mlAuto,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    background: true,
                                    className: classes.card4,
                                    style: {
                                        backgroundImage: "url('/img/tt_client.png')"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                        background: true,
                                        className: classes.cardBody4,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Badge/* default */.Z, {
                                                color: "rose",
                                                children: "Client: Vishudha Tagline Traders"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#pablo",
                                                onClick: (e)=>e.preventDefault,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: classes.cardTitle,
                                                        children: "Tagline E-Commerce Client"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: classes.cardDescription,
                                                        children: "E-Commerce Client App to facilitate procuring Vishudha Groceries uin Domestic and Bulk."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                                xs: 12,
                                sm: 5,
                                md: 5,
                                className: classes.mrAuto,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                        className: classes.info4,
                                        title: "E-Commerce Application",
                                        description: "We've created the design of the website using modern Technologies like Sketch. It was a very interesting collaboration.",
                                        icon: (ShoppingCartCheckout_default()),
                                        iconColor: "success"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                        className: classes.info4,
                                        title: "Saves Time",
                                        description: "I would save lot of time of the customer by just relaxing and ordering the Groceries needed to any where ",
                                        icon: (QueryBuilder_default()),
                                        iconColor: "primary"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                        className: classes.info4,
                                        title: "Free Shipping",
                                        description: "Deliver Goods on Time and handle the goods with Care",
                                        icon: (LocalShipping_default()),
                                        iconColor: "success"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                                xs: 12,
                                sm: 5,
                                md: 5,
                                className: classes.mlAuto,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                        className: classes.info4,
                                        title: "Admin Panel",
                                        description: "Admin Panel for accessing all the modules in Vishudha Ecommerce Business",
                                        icon: (AdminPanelSettings_default()),
                                        iconColor: "warning"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                        className: classes.info4,
                                        title: "Analytics Integrated",
                                        description: "Fully Integrated with Analytics to track the Sales",
                                        icon: (Analytics_default()),
                                        iconColor: "success"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                        className: classes.info4,
                                        title: "Intuitive Dashboard ",
                                        description: "Intuitive Dashboard based on the Roles",
                                        icon: (Dashboard_default()),
                                        iconColor: "info"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                        className: classes.info4,
                                        title: "Configure ",
                                        description: "Can Configure all the Categories, Sub categories, Products, Prices, Discounts and Taxes details",
                                        icon: (Tune_default()),
                                        iconColor: "info"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                xs: 12,
                                sm: 5,
                                md: 5,
                                className: classes.mrAuto,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    background: true,
                                    className: classes.card4,
                                    style: {
                                        backgroundImage: "url('/img/tt_admin.png')"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                        background: true,
                                        className: classes.cardBody4,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Badge/* default */.Z, {
                                                color: "rose",
                                                children: "CLIENT: Vishudha Tagline Traders"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#pablo",
                                                onClick: (e)=>e.preventDefault,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: classes.cardTitle,
                                                        children: "Tagline E-Commerce MIS"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: classes.cardDescription,
                                                        children: "Admin module to facilitate all the backend operations of Tagline Traders."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./styles/jss/novel-logiks/pages/sectionsSections/careersStyle.js

const careersSection = {
    container: novel_logiks/* container */.nC,
    title: novel_logiks/* title */.TN,
    mlAuto: novel_logiks/* mlAuto */.hU,
    mrAuto: novel_logiks/* mrAuto */.kq,
    cardTitle: novel_logiks/* cardTitle */.X5,
    coloredShadow: novel_logiks/* coloredShadow */.DF,
    description: novel_logiks/* description */.WL,
    descriptionWhite: {
        ...novel_logiks/* description */.WL
    },
    textCenter: {
        textAlign: "center"
    },
    team: {
        padding: "80px 0",
        "& h5$description,& h5$descriptionWhite": {
            marginBottom: "80px"
        }
    },
    section: {
        ...novel_logiks/* sectionDark */.Yw,
        ...novel_logiks/* section */.qi,
        position: "relative",
        "& $title": {
            color: novel_logiks/* whiteColor */.zQ
        },
        "& $descriptionWhite": {
            color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.76)"
        },
        "& $container": {
            zIndex: "2",
            position: "relative"
        },
        "&:after": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''",
            backgroundColor: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.7)"
        }
    },
    justifyContent: {
        WebkitBoxPack: "center !important",
        MsFlexPack: "center !important",
        justifyContent: "center !important"
    },
    cardCategory: {
        marginTop: "10px"
    },
    btn: {
        marginTop: "0 !important"
    },
    card3: {
        textAlign: "left"
    },
    card5: {
        textAlign: "left",
        "& $cardTitle": {
            color: novel_logiks/* whiteColor */.zQ
        },
        "& $description": {
            color: novel_logiks/* whiteColor */.zQ
        }
    }
};
/* harmony default export */ const careersStyle = (careersSection);

// EXTERNAL MODULE: ./data/careers-data.js
var careers_data = __webpack_require__(1042);
;// CONCATENATED MODULE: ./pages-sections/sections-page/SectionCareers.js









const SectionCareers_useStyles = makeStyles_default()(careersStyle);
function SectionCareers({ ...rest }) {
    const classes = SectionCareers_useStyles();
    const routeToCareerDetails = ()=>{
        router_default().push("/career-details");
    };
    const { careers  } = careers_data/* careersData */._;
    const { 0: positions , 1: setPositions  } = (0,external_react_.useState)(()=>[]);
    const { 0: locations , 1: setLocations  } = (0,external_react_.useState)(()=>[]);
    const { 0: employmentTypes , 1: setEmploymentTypes  } = (0,external_react_.useState)(()=>[]);
    const { 0: searchResults , 1: setSearchResults  } = (0,external_react_.useState)(()=>[]);
    const { 0: selectedPosition , 1: setSelectedPosition  } = (0,external_react_.useState)(()=>null);
    const { 0: selectedEmploymentType , 1: setSelectedEmploymentType  } = (0,external_react_.useState)(()=>null);
    const { 0: selectedLocation , 1: setSelectedLocation  } = (0,external_react_.useState)(()=>null);
    const { 0: enableSearch , 1: setEnableSearch  } = (0,external_react_.useState)(()=>true);
    let filteredCareers = [];
    (0,external_react_.useEffect)(()=>{
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
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                overflowY: "scroll",
                height: "600px",
                minHeight: "600px"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
                sx: {
                    borderRadius: "10px",
                    width: "90%",
                    textAlign: "left",
                    marginLeft: "auto",
                    marginRight: "auto"
                },
                children: searchResults && searchResults.length > 0 ? searchResults.map((ser)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                                style: {
                                    marginTop: "1rem"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 12,
                                        md: 12,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
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
                                    /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 12,
                                        md: 12,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
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
                                    /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 12,
                                        md: 12,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
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
                                    /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 12,
                                        md: 12,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
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
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
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
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " ",
                            ser.rolesResponsibilities.map((r, indx)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
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
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                                xs: 12,
                                sm: 12,
                                md: 12,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
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
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "  ",
                                    ser.skillSet.map((r, indx)=>{
                                        return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
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
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {})
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
        return /*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
            sx: {
                borderRadius: "10px",
                width: "90%",
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "2em",
                height: "5em"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
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
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "cd-section",
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                    style: {
                        marginBottom: "2rem"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                            md: 8,
                            style: {
                                color: "#112A46"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    style: {
                                        fontFamily: "Montserrat",
                                        fontSize: "2rem",
                                        lineHeight: "1.25rem",
                                        fontWeight: "600",
                                        textAlign: "left",
                                        color: "#112A46"
                                    },
                                    children: "  Careers"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                                    style: {
                                        background: "#5288E5",
                                        color: "#5288E5",
                                        border: "#5288E5",
                                        borderRadius: "5px",
                                        borderTop: "0.25rem solid #5288E5",
                                        width: "40%"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    sx: {
                                        fontFamily: "Montserrat",
                                        lineHeight: "1.25rem",
                                        fontWeight: "600",
                                        color: "#112A46",
                                        textAlign: {
                                            lg: "left",
                                            md: "left",
                                            sm: "left",
                                            xs: "left"
                                        },
                                        fontSize: {
                                            lg: "1.5rem",
                                            md: "1.5rem",
                                            sm: "1.5rem",
                                            xs: "1.25rem"
                                        },
                                        margin: "2rem"
                                    },
                                    children: careers_data/* careersData.points.0 */._.points[0]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    sx: {
                                        fontFamily: "Montserrat",
                                        lineHeight: "1.25rem",
                                        fontWeight: "500",
                                        color: "#112A46",
                                        textAlign: {
                                            lg: "left",
                                            md: "left",
                                            sm: "left",
                                            xs: "left"
                                        },
                                        fontSize: {
                                            lg: "1rem",
                                            md: "1rem",
                                            sm: "1rem",
                                            xs: "0.95rem"
                                        },
                                        margin: "2rem"
                                    },
                                    children: careers_data/* careersData.points.1 */._.points[1]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    sx: {
                                        fontFamily: "Montserrat",
                                        lineHeight: "1.25rem",
                                        fontWeight: "500",
                                        color: "#112A46",
                                        textAlign: {
                                            lg: "left",
                                            md: "center",
                                            sm: "center",
                                            xs: "center"
                                        },
                                        fontSize: {
                                            lg: "1rem",
                                            md: "1rem",
                                            sm: "1rem",
                                            xs: "0.95rem"
                                        },
                                        margin: "2rem"
                                    },
                                    children: careers_data/* careersData.points.2 */._.points[2]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                            md: 4,
                            style: {
                                color: "#112A46",
                                backgroundImage: "url('img/resized_imgs/bulb_careers_bg.png')",
                                backgroundSize: "cover"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                                style: {
                                    marginBottom: "1rem",
                                    gap: "2rem"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                        md: 12,
                                        sm: 12,
                                        style: {
                                            textAlign: "center",
                                            margin: "auto"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                        md: 12,
                                        sm: 12,
                                        style: {
                                            textAlign: "center",
                                            margin: "auto",
                                            background: "white"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Autocomplete, {
                                            disablePortal: true,
                                            size: "small",
                                            id: "combo-box-position",
                                            style: {
                                                textAlign: "left",
                                                color: "black",
                                                background: "#FEFDF3"
                                            },
                                            options: positions,
                                            value: selectedPosition,
                                            onChange: (event, value)=>{
                                                console.log("value : ", value);
                                                setSelectedPosition(value);
                                                setEnableSearch(()=>false);
                                            },
                                            renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                                    ...params,
                                                    label: "Positions",
                                                    style: {
                                                        textAlign: "left",
                                                        color: "black",
                                                        background: "#FEFDF3"
                                                    }
                                                })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                        md: 12,
                                        sm: 12,
                                        style: {
                                            textAlign: "center",
                                            margin: "auto",
                                            background: "white"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Autocomplete, {
                                            disablePortal: true,
                                            size: "small",
                                            id: "combo-box-location",
                                            options: locations,
                                            style: {
                                                textAlign: "left",
                                                color: "black",
                                                background: "#FEFDF3"
                                            },
                                            value: selectedLocation,
                                            onChange: (event, value)=>{
                                                console.log("Selected Location  : ", value);
                                                setSelectedLocation(value);
                                                setEnableSearch(()=>false);
                                                return;
                                            },
                                            renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                                    ...params,
                                                    label: "Location"
                                                })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                        md: 12,
                                        sm: 12,
                                        style: {
                                            textAlign: "center",
                                            margin: "auto",
                                            background: "white"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Autocomplete, {
                                            disablePortal: true,
                                            size: "small",
                                            id: "combo-box-employment-type",
                                            options: employmentTypes,
                                            style: {
                                                textAlign: "left",
                                                color: "black",
                                                background: "#FEFDF3"
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
                                            renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                                    ...params,
                                                    label: "Employment Type"
                                                })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                        md: 12,
                                        sm: 12,
                                        style: {
                                            textAlign: "center",
                                            margin: "auto",
                                            background: "white"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                            size: "medium",
                                            variant: "contained",
                                            type: "submit",
                                            justify: "center",
                                            style: {
                                                alignItems: "center",
                                                textAlign: "center",
                                                textTransform: "none",
                                                width: "21rem",
                                                fontFamily: "Montserrat",
                                                fontSize: "1.5rem",
                                                fontWeight: "600",
                                                lineHeight: "1.5rem",
                                                height: "3.9rem",
                                                color: "#112A46",
                                                borderRadius: "5px",
                                                backgroundColor: "#E5AF52",
                                                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"
                                            },
                                            disabled: enableSearch ? true : false,
                                            onClick: searchHandler,
                                            children: "Apply Now"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                    style: {
                        marginBottom: "2rem",
                        marginTop: "1rem"
                    },
                    children: [
                        searchResults && searchResults.length !== 0 && renderCareerResults(),
                        !searchResults && (selectedPosition !== null || selectedLocation !== null || selectedEmploymentType !== null) && renderNoDataFound()
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: external "@mui/icons-material/Subject"
var Subject_ = __webpack_require__(3684);
// EXTERNAL MODULE: ./components/Card/CardAvatar.js + 1 modules
var CardAvatar = __webpack_require__(7532);
// EXTERNAL MODULE: ./components/Typography/Muted.js
var Muted = __webpack_require__(3278);
// EXTERNAL MODULE: ./components/Typography/Info.js
var Info = __webpack_require__(7479);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/pages/sectionsSections/teamsStyle.js

const teamsSection = {
    container: novel_logiks/* container */.nC,
    title: novel_logiks/* title */.TN,
    mlAuto: novel_logiks/* mlAuto */.hU,
    mrAuto: novel_logiks/* mrAuto */.kq,
    cardTitle: novel_logiks/* cardTitle */.X5,
    coloredShadow: novel_logiks/* coloredShadow */.DF,
    description: novel_logiks/* description */.WL,
    descriptionWhite: {
        ...novel_logiks/* description */.WL
    },
    textCenter: {
        textAlign: "center"
    },
    team: {
        padding: "80px 0",
        "& h5$description,& h5$descriptionWhite": {
            marginBottom: "80px"
        }
    },
    section: {
        ...novel_logiks/* sectionDark */.Yw,
        ...novel_logiks/* section */.qi,
        position: "relative",
        "& $title": {
            color: novel_logiks/* whiteColor */.zQ
        },
        "& $descriptionWhite": {
            color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.76)"
        },
        "& $container": {
            zIndex: "2",
            position: "relative"
        },
        "&:after": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''",
            backgroundColor: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.7)"
        }
    },
    justifyContent: {
        WebkitBoxPack: "center !important",
        MsFlexPack: "center !important",
        justifyContent: "center !important"
    },
    cardCategory: {
        marginTop: "10px"
    },
    btn: {
        marginTop: "0 !important"
    },
    card3: {
        textAlign: "left"
    },
    card5: {
        textAlign: "left",
        "& $cardTitle": {
            color: novel_logiks/* whiteColor */.zQ
        },
        "& $description": {
            color: novel_logiks/* whiteColor */.zQ
        }
    }
};
/* harmony default export */ const teamsStyle = ((/* unused pure expression or super */ null && (teamsSection)));

// EXTERNAL MODULE: ./styles/jss/novel-logiks/pages/componentsSections/sectionCards.js + 1 modules
var sectionCards = __webpack_require__(2045);
;// CONCATENATED MODULE: ./pages-sections/sections-page/SectionTeams.js
















const SectionTeams_useStyles = makeStyles_default()(sectionCards/* default */.Z);
// const useStyles = makeStyles(teamsStyle);
function SectionTeams({ ...rest }) {
    const classes = SectionTeams_useStyles();
    const [activeRotate1, setActiveRotate1] = external_react_default().useState("");
    const [activeRotate2, setActiveRotate2] = external_react_default().useState("");
    const [activeRotate3, setActiveRotate3] = external_react_default().useState("");
    external_react_default().useEffect(()=>{
        if (window) {
            window.addEventListener("resize", addStylesForRotatingCards);
        }
        addStylesForRotatingCards();
        return function cleanup() {
            if (window) {
                window.removeEventListener("resize", addStylesForRotatingCards);
            }
        };
    });
    const addStylesForRotatingCards = ()=>{
        var rotatingCards = document.getElementsByClassName(classes.cardRotate);
        for(let i = 0; i < rotatingCards.length; i++){
            var rotatingCard = rotatingCards[i];
            var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
            var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
            cardFront.style.height = "unset";
            cardFront.style.width = "unset";
            cardBack.style.height = "unset";
            cardBack.style.width = "unset";
            var rotatingWrapper = rotatingCard.parentElement;
            var cardWidth = rotatingCard.parentElement.offsetWidth;
            var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
            rotatingWrapper.style.height = cardHeight + "px";
            rotatingWrapper.style["margin-bottom"] = 30 + "px";
            cardFront.style.height = "unset";
            cardFront.style.width = "unset";
            cardBack.style.height = "unset";
            cardBack.style.width = "unset";
            cardFront.style.height = cardHeight + 35 + "px";
            cardFront.style.width = cardWidth + "px";
            cardBack.style.height = cardHeight + 35 + "px";
            cardBack.style.width = cardWidth + "px";
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "cd-section",
        ...rest,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.team,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                        style: {
                            marginBottom: "2rem"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                                md: 6,
                                style: {
                                    color: "#091133"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        style: {
                                            fontFamily: "Montserrat",
                                            fontSize: "2rem",
                                            lineHeight: "2rem",
                                            fontWeight: "600",
                                            textAlign: "left"
                                        },
                                        children: "  Meet the Team"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                                        style: {
                                            backgroundColor: "#E5AF52",
                                            color: "#E5AF52",
                                            border: "#E5AF52",
                                            borderRadius: "5px",
                                            borderTop: "0.25rem solid #E5AF52",
                                            width: "50%"
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                md: 6,
                                style: {
                                    color: "#091133"
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                lg: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.rotatingCardContainer,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        background: true,
                                        className: classes.cardRotate,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.front,
                                                style: {
                                                    backgroundColor: "#E5AF52"
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    background: true,
                                                    className: classes.cardBodyRotate,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            sx: {
                                                                color: "#091133",
                                                                fontSize: "1.5rem",
                                                                lineHeight: "1.5rem",
                                                                fontWeight: "600"
                                                            },
                                                            style: {
                                                                color: "#091133",
                                                                fontSize: "1.5rem",
                                                                lineHeight: "1.5rem",
                                                                fontWeight: "600"
                                                            },
                                                            children: "Sunil"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            sx: {
                                                                color: "#091133",
                                                                fontSize: "1rem",
                                                                lineHeight: "1rem",
                                                                fontWeight: "400",
                                                                textAlign: "center"
                                                            },
                                                            style: {
                                                                color: "#091133",
                                                                fontSize: "1rem",
                                                                lineHeight: "1rem",
                                                                fontWeight: "400",
                                                                textAlign: "center",
                                                                padding: "0px",
                                                                margin: "0px"
                                                            },
                                                            children: "CEO"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.back,
                                                style: {
                                                    backgroundColor: "#E5AF52",
                                                    fontFamily: "Montserrat",
                                                    fontSize: "0.85rem",
                                                    lineHeight: "0.85rem",
                                                    fontWeight: "400",
                                                    color: "#091133"
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    background: true,
                                                    className: classes.cardBodyRotate,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            sx: {
                                                                color: "#091133",
                                                                fontSize: "1.5rem",
                                                                lineHeight: "1.5rem",
                                                                fontWeight: "600"
                                                            },
                                                            style: {
                                                                color: "#091133",
                                                                fontSize: "1.5rem",
                                                                lineHeight: "1.5rem",
                                                                fontWeight: "600"
                                                            },
                                                            children: "Sunil"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            sx: {
                                                                color: "#091133",
                                                                fontSize: "1rem",
                                                                lineHeight: "1rem",
                                                                fontWeight: "400",
                                                                textAlign: "center"
                                                            },
                                                            style: {
                                                                color: "#091133",
                                                                fontSize: "1rem",
                                                                lineHeight: "1rem",
                                                                fontWeight: "400",
                                                                textAlign: "center",
                                                                padding: "0px",
                                                                margin: "0px"
                                                            },
                                                            children: "CEO"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            sx: {
                                                                color: "#091133",
                                                                fontSize: "0.85rem",
                                                                lineHeight: "1rem",
                                                                fontWeight: "400",
                                                                textAlign: "left"
                                                            },
                                                            style: {
                                                                color: "#091133",
                                                                fontSize: "0.85rem",
                                                                lineHeight: "1rem",
                                                                fontWeight: "400",
                                                                textAlign: "left"
                                                            },
                                                            children: "A Full Stack Developer is a professional who possesses the skills and expertise to work on both the front-end and back-end development of web applications. They are proficient in a variety of programming languages, frameworks, and technologies, enabling them to handle the complete development process. Expertise in Front-End Development, Back-End Development, Server Management and Deployment, Security Best Practices , Collaboration and Communication."
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                lg: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.rotatingCardContainer,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        background: true,
                                        className: classes.cardRotate,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.front,
                                                style: {
                                                    backgroundColor: "#E5AF52"
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    background: true,
                                                    className: classes.cardBodyRotate,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            sx: {
                                                                color: "#091133",
                                                                fontSize: "1.5rem",
                                                                lineHeight: "1.5rem",
                                                                fontWeight: "600"
                                                            },
                                                            style: {
                                                                color: "#091133",
                                                                fontSize: "1.5rem",
                                                                lineHeight: "1.5rem",
                                                                fontWeight: "600"
                                                            },
                                                            children: "Raju"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            sx: {
                                                                color: "#091133",
                                                                fontSize: "1rem",
                                                                lineHeight: "1rem",
                                                                fontWeight: "400",
                                                                textAlign: "center"
                                                            },
                                                            style: {
                                                                color: "#091133",
                                                                fontSize: "1rem",
                                                                lineHeight: "1rem",
                                                                fontWeight: "400",
                                                                textAlign: "center",
                                                                padding: "0px",
                                                                margin: "0px"
                                                            },
                                                            children: "Cloud Architect"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.back,
                                                style: {
                                                    backgroundColor: "#E5AF52",
                                                    fontFamily: "Montserrat",
                                                    fontSize: "0.85rem",
                                                    fontWeight: "400"
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    background: true,
                                                    className: classes.cardBodyRotate,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            sx: {
                                                                color: "#091133",
                                                                fontSize: "1.5rem",
                                                                lineHeight: "1.5rem",
                                                                fontWeight: "600"
                                                            },
                                                            style: {
                                                                color: "#091133",
                                                                fontSize: "1.5rem",
                                                                lineHeight: "1.5rem",
                                                                fontWeight: "600"
                                                            },
                                                            children: "Raju"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            sx: {
                                                                color: "#091133",
                                                                fontSize: "1rem",
                                                                lineHeight: "1rem",
                                                                fontWeight: "400",
                                                                textAlign: "center"
                                                            },
                                                            style: {
                                                                color: "#091133",
                                                                fontSize: "1rem",
                                                                lineHeight: "1.25rem",
                                                                fontWeight: "400",
                                                                textAlign: "center",
                                                                padding: "0px",
                                                                margin: "0px"
                                                            },
                                                            children: "Cloud Architect"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            sx: {
                                                                color: "#091133",
                                                                fontSize: "0.85rem",
                                                                lineHeight: "1.1rem",
                                                                fontWeight: "400",
                                                                textAlign: "left"
                                                            },
                                                            style: {
                                                                color: "#091133",
                                                                fontSize: "0.85rem",
                                                                lineHeight: "1.1rem",
                                                                fontWeight: "400",
                                                                textAlign: "left"
                                                            },
                                                            children: "Raju is a professional who is responsible for designing, implementing, and managing an organization's cloud computing architecture. This role involves making strategic decisions about the adoption and integration of cloud services to meet business requirements. Rajus's Key aspects include, Cloud Strategy and Planning, Architecture Design, Cloud Service Integration, Security and Compliance, Cost Optimization, Migration Planning, Performance Optimization , Disaster Recovery and Business Continuity and Collaboration with Stakeholders."
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ./styles/jss/novel-logiks/pages/sectionsPageStyle.js
var sectionsPageStyle = __webpack_require__(3874);
// EXTERNAL MODULE: ./components/Footer/Footer.js + 1 modules
var Footer = __webpack_require__(6568);
;// CONCATENATED MODULE: ./data/links-data.js
const linksData = [
    {
        href: "/sections#home",
        title: "Home"
    },
    {
        href: "/services",
        title: "Services"
    },
    {
        href: "/about",
        title: "About"
    },
    {
        href: "/team",
        title: "Team"
    },
    {
        href: "/careers",
        title: "Careers"
    }, 
];

;// CONCATENATED MODULE: ./pages/sections.js






















const sections_useStyles = makeStyles_default()(sectionsPageStyle/* default */.Z);
function SectionsPage() {
    external_react_default().useEffect(()=>{
        var href = window.location.href.substring(window.location.href.lastIndexOf("#") + 1);
        if (window.location.href.lastIndexOf("#") > 0) {
            document.getElementById(href).scrollIntoView();
        }
        window.addEventListener("scroll", updateView);
        updateView();
        return function cleanup() {
            window.removeEventListener("scroll", updateView);
        };
    });
    const updateView = ()=>{
        var contentSections = document.getElementsByClassName("cd-section");
        var navigationItems = document.getElementById("cd-vertical-nav").getElementsByTagName("a");
        for(let i = 0; i < contentSections.length; i++){
            var activeSection = parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
            if (contentSections[i].offsetTop - window.innerHeight / 2 < window.pageYOffset && contentSections[i].offsetTop + contentSections[i].scrollHeight - window.innerHeight / 2 > window.pageYOffset) {
                navigationItems[activeSection].classList.add("is-selected");
            } else {
                navigationItems[activeSection].classList.remove("is-selected");
            }
        }
    };
    const easeInOutQuad = (t, b, c, d)=>{
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
    const smoothScroll = (target)=>{
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
    };
    const scrollGo = (element, to, duration)=>{
        var start = element.scrollTop, change = to - start, currentTime = 0, increment = 20;
        var animateScroll = function() {
            currentTime += increment;
            var val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    };
    const showAllServices = ()=>{
        console.log("Routing to /service-details Page ");
        Router.push("/service-details");
    };
    const routeToContactUs = ()=>{
        console.log("Routing to /contactUs Page ");
        Router.push("/sections#contactUs");
    };
    const classes = sections_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                color: "info",
                brand: "",
                links: /*#__PURE__*/ jsx_runtime_.jsx(HeaderLinks/* default */.Z, {
                    dropdownHoverColor: "info"
                }),
                fixed: true
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.main,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionHeaders, {
                        id: "home"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionServices, {
                        id: "services"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionProjects, {
                        id: "projects"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionTeams, {
                        id: "teams"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionCareers, {
                        id: "careers"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionContactUs, {
                        id: "contactUs"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                id: "cd-vertical-nav",
                style: {
                    display: "none"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#home",
                                "data-number": "1",
                                className: "",
                                onClick: (e)=>{
                                    var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
                                    if (isMobile) {
                                    // if we are on mobile device the scroll into view will be managed by the browser
                                    } else {
                                        e.preventDefault();
                                        smoothScroll("home");
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Home"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#aboutus",
                                "data-number": "2",
                                className: "",
                                onClick: (e)=>{
                                    var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
                                    if (isMobile) {
                                    // if we are on mobile device the scroll into view will be managed by the browser
                                    } else {
                                        e.preventDefault();
                                        smoothScroll("aboutus");
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "About"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#services",
                                "data-number": "3",
                                className: "",
                                onClick: (e)=>{
                                    var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
                                    if (isMobile) {
                                    // if we are on mobile device the scroll into view will be managed by the browser
                                    } else {
                                        e.preventDefault();
                                        smoothScroll("services");
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Services"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#projects",
                                "data-number": "4",
                                className: "",
                                onClick: (e)=>{
                                    var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
                                    if (isMobile) {
                                    // if we are on mobile device the scroll into view will be managed by the browser
                                    } else {
                                        e.preventDefault();
                                        smoothScroll("projects");
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Projects"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#teams",
                                "data-number": "5",
                                className: "",
                                onClick: (e)=>{
                                    var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
                                    if (isMobile) {
                                    // if we are on mobile device the scroll into view will be managed by the browser
                                    } else {
                                        e.preventDefault();
                                        smoothScroll("teams");
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Teams"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#offices",
                                "data-number": "6",
                                className: "",
                                onClick: (e)=>{
                                    var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
                                    if (isMobile) {
                                    // if we are on mobile device the scroll into view will be managed by the browser
                                    } else {
                                        e.preventDefault();
                                        smoothScroll("offices");
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Offices"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#careers",
                                "data-number": "7",
                                className: "",
                                onClick: (e)=>{
                                    var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
                                    if (isMobile) {
                                    // if we are on mobile device the scroll into view will be managed by the browser
                                    } else {
                                        e.preventDefault();
                                        smoothScroll("careers");
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Careers"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#contactUs",
                                "data-number": "7",
                                className: "",
                                onClick: (e)=>{
                                    var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
                                    if (isMobile) {
                                    // if we are on mobile device the scroll into view will be managed by the browser
                                    } else {
                                        e.preventDefault();
                                        smoothScroll("contactUs");
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Contact Us"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                className: classes.footer,
                content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.container,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                                style: {
                                    alignItems: "baseline"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                        md: 6,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            style: {
                                                fontFamily: "Montserrat",
                                                fontSize: "0.75rem",
                                                color: "#091133"
                                            },
                                            children: "\xa92023 Novel Logiks Technologies"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                                        md: 6,
                                        style: {
                                            color: "#112A46",
                                            verticalAlign: "baseline"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                // href=""
                                                target: "_blank",
                                                color: "twitter",
                                                justIcon: true,
                                                simple: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                // href=""
                                                target: "_blank",
                                                color: "instagram",
                                                justIcon: true,
                                                simple: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-instagram"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                // href=""
                                                justIcon: true,
                                                simple: true,
                                                color: "facebook",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook-square"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 7235:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Dashboard");

/***/ }),

/***/ 7372:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Favorite");

/***/ }),

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 3684:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Subject");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3882:
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

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

/***/ 3843:
/***/ ((module) => {

module.exports = require("@mui/material/Icon");

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

/***/ 1168:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 1431:
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9484:
/***/ ((module) => {

module.exports = require("@mui/styles");

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

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

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
var __webpack_exports__ = __webpack_require__.X(0, [952,270,664,441,999,39,866,568,765,482,82,684,696,645,951,828,83,724,707], () => (__webpack_exec__(5767)));
module.exports = __webpack_exports__;

})();