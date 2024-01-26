"use strict";
exports.id = 568;
exports.ids = [568];
exports.modules = {

/***/ 6568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
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
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(4192);
// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(834);
// EXTERNAL MODULE: external "@mui/icons-material/Favorite"
var Favorite_ = __webpack_require__(7372);
// EXTERNAL MODULE: ./styles/jss/novel-logiks.js
var novel_logiks = __webpack_require__(6441);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/components/footerStyle.js

const footerStyle = {
    left: {
        float: "left!important",
        display: "block"
    },
    right: {
        padding: "15px 0",
        margin: "0",
        float: "right"
    },
    rightLinks: {
        float: "right!important",
        "& ul": {
            marginBottom: 0,
            marginTop: 10,
            padding: 0,
            listStyle: "none",
            height: 38,
            "& li": {
                display: "inline-block"
            }
        },
        "& i": {
            fontSize: "20px"
        }
    },
    footer: {
        padding: "0.9375rem 0",
        textAlign: "center",
        display: "flex",
        zIndex: "2",
        position: "relative",
        "& ul": {
            marginBottom: "0",
            padding: 0,
            listStyle: "none"
        }
    },
    big: {
        padding: "1.875rem 0",
        "& h5, & h4": {
            fontWeight: 700,
            fontFamily: "Montserrat",
            marginBottom: "15px"
        },
        "& p": {
            color: novel_logiks/* grayColor.0 */.X_[0]
        }
    },
    content: {
        textAlign: "left"
    },
    a: {
        color: novel_logiks/* primaryColor.0 */.lr[0],
        textDecoration: "none",
        backgroundColor: "transparent"
    },
    dark: {
        background: "radial-gradient(ellipse at center," + novel_logiks/* grayColor.4 */.X_[4] + " 0," + novel_logiks/* grayColor.5 */.X_[5] + " 100%)",
        backgroundSize: "550% 450%",
        color: novel_logiks/* whiteColor */.zQ,
        "& p": {
            color: novel_logiks/* grayColor.0 */.X_[0]
        },
        "& i": {
            color: novel_logiks/* whiteColor */.zQ
        },
        "& a": {
            color: novel_logiks/* whiteColor */.zQ,
            opacity: ".86",
            "&:visited": {
                color: novel_logiks/* whiteColor */.zQ
            },
            "&:focus, &:hover": {
                opacity: 1
            }
        },
        "& hr": {
            borderColor: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ",0.2)"
        },
        "& $btnTwitter, & $btnDribbble, & $btnInstagram": {
            color: novel_logiks/* whiteColor */.zQ
        }
    },
    white: {
        backgroundColor: novel_logiks/* whiteColor */.zQ,
        color: novel_logiks/* grayColor.1 */.X_[1],
        textDecoration: "none",
        "& a": {
            "&:visited": {
                color: novel_logiks/* grayColor.1 */.X_[1]
            },
            "&:hover, &:focus": {
                color: novel_logiks/* grayColor.20 */.X_[20]
            }
        }
    },
    container: novel_logiks/* container */.nC,
    list: {
        marginBottom: "0",
        padding: "0",
        marginTop: "0"
    },
    inlineBlock: {
        display: "inline-block",
        padding: "0px",
        width: "auto"
    },
    icon: {
        width: "18px",
        height: "18px",
        position: "relative",
        top: "3px"
    },
    iconSocial: {
        width: "41px",
        height: "41px",
        fontSize: "24px",
        minWidth: "41px",
        padding: 0,
        overflow: "hidden",
        position: "relative"
    },
    btnTwitter: {
        ...novel_logiks/* btnLink */.Nt,
        color: novel_logiks/* twitterColor */.QR
    },
    btnDribbble: {
        ...novel_logiks/* btnLink */.Nt,
        color: novel_logiks/* dribbbleColor */.Aj
    },
    btnInstagram: {
        ...novel_logiks/* btnLink */.Nt,
        color: novel_logiks/* instagramColor */.Un
    },
    footerBrand: {
        height: "50px",
        padding: "15px 15px",
        fontSize: "18px",
        lineHeight: "50px",
        marginLeft: "-15px",
        color: novel_logiks/* grayColor.1 */.X_[1],
        textDecoration: "none",
        fontWeight: 700,
        fontFamily: "Montserrat"
    },
    pullCenter: {
        display: "inline-block",
        float: "none"
    },
    clearFix: {
        clear: "both"
    }
};
/* harmony default export */ const components_footerStyle = (footerStyle);

;// CONCATENATED MODULE: ./components/Footer/Footer.js
/* eslint-disable */ 

// nodejs library to set properties for components

// nodejs library that concatenates classes




// @mui/icons-material


const useStyles = makeStyles_default()(components_footerStyle);
function Footer(props) {
    const { children , content , theme , big , className  } = props;
    const classes = useStyles();
    const themeType = theme === "transparent" || theme == undefined ? false : true;
    const footerClasses = external_classnames_default()({
        [classes.footer]: true,
        [classes[theme]]: themeType,
        [classes.big]: big || children !== undefined,
        [className]: className !== undefined
    });
    const aClasses = external_classnames_default()({
        [classes.a]: true
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: footerClasses,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                children !== undefined ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.content,
                            children: children
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {})
                    ]
                }) : " ",
                content,
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.clearFix
                })
            ]
        })
    });
};
Footer.propTypes = {
    theme: external_prop_types_default().oneOf([
        "dark",
        "white",
        "transparent"
    ]),
    big: (external_prop_types_default()).bool,
    content: (external_prop_types_default()).node.isRequired
};


/***/ })

};
;