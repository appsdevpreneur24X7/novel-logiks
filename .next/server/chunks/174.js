"use strict";
exports.id = 174;
exports.ids = [174];
exports.modules = {

/***/ 7532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CardAvatar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@mui/styles/makeStyles"
var makeStyles_ = __webpack_require__(8409);
var makeStyles_default = /*#__PURE__*/__webpack_require__.n(makeStyles_);
// EXTERNAL MODULE: ./styles/jss/novel-logiks.js
var novel_logiks = __webpack_require__(6441);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/components/cardAvatarStyle.js

const cardAvatarStyle = {
    cardAvatar: {
        "&$cardAvatarProfile img,&$cardAvatarTestimonial img": {
            width: "100%",
            height: "auto"
        }
    },
    cardAvatarProfile: {
        maxWidth: "130px",
        maxHeight: "130px",
        margin: "-50px auto 0",
        borderRadius: "50%",
        overflow: "hidden",
        padding: "0",
        boxShadow: "0 16px 38px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.56), 0 4px 25px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.2)",
        "&$cardAvatarPlain": {
            marginTop: "0"
        }
    },
    cardAvatarPlain: {},
    cardAvatarTestimonial: {
        margin: "-50px auto 0",
        maxWidth: "100px",
        maxHeight: "100px",
        borderRadius: "50%",
        overflow: "hidden",
        padding: "0",
        boxShadow: "0 16px 38px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.56), 0 4px 25px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.2)",
        "&$cardAvatarPlain": {
            marginTop: "0"
        }
    },
    cardAvatarTestimonialFooter: {
        marginBottom: "-50px",
        marginTop: "10px"
    }
};
/* harmony default export */ const components_cardAvatarStyle = (cardAvatarStyle);

;// CONCATENATED MODULE: ./components/Card/CardAvatar.js


// nodejs library that concatenates classes

// nodejs library to set properties for components


// @mui/icons-material
// core components

const useStyles = makeStyles_default()(components_cardAvatarStyle);
function CardAvatar(props) {
    const { children , className , plain , profile , testimonial , testimonialFooter , ...rest } = props;
    const classes = useStyles();
    const cardAvatarClasses = external_classnames_default()({
        [classes.cardAvatar]: true,
        [classes.cardAvatarProfile]: profile,
        [classes.cardAvatarPlain]: plain,
        [classes.cardAvatarTestimonial]: testimonial,
        [classes.cardAvatarTestimonialFooter]: testimonialFooter,
        [className]: className !== undefined
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: cardAvatarClasses,
        ...rest,
        children: children
    });
};
CardAvatar.propTypes = {
    children: (external_prop_types_default()).node.isRequired,
    className: (external_prop_types_default()).string,
    profile: (external_prop_types_default()).bool,
    plain: (external_prop_types_default()).bool,
    testimonial: (external_prop_types_default()).bool,
    testimonialFooter: (external_prop_types_default()).bool
};


/***/ }),

/***/ 7479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Info)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8409);
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_jss_novel_logiks_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4307);


// nodejs library to set properties for components


// core components

const useStyles = _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default()(_styles_jss_novel_logiks_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
function Info(props) {
    const { children  } = props;
    const classes = useStyles();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classes.defaultFontStyle + " " + classes.infoText,
        children: children
    });
};
Info.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)
};


/***/ }),

/***/ 3278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Muted)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8409);
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_jss_novel_logiks_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4307);


// nodejs library to set properties for components


// core components

const useStyles = _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default()(_styles_jss_novel_logiks_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
function Muted(props) {
    const { children  } = props;
    const classes = useStyles();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classes.defaultFontStyle + " " + classes.mutedText,
        children: children
    });
};
Muted.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)
};


/***/ })

};
;