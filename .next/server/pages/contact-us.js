"use strict";
(() => {
var exports = {};
exports.id = 455;
exports.ids = [455];
exports.modules = {

/***/ 1354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ContactUsPage)
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
var GridContainer = __webpack_require__(4041);
// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__(6680);
// EXTERNAL MODULE: ./styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js
var headersStyle = __webpack_require__(4866);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./components/Footer/Footer.js + 1 modules
var Footer = __webpack_require__(6568);
// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__(571);
// EXTERNAL MODULE: ./styles/jss/novel-logiks/pages/sectionsPageStyle.js
var sectionsPageStyle = __webpack_require__(3874);
// EXTERNAL MODULE: ./styles/jss/novel-logiks.js
var novel_logiks = __webpack_require__(6441);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/pages/contactUsStyle.js

const contactUsStyle = {
    main: novel_logiks/* main */.DH,
    mainRaised: novel_logiks/* mainRaised */._p,
    title: novel_logiks/* title */.TN,
    mlAuto: novel_logiks/* mlAuto */.hU,
    description: novel_logiks/* description */.WL,
    container: {
        ...novel_logiks/* container */.nC,
        maxWidth: "970px !important"
    },
    contactContent: {
        paddingBottom: "40px",
        paddingTop: "40px"
    },
    bigMap: {
        height: "55vh",
        maxHeight: "550px",
        width: "100%",
        display: "block"
    },
    info: {
        paddingBottom: "10px",
        paddingTop: 0
    },
    textCenter: {
        textAlign: "center !important"
    },
    block: {
        color: "inherit",
        padding: "0.9375rem",
        fontWeight: "500",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        textDecoration: "none",
        position: "relative",
        display: "block"
    },
    inlineBlock: {
        display: "inline-block",
        padding: "0px",
        width: "auto"
    },
    list: {
        marginBottom: "0",
        padding: "0",
        marginTop: "0"
    },
    left: {
        float: "left!important",
        display: "block"
    },
    right: {
        padding: "15px 0",
        margin: "0",
        float: "right"
    },
    icon: {
        width: "18px",
        height: "18px",
        top: "3px",
        position: "relative"
    }
};
/* harmony default export */ const pages_contactUsStyle = ((/* unused pure expression or super */ null && (contactUsStyle)));

;// CONCATENATED MODULE: ./pages/contact-us.js
/*eslint-disable*/ 











const useStyles = makeStyles_default()(headersStyle/* default */.Z);

function ContactUsPage() {
    const classes = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        style: {
            backgroundColor: "#FFFFFF"
        },
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
                style: {
                    marginTop: "5em",
                    backgroundColor: "#FFFFFF"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        style: {
                            marginBottom: ".25rem"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                            md: 12,
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
                                        backgroundColor: "#5288E5",
                                        color: "#5288E5",
                                        border: "#5288E5",
                                        borderRadius: "5px",
                                        borderTop: "0.25rem solid #5288E5",
                                        width: "25%"
                                    }
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                md: 6,
                                style: {
                                    color: "#112A46",
                                    marginTop: "5rem"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                    style: {
                                        fontWeight: "600",
                                        fontFamily: '"Montserrat"'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 12,
                                            md: 12,
                                            style: {
                                                textAlign: "left",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                marginTop: "5rem"
                                            },
                                            children: "What Does Your Business Need?"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 12,
                                            md: 12,
                                            style: {
                                                textAlign: "left",
                                                justifyContent: "center",
                                                alignItems: "center"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                style: {
                                                    fontWeight: "600",
                                                    fontFamily: '"Montserrat"'
                                                },
                                                children: "Learn how Novel Logiks Technologies can move your technology and business strategy forward. Please contact us with any inquiries or requests to help you grow your business."
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 12,
                                            md: 12,
                                            style: {
                                                textAlign: "left",
                                                justifyContent: "center",
                                                alignItems: "center"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                style: {
                                                    fontWeight: "500",
                                                    fontFamily: '"Montserrat"'
                                                },
                                                children: "Please contact us with any inquiries or requests to help you grow your business."
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 12,
                                            md: 12,
                                            style: {
                                                textAlign: "left",
                                                justifyContent: "center",
                                                alignItems: "center"
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                style: {
                                                    fontWeight: "500",
                                                    fontFamily: '"Montserrat"'
                                                },
                                                children: [
                                                    "(+91) 2244451109",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    "Mon - Fri, 8:00-22:00"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 12,
                                            md: 12,
                                            style: {
                                                textAlign: "left",
                                                justifyContent: "center",
                                                alignItems: "center"
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                style: {
                                                    fontWeight: "500",
                                                    fontFamily: '"Montserrat"'
                                                },
                                                children: [
                                                    "contact@novellogiks.com",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    "hr@novellogiks.com",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                md: 6,
                                style: {
                                    color: "#112A46",
                                    marginTop: "5rem"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        md: 12,
                                        style: {
                                            textAlign: "center",
                                            justifyContent: "center"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "img/resized_imgs/transparent-logo.png",
                                            alt: "ai pic",
                                            style: {
                                                width: "50%"
                                            }
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                        className: classes.footer,
                        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.left,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "",
                                            target: "_blank",
                                            color: "twitter",
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "",
                                            target: "_blank",
                                            color: "instagram",
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-instagram"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "",
                                            justIcon: true,
                                            simple: true,
                                            color: "facebook",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-facebook-square"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.right,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
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

/***/ 3874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6441);

const sectionsPageStyle = {
    main: {
        ..._styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .main */ .DH
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sectionsPageStyle);


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
var __webpack_exports__ = __webpack_require__.X(0, [952,270,664,441,999,39,866,568], () => (__webpack_exec__(1354)));
module.exports = __webpack_exports__;

})();