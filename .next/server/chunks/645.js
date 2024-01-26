"use strict";
exports.id = 645;
exports.ids = [645];
exports.modules = {

/***/ 5793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CardFooter)
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
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/components/cardFooterStyle.js
const cardFooterStyle = {
    cardFooter: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "transparent",
        padding: "0.9375rem 1.875rem",
        paddingTop: "0"
    },
    cardFooterProfile: {
        marginTop: "-15px"
    },
    cardFooterPlain: {
        paddingLeft: "5px",
        paddingRight: "5px",
        backgroundColor: "transparent"
    },
    cardFooterPricing: {
        zIndex: "2"
    },
    cardFooterTestimonial: {
        display: "block"
    }
};
/* harmony default export */ const components_cardFooterStyle = (cardFooterStyle);

;// CONCATENATED MODULE: ./components/Card/CardFooter.js


// nodejs library that concatenates classes

// nodejs library to set properties for components


// @mui/icons-material
// core components

const useStyles = makeStyles_default()(components_cardFooterStyle);
function CardFooter(props) {
    const { className , children , plain , profile , pricing , testimonial , ...rest } = props;
    const classes = useStyles();
    const cardFooterClasses = external_classnames_default()({
        [classes.cardFooter]: true,
        [classes.cardFooterPlain]: plain,
        [classes.cardFooterProfile]: profile || testimonial,
        [classes.cardFooterPricing]: pricing,
        [classes.cardFooterTestimonial]: testimonial,
        [className]: className !== undefined
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: cardFooterClasses,
        ...rest,
        children: children
    });
};
CardFooter.propTypes = {
    className: (external_prop_types_default()).string,
    plain: (external_prop_types_default()).bool,
    profile: (external_prop_types_default()).bool,
    pricing: (external_prop_types_default()).bool,
    testimonial: (external_prop_types_default()).bool,
    children: (external_prop_types_default()).node
};


/***/ }),

/***/ 2045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sectionCards)
});

// EXTERNAL MODULE: ./styles/jss/novel-logiks.js
var novel_logiks = __webpack_require__(6441);
// EXTERNAL MODULE: ./styles/jss/novel-logiks/imagesStyles.js
var imagesStyles = __webpack_require__(6696);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/rotatingCards.js

const style = {
    rotatingCardContainer: {
        perspective: "800px",
        "& $cardRotate $back": {
            transform: "rotateY(180deg)",
            zIndex: "5",
            textAlign: "center",
            width: "100%",
            height: "100%"
        },
        "&:not($manualRotate):hover $cardRotate": {
            transform: "rotateY(180deg)"
        },
        "&$manualRotate$activateRotate $cardRotate": {
            transform: "rotateY(180deg)"
        },
        "& $cardRotate $front": {
            zIndex: "2",
            position: "relative"
        },
        "& $cardRotate $front, & $cardRotate $back": {
            backfaceVisibility: "hidden",
            boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.2)",
            position: "absolute",
            backgroundColor: novel_logiks/* whiteColor */.zQ,
            borderRadius: "6px",
            top: "0",
            left: "0",
            WebkitBoxPack: "center",
            MsFlexPack: "center",
            justifyContent: "center",
            MsFlexLinePack: "center",
            alignContent: "center",
            display: "flex",
            WebkitBoxOrient: "vertical",
            WebkitBoxDirection: "normal",
            flexDirection: "column"
        }
    },
    activateRotate: {},
    manualRotate: {},
    cardRotate: {
        transition: "all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1)",
        transformStyle: "preserve-3d",
        position: "relative",
        background: "transparent"
    },
    front: {},
    back: {},
    wrapperBackground: {
        backgroundPosition: "50%",
        backgroundSize: "cover",
        textAlign: "center",
        "&:after": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''",
            // backgroundColor: "rgba(" + hexToRgb(blackColor) + ", 0.56)",
            borderRadius: "6px"
        }
    },
    cardBodyRotate: {
        WebkitBoxPack: "center",
        MsFlexPack: "center",
        justifyContent: "center",
        MsFlexLinePack: "center",
        alignContent: "center",
        display: "flex",
        WebkitBoxOrient: "vertical",
        WebkitBoxDirection: "normal",
        flexDirection: "column"
    },
    wrapperPrimary: {
        background: "linear-gradient(60deg," + novel_logiks/* primaryColor.1 */.lr[1] + "," + novel_logiks/* primaryColor.2 */.lr[2] + ")",
        "& h1 small": {
            color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.8)"
        },
        color: novel_logiks/* whiteColor */.zQ
    },
    wrapperInfo: {
        background: "linear-gradient(60deg," + novel_logiks/* infoColor.1 */.bE[1] + "," + novel_logiks/* infoColor.2 */.bE[2] + ")",
        color: novel_logiks/* whiteColor */.zQ
    },
    wrapperSuccess: {
        background: "linear-gradient(60deg," + novel_logiks/* successColor.1 */.nq[1] + "," + novel_logiks/* successColor.2 */.nq[2] + ")",
        color: novel_logiks/* whiteColor */.zQ
    },
    wrapperWarning: {
        background: "linear-gradient(60deg," + novel_logiks/* warningColor.1 */.MA[1] + "," + novel_logiks/* warningColor.2 */.MA[2] + ")",
        color: novel_logiks/* whiteColor */.zQ
    },
    wrapperDanger: {
        background: "linear-gradient(60deg," + novel_logiks/* dangerColor.1 */.E7[1] + "," + novel_logiks/* dangerColor.2 */.E7[2] + ")",
        color: novel_logiks/* whiteColor */.zQ
    },
    wrapperRose: {
        background: "linear-gradient(60deg," + novel_logiks/* roseColor.1 */.An[1] + "," + novel_logiks/* roseColor.2 */.An[2] + ")",
        color: novel_logiks/* whiteColor */.zQ
    }
};
/* harmony default export */ const rotatingCards = (style);

;// CONCATENATED MODULE: ./styles/jss/novel-logiks/pages/componentsSections/sectionCards.js



const styles = {
    container: novel_logiks/* container */.nC,
    coloredShadow: novel_logiks/* coloredShadow */.DF,
    title: novel_logiks/* title */.TN,
    mlAuto: novel_logiks/* mlAuto */.hU,
    cardTitle: novel_logiks/* cardTitle */.X5,
    ...imagesStyles/* default */.Z,
    ...rotatingCards,
    sectionGray: {
        background: novel_logiks/* grayColor.14 */.X_[14]
    },
    sectionWhite: {
        background: novel_logiks/* whiteColor */.zQ
    },
    cardTitleAbsolute: {
        ...novel_logiks/* cardTitle */.X5,
        position: "absolute !important",
        bottom: "15px !important",
        left: "15px !important",
        color: novel_logiks/* whiteColor */.zQ + " !important",
        fontSize: "1.125rem !important",
        textShadow: "0 2px 5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* grayColor.9 */.X_[9]) + ", 0.5) !important"
    },
    cardTitleWhite: {
        "&, & a": {
            ...novel_logiks/* title */.TN,
            marginTop: ".625rem",
            marginBottom: "0",
            minHeight: "auto",
            color: novel_logiks/* whiteColor */.zQ + " !important"
        }
    },
    cardCategory: {
        marginTop: "10px",
        "& svg": {
            position: "relative",
            top: "8px"
        }
    },
    cardCategorySocial: {
        marginTop: "10px",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            fontSize: "22px",
            position: "relative",
            marginTop: "-4px",
            top: "2px",
            marginRight: "5px"
        },
        "& svg": {
            position: "relative",
            top: "5px"
        }
    },
    cardCategorySocialWhite: {
        marginTop: "10px",
        color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.8)",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            fontSize: "22px",
            position: "relative",
            marginTop: "-4px",
            top: "2px",
            marginRight: "5px"
        },
        "& svg": {
            position: "relative",
            top: "5px"
        }
    },
    cardCategoryWhite: {
        marginTop: "10px",
        color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.7)"
    },
    cardCategoryFullWhite: {
        marginTop: "10px",
        color: novel_logiks/* whiteColor */.zQ
    },
    cardDescription: {
        ...novel_logiks/* description */.WL
    },
    cardDescriptionWhite: {
        color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.8)"
    },
    author: {
        display: "inline-flex",
        "& a": {
            color: novel_logiks/* grayColor.1 */.X_[1]
        }
    },
    authorWhite: {
        display: "inline-flex",
        "& a": {
            color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.8)"
        }
    },
    avatar: {
        width: "30px",
        height: "30px",
        overflow: "hidden",
        borderRadius: "50%",
        marginRight: "5px"
    },
    statsWhite: {
        color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.8)",
        display: "inline-flex",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            position: "relative",
            top: "3px",
            marginRight: "3px",
            marginLeft: "3px",
            fontSize: "18px",
            lineHeight: "18px"
        },
        "& svg": {
            position: "relative",
            top: "3px",
            marginRight: "3px",
            marginLeft: "3px",
            width: "18px",
            height: "18px"
        }
    },
    stats: {
        color: novel_logiks/* grayColor.0 */.X_[0],
        display: "flex",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            position: "relative",
            top: "3px",
            marginRight: "3px",
            marginLeft: "3px",
            fontSize: "18px",
            lineHeight: "18px"
        },
        "& svg": {
            position: "relative",
            top: "3px",
            marginRight: "3px",
            marginLeft: "3px",
            width: "18px",
            height: "18px"
        }
    },
    justifyContentCenter: {
        WebkitBoxPack: "center !important",
        MsFlexPack: "center !important",
        justifyContent: "center !important"
    },
    iconWrapper: {
        color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.76)",
        margin: "10px auto 0",
        width: "130px",
        height: "130px",
        border: "1px solid " + novel_logiks/* grayColor.14 */.X_[14],
        borderRadius: "50%",
        lineHeight: "174px",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            fontSize: "55px",
            lineHeight: "55px"
        },
        "& svg": {
            width: "55px",
            height: "55px"
        }
    },
    iconWrapperColor: {
        borderColor: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.25)"
    },
    iconWhite: {
        color: novel_logiks/* whiteColor */.zQ
    },
    iconRose: {
        color: novel_logiks/* roseColor.0 */.An[0]
    },
    iconInfo: {
        color: novel_logiks/* infoColor.0 */.bE[0]
    },
    marginTop30: {
        marginTop: "30px"
    },
    textCenter: {
        textAlign: "center"
    },
    marginBottom20: {
        marginBottom: "20px"
    }
};
/* harmony default export */ const sectionCards = (styles);


/***/ })

};
;