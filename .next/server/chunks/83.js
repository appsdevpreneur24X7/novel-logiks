"use strict";
exports.id = 83;
exports.ids = [83];
exports.modules = {

/***/ 8423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Badge)
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
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/components/badgeStyle.js

const badgeStyle = {
    badge: {
        marginRight: "3px",
        borderRadius: "12px",
        padding: "5px 12px",
        textTransform: "uppercase",
        fontSize: "10px",
        fontWeight: "500",
        lineHeight: "1",
        color: novel_logiks/* whiteColor */.zQ,
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "baseline",
        display: "inline-block"
    },
    primary: {
        backgroundColor: novel_logiks/* primaryColor.0 */.lr[0]
    },
    warning: {
        backgroundColor: novel_logiks/* warningColor.0 */.MA[0]
    },
    danger: {
        backgroundColor: novel_logiks/* dangerColor.0 */.E7[0]
    },
    success: {
        backgroundColor: novel_logiks/* successColor.0 */.nq[0]
    },
    info: {
        backgroundColor: novel_logiks/* infoColor.0 */.bE[0]
    },
    rose: {
        backgroundColor: novel_logiks/* roseColor.0 */.An[0]
    },
    gray: {
        backgroundColor: novel_logiks/* grayColor.7 */.X_[7]
    }
};
/* harmony default export */ const components_badgeStyle = (badgeStyle);

;// CONCATENATED MODULE: ./components/Badge/Badge.js


// nodejs library that concatenates classes

// nodejs library to set properties for components



const useStyles = makeStyles_default()(components_badgeStyle);
function Badge(props) {
    const { color , children , className  } = props;
    const classes = useStyles();
    const badgeClasses = external_classnames_default()({
        [classes.badge]: true,
        [classes[color]]: true,
        [className]: className !== undefined
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: badgeClasses,
        children: children
    });
};
Badge.defaultProps = {
    color: "gray"
};
Badge.propTypes = {
    color: external_prop_types_default().oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    className: (external_prop_types_default()).string,
    children: (external_prop_types_default()).node
};


/***/ }),

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

/***/ 5190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ InfoArea)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "@mui/styles/makeStyles"
var makeStyles_ = __webpack_require__(8409);
var makeStyles_default = /*#__PURE__*/__webpack_require__.n(makeStyles_);
// EXTERNAL MODULE: external "@mui/material/Icon"
var Icon_ = __webpack_require__(3843);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);
// EXTERNAL MODULE: ./styles/jss/novel-logiks.js
var novel_logiks = __webpack_require__(6441);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/components/infoStyle.js

const infoStyle = {
    infoArea: {
        maxWidth: "360px",
        margin: "0 auto",
        padding: "10px 0 10px"
    },
    iconWrapper: {
        float: "left",
        marginTop: "24px",
        marginRight: "10px"
    },
    primary: {
        color: novel_logiks/* primaryColor.0 */.lr[0]
    },
    warning: {
        color: novel_logiks/* warningColor.0 */.MA[0]
    },
    danger: {
        color: novel_logiks/* dangerColor.0 */.E7[0]
    },
    success: {
        color: novel_logiks/* successColor.0 */.nq[0]
    },
    info: {
        color: novel_logiks/* infoColor.0 */.bE[0]
    },
    rose: {
        color: novel_logiks/* roseColor.0 */.An[0]
    },
    gray: {
        color: novel_logiks/* grayColor.0 */.X_[0]
    },
    icon: {
        width: "2.25rem",
        height: "2.25rem",
        fontSize: "2.25rem"
    },
    descriptionWrapper: {
        color: novel_logiks/* grayColor.0 */.X_[0],
        overflow: "hidden"
    },
    title: {
        ...novel_logiks/* title */.TN,
        margin: "1.75rem 0 0.875rem !important",
        minHeight: "unset"
    },
    description: {
        color: novel_logiks/* grayColor.0 */.X_[0],
        overflow: "hidden",
        marginTop: "0px",
        "& p": {
            color: novel_logiks/* grayColor.0 */.X_[0],
            fontSize: "14px"
        }
    },
    short_description: {
        color: novel_logiks/* grayColor.1 */.X_[1],
        overflow: "hidden",
        marginTop: "0px",
        "& p": {
            color: novel_logiks/* grayColor.1 */.X_[1],
            fontSize: "14px"
        }
    },
    iconWrapperVertical: {
        float: "none"
    },
    iconVertical: {
        width: "61px",
        height: "61px"
    }
};
/* harmony default export */ const components_infoStyle = (infoStyle);

;// CONCATENATED MODULE: ./components/InfoArea/InfoArea.js


// nodejs library to set properties for components

// nodejs library that concatenates classes




const useStyles = makeStyles_default()(components_infoStyle);
function InfoArea(props) {
    const { title , description , iconColor , vertical , className , short_description  } = props;
    const classes = useStyles();
    const iconWrapper = external_classnames_default()({
        [classes.iconWrapper]: true,
        [classes[iconColor]]: true,
        [classes.iconWrapperVertical]: vertical
    });
    const iconClasses = external_classnames_default()({
        [classes.icon]: true,
        [classes.iconVertical]: vertical
    });
    const infoAreaClasses = external_classnames_default()({
        [classes.infoArea]: true,
        [className]: className !== undefined
    });
    let icon = null;
    switch(typeof props.icon){
        case "string":
            icon = /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                className: iconClasses,
                children: props.icon
            });
            break;
        default:
            icon = /*#__PURE__*/ jsx_runtime_.jsx(props.icon, {
                className: iconClasses
            });
            break;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: infoAreaClasses,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: iconWrapper,
                children: icon
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.descriptionWrapper,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: classes.title,
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.description,
                        children: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.short_description,
                        children: short_description
                    })
                ]
            })
        ]
    });
};
InfoArea.defaultProps = {
    iconColor: "gray"
};
InfoArea.propTypes = {
    icon: external_prop_types_default().oneOfType([
        (external_prop_types_default()).object,
        (external_prop_types_default()).string
    ]).isRequired,
    title: (external_prop_types_default()).string.isRequired,
    description: (external_prop_types_default()).node.isRequired,
    iconColor: external_prop_types_default().oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    vertical: (external_prop_types_default()).bool,
    className: (external_prop_types_default()).string
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