"use strict";
exports.id = 951;
exports.ids = [951];
exports.modules = {

/***/ 4951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Warning)
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
function Warning(props) {
    const { children  } = props;
    const classes = useStyles();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classes.defaultFontStyle + " " + classes.warningText,
        children: children
    });
};
Warning.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)
};


/***/ }),

/***/ 4307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6441);

const typographyStyle = {
    defaultFontStyle: {
        ..._styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .defaultFont */ .Df,
        fontSize: "14px"
    },
    defaultHeaderMargins: {
        marginTop: "20px",
        marginBottom: "10px"
    },
    quote: {
        padding: "10px 20px",
        margin: "0 0 20px",
        fontSize: "1.25rem",
        borderLeft: "5px solid " + _styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .grayColor[2] */ .X_[2]
    },
    quoteText: {
        margin: "0 0 10px",
        fontStyle: "italic"
    },
    quoteAuthor: {
        display: "block",
        fontSize: "80%",
        lineHeight: "1.42857143",
        color: _styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .grayColor[10] */ .X_[10]
    },
    mutedText: {
        "&, & *": {
            color: _styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .grayColor[7] */ .X_[7],
            display: "inline-block"
        }
    },
    primaryText: {
        "&, & *": {
            color: _styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .primaryColor[0] */ .lr[0],
            display: "inline-block"
        }
    },
    infoText: {
        "&, & *": {
            color: _styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .infoColor[0] */ .bE[0],
            display: "inline-block"
        }
    },
    successText: {
        "&, & *": {
            color: _styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .successColor[0] */ .nq[0],
            display: "inline-block"
        }
    },
    warningText: {
        "&, & *": {
            color: _styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .warningColor[0] */ .MA[0],
            display: "inline-block"
        }
    },
    dangerText: {
        "&, & *": {
            color: _styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .dangerColor[0] */ .E7[0],
            display: "inline-block"
        }
    },
    roseText: {
        "&, & *": {
            color: _styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .roseColor[0] */ .An[0],
            display: "inline-block"
        }
    },
    smallText: {
        fontSize: "65%",
        fontWeight: "400",
        lineHeight: "1",
        color: _styles_jss_novel_logiks_js__WEBPACK_IMPORTED_MODULE_0__/* .grayColor[10] */ .X_[10]
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typographyStyle);


/***/ })

};
;