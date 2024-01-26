"use strict";
exports.id = 765;
exports.ids = [765];
exports.modules = {

/***/ 2643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Card)
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
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/components/cardStyle.js

const cardStyle = {
    card: {
        border: "0",
        marginBottom: "30px",
        marginTop: "30px",
        borderRadius: "6px",
        color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.87)",
        background: novel_logiks/* whiteColor */.zQ,
        width: "100%",
        boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.2), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        fontSize: ".875rem",
        // some jss/css to make the cards look a bit better on Internet Explorer
        "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
            display: "inline-block !important"
        }
    },
    cardPlain: {
        background: "transparent",
        boxShadow: "none"
    },
    cardProfile: {
        marginTop: "30px",
        textAlign: "center"
    },
    cardBlog: {
        marginTop: "60px"
    },
    cardRaised: {
        boxShadow: "0 16px 38px -12px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.56), 0 4px 25px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.2)"
    },
    cardBackground: {
        backgroundPosition: "50%",
        backgroundSize: "cover",
        textAlign: "center",
        color: novel_logiks/* whiteColor */.zQ,
        "& h3": {
            color: novel_logiks/* whiteColor */.zQ + " !important"
        },
        "& p": {
            color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ",0.7)!important"
        },
        "&:after": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: '""',
            backgroundColor: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.56)",
            borderRadius: "6px"
        },
        "& small": {
            color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.7) !important"
        }
    },
    cardPricing: {
        textAlign: "center",
        "&:after": {
            backgroundColor: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.7) !important"
        },
        "& ul": {
            listStyle: "none",
            padding: 0,
            maxWidth: "240px",
            margin: "10px auto"
        },
        "& ul li": {
            color: novel_logiks/* grayColor.0 */.X_[0],
            textAlign: "center",
            padding: "12px 0px",
            borderBottom: "1px solid rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* grayColor.0 */.X_[0]) + ",0.3)"
        },
        "& ul li:last-child": {
            border: 0
        },
        "& ul li b": {
            color: novel_logiks/* grayColor.1 */.X_[1]
        },
        "& h1": {
            marginTop: "30px"
        },
        "& h1 small": {
            display: "inline-flex",
            height: 0,
            fontSize: "18px"
        },
        "& h1 small:first-child": {
            position: "relative",
            top: "-17px",
            fontSize: "26px"
        },
        "& ul li svg,& ul li .fab,& ul li .fas,& ul li .far,& ul li .fal,& ul li .material-icons": {
            position: "relative",
            top: "7px"
        }
    },
    cardPricingColor: {
        "& ul li": {
            color: novel_logiks/* whiteColor */.zQ,
            borderColor: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ",0.3)",
            "& b, & svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
                color: novel_logiks/* whiteColor */.zQ,
                fontWeight: "700"
            }
        }
    },
    cardProduct: {
        marginTop: "30px"
    },
    primary: {
        background: "linear-gradient(60deg," + novel_logiks/* primaryColor.1 */.lr[1] + ", " + novel_logiks/* primaryColor.2 */.lr[2] + ")",
        "& h1 small": {
            color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.8)"
        },
        color: novel_logiks/* whiteColor */.zQ
    },
    info: {
        background: "linear-gradient(60deg," + novel_logiks/* infoColor.1 */.bE[1] + "," + novel_logiks/* infoColor.2 */.bE[2] + ")",
        "& h1 small": {
            color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.8)"
        },
        color: novel_logiks/* whiteColor */.zQ
    },
    success: {
        background: "linear-gradient(60deg," + novel_logiks/* successColor.1 */.nq[1] + "," + novel_logiks/* successColor.2 */.nq[2] + ")",
        "& h1 small": {
            color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.8)"
        },
        color: novel_logiks/* whiteColor */.zQ
    },
    warning: {
        background: "linear-gradient(60deg," + novel_logiks/* warningColor.1 */.MA[1] + "," + novel_logiks/* warningColor.2 */.MA[2] + ")",
        "& h1 small": {
            color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.8)"
        },
        color: novel_logiks/* whiteColor */.zQ
    },
    danger: {
        background: "linear-gradient(60deg," + novel_logiks/* dangerColor.1 */.E7[1] + "," + novel_logiks/* dangerColor.2 */.E7[2] + ")",
        "& h1 small": {
            color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.8)"
        },
        color: novel_logiks/* whiteColor */.zQ
    },
    rose: {
        background: "linear-gradient(60deg," + novel_logiks/* roseColor.1 */.An[1] + "," + novel_logiks/* roseColor.2 */.An[2] + ")",
        "& h1 small": {
            color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.8)"
        },
        color: novel_logiks/* whiteColor */.zQ
    }
};
/* harmony default export */ const components_cardStyle = (cardStyle);

;// CONCATENATED MODULE: ./components/Card/Card.js


// nodejs library that concatenates classes

// nodejs library to set properties for components


// @mui/icons-material
// core components

const useStyles = makeStyles_default()(components_cardStyle);
function Card(props) {
    const { className , children , plain , profile , blog , raised , background , pricing , color , product , testimonial , ...rest } = props;
    const classes = useStyles();
    const cardClasses = external_classnames_default()({
        [classes.card]: true,
        [classes.cardPlain]: plain,
        [classes.cardProfile]: profile || testimonial,
        [classes.cardBlog]: blog,
        [classes.cardRaised]: raised,
        [classes.cardBackground]: background,
        [classes.cardPricingColor]: pricing && color !== undefined || pricing && background !== undefined,
        [classes[color]]: color,
        [classes.cardPricing]: pricing,
        [classes.cardProduct]: product,
        [className]: className !== undefined
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: cardClasses,
        ...rest,
        children: children
    });
};
Card.propTypes = {
    className: (external_prop_types_default()).string,
    plain: (external_prop_types_default()).bool,
    profile: (external_prop_types_default()).bool,
    blog: (external_prop_types_default()).bool,
    raised: (external_prop_types_default()).bool,
    background: (external_prop_types_default()).bool,
    pricing: (external_prop_types_default()).bool,
    testimonial: (external_prop_types_default()).bool,
    color: external_prop_types_default().oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose"
    ]),
    product: (external_prop_types_default()).bool,
    children: (external_prop_types_default()).node
};


/***/ }),

/***/ 222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CardBody)
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
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/components/cardBodyStyle.js

const cardBodyStyle = {
    cardBody: {
        padding: "0.9375rem 1.875rem",
        flex: "1 1 auto",
        WebkitBoxFlex: "1"
    },
    cardBodyBackground: {
        position: "relative",
        zIndex: "2",
        minHeight: "280px",
        paddingTop: "40px",
        paddingBottom: "40px",
        maxWidth: "440px",
        margin: "0 auto"
    },
    cardBodyPlain: {
        paddingLeft: "5px",
        paddingRight: "5px"
    },
    cardBodyFormHorizontal: {
        paddingLeft: "15px",
        paddingRight: "15px",
        "& form": {
            margin: "0"
        }
    },
    cardPricing: {
        padding: "15px!important",
        margin: "0px!important"
    },
    cardSignup: {
        padding: "0px 30px 0px 30px"
    },
    cardBodyColor: {
        borderRadius: "6px",
        "& h1,& h2,& h3": {
            "& small": {
                color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.8)"
            }
        }
    }
};
/* harmony default export */ const components_cardBodyStyle = (cardBodyStyle);

;// CONCATENATED MODULE: ./components/Card/CardBody.js


// nodejs library that concatenates classes

// nodejs library to set properties for components


// @mui/icons-material
// core components

const useStyles = makeStyles_default()(components_cardBodyStyle);
function CardBody(props) {
    const { className , children , background , plain , formHorizontal , pricing , signup , color , ...rest } = props;
    const classes = useStyles();
    const cardBodyClasses = external_classnames_default()({
        [classes.cardBody]: true,
        [classes.cardBodyBackground]: background,
        [classes.cardBodyPlain]: plain,
        [classes.cardBodyFormHorizontal]: formHorizontal,
        [classes.cardPricing]: pricing,
        [classes.cardSignup]: signup,
        [classes.cardBodyColor]: color,
        [className]: className !== undefined
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: cardBodyClasses,
        ...rest,
        children: children
    });
};
CardBody.propTypes = {
    className: (external_prop_types_default()).string,
    background: (external_prop_types_default()).bool,
    plain: (external_prop_types_default()).bool,
    formHorizontal: (external_prop_types_default()).bool,
    pricing: (external_prop_types_default()).bool,
    signup: (external_prop_types_default()).bool,
    color: (external_prop_types_default()).bool,
    children: (external_prop_types_default()).node
};


/***/ })

};
;