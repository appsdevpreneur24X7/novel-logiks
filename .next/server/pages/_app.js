"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/styles/makeStyles"
var makeStyles_ = __webpack_require__(8409);
var makeStyles_default = /*#__PURE__*/__webpack_require__.n(makeStyles_);
;// CONCATENATED MODULE: external "@mui/material/CircularProgress"
const CircularProgress_namespaceObject = require("@mui/material/CircularProgress");
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_namespaceObject);
// EXTERNAL MODULE: ./styles/jss/novel-logiks.js
var novel_logiks = __webpack_require__(6441);
;// CONCATENATED MODULE: ./components/PageChange/PageChange.js




// core components

const useStyles = makeStyles_default()({
    progress: {
        color: novel_logiks/* infoColor.0 */.bE[0],
        width: "6rem !important",
        height: "6rem !important"
    },
    wrapperDiv: {
        margin: "100px auto",
        padding: "0px",
        maxWidth: "360px",
        textAlign: "center",
        position: "relative",
        zIndex: "9999",
        top: "0"
    },
    iconWrapper: {
        display: "block"
    },
    title: {
        ...novel_logiks/* title */.TN,
        color: novel_logiks/* whiteColor */.zQ
    }
});
function PageChange(props) {
    const classes = useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.wrapperDiv,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.iconWrapper,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((CircularProgress_default()), {
                        className: classes.progress
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                    className: classes.title,
                    children: [
                        "Loading page contents for: ",
                        props.path
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./pages/_app.js
/*!

=========================================================
* NextJS Material Kit PRO v1.3.1 based on Material Kit PRO - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit PRO React v1.8.0
=========================================================

* Product Page: https://novellogiks.com/product/ct-novel-logiks
* Copyright 2022 Sunil (https://novellogiks.com)

* Coded by Sunil

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/ 










let theme = (0,styles_.createTheme)({
    components: {
        MuiSelect: {
            defaultProps: {
                variant: "standard"
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        color: "#fff !important"
                    }
                }
            }
        }
    }
});
theme = (0,styles_.createTheme)(theme, {
    MuiTypography: {
        h1: {
            fontSize: "2.5rem",
            [theme.breakpoints.down("sm")]: {
                fontSize: "1.5rem"
            }
        }
    }
});
router_default().events.on("routeChangeStart", (url)=>{
    console.log(`Loading: ${url}`);
    document.body.classList.add("body-page-transition");
    external_react_dom_default().render(/*#__PURE__*/ jsx_runtime_.jsx(PageChange, {
        path: url
    }), document.getElementById("page-transition"));
});
router_default().events.on("routeChangeComplete", ()=>{
    external_react_dom_default().unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});
router_default().events.on("routeChangeError", ()=>{
    external_react_dom_default().unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});
class MyApp extends app["default"] {
    componentDidMount() {
        let comment = document.createComment(`

=========================================================
* NextJS Material Kit PRO v1.3.1 based on Material Kit PRO - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit PRO React v1.8.0
=========================================================

* Product Page: https://novellogiks.com/product/novel-logiks
* Copyright 2022 Sunil (https://novellogiks.com)

* Coded by Sunil

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

`);
        document.insertBefore(comment, document.documentElement);
    }
    static async getInitialProps({ Component , router , ctx  }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await MyApp.getInitialProps(ctx);
        }
        return {
            pageProps
        };
    }
    render() {
        const { Component , pageProps  } = this.props;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "Novel Logiks | Digital Transformation"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(styles_.ThemeProvider, {
                    theme: theme,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(styles_.StyledEngineProvider, {
                        injectFirst: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    })
                })
            ]
        });
    }
};


/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 8409:
/***/ ((module) => {

module.exports = require("@mui/styles/makeStyles");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [270,544,441], () => (__webpack_exec__(8023)));
module.exports = __webpack_exports__;

})();