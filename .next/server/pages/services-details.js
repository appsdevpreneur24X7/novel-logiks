"use strict";
(() => {
var exports = {};
exports.id = 903;
exports.ids = [903];
exports.modules = {

/***/ 8871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ServicesDetails)
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
// EXTERNAL MODULE: ./styles/jss/novel-logiks/pages/sectionsSections/featuresStyle.js
var featuresStyle = __webpack_require__(7684);
;// CONCATENATED MODULE: ./pages-sections/components/SectionServicesRight.js







const useStyles = makeStyles_default()(featuresStyle/* default */.Z);
function SectionServicesRight({ ...rest }) {
    const classes = useStyles();
    const { data  } = rest;
    console.log("data : ", data);
    const { serviceTitle , serviceImageUrl , servicePoints  } = data;
    return(// <div className="cd-section" {...rest}>
    /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.container,
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
            style: {
                borderRadius: "5px"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                    xs: 12,
                    sm: 8,
                    md: 8,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            style: {
                                fontFamily: "Montserrat",
                                fontSize: "1rem",
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
                                width: "50%",
                                marginBottom: "1.5rem"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            component: "div",
                            style: {
                                textAlign: "left"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: servicePoints.map((each, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            style: {
                                                color: "#091133"
                                            },
                                            children: each
                                        })
                                    }, idx))
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                    xs: 12,
                    sm: 4,
                    md: 4,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.phoneContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: serviceImageUrl,
                            alt: "...",
                            style: {
                                marginTop: "30px",
                                marginBottom: "30px",
                                width: "15rem",
                                height: "20rem",
                                minWidth: "15rem",
                                borderRadius: "5px",
                                objectFit: "cover",
                                boxShadow: "0 5px 20px 0px rgba(0, 0, 0, 0.2), 0 13px 24px -11px rgba(156, 39, 176, 0.6)"
                            }
                        })
                    })
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./pages-sections/components/SectionServicesLeft.js







const SectionServicesLeft_useStyles = makeStyles_default()(featuresStyle/* default */.Z);
function SectionServicesLeft({ ...rest }) {
    const classes = SectionServicesLeft_useStyles();
    const { data  } = rest;
    console.log("data : ", data);
    const { serviceTitle , serviceImageUrl , servicePoints  } = data;
    return(// <div className="cd-section" {...rest}>
    /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.container,
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
            style: {
                borderRadius: "5px"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                    xs: 12,
                    sm: 4,
                    md: 4,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.phoneContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: serviceImageUrl,
                            alt: "...",
                            style: {
                                marginTop: "30px",
                                marginBottom: "30px",
                                width: "15rem",
                                height: "20rem",
                                minWidth: "15rem",
                                borderRadius: "5px",
                                objectFit: "cover",
                                boxShadow: "0 5px 20px 0px rgba(0, 0, 0, 0.2), 0 13px 24px -11px rgba(156, 39, 176, 0.6)"
                            }
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                    xs: 12,
                    sm: 8,
                    md: 8,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            style: {
                                fontFamily: "Montserrat",
                                fontSize: "1rem",
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
                                width: "50%",
                                marginBottom: "1.5rem"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            component: "div",
                            style: {
                                textAlign: "left",
                                marginBottom: "1rem"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: servicePoints.map((each, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            style: {
                                                color: "#091133"
                                            },
                                            children: each
                                        })
                                    }, idx))
                            })
                        })
                    ]
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./data/services-data.js
var services_data = __webpack_require__(9707);
;// CONCATENATED MODULE: ./pages/services-details.js














const services_details_useStyles = makeStyles_default()(headersStyle/* default */.Z);
const routeToAiDetails = ()=>{
    Router.push("/ai-details");
};
const routeToContactUs = ()=>{
    Router.push("/contact-us");
};
function ServicesDetails({ ...rest }) {
    const classes = services_details_useStyles();
    console.log("Loaded Services data : ", services_data/* services */.u ? services_data/* services.length */.u.length : 0);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Services   "
            }),
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
                style: {
                    marginTop: "5.5em",
                    backgroundColor: ""
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        style: {
                            marginBottom: ".25rem"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
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
                                        width: "50%",
                                        marginBottom: "1.5rem"
                                    }
                                })
                            ]
                        })
                    }),
                    services_data/* services */.u && services_data/* services.0 */.u[0] && /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        id: "0",
                        style: {
                            marginBottom: ".25rem"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SectionServicesLeft, {
                            data: services_data/* services.0 */.u[0]
                        })
                    }),
                    services_data/* services */.u && services_data/* services.1 */.u[1] && /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        id: "1",
                        style: {
                            marginBottom: ".25rem"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SectionServicesRight, {
                            data: services_data/* services.1 */.u[1]
                        })
                    }),
                    services_data/* services */.u && services_data/* services.2 */.u[2] && /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        id: "2",
                        style: {
                            marginBottom: ".25rem"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SectionServicesLeft, {
                            data: services_data/* services.2 */.u[2]
                        })
                    }),
                    services_data/* services */.u && services_data/* services.3 */.u[3] && /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        id: "3",
                        style: {
                            marginBottom: ".25rem"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SectionServicesRight, {
                            data: services_data/* services.3 */.u[3]
                        })
                    }),
                    services_data/* services */.u && services_data/* services.4 */.u[4] && /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        id: "4",
                        style: {
                            marginBottom: ".25rem"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SectionServicesLeft, {
                            data: services_data/* services.4 */.u[4]
                        })
                    }),
                    services_data/* services */.u && services_data/* services.5 */.u[5] && /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        id: "5",
                        style: {
                            marginBottom: ".25rem"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SectionServicesRight, {
                            data: services_data/* services.5 */.u[5]
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
var __webpack_exports__ = __webpack_require__.X(0, [952,270,664,441,999,39,866,684,707], () => (__webpack_exec__(8871)));
module.exports = __webpack_exports__;

})();