"use strict";
(() => {
var exports = {};
exports.id = 552;
exports.ids = [552];
exports.modules = {

/***/ 5555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AboutUs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/styles/makeStyles"
var makeStyles_ = __webpack_require__(8409);
var makeStyles_default = /*#__PURE__*/__webpack_require__.n(makeStyles_);
// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__(4041);
// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__(6680);
// EXTERNAL MODULE: ./components/Header/Header.js + 1 modules
var Header = __webpack_require__(4889);
// EXTERNAL MODULE: ./components/Header/HeaderLinks.js + 1 modules
var HeaderLinks = __webpack_require__(6659);
// EXTERNAL MODULE: ./styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js
var headersStyle = __webpack_require__(4866);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__(571);
;// CONCATENATED MODULE: ./data/about-us-data.js
const aboutUs = [
    {
        serviceTitle: "Vision",
        serviceImageUrl: "img/resized_imgs/vision.png",
        serviceOneLiner: "To inspire people and improve lives through technology delivered by us.",
        servicePoints: []
    },
    {
        serviceTitle: "Mission",
        serviceImageUrl: "img/resized_imgs/mission.png",
        serviceOneLiner: "To contribute to the overall wellbeing of the communities we operate our business.",
        servicePoints: []
    },
    {
        serviceTitle: "Values",
        serviceImageUrl: "img/resized_imgs/values.png",
        serviceOneLiner: null,
        servicePoints: [
            "Oneness",
            "Integrity",
            "Humour",
            "Trust",
            "Thrive",
            "Strive", 
        ]
    }, 
];

// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
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
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1168);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
;// CONCATENATED MODULE: ./pages-sections/sections-page/SectionAboutUsCard.js











// import { Grid } from "@mui/material";






const useStyles = (0,styles_.makeStyles)(headersStyle/* default */.Z);
const SectionAboutUsCard = (props)=>{
    const classes = useStyles();
    console.log(props);
    const { index  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
        blog: true,
        style: {
            backgroundColor: "#FFF",
            borderRadius: "1rem",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            minHeight: "15rem",
            minWidth: "15.5rem"
        },
        sx: {
            height: {
                xs: "15rem",
                sm: "15rem",
                md: "18rem",
                lg: "21rem"
            },
            width: {
                xs: "15.5rem",
                sm: "15.5rem",
                md: "18.5rem",
                lg: "21.5rem"
            }
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                    style: {
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: aboutUs[index].serviceImageUrl,
                        alt: aboutUs[index].serviceImageUrl,
                        style: {
                            width: "4.375rem",
                            height: "4.375rem",
                            textAlign: "center",
                            justifyContent: "center"
                        }
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                    className: classes.cardCategory,
                    style: {
                        fontFamily: "Montserrat",
                        fontSize: "1.5rem",
                        lineHeight: "1.5rem",
                        fontWeight: "600",
                        textAlign: "center",
                        color: "#112A46"
                    },
                    children: aboutUs[index].serviceTitle
                }),
                aboutUs[index].serviceOneLiner && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    container: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        style: {
                            lineHeight: "1.313rem",
                            color: "#112A46",
                            fontWeight: "600"
                        },
                        children: aboutUs[index].serviceOneLiner
                    })
                }),
                aboutUs[index].servicePoints && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    container: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            container: true,
                            children: aboutUs[index].servicePoints.map((e, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 6,
                                    style: {
                                        textAlign: "center",
                                        color: "#112A46",
                                        lineHeight: "1.313rem",
                                        fontWeight: "600"
                                    },
                                    children: e
                                }, index))
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const sections_page_SectionAboutUsCard = (SectionAboutUsCard);

;// CONCATENATED MODULE: ./pages/about-us.js













const about_us_useStyles = makeStyles_default()(headersStyle/* default */.Z);
const routeToAiDetails = ()=>{
    Router.push("/ai-details");
};
const routeToContactUs = ()=>{
    Router.push("/contact-us");
};
function AboutUs({ ...rest }) {
    const classes = about_us_useStyles();
    console.log("Loaded About Us data : ", aboutUs ? aboutUs.length : 0);
    /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "cd-section",
        ...rest,
        style: {
            background: "#5288E5"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 4,
                            md: 4,
                            style: {
                                marginTop: "2rem"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(sections_page_SectionAboutUsCard, {
                                index: 0
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 4,
                            md: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(sections_page_SectionAboutUsCard, {
                                index: 1
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 4,
                            md: 4,
                            style: {
                                marginTop: "2rem"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(sections_page_SectionAboutUsCard, {
                                index: 2
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                    style: {
                        marginBottom: "2rem",
                        textAlign: "center"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
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
                                    color: "#FFF",
                                    background: "#5288E5",
                                    textAlign: "left",
                                    margin: "1em",
                                    fontSize: "1.5rem",
                                    boxShadow: "none",
                                    borderRadius: "0px"
                                },
                                onClick: ()=>{},
                                children: "More About Us"
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
                                    color: "#FFF",
                                    textTransform: "none",
                                    fontFamily: "Montserrat",
                                    fontSize: "1.5rem",
                                    borderColor: "black",
                                    border: "2px solid",
                                    background: "#5288E5",
                                    textAlign: "right",
                                    boxShadow: "none",
                                    borderRadius: "0px",
                                    fontWeight: "600"
                                },
                                onClick: ()=>{},
                                children: "Meet Our Team"
                            })
                        ]
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

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

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

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
var __webpack_exports__ = __webpack_require__.X(0, [952,270,664,441,999,39,866,765,82,951], () => (__webpack_exec__(5555)));
module.exports = __webpack_exports__;

})();