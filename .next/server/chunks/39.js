"use strict";
exports.id = 39;
exports.ids = [39];
exports.modules = {

/***/ 571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@mui/styles/makeStyles"
var makeStyles_ = __webpack_require__(8409);
var makeStyles_default = /*#__PURE__*/__webpack_require__.n(makeStyles_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: ./styles/jss/novel-logiks.js
var novel_logiks = __webpack_require__(6441);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/components/buttonStyle.js

const buttonStyle = {
    button: {
        minHeight: "auto",
        minWidth: "auto",
        backgroundColor: novel_logiks/* grayColor.0 */.X_[0],
        color: novel_logiks/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* grayColor.0 */.X_[0]) + ", 0.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* grayColor.0 */.X_[0]) + ", 0.2), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* grayColor.0 */.X_[0]) + ", 0.12)",
        border: "none",
        borderRadius: "3px",
        position: "relative",
        padding: "12px 30px",
        margin: ".3125rem 1px",
        fontSize: "12px",
        fontWeight: "400",
        textTransform: "uppercase",
        letterSpacing: "0",
        willChange: "box-shadow, transform",
        transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        lineHeight: "1.42857143",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        touchAction: "manipulation",
        cursor: "pointer",
        "&:hover,&:focus": {
            color: novel_logiks/* whiteColor */.zQ,
            backgroundColor: novel_logiks/* grayColor.0 */.X_[0],
            boxShadow: "0 14px 26px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* grayColor.0 */.X_[0]) + ", 0.42), 0 4px 23px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* grayColor.0 */.X_[0]) + ", 0.2)"
        },
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            position: "relative",
            display: "inline-block",
            top: "0",
            marginTop: "-1em",
            marginBottom: "-1em",
            fontSize: "1.1rem",
            marginRight: "4px",
            verticalAlign: "middle"
        },
        "& svg": {
            position: "relative",
            display: "inline-block",
            top: "0",
            width: "18px",
            height: "18px",
            marginRight: "4px",
            verticalAlign: "middle"
        },
        "&$justIcon": {
            "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                marginTop: "0px",
                marginRight: "0px",
                position: "absolute",
                width: "100%",
                transform: "none",
                left: "0px",
                top: "0px",
                height: "100%",
                lineHeight: "41px",
                fontSize: "20px"
            }
        }
    },
    fullWidth: {
        width: "100%"
    },
    primary: {
        backgroundColor: novel_logiks/* primaryColor.0 */.lr[0],
        boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* primaryColor.0 */.lr[0]) + ", 0.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* primaryColor.0 */.lr[0]) + ", 0.2), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* primaryColor.0 */.lr[0]) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: novel_logiks/* primaryColor.0 */.lr[0],
            boxShadow: "0 14px 26px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* primaryColor.0 */.lr[0]) + ", 0.42), 0 4px 23px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* primaryColor.0 */.lr[0]) + ", 0.2)"
        }
    },
    secondary: {
        color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ",.87)",
        backgroundColor: novel_logiks/* secondaryColor.0 */.dY[0],
        boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* secondaryColor.0 */.dY[0]) + ",.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* secondaryColor.0 */.dY[0]) + ",.2), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* secondaryColor.0 */.dY[0]) + ",.12)",
        "&:hover,&:focus": {
            boxShdow: "0 14px 26px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* secondaryColor.0 */.dY[0]) + ",.42), 0 4px 23px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ",.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* secondaryColor.0 */.dY[0]) + ",.2)",
            color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ",.87)",
            backgroundColor: novel_logiks/* grayColor.19 */.X_[19]
        }
    },
    info: {
        backgroundColor: novel_logiks/* infoColor.0 */.bE[0],
        boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* infoColor.0 */.bE[0]) + ", 0.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* infoColor.0 */.bE[0]) + ", 0.2), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* infoColor.0 */.bE[0]) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: novel_logiks/* infoColor.0 */.bE[0],
            boxShadow: "0 14px 26px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* infoColor.0 */.bE[0]) + ", 0.42), 0 4px 23px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* infoColor.0 */.bE[0]) + ", 0.2)"
        }
    },
    success: {
        backgroundColor: novel_logiks/* successColor.0 */.nq[0],
        boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* successColor.0 */.nq[0]) + ", 0.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* successColor.0 */.nq[0]) + ", 0.2), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* successColor.0 */.nq[0]) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: novel_logiks/* successColor.0 */.nq[0],
            boxShadow: "0 14px 26px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* successColor.0 */.nq[0]) + ", 0.42), 0 4px 23px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* successColor.0 */.nq[0]) + ", 0.2)"
        }
    },
    warning: {
        backgroundColor: novel_logiks/* warningColor.0 */.MA[0],
        boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* warningColor.0 */.MA[0]) + ", 0.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* warningColor.0 */.MA[0]) + ", 0.2), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* warningColor.0 */.MA[0]) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: novel_logiks/* warningColor.0 */.MA[0],
            boxShadow: "0 14px 26px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* warningColor.0 */.MA[0]) + ", 0.42), 0 4px 23px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* warningColor.0 */.MA[0]) + ", 0.2)"
        }
    },
    danger: {
        backgroundColor: novel_logiks/* dangerColor.0 */.E7[0],
        boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* dangerColor.0 */.E7[0]) + ", 0.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* dangerColor.0 */.E7[0]) + ", 0.2), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* dangerColor.0 */.E7[0]) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: novel_logiks/* dangerColor.0 */.E7[0],
            boxShadow: "0 14px 26px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* dangerColor.0 */.E7[0]) + ", 0.42), 0 4px 23px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* dangerColor.0 */.E7[0]) + ", 0.2)"
        }
    },
    rose: {
        backgroundColor: novel_logiks/* roseColor.0 */.An[0],
        boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* roseColor.0 */.An[0]) + ", 0.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* roseColor.0 */.An[0]) + ", 0.2), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* roseColor.0 */.An[0]) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: novel_logiks/* roseColor.0 */.An[0],
            boxShadow: "0 14px 26px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* roseColor.0 */.An[0]) + ", 0.42), 0 4px 23px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* roseColor.0 */.An[0]) + ", 0.2)"
        }
    },
    white: {
        "&,&:focus,&:hover": {
            backgroundColor: novel_logiks/* whiteColor */.zQ,
            color: novel_logiks/* grayColor.0 */.X_[0]
        }
    },
    twitter: {
        backgroundColor: novel_logiks/* twitterColor */.QR,
        color: novel_logiks/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* twitterColor */.QR) + ", 0.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* twitterColor */.QR) + ", 0.2), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* twitterColor */.QR) + ", 0.12)",
        "&:hover,&:focus,&:visited": {
            backgroundColor: novel_logiks/* twitterColor */.QR,
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* twitterColor */.QR) + ", 0.42), 0 4px 23px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* twitterColor */.QR) + ", 0.2)"
        }
    },
    facebook: {
        backgroundColor: novel_logiks/* facebookColor */.Q0,
        color: novel_logiks/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* facebookColor */.Q0) + ", 0.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* facebookColor */.Q0) + ", 0.2), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* facebookColor */.Q0) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: novel_logiks/* facebookColor */.Q0,
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* facebookColor */.Q0) + ", 0.42), 0 4px 23px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* facebookColor */.Q0) + ", 0.2)"
        }
    },
    google: {
        backgroundColor: novel_logiks/* googleColor */.o7,
        color: novel_logiks/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* googleColor */.o7) + ", 0.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* googleColor */.o7) + ", 0.2), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* googleColor */.o7) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: novel_logiks/* googleColor */.o7,
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* googleColor */.o7) + ", 0.42), 0 4px 23px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* googleColor */.o7) + ", 0.2)"
        }
    },
    linkedin: {
        backgroundColor: novel_logiks/* linkedinColor */.JL,
        color: novel_logiks/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* linkedinColor */.JL) + ", 0.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* linkedinColor */.JL) + ", 0.2), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* linkedinColor */.JL) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: novel_logiks/* linkedinColor */.JL,
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* linkedinColor */.JL) + ", 0.42), 0 4px 23px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* linkedinColor */.JL) + ", 0.2)"
        }
    },
    pinterest: {
        backgroundColor: novel_logiks/* pinterestColor */.$7,
        color: novel_logiks/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* pinterestColor */.$7) + ", 0.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* pinterestColor */.$7) + ", 0.2), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* pinterestColor */.$7) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: novel_logiks/* pinterestColor */.$7,
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* pinterestColor */.$7) + ", 0.42), 0 4px 23px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* pinterestColor */.$7) + ", 0.2)"
        }
    },
    youtube: {
        backgroundColor: novel_logiks/* youtubeColor */.Hc,
        color: novel_logiks/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* youtubeColor */.Hc) + ", 0.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* youtubeColor */.Hc) + ", 0.2), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* youtubeColor */.Hc) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: novel_logiks/* youtubeColor */.Hc,
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* youtubeColor */.Hc) + ", 0.42), 0 4px 23px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* youtubeColor */.Hc) + ", 0.2)"
        }
    },
    tumblr: {
        backgroundColor: novel_logiks/* tumblrColor */.YW,
        color: novel_logiks/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* tumblrColor */.YW) + ", 0.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* tumblrColor */.YW) + ", 0.2), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* tumblrColor */.YW) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: novel_logiks/* tumblrColor */.YW,
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* tumblrColor */.YW) + ", 0.42), 0 4px 23px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* tumblrColor */.YW) + ", 0.2)"
        }
    },
    github: {
        backgroundColor: novel_logiks/* grayColor.8 */.X_[8],
        color: novel_logiks/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* grayColor.8 */.X_[8]) + ", 0.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* grayColor.8 */.X_[8]) + ", 0.2), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* grayColor.8 */.X_[8]) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: novel_logiks/* grayColor.8 */.X_[8],
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* grayColor.8 */.X_[8]) + ", 0.42), 0 4px 23px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* grayColor.8 */.X_[8]) + ", 0.2)"
        }
    },
    behance: {
        backgroundColor: novel_logiks/* behanceColor */.Zd,
        color: novel_logiks/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* behanceColor */.Zd) + ", 0.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* behanceColor */.Zd) + ", 0.2), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* behanceColor */.Zd) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: novel_logiks/* behanceColor */.Zd,
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* behanceColor */.Zd) + ", 0.42), 0 4px 23px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* behanceColor */.Zd) + ", 0.2)"
        }
    },
    dribbble: {
        backgroundColor: novel_logiks/* dribbbleColor */.Aj,
        color: novel_logiks/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* dribbbleColor */.Aj) + ", 0.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* dribbbleColor */.Aj) + ", 0.2), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* dribbbleColor */.Aj) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: novel_logiks/* dribbbleColor */.Aj,
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* dribbbleColor */.Aj) + ", 0.42), 0 4px 23px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* dribbbleColor */.Aj) + ", 0.2)"
        }
    },
    reddit: {
        backgroundColor: novel_logiks/* redditColor */.Oi,
        color: novel_logiks/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* redditColor */.Oi) + ", 0.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* redditColor */.Oi) + ", 0.2), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* redditColor */.Oi) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: novel_logiks/* redditColor */.Oi,
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* redditColor */.Oi) + ", 0.42), 0 4px 23px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* redditColor */.Oi) + ", 0.2)"
        }
    },
    instagram: {
        backgroundColor: novel_logiks/* instagramColor */.Un,
        color: novel_logiks/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* instagramColor */.Un) + ", 0.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* instagramColor */.Un) + ", 0.2), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* instagramColor */.Un) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: novel_logiks/* instagramColor */.Un,
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* instagramColor */.Un) + ", 0.42), 0 4px 23px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* instagramColor */.Un) + ", 0.2)"
        }
    },
    simple: {
        "&,&:focus,&:hover": {
            color: novel_logiks/* whiteColor */.zQ,
            background: "transparent",
            boxShadow: "none"
        },
        "&$primary": {
            "&,&:focus,&:hover,&:visited": {
                color: novel_logiks/* primaryColor.0 */.lr[0]
            }
        },
        "&$info": {
            "&,&:focus,&:hover,&:visited": {
                color: novel_logiks/* infoColor.0 */.bE[0]
            }
        },
        "&$success": {
            "&,&:focus,&:hover,&:visited": {
                color: novel_logiks/* successColor.0 */.nq[0]
            }
        },
        "&$warning": {
            "&,&:focus,&:hover,&:visited": {
                color: novel_logiks/* warningColor.0 */.MA[0]
            }
        },
        "&$rose": {
            "&,&:focus,&:hover,&:visited": {
                color: novel_logiks/* roseColor.0 */.An[0]
            }
        },
        "&$danger": {
            "&,&:focus,&:hover,&:visited": {
                color: novel_logiks/* dangerColor.0 */.E7[0]
            }
        },
        "&$twitter": {
            "&,&:focus,&:hover,&:visited": {
                color: novel_logiks/* twitterColor */.QR
            }
        },
        "&$facebook": {
            "&,&:focus,&:hover,&:visited": {
                color: novel_logiks/* facebookColor */.Q0
            }
        },
        "&$google": {
            "&,&:focus,&:hover,&:visited": {
                color: novel_logiks/* googleColor */.o7
            }
        },
        "&$linkedin": {
            "&,&:focus,&:hover,&:visited": {
                color: novel_logiks/* linkedinColor */.JL
            }
        },
        "&$pinterest": {
            "&,&:focus,&:hover,&:visited": {
                color: novel_logiks/* pinterestColor */.$7
            }
        },
        "&$youtube": {
            "&,&:focus,&:hover,&:visited": {
                color: novel_logiks/* youtubeColor */.Hc
            }
        },
        "&$tumblr": {
            "&,&:focus,&:hover,&:visited": {
                color: novel_logiks/* tumblrColor */.YW
            }
        },
        "&$github": {
            "&,&:focus,&:hover,&:visited": {
                color: novel_logiks/* grayColor.8 */.X_[8]
            }
        },
        "&$behance": {
            "&,&:focus,&:hover,&:visited": {
                color: novel_logiks/* behanceColor */.Zd
            }
        },
        "&$dribbble": {
            "&,&:focus,&:hover,&:visited": {
                color: novel_logiks/* dribbbleColor */.Aj
            }
        },
        "&$reddit": {
            "&,&:focus,&:hover,&:visited": {
                color: novel_logiks/* redditColor */.Oi
            }
        },
        "&$instagram": {
            "&,&:focus,&:hover,&:visited": {
                color: novel_logiks/* instagramColor */.Un
            }
        }
    },
    transparent: {
        "&,&:focus,&:hover": {
            color: "inherit",
            background: "transparent",
            boxShadow: "none"
        }
    },
    disabled: {
        opacity: "0.65",
        pointerEvents: "none"
    },
    lg: {
        "&$justIcon": {
            "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
                marginTop: "-4px"
            }
        },
        padding: "1.125rem 2.25rem",
        fontSize: "0.875rem",
        lineHeight: "1.333333",
        borderRadius: "0.2rem"
    },
    sm: {
        "&$justIcon": {
            "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
                marginTop: "1px"
            }
        },
        padding: "0.40625rem 1.25rem",
        fontSize: "0.6875rem",
        lineHeight: "1.5",
        borderRadius: "0.2rem"
    },
    round: {
        borderRadius: "30px"
    },
    block: {
        width: "100% !important"
    },
    link: {
        "&,&:hover,&:focus": {
            backgroundColor: "transparent",
            color: novel_logiks/* grayColor.0 */.X_[0],
            boxShadow: "none"
        }
    },
    justIcon: {
        paddingLeft: "12px",
        paddingRight: "12px",
        fontSize: "20px",
        height: "41px",
        minWidth: "41px",
        width: "41px",
        "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
            marginRight: "0px"
        },
        "&$lg": {
            height: "57px",
            minWidth: "57px",
            width: "57px",
            lineHeight: "56px",
            "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                fontSize: "32px",
                lineHeight: "56px"
            },
            "& svg": {
                width: "32px",
                height: "32px"
            }
        },
        "&$sm": {
            height: "30px",
            minWidth: "30px",
            width: "30px",
            "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                fontSize: "17px",
                lineHeight: "29px"
            },
            "& svg": {
                width: "17px",
                height: "17px"
            }
        }
    },
    fileButton: {
    }
};
/* harmony default export */ const components_buttonStyle = (buttonStyle);

;// CONCATENATED MODULE: ./components/CustomButtons/Button.js


// nodejs library that concatenates classes

// nodejs library to set properties for components




const useStyles = makeStyles_default()(components_buttonStyle);
const RegularButton = /*#__PURE__*/ external_react_default().forwardRef((props, ref)=>{
    const { color , round , children , fullWidth , disabled , simple , size , block , link , justIcon , fileButton , className , ...rest } = props;
    const classes = useStyles();
    const btnClasses = external_classnames_default()({
        [classes.button]: true,
        [classes[size]]: size,
        [classes[color]]: color,
        [classes.round]: round,
        [classes.fullWidth]: fullWidth,
        [classes.disabled]: disabled,
        [classes.simple]: simple,
        [classes.block]: block,
        [classes.link]: link,
        [classes.justIcon]: justIcon,
        [classes.fileButton]: fileButton,
        [className]: className
    });
    return /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
        ...rest,
        ref: ref,
        className: btnClasses,
        children: children
    });
});
RegularButton.propTypes = {
    color: external_prop_types_default().oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "danger",
        "rose",
        "white",
        "twitter",
        "facebook",
        "google",
        "linkedin",
        "pinterest",
        "youtube",
        "tumblr",
        "github",
        "behance",
        "dribbble",
        "reddit",
        "instagram",
        "transparent"
    ]),
    size: external_prop_types_default().oneOf([
        "sm",
        "lg"
    ]),
    simple: (external_prop_types_default()).bool,
    round: (external_prop_types_default()).bool,
    fullWidth: (external_prop_types_default()).bool,
    disabled: (external_prop_types_default()).bool,
    block: (external_prop_types_default()).bool,
    link: (external_prop_types_default()).bool,
    justIcon: (external_prop_types_default()).bool,
    fileButton: (external_prop_types_default()).bool,
    children: (external_prop_types_default()).node,
    className: (external_prop_types_default()).string
};
/* harmony default export */ const Button = (RegularButton);


/***/ }),

/***/ 4889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@mui/styles/makeStyles"
var makeStyles_ = __webpack_require__(8409);
var makeStyles_default = /*#__PURE__*/__webpack_require__.n(makeStyles_);
// EXTERNAL MODULE: external "@mui/material/AppBar"
var AppBar_ = __webpack_require__(3882);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);
// EXTERNAL MODULE: external "@mui/material/Toolbar"
var Toolbar_ = __webpack_require__(1431);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/Hidden"
var Hidden_ = __webpack_require__(9483);
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);
// EXTERNAL MODULE: external "@mui/material/Drawer"
var Drawer_ = __webpack_require__(7898);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(3365);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@mui/icons-material/Close"
var Close_ = __webpack_require__(4173);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
// EXTERNAL MODULE: ./styles/jss/novel-logiks.js
var novel_logiks = __webpack_require__(6441);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/components/headerStyle.js

const headerStyle = (theme)=>({
        appBar: {
            display: "flex",
            border: "0",
            borderRadius: "3px",
            padding: "0.625rem 0",
            marginBottom: "20px",
            color: novel_logiks/* grayColor.15 */.X_[15],
            width: "100%",
            backgroundColor: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 4px 18px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 7px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.15)",
            transition: "all 150ms ease 0s",
            alignItems: "right",
            flexFlow: "row nowrap",
            justifyContent: "flex-start",
            position: "relative"
        },
        absolute: {
            position: "absolute",
            top: "auto"
        },
        fixed: {
            position: "fixed"
        },
        container: {
            ...novel_logiks/* container */.nC,
            minHeight: "50px",
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
            flexWrap: "nowrap"
        },
        title: {
            letterSpacing: "unset",
            "&,& a": {
                ...novel_logiks/* defaultFont */.Df,
                minWidth: "unset",
                lineHeight: "30px",
                fontSize: "18px",
                borderRadius: "3px",
                textTransform: "none",
                whiteSpace: "nowrap",
                color: "inherit",
                "&:hover,&:focus": {
                    color: "inherit",
                    background: "transparent"
                }
            }
        },
        subtitle: {
            letterSpacing: "unset",
            "&,& a": {
                ...novel_logiks/* defaultFont */.Df,
                minWidth: "unset",
                lineHeight: "25px",
                fontSize: "15px",
                borderRadius: "3px",
                textTransform: "none",
                whiteSpace: "nowrap",
                color: "inherit",
                "&:hover,&:focus": {
                    color: "inherit",
                    background: "transparent"
                }
            }
        },
        appResponsive: {
            margin: "20px 10px",
            marginTop: "0px"
        },
        primary: {
            backgroundColor: novel_logiks/* primaryColor.0 */.lr[0],
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 4px 20px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.14), 0 7px 12px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* primaryColor.0 */.lr[0]) + ", 0.46)"
        },
        info: {
            backgroundColor: novel_logiks/* infoColor.0 */.bE[0],
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 4px 20px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.14), 0 7px 12px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* infoColor.0 */.bE[0]) + ", 0.46)"
        },
        success: {
            backgroundColor: novel_logiks/* successColor.0 */.nq[0],
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 4px 20px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.14), 0 7px 12px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* successColor.0 */.nq[0]) + ", 0.46)"
        },
        warning: {
            backgroundColor: novel_logiks/* warningColor.0 */.MA[0],
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 4px 20px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.14), 0 7px 12px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* warningColor.0 */.MA[0]) + ", 0.46)"
        },
        danger: {
            backgroundColor: novel_logiks/* dangerColor.0 */.E7[0],
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 4px 20px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.14), 0 7px 12px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* dangerColor.0 */.E7[0]) + ", 0.46)"
        },
        rose: {
            backgroundColor: novel_logiks/* roseColor.0 */.An[0],
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 4px 20px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.14), 0 7px 12px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* roseColor.0 */.An[0]) + ", 0.46)"
        },
        transparent: {
            backgroundColor: "transparent !important",
            boxShadow: "none",
            paddingTop: "25px",
            color: novel_logiks/* whiteColor */.zQ
        },
        dark: {
            color: novel_logiks/* whiteColor */.zQ,
            backgroundColor: novel_logiks/* grayColor.9 */.X_[9] + " !important",
            boxShadow: "0 4px 20px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.14), 0 7px 12px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* grayColor.9 */.X_[9]) + ", 0.46)"
        },
        white: {
            border: "0",
            padding: "0.625rem 0",
            marginBottom: "20px",
            color: novel_logiks/* grayColor.15 */.X_[15],
            backgroundColor: novel_logiks/* whiteColor */.zQ + " !important",
            boxShadow: "0 4px 18px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 7px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.15)"
        },
        drawerPaper: {
            border: "none",
            bottom: "0",
            transitionProperty: "top, bottom, width",
            transitionDuration: ".2s, .2s, .35s",
            transitionTimingFunction: "linear, linear, ease",
            width: novel_logiks/* drawerWidth */.RK,
            ...novel_logiks/* boxShadow */.Wn,
            position: "fixed",
            display: "block",
            top: "0",
            height: "100vh",
            right: "0",
            left: "auto",
            visibility: "visible",
            overflowY: "visible",
            borderTop: "none",
            textAlign: "left",
            paddingRight: "0px",
            paddingLeft: "0",
            ...novel_logiks/* transition */.eR
        },
        hidden: {
            width: "100%"
        },
        collapse: {
            [theme.breakpoints.up("md")]: {
                display: "flex !important",
                MsFlexPreferredSize: "auto",
                flexBasis: "auto"
            },
            WebkitBoxFlex: "1",
            MsFlexPositive: "1",
            flexGrow: "1",
            WebkitBoxAlign: "center",
            MsFlexAlign: "center",
            alignItems: "center"
        },
        closeButtonDrawer: {
            position: "absolute",
            right: "8px",
            top: "9px",
            zIndex: "1"
        }
    });
/* harmony default export */ const components_headerStyle = (headerStyle);

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/Header/Header.js



// nodejs library that concatenates classes

// nodejs library to set properties for components







// @mui/icons-material


// core components


// import Button from "/components/CustomButtons/Button.js";

const useStyles = makeStyles_default()(components_headerStyle);
function Header(props) {
    const [mobileOpen, setMobileOpen] = external_react_default().useState(false);
    const classes = useStyles();
    external_react_default().useEffect(()=>{
        if (props.changeColorOnScroll) {
            window.addEventListener("scroll", headerColorChange);
        }
        return function cleanup() {
            if (props.changeColorOnScroll) {
                window.removeEventListener("scroll", headerColorChange);
            }
        };
    });
    const routeToContactUs = ()=>{
        router_default().push("/sections#contactUs");
    };
    const handleDrawerToggle = ()=>{
        setMobileOpen(!mobileOpen);
    };
    const headerColorChange = ()=>{
        const { color , changeColorOnScroll  } = props;
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > changeColorOnScroll.height) {
            document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
            document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
        } else {
            document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
            document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
        }
    };
    const { color , links , brand , fixed , absolute  } = props;
    const appBarClasses = external_classnames_default()({
        [classes.appBar]: true,
        [classes[color]]: color,
        [classes.absolute]: absolute,
        [classes.fixed]: fixed
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((AppBar_default()), {
        className: appBarClasses,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                className: classes.container,
                style: {
                    marginLeft: "2rem",
                    marginRight: "auto"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Hidden_default()), {
                        mdDown: true,
                        implementation: "css",
                        className: classes.hidden,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.collapse,
                            children: links
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Hidden_default()), {
                        mdUp: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/img/resized_imgs/transparent-logo.png",
                            alt: "novellogiks",
                            style: {
                                width: "4rem",
                                height: "4rem",
                                marginRight: "1.5rem"
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Hidden_default()), {
                        mdUp: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/img/logo/nl-main-title.png",
                                alt: "novellogiks",
                                style: {
                                    marginRight: "1.5rem"
                                }
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Hidden_default()), {
                        mdUp: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            color: "black",
                            "aria-label": "open drawer",
                            onClick: handleDrawerToggle,
                            size: "large",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {})
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Hidden_default()), {
                mdUp: true,
                implementation: "js",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Drawer_default()), {
                    anchor: "top",
                    open: mobileOpen,
                    classes: {
                        paper: classes.drawerPaper
                    },
                    onClose: handleDrawerToggle,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            color: "inherit",
                            "aria-label": "open drawer",
                            onClick: handleDrawerToggle,
                            className: classes.closeButtonDrawer,
                            size: "large",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.appResponsive,
                            children: links
                        })
                    ]
                })
            })
        ]
    });
};
Header.defaultProp = {
    color: "white"
};
Header.propTypes = {
    color: external_prop_types_default().oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "transparent",
        "white",
        "rose",
        "dark"
    ]),
    links: (external_prop_types_default()).node,
    brand: (external_prop_types_default()).string,
    fixed: (external_prop_types_default()).bool,
    absolute: (external_prop_types_default()).bool,
    // this will cause the sidebar to change the color from
    // props.color (see above) to changeColorOnScroll.color
    // when the window.pageYOffset is heigher or equal to
    // changeColorOnScroll.height and then when it is smaller than
    // changeColorOnScroll.height change it back to
    // props.color (see above)
    changeColorOnScroll: external_prop_types_default().shape({
        height: (external_prop_types_default()).number.isRequired,
        color: external_prop_types_default().oneOf([
            "primary",
            "info",
            "success",
            "warning",
            "danger",
            "transparent",
            "white",
            "rose",
            "dark"
        ]).isRequired
    })
};


/***/ }),

/***/ 6659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ HeaderLinks)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./data/header-links-data.js
const headerLinksData = {
    links: [
        {
            href: "/sections#home",
            title: "Home",
            smoothScroll: "home"
        },
        {
            href: "/sections#about-us",
            title: "About Us",
            smoothScroll: "about-us"
        },
        {
            href: "/services-details",
            title: "Services",
            smoothScroll: "services"
        },
        {
            href: "/sections#products",
            title: "Products",
            smoothScroll: "products"
        },
        {
            href: "/sections#teams",
            title: "Team",
            smoothScroll: "teams"
        },
        {
            href: "/sections#careers",
            title: "Careers",
            smoothScroll: "careers"
        },
        {
            href: "/sections#contactUs",
            title: "Contact Us",
            smoothScroll: "conatctUs"
        }
    ]
};

// EXTERNAL MODULE: external "@mui/styles/makeStyles"
var makeStyles_ = __webpack_require__(8409);
var makeStyles_default = /*#__PURE__*/__webpack_require__.n(makeStyles_);
// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__(571);
// EXTERNAL MODULE: ./styles/jss/novel-logiks/components/headerLinksStyle.js
var headerLinksStyle = __webpack_require__(4111);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/Header/HeaderLinks.js
/* eslint-disable */ 

// nodejs library to set properties for components

// react components for routing our app without refresh



// @mui/icons-material




const useStyles = makeStyles_default()(headerLinksStyle/* default */.Z);
function HeaderLinks(props) {
    const easeInOutQuad = (t, b, c, d)=>{
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
    const smoothScroll = (e, target)=>{
        if (window.location.pathname === "/sections") {
            var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
            if (isMobile) {
            // if we are on mobile device the scroll into view will be managed by the browser
            } else {
                e.preventDefault();
                var targetScroll = document.getElementById(target);
                scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
            }
        }
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
    var onClickSections = {};
    const { dropdownHoverColor  } = props;
    const classes = useStyles();
    console.log(headerLinksData);
    const { links  } = headerLinksData;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/img/resized_imgs/transparent-logo.png",
                alt: "novellogiks",
                style: {
                    width: "4rem",
                    height: "4rem",
                    marginRight: "1.5rem"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/img/logo/nl-main-title.png",
                    alt: "Novel Logiks",
                    style: {
                        marginRight: "1.5rem"
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                style: {
                    marginLeft: "auto",
                    marginRight: "1.5rem"
                }
            }),
            links.map((each)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: each.href,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: classes.dropdownLink,
                        style: {
                            color: "#111111"
                        },
                        onClick: (e)=>{
                            if (each.title === "Services") router_default().push(each.href);
                            else smoothScroll(e, each.smoothScroll);
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            style: {
                                whiteSpace: "nowrap",
                                fontFamily: '"Open Sans", sans-serif',
                                fontSize: "0.875rem",
                                lineHeight: "2rem"
                            },
                            children: [
                                " ",
                                each.title
                            ]
                        })
                    })
                }))
        ]
    });
};
HeaderLinks.defaultProps = {
    hoverColor: "primary"
};
HeaderLinks.propTypes = {
    dropdownHoverColor: external_prop_types_default().oneOf([
        "dark",
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose"
    ])
};


/***/ }),

/***/ 4111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6441);
/* harmony import */ var _styles_jss_novel_logiks_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(746);


const headerLinksStyle = (theme)=>({
        list: {
            [theme.breakpoints.up("md")]: {
                WebkitBoxAlign: "center",
                MsFlexAlign: "center",
                alignItems: "center",
                WebkitBoxOrient: "horizontal",
                WebkitBoxDirection: "normal",
                MsFlexDirection: "row",
                flexDirection: "row"
            },
            [theme.breakpoints.down("md")]: {
                display: "block"
            },
            marginTop: "0px",
            display: "flex",
            paddingLeft: "0",
            marginBottom: "0",
            listStyle: "none",
            padding: "0"
        },
        listItem: {
            float: "left",
            color: "inherit",
            position: "relative",
            display: "block",
            width: "auto",
            margin: "0",
            padding: "0",
            [theme.breakpoints.down("md")]: {
                "& ul": {
                    maxHeight: "300px",
                    overflow: "scroll"
                },
                width: "100%",
                "&:not(:last-child)": {
                    "&:after": {
                        width: "calc(100% - 30px)",
                        content: '""',
                        display: "block",
                        height: "1px",
                        marginLeft: "15px",
                        backgroundColor: _styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .grayColor[14] */ .X_[14]
                    }
                }
            }
        },
        listItemText: {
            padding: "0 !important"
        },
        navLink: {
            color: "inherit",
            position: "relative",
            padding: "0.9375rem",
            fontWeight: "400",
            fontSize: "12px",
            textTransform: "uppercase",
            lineHeight: "20px",
            textDecoration: "none",
            margin: "0px",
            display: "inline-flex",
            "&:hover,&:focus": {
                color: "inherit"
            },
            "& .fab,& .far,& .fal,& .fas,& .material-icons": {
                position: "relative",
                top: "2px",
                marginTop: "-4px",
                marginRight: "4px",
                marginBottom: "0px",
                fontSize: "1.25rem"
            },
            [theme.breakpoints.down("md")]: {
                width: "calc(100% - 30px)",
                marginLeft: "15px",
                marginBottom: "8px",
                marginTop: "8px",
                textAlign: "left",
                "& > span:first-child": {
                    justifyContent: "flex-start"
                }
            },
            "& svg": {
                marginRight: "3px",
                width: "20px",
                height: "20px"
            }
        },
        navLinkJustIcon: {
            "& .fab,& .far,& .fal,& .fas,& .material-icons": {
                marginRight: "0px"
            },
            "& svg": {
                marginRight: "0px"
            }
        },
        navButton: {
            position: "relative",
            fontWeight: "400",
            fontSize: "12px",
            textTransform: "uppercase",
            lineHeight: "20px",
            textDecoration: "none",
            margin: "0px",
            display: "inline-flex",
            [theme.breakpoints.down("md")]: {
                width: "calc(100% - 30px)",
                marginLeft: "15px",
                marginBottom: "5px",
                marginTop: "5px",
                textAlign: "left",
                "& > span:first-child": {
                    justifyContent: "flex-start"
                }
            },
            "& $icons": {
                marginRight: "3px"
            }
        },
        notificationNavLink: {
            [theme.breakpoints.down("lg")]: {
                top: "0",
                margin: "5px 15px"
            },
            color: _styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .whiteColor */ .zQ,
            padding: "0.9375rem",
            fontWeight: "400",
            fontSize: "12px",
            textTransform: "uppercase",
            lineHeight: "20px",
            textDecoration: "none",
            margin: "0px",
            display: "inline-flex"
        },
        registerNavLink: {
            [theme.breakpoints.down("lg")]: {
                top: "0",
                margin: "5px 15px"
            },
            position: "relative",
            fontWeight: "400",
            fontSize: "12px",
            textTransform: "uppercase",
            lineHeight: "20px",
            textDecoration: "none",
            margin: "0px",
            display: "inline-flex"
        },
        navLinkActive: {
            "&, &:hover, &:focus,&:active ": {
                color: "inherit",
                backgroundColor: "rgba(" + (0,_styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .oo)(_styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .whiteColor */ .zQ) + ", 0.1)"
            }
        },
        icons: {
            width: "20px",
            height: "20px",
            marginRight: "14px"
        },
        dropdownIcons: {
            width: "24px",
            height: "24px",
            marginRight: "14px",
            opacity: "0.5",
            marginTop: "-4px",
            top: "1px",
            verticalAlign: "middle",
            fontSize: "24px",
            position: "relative"
        },
        socialIcons: {
            position: "relative",
            fontSize: "1.25rem",
            maxWidth: "24px"
        },
        dropdownLink: {
            "&,&:hover,&:focus": {
                color: "inherit",
                textDecoration: "solid",
                fontFamily: "Montserrat",
                fontWeight: 450,
                display: "flex",
                padding: "0.75rem 1.25rem 0.75rem 0.75rem"
            }
        },
        ..._styles_jss_novel_logiks_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
        marginRight5: {
            marginRight: "5px"
        },
        collapse: {
            [theme.breakpoints.up("md")]: {
                display: "flex !important",
                MsFlexPreferredSize: "auto",
                flexBasis: "auto"
            },
            WebkitBoxFlex: "1",
            MsFlexPositive: "1",
            flexGrow: "1",
            WebkitBoxAlign: "center",
            MsFlexAlign: "center",
            alignItems: "center"
        },
        mlAuto: _styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .mlAuto */ .hU
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerLinksStyle);


/***/ }),

/***/ 746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6441);

const tooltipsStyle = {
    tooltip: {
        padding: "10px 15px",
        minWidth: "130px",
        color: _styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .whiteColor */ .zQ,
        lineHeight: "1.7em",
        background: "rgba(" + (0,_styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .oo)(_styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .grayColor[15] */ .X_[15]) + ",0.9)",
        border: "none",
        borderRadius: "3px",
        boxShadow: "0 8px 10px 1px rgba(" + (0,_styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .oo)(_styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .blackColor */ .FT) + ", 0.14), 0 3px 14px 2px rgba(" + (0,_styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .oo)(_styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .blackColor */ .FT) + ", 0.12), 0 5px 5px -3px rgba(" + (0,_styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .oo)(_styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .blackColor */ .FT) + ", 0.2)",
        maxWidth: "200px",
        textAlign: "center",
        fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
        fontSize: "0.875em",
        fontStyle: "normal",
        fontWeight: "400",
        textShadow: "none",
        textTransform: "none",
        letterSpacing: "normal",
        wordBreak: "normal",
        wordSpacing: "normal",
        wordWrap: "normal",
        whiteSpace: "normal",
        lineBreak: "auto"
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tooltipsStyle);


/***/ })

};
;