"use strict";
exports.id = 82;
exports.ids = [82];
exports.modules = {

/***/ 3082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CardHeader)
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
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/components/cardHeaderStyle.js

const cardHeaderStyle = {
    cardHeader: {
        borderRadius: "3px",
        padding: "1rem 15px",
        marginLeft: "15px",
        marginRight: "15px",
        marginTop: "-30px",
        border: "0",
        marginBottom: "0"
    },
    cardHeaderPlain: {
        marginLeft: "0px",
        marginRight: "0px",
        "&$cardHeaderImage": {
            margin: "0 !important"
        }
    },
    cardHeaderImage: {
        position: "relative",
        padding: "0",
        zIndex: "1",
        marginLeft: "15px",
        marginRight: "15px",
        marginTop: "-30px",
        borderRadius: "6px",
        "& img": {
            width: "100%",
            borderRadius: "6px",
            pointerEvents: "none",
            boxShadow: "0 5px 15px -8px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.24), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.2)"
        },
        "& a": {
            display: "block"
        }
    },
    noShadow: {
        "& img": {
            boxShadow: "none !important"
        }
    },
    cardHeaderContact: {
        margin: "0 15px",
        marginTop: "-20px"
    },
    cardHeaderSignup: {
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "-40px",
        padding: "20px 0",
        width: "100%",
        marginBottom: "15px"
    },
    warningCardHeader: novel_logiks/* warningCardHeader */.rt,
    successCardHeader: novel_logiks/* successCardHeader */.aT,
    dangerCardHeader: novel_logiks/* dangerCardHeader */.yF,
    infoCardHeader: novel_logiks/* infoCardHeader */.Yi,
    primaryCardHeader: novel_logiks/* primaryCardHeader */.hF,
    roseCardHeader: novel_logiks/* roseCardHeader */.Bp
};
/* harmony default export */ const components_cardHeaderStyle = (cardHeaderStyle);

;// CONCATENATED MODULE: ./components/Card/CardHeader.js


// nodejs library that concatenates classes

// nodejs library to set properties for components


// @mui/icons-material
// core components

const useStyles = makeStyles_default()(components_cardHeaderStyle);
function CardHeader(props) {
    const { className , children , color , plain , image , contact , signup , noShadow , ...rest } = props;
    const classes = useStyles();
    const cardHeaderClasses = external_classnames_default()({
        [classes.cardHeader]: true,
        [classes[color + "CardHeader"]]: color,
        [classes.cardHeaderPlain]: plain,
        [classes.cardHeaderImage]: image,
        [classes.cardHeaderContact]: contact,
        [classes.cardHeaderSignup]: signup,
        [classes.noShadow]: noShadow,
        [className]: className !== undefined
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: cardHeaderClasses,
        ...rest,
        children: children
    });
};
CardHeader.propTypes = {
    className: (external_prop_types_default()).string,
    color: external_prop_types_default().oneOf([
        "warning",
        "success",
        "danger",
        "info",
        "primary",
        "rose"
    ]),
    plain: (external_prop_types_default()).bool,
    image: (external_prop_types_default()).bool,
    contact: (external_prop_types_default()).bool,
    signup: (external_prop_types_default()).bool,
    noShadow: (external_prop_types_default()).bool,
    children: (external_prop_types_default()).node
};


/***/ })

};
;