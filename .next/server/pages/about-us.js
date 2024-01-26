"use strict";
(() => {
var exports = {};
exports.id = 552;
exports.ids = [552];
exports.modules = {

/***/ 1683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AboutUs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8409);
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4041);
/* harmony import */ var _components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6680);
/* harmony import */ var _components_Header_Header_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4889);
/* harmony import */ var _components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6659);
/* harmony import */ var _styles_jss_novel_logiks_pages_sectionsSections_headersStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4866);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(571);
/* harmony import */ var _data_about_us_data_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5870);
/* harmony import */ var _pages_sections_sections_page_SectionAboutUsCard_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6724);













const useStyles = _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default()(_styles_jss_novel_logiks_pages_sectionsSections_headersStyle_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z);
const routeToAiDetails = ()=>{
    Router.push("/ai-details");
};
const routeToContactUs = ()=>{
    Router.push("/contact-us");
};
function AboutUs({ ...rest }) {
    const classes = useStyles();
    console.log("Loaded About Us data : ", _data_about_us_data_js__WEBPACK_IMPORTED_MODULE_11__/* .aboutUs */ .N ? _data_about_us_data_js__WEBPACK_IMPORTED_MODULE_11__/* .aboutUs.length */ .N.length : 0);
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "cd-section",
        ...rest,
        style: {
            background: "#5288E5"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            xs: 12,
                            sm: 4,
                            md: 4,
                            style: {
                                marginTop: "2rem"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_sections_sections_page_SectionAboutUsCard_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                index: 0
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            xs: 12,
                            sm: 4,
                            md: 4,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_sections_sections_page_SectionAboutUsCard_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                index: 1
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            xs: 12,
                            sm: 4,
                            md: 4,
                            style: {
                                marginTop: "2rem"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_sections_sections_page_SectionAboutUsCard_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                index: 2
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    style: {
                        marginBottom: "2rem",
                        textAlign: "center"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        xs: 12,
                        sm: 12,
                        md: 12,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
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
var __webpack_exports__ = __webpack_require__.X(0, [952,270,664,441,999,39,866,765,82,951,724], () => (__webpack_exec__(1683)));
module.exports = __webpack_exports__;

})();