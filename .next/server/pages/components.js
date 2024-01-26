"use strict";
(() => {
var exports = {};
exports.id = 505;
exports.ids = [505];
exports.modules = {

/***/ 7980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Components)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "@mui/styles/makeStyles"
var makeStyles_ = __webpack_require__(8409);
var makeStyles_default = /*#__PURE__*/__webpack_require__.n(makeStyles_);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(4192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(834);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@mui/icons-material/Favorite"
var Favorite_ = __webpack_require__(7372);
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);
// EXTERNAL MODULE: ./components/Header/Header.js + 1 modules
var Header = __webpack_require__(4889);
// EXTERNAL MODULE: ./components/Footer/Footer.js + 1 modules
var Footer = __webpack_require__(6568);
// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__(4041);
// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__(6680);
// EXTERNAL MODULE: ./components/Parallax/Parallax.js + 1 modules
var Parallax = __webpack_require__(7482);
// EXTERNAL MODULE: ./components/Header/HeaderLinks.js + 1 modules
var HeaderLinks = __webpack_require__(6659);
;// CONCATENATED MODULE: external "nouislider"
const external_nouislider_namespaceObject = require("nouislider");
var external_nouislider_default = /*#__PURE__*/__webpack_require__.n(external_nouislider_namespaceObject);
;// CONCATENATED MODULE: external "react-tagsinput"
const external_react_tagsinput_namespaceObject = require("react-tagsinput");
var external_react_tagsinput_default = /*#__PURE__*/__webpack_require__.n(external_react_tagsinput_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/InputAdornment"
const InputAdornment_namespaceObject = require("@mui/material/InputAdornment");
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/FormControlLabel"
const FormControlLabel_namespaceObject = require("@mui/material/FormControlLabel");
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/FormControl"
const FormControl_namespaceObject = require("@mui/material/FormControl");
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Checkbox"
const Checkbox_namespaceObject = require("@mui/material/Checkbox");
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Radio"
const Radio_namespaceObject = require("@mui/material/Radio");
var Radio_default = /*#__PURE__*/__webpack_require__.n(Radio_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Switch"
const Switch_namespaceObject = require("@mui/material/Switch");
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Select"
const Select_namespaceObject = require("@mui/material/Select");
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/MenuItem"
const MenuItem_namespaceObject = require("@mui/material/MenuItem");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/InputLabel"
const InputLabel_namespaceObject = require("@mui/material/InputLabel");
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Hidden"
var Hidden_ = __webpack_require__(9483);
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);
;// CONCATENATED MODULE: external "@mui/icons-material/People"
const People_namespaceObject = require("@mui/icons-material/People");
var People_default = /*#__PURE__*/__webpack_require__.n(People_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Check"
const Check_namespaceObject = require("@mui/icons-material/Check");
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/FiberManualRecord"
const FiberManualRecord_namespaceObject = require("@mui/icons-material/FiberManualRecord");
var FiberManualRecord_default = /*#__PURE__*/__webpack_require__.n(FiberManualRecord_namespaceObject);
// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__(571);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: external "@mui/material/Input"
const Input_namespaceObject = require("@mui/material/Input");
var Input_default = /*#__PURE__*/__webpack_require__.n(Input_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Clear"
const Clear_namespaceObject = require("@mui/icons-material/Clear");
var Clear_default = /*#__PURE__*/__webpack_require__.n(Clear_namespaceObject);
// EXTERNAL MODULE: ./styles/jss/novel-logiks.js
var novel_logiks = __webpack_require__(6441);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/components/customInputStyle.js

const customInputStyle = {
    disabled: {
        "&:before": {
            backgroundColor: "transparent !important"
        }
    },
    underline: {
        "&:hover:not($disabled):before,&:before": {
            borderBottomColor: novel_logiks/* grayColor.11 */.X_[11] + " !important",
            borderBottomWidth: "1px !important"
        },
        "&:after": {
            borderBottomColor: novel_logiks/* primaryColor.0 */.lr[0]
        }
    },
    underlineError: {
        "&:after": {
            borderBottomColor: novel_logiks/* dangerColor.0 */.E7[0]
        }
    },
    underlineSuccess: {
        "&:after": {
            borderBottomColor: novel_logiks/* successColor.0 */.nq[0]
        }
    },
    labelRoot: {
        ...novel_logiks/* defaultFont */.Df,
        color: novel_logiks/* grayColor.12 */.X_[12] + " !important",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "1.42857",
        top: "10px",
        letterSpacing: "unset",
        "& + $underline": {
            marginTop: "0px"
        }
    },
    labelRootError: {
        color: novel_logiks/* dangerColor.0 */.E7[0] + " !important"
    },
    labelRootSuccess: {
        color: novel_logiks/* successColor.0 */.nq[0] + " !important"
    },
    feedback: {
        position: "absolute",
        bottom: "4px",
        right: "0",
        zIndex: "2",
        display: "block",
        width: "24px",
        height: "24px",
        textAlign: "center",
        pointerEvents: "none"
    },
    formControl: {
        margin: "0 0 17px 0",
        paddingTop: "27px",
        position: "relative",
        "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
            color: novel_logiks/* grayColor.13 */.X_[13]
        }
    },
    whiteUnderline: {
        "&:hover:not($disabled):before,&:before": {
            borderBottomColor: novel_logiks/* whiteColor */.zQ
        },
        "&:after": {
            borderBottomColor: novel_logiks/* whiteColor */.zQ
        }
    },
    input: {
        color: novel_logiks/* grayColor.13 */.X_[13],
        height: "unset",
        "&,&::placeholder": {
            fontSize: "14px",
            fontFamily: "Montserrat",
            fontWeight: "400",
            lineHeight: "1.42857",
            opacity: "1"
        },
        "&::placeholder": {
            color: novel_logiks/* grayColor.12 */.X_[12]
        }
    },
    whiteInput: {
        "&,&::placeholder": {
            color: novel_logiks/* whiteColor */.zQ,
            opacity: "1"
        }
    }
};
/* harmony default export */ const components_customInputStyle = (customInputStyle);

;// CONCATENATED MODULE: ./components/CustomInput/CustomInput.js


// nodejs library to set properties for components

// nodejs library that concatenates classes





// @mui/icons-material


// core components

const useStyles = makeStyles_default()(components_customInputStyle);
function CustomInput(props) {
    const { formControlProps , labelText , id , labelProps , inputProps , error , white , inputRootCustomClasses , success  } = props;
    const classes = useStyles();
    const labelClasses = external_classnames_default()({
        [" " + classes.labelRootError]: error,
        [" " + classes.labelRootSuccess]: success && !error
    });
    const underlineClasses = external_classnames_default()({
        [classes.underlineError]: error,
        [classes.underlineSuccess]: success && !error,
        [classes.underline]: true,
        [classes.whiteUnderline]: white
    });
    const marginTop = external_classnames_default()({
        [inputRootCustomClasses]: inputRootCustomClasses !== undefined
    });
    const inputClasses = external_classnames_default()({
        [classes.input]: true,
        [classes.whiteInput]: white
    });
    var formControlClasses;
    if (formControlProps !== undefined) {
        formControlClasses = external_classnames_default()(formControlProps.className, classes.formControl);
    } else {
        formControlClasses = classes.formControl;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
        ...formControlProps,
        className: formControlClasses,
        children: [
            labelText !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                className: classes.labelRoot + " " + labelClasses,
                htmlFor: id,
                ...labelProps,
                children: labelText
            }) : null,
            /*#__PURE__*/ jsx_runtime_.jsx((Input_default()), {
                classes: {
                    input: inputClasses,
                    root: marginTop,
                    disabled: classes.disabled,
                    underline: underlineClasses
                },
                id: id,
                ...inputProps
            }),
            error ? /*#__PURE__*/ jsx_runtime_.jsx((Clear_default()), {
                className: classes.feedback + " " + classes.labelRootError
            }) : success ? /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                className: classes.feedback + " " + classes.labelRootSuccess
            }) : null
        ]
    });
};
CustomInput.propTypes = {
    labelText: (external_prop_types_default()).node,
    labelProps: (external_prop_types_default()).object,
    id: (external_prop_types_default()).string,
    inputProps: (external_prop_types_default()).object,
    formControlProps: (external_prop_types_default()).object,
    inputRootCustomClasses: (external_prop_types_default()).string,
    error: (external_prop_types_default()).bool,
    success: (external_prop_types_default()).bool,
    white: (external_prop_types_default()).bool
};

;// CONCATENATED MODULE: external "@mui/material/LinearProgress"
const LinearProgress_namespaceObject = require("@mui/material/LinearProgress");
var LinearProgress_default = /*#__PURE__*/__webpack_require__.n(LinearProgress_namespaceObject);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/components/customLinearProgressStyle.js

const customLinearProgressStyle = {
    root: {
        height: "4px",
        marginBottom: "20px",
        overflow: "hidden"
    },
    bar: {
        height: "4px"
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
        backgroundColor: novel_logiks/* grayColor.0 */.X_[0]
    },
    primaryBackground: {
        background: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* primaryColor.0 */.lr[0]) + ", 0.2)"
    },
    warningBackground: {
        background: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* warningColor.0 */.MA[0]) + ", 0.2)"
    },
    dangerBackground: {
        background: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* dangerColor.0 */.E7[0]) + ", 0.2)"
    },
    successBackground: {
        background: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* successColor.0 */.nq[0]) + ", 0.2)"
    },
    infoBackground: {
        background: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* infoColor.0 */.bE[0]) + ", 0.2)"
    },
    roseBackground: {
        background: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* roseColor.0 */.An[0]) + ", 0.2)"
    },
    grayBackground: {
        background: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* grayColor.6 */.X_[6]) + ", 0.2)"
    }
};
/* harmony default export */ const components_customLinearProgressStyle = (customLinearProgressStyle);

;// CONCATENATED MODULE: ./components/CustomLinearProgress/CustomLinearProgress.js


// nodejs library to set properties for components




const CustomLinearProgress_useStyles = makeStyles_default()(components_customLinearProgressStyle);
function CustomLinearProgress(props) {
    const { color , ...rest } = props;
    const classes = CustomLinearProgress_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx((LinearProgress_default()), {
        ...rest,
        classes: {
            root: classes.root + " " + classes[color + "Background"],
            bar: classes.bar + " " + classes[color]
        }
    });
};
CustomLinearProgress.defaultProps = {
    color: "gray"
};
CustomLinearProgress.propTypes = {
    color: external_prop_types_default().oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ])
};

// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/components/paginationStyle.js

const paginationStyle = {
    pagination: {
        display: "flex",
        paddingLeft: "0",
        listStyle: "none",
        borderRadius: "0.25rem"
    },
    paginationItem: {
        display: "inline"
    },
    paginationLink: {
        ":first-of-type": {
            marginleft: "0"
        },
        letterSpacing: "unset",
        border: "0",
        borderRadius: "30px !important",
        transition: "all .3s",
        padding: "0px 11px",
        margin: "0 3px",
        minWidth: "30px",
        height: "30px",
        minHeight: "auto",
        lineHeight: "30px",
        fontWeight: "400",
        fontSize: "12px",
        textTransform: "uppercase",
        background: "transparent",
        position: "relative",
        float: "left",
        textDecoration: "none",
        boxSizing: "border-box",
        "&,&:hover,&:focus": {
            color: novel_logiks/* grayColor.0 */.X_[0]
        },
        "&:hover,&:focus": {
            zIndex: "3",
            backgroundColor: novel_logiks/* grayColor.2 */.X_[2],
            borderColor: novel_logiks/* grayColor.6 */.X_[6]
        },
        "&:hover": {
            cursor: "pointer"
        }
    },
    primary: {
        "&,&:hover,&:focus": {
            backgroundColor: novel_logiks/* primaryColor.0 */.lr[0],
            borderColor: novel_logiks/* primaryColor.0 */.lr[0],
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 4px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* primaryColor.0 */.lr[0]) + ", 0.14), 0 1px 10px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* primaryColor.0 */.lr[0]) + ", 0.12), 0 2px 4px -1px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* primaryColor.0 */.lr[0]) + ", 0.2)"
        },
        "&:hover,&:focus": {
            zIndex: "2",
            cursor: "default"
        }
    },
    info: {
        "&,&:hover,&:focus": {
            backgroundColor: novel_logiks/* infoColor.0 */.bE[0],
            borderColor: novel_logiks/* infoColor.0 */.bE[0],
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 4px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* infoColor.0 */.bE[0]) + ", 0.14), 0 1px 10px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* infoColor.0 */.bE[0]) + ", 0.12), 0 2px 4px -1px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* infoColor.0 */.bE[0]) + ", 0.2)"
        },
        "&:hover,&:focus": {
            zIndex: "2",
            cursor: "default"
        }
    },
    success: {
        "&,&:hover,&:focus": {
            backgroundColor: novel_logiks/* successColor.0 */.nq[0],
            borderColor: novel_logiks/* successColor.0 */.nq[0],
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 4px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* successColor.0 */.nq[0]) + ", 0.14), 0 1px 10px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* successColor.0 */.nq[0]) + ", 0.12), 0 2px 4px -1px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* successColor.0 */.nq[0]) + ", 0.2)"
        },
        "&:hover,&:focus": {
            zIndex: "2",
            cursor: "default"
        }
    },
    warning: {
        "&,&:hover,&:focus": {
            backgroundColor: novel_logiks/* warningColor.0 */.MA[0],
            borderColor: novel_logiks/* warningColor.0 */.MA[0],
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 4px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* warningColor.0 */.MA[0]) + ", 0.14), 0 1px 10px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* warningColor.0 */.MA[0]) + ", 0.12), 0 2px 4px -1px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* warningColor.0 */.MA[0]) + ", 0.2)"
        },
        "&:hover,&:focus": {
            zIndex: "2",
            cursor: "default"
        }
    },
    danger: {
        "&,&:hover,&:focus": {
            backgroundColor: novel_logiks/* dangerColor.0 */.E7[0],
            borderColor: novel_logiks/* dangerColor.0 */.E7[0],
            color: novel_logiks/* whiteColor */.zQ,
            boxShadow: "0 4px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* dangerColor.0 */.E7[0]) + ", 0.14), 0 1px 10px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* dangerColor.0 */.E7[0]) + ", 0.12), 0 2px 4px -1px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* dangerColor.0 */.E7[0]) + ", 0.2)"
        },
        "&:hover,&:focus": {
            zIndex: "2",
            cursor: "default"
        }
    },
    disabled: {
        "&,&:hover,&:focus": {
            color: novel_logiks/* grayColor.10 */.X_[10],
            cursor: "not-allowed",
            backgroundColor: novel_logiks/* whiteColor */.zQ,
            borderColor: novel_logiks/* grayColor.6 */.X_[6]
        }
    }
};
/* harmony default export */ const components_paginationStyle = (paginationStyle);

;// CONCATENATED MODULE: ./components/Pagination/Pagination.js


// nodejs library to set properties for components

// nodejs library that concatenates classes




const Pagination_useStyles = makeStyles_default()(components_paginationStyle);
function Pagination(props) {
    const { pages , color , className  } = props;
    const classes = Pagination_useStyles();
    const paginationClasses = external_classnames_default()(classes.pagination, className);
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: paginationClasses,
        children: pages.map((prop, key)=>{
            const paginationLink = external_classnames_default()({
                [classes.paginationLink]: true,
                [classes[color]]: prop.active,
                [classes.disabled]: prop.disabled
            });
            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: classes.paginationItem,
                children: prop.onClick !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    onClick: prop.onClick,
                    className: paginationLink,
                    disabled: prop.disabled,
                    children: prop.text
                }) : /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    onClick: ()=>alert("you've clicked " + prop.text),
                    className: paginationLink,
                    disabled: prop.disabled,
                    children: prop.text
                })
            }, key);
        })
    });
};
Pagination.defaultProps = {
    color: "primary"
};
Pagination.propTypes = {
    pages: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        active: (external_prop_types_default()).bool,
        disabled: (external_prop_types_default()).bool,
        text: external_prop_types_default().oneOfType([
            (external_prop_types_default()).number,
            (external_prop_types_default()).string
        ]).isRequired,
        onClick: (external_prop_types_default()).func
    })).isRequired,
    color: external_prop_types_default().oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger"
    ]),
    className: (external_prop_types_default()).string
};

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



const Badge_useStyles = makeStyles_default()(components_badgeStyle);
function Badge(props) {
    const { color , children , className  } = props;
    const classes = Badge_useStyles();
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

;// CONCATENATED MODULE: external "@mui/material/MenuList"
const MenuList_namespaceObject = require("@mui/material/MenuList");
var MenuList_default = /*#__PURE__*/__webpack_require__.n(MenuList_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ClickAwayListener"
const ClickAwayListener_namespaceObject = require("@mui/material/ClickAwayListener");
var ClickAwayListener_default = /*#__PURE__*/__webpack_require__.n(ClickAwayListener_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1168);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
;// CONCATENATED MODULE: external "@mui/material/Grow"
const Grow_namespaceObject = require("@mui/material/Grow");
var Grow_default = /*#__PURE__*/__webpack_require__.n(Grow_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Divider"
const Divider_namespaceObject = require("@mui/material/Divider");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Popper"
const Popper_namespaceObject = require("@mui/material/Popper");
var Popper_default = /*#__PURE__*/__webpack_require__.n(Popper_namespaceObject);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/components/customDropdownStyle.js

const customDropdownStyle = (theme)=>({
        popperClose: {
            pointerEvents: "none",
            display: "none !important"
        },
        popperNav: {
            [theme.breakpoints.down("md")]: {
                "&, &$popperResponsive": {
                    position: "static !important",
                    left: "unset !important",
                    top: "unset !important",
                    transform: "none !important",
                    willChange: "none !important",
                    "& > div": {
                        boxShadow: "none !important",
                        marginLeft: "1.5rem",
                        marginRight: "1.5rem",
                        transition: "none !important",
                        marginTop: "0px !important",
                        marginBottom: "5px !important",
                        padding: "0px !important"
                    }
                }
            }
        },
        manager: {
            "& > div > button:first-child > span:first-child, & > div > a:first-child > span:first-child": {
                width: "100%"
            }
        },
        innerManager: {
            display: "block",
            "& > div > button,& > div > a": {
                margin: "0px !important",
                color: "inherit !important",
                padding: "10px 20px !important",
                "& > span:first-child": {
                    width: "100%",
                    justifyContent: "flex-start"
                }
            }
        },
        target: {
            "& > button:first-child > span:first-child, & > a:first-child > span:first-child": {
                display: "inline-block"
            },
            "& $caret": {
                marginLeft: "0px"
            }
        },
        dropdown: {
            borderRadius: "3px",
            border: "0",
            boxShadow: "0 2px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.26)",
            top: "100%",
            zIndex: "1000",
            minWidth: "160px",
            padding: "5px 0",
            margin: "2px 0 0",
            fontSize: "14px",
            textAlign: "left",
            listStyle: "none",
            backgroundColor: novel_logiks/* whiteColor */.zQ,
            backgroundClip: "padding-box"
        },
        menuList: {
            padding: "0"
        },
        popperResponsive: {
            zIndex: "1200",
            position: "absolute !important",
            [theme.breakpoints.down("md")]: {
                zIndex: "1640",
                float: "none",
                width: "auto",
                marginTop: "0",
                backgroundColor: "transparent",
                border: "0",
                boxShadow: "none",
                color: "black"
            }
        },
        dropdownItem: {
            ...novel_logiks/* defaultFont */.Df,
            fontSize: "13px",
            padding: "10px 20px",
            margin: "0 5px",
            borderRadius: "2px",
            position: "relative",
            transition: "all 150ms linear",
            display: "block",
            clear: "both",
            fontWeight: "400",
            height: "100%",
            color: novel_logiks/* grayColor.8 */.X_[8],
            whiteSpace: "nowrap",
            minHeight: "unset"
        },
        darkHover: {
            "&:hover": {
                boxShadow: "0 4px 20px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.14), 0 7px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* grayColor.9 */.X_[9]) + ", 0.4)",
                backgroundColor: novel_logiks/* grayColor.9 */.X_[9],
                color: novel_logiks/* whiteColor */.zQ
            }
        },
        primaryHover: {
            "&:hover": {
                backgroundColor: novel_logiks/* primaryColor.0 */.lr[0],
                color: novel_logiks/* whiteColor */.zQ,
                ...novel_logiks/* primaryBoxShadow */.kY
            }
        },
        infoHover: {
            "&:hover": {
                backgroundColor: novel_logiks/* infoColor.0 */.bE[0],
                color: novel_logiks/* whiteColor */.zQ,
                ...novel_logiks/* infoBoxShadow */.ur
            }
        },
        successHover: {
            "&:hover": {
                backgroundColor: novel_logiks/* successColor.0 */.nq[0],
                color: novel_logiks/* whiteColor */.zQ,
                ...novel_logiks/* successBoxShadow */.TI
            }
        },
        warningHover: {
            "&:hover": {
                backgroundColor: novel_logiks/* warningColor.0 */.MA[0],
                color: novel_logiks/* whiteColor */.zQ,
                ...novel_logiks/* warningBoxShadow */.D6
            }
        },
        dangerHover: {
            "&:hover": {
                backgroundColor: novel_logiks/* dangerColor.0 */.E7[0],
                color: novel_logiks/* whiteColor */.zQ,
                ...novel_logiks/* dangerBoxShadow */.iW
            }
        },
        roseHover: {
            "&:hover": {
                backgroundColor: novel_logiks/* roseColor.0 */.An[0],
                color: novel_logiks/* whiteColor */.zQ,
                ...novel_logiks/* roseBoxShadow */.cq
            }
        },
        dropdownItemRTL: {
            textAlign: "right"
        },
        dropdownDividerItem: {
            margin: "5px 0",
            backgroundColor: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12)",
            height: "1px",
            overflow: "hidden"
        },
        buttonIcon: {
            width: "20px",
            height: "20px"
        },
        caret: {
            transition: "all 150ms ease-in",
            display: "inline-block",
            width: "0",
            height: "0",
            marginLeft: "4px",
            verticalAlign: "middle",
            borderTop: "4px solid",
            borderRight: "4px solid transparent",
            borderLeft: "4px solid transparent"
        },
        caretActive: {
            transform: "rotate(180deg)"
        },
        caretDropup: {
            transform: "rotate(180deg)"
        },
        caretRTL: {
            marginRight: "4px"
        },
        dropdownHeader: {
            display: "block",
            padding: "0.1875rem 1.25rem",
            fontSize: "0.75rem",
            lineHeight: "1.428571",
            color: novel_logiks/* grayColor.10 */.X_[10],
            whiteSpace: "nowrap",
            fontWeight: "inherit",
            marginTop: "10px",
            minHeight: "24px",
            "&:hover,&:focus": {
                backgroundColor: "transparent",
                cursor: "auto"
            }
        },
        noLiPadding: {
            padding: "0"
        }
    });
/* harmony default export */ const components_customDropdownStyle = (customDropdownStyle);

;// CONCATENATED MODULE: ./components/CustomDropdown/CustomDropdown.js


// nodejs library that concatenates classes

// nodejs library to set properties for components









// core components


const CustomDropdown_useStyles = makeStyles_default()(components_customDropdownStyle);
function CustomDropdown(props) {
    const [anchorEl, setAnchorEl] = external_react_default().useState(null);
    const handleClick = (event)=>{
        if (anchorEl && anchorEl.contains(event.target)) {
            setAnchorEl(null);
        } else {
            setAnchorEl(event.currentTarget);
        }
    };
    const handleClose = (event)=>{
        if (anchorEl.contains(event.target)) {
            return;
        }
        setAnchorEl(null);
    };
    const handleCloseMenu = (param)=>{
        setAnchorEl(null);
        if (props && props.onClick) {
            props.onClick(param);
        }
    };
    const { buttonText , buttonIcon , dropdownList , buttonProps , dropup , dropdownHeader , caret , hoverColor , dropPlacement , rtlActive , noLiPadding , innerDropDown , navDropdown  } = props;
    const classes = CustomDropdown_useStyles();
    const caretClasses = external_classnames_default()({
        [classes.caret]: true,
        [classes.caretDropup]: dropup && !anchorEl,
        [classes.caretActive]: Boolean(anchorEl) && !dropup,
        [classes.caretRTL]: rtlActive
    });
    const dropdownItem = external_classnames_default()({
        [classes.dropdownItem]: true,
        [classes[hoverColor + "Hover"]]: true,
        [classes.noLiPadding]: noLiPadding,
        [classes.dropdownItemRTL]: rtlActive
    });
    const dropDownMenu = /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuList_default()), {
        role: "menu",
        className: classes.menuList,
        children: [
            dropdownHeader !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                onClick: ()=>handleCloseMenu(dropdownHeader),
                className: classes.dropdownHeader,
                children: dropdownHeader
            }) : null,
            dropdownList.map((prop, key)=>{
                if (prop.divider) {
                    return /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                        onClick: ()=>handleCloseMenu("divider"),
                        className: classes.dropdownDividerItem
                    }, key);
                } else if (prop.props !== undefined && prop.props["data-ref"] === "multi") {
                    return /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                        className: dropdownItem,
                        style: {
                            overflow: "visible",
                            padding: 0
                        },
                        children: prop
                    }, key);
                }
                return /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                    onClick: ()=>handleCloseMenu(prop),
                    className: dropdownItem,
                    children: prop
                }, key);
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: innerDropDown ? classes.innerManager : classes.manager,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: buttonText !== undefined ? "" : classes.target,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                    "aria-label": "Notifications",
                    "aria-owns": anchorEl ? "menu-list" : null,
                    "aria-haspopup": "true",
                    ...buttonProps,
                    onClick: handleClick,
                    children: [
                        buttonIcon !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx(props.buttonIcon, {
                            className: classes.buttonIcon
                        }) : null,
                        buttonText !== undefined ? buttonText : null,
                        caret ? /*#__PURE__*/ jsx_runtime_.jsx("b", {
                            className: caretClasses
                        }) : null
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Popper_default()), {
                open: Boolean(anchorEl),
                anchorEl: anchorEl,
                transition: true,
                disablePortal: true,
                placement: dropPlacement,
                className: external_classnames_default()({
                    [classes.popperClose]: !anchorEl,
                    [classes.popperResponsive]: true,
                    [classes.popperNav]: Boolean(anchorEl) && navDropdown
                }),
                children: ()=>/*#__PURE__*/ jsx_runtime_.jsx((Grow_default()), {
                        in: Boolean(anchorEl),
                        id: "menu-list",
                        style: dropup ? {
                            transformOrigin: "0 100% 0"
                        } : {
                            transformOrigin: "0 0 0"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
                            className: classes.dropdown,
                            children: innerDropDown ? dropDownMenu : /*#__PURE__*/ jsx_runtime_.jsx((ClickAwayListener_default()), {
                                onClickAway: handleClose,
                                children: dropDownMenu
                            })
                        })
                    })
            })
        ]
    });
};
CustomDropdown.defaultProps = {
    caret: true,
    dropup: false,
    hoverColor: "primary"
};
CustomDropdown.propTypes = {
    hoverColor: external_prop_types_default().oneOf([
        "dark",
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose"
    ]),
    buttonText: (external_prop_types_default()).node,
    buttonIcon: (external_prop_types_default()).object,
    dropdownList: (external_prop_types_default()).array,
    buttonProps: (external_prop_types_default()).object,
    dropup: (external_prop_types_default()).bool,
    dropdownHeader: (external_prop_types_default()).node,
    rtlActive: (external_prop_types_default()).bool,
    caret: (external_prop_types_default()).bool,
    dropPlacement: external_prop_types_default().oneOf([
        "bottom",
        "top",
        "right",
        "left",
        "bottom-start",
        "bottom-end",
        "top-start",
        "top-end",
        "right-start",
        "right-end",
        "left-start",
        "left-end"
    ]),
    noLiPadding: (external_prop_types_default()).bool,
    innerDropDown: (external_prop_types_default()).bool,
    navDropdown: (external_prop_types_default()).bool,
    // This is a function that returns the clicked menu item
    onClick: (external_prop_types_default()).func
};

;// CONCATENATED MODULE: ./styles/jss/novel-logiks/customCheckboxRadioSwitchStyle.js

const customCheckboxRadioSwitch = {
    checkRoot: {
        padding: "14px",
        "&:hover": {
            backgroundColor: "unset !important"
        }
    },
    radioRoot: {
        padding: "16px",
        "&:hover": {
            backgroundColor: "unset !important"
        }
    },
    labelRoot: {
        marginLeft: "-14px"
    },
    checkboxAndRadio: {
        position: "relative",
        display: "block",
        marginTop: "10px",
        marginBottom: "10px"
    },
    checkboxAndRadioHorizontal: {
        position: "relative",
        display: "block",
        "&:first-child": {
            marginTop: "10px"
        },
        "&:not(:first-child)": {
            marginTop: "-14px"
        },
        marginTop: "0",
        marginBottom: "0"
    },
    checked: {
        color: novel_logiks/* primaryColor.0 */.lr[0] + "!important"
    },
    checkedIcon: {
        width: "20px",
        height: "20px",
        border: "1px solid rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.84)",
        borderRadius: "3px"
    },
    uncheckedIcon: {
        width: "0px",
        height: "0px",
        padding: "9px",
        border: "1px solid rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", .54)",
        borderRadius: "3px"
    },
    disabledCheckboxAndRadio: {
        "& $checkedIcon,& $uncheckedIcon,& $radioChecked,& $radioUnchecked": {
            borderColor: novel_logiks/* blackColor */.FT,
            opacity: "0.26",
            color: novel_logiks/* blackColor */.FT
        }
    },
    label: {
        cursor: "pointer",
        paddingLeft: "0",
        color: novel_logiks/* grayColor.12 */.X_[12],
        fontSize: "14px",
        lineHeight: "1.428571429",
        fontWeight: "400",
        display: "inline-flex",
        transition: "0.3s ease all",
        letterSpacing: "unset"
    },
    labelHorizontal: {
        color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.26)",
        cursor: "pointer",
        display: "inline-flex",
        fontSize: "14px",
        lineHeight: "1.428571429",
        fontWeight: "400",
        paddingTop: "39px",
        marginRight: "0",
        "@media (min-width: 992px)": {
            float: "right"
        }
    },
    labelHorizontalRadioCheckbox: {
        paddingTop: "22px"
    },
    labelLeftHorizontal: {
        color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.26)",
        cursor: "pointer",
        display: "inline-flex",
        fontSize: "14px",
        lineHeight: "1.428571429",
        fontWeight: "400",
        paddingTop: "22px",
        marginRight: "0"
    },
    labelError: {
        color: novel_logiks/* dangerColor.0 */.E7[0]
    },
    radio: {
        color: novel_logiks/* primaryColor.0 */.lr[0] + "!important"
    },
    radioChecked: {
        width: "16px",
        height: "16px",
        border: "1px solid " + novel_logiks/* primaryColor.0 */.lr[0],
        borderRadius: "50%"
    },
    radioUnchecked: {
        width: "0px",
        height: "0px",
        padding: "7px",
        border: "1px solid rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", .54)",
        borderRadius: "50%"
    },
    inlineChecks: {
        marginTop: "8px"
    },
    iconCheckbox: {
        height: "116px",
        width: "116px",
        color: novel_logiks/* grayColor.0 */.X_[0],
        "& > span:first-child": {
            borderWidth: "4px",
            borderStyle: "solid",
            borderColor: novel_logiks/* grayColor.17 */.X_[17],
            textAlign: "center",
            verticalAlign: "middle",
            borderRadius: "50%",
            color: "inherit",
            margin: "0 auto 20px",
            transition: "all 0.2s"
        },
        "&:hover": {
            color: novel_logiks/* roseColor.0 */.An[0],
            "& > span:first-child": {
                borderColor: novel_logiks/* roseColor.0 */.An[0]
            }
        }
    },
    iconCheckboxChecked: {
        color: novel_logiks/* roseColor.0 */.An[0],
        "& > span:first-child": {
            borderColor: novel_logiks/* roseColor.0 */.An[0]
        }
    },
    iconCheckboxIcon: {
        fontSize: "40px",
        lineHeight: "111px"
    },
    switchBase: {
        color: novel_logiks/* primaryColor.0 */.lr[0] + "!important"
    },
    switchIcon: {
        boxShadow: "0 1px 3px 1px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.4)",
        color: novel_logiks/* whiteColor */.zQ + "  !important",
        border: "1px solid rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", .54)"
    },
    switchIconChecked: {
        borderColor: novel_logiks/* primaryColor.0 */.lr[0],
        transform: "translateX(0px)!important"
    },
    switchBar: {
        width: "30px",
        height: "15px",
        backgroundColor: "rgb(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* grayColor.24 */.X_[24]) + ")",
        borderRadius: "15px",
        opacity: "0.7!important"
    },
    switchChecked: {
        "& + $switchBar": {
            backgroundColor: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* primaryColor.0 */.lr[0]) + ", 1) !important"
        },
        "& $switchIcon": {
            borderColor: novel_logiks/* primaryColor.0 */.lr[0]
        }
    }
};
/* harmony default export */ const customCheckboxRadioSwitchStyle = (customCheckboxRadioSwitch);

;// CONCATENATED MODULE: ./styles/jss/novel-logiks/customSelectStyle.js

const customSelectStyle = {
    select: {
        padding: "12px 0 7px",
        fontSize: ".75rem",
        fontWeight: "400",
        lineHeight: "1.42857",
        textDecoration: "none",
        textTransform: "uppercase",
        color: novel_logiks/* grayColor.1 */.X_[1],
        letterSpacing: "0",
        "&:focus": {
            backgroundColor: "transparent"
        },
        "&[aria-owns] + input + svg": {
            transform: "rotate(180deg)"
        },
        "& + input + svg": {
            transition: "all 300ms linear"
        }
    },
    selectFormControl: {
        margin: "10px 1px 10px 0px !important",
        "& > div": {
            "&:before": {
                borderBottomWidth: "1px !important",
                borderBottomColor: novel_logiks/* grayColor.11 */.X_[11] + " !important"
            },
            "&:after": {
                borderBottomColor: novel_logiks/* primaryColor.0 */.lr[0] + "!important"
            }
        }
    },
    selectLabel: {
        fontSize: "12px",
        textTransform: "uppercase",
        color: novel_logiks/* grayColor.1 */.X_[1] + " !important",
        top: "8px"
    },
    selectMenu: {
        "& > div > ul": {
            border: "0",
            padding: "5px 0",
            margin: "0",
            boxShadow: "none",
            minWidth: "100%",
            borderRadius: "4px",
            boxSizing: "border-box",
            display: "block",
            fontSize: "14px",
            textAlign: "left",
            listStyle: "none",
            backgroundColor: novel_logiks/* whiteColor */.zQ,
            backgroundClip: "padding-box"
        },
        "& $selectPaper $selectMenuItemSelectedMultiple": {
            backgroundColor: "inherit"
        }
    },
    selectMenuItem: {
        fontSize: "13px",
        padding: "10px 20px",
        margin: "0 5px",
        borderRadius: "2px",
        transition: "all 150ms linear",
        display: "block",
        clear: "both",
        fontWeight: "400",
        lineHeight: "2",
        whiteSpace: "nowrap",
        color: novel_logiks/* grayColor.8 */.X_[8],
        paddingRight: "30px",
        "&:hover": {
            backgroundColor: novel_logiks/* primaryColor.0 */.lr[0],
            color: novel_logiks/* whiteColor */.zQ,
            ...novel_logiks/* primaryBoxShadow */.kY
        }
    },
    selectMenuItemSelected: {
        backgroundColor: novel_logiks/* primaryColor.0 */.lr[0] + "!important",
        color: novel_logiks/* whiteColor */.zQ
    },
    selectMenuItemSelectedMultiple: {
        "&:hover": {
            backgroundColor: novel_logiks/* primaryColor.0 */.lr[0] + "!important",
            color: novel_logiks/* whiteColor */.zQ,
            ...novel_logiks/* primaryBoxShadow */.kY,
            "&:after": {
                color: novel_logiks/* whiteColor */.zQ
            }
        },
        "&:after": {
            top: "16px",
            right: "12px",
            width: "12px",
            height: "5px",
            borderLeft: "2px solid currentColor",
            transform: "rotate(-45deg)",
            opacity: "1",
            color: novel_logiks/* grayColor.1 */.X_[1],
            position: "absolute",
            content: "''",
            borderBottom: "2px solid currentColor",
            transition: "opacity 90ms cubic-bezier(0,0,.2,.1)"
        }
    },
    selectPaper: {
        boxSizing: "borderBox",
        borderRadius: "4px",
        padding: "0",
        minWidth: "100%",
        display: "block",
        border: "0",
        boxShadow: "0 2px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.26)",
        backgroundClip: "padding-box",
        margin: "2px 0 0",
        fontSize: "14px",
        textAlign: "left",
        listStyle: "none",
        backgroundColor: "transparent",
        maxHeight: "266px"
    }
};
/* harmony default export */ const novel_logiks_customSelectStyle = (customSelectStyle);

;// CONCATENATED MODULE: ./styles/jss/novel-logiks/pages/componentsSections/basicsStyle.js



const basicsStyle = {
    mlAuto: novel_logiks/* mlAuto */.hU,
    mrAuto: novel_logiks/* mrAuto */.kq,
    container: novel_logiks/* container */.nC,
    ...novel_logiks_customSelectStyle,
    ...customCheckboxRadioSwitchStyle,
    sections: {
        padding: "70px 0"
    },
    title: {
        ...novel_logiks/* title */.TN,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    space50: {
        height: "50px",
        display: "block"
    },
    space70: {
        height: "70px",
        display: "block"
    },
    icons: {
        width: "17px",
        height: "17px",
        color: novel_logiks/* whiteColor */.zQ
    }
};
/* harmony default export */ const componentsSections_basicsStyle = (basicsStyle);

;// CONCATENATED MODULE: ./pages-sections/components/SectionBasics.js


// plugin that creates slider

// react component plugin for creating beatiful tags on an input












// @mui/icons-material




// core components









const SectionBasics_useStyles = makeStyles_default()(componentsSections_basicsStyle);
function SectionBasics() {
    const [checked, setChecked] = external_react_default().useState([
        24,
        22
    ]);
    const [selectedEnabled, setSelectedEnabled] = external_react_default().useState("b");
    const [checkedA, setCheckedA] = external_react_default().useState(true);
    const [checkedB, setCheckedB] = external_react_default().useState(false);
    const [simpleSelect, setSimpleSelect] = external_react_default().useState("");
    const [multipleSelect, setMultipleSelect] = external_react_default().useState([]);
    const [tags, setTags] = external_react_default().useState([
        "amsterdam",
        "washington",
        "sydney",
        "beijing", 
    ]);
    external_react_default().useEffect(()=>{
        if (!document.getElementById("sliderRegular").classList.contains("noUi-target")) {
            external_nouislider_default().create(document.getElementById("sliderRegular"), {
                start: [
                    40
                ],
                connect: [
                    true,
                    false
                ],
                step: 1,
                range: {
                    min: 0,
                    max: 100
                }
            });
        }
        if (!document.getElementById("sliderDouble").classList.contains("noUi-target")) {
            external_nouislider_default().create(document.getElementById("sliderDouble"), {
                start: [
                    20,
                    60
                ],
                connect: [
                    false,
                    true,
                    false
                ],
                step: 1,
                range: {
                    min: 0,
                    max: 100
                }
            });
        }
        return function cleanup() {};
    });
    const handleToggle = (value)=>{
        const currentIndex = checked.indexOf(value);
        const newChecked = [
            ...checked
        ];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    const handleSimple = (event)=>{
        setSimpleSelect(event.target.value);
    };
    const handleMultiple = (event)=>{
        setMultipleSelect(event.target.value);
    };
    const handleTags = (regularTags)=>{
        setTags(regularTags);
    };
    const classes = SectionBasics_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.sections,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.title,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Basic Elements"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "buttons",
                    className: "cd-section",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.title,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                children: [
                                    "Buttons",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                        children: "Pick your style"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            justifyContent: "center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 8,
                                md: 8,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "primary",
                                        children: "Default"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "primary",
                                        round: true,
                                        children: "round"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                        color: "primary",
                                        round: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {
                                                className: classes.icons
                                            }),
                                            " with icon"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "primary",
                                        justIcon: true,
                                        round: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "primary",
                                        simple: true,
                                        children: "simple"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.title,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                    children: "Pick your size"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            justifyContent: "center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 8,
                                md: 8,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "primary",
                                        size: "sm",
                                        children: "Small"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "primary",
                                        children: "Regular"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "primary",
                                        size: "lg",
                                        children: "Large"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.title,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                    children: "Pick your color"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            justifyContent: "center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 8,
                                md: 8,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        children: "Default"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "primary",
                                        children: "Primary"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "info",
                                        children: "Info"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "success",
                                        children: "Success"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "warning",
                                        children: "Warning"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "danger",
                                        children: "Danger"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "rose",
                                        children: "Rose"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.space50
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "social-buttons",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.title,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Social Buttons"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 6,
                                    md: 6,
                                    lg: 3,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                children: "Default"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "twitter",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                }),
                                                " Connect with twitter"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "facebook",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook-square"
                                                }),
                                                " Share \xb7 2.2k"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "instagram",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-instagram"
                                                }),
                                                " Follow on instagram"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "google",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-google-plus-square"
                                                }),
                                                " Share on Google+"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "linkedin",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-linkedin"
                                                }),
                                                " Connect with linkedin"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "pinterest",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-pinterest"
                                                }),
                                                " Pint it \xb7 212"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "youtube",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-youtube"
                                                }),
                                                " View on youtube"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "tumblr",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-tumblr-square"
                                                }),
                                                " Repost"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "github",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-github"
                                                }),
                                                " Connect with github"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "behance",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-behance-square"
                                                }),
                                                " Follow us"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "dribbble",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-dribbble"
                                                }),
                                                " Find us on dribbble"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "reddit",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-reddit"
                                                }),
                                                " Repost \xb7 232"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 6,
                                    sm: 3,
                                    md: 3,
                                    lg: 1,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                children: "\xa0"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "twitter",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "facebook",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-facebook-f"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "instagram",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-instagram"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "google",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-google"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "linkedin",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-linkedin-in"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "pinterest",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-pinterest"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "youtube",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-youtube"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "tumblr",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-tumblr"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "github",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-github"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "behance",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-behance"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "dribbble",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-dribbble"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "reddit",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-reddit"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 6,
                                    sm: 2,
                                    md: 2,
                                    lg: 1,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                children: "\xa0"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "twitter",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "facebook",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-facebook-f"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "instagram",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-instagram"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "google",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-google"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "linkedin",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-linkedin-in"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "pinterest",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-pinterest"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "youtube",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-youtube"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "tumblr",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-tumblr"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "github",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-github"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "behance",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-behance"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "dribbble",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-dribbble"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "reddit",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-reddit"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 4,
                                    sm: 3,
                                    md: 3,
                                    lg: 1,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                children: "Simple"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "twitter",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "facebook",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-facebook-f"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "instagram",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-instagram"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "google",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-google"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "linkedin",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-linkedin-in"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "pinterest",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-pinterest"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "youtube",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-youtube"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "tumblr",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-tumblr"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "github",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-github"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "behance",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-behance"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "dribbble",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-dribbble"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "reddit",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-reddit"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 6,
                                    md: 6,
                                    lg: 3,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                children: "\xa0"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "twitter",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                }),
                                                " Connect with twitter"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "facebook",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook-square"
                                                }),
                                                " Share \xb7 2.2k"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "instagram",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-instagram"
                                                }),
                                                " Follow on instagram"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "google",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-google-plus-square"
                                                }),
                                                " Share on Google+"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "linkedin",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-linkedin"
                                                }),
                                                " Connect with linkedin"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "pinterest",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-pinterest"
                                                }),
                                                " Pint it \xb7 212"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "youtube",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-youtube"
                                                }),
                                                " View on youtube"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "tumblr",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-tumblr-square"
                                                }),
                                                " Repost"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "github",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-github"
                                                }),
                                                " Connect with github"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "behance",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-behance-square"
                                                }),
                                                " Follow us"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "dribbble",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-dribbble"
                                                }),
                                                " Find us on dribbble"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "reddit",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-reddit"
                                                }),
                                                " Repost \xb7 232"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.space50
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "inputs",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.title,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Inputs"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    lg: 3,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                        id: "regular",
                                        inputProps: {
                                            placeholder: "Regular"
                                        },
                                        formControlProps: {
                                            fullWidth: true
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    lg: 3,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                        labelText: "With floating label",
                                        id: "float",
                                        formControlProps: {
                                            fullWidth: true
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    lg: 3,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                        labelText: "Success input",
                                        id: "success",
                                        success: true,
                                        formControlProps: {
                                            fullWidth: true
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    lg: 3,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                        labelText: "Error input",
                                        id: "error",
                                        error: true,
                                        formControlProps: {
                                            fullWidth: true
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    lg: 3,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                        labelText: "With material Icons",
                                        id: "material",
                                        formControlProps: {
                                            fullWidth: true
                                        },
                                        inputProps: {
                                            endAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                position: "end",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((People_default()), {})
                                            })
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    lg: 3,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                        labelText: "With Font Awesome Icons",
                                        id: "font-awesome",
                                        formControlProps: {
                                            fullWidth: true
                                        },
                                        inputProps: {
                                            endAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                position: "end",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-users"
                                                })
                                            })
                                        }
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.space70
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "checkRadios",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 4,
                                md: 4,
                                lg: 3,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Checkboxes"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                tabIndex: -1,
                                                onClick: ()=>handleToggle(21),
                                                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                    className: classes.checkedIcon
                                                }),
                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                    className: classes.uncheckedIcon
                                                }),
                                                classes: {
                                                    checked: classes.checked,
                                                    root: classes.checkRoot
                                                }
                                            }),
                                            classes: {
                                                label: classes.label,
                                                root: classes.labelRoot
                                            },
                                            label: "Unchecked"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                tabIndex: -1,
                                                onClick: ()=>handleToggle(22),
                                                checked: checked.indexOf(22) !== -1 ? true : false,
                                                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                    className: classes.checkedIcon
                                                }),
                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                    className: classes.uncheckedIcon
                                                }),
                                                classes: {
                                                    checked: classes.checked,
                                                    root: classes.checkRoot
                                                }
                                            }),
                                            classes: {
                                                label: classes.label,
                                                root: classes.labelRoot
                                            },
                                            label: "Checked"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                            disabled: true,
                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                tabIndex: -1,
                                                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                    className: classes.checkedIcon
                                                }),
                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                    className: classes.uncheckedIcon
                                                }),
                                                classes: {
                                                    checked: classes.checked,
                                                    root: classes.checkRoot
                                                }
                                            }),
                                            classes: {
                                                label: classes.label,
                                                disabled: classes.disabledCheckboxAndRadio,
                                                root: classes.labelRoot
                                            },
                                            label: "Disabled Unchecked"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                            disabled: true,
                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                tabIndex: -1,
                                                checked: checked.indexOf(24) !== -1 ? true : false,
                                                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                    className: classes.checkedIcon
                                                }),
                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                    className: classes.uncheckedIcon
                                                }),
                                                classes: {
                                                    checked: classes.checked,
                                                    root: classes.checkRoot
                                                }
                                            }),
                                            classes: {
                                                label: classes.label,
                                                disabled: classes.disabledCheckboxAndRadio,
                                                root: classes.labelRoot
                                            },
                                            label: "Disabled Checked"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 4,
                                md: 4,
                                lg: 3,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Radio Buttons"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {
                                                checked: selectedEnabled === "a",
                                                onChange: ()=>setSelectedEnabled("a"),
                                                value: "a",
                                                name: "radio button enabled",
                                                "aria-label": "A",
                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((FiberManualRecord_default()), {
                                                    className: classes.radioUnchecked
                                                }),
                                                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((FiberManualRecord_default()), {
                                                    className: classes.radioChecked
                                                }),
                                                classes: {
                                                    checked: classes.radio,
                                                    root: classes.radioRoot
                                                }
                                            }),
                                            classes: {
                                                label: classes.label,
                                                root: classes.labelRoot
                                            },
                                            label: "First Radio"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {
                                                checked: selectedEnabled === "b",
                                                onChange: ()=>setSelectedEnabled("b"),
                                                value: "b",
                                                name: "radio button enabled",
                                                "aria-label": "B",
                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((FiberManualRecord_default()), {
                                                    className: classes.radioUnchecked
                                                }),
                                                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((FiberManualRecord_default()), {
                                                    className: classes.radioChecked
                                                }),
                                                classes: {
                                                    checked: classes.radio,
                                                    root: classes.radioRoot
                                                }
                                            }),
                                            classes: {
                                                label: classes.label,
                                                root: classes.labelRoot
                                            },
                                            label: "Second Radio"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                            disabled: true,
                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {
                                                checked: false,
                                                value: "a",
                                                name: "radio button disabled",
                                                "aria-label": "B",
                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((FiberManualRecord_default()), {
                                                    className: classes.radioUnchecked
                                                }),
                                                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((FiberManualRecord_default()), {
                                                    className: classes.radioChecked
                                                }),
                                                classes: {
                                                    checked: classes.radio,
                                                    disabled: classes.disabledCheckboxAndRadio,
                                                    root: classes.radioRoot
                                                }
                                            }),
                                            classes: {
                                                label: classes.label,
                                                root: classes.labelRoot
                                            },
                                            label: "Disabled Unchecked Radio"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                            disabled: true,
                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {
                                                checked: true,
                                                value: "b",
                                                name: "radio button disabled",
                                                "aria-label": "B",
                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((FiberManualRecord_default()), {
                                                    className: classes.radioUnchecked
                                                }),
                                                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((FiberManualRecord_default()), {
                                                    className: classes.radioChecked
                                                }),
                                                classes: {
                                                    checked: classes.radio,
                                                    disabled: classes.disabledCheckboxAndRadio,
                                                    root: classes.radioRoot
                                                }
                                            }),
                                            classes: {
                                                label: classes.label,
                                                root: classes.labelRoot
                                            },
                                            label: "Disabled Checked Radio"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 4,
                                md: 4,
                                lg: 3,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Toggle Buttons"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                                checked: checkedA,
                                                onChange: (event)=>setCheckedA(event.target.checked),
                                                value: "checkedA",
                                                classes: {
                                                    switchBase: classes.switchBase,
                                                    checked: classes.switchChecked,
                                                    thumb: classes.switchIcon,
                                                    track: classes.switchBar
                                                }
                                            }),
                                            classes: {
                                                label: classes.label,
                                                root: classes.labelRoot
                                            },
                                            label: "Toggle is on"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                                checked: checkedB,
                                                onChange: (event)=>setCheckedB(event.target.checked),
                                                value: "checkedB",
                                                classes: {
                                                    switchBase: classes.switchBase,
                                                    checked: classes.switchChecked,
                                                    thumb: classes.switchIcon,
                                                    track: classes.switchBar
                                                }
                                            }),
                                            classes: {
                                                label: classes.label,
                                                root: classes.labelRoot
                                            },
                                            label: "Toggle is off"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.space70
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "select",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Customizable Select"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 6,
                                                md: 6,
                                                lg: 5,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                                    fullWidth: true,
                                                    className: classes.selectFormControl,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                            htmlFor: "simple-select",
                                                            className: classes.selectLabel,
                                                            children: "Single Select"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                            MenuProps: {
                                                                className: classes.selectMenu
                                                            },
                                                            classes: {
                                                                select: classes.select
                                                            },
                                                            value: simpleSelect,
                                                            onChange: handleSimple,
                                                            inputProps: {
                                                                name: "simpleSelect",
                                                                id: "simple-select"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    disabled: true,
                                                                    classes: {
                                                                        root: classes.selectMenuItem
                                                                    },
                                                                    children: "Single Select"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    classes: {
                                                                        root: classes.selectMenuItem,
                                                                        selected: classes.selectMenuItemSelected
                                                                    },
                                                                    value: "2",
                                                                    children: "Paris"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    classes: {
                                                                        root: classes.selectMenuItem,
                                                                        selected: classes.selectMenuItemSelected
                                                                    },
                                                                    value: "3",
                                                                    children: "Bucharest"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    classes: {
                                                                        root: classes.selectMenuItem,
                                                                        selected: classes.selectMenuItemSelected
                                                                    },
                                                                    value: "4",
                                                                    children: "Rome"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 6,
                                                md: 6,
                                                lg: 5,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                                    fullWidth: true,
                                                    className: classes.selectFormControl,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                            htmlFor: "multiple-select",
                                                            className: classes.selectLabel,
                                                            children: "Multiple Select"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                            multiple: true,
                                                            value: multipleSelect,
                                                            onChange: handleMultiple,
                                                            MenuProps: {
                                                                className: classes.selectMenu,
                                                                classes: {
                                                                    paper: classes.selectPaper
                                                                }
                                                            },
                                                            classes: {
                                                                select: classes.select
                                                            },
                                                            inputProps: {
                                                                name: "multipleSelect",
                                                                id: "multiple-select"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    disabled: true,
                                                                    classes: {
                                                                        root: classes.selectMenuItem
                                                                    },
                                                                    children: "Multiple Select"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    classes: {
                                                                        root: classes.selectMenuItem,
                                                                        selected: classes.selectMenuItemSelectedMultiple
                                                                    },
                                                                    value: "2",
                                                                    children: "Paris"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    classes: {
                                                                        root: classes.selectMenuItem,
                                                                        selected: classes.selectMenuItemSelectedMultiple
                                                                    },
                                                                    value: "3",
                                                                    children: "Bucharest"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    classes: {
                                                                        root: classes.selectMenuItem,
                                                                        selected: classes.selectMenuItemSelectedMultiple
                                                                    },
                                                                    value: "4",
                                                                    children: "Rome"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 4,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Dropdown & Dropup"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 12,
                                                md: 8,
                                                lg: 6,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomDropdown, {
                                                    dropdownHeader: "Dropdown header",
                                                    buttonText: "Multilevel Dropdown",
                                                    buttonProps: {
                                                        round: true,
                                                        block: true,
                                                        color: "info"
                                                    },
                                                    dropPlacement: "bottom",
                                                    dropdownList: [
                                                        "Action",
                                                        "Another action",
                                                        "Something else here",
                                                        {
                                                            divider: true
                                                        },
                                                        "Separated link",
                                                        {
                                                            divider: true
                                                        },
                                                        "One more separated link",
                                                        /*#__PURE__*/ jsx_runtime_.jsx(CustomDropdown, {
                                                            "data-ref": "multi",
                                                            innerDropDown: true,
                                                            buttonText: "Submenu",
                                                            buttonProps: {
                                                                simple: true,
                                                                block: true
                                                            },
                                                            dropPlacement: "right-start",
                                                            dropdownList: [
                                                                "Submenu action",
                                                                "Submenu action",
                                                                /*#__PURE__*/ jsx_runtime_.jsx(CustomDropdown, {
                                                                    "data-ref": "multi",
                                                                    innerDropDown: true,
                                                                    buttonText: "Second submenu",
                                                                    buttonProps: {
                                                                        simple: true
                                                                    },
                                                                    dropPlacement: "right-start",
                                                                    dropdownList: [
                                                                        "Submenu action 1",
                                                                        "Submenu action 2", 
                                                                    ]
                                                                }, 965816), 
                                                            ]
                                                        }, 96586), 
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 12,
                                                md: 8,
                                                lg: 6,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomDropdown, {
                                                    dropup: true,
                                                    dropPlacement: "top",
                                                    dropdownHeader: "Dropup header",
                                                    buttonText: "Dropup",
                                                    buttonProps: {
                                                        round: true,
                                                        block: true,
                                                        color: "info"
                                                    },
                                                    dropdownList: [
                                                        "Action",
                                                        "Another action",
                                                        "Something else here",
                                                        {
                                                            divider: true
                                                        },
                                                        "Separated link",
                                                        {
                                                            divider: true
                                                        },
                                                        "One more separated link", 
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                sm: 12,
                                                md: 8,
                                                lg: 6,
                                                className: classes.mlAuto + " " + classes.mrAuto,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomDropdown, {
                                                    dropdownHeader: "Dropdown header",
                                                    buttonText: "Dropdown",
                                                    buttonProps: {
                                                        round: true,
                                                        block: true,
                                                        color: "info"
                                                    },
                                                    dropPlacement: "bottom",
                                                    dropdownList: [
                                                        "Action",
                                                        "Another action",
                                                        "Sometjing else here",
                                                        {
                                                            divider: true
                                                        },
                                                        "Separeted link", 
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.space70
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "textareaTags",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Textarea"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                        labelText: "You can write your text here...",
                                        id: "textarea-input",
                                        formControlProps: {
                                            fullWidth: true
                                        },
                                        inputProps: {
                                            multiline: true,
                                            rows: 5
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Tags"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_tagsinput_default()), {
                                        value: tags,
                                        onChange: handleTags,
                                        tagProps: {
                                            className: "react-tagsinput-tag rose"
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "progress",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Progress Bars"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLinearProgress, {
                                        variant: "determinate",
                                        color: "primary",
                                        value: 30
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLinearProgress, {
                                        variant: "determinate",
                                        color: "info",
                                        value: 60
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLinearProgress, {
                                        variant: "determinate",
                                        color: "success",
                                        value: 100,
                                        style: {
                                            width: "35%",
                                            display: "inline-block"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLinearProgress, {
                                        variant: "determinate",
                                        color: "warning",
                                        value: 100,
                                        style: {
                                            width: "20%",
                                            display: "inline-block"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLinearProgress, {
                                        variant: "determinate",
                                        color: "danger",
                                        value: 25,
                                        style: {
                                            width: "45%",
                                            display: "inline-block"
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Pagination"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Hidden_default()), {
                                        mdDown: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                                                pages: [
                                                    {
                                                        text: 1
                                                    },
                                                    {
                                                        disabled: true,
                                                        text: "..."
                                                    },
                                                    {
                                                        text: 5
                                                    },
                                                    {
                                                        text: 6
                                                    },
                                                    {
                                                        active: true,
                                                        text: 7
                                                    },
                                                    {
                                                        text: 8
                                                    },
                                                    {
                                                        text: 9
                                                    },
                                                    {
                                                        text: "..."
                                                    },
                                                    {
                                                        text: 12
                                                    }, 
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                                                pages: [
                                                    {
                                                        text: "PREV"
                                                    },
                                                    {
                                                        text: 1
                                                    },
                                                    {
                                                        text: 2
                                                    },
                                                    {
                                                        active: true,
                                                        text: 3
                                                    },
                                                    {
                                                        text: 4
                                                    },
                                                    {
                                                        text: 5
                                                    },
                                                    {
                                                        text: "NEXT"
                                                    }, 
                                                ],
                                                color: "info"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Hidden_default()), {
                                        smUp: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                                                pages: [
                                                    {
                                                        text: 1
                                                    },
                                                    {
                                                        disabled: true,
                                                        text: "..."
                                                    },
                                                    {
                                                        text: 6
                                                    },
                                                    {
                                                        active: true,
                                                        text: 7
                                                    },
                                                    {
                                                        text: 8
                                                    },
                                                    {
                                                        text: "..."
                                                    }, 
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                                                pages: [
                                                    {
                                                        text: 1
                                                    },
                                                    {
                                                        text: 2
                                                    },
                                                    {
                                                        active: true,
                                                        text: 3
                                                    },
                                                    {
                                                        text: 4
                                                    },
                                                    {
                                                        text: 5
                                                    }, 
                                                ],
                                                color: "info"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "sliders",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Sliders"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "sliderRegular",
                                        className: "slider-primary"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "sliderDouble",
                                        className: "slider-info"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Badges"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                                        children: "default"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                                        color: "primary",
                                        children: "primary"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                                        color: "info",
                                        children: "info"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                                        color: "success",
                                        children: "success"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                                        color: "warning",
                                        children: "warning"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                                        color: "danger",
                                        children: "danger"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                                        color: "rose",
                                        children: "rose"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: external "@mui/icons-material/Search"
const Search_namespaceObject = require("@mui/icons-material/Search");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Email"
const Email_namespaceObject = require("@mui/icons-material/Email");
var Email_default = /*#__PURE__*/__webpack_require__.n(Email_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Face"
const Face_namespaceObject = require("@mui/icons-material/Face");
var Face_default = /*#__PURE__*/__webpack_require__.n(Face_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Settings"
const Settings_namespaceObject = require("@mui/icons-material/Settings");
var Settings_default = /*#__PURE__*/__webpack_require__.n(Settings_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/AccountCircle"
const AccountCircle_namespaceObject = require("@mui/icons-material/AccountCircle");
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Explore"
const Explore_namespaceObject = require("@mui/icons-material/Explore");
var Explore_default = /*#__PURE__*/__webpack_require__.n(Explore_namespaceObject);
// EXTERNAL MODULE: ./styles/jss/novel-logiks/components/headerLinksStyle.js
var headerLinksStyle = __webpack_require__(4111);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/pages/componentsSections/navbarsStyle.js


const navbarsStyle = (theme)=>({
        container: novel_logiks/* container */.nC,
        ...(0,headerLinksStyle/* default */.Z)(theme),
        section: {
            padding: "70px 0",
            paddingBottom: "0"
        },
        title: {
            ...novel_logiks/* title */.TN,
            marginTop: "30px",
            minHeight: "32px",
            textDecoration: "none"
        },
        navbar: {
            marginBottom: "-20px",
            zIndex: "100",
            position: "relative",
            overflow: "hidden",
            "& header": {
                borderRadius: "0",
                zIndex: "unset"
            }
        },
        navigation: {
            backgroundPosition: "50%",
            backgroundSize: "cover",
            marginTop: "0",
            minHeight: "740px"
        },
        formControl: {
            [theme.breakpoints.down("lg")]: {
                color: novel_logiks/* grayColor.0 */.X_[0],
                marginLeft: "20px !important"
            },
            margin: "0 !important",
            paddingTop: "7px",
            paddingBottom: "7px"
        },
        inputRootCustomClasses: {
            margin: "0!important"
        },
        searchIcon: {
            width: "20px",
            height: "20px",
            color: "inherit"
        },
        img: {
            width: "40px",
            height: "40px",
            borderRadius: "50%"
        },
        imageDropdownButton: {
            [theme.breakpoints.down("lg")]: {
                top: "0",
                margin: "5px 15px"
            },
            padding: "0px",
            borderRadius: "50%",
            marginLeft: "5px"
        }
    });
/* harmony default export */ const componentsSections_navbarsStyle = (navbarsStyle);

;// CONCATENATED MODULE: ./pages-sections/components/SectionNavbars.js





// @mui/icons-material






// core components







const SectionNavbars_useStyles = makeStyles_default()(componentsSections_navbarsStyle);
function SectionNavbars() {
    const classes = SectionNavbars_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.section + " cd-section",
        id: "navigation",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Menu"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                                        brand: "Menu",
                                        color: "primary",
                                        links: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                            className: classes.list,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                    className: classes.listItem,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        href: "#pablo",
                                                        className: classes.navLink + " " + classes.navLinkActive,
                                                        onClick: (e)=>e.preventDefault(),
                                                        color: "transparent",
                                                        children: "Link"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                    className: classes.listItem,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        href: "#pablo",
                                                        className: classes.navLink,
                                                        onClick: (e)=>e.preventDefault(),
                                                        color: "transparent",
                                                        children: "Link"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                    className: classes.listItem,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomDropdown, {
                                                        buttonText: "Dropdown",
                                                        dropdownHeader: "Dropdown Header",
                                                        buttonProps: {
                                                            className: classes.navLink,
                                                            color: "transparent"
                                                        },
                                                        dropdownList: [
                                                            "Action",
                                                            "Another action",
                                                            "Something else here",
                                                            {
                                                                divider: true
                                                            },
                                                            "Separated link",
                                                            {
                                                                divider: true
                                                            },
                                                            "One more separated link"
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Menu with Icons"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                                        brand: "Icons",
                                        color: "info",
                                        links: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                            className: classes.list + " " + classes.mlAuto,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                    className: classes.listItem,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        color: "transparent",
                                                        className: classes.navLink,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Email_default()), {})
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                    className: classes.listItem,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        color: "transparent",
                                                        className: classes.navLink,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Face_default()), {})
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                    className: classes.listItem,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomDropdown, {
                                                        left: true,
                                                        dropdownHeader: "Dropdown Header",
                                                        buttonIcon: (Settings_default()),
                                                        buttonProps: {
                                                            className: classes.navLink,
                                                            color: "transparent"
                                                        },
                                                        dropdownList: [
                                                            "Action",
                                                            "Another action",
                                                            "Something else here",
                                                            {
                                                                divider: true
                                                            },
                                                            "Separated link",
                                                            {
                                                                divider: true
                                                            },
                                                            "One more separated link"
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.title,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Navigation"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "navbar",
                className: classes.navbar,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.navigation,
                    style: {
                        backgroundImage: "url('/img/bg.jpg')"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                            brand: "Brand",
                            color: "rose",
                            links: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: classes.collapse,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                        className: classes.list + " " + classes.mrAuto,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.listItem,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    href: "#pablo",
                                                    className: classes.navLink + " " + classes.navLinkActive,
                                                    onClick: (e)=>e.preventDefault(),
                                                    color: "transparent",
                                                    children: "Link"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.listItem,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    href: "#pablo",
                                                    className: classes.navLink,
                                                    onClick: (e)=>e.preventDefault(),
                                                    color: "transparent",
                                                    children: "Link"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: classes.mlAuto,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                                white: true,
                                                inputRootCustomClasses: classes.inputRootCustomClasses,
                                                formControlProps: {
                                                    className: classes.formControl
                                                },
                                                inputProps: {
                                                    placeholder: "Search",
                                                    inputProps: {
                                                        "aria-label": "Search",
                                                        className: classes.searchInput
                                                    }
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                color: "white",
                                                justIcon: true,
                                                round: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Search_default()), {
                                                    className: classes.searchIcon
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                            brand: "Info Color",
                            color: "info",
                            links: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                className: classes.list + " " + classes.mlAuto,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.navLink + " " + classes.navLinkActive,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "transparent",
                                            children: "Discover"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.navLink,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "transparent",
                                            children: "Profile"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.navLink,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "transparent",
                                            children: "Settings"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                            brand: "Primary Color",
                            color: "primary",
                            links: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                className: classes.list + " " + classes.mlAuto,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.navLink + " " + classes.navLinkActive,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "transparent",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Explore_default()), {}),
                                                " Discover"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.navLink,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "transparent",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((AccountCircle_default()), {}),
                                                " Profile"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.navLink,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "transparent",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Settings_default()), {}),
                                                " Settings"
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                            brand: "Navbar with notifications",
                            color: "dark",
                            links: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                className: classes.list + " " + classes.mlAuto,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.navLink,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "transparent",
                                            children: "Discover"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.navLink,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "transparent",
                                            children: "Wishlist"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.notificationNavLink,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "rose",
                                            justIcon: true,
                                            round: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Email_default()), {})
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomDropdown, {
                                            left: true,
                                            caret: false,
                                            hoverColor: "dark",
                                            dropdownHeader: "Dropdown Header",
                                            buttonText: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/img/faces/avatar.jpg",
                                                className: classes.img,
                                                alt: "profile"
                                            }),
                                            buttonProps: {
                                                className: classes.navLink + " " + classes.imageDropdownButton,
                                                color: "transparent"
                                            },
                                            dropdownList: [
                                                "Me",
                                                "Settings and other stuff",
                                                "Sign out"
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                            brand: "Navbar with profile",
                            links: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                className: classes.list + " " + classes.mlAuto,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.navLink,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "transparent",
                                            children: "Discover"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.navLink,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "transparent",
                                            children: "Wishlist"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.registerNavLink,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "rose",
                                            round: true,
                                            children: "Register"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                            brand: "Transparent",
                            color: "transparent",
                            links: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                className: classes.list + " " + classes.mlAuto,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "transparent",
                                            className: classes.navLink,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-twitter"
                                                }),
                                                " ",
                                                "Twitter"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "transparent",
                                            className: classes.navLink,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-facebook"
                                                }),
                                                " ",
                                                "Facebook"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "transparent",
                                            className: classes.navLink,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-instagram"
                                                }),
                                                " ",
                                                "Instagram"
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: external "@mui/icons-material/Chat"
const Chat_namespaceObject = require("@mui/icons-material/Chat");
var Chat_default = /*#__PURE__*/__webpack_require__.n(Chat_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Build"
const Build_namespaceObject = require("@mui/icons-material/Build");
var Build_default = /*#__PURE__*/__webpack_require__.n(Build_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Tabs"
const Tabs_namespaceObject = require("@mui/material/Tabs");
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Tab"
const Tab_namespaceObject = require("@mui/material/Tab");
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_namespaceObject);
// EXTERNAL MODULE: ./components/Card/Card.js + 1 modules
var Card = __webpack_require__(2643);
// EXTERNAL MODULE: ./components/Card/CardBody.js + 1 modules
var CardBody = __webpack_require__(222);
// EXTERNAL MODULE: ./components/Card/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(3082);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/components/customTabsStyle.js

const customTabsStyle = {
    cardTitle: {
        ...novel_logiks/* defaultFont */.Df,
        float: "left",
        padding: "10px 10px 10px 0",
        lineHeight: "24px",
        fontSize: "14px",
        color: novel_logiks/* whiteColor */.zQ
    },
    cardTitleRTL: {
        float: "right",
        padding: "10px 0px 10px 10px !important"
    },
    displayNone: {
        display: "none"
    },
    tabsContainer: {},
    tabsContainerRTL: {
        float: "right"
    },
    tabIcon: {
        width: "24px",
        height: "24px",
        marginRight: "4px",
        marginBottom: "0 !important"
    },
    customTabsRoot: {
        minHeight: "unset !important"
    },
    customTabSelected: {
        backgroundColor: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.2)",
        transition: "background-color .4s"
    },
    customTabRoot: {
        width: "auto",
        minWidth: "70px",
        borderRadius: "3px",
        opacity: "1",
        height: "auto",
        padding: "10px 15px",
        display: "flex !important",
        flexDirection: "row !important",
        minHeight: "unset",
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "24px"
    },
    customTabWrapper: {
        display: "inline-block",
        minHeight: "unset !important",
        minWidth: "unset !important",
        width: "unset !important",
        height: "unset !important",
        maxWidth: "unset !important",
        maxHeight: "unset !important",
        "& > svg": {
            verticalAlign: "middle"
        },
        "&,& *": {
            letterSpacing: "normal !important"
        }
    }
};
/* harmony default export */ const components_customTabsStyle = (customTabsStyle);

;// CONCATENATED MODULE: ./components/CustomTabs/CustomTabs.js


// nodejs library that concatenates classes

// nodejs library to set properties for components


// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/Card/CardContent";
// import CardHeader from "@mui/material/Card/CardHeader";


// core components




const CustomTabs_useStyles = makeStyles_default()(components_customTabsStyle);
function CustomTabs(props) {
    const [value, setValue] = external_react_default().useState(0);
    const handleChange = (event, value)=>{
        setValue(value);
    };
    const { headerColor , title , tabs , rtlActive , plainTabs  } = props;
    const classes = CustomTabs_useStyles();
    const cardTitle = external_classnames_default()({
        [classes.cardTitle]: true,
        [classes.cardTitleRTL]: rtlActive
    });
    const tabsContainer = external_classnames_default()({
        [classes.tabsContainer]: true,
        [classes.tabsContainerRTL]: rtlActive
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
        plain: plainTabs,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                color: headerColor,
                plain: plainTabs,
                children: [
                    title !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: cardTitle,
                        children: "title"
                    }) : null,
                    /*#__PURE__*/ jsx_runtime_.jsx((Tabs_default()), {
                        classes: {
                            root: classes.customTabsRoot,
                            flexContainer: tabsContainer,
                            indicator: classes.displayNone
                        },
                        value: value,
                        onChange: handleChange,
                        textColor: "inherit",
                        children: tabs.map((prop, key)=>{
                            var icon = {};
                            if (prop.tabIcon !== undefined) {
                                icon = {
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(prop.tabIcon, {
                                        className: classes.tabIcon
                                    })
                                };
                            } else {
                                icon = {};
                            }
                            return /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                classes: {
                                    root: classes.customTabRoot,
                                    selected: classes.customTabSelected,
                                    wrapper: classes.customTabWrapper
                                },
                                ...icon,
                                label: prop.tabName
                            }, key);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CardBody/* default */.Z, {
                children: tabs.map((prop, key)=>{
                    if (key === value) {
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: prop.tabContent
                        }, key);
                    }
                    return null;
                })
            })
        ]
    });
};
CustomTabs.defaultProps = {
    headerColor: "purple"
};
CustomTabs.propTypes = {
    headerColor: external_prop_types_default().oneOf([
        "warning",
        "success",
        "danger",
        "info",
        "primary",
        "rose"
    ]),
    title: (external_prop_types_default()).string,
    tabs: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        tabName: (external_prop_types_default()).string.isRequired,
        tabIcon: (external_prop_types_default()).object,
        tabContent: (external_prop_types_default()).node.isRequired
    })),
    rtlActive: (external_prop_types_default()).bool,
    plainTabs: (external_prop_types_default()).bool
};

;// CONCATENATED MODULE: ./styles/jss/novel-logiks/pages/componentsSections/tabsStyle.js

const tabsStyle = {
    section: {
        padding: "70px 0"
    },
    container: novel_logiks/* container */.nC,
    textCenter: {
        textAlign: "center"
    }
};
/* harmony default export */ const componentsSections_tabsStyle = (tabsStyle);

;// CONCATENATED MODULE: ./pages-sections/components/SectionTabs.js



// @mui/icons-material



// core components




const SectionTabs_useStyles = makeStyles_default()(componentsSections_tabsStyle);
function SectionTabs() {
    const classes = SectionTabs_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.container,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "nav-tabs",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Navigation Tabs"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: "Tabs with Icons on Card"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomTabs, {
                                        headerColor: "primary",
                                        tabs: [
                                            {
                                                tabName: "Profile",
                                                tabIcon: (Face_default()),
                                                tabContent: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: classes.textCenter,
                                                    children: "I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus."
                                                })
                                            },
                                            {
                                                tabName: "Messages",
                                                tabIcon: (Chat_default()),
                                                tabContent: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: classes.textCenter,
                                                    children: "I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                                                })
                                            },
                                            {
                                                tabName: "Settings",
                                                tabIcon: (Build_default()),
                                                tabContent: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: classes.textCenter,
                                                    children: "think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus."
                                                })
                                            }
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: "Tabs on Plain Card"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomTabs, {
                                        plainTabs: true,
                                        headerColor: "danger",
                                        tabs: [
                                            {
                                                tabName: "Home",
                                                tabContent: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: classes.textCenter,
                                                    children: "I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus."
                                                })
                                            },
                                            {
                                                tabName: "Updates",
                                                tabContent: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: classes.textCenter,
                                                    children: "I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                                                })
                                            },
                                            {
                                                tabName: "History",
                                                tabContent: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: classes.textCenter,
                                                    children: "think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus."
                                                })
                                            }
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: external "@mui/icons-material/Dashboard"
const Dashboard_namespaceObject = require("@mui/icons-material/Dashboard");
var Dashboard_default = /*#__PURE__*/__webpack_require__.n(Dashboard_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Schedule"
const Schedule_namespaceObject = require("@mui/icons-material/Schedule");
var Schedule_default = /*#__PURE__*/__webpack_require__.n(Schedule_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/List"
const icons_material_List_namespaceObject = require("@mui/icons-material/List");
var icons_material_List_default = /*#__PURE__*/__webpack_require__.n(icons_material_List_namespaceObject);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/components/navPillsStyle.js

const navPillsStyle = (theme)=>({
        root: {
            marginTop: "20px",
            paddingLeft: "0",
            marginBottom: "0",
            overflow: "visible !important"
        },
        flexContainer: {
            [theme.breakpoints.down("sm")]: {
                display: "flex",
                flexWrap: "wrap"
            }
        },
        displayNone: {
            display: "none !important"
        },
        fixed: {
            overflow: "visible !important"
        },
        horizontalDisplay: {
            display: "block"
        },
        pills: {
            float: "left",
            position: "relative",
            display: "block",
            borderRadius: "30px",
            minWidth: "100px",
            textAlign: "center",
            transition: "all .3s",
            padding: "10px 15px",
            color: novel_logiks/* grayColor.15 */.X_[15],
            height: "auto",
            opacity: "1",
            maxWidth: "100%",
            margin: "0 5px",
            minHeight: "unset",
            lineHeight: "24px",
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: "500"
        },
        pillsWithIcons: {
            borderRadius: "4px"
        },
        tabIcon: {
            width: "30px",
            height: "30px",
            display: "block",
            margin: "15px auto !important"
        },
        horizontalPills: {
            width: "100%",
            float: "none !important",
            "& + button": {
                margin: "10px 0"
            }
        },
        contentWrapper: {
            marginTop: "20px",
            "& .react-swipeable-view-container > div > div": {
                paddingLeft: "15px",
                paddingRight: "15px"
            }
        },
        primary: {
            "&,&:hover": {
                color: novel_logiks/* whiteColor */.zQ,
                backgroundColor: novel_logiks/* primaryColor.0 */.lr[0],
                boxShadow: "0 4px 20px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.14), 0 7px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* primaryColor.0 */.lr[0]) + ", 0.4)"
            }
        },
        info: {
            "&,&:hover": {
                color: novel_logiks/* whiteColor */.zQ,
                backgroundColor: novel_logiks/* infoColor.0 */.bE[0],
                boxShadow: "0 4px 20px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.14), 0 7px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* successColor.0 */.nq[0]) + ", 0.4)"
            }
        },
        success: {
            "&,&:hover": {
                color: novel_logiks/* whiteColor */.zQ,
                backgroundColor: novel_logiks/* successColor.0 */.nq[0],
                boxShadow: "0 2px 2px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* successColor.0 */.nq[0]) + ", 0.14), 0 3px 1px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* successColor.0 */.nq[0]) + ", 0.2), 0 1px 5px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* successColor.0 */.nq[0]) + ", 0.12)"
            }
        },
        warning: {
            "&,&:hover": {
                color: novel_logiks/* whiteColor */.zQ,
                backgroundColor: novel_logiks/* warningColor.0 */.MA[0],
                boxShadow: "0 4px 20px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.14), 0 7px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* warningColor.0 */.MA[0]) + ", 0.4)"
            }
        },
        danger: {
            "&,&:hover": {
                color: novel_logiks/* whiteColor */.zQ,
                backgroundColor: novel_logiks/* dangerColor.0 */.E7[0],
                boxShadow: "0 4px 20px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.14), 0 7px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* warningColor.0 */.MA[0]) + ", 0.4)"
            }
        },
        rose: {
            "&,&:hover": {
                color: novel_logiks/* whiteColor */.zQ,
                backgroundColor: novel_logiks/* roseColor.0 */.An[0],
                boxShadow: "0 4px 20px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.14), 0 7px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* roseColor.0 */.An[0]) + ", 0.4)"
            }
        },
        alignCenter: {
            alignItems: "center",
            justifyContent: "center"
        },
        tabLabelContainer: {
            padding: "unset !important"
        }
    });
/* harmony default export */ const components_navPillsStyle = (navPillsStyle);

;// CONCATENATED MODULE: ./components/NavPills/NavPills.js


// nodejs library that concatenates classes

// nodejs library to set properties for components




// core components



const NavPills_useStyles = makeStyles_default()(components_navPillsStyle);
function NavPills(props) {
    const [active, setActive] = external_react_default().useState(props.active);
    const handleChange = (event, active)=>{
        setActive(active);
    };
    const { tabs , color , horizontal , alignCenter  } = props;
    const classes = NavPills_useStyles();
    const flexContainerClasses = external_classnames_default()({
        [classes.flexContainer]: true,
        [classes.horizontalDisplay]: horizontal !== undefined
    });
    const tabButtons = /*#__PURE__*/ jsx_runtime_.jsx((Tabs_default()), {
        classes: {
            root: classes.root,
            fixed: classes.fixed,
            flexContainer: flexContainerClasses,
            indicator: classes.displayNone
        },
        value: active,
        onChange: handleChange,
        centered: alignCenter,
        children: tabs.map((prop, key)=>{
            var icon = {};
            if (prop.tabIcon !== undefined) {
                icon["icon"] = /*#__PURE__*/ jsx_runtime_.jsx(prop.tabIcon, {
                    className: classes.tabIcon
                });
            }
            const pillsClasses = external_classnames_default()({
                [classes.pills]: true,
                [classes.horizontalPills]: horizontal !== undefined,
                [classes.pillsWithIcons]: prop.tabIcon !== undefined
            });
            return /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                label: prop.tabButton,
                ...icon,
                classes: {
                    root: pillsClasses,
                    label: classes.label,
                    selected: classes[color]
                }
            }, key);
        })
    });
    const tabContent = /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.contentWrapper,
        children: tabs.map((prop, key)=>{
            if (key !== active) {
                return null;
            } else {
                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.tabContent,
                    children: prop.tabContent
                }, key);
            }
        })
    });
    return horizontal !== undefined ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                ...horizontal.tabsGrid,
                children: tabButtons
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                ...horizontal.contentGrid,
                children: tabContent
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            tabButtons,
            tabContent
        ]
    });
};
NavPills.defaultProps = {
    active: 0,
    color: "primary"
};
NavPills.propTypes = {
    // index of the default active pill
    active: (external_prop_types_default()).number,
    tabs: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        tabButton: (external_prop_types_default()).string,
        tabIcon: (external_prop_types_default()).object,
        tabContent: (external_prop_types_default()).node
    })).isRequired,
    color: external_prop_types_default().oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose"
    ]),
    horizontal: external_prop_types_default().shape({
        tabsGrid: (external_prop_types_default()).object,
        contentGrid: (external_prop_types_default()).object
    }),
    alignCenter: (external_prop_types_default()).bool
};

;// CONCATENATED MODULE: ./styles/jss/novel-logiks/pages/componentsSections/pillsStyle.js

const pillsStyle = {
    section: {
        padding: "70px 0"
    },
    container: novel_logiks/* container */.nC,
    title: {
        ...novel_logiks/* title */.TN,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    }
};
/* harmony default export */ const componentsSections_pillsStyle = (pillsStyle);

;// CONCATENATED MODULE: ./pages-sections/components/SectionPills.js



// @mui/icons-material



// core components




const SectionPills_useStyles = makeStyles_default()(componentsSections_pillsStyle);
function SectionPills() {
    const classes = SectionPills_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.container,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "navigation-pills",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.title,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Navigation Pills"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 8,
                                md: 6,
                                lg: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: "Horizontal tabs"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(NavPills, {
                                        color: "rose",
                                        tabs: [
                                            {
                                                tabButton: "Profile",
                                                tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.",
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Dramatically visualize customer directed convergence without revolutionary ROI."
                                                        })
                                                    ]
                                                })
                                            },
                                            {
                                                tabButton: "Settings",
                                                tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.",
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Dramatically maintain clicks-and-mortar solutions without functional solutions."
                                                        })
                                                    ]
                                                })
                                            },
                                            {
                                                tabButton: "Options",
                                                tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.",
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Dynamically innovate resource-leveling customer service for state of the art customer service."
                                                        })
                                                    ]
                                                })
                                            }
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 12,
                                md: 6,
                                lg: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: "Vertical tabs"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(NavPills, {
                                        horizontal: {
                                            tabsGrid: {
                                                xs: 12,
                                                sm: 4,
                                                md: 5
                                            },
                                            contentGrid: {
                                                xs: 12,
                                                sm: 8,
                                                md: 7
                                            }
                                        },
                                        color: "rose",
                                        tabs: [
                                            {
                                                tabButton: "Profile",
                                                tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.",
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Dramatically visualize customer directed convergence without revolutionary ROI."
                                                        })
                                                    ]
                                                })
                                            },
                                            {
                                                tabButton: "Settings",
                                                tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.",
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Dramatically maintain clicks-and-mortar solutions without functional solutions."
                                                        })
                                                    ]
                                                })
                                            },
                                            {
                                                tabButton: "Options",
                                                tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.",
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Dynamically innovate resource-leveling customer service for state of the art customer service."
                                                        })
                                                    ]
                                                })
                                            }
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.title,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                children: "With Icons"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 12,
                                md: 8,
                                lg: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NavPills, {
                                    color: "primary",
                                    tabs: [
                                        {
                                            tabButton: "Dashboard",
                                            tabIcon: (Dashboard_default()),
                                            tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                                                    })
                                                ]
                                            })
                                        },
                                        {
                                            tabButton: "Schedule",
                                            tabIcon: (Schedule_default()),
                                            tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                                                    })
                                                ]
                                            })
                                        },
                                        {
                                            tabButton: "Tasks",
                                            tabIcon: (icons_material_List_default()),
                                            tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                                                    })
                                                ]
                                            })
                                        }
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 12,
                                md: 8,
                                lg: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NavPills, {
                                    color: "primary",
                                    horizontal: {
                                        tabsGrid: {
                                            xs: 12,
                                            sm: 3,
                                            md: 4
                                        },
                                        contentGrid: {
                                            xs: 12,
                                            sm: 9,
                                            md: 8
                                        }
                                    },
                                    tabs: [
                                        {
                                            tabButton: "Dashboard",
                                            tabIcon: (Dashboard_default()),
                                            tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                                                    })
                                                ]
                                            })
                                        },
                                        {
                                            tabButton: "Schedule",
                                            tabIcon: (Schedule_default()),
                                            tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                                                    })
                                                ]
                                            })
                                        }
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: external "@mui/icons-material/Warning"
const Warning_namespaceObject = require("@mui/icons-material/Warning");
var Warning_default = /*#__PURE__*/__webpack_require__.n(Warning_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/SnackbarContent"
const SnackbarContent_namespaceObject = require("@mui/material/SnackbarContent");
var SnackbarContent_default = /*#__PURE__*/__webpack_require__.n(SnackbarContent_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
;// CONCATENATED MODULE: external "@mui/material/Icon"
const Icon_namespaceObject = require("@mui/material/Icon");
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/Close"
var Close_ = __webpack_require__(4173);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/components/snackbarContentStyle.js

const snackbarContentStyle = {
    root: {
        ...novel_logiks/* defaultFont */.Df,
        position: "relative",
        padding: "20px 15px",
        lineHeight: "20px",
        marginBottom: "20px",
        fontSize: "14px",
        backgroundColor: "white",
        color: novel_logiks/* grayColor.15 */.X_[15],
        borderRadius: "0px",
        maxWidth: "100%",
        minWidth: "auto",
        boxShadow: "0 12px 20px -10px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.28), 0 4px 20px 0px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 7px 8px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ", 0.2)"
    },
    info: {
        backgroundColor: novel_logiks/* infoColor.3 */.bE[3],
        color: novel_logiks/* whiteColor */.zQ,
        ...novel_logiks/* infoBoxShadow */.ur
    },
    success: {
        backgroundColor: novel_logiks/* successColor.3 */.nq[3],
        color: novel_logiks/* whiteColor */.zQ,
        ...novel_logiks/* successBoxShadow */.TI
    },
    warning: {
        backgroundColor: novel_logiks/* warningColor.3 */.MA[3],
        color: novel_logiks/* whiteColor */.zQ,
        ...novel_logiks/* warningBoxShadow */.D6
    },
    danger: {
        backgroundColor: novel_logiks/* dangerColor.3 */.E7[3],
        color: novel_logiks/* whiteColor */.zQ,
        ...novel_logiks/* dangerBoxShadow */.iW
    },
    primary: {
        backgroundColor: novel_logiks/* primaryColor.3 */.lr[3],
        color: novel_logiks/* whiteColor */.zQ,
        ...novel_logiks/* primaryBoxShadow */.kY
    },
    message: {
        padding: "0",
        display: "block",
        maxWidth: "89%"
    },
    close: {
        width: "20px",
        height: "20px"
    },
    iconButton: {
        width: "24px",
        height: "24px",
        float: "right",
        fontSize: "1.5rem",
        fontWeight: "500",
        lineHeight: "1",
        position: "absolute",
        right: "-4px",
        top: "0",
        padding: "0"
    },
    icon: {
        display: "block",
        float: "left",
        marginRight: "1.071rem"
    },
    container: {
        ...novel_logiks/* container */.nC,
        position: "relative"
    }
};
/* harmony default export */ const components_snackbarContentStyle = (snackbarContentStyle);

;// CONCATENATED MODULE: ./components/Snackbar/SnackbarContent.js


// nodejs library to set properties for components





// @mui/icons-material

// core components

const SnackbarContent_useStyles = makeStyles_default()(components_snackbarContentStyle);
function SnackbarContent(props) {
    const { message , color , close , icon  } = props;
    const classes = SnackbarContent_useStyles();
    var action = [];
    const closeAlert = ()=>{
        setAlert(null);
    };
    if (close !== undefined) {
        action = [
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                className: classes.iconButton,
                "aria-label": "Close",
                color: "inherit",
                onClick: closeAlert,
                size: "large",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                    className: classes.close
                })
            }, "close")
        ];
    }
    let snackIcon = null;
    switch(typeof icon){
        case "object":
            snackIcon = /*#__PURE__*/ jsx_runtime_.jsx(props.icon, {
                className: classes.icon
            });
            break;
        case "string":
            snackIcon = /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                className: classes.icon,
                children: props.icon
            });
            break;
        default:
            snackIcon = null;
            break;
    }
    const [alert, setAlert] = external_react_default().useState(/*#__PURE__*/ jsx_runtime_.jsx((SnackbarContent_default()), {
        message: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                snackIcon,
                message,
                close !== undefined ? action : null
            ]
        }),
        classes: {
            root: classes.root + " " + classes[color],
            message: classes.message + " " + classes.container
        }
    }));
    return alert;
};
SnackbarContent.propTypes = {
    message: (external_prop_types_default()).node.isRequired,
    color: external_prop_types_default().oneOf([
        "info",
        "success",
        "warning",
        "danger",
        "primary"
    ]),
    close: (external_prop_types_default()).bool,
    icon: external_prop_types_default().oneOfType([
        (external_prop_types_default()).object,
        (external_prop_types_default()).string
    ])
};

;// CONCATENATED MODULE: ./components/Clearfix/Clearfix.js



const styles = {
    clearfix: {
        "&:after,&:before": {
            display: "table",
            content: '" "'
        },
        "&:after": {
            clear: "both"
        }
    }
};
const Clearfix_useStyles = makeStyles_default()(styles);
function Clearfix() {
    const classes = Clearfix_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.clearfix
    });
};

;// CONCATENATED MODULE: ./styles/jss/novel-logiks/pages/componentsSections/notificationsStyles.js

const notificationsStyles = {
    section: {
        backgroundColor: novel_logiks/* whiteColor */.zQ,
        display: "block",
        width: "100%",
        position: "relative",
        padding: "70px 0",
        ...novel_logiks/* section */.qi
    },
    title: {
        ...novel_logiks/* title */.TN,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    space70: {
        height: "70px",
        display: "block"
    },
    container: novel_logiks/* container */.nC
};
/* harmony default export */ const componentsSections_notificationsStyles = (notificationsStyles);

;// CONCATENATED MODULE: ./pages-sections/components/SectionNotifications.js



// @mui/icons-material


// core components



const SectionNotifications_useStyles = makeStyles_default()(componentsSections_notificationsStyles);
function SectionNotifications() {
    const classes = SectionNotifications_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.section + " cd-section",
        id: "notifications",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.space70
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.title,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Notifications"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SnackbarContent, {
                message: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                            children: "INFO ALERT:"
                        }),
                        " You",
                        "'",
                        "ve got some friends nearby, stop looking at your phone and find them..."
                    ]
                }),
                close: true,
                color: "info",
                icon: "info_outline"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SnackbarContent, {
                message: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                            children: "SUCCESS ALERT:"
                        }),
                        " You",
                        "'",
                        "ve got some friends nearby, stop looking at your phone and find them..."
                    ]
                }),
                close: true,
                color: "success",
                icon: (Check_default())
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SnackbarContent, {
                message: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                            children: "WARNING ALERT:"
                        }),
                        " You",
                        "'",
                        "ve got some friends nearby, stop looking at your phone and find them..."
                    ]
                }),
                close: true,
                color: "warning",
                icon: (Warning_default())
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SnackbarContent, {
                message: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                            children: "DANGER ALERT:"
                        }),
                        " You",
                        "'",
                        "ve got some friends nearby, stop looking at your phone and find them..."
                    ]
                }),
                close: true,
                color: "danger",
                icon: "info_outline"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Clearfix, {})
        ]
    });
};

;// CONCATENATED MODULE: external "@mui/icons-material/Mail"
const Mail_namespaceObject = require("@mui/icons-material/Mail");
var Mail_default = /*#__PURE__*/__webpack_require__.n(Mail_namespaceObject);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/pages/componentsSections/preFooter.js

const preFooter_styles = {
    container: novel_logiks/* container */.nC,
    title: novel_logiks/* title */.TN,
    mrAuto: novel_logiks/* mrAuto */.kq,
    mlAuto: novel_logiks/* mlAuto */.hU,
    description: novel_logiks/* description */.WL,
    card: {},
    cardBody: {
        padding: "15px",
        "& form": {
            marginBottom: "0"
        }
    },
    cardForm: {
        margin: "0 0 0 14px",
        padding: 0,
        top: 10
    },
    socialLine: {
        padding: ".9375rem 0px",
        "& $border": {
            borderRight: "1px solid rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ",0.12)"
        },
        "& $border:last-child": {
            border: 0
        }
    },
    textCenter: {
        textAlign: "center !important"
    },
    white: {
        backgroundColor: novel_logiks/* whiteColor */.zQ
    },
    dark: {
        background: "radial-gradient(ellipse at center," + novel_logiks/* grayColor.4 */.X_[4] + " 0," + novel_logiks/* grayColor.5 */.X_[5] + " 100%)",
        backgroundSize: "550% 450%",
        "& $border": {
            borderColor: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* whiteColor */.zQ) + ",0.1)"
        }
    },
    bigIcons: {
        "& a": {
            margin: 0,
            width: "100% !important",
            paddingTop: "45px",
            paddingBottom: "45px"
        },
        "& button i.fab, & a i.fab": {
            fontSize: "25px !important",
            lineHeight: "90px !important"
        }
    },
    subscribeLine: {
        padding: "1.875rem 0px",
        "& $card": {
            marginTop: "30px"
        },
        "& form": {
            margin: "0px"
        },
        "& $formFix": {
            paddingTop: "0px"
        },
        "&$subscribeLineImage:after": {
            position: "absolute",
            zIndex: 1,
            width: "100%",
            height: "100%",
            display: "block",
            left: 0,
            top: 0,
            content: "''",
            backgroundColor: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ",0.66)"
        }
    },
    formFix: {},
    subscribeLineWhite: {
        backgroundColor: novel_logiks/* whiteColor */.zQ,
        "& $subscribeButton": {
            top: "-6px"
        }
    },
    subscribeLineImage: {
        position: "relative",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        "& $container": {
            zIndex: 2,
            position: "relative"
        },
        "& $title": {
            color: novel_logiks/* whiteColor */.zQ
        },
        "& $description": {
            color: novel_logiks/* grayColor.0 */.X_[0]
        }
    },
    subscribeButton: {},
    border: {}
};
/* harmony default export */ const preFooter = (preFooter_styles);

;// CONCATENATED MODULE: ./pages-sections/components/SectionPreFooter.js


// nodejs library that concatenates classes

// core components








// @material-ui icons


const SectionPreFooter_useStyles = makeStyles_default()(preFooter);
function SectionPreFooter() {
    const classes = SectionPreFooter_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.container,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.title,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Pre-Footer Areas"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()(classes.socialLine, classes.textCenter, classes.white),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        justifyContent: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                md: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: classes.title,
                                    children: "Thank you for your support!"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                color: "twitter",
                                round: true,
                                href: "#pablo",
                                onClick: (e)=>e.preventDefault(),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-twitter"
                                    }),
                                    " Twitter \xb7 2.5K"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                color: "facebook",
                                round: true,
                                href: "#pablo",
                                onClick: (e)=>e.preventDefault(),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-facebook"
                                    }),
                                    " Facebook \xb7 3.2k"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                color: "google",
                                round: true,
                                href: "#pablo",
                                onClick: (e)=>e.preventDefault(),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-google-plus-g"
                                    }),
                                    " Google \xb7 1.2k"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                color: "dribbble",
                                round: true,
                                href: "#pablo",
                                onClick: (e)=>e.preventDefault(),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-dribbble"
                                    }),
                                    " Dribbble \xb7 1.8k"
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()(classes.socialLine, classes.textCenter, classes.white, classes.bigIcons),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        justifyContent: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "twitter",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-twitter"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "facebook",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-facebook"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "google",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-google-plus-g"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "dribbble",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-dribbble"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "youtube",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-youtube"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "instagram",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-instagram"
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()(classes.socialLine, classes.textCenter, classes.dark, classes.bigIcons),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        justifyContent: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "white",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-twitter"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "white",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-facebook"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "white",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-google-plus-g"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "white",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-dribbble"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "white",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-youtube"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "white",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-instagram"
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()(classes.subscribeLine, classes.subscribeLineImage),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 6,
                            md: 6,
                            className: external_classnames_default()(classes.mlAuto, classes.mrAuto),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.textCenter,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: classes.title,
                                            children: "Subscribe to our Newsletter"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: classes.description,
                                            children: "Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    raised: true,
                                    className: classes.card,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CardBody/* default */.Z, {
                                        className: classes.cardBody,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                        xs: 12,
                                                        sm: 6,
                                                        md: 6,
                                                        lg: 8,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                                            id: "emailPreFooter",
                                                            formControlProps: {
                                                                fullWidth: true,
                                                                className: classes.cardForm
                                                            },
                                                            inputProps: {
                                                                startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                                    position: "start",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {})
                                                                }),
                                                                placeholder: "Your Email..."
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                        xs: 12,
                                                        sm: 6,
                                                        md: 6,
                                                        lg: 4,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            color: "primary",
                                                            block: true,
                                                            className: classes.subscribeButton,
                                                            children: "subscribe"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()(classes.subscribeLine, classes.subscribeLineWhite),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: classes.title,
                                        children: "Get Tips & Tricks every Week!"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: classes.description,
                                        children: "Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    plain: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CardBody/* default */.Z, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                        xs: 12,
                                                        sm: 6,
                                                        md: 6,
                                                        lg: 8,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                                            id: "emailPreFooter2",
                                                            formControlProps: {
                                                                fullWidth: true,
                                                                className: classes.formFix
                                                            },
                                                            inputProps: {
                                                                startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                                    position: "start",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {})
                                                                }),
                                                                placeholder: "Your Email..."
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                        xs: 12,
                                                        sm: 6,
                                                        md: 6,
                                                        lg: 4,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            color: "rose",
                                                            round: true,
                                                            block: true,
                                                            className: classes.subscribeButton,
                                                            children: "subscribe"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./styles/jss/novel-logiks/pages/componentsSections/footerStyle.js
var footerStyle = __webpack_require__(6479);
;// CONCATENATED MODULE: ./pages-sections/components/SectionFooter.js
/*eslint-disable*/ 

// nodejs library that concatenates classes




// @mui/icons-material


// core components






const SectionFooter_useStyles = makeStyles_default()(footerStyle/* default */.Z);
function SectionFooter() {
    const classes = SectionFooter_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.container,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.title,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Footer Areas"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                        theme: "white",
                        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.left,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://novellogiks.com/product/novel-logiks?ref=njsmkp-footer-components",
                                        target: "_blank",
                                        className: classes.footerBrand,
                                        children: "NextJS Material Kit PRO"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.pullCenter,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                        className: classes.list,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://novellogiks.com/?ref=njsmkp-footer-components",
                                                    target: "_blank",
                                                    className: classes.block,
                                                    children: "Sunil"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://novellogiks.com/presentation?ref=njsmkp-footer-components",
                                                    target: "_blank",
                                                    className: classes.block,
                                                    children: "About us"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "http://blog.creative-tim.com/?ref=njsmkp-footer-components",
                                                    className: classes.block,
                                                    children: "Blog"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://novellogiks.com/license?ref=njsmkp-footer-components",
                                                    target: "_blank",
                                                    className: classes.block,
                                                    children: "Licenses"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.rightLinks,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    href: "https://twitter.com/CreativeTim?ref=creativetim",
                                                    target: "_blank",
                                                    color: "twitter",
                                                    justIcon: true,
                                                    simple: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-twitter"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    href: "https://dribbble.com/creativetim?ref=creativetim",
                                                    target: "_blank",
                                                    color: "dribbble",
                                                    justIcon: true,
                                                    simple: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-dribbble"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    href: "https://instagram.com/CreativeTimOfficial?ref=creativetim",
                                                    target: "_blank",
                                                    color: "google",
                                                    justIcon: true,
                                                    simple: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-google-plus-g"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.left,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                        className: classes.list,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://novellogiks.com/?ref=njsmkp-footer-components",
                                                    target: "_blank",
                                                    className: classes.block,
                                                    children: "Sunil"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://novellogiks.com/presentation?ref=njsmkp-footer-components",
                                                    target: "_blank",
                                                    className: classes.block,
                                                    children: "About us"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "http://blog.creative-tim.com/?ref=njsmkp-footer-components",
                                                    className: classes.block,
                                                    children: "Blog"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://novellogiks.com/license?ref=njsmkp-footer-components",
                                                    target: "_blank",
                                                    className: classes.block,
                                                    children: "Licenses"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.right,
                                    children: [
                                        "\xa9 ",
                                        1900 + new Date().getYear(),
                                        " , made with",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {
                                            className: classes.icon
                                        }),
                                        " by",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://novellogiks.com?ref=njsmkp-footer-components",
                                            target: "_blank",
                                            className: classes.aClasses,
                                            children: "Sunil"
                                        }),
                                        " ",
                                        "for a better web."
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                        theme: "dark",
                        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.left,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://novellogiks.com/product/novel-logiks?ref=njsmkp-footer-components",
                                        target: "_blank",
                                        className: classes.footerBrand,
                                        children: "NextJS Material Kit PRO"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.pullCenter,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                        className: classes.list,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "http://blog.creative-tim.com/?ref=njsmkp-footer-components",
                                                    target: "_blank",
                                                    className: classes.block,
                                                    children: "Blog"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://novellogiks.com/presentation?ref=njsmkp-footer-components",
                                                    target: "_blank",
                                                    className: classes.block,
                                                    children: "Presentation"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablito",
                                                    onClick: (e)=>e.preventDefault(),
                                                    className: classes.block,
                                                    children: "Discover"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablito",
                                                    onClick: (e)=>e.preventDefault(),
                                                    className: classes.block,
                                                    children: "Payment"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://novellogiks.com/contact-us?ref=njsmkp-footer-components",
                                                    target: "_blank",
                                                    className: classes.block,
                                                    children: "Contact us"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.rightLinks,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    href: "https://twitter.com/CreativeTim?ref=creativetim",
                                                    target: "_blank",
                                                    color: "white",
                                                    justIcon: true,
                                                    simple: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-twitter"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    href: "https://dribbble.com/creativetim?ref=creativetim",
                                                    target: "_blank",
                                                    color: "white",
                                                    justIcon: true,
                                                    simple: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-dribbble"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    href: "https://instagram.com/CreativeTimOfficial?ref=creativetim",
                                                    target: "_blank",
                                                    color: "white",
                                                    justIcon: true,
                                                    simple: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-instagram"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                        theme: "dark",
                        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.left,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                        className: classes.list,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    className: classes.block,
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: "Blog"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    className: classes.block,
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: "Presentation"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    className: classes.block,
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: "Discover"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    className: classes.block,
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: "Payment"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    className: classes.block,
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: "Contact Us"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.right,
                                    children: [
                                        "Copyright \xa9 ",
                                        1900 + new Date().getYear(),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://novellogiks.com?ref=njsmkp-footer-components",
                                            target: "_blank",
                                            className: classes.aClasses,
                                            children: "Sunil"
                                        }),
                                        " ",
                                        "All Rights Reserved."
                                    ]
                                })
                            ]
                        }),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "About Us"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "Sunil is a startup that creates design tools that make the web development process faster and easier.",
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "We love the web and care deeply for how users interact with a digital product. We power businesses and individuals to create better looking web projects around the world.",
                                                " "
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "Social Feed"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: classes.socialFeed,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "How to handle ethical disagreements with your clients."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "The tangible benefits of designing at 1x pixel density."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-facebook-square"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "A collection of 25 stunning sites that you can use for inspiration."
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "Instagram Feed"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: classes.galleryFeed,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/faces/card-profile6-square.jpg",
                                                    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
                                                    alt: "..."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/faces/christian.jpg",
                                                    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
                                                    alt: "..."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/faces/card-profile4-square.jpg",
                                                    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
                                                    alt: "..."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/faces/card-profile1-square.jpg",
                                                    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
                                                    alt: "..."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/faces/marc.jpg",
                                                    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
                                                    alt: "..."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/faces/kendall.jpg",
                                                    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
                                                    alt: "..."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/faces/card-profile5-square.jpg",
                                                    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
                                                    alt: "..."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/faces/card-profile1-square.jpg",
                                                    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
                                                    alt: "..."
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                        theme: "white",
                        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: external_classnames_default()(classes.pullCenter, classes.copyRight),
                            children: [
                                "Copyright \xa9 ",
                                1900 + new Date().getYear(),
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://novellogiks.com?ref=njsmkp-footer-components",
                                    target: "_blank",
                                    children: "Sunil"
                                }),
                                " ",
                                "All Rights Reserved."
                            ]
                        }),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.footer,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 2,
                                        md: 2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "About Us"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: classes.linksVertical,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Blog"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "About us"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Presentation"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Contact Us"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 2,
                                        md: 2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "Market"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: classes.linksVertical,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Sales FAQ"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "How to register"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Sell goods"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Receive Payment"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Transactions issues"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Affiliates program"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "Social Feed"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: classes.socialFeed,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-twitter"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "How to handle ethical disagreements with your clients."
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-twitter"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "The tangible benefits of designing at 1x pixel density."
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-facebook-square"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "A collection of 25 stunning sites that you can use for inspiration."
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "Follow Us"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: classes.socialButtons,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            href: "#pablo",
                                                            color: "twitter",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-twitter"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            href: "#pablo",
                                                            color: "facebook",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-facebook-square"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            href: "#pablo",
                                                            color: "dribbble",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-dribbble"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            href: "#pablo",
                                                            color: "google",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-google-plus-g"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            href: "#pablo",
                                                            color: "instagram",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                children: [
                                                    "Numbers Don",
                                                    "'",
                                                    "t Lie"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                children: [
                                                    "14.521 ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "Freelancers"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                children: [
                                                    "1.423.183 ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "Transactions"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                        theme: "white",
                        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: classes.socialButtons,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                simple: true,
                                                href: "#pablo",
                                                color: "twitter",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                simple: true,
                                                href: "#pablo",
                                                color: "facebook",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook-square"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                simple: true,
                                                href: "#pablo",
                                                color: "dribbble",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-dribbble"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                simple: true,
                                                href: "#pablo",
                                                color: "google",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-google-plus-g"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                simple: true,
                                                href: "#pablo",
                                                color: "youtube",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-youtube"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: external_classnames_default()(classes.pullCenter, classes.copyRight),
                                    children: [
                                        "Copyright \xa9 ",
                                        1900 + new Date().getYear(),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://novellogiks.com?ref=njsmkp-footer-components",
                                            target: "_blank",
                                            children: "Sunil"
                                        }),
                                        " ",
                                        "All Rights Reserved."
                                    ]
                                })
                            ]
                        }),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.footer,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 3,
                                        md: 3,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#pablo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: "Material Kit PRO"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Probably the best UI Kit in the world! We know you",
                                                    "'",
                                                    "ve been waiting for it, so don",
                                                    "'",
                                                    "t be shy!"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 2,
                                        md: 2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "About"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: classes.linksVertical,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Blog"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "About us"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Presentation"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Contact us"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 2,
                                        md: 2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "Market"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: classes.linksVertical,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Sales FAQ"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "How to register"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Sell Goods"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Receive Payment"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Transactions Issues"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 2,
                                        md: 2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "Legal"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: classes.linksVertical,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Transactions FAQ"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Terms & conditions"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Licenses"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 3,
                                        md: 3,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "Subscribe to Newsletter"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                                        id: "footeremail",
                                                        formControlProps: {
                                                            fullWidth: false,
                                                            className: classes.customFormControl
                                                        },
                                                        inputProps: {
                                                            placeholder: "Your Email..."
                                                        }
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        color: "primary",
                                                        justIcon: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {})
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./styles/jss/novel-logiks/components/typographyStyle.js
var typographyStyle = __webpack_require__(4307);
;// CONCATENATED MODULE: ./components/Typography/Small.js


// nodejs library to set properties for components


// core components

const Small_useStyles = makeStyles_default()(typographyStyle/* default */.Z);
function Small(props) {
    const { children  } = props;
    const classes = Small_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.defaultFontStyle + " " + classes.smallText,
        children: children
    });
};
Small.propTypes = {
    children: (external_prop_types_default()).node
};

;// CONCATENATED MODULE: ./components/Typography/Danger.js


// nodejs library to set properties for components


// core components

const Danger_useStyles = makeStyles_default()(typographyStyle/* default */.Z);
function Danger(props) {
    const { children  } = props;
    const classes = Danger_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.defaultFontStyle + " " + classes.dangerText,
        children: children
    });
};
Danger.propTypes = {
    children: (external_prop_types_default()).node
};

// EXTERNAL MODULE: ./components/Typography/Warning.js
var Warning = __webpack_require__(4951);
;// CONCATENATED MODULE: ./components/Typography/Success.js


// nodejs library to set properties for components


// core components

const Success_useStyles = makeStyles_default()(typographyStyle/* default */.Z);
function Success(props) {
    const { children  } = props;
    const classes = Success_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.defaultFontStyle + " " + classes.successText,
        children: children
    });
};
Success.propTypes = {
    children: (external_prop_types_default()).node
};

// EXTERNAL MODULE: ./components/Typography/Info.js
var Info = __webpack_require__(7479);
;// CONCATENATED MODULE: ./components/Typography/Primary.js


// nodejs library to set properties for components


// core components

const Primary_useStyles = makeStyles_default()(typographyStyle/* default */.Z);
function Primary(props) {
    const { children  } = props;
    const classes = Primary_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.defaultFontStyle + " " + classes.primaryText,
        children: children
    });
};
Primary.propTypes = {
    children: (external_prop_types_default()).node
};

// EXTERNAL MODULE: ./components/Typography/Muted.js
var Muted = __webpack_require__(3278);
;// CONCATENATED MODULE: ./components/Typography/Quote.js


// nodejs library that concatenates classes

// nodejs library to set properties for components


// core components

const Quote_useStyles = makeStyles_default()(typographyStyle/* default */.Z);
function Quote(props) {
    const { text , author , authorClassName , textClassName  } = props;
    const classes = Quote_useStyles();
    const quoteClasses = external_classnames_default()(classes.defaultFontStyle, classes.quote);
    const quoteTextClasses = external_classnames_default()({
        [classes.quoteText]: true,
        [textClassName]: textClassName !== undefined
    });
    const quoteAuthorClasses = external_classnames_default()({
        [classes.quoteAuthor]: true,
        [authorClassName]: authorClassName !== undefined
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("blockquote", {
        className: quoteClasses,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: quoteTextClasses,
                children: text
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                className: quoteAuthorClasses,
                children: author
            })
        ]
    });
};
Quote.propTypes = {
    text: (external_prop_types_default()).node,
    author: (external_prop_types_default()).node,
    textClassName: (external_prop_types_default()).string,
    authorClassName: (external_prop_types_default()).string
};

;// CONCATENATED MODULE: external "@mui/material/Tooltip"
const Tooltip_namespaceObject = require("@mui/material/Tooltip");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Person"
const Person_namespaceObject = require("@mui/icons-material/Person");
var Person_default = /*#__PURE__*/__webpack_require__.n(Person_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Edit"
const Edit_namespaceObject = require("@mui/icons-material/Edit");
var Edit_default = /*#__PURE__*/__webpack_require__.n(Edit_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Remove"
const Remove_namespaceObject = require("@mui/icons-material/Remove");
var Remove_default = /*#__PURE__*/__webpack_require__.n(Remove_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Add"
const Add_namespaceObject = require("@mui/icons-material/Add");
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/KeyboardArrowRight"
const KeyboardArrowRight_namespaceObject = require("@mui/icons-material/KeyboardArrowRight");
var KeyboardArrowRight_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowRight_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Reply"
const Reply_namespaceObject = require("@mui/icons-material/Reply");
var Reply_default = /*#__PURE__*/__webpack_require__.n(Reply_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Table"
const Table_namespaceObject = require("@mui/material/Table");
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableBody"
const TableBody_namespaceObject = require("@mui/material/TableBody");
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableCell"
const TableCell_namespaceObject = require("@mui/material/TableCell");
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableHead"
const TableHead_namespaceObject = require("@mui/material/TableHead");
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableRow"
const TableRow_namespaceObject = require("@mui/material/TableRow");
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_namespaceObject);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/components/tableStyle.js

const tableStyle = {
    warning: {
        color: novel_logiks/* warningColor.0 */.MA[0]
    },
    primary: {
        color: novel_logiks/* primaryColor.0 */.lr[0]
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
    right: {
        textAlign: "right"
    },
    table: {
        marginBottom: "0",
        width: "100%",
        maxWidth: "100%",
        backgroundColor: "transparent",
        borderSpacing: "0",
        borderCollapse: "collapse",
        overflow: "auto",
        "& > tbody > tr, & > thead > tr": {
            height: "auto"
        }
    },
    tableShoppingHead: {
        fontSize: "0.75em !important",
        textTransform: "uppercase !important"
    },
    tableCell: {
        ...novel_logiks/* defaultFont */.Df,
        lineHeight: "1.5em",
        padding: "12px 8px!important",
        verticalAlign: "middle",
        fontSize: "0.875rem",
        borderBottom: "none",
        borderTop: "1px solid " + novel_logiks/* grayColor.6 */.X_[6],
        position: "relative",
        color: novel_logiks/* grayColor.1 */.X_[1]
    },
    tableHeadCell: {
        fontSize: "1.063rem",
        borderBottomWidth: "1px",
        fontWeight: "300",
        color: novel_logiks/* grayColor.15 */.X_[15],
        borderTopWidth: "0 !important"
    },
    tableCellTotal: {
        fontWeight: "500",
        fontSize: "1.0625rem",
        paddingTop: "20px",
        textAlign: "right"
    },
    tableCellAmount: {
        fontSize: "26px",
        fontWeight: "300",
        marginTop: "5px",
        textAlign: "right"
    },
    tableResponsive: {
        minHeight: "0.1%",
        overflowX: "auto"
    },
    tableStripedRow: {
        backgroundColor: novel_logiks/* grayColor.16 */.X_[16]
    },
    tableRowHover: {
        "&:hover": {
            backgroundColor: novel_logiks/* grayColor.23 */.X_[23]
        }
    },
    warningRow: {
        backgroundColor: novel_logiks/* warningColor.4 */.MA[4],
        "&:hover": {
            backgroundColor: novel_logiks/* warningColor.5 */.MA[5]
        }
    },
    dangerRow: {
        backgroundColor: novel_logiks/* dangerColor.4 */.E7[4],
        "&:hover": {
            backgroundColor: novel_logiks/* dangerColor.5 */.E7[5]
        }
    },
    successRow: {
        backgroundColor: novel_logiks/* successColor.4 */.nq[4],
        "&:hover": {
            backgroundColor: novel_logiks/* successColor.5 */.nq[5]
        }
    },
    infoRow: {
        backgroundColor: novel_logiks/* infoColor.4 */.bE[4],
        "&:hover": {
            backgroundColor: novel_logiks/* infoColor.5 */.bE[5]
        }
    }
};
/* harmony default export */ const components_tableStyle = (tableStyle);

;// CONCATENATED MODULE: ./components/Table/Table.js











const Table_useStyles = makeStyles_default()(components_tableStyle);
function CustomTable(props) {
    const { tableHead , tableData , tableHeaderColor , hover , colorsColls , coloredColls , customCellClasses , customClassesForCells , striped , tableShopping , customHeadCellClasses , customHeadClassesForCells  } = props;
    const classes = Table_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.tableResponsive,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Table_default()), {
            className: classes.table,
            children: [
                tableHead !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx((TableHead_default()), {
                    className: classes[tableHeaderColor],
                    children: /*#__PURE__*/ jsx_runtime_.jsx((TableRow_default()), {
                        className: classes.tableRow,
                        children: tableHead.map((prop, key)=>{
                            const tableCellClasses = classes.tableHeadCell + " " + classes.tableCell + " " + external_classnames_default()({
                                [customHeadCellClasses[customHeadClassesForCells.indexOf(key)]]: customHeadClassesForCells.indexOf(key) !== -1,
                                [classes.tableShoppingHead]: tableShopping
                            });
                            return /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                className: tableCellClasses,
                                children: prop
                            }, key);
                        })
                    })
                }) : null,
                /*#__PURE__*/ jsx_runtime_.jsx((TableBody_default()), {
                    children: tableData.map((prop, key)=>{
                        var rowColor = "";
                        var rowColored = false;
                        if (prop.color !== undefined) {
                            rowColor = prop.color;
                            rowColored = true;
                            prop = prop.data;
                        }
                        const tableRowClasses = external_classnames_default()({
                            [classes.tableRowHover]: hover,
                            [classes[rowColor + "Row"]]: rowColored,
                            [classes.tableStripedRow]: striped && key % 2 === 0
                        });
                        if (prop.total) {
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                hover: hover,
                                className: tableRowClasses,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        className: classes.tableCell,
                                        colSpan: prop.colspan
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        className: classes.tableCell + " " + classes.tableCellTotal,
                                        children: "Total"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        className: classes.tableCell + " " + classes.tableCellAmount,
                                        children: prop.amount
                                    }),
                                    tableHead.length - (prop.colspan - 0 + 2) > 0 ? /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        className: classes.tableCell,
                                        colSpan: tableHead.length - (prop.colspan - 0 + 2)
                                    }) : null
                                ]
                            }, key);
                        }
                        if (prop.purchase) {
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                hover: hover,
                                className: tableRowClasses,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        className: classes.tableCell,
                                        colSpan: prop.colspan
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        className: classes.tableCell + " " + classes.tableCellTotal,
                                        children: "Total"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        className: classes.tableCell + " " + classes.tableCellAmount,
                                        children: prop.amount
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        className: classes.tableCell + " " + classes.right,
                                        colSpan: prop.col.colspan,
                                        children: prop.col.text
                                    })
                                ]
                            }, key);
                        }
                        return /*#__PURE__*/ jsx_runtime_.jsx((TableRow_default()), {
                            hover: hover,
                            className: classes.tableRow + " " + tableRowClasses,
                            children: prop.map((prop, key)=>{
                                const tableCellClasses = classes.tableCell + " " + external_classnames_default()({
                                    [classes[colorsColls[coloredColls.indexOf(key)]]]: coloredColls.indexOf(key) !== -1,
                                    [customCellClasses[customClassesForCells.indexOf(key)]]: customClassesForCells.indexOf(key) !== -1
                                });
                                return /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                    className: tableCellClasses,
                                    children: prop
                                }, key);
                            })
                        }, key);
                    })
                })
            ]
        })
    });
};
CustomTable.defaultProps = {
    tableHeaderColor: "gray",
    hover: false,
    colorsColls: [],
    coloredColls: [],
    striped: false,
    customCellClasses: [],
    customClassesForCells: [],
    customHeadCellClasses: [],
    customHeadClassesForCells: []
};
CustomTable.propTypes = {
    tableHeaderColor: external_prop_types_default().oneOf([
        "warning",
        "primary",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    tableHead: external_prop_types_default().arrayOf((external_prop_types_default()).string),
    // Of(PropTypes.arrayOf(PropTypes.node)) || Of(PropTypes.object),
    tableData: (external_prop_types_default()).array,
    hover: (external_prop_types_default()).bool,
    coloredColls: external_prop_types_default().arrayOf((external_prop_types_default()).number),
    // Of(["warning","primary","danger","success","info","rose","gray"]) - colorsColls
    colorsColls: (external_prop_types_default()).array,
    customCellClasses: external_prop_types_default().arrayOf((external_prop_types_default()).string),
    customClassesForCells: external_prop_types_default().arrayOf((external_prop_types_default()).number),
    customHeadCellClasses: external_prop_types_default().arrayOf((external_prop_types_default()).string),
    customHeadClassesForCells: external_prop_types_default().arrayOf((external_prop_types_default()).number),
    striped: (external_prop_types_default()).bool,
    // this will cause some changes in font
    tableShopping: (external_prop_types_default()).bool
};

;// CONCATENATED MODULE: ./styles/jss/novel-logiks/components/mediaStyle.js

const mediaStyle = (theme)=>({
        media: {
            [theme.breakpoints.down("lg")]: {
                display: "block"
            },
            display: "flex",
            WebkitBoxAlign: "start",
            alignItems: "flex-start",
            "& p": {
                color: novel_logiks/* grayColor.0 */.X_[0],
                fontSize: "1rem",
                lineHeight: "1.6em"
            },
            "& $media $mediaBody": {
                paddingRight: "0px"
            }
        },
        mediaLink: {
            padding: "10px",
            float: "left !important"
        },
        mediaAvatar: {
            margin: "0 auto",
            width: "64px",
            height: "64px",
            overflow: "hidden",
            borderRadius: "50%",
            marginRight: "15px",
            boxShadow: "0 6px 10px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.14), 0 1px 18px 0 rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 3px 5px -1px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.2)",
            "& img": {
                width: "100%"
            }
        },
        mediaBody: {
            paddingRight: "10px",
            WebkitBoxFlex: "1",
            flex: "1"
        },
        mediaHeading: {
            ...novel_logiks/* title */.TN,
            marginTop: "10px",
            marginBottom: "10px",
            "& small": {
                fontFamily: "Montserrat"
            }
        },
        mediaFooter: {
            "& button, & a": {
                marginBottom: "20px"
            },
            "&:after": {
                display: "table",
                content: '" "',
                clear: "both"
            }
        }
    });
/* harmony default export */ const components_mediaStyle = (mediaStyle);

;// CONCATENATED MODULE: ./components/Media/Media.js


// nodejs library to set properties for components


// @mui/icons-material
// core components

const Media_useStyles = makeStyles_default()(components_mediaStyle);
function Media(props) {
    const { avatarLink , avatar , avatarAlt , title , body , footer , innerMedias , ...rest } = props;
    const classes = Media_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ...rest,
        className: classes.media,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: avatarLink,
                className: classes.mediaLink,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.mediaAvatar,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: avatar,
                        alt: avatarAlt
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.mediaBody,
                children: [
                    title !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: classes.mediaHeading,
                        children: title
                    }) : null,
                    body,
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.mediaFooter,
                        children: footer
                    }),
                    innerMedias !== undefined ? innerMedias.map((prop)=>{
                        return prop;
                    }) : null
                ]
            })
        ]
    });
};
Media.defaultProps = {
    avatarLink: "#pablo",
    avatarAlt: "..."
};
Media.propTypes = {
    avatarLink: (external_prop_types_default()).string,
    avatar: (external_prop_types_default()).string,
    avatarAlt: (external_prop_types_default()).string,
    title: (external_prop_types_default()).node,
    body: (external_prop_types_default()).node,
    footer: (external_prop_types_default()).node,
    innerMedias: external_prop_types_default().arrayOf((external_prop_types_default()).object)
};

;// CONCATENATED MODULE: ./styles/jss/novel-logiks/buttonGroupStyle.js
const buttonGroupStyle = {
    buttonGroup: {
        position: "relative",
        margin: "10px 1px",
        display: "inline-flex",
        verticalAlign: "middle"
    },
    firstButton: {
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
        margin: "0",
        position: "relative",
        float: "left",
        "&:hover": {
            zIndex: "2"
        }
    },
    middleButton: {
        borderRadius: "0",
        margin: "0",
        position: "relative",
        float: "left",
        "&:hover": {
            zIndex: "2"
        }
    },
    lastButton: {
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0",
        margin: "0",
        "&:hover": {
            zIndex: "2"
        }
    }
};
/* harmony default export */ const novel_logiks_buttonGroupStyle = (buttonGroupStyle);

// EXTERNAL MODULE: ./styles/jss/novel-logiks/tooltipsStyle.js
var tooltipsStyle = __webpack_require__(746);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/pages/componentsSections/contentAreas.js




const contentAreas = {
    title: novel_logiks/* title */.TN,
    mrAuto: novel_logiks/* mrAuto */.kq,
    mlAuto: novel_logiks/* mlAuto */.hU,
    ...customCheckboxRadioSwitchStyle,
    ...novel_logiks_buttonGroupStyle,
    ...tooltipsStyle/* default */.Z,
    space50: {
        height: "50px",
        display: "block"
    },
    padding0: {
        padding: "0 !important"
    },
    imgContainer: {
        width: "120px",
        maxHeight: "160px",
        overflow: "hidden",
        display: "block",
        "& img": {
            width: "100%"
        }
    },
    description: {
        maxWidth: "150px"
    },
    tdName: {
        minWidth: "200px",
        fontWeight: "400",
        fontSize: "1.5em"
    },
    tdNameAnchor: {
        color: novel_logiks/* grayColor.1 */.X_[1]
    },
    tdNameSmall: {
        color: novel_logiks/* grayColor.0 */.X_[0],
        fontSize: "0.75em",
        fontWeight: "300"
    },
    tdNumber: {
        textAlign: "right",
        minWidth: "150px",
        fontWeight: "300",
        fontSize: "1.125em !important"
    },
    tdNumberSmall: {
        marginRight: "3px"
    },
    tdNumberAndButtonGroup: {
        lineHeight: "1 !important",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            marginRight: "0"
        },
        "& svg": {
            marginRight: "0"
        }
    },
    customFont: {
        fontSize: "16px !important"
    },
    actionButton: {
        margin: "0px",
        padding: "5px"
    },
    textCenter: {
        textAlign: "center"
    },
    textRight: {
        textAlign: "right"
    },
    floatRight: {
        float: "right"
    },
    justifyContentCenter: {
        WebkitBoxPack: "center !important",
        MsFlexPack: "center !important",
        justifyContent: "center !important"
    },
    signInButton: {
        "& button": {
            marginRight: "5px"
        }
    }
};
/* harmony default export */ const componentsSections_contentAreas = (contentAreas);

;// CONCATENATED MODULE: ./pages-sections/components/SectionContentAreas.js





// @mui/material icons









// core components








const SectionContentAreas_useStyles = makeStyles_default()(componentsSections_contentAreas);
function SectionContentAreas() {
    const [checked, setChecked] = external_react_default().useState([
        1,
        3,
        5
    ]);
    const handleToggle = (value)=>{
        const currentIndex = checked.indexOf(value);
        const newChecked = [
            ...checked
        ];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    const classes = SectionContentAreas_useStyles();
    const fillButtons = [
        {
            color: "info",
            icon: (Person_default())
        },
        {
            color: "success",
            icon: (Edit_default())
        },
        {
            color: "danger",
            icon: (Close_default())
        }
    ].map((prop, key)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
            justIcon: true,
            size: "sm",
            color: prop.color,
            children: /*#__PURE__*/ jsx_runtime_.jsx(prop.icon, {})
        }, key);
    });
    const simpleButtons = [
        {
            color: "info",
            icon: (Person_default())
        },
        {
            color: "success",
            icon: (Edit_default())
        },
        {
            color: "danger",
            icon: (Close_default())
        }
    ].map((prop, key)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
            simple: true,
            justIcon: true,
            size: "sm",
            color: prop.color,
            children: /*#__PURE__*/ jsx_runtime_.jsx(prop.icon, {})
        }, key);
    });
    const roundButtons = [
        {
            color: "info",
            icon: (Person_default())
        },
        {
            color: "success",
            icon: (Edit_default())
        },
        {
            color: "danger",
            icon: (Close_default())
        }
    ].map((prop, key)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
            round: true,
            justIcon: true,
            size: "sm",
            color: prop.color,
            children: /*#__PURE__*/ jsx_runtime_.jsx(prop.icon, {})
        }, key);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "cd-section",
        id: "contentAreas",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Content Areas"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "tables",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.title,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Tables"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 12,
                                md: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Simple Table"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 10,
                                md: 8,
                                className: classes.mrAuto + " " + classes.mlAuto,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: "Simple With Actions"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomTable, {
                                        tableHead: [
                                            "#",
                                            "Name",
                                            "Job Position",
                                            "Since",
                                            "Salary",
                                            "Actions"
                                        ],
                                        tableData: [
                                            [
                                                "1",
                                                "Andrew Mike",
                                                "Develop",
                                                "2013",
                                                "€ 99,225",
                                                fillButtons
                                            ],
                                            [
                                                "2",
                                                "John Doe",
                                                "Design",
                                                "2012",
                                                "€ 89,241",
                                                roundButtons
                                            ],
                                            [
                                                "3",
                                                "Alex Mike",
                                                "Design",
                                                "2010",
                                                "€ 92,144",
                                                simpleButtons
                                            ],
                                            [
                                                "4",
                                                "Mike Monday",
                                                "Marketing",
                                                "2013",
                                                "€ 49,990",
                                                roundButtons
                                            ],
                                            [
                                                "5",
                                                "Paul Dickens",
                                                "Communication",
                                                "2015",
                                                "€ 69,201",
                                                fillButtons
                                            ]
                                        ],
                                        customCellClasses: [
                                            classes.textCenter,
                                            classes.textRight,
                                            classes.textRight
                                        ],
                                        customClassesForCells: [
                                            0,
                                            4,
                                            5
                                        ],
                                        customHeadCellClasses: [
                                            classes.textCenter,
                                            classes.textRight,
                                            classes.textRight
                                        ],
                                        customHeadClassesForCells: [
                                            0,
                                            4,
                                            5
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: "Striped With Checkboxes"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomTable, {
                                        striped: true,
                                        tableHead: [
                                            "#",
                                            "",
                                            "Product Name",
                                            "Type",
                                            "Qty",
                                            "Price",
                                            "Amount"
                                        ],
                                        tableData: [
                                            [
                                                "1",
                                                /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                    checked: checked.indexOf(1) !== -1,
                                                    tabIndex: -1,
                                                    onClick: ()=>handleToggle(1),
                                                    checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                        className: classes.checkedIcon
                                                    }),
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                        className: classes.uncheckedIcon
                                                    }),
                                                    classes: {
                                                        checked: classes.checked,
                                                        root: classes.checkRoot
                                                    }
                                                }, 81267378),
                                                "Moleskine Agenda",
                                                "Office",
                                                "25",
                                                "€ 49",
                                                "€ 1,225"
                                            ],
                                            [
                                                "2",
                                                /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                    checked: checked.indexOf(2) !== -1,
                                                    tabIndex: -1,
                                                    onClick: ()=>handleToggle(2),
                                                    checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                        className: classes.checkedIcon
                                                    }),
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                        className: classes.uncheckedIcon
                                                    }),
                                                    classes: {
                                                        checked: classes.checked,
                                                        root: classes.checkRoot
                                                    }
                                                }, 81267378),
                                                "Stabilo Pen",
                                                "Office",
                                                "30",
                                                "€ 10",
                                                "€ 300"
                                            ],
                                            [
                                                "3",
                                                /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                    checked: checked.indexOf(3) !== -1,
                                                    tabIndex: -1,
                                                    onClick: ()=>handleToggle(3),
                                                    checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                        className: classes.checkedIcon
                                                    }),
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                        className: classes.uncheckedIcon
                                                    }),
                                                    classes: {
                                                        checked: classes.checked,
                                                        root: classes.checkRoot
                                                    }
                                                }, 564267512),
                                                "A4 Paper Pack",
                                                "Office",
                                                "50",
                                                "€ 10.99",
                                                "€ 109"
                                            ],
                                            [
                                                "4",
                                                /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                    checked: checked.indexOf(4) !== -1,
                                                    tabIndex: -1,
                                                    onClick: ()=>handleToggle(4),
                                                    checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                        className: classes.checkedIcon
                                                    }),
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                        className: classes.uncheckedIcon
                                                    }),
                                                    classes: {
                                                        checked: classes.checked,
                                                        root: classes.checkRoot
                                                    }
                                                }, 5642675122),
                                                "Apple iPad",
                                                "Communication",
                                                "10",
                                                "€ 499.00",
                                                "€ 4,990"
                                            ],
                                            [
                                                "5",
                                                /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                    checked: checked.indexOf(5) !== -1,
                                                    tabIndex: -1,
                                                    onClick: ()=>handleToggle(5),
                                                    checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                        className: classes.checkedIcon
                                                    }),
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                        className: classes.uncheckedIcon
                                                    }),
                                                    classes: {
                                                        checked: classes.checked,
                                                        root: classes.checkRoot
                                                    }
                                                }, 56426751223),
                                                "Apple iPhone",
                                                "Communication",
                                                "10",
                                                "€ 599.00",
                                                "€ 5,999"
                                            ],
                                            {
                                                total: true,
                                                colspan: "5",
                                                amount: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                            children: "€"
                                                        }),
                                                        "12,999"
                                                    ]
                                                })
                                            }
                                        ],
                                        customCellClasses: [
                                            classes.textCenter,
                                            classes.padding0,
                                            classes.textRight,
                                            classes.textRight
                                        ],
                                        customClassesForCells: [
                                            0,
                                            1,
                                            5,
                                            6
                                        ],
                                        customHeadCellClasses: [
                                            classes.textCenter,
                                            classes.textRight,
                                            classes.textRight
                                        ],
                                        customHeadClassesForCells: [
                                            0,
                                            5,
                                            6
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 12,
                                md: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Shopping Cart Table"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 12,
                                md: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomTable, {
                                    tableHead: [
                                        "",
                                        "PRODUCT",
                                        "COLOR",
                                        "SIZE",
                                        "PRICE",
                                        "QTY",
                                        "AMOUNT",
                                        ""
                                    ],
                                    tableData: [
                                        [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.imgContainer,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/product1.jpg",
                                                    alt: "...",
                                                    className: classes.img
                                                })
                                            }, 875643),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#jacket",
                                                        className: classes.tdNameAnchor,
                                                        children: "Spring Jacket"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: classes.tdNameSmall,
                                                        children: "by Dolce&Gabbana"
                                                    })
                                                ]
                                            }, 8756431),
                                            "Red",
                                            "M",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: classes.tdNumberSmall,
                                                        children: "€"
                                                    }),
                                                    " 549"
                                                ]
                                            }, 8756432),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    "1",
                                                    ` `,
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: classes.buttonGroup,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                color: "info",
                                                                size: "sm",
                                                                round: true,
                                                                className: classes.firstButton,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Remove_default()), {})
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                color: "info",
                                                                size: "sm",
                                                                round: true,
                                                                className: classes.lastButton,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Add_default()), {})
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, 8756435),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: classes.tdNumberSmall,
                                                        children: "€"
                                                    }),
                                                    " 549"
                                                ]
                                            }, 87564312),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                id: "close1",
                                                title: "Remove item",
                                                placement: "left",
                                                classes: {
                                                    tooltip: classes.tooltip
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    link: true,
                                                    className: classes.actionButton,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
                                                })
                                            }, 8756431234)
                                        ],
                                        [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.imgContainer,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/product2.jpg",
                                                    alt: "...",
                                                    className: classes.img
                                                })
                                            }, 875643),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "#jacket",
                                                        className: classes.tdNameAnchor,
                                                        children: [
                                                            "Short Pants",
                                                            " "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: classes.tdNameSmall,
                                                        children: "by Gucci"
                                                    })
                                                ]
                                            }, 875643),
                                            "Purple",
                                            "M",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: classes.tdNumberSmall,
                                                        children: "€"
                                                    }),
                                                    " 499"
                                                ]
                                            }, 875643),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    "2",
                                                    ` `,
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: classes.buttonGroup,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                color: "info",
                                                                size: "sm",
                                                                round: true,
                                                                className: classes.firstButton,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Remove_default()), {})
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                color: "info",
                                                                size: "sm",
                                                                round: true,
                                                                className: classes.lastButton,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Add_default()), {})
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, 875643),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: classes.tdNumberSmall,
                                                        children: "€"
                                                    }),
                                                    " 998"
                                                ]
                                            }, 875643),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                id: "close2",
                                                title: "Remove item",
                                                placement: "left",
                                                classes: {
                                                    tooltip: classes.tooltip
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    link: true,
                                                    className: classes.actionButton,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
                                                })
                                            }, 875643)
                                        ],
                                        [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.imgContainer,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/product3.jpg",
                                                    alt: "...",
                                                    className: classes.img
                                                })
                                            }, 875643),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#jacket",
                                                        className: classes.tdNameAnchor,
                                                        children: "Pencil Skirt"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: classes.tdNameSmall,
                                                        children: "by Valentino"
                                                    })
                                                ]
                                            }, 875643),
                                            "White",
                                            "XL",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: classes.tdNumberSmall,
                                                        children: "€"
                                                    }),
                                                    " 799"
                                                ]
                                            }, 875643),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    "1",
                                                    ` `,
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: classes.buttonGroup,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                color: "info",
                                                                size: "sm",
                                                                round: true,
                                                                className: classes.firstButton,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Remove_default()), {})
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                color: "info",
                                                                size: "sm",
                                                                round: true,
                                                                className: classes.lastButton,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Add_default()), {})
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, 875643),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: classes.tdNumberSmall,
                                                        children: "€"
                                                    }),
                                                    " 799"
                                                ]
                                            }, 875643),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                id: "close3",
                                                title: "Remove item",
                                                placement: "left",
                                                classes: {
                                                    tooltip: classes.tooltip
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    link: true,
                                                    className: classes.actionButton,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
                                                })
                                            }, 875643)
                                        ],
                                        {
                                            purchase: true,
                                            colspan: "3",
                                            amount: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "€"
                                                    }),
                                                    "2,346"
                                                ]
                                            }),
                                            col: {
                                                colspan: 3,
                                                text: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                    color: "info",
                                                    round: true,
                                                    children: [
                                                        "Complete Purchase ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx((KeyboardArrowRight_default()), {})
                                                    ]
                                                })
                                            }
                                        }
                                    ],
                                    tableShopping: true,
                                    customHeadCellClasses: [
                                        classes.textCenter,
                                        classes.description,
                                        classes.description,
                                        classes.textCenter,
                                        classes.textRight,
                                        classes.textRight
                                    ],
                                    customHeadClassesForCells: [
                                        0,
                                        2,
                                        3,
                                        4,
                                        5,
                                        6
                                    ],
                                    customCellClasses: [
                                        classes.tdName,
                                        classes.customFont,
                                        classes.customFont,
                                        classes.tdNumber + " " + classes.textCenter,
                                        classes.tdNumber + " " + classes.tdNumberAndButtonGroup,
                                        classes.tdNumber + " " + classes.textCenter
                                    ],
                                    customClassesForCells: [
                                        1,
                                        2,
                                        3,
                                        4,
                                        5,
                                        6
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.space50
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "comments",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.title,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Comments"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 8,
                            md: 8,
                            className: classes.mlAuto + " " + classes.mrAuto,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: classes.title + " " + classes.textCenter,
                                            children: "10 Comments"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Media, {
                                            avatar: "/img/faces/avatar.jpg",
                                            title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    "Tina Andrew ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "\xb7 7 minutes ago"
                                                    })
                                                ]
                                            }),
                                            body: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            "Chance too good. God level bars. I",
                                                            "'",
                                                            "m so proud of @LifeOfDesiigner #1 song in the country. Panda! Don",
                                                            "'",
                                                            "t be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            "All praises and blessings to the families of people who never gave up on dreams. Don",
                                                            "'",
                                                            "t forget, You",
                                                            "'",
                                                            "re Awesome!"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            footer: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                        id: "tooltip-tina",
                                                        title: "Reply to comment",
                                                        placement: "top",
                                                        classes: {
                                                            tooltip: classes.tooltip
                                                        },
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                            color: "primary",
                                                            simple: true,
                                                            className: classes.floatRight,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Reply_default()), {}),
                                                                " Reply"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                        color: "danger",
                                                        simple: true,
                                                        className: classes.floatRight,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {}),
                                                            " 243"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            innerMedias: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Media, {
                                                    avatar: "/img/faces/kendall.jpg",
                                                    body: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                                        id: "reply",
                                                        formControlProps: {
                                                            fullWidth: true
                                                        },
                                                        inputProps: {
                                                            multiline: true,
                                                            rows: 4,
                                                            placeholder: " Write some nice stuff or nothing..."
                                                        }
                                                    }),
                                                    footer: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                        color: "primary",
                                                        className: classes.floatRight,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Reply_default()), {}),
                                                            " Reply"
                                                        ]
                                                    })
                                                }, Math.random() * Date.now())
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Media, {
                                            avatar: "/img/faces/card-profile1-square.jpg",
                                            title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    "John Camber ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "\xb7 Yesterday"
                                                    })
                                                ]
                                            }),
                                            body: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news."
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            "Don",
                                                            "'",
                                                            "t forget, You",
                                                            "'",
                                                            "re Awesome!"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            footer: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                        id: "tooltip-john",
                                                        title: "Reply to comment",
                                                        placement: "top",
                                                        classes: {
                                                            tooltip: classes.tooltip
                                                        },
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                            color: "primary",
                                                            simple: true,
                                                            className: classes.floatRight,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Reply_default()), {}),
                                                                " Reply"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                        link: true,
                                                        className: classes.floatRight,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {}),
                                                            " 25"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            innerMedias: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Media, {
                                                    avatar: "/img/faces/avatar.jpg",
                                                    title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            "Tina Andrew ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                children: "\xb7 2 Days Ago"
                                                            })
                                                        ]
                                                    }),
                                                    body: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news."
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                children: [
                                                                    "Don",
                                                                    "'",
                                                                    "t forget, You",
                                                                    "'",
                                                                    "re Awesome!"
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    footer: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                                id: "tooltip-tina2",
                                                                title: "Reply to comment",
                                                                placement: "top",
                                                                classes: {
                                                                    tooltip: classes.tooltip
                                                                },
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                    color: "primary",
                                                                    simple: true,
                                                                    className: classes.floatRight,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Reply_default()), {}),
                                                                        " Reply"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                simple: true,
                                                                color: "danger",
                                                                className: classes.floatRight,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {}),
                                                                    " 243"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }, Math.random() * Date.now())
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Media, {
                                            avatar: "/img/faces/avatar.jpg",
                                            title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    "Rosa Thompson ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "\xb7 2 Days Ago"
                                                    })
                                                ]
                                            }),
                                            body: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news."
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            "Don",
                                                            "'",
                                                            "t forget, You",
                                                            "'",
                                                            "re Awesome!"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            footer: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                        id: "tooltip-tina2",
                                                        title: "Reply to comment",
                                                        placement: "top",
                                                        classes: {
                                                            tooltip: classes.tooltip
                                                        },
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                            color: "primary",
                                                            simple: true,
                                                            className: classes.floatRight,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Reply_default()), {}),
                                                                " Reply"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                        simple: true,
                                                        color: "danger",
                                                        className: classes.floatRight,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {}),
                                                            " 243"
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, Math.random() * Date.now()),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                                                className: classes.textCenter + " " + classes.justifyContentCenter,
                                                pages: [
                                                    {
                                                        text: "\xab"
                                                    },
                                                    {
                                                        text: 1
                                                    },
                                                    {
                                                        text: 2
                                                    },
                                                    {
                                                        active: true,
                                                        text: 3
                                                    },
                                                    {
                                                        text: 4
                                                    },
                                                    {
                                                        text: 5
                                                    },
                                                    {
                                                        text: "\xbb"
                                                    }
                                                ],
                                                color: "primary"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    className: classes.textCenter,
                                    children: [
                                        "Post your comment ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: "- Logged In User -"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Media, {
                                    avatar: "/img/faces/avatar.jpg",
                                    body: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                        id: "logged",
                                        formControlProps: {
                                            fullWidth: true
                                        },
                                        inputProps: {
                                            multiline: true,
                                            rows: 6,
                                            placeholder: " Write some nice stuff or nothing..."
                                        }
                                    }),
                                    footer: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                        color: "primary",
                                        className: classes.floatRight,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Reply_default()), {}),
                                            " Reply"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    className: classes.textCenter,
                                    children: [
                                        "Post your comment ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: "- Not Logged In User -"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Media, {
                                    avatar: "/img/placeholder.jpg",
                                    body: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                        xs: 12,
                                                        sm: 6,
                                                        md: 6,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                                            id: "not-logged-name",
                                                            formControlProps: {
                                                                fullWidth: true
                                                            },
                                                            inputProps: {
                                                                placeholder: "Your Name"
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                        xs: 12,
                                                        sm: 6,
                                                        md: 6,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                                            id: "not-logged-email",
                                                            formControlProps: {
                                                                fullWidth: true
                                                            },
                                                            inputProps: {
                                                                placeholder: "Your Email"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                                id: "not-logged-message",
                                                formControlProps: {
                                                    fullWidth: true
                                                },
                                                inputProps: {
                                                    multiline: true,
                                                    rows: 6,
                                                    placeholder: " Write some nice stuff or nothing..."
                                                }
                                            })
                                        ]
                                    }),
                                    footer: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: classes.signInButton,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: "SIGN IN WITH"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                round: true,
                                                color: "twitter",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                round: true,
                                                color: "facebook",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook-square"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                round: true,
                                                color: "google",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-google-plus-square"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                color: "primary",
                                                className: classes.floatRight,
                                                children: "Post comment"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./styles/jss/novel-logiks/imagesStyles.js
var imagesStyles = __webpack_require__(6696);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/pages/componentsSections/typographyStyle.js


const typographyStyle_typographyStyle = {
    section: {
        padding: "70px 0"
    },
    container: novel_logiks/* container */.nC,
    space50: {
        height: "50px",
        display: "block"
    },
    title: {
        ...novel_logiks/* title */.TN,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    typo: {
        paddingLeft: "25%",
        marginBottom: "40px",
        position: "relative",
        width: "100%"
    },
    note: {
        fontFamily: "Montserrat",
        bottom: "10px",
        color: novel_logiks/* grayColor.21 */.X_[21],
        display: "block",
        fontWeight: "400",
        fontSize: "13px",
        lineHeight: "13px",
        left: "0",
        marginLeft: "20px",
        position: "absolute",
        width: "260px"
    },
    marginLeft: {
        marginLeft: "auto !important"
    },
    ...imagesStyles/* default */.Z
};
/* harmony default export */ const componentsSections_typographyStyle = (typographyStyle_typographyStyle);

;// CONCATENATED MODULE: ./pages-sections/components/SectionTypography.js



// @mui/icons-material
// core components












const SectionTypography_useStyles = makeStyles_default()(componentsSections_typographyStyle);
function SectionTypography() {
    const classes = SectionTypography_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "typography",
                    className: "cd-section",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.title,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "Typography"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Header 1"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Header 2"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Header 3"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Header 4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Header 5"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Header 6"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Header 1"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: classes.title,
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Header 2"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: classes.title,
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Header 3"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: classes.title,
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Header 4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: classes.title,
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Paragraph"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Quote"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Quote, {
                                            text: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.",
                                            author: " Kanye West, Musician"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Muted Text"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Muted/* default */.Z, {
                                            children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Primary Text"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Primary, {
                                            children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Info Text"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Info/* default */.Z, {
                                            children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Success Text"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Success, {
                                            children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Warning Text"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Warning/* default */.Z, {
                                            children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Danger Text"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Danger, {
                                            children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Small Tag"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                            children: [
                                                "Header with small subtitle",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Small, {
                                                    children: [
                                                        "Use ",
                                                        '"',
                                                        "Small",
                                                        '"',
                                                        " tag for the headers"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.space50
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "images",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.title,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "Images"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 2,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "Rounded Image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/faces/avatar.jpg",
                                            alt: "...",
                                            className: classes.imgRounded + " " + classes.imgFluid
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 2,
                                    className: classes.marginLeft,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "Circle Image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/faces/avatar.jpg",
                                            alt: "...",
                                            className: classes.imgRoundedCircle + " " + classes.imgFluid
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 2,
                                    className: classes.marginLeft,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "Rounded Raised"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/faces/avatar.jpg",
                                            alt: "...",
                                            className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 2,
                                    className: classes.marginLeft,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "Circle Raised"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/faces/avatar.jpg",
                                            alt: "...",
                                            className: classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.space50
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SectionContentAreas, {})
            ]
        })
    });
};

;// CONCATENATED MODULE: external "@mui/icons-material/Share"
const Share_namespaceObject = require("@mui/icons-material/Share");
var Share_default = /*#__PURE__*/__webpack_require__.n(Share_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ChatBubble"
const ChatBubble_namespaceObject = require("@mui/icons-material/ChatBubble");
var ChatBubble_default = /*#__PURE__*/__webpack_require__.n(ChatBubble_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/TrendingUp"
const TrendingUp_namespaceObject = require("@mui/icons-material/TrendingUp");
var TrendingUp_default = /*#__PURE__*/__webpack_require__.n(TrendingUp_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/Subject"
var Subject_ = __webpack_require__(3684);
var Subject_default = /*#__PURE__*/__webpack_require__.n(Subject_);
;// CONCATENATED MODULE: external "@mui/icons-material/WatchLater"
const WatchLater_namespaceObject = require("@mui/icons-material/WatchLater");
var WatchLater_default = /*#__PURE__*/__webpack_require__.n(WatchLater_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Business"
const Business_namespaceObject = require("@mui/icons-material/Business");
var Business_default = /*#__PURE__*/__webpack_require__.n(Business_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Delete"
const Delete_namespaceObject = require("@mui/icons-material/Delete");
var Delete_default = /*#__PURE__*/__webpack_require__.n(Delete_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Bookmark"
const Bookmark_namespaceObject = require("@mui/icons-material/Bookmark");
var Bookmark_default = /*#__PURE__*/__webpack_require__.n(Bookmark_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Refresh"
const Refresh_namespaceObject = require("@mui/icons-material/Refresh");
var Refresh_default = /*#__PURE__*/__webpack_require__.n(Refresh_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Receipt"
const Receipt_namespaceObject = require("@mui/icons-material/Receipt");
var Receipt_default = /*#__PURE__*/__webpack_require__.n(Receipt_namespaceObject);
// EXTERNAL MODULE: ./components/Card/CardFooter.js + 1 modules
var CardFooter = __webpack_require__(5793);
// EXTERNAL MODULE: ./components/Card/CardAvatar.js + 1 modules
var CardAvatar = __webpack_require__(7532);
;// CONCATENATED MODULE: ./components/Typography/Rose.js


// nodejs library to set properties for components


// core components

const Rose_useStyles = makeStyles_default()(typographyStyle/* default */.Z);
function Rose(props) {
    const { children  } = props;
    const classes = Rose_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.defaultFontStyle + " " + classes.roseText,
        children: children
    });
};
Rose.propTypes = {
    children: (external_prop_types_default()).node
};

// EXTERNAL MODULE: ./styles/jss/novel-logiks/pages/componentsSections/sectionCards.js + 1 modules
var sectionCards = __webpack_require__(2045);
;// CONCATENATED MODULE: ./pages-sections/components/SectionCards.js




// @mui/icons-material















// core components














const SectionCards_useStyles = makeStyles_default()(sectionCards/* default */.Z);
function SectionCards() {
    const [activeRotate1, setActiveRotate1] = external_react_default().useState("");
    const [activeRotate2, setActiveRotate2] = external_react_default().useState("");
    const [activeRotate3, setActiveRotate3] = external_react_default().useState("");
    const classes = SectionCards_useStyles();
    external_react_default().useEffect(()=>{
        if (window) {
            window.addEventListener("resize", addStylesForRotatingCards);
        }
        addStylesForRotatingCards();
        return function cleanup() {
            if (window) {
                window.removeEventListener("resize", addStylesForRotatingCards);
            }
        };
    });
    const addStylesForRotatingCards = ()=>{
        var rotatingCards = document.getElementsByClassName(classes.cardRotate);
        for(let i = 0; i < rotatingCards.length; i++){
            var rotatingCard = rotatingCards[i];
            var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
            var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
            cardFront.style.height = "unset";
            cardFront.style.width = "unset";
            cardBack.style.height = "unset";
            cardBack.style.width = "unset";
            var rotatingWrapper = rotatingCard.parentElement;
            var cardWidth = rotatingCard.parentElement.offsetWidth;
            var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
            rotatingWrapper.style.height = cardHeight + "px";
            rotatingWrapper.style["margin-bottom"] = 30 + "px";
            cardFront.style.height = "unset";
            cardFront.style.width = "unset";
            cardBack.style.height = "unset";
            cardBack.style.width = "unset";
            cardFront.style.height = cardHeight + 35 + "px";
            cardFront.style.width = cardWidth + "px";
            cardBack.style.height = cardHeight + 35 + "px";
            cardBack.style.width = cardWidth + "px";
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "cd-section",
        id: "cards",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.sectionGray,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.container,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: classes.title,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    children: "Cards"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: "Blog Cards"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 6,
                                                    md: 6,
                                                    lg: 4,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                            blog: true,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                                    image: true,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            href: "#pablo",
                                                                            onClick: (e)=>e.preventDefault(),
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                    src: "/img/examples/card-blog1.jpg",
                                                                                    alt: "..."
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: classes.cardTitleAbsolute,
                                                                                    children: "This Summer Will be Awesome"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: classes.coloredShadow,
                                                                            style: {
                                                                                backgroundImage: "url('/img/examples/card-blog1.jpg')",
                                                                                opacity: "1"
                                                                            }
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(Info/* default */.Z, {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                                className: classes.cardCategory,
                                                                                children: "FASHION"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: classes.cardDescription,
                                                                            children: [
                                                                                "Don",
                                                                                "'",
                                                                                "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                            color: "info",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                    color: true,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                            className: classes.cardCategorySocialWhite,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fab fa-twitter"
                                                                                }),
                                                                                "Twitter"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                            className: classes.cardTitleWhite,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                href: "#pablo",
                                                                                onClick: (e)=>e.preventDefault(),
                                                                                children: [
                                                                                    '"',
                                                                                    "You Don",
                                                                                    "'",
                                                                                    "t Have to Sacrifice Joy to Build a Fabulous Business and Life",
                                                                                    '"'
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: classes.authorWhite,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                href: "#pablo",
                                                                                onClick: (e)=>e.preventDefault(),
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: "/img/faces/avatar.jpg",
                                                                                        alt: "...",
                                                                                        className: classes.imgRaised + " " + classes.avatar
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        children: "Tania Andrew"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: classes.statsWhite + " " + classes.mlAuto,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {}),
                                                                                "2.4K \xb7",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Share_default()), {}),
                                                                                "45"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 6,
                                                    md: 6,
                                                    lg: 4,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(Danger, {
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                                className: classes.cardCategory,
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((TrendingUp_default()), {}),
                                                                                    " TRENDING"
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                            className: classes.cardTitle,
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#pablo",
                                                                                onClick: (e)=>e.preventDefault(),
                                                                                children: "To Grow Your Business Start Focusing on Your Employees"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: classes.author,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                href: "#pablo",
                                                                                onClick: (e)=>e.preventDefault(),
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: "/img/faces/christian.jpg",
                                                                                        alt: "...",
                                                                                        className: classes.imgRaised + " " + classes.avatar
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        children: "Lord Alex"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: classes.stats + " " + classes.mlAuto,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {}),
                                                                                "345 \xb7",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((ChatBubble_default()), {}),
                                                                                "45"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                            blog: true,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                                    image: true,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#pablo",
                                                                            onClick: (e)=>e.preventDefault(),
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "/img/examples/card-blog2.jpg",
                                                                                alt: "..."
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: classes.coloredShadow,
                                                                            style: {
                                                                                backgroundImage: "url('/img/examples/card-blog2.jpg')",
                                                                                opacity: "1"
                                                                            }
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(Success, {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                                className: classes.cardCategory,
                                                                                children: "Legal"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                            className: classes.cardTitle,
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#pablo",
                                                                                onClick: (e)=>e.preventDefault(),
                                                                                children: "5 Common Legal Mistakes That Can Trip-Up Your Startup"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                            className: classes.cardDescription,
                                                                            children: [
                                                                                "Don",
                                                                                "'",
                                                                                "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: classes.author,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                href: "#pablo",
                                                                                onClick: (e)=>e.preventDefault(),
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: "/img/faces/marc.jpg",
                                                                                        alt: "...",
                                                                                        className: classes.imgRaised + " " + classes.avatar
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        children: "Mike John"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: classes.stats + " " + classes.mlAuto,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Schedule_default()), {}),
                                                                                "5 min read"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 6,
                                                    md: 6,
                                                    lg: 4,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                            blog: true,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                                    image: true,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#pablo",
                                                                            onClick: (e)=>e.preventDefault(),
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "/img/examples/blog8.jpg",
                                                                                alt: "..."
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: classes.coloredShadow,
                                                                            style: {
                                                                                backgroundImage: "url('/img/examples/blog8.jpg')",
                                                                                opacity: "1"
                                                                            }
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(Danger, {
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                                className: classes.cardCategory,
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((TrendingUp_default()), {}),
                                                                                    " TRENDING"
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                            className: classes.cardTitle,
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#pablo",
                                                                                onClick: (e)=>e.preventDefault(),
                                                                                children: "To Grow Your Business Start Focusing on Your Employees"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: classes.author,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                href: "#pablo",
                                                                                onClick: (e)=>e.preventDefault(),
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: "/img/faces/marc.jpg",
                                                                                        alt: "...",
                                                                                        className: classes.imgRaised + " " + classes.avatar
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        children: "Mike John"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: classes.stats + " " + classes.mlAuto,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Schedule_default()), {}),
                                                                                "5 min read"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                                            color: "success",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                color: true,
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                        className: classes.cardCategorySocialWhite,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "far fa-newspaper"
                                                                            }),
                                                                            "TechCrunch"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        className: classes.cardTitleWhite,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            href: "#pablo",
                                                                            onClick: (e)=>e.preventDefault(),
                                                                            children: [
                                                                                '"',
                                                                                "Focus on Your Employees",
                                                                                '"'
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        className: classes.cardDescriptionWhite,
                                                                        children: [
                                                                            "Don",
                                                                            "'",
                                                                            "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: classes.stats + " " + classes.justifyContentCenter,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                            color: "white",
                                                                            round: true,
                                                                            children: "Read Article"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.container,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.title,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Profile Cards"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 4,
                                                    md: 4,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                        profile: true,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                                image: true,
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "#pablo",
                                                                        onClick: (e)=>e.preventDefault(),
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "/img/examples/card-profile4.jpg",
                                                                                alt: "..."
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: classes.cardTitleAbsolute,
                                                                                children: "Tania Andrew"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: classes.coloredShadow,
                                                                        style: {
                                                                            backgroundImage: "url('/img/examples/card-profile4.jpg')",
                                                                            opacity: "1"
                                                                        }
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Info/* default */.Z, {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                            className: classes.cardCategory,
                                                                            children: "WEB DESIGNER"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        className: classes.cardDescription,
                                                                        children: [
                                                                            "Don",
                                                                            "'",
                                                                            "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                                profile: true,
                                                                className: classes.justifyContentCenter,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                        justIcon: true,
                                                                        simple: true,
                                                                        color: "twitter",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fab fa-twitter"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                        justIcon: true,
                                                                        simple: true,
                                                                        color: "dribbble",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fab fa-dribbble"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                        justIcon: true,
                                                                        simple: true,
                                                                        color: "instagram",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fab fa-instagram"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 4,
                                                    md: 4,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                        profile: true,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                                image: true,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#pablo",
                                                                        onClick: (e)=>e.preventDefault(),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "/img/examples/card-profile1.jpg",
                                                                            alt: "..."
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: classes.coloredShadow,
                                                                        style: {
                                                                            backgroundImage: "url('/img/examples/card-profile1.jpg')",
                                                                            opacity: "1"
                                                                        }
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        className: classes.cardTitle,
                                                                        children: "Alec Thompson"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                        className: classes.cardCategory + " " + classes.cardDescription,
                                                                        children: "CEO / CO-FOUNDER"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                                profile: true,
                                                                className: classes.justifyContentCenter,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                        justIcon: true,
                                                                        round: true,
                                                                        color: "twitter",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fab fa-twitter"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                        justIcon: true,
                                                                        round: true,
                                                                        color: "facebook",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fab fa-facebook"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                        justIcon: true,
                                                                        round: true,
                                                                        color: "google",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fab fa-google"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 4,
                                                    md: 4,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                        profile: true,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                                                profile: true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#pablo",
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/img/faces/marc.jpg",
                                                                        alt: "..."
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                        className: classes.cardCategory + " " + classes.cardDescription,
                                                                        children: "CEO / CO-FOUNDER"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        className: classes.cardTitle,
                                                                        children: "Alec Thompson"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        className: classes.cardDescription,
                                                                        children: [
                                                                            "Don",
                                                                            "'",
                                                                            "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                        round: true,
                                                                        color: "info",
                                                                        children: "Follow"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.container,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.title,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Full Background Cards"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 6,
                                                    md: 6,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                                        background: true,
                                                        style: {
                                                            backgroundImage: "url('/img/examples/office1.jpg')"
                                                        },
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                            background: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: classes.cardCategoryWhite,
                                                                    children: "PRODUCTIVITY APPS"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#pablo",
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                        className: classes.cardTitleWhite,
                                                                        children: "The Best Productivity Apps on Market"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    className: classes.cardDescriptionWhite,
                                                                    children: [
                                                                        "Don",
                                                                        "'",
                                                                        "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                    simple: true,
                                                                    color: "white",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Subject_default()), {}),
                                                                        " Read Article"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                    simple: true,
                                                                    color: "white",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((WatchLater_default()), {}),
                                                                        " Watch Later"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 6,
                                                    md: 6,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                                        background: true,
                                                        style: {
                                                            backgroundImage: "url('/img/examples/card-blog3.jpg')"
                                                        },
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                            background: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: classes.cardCategoryWhite,
                                                                    children: "MATERIALS"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#pablo",
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                        className: classes.cardTitleWhite,
                                                                        children: "The Sculpture Where Details Matter"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    className: classes.cardDescriptionWhite,
                                                                    children: [
                                                                        "Don",
                                                                        "'",
                                                                        "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                    round: true,
                                                                    color: "danger",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Subject_default()), {}),
                                                                        " Read Article"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.container,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.title,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Pricing Cards"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 6,
                                                    md: 6,
                                                    lg: 3,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                                        pricing: true,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                            pricing: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: classes.cardCategory + " " + classes.cardDescription + " " + classes.marginBottom20,
                                                                    children: "SMALL COMPANY"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: classes.iconWrapper,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((People_default()), {
                                                                        className: classes.iconInfo
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: classes.cardTitle + " " + classes.marginTop30,
                                                                    children: "$29"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: classes.cardDescription,
                                                                    children: "This is good if your company size is between 2 and 10 Persons."
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    round: true,
                                                                    color: "info",
                                                                    children: "Choose plan"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 6,
                                                    md: 6,
                                                    lg: 3,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                                        pricing: true,
                                                        color: "primary",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                            pricing: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: classes.iconWrapper + " " + classes.iconWrapperColor,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Business_default()), {
                                                                        className: classes.iconWhite
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: classes.cardTitleWhite + " " + classes.marginTop30,
                                                                    children: "$69"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: classes.cardDescriptionWhite,
                                                                    children: "This is good if your company size is between 11 and 99 Persons."
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    round: true,
                                                                    color: "white",
                                                                    children: "Choose plan"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 6,
                                                    md: 6,
                                                    lg: 3,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                                        pricing: true,
                                                        background: true,
                                                        style: {
                                                            backgroundImage: "url('/img/examples/card-blog3.jpg')"
                                                        },
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                            pricing: true,
                                                            background: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: classes.cardCategoryFullWhite,
                                                                    children: "PREMIUM"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                                    className: classes.cardTitleWhite,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                            children: "$"
                                                                        }),
                                                                        "89"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                    children: "100"
                                                                                }),
                                                                                " Projects"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                    children: "5"
                                                                                }),
                                                                                " Team Members"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                    children: "55"
                                                                                }),
                                                                                " Personal Contacts"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                    children: "5.000"
                                                                                }),
                                                                                " Messages"
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    color: "danger",
                                                                    children: "Get Started"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 6,
                                                    md: 6,
                                                    lg: 3,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                                        pricing: true,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                            pricing: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Success, {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                        className: classes.cardCategory,
                                                                        children: "PLATINUM"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                                    className: classes.cardTitle,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                            children: "$"
                                                                        }),
                                                                        "89"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(Success, {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {})
                                                                                }),
                                                                                " ",
                                                                                "Sharing Tools"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(Success, {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {})
                                                                                }),
                                                                                " ",
                                                                                "Design Tools"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(Danger, {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
                                                                                }),
                                                                                " ",
                                                                                "Private Messages"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(Danger, {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
                                                                                }),
                                                                                " ",
                                                                                "Personal Brand"
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    color: "primary",
                                                                    round: true,
                                                                    children: "Get Started"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "morphingCards",
                        className: "cd-section",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classes.container,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.title,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "Morphing Cards"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Rotating Cards"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.rotatingCardContainer,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                    background: true,
                                                    className: classes.cardRotate,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.front + " " + classes.wrapperBackground,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/card-blog5.jpg')"
                                                            },
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                background: true,
                                                                className: classes.cardBodyRotate,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                        className: classes.cardCategoryWhite,
                                                                        children: "Full Background Card"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#pablo",
                                                                        onClick: (e)=>e.preventDefault(),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                            className: classes.cardTitleWhite,
                                                                            children: "This Background Card Will Rotate on Hover"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        className: classes.cardDescriptionWhite,
                                                                        children: [
                                                                            "Don",
                                                                            "'",
                                                                            "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.back + " " + classes.wrapperBackground,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/card-blog5.jpg')"
                                                            },
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                background: true,
                                                                className: classes.cardBodyRotate,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: classes.cardTitleWhite,
                                                                        children: "Manage Post"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: classes.cardDescriptionWhite,
                                                                        children: "As an Admin, you have shortcuts to edit, view or delete the posts."
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: classes.textCenter,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "info",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Subject_default()), {})
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "success",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                                                                                    children: "mode_edit"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "danger",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Delete_default()), {})
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.rotatingCardContainer,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                    className: classes.cardRotate,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.front,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                className: classes.cardBodyRotate,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Success, {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                            className: classes.cardCategorySocial,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "far fa-newspaper"
                                                                                }),
                                                                                "TechCrunch"
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        className: classes.cardTitle,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#pablo",
                                                                            onClick: (e)=>e.preventDefault(),
                                                                            children: "This Card is Doing a Full Rotation on Hover..."
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        className: classes.cardDescription,
                                                                        children: [
                                                                            "Don",
                                                                            "'",
                                                                            "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.back,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                className: classes.cardBodyRotate,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: classes.cardTitle,
                                                                        children: "Do more..."
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: classes.cardDescription,
                                                                        children: "You can read this article or share it with your friends and family on different networks..."
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: classes.textCenter,
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                                round: true,
                                                                                color: "rose",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Subject_default()), {}),
                                                                                    " Read"
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "twitter",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fab fa-twitter"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "dribbble",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fab fa-dribbble"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "facebook",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fab fa-facebook"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.rotatingCardContainer,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                    color: "rose",
                                                    className: classes.cardRotate,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: classes.front + " " + classes.wrapperRose,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                    color: true,
                                                                    className: classes.cardBodyRotate,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                            className: classes.cardCategorySocialWhite,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fab fa-dribbble"
                                                                                }),
                                                                                " Dribbble"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                            className: classes.cardTitleWhite,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                href: "#pablo",
                                                                                onClick: (e)=>e.preventDefault(),
                                                                                children: [
                                                                                    '"',
                                                                                    "Dribbble just acquired Crew, a very interesting startup...",
                                                                                    '"'
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                            className: classes.cardDescriptionWhite,
                                                                            children: [
                                                                                "Don",
                                                                                "'",
                                                                                "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: classes.authorWhite,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                href: "#pablo",
                                                                                onClick: (e)=>e.preventDefault(),
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: "/img/faces/avatar.jpg",
                                                                                        alt: "...",
                                                                                        className: classes.imgRaised + " " + classes.avatar
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        children: "Tania Andrew"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: classes.statsWhite + " " + classes.mlAuto,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {}),
                                                                                "2.4K \xb7",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Share_default()), {}),
                                                                                "45"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.back + " " + classes.wrapperRose,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                className: classes.cardBodyRotate,
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                        className: classes.cardCategorySocialWhite,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fab fa-dribbble"
                                                                            }),
                                                                            " Dribbble"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        className: classes.cardTitleWhite,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            href: "#pablo",
                                                                            onClick: (e)=>e.preventDefault(),
                                                                            children: [
                                                                                '"',
                                                                                "Dribbble just acquired Crew, a very interesting startup...",
                                                                                '"'
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                                round: true,
                                                                                color: "white",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Subject_default()), {}),
                                                                                    " Read"
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                                simple: true,
                                                                                color: "white",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Bookmark_default()), {}),
                                                                                    " Bookmark"
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.title,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Manual Rotating Cards"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.rotatingCardContainer + " " + classes.manualRotate + " " + activeRotate1,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                    className: classes.cardRotate,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.front,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                className: classes.cardBodyRotate,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Success, {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                            className: classes.cardCategorySocial,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "far fa-newspaper"
                                                                                }),
                                                                                " Manual Rotating Card"
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        className: classes.cardTitle,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            href: "#pablo",
                                                                            onClick: (e)=>e.preventDefault(),
                                                                            children: [
                                                                                '"',
                                                                                "This card is doing a full rotation, click on the rotate button",
                                                                                '"'
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        className: classes.cardDescription,
                                                                        children: [
                                                                            "Don",
                                                                            "'",
                                                                            "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: classes.textCenter,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                            round: true,
                                                                            color: "success",
                                                                            onClick: ()=>setActiveRotate1(classes.activateRotate),
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Refresh_default()), {}),
                                                                                " Rotate"
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.back,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                className: classes.cardBodyRotate,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: classes.cardTitle,
                                                                        children: "Do more..."
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: classes.cardDescription,
                                                                        children: "You can read this article or share it with your friends and family on different networks..."
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: classes.textCenter,
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                                round: true,
                                                                                color: "rose",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Subject_default()), {}),
                                                                                    " Read"
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "twitter",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fab fa-twitter"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "dribbble",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fab fa-dribbble"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "facebook",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fab fa-facebook"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                        link: true,
                                                                        onClick: ()=>setActiveRotate1(""),
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Refresh_default()), {}),
                                                                            " Back..."
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.rotatingCardContainer + " " + classes.manualRotate + " " + activeRotate2,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                    className: classes.cardRotate,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.front + " " + classes.wrapperBackground,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/card-blog6.jpg')"
                                                            },
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                background: true,
                                                                className: classes.cardBodyRotate,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                        className: classes.cardCategoryWhite,
                                                                        children: "Full Background Card"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#pablo",
                                                                        onClick: (e)=>e.preventDefault(),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                            className: classes.cardTitleWhite,
                                                                            children: "This card is doing a full rotation, click on the rotate button"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        className: classes.cardDescriptionWhite,
                                                                        children: [
                                                                            "Don",
                                                                            "'",
                                                                            "t be scared of the truth because we need to restart the human..."
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: classes.textCenter,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                            round: true,
                                                                            color: "danger",
                                                                            onClick: ()=>setActiveRotate2(classes.activateRotate),
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Refresh_default()), {}),
                                                                                " Rotate"
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.back + " " + classes.wrapperBackground,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/card-blog6.jpg')"
                                                            },
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                background: true,
                                                                className: classes.cardBodyRotate,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: classes.cardTitleWhite,
                                                                        children: "Manage Post"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: classes.cardDescriptionWhite,
                                                                        children: "As an Admin, you have shortcuts to edit, view or delete the posts."
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: classes.textCenter,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "info",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Subject_default()), {})
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "success",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                                                                                    children: "mode_edit"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "danger",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Delete_default()), {})
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                                round: true,
                                                                                color: "danger",
                                                                                onClick: ()=>setActiveRotate2(""),
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Refresh_default()), {}),
                                                                                    " Back..."
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.rotatingCardContainer + " " + classes.manualRotate + " " + activeRotate3,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                    className: classes.cardRotate,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.front + " " + classes.wrapperWarning,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                className: classes.cardBodyRotate,
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                        className: classes.cardCategorySocialWhite,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Receipt_default()), {}),
                                                                            " Manual Rotating Card"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        className: classes.cardTitleWhite,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            href: "#pablo",
                                                                            onClick: (e)=>e.preventDefault(),
                                                                            children: [
                                                                                '"',
                                                                                "This card is doing a full rotation, click on the rotate button",
                                                                                '"'
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        className: classes.cardDescriptionWhite,
                                                                        children: [
                                                                            "Don",
                                                                            "'",
                                                                            "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: classes.textCenter,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                            round: true,
                                                                            color: "white",
                                                                            onClick: ()=>setActiveRotate3(classes.activateRotate),
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Refresh_default()), {}),
                                                                                " Rotate"
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.back + " " + classes.wrapperWarning,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                className: classes.cardBodyRotate,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: classes.cardTitleWhite,
                                                                        children: "Do more..."
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: classes.cardDescriptionWhite,
                                                                        children: "You can read this article or share it with your friends and family on different networks..."
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: classes.textCenter,
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                                round: true,
                                                                                color: "white",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Subject_default()), {}),
                                                                                    " Read"
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "white",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fab fa-twitter"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "white",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fab fa-dribbble"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "white",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fab fa-facebook"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                                round: true,
                                                                                color: "white",
                                                                                onClick: ()=>setActiveRotate3(""),
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Refresh_default()), {}),
                                                                                    " Rotate"
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: classes.container,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 7,
                                    md: 7,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: classes.title,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: "Dynamic Shadows™"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                children: [
                                                    "Material Kit PRO is coming with the famous colored shadows. That means each image from the cards is getting an unique color shadow. You don",
                                                    "'",
                                                    "t have to do anything to activate them, just enjoy the new look of your website."
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                            blog: true,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                    image: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/examples/color1.jpg",
                                                                alt: "..."
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.coloredShadow,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/color1.jpg')",
                                                                opacity: "1"
                                                            }
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Warning/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: classes.cardCategory,
                                                                children: "DYNAMIC SHADOWS"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#pablo",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: "The image from this card is getting a yellow shadow"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                            blog: true,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                    image: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/examples/color2.jpg",
                                                                alt: "..."
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.coloredShadow,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/color2.jpg')",
                                                                opacity: "1"
                                                            }
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Rose, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: classes.cardCategory,
                                                                children: "DYNAMIC SHADOWS"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#pablo",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: "The image from this card is getting a pink shadow"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                            blog: true,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                    image: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/examples/color3.jpg",
                                                                alt: "..."
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.coloredShadow,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/color3.jpg')",
                                                                opacity: "1"
                                                            }
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Info/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: classes.cardCategory,
                                                                children: "DYNAMIC SHADOWS"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#pablo",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: "The image from this card is getting a blue shadow"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.sectionWhite,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classes.container,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.title,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Plain Card"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                    blog: true,
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                            image: true,
                                                            plain: true,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "#pablo",
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "/img/examples/blog5.jpg",
                                                                            alt: "..."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: classes.cardTitleAbsolute,
                                                                            children: "This Summer Will be Awesome"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: classes.coloredShadow,
                                                                    style: {
                                                                        backgroundImage: "url('/img/examples/blog5.jpg')",
                                                                        opacity: "1"
                                                                    }
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                            plain: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Info/* default */.Z, {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                        className: classes.cardCategory,
                                                                        children: "FASHION"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: classes.cardDescription,
                                                                    children: [
                                                                        "Don",
                                                                        "'",
                                                                        "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                    color: "info",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                            color: true,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                    className: classes.cardCategorySocialWhite,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fab fa-twitter"
                                                                        }),
                                                                        "Twitter"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    className: classes.cardTitleWhite,
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "#pablo",
                                                                        onClick: (e)=>e.preventDefault(),
                                                                        children: [
                                                                            '"',
                                                                            "You Don",
                                                                            "'",
                                                                            "t Have to Sacrifice Joy to Build a Fabulous Business and Life",
                                                                            '"'
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: classes.authorWhite,
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "#pablo",
                                                                        onClick: (e)=>e.preventDefault(),
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "/img/faces/avatar.jpg",
                                                                                alt: "...",
                                                                                className: classes.imgRaised + " " + classes.avatar
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: "Tania Andrew"
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: classes.statsWhite + " " + classes.mlAuto,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {}),
                                                                        "2.4K \xb7",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Share_default()), {}),
                                                                        "45"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                blog: true,
                                                plain: true,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                        image: true,
                                                        plain: true,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#pablo",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/img/examples/blog1.jpg",
                                                                    alt: "..."
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.coloredShadow,
                                                                style: {
                                                                    backgroundImage: "url('/img/examples/blog1.jpg')",
                                                                    opacity: "1"
                                                                }
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                        plain: true,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Success, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: classes.cardCategory,
                                                                    children: "Legal"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: classes.cardTitle,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#pablo",
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: "5 Common Legal Mistakes That Can Trip-Up Your Startup"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: classes.cardDescription,
                                                                children: [
                                                                    "Don",
                                                                    "'",
                                                                    "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                        plain: true,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.author,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "#pablo",
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "/img/faces/marc.jpg",
                                                                            alt: "...",
                                                                            className: classes.imgRaised + " " + classes.avatar
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "Mike John"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: classes.stats + " " + classes.mlAuto,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Schedule_default()), {}),
                                                                    "5 min read"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                    blog: true,
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                            image: true,
                                                            plain: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#pablo",
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/img/examples/blog6.jpg",
                                                                        alt: "..."
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: classes.coloredShadow,
                                                                    style: {
                                                                        backgroundImage: "url('/img/examples/blog6.jpg')",
                                                                        opacity: "1"
                                                                    }
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                            plain: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Danger, {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                        className: classes.cardCategory,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((TrendingUp_default()), {}),
                                                                            " TRENDING"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    className: classes.cardTitle,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#pablo",
                                                                        onClick: (e)=>e.preventDefault(),
                                                                        children: "To Grow Your Business Start Focusing on Your Employees"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                            plain: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: classes.author,
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "#pablo",
                                                                        onClick: (e)=>e.preventDefault(),
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "/img/faces/marc.jpg",
                                                                                alt: "...",
                                                                                className: classes.imgRaised + " " + classes.avatar
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: "Mike John"
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: classes.stats + " " + classes.mlAuto,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Schedule_default()), {}),
                                                                        "5 min read"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                                    color: "danger",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                        color: true,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                className: classes.cardCategorySocialWhite,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "far fa-newspaper"
                                                                    }),
                                                                    " The Next Web"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: classes.cardTitleWhite,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "#pablo",
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: [
                                                                        '"',
                                                                        "Focus on Your Employees",
                                                                        '"'
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: classes.cardDescriptionWhite,
                                                                children: [
                                                                    "Don",
                                                                    "'",
                                                                    "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.stats + " " + classes.justifyContentCenter,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    color: "white",
                                                                    round: true,
                                                                    children: "Read Article"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.container,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                            profile: true,
                                            plain: true,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                    image: true,
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: "#pablo",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/img/examples/card-profile4.jpg",
                                                                    alt: "..."
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: classes.cardTitleAbsolute,
                                                                    children: "Tania Andrew"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.coloredShadow,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/card-profile4.jpg')",
                                                                opacity: "1"
                                                            }
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Info/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: classes.cardCategory,
                                                                children: "WEB DESIGNER"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: classes.cardDescription,
                                                            children: [
                                                                "Don",
                                                                "'",
                                                                "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                    profile: true,
                                                    plain: true,
                                                    className: classes.justifyContentCenter,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            color: "twitter",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-twitter"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            color: "dribbble",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-dribbble"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            color: "instagram",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                            profile: true,
                                            plain: true,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                    image: true,
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/examples/card-profile1.jpg",
                                                                alt: "..."
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.coloredShadow,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/card-profile1.jpg')",
                                                                opacity: "1"
                                                            }
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: "Alec Thompson"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: classes.cardCategory + " " + classes.cardDescription,
                                                            children: "CEO / CO-FOUNDER"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                    profile: true,
                                                    plain: true,
                                                    className: classes.justifyContentCenter,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            round: true,
                                                            color: "twitter",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-twitter"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            round: true,
                                                            color: "facebook",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-facebook"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            round: true,
                                                            color: "google",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-google"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                            profile: true,
                                            plain: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                                    profile: true,
                                                    plain: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/faces/marc.jpg",
                                                            alt: "..."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: classes.cardCategory + " " + classes.cardDescription,
                                                            children: "CEO / CO-FOUNDER"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: "Alec Thompson"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: classes.cardDescription,
                                                            children: [
                                                                "Don",
                                                                "'",
                                                                "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            round: true,
                                                            color: "info",
                                                            children: "Follow"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: external "react-datetime"
const external_react_datetime_namespaceObject = require("react-datetime");
var external_react_datetime_default = /*#__PURE__*/__webpack_require__.n(external_react_datetime_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Slide"
const Slide_namespaceObject = require("@mui/material/Slide");
var Slide_default = /*#__PURE__*/__webpack_require__.n(Slide_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Dialog"
const Dialog_namespaceObject = require("@mui/material/Dialog");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/DialogTitle"
const DialogTitle_namespaceObject = require("@mui/material/DialogTitle");
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/DialogContent"
const DialogContent_namespaceObject = require("@mui/material/DialogContent");
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/DialogActions"
const DialogActions_namespaceObject = require("@mui/material/DialogActions");
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Popover"
const Popover_namespaceObject = require("@mui/material/Popover");
var Popover_default = /*#__PURE__*/__webpack_require__.n(Popover_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/LibraryBooks"
const LibraryBooks_namespaceObject = require("@mui/icons-material/LibraryBooks");
var LibraryBooks_default = /*#__PURE__*/__webpack_require__.n(LibraryBooks_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Notifications"
const Notifications_namespaceObject = require("@mui/icons-material/Notifications");
var Notifications_default = /*#__PURE__*/__webpack_require__.n(Notifications_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Assignment"
const Assignment_namespaceObject = require("@mui/icons-material/Assignment");
var Assignment_default = /*#__PURE__*/__webpack_require__.n(Assignment_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Timeline"
const Timeline_namespaceObject = require("@mui/icons-material/Timeline");
var Timeline_default = /*#__PURE__*/__webpack_require__.n(Timeline_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Code"
const Code_namespaceObject = require("@mui/icons-material/Code");
var Code_default = /*#__PURE__*/__webpack_require__.n(Code_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Group"
const Group_namespaceObject = require("@mui/icons-material/Group");
var Group_default = /*#__PURE__*/__webpack_require__.n(Group_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/AttachFile"
const AttachFile_namespaceObject = require("@mui/icons-material/AttachFile");
var AttachFile_default = /*#__PURE__*/__webpack_require__.n(AttachFile_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Layers"
const Layers_namespaceObject = require("@mui/icons-material/Layers");
var Layers_default = /*#__PURE__*/__webpack_require__.n(Layers_namespaceObject);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/components/instructionStyle.js
const instructionStyle = {
    instruction: {},
    picture: {},
    image: {
        width: "100%",
        height: "auto",
        borderRadius: "6px",
        display: "block",
        maxWidth: "100%"
    }
};
/* harmony default export */ const components_instructionStyle = (instructionStyle);

;// CONCATENATED MODULE: ./components/Instruction/Instruction.js





// core components



const Instruction_useStyles = makeStyles_default()(components_instructionStyle);
function Instruction(props) {
    const { title , text , image , className , imageClassName , imageAlt  } = props;
    const classes = Instruction_useStyles();
    const instructionClasses = external_classnames_default()({
        [classes.instruction]: true,
        [className]: className !== undefined
    });
    const pictureClasses = external_classnames_default()({
        [classes.picture]: true,
        [imageClassName]: imageClassName !== undefined
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: instructionClasses,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                    xs: 12,
                    sm: 12,
                    md: 8,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: text
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                    xs: 12,
                    sm: 12,
                    md: 4,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: pictureClasses,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: image,
                            alt: imageAlt,
                            className: classes.image
                        })
                    })
                })
            ]
        })
    });
};
Instruction.defaultProps = {
    imageAlt: "..."
};
Instruction.propTypes = {
    title: (external_prop_types_default()).node.isRequired,
    text: (external_prop_types_default()).node.isRequired,
    image: (external_prop_types_default()).string.isRequired,
    imageAlt: (external_prop_types_default()).string,
    className: (external_prop_types_default()).string,
    imageClassName: (external_prop_types_default()).string
};

;// CONCATENATED MODULE: ./styles/jss/novel-logiks/components/customFileInputStyle.js
const customFileInputStyle = {
    inputFile: {
        opacity: "0",
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: "-1"
    },
    inputFileWrapper: {
        "& button svg": {
            color: "inherit"
        }
    }
};
/* harmony default export */ const components_customFileInputStyle = (customFileInputStyle);

;// CONCATENATED MODULE: ./components/CustomFileInput/CustomFileInput.js


// used for making the prop types of this component


// core components



const CustomFileInput_useStyles = makeStyles_default()(components_customFileInputStyle);
function CustomFileInput(props) {
    const [fileNames, setFileNames] = external_react_default().useState("");
    // eslint-disable-next-line
    const [files, setFiles] = external_react_default().useState(null);
    let hiddenFile = /*#__PURE__*/ external_react_default().createRef();
    const onFocus = (e)=>{
        hiddenFile.current.click(e);
    };
    // eslint-disable-next-line
    const handleSubmit = (e)=>{
        e.preventDefault();
    // files is the file/image uploaded
    // in this function you can save the image (files) on form submit
    // you have to call it yourself
    };
    const addFile = (e)=>{
        let fileNames = "";
        let files = e.target.files;
        for(let i = 0; i < e.target.files.length; i++){
            fileNames = fileNames + e.target.files[i].name;
            if (props.multiple && i !== e.target.files.length - 1) {
                fileNames = fileNames + ", ";
            }
        }
        setFiles(files);
        setFileNames(fileNames);
    };
    const { id , endButton , startButton , inputProps , formControlProps , multiple  } = props;
    const classes = CustomFileInput_useStyles();
    if (inputProps && inputProps.type && inputProps.type === "file") {
        inputProps.type = "text";
    }
    let buttonStart;
    let buttonEnd;
    if (startButton) {
        buttonStart = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
            ...startButton.buttonProps,
            children: [
                startButton.icon !== undefined ? startButton.icon : null,
                startButton.text !== undefined ? startButton.text : null
            ]
        });
    }
    if (endButton) {
        buttonEnd = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
            ...endButton.buttonProps,
            children: [
                endButton.icon !== undefined ? endButton.icon : null,
                endButton.text !== undefined ? endButton.text : null
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.inputFileWrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "file",
                className: classes.inputFile,
                multiple: multiple,
                ref: hiddenFile,
                onChange: addFile
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                id: id,
                formControlProps: {
                    ...formControlProps
                },
                inputProps: {
                    ...inputProps,
                    onClick: onFocus,
                    value: fileNames,
                    endAdornment: buttonEnd,
                    startAdornment: buttonStart
                }
            })
        ]
    });
};
CustomFileInput.defaultProps = {
    multiple: false
};
CustomFileInput.propTypes = {
    id: (external_prop_types_default()).string,
    endButton: (external_prop_types_default()).object,
    startButton: (external_prop_types_default()).object,
    inputProps: (external_prop_types_default()).object,
    formControlProps: (external_prop_types_default()).object,
    multiple: (external_prop_types_default()).bool
};

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




const InfoArea_useStyles = makeStyles_default()(components_infoStyle);
function InfoArea(props) {
    const { title , description , iconColor , vertical , className , short_description  } = props;
    const classes = InfoArea_useStyles();
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

;// CONCATENATED MODULE: external "@mui/material/Accordion"
const Accordion_namespaceObject = require("@mui/material/Accordion");
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/AccordionSummary"
const AccordionSummary_namespaceObject = require("@mui/material/AccordionSummary");
var AccordionSummary_default = /*#__PURE__*/__webpack_require__.n(AccordionSummary_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/AccordionDetails"
const AccordionDetails_namespaceObject = require("@mui/material/AccordionDetails");
var AccordionDetails_default = /*#__PURE__*/__webpack_require__.n(AccordionDetails_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ExpandMore"
const ExpandMore_namespaceObject = require("@mui/icons-material/ExpandMore");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_namespaceObject);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/components/accordionStyle.js

const accordionStyle = (theme)=>({
        root: {
            flexGrow: 1,
            marginBottom: "20px"
        },
        accordion: {
            boxShadow: "none",
            "&:before": {
                display: "none !important"
            }
        },
        accordionExpanded: {
            margin: "0 !important"
        },
        accordionSummary: {
            minHeight: "auto !important",
            backgroundColor: "transparent",
            borderBottom: "1px solid " + novel_logiks/* grayColor.6 */.X_[6],
            padding: "25px 10px 5px 0px",
            borderTopLeftRadius: "3px",
            borderTopRightRadius: "3px",
            color: novel_logiks/* grayColor.1 */.X_[1]
        },
        primaryExpansionPanelSummary: {
            "&:hover": {
                color: novel_logiks/* primaryColor.0 */.lr[0]
            }
        },
        secondaryExpansionPanelSummary: {
            "&:hover": {
                color: novel_logiks/* secondaryColor.0 */.dY[0]
            }
        },
        warningExpansionPanelSummary: {
            "&:hover": {
                color: novel_logiks/* warningColor.0 */.MA[0]
            }
        },
        dangerExpansionPanelSummary: {
            "&:hover": {
                color: novel_logiks/* dangerColor.0 */.E7[0]
            }
        },
        successExpansionPanelSummary: {
            "&:hover": {
                color: novel_logiks/* successColor.0 */.nq[0]
            }
        },
        infoExpansionPanelSummary: {
            "&:hover": {
                color: novel_logiks/* infoColor.0 */.bE[0]
            }
        },
        roseExpansionPanelSummary: {
            "&:hover": {
                color: novel_logiks/* roseColor.0 */.An[0]
            }
        },
        accordionSummaryExpaned: {
            "& $accordionSummaryExpandIcon": {
                [theme.breakpoints.up("md")]: {
                    top: "auto !important"
                },
                transform: "rotate(180deg)",
                [theme.breakpoints.down("md")]: {
                    top: "10px !important"
                },
                // some jss/css to make the cards look a bit better on Internet Explorer
                "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
                    display: "inline-block !important",
                    top: "10px !important"
                }
            }
        },
        primaryExpansionPanelSummaryExpaned: {
            color: novel_logiks/* primaryColor.0 */.lr[0]
        },
        secondaryExpansionPanelSummaryExpaned: {
            color: novel_logiks/* secondaryColor.0 */.dY[0]
        },
        warningExpansionPanelSummaryExpaned: {
            color: novel_logiks/* warningColor.0 */.MA[0]
        },
        dangerExpansionPanelSummaryExpaned: {
            color: novel_logiks/* dangerColor.0 */.E7[0]
        },
        successExpansionPanelSummaryExpaned: {
            color: novel_logiks/* successColor.0 */.nq[0]
        },
        infoExpansionPanelSummaryExpaned: {
            color: novel_logiks/* infoColor.0 */.bE[0]
        },
        roseExpansionPanelSummaryExpaned: {
            color: novel_logiks/* roseColor.0 */.An[0]
        },
        accordionSummaryContent: {
            margin: "0 !important"
        },
        accordionSummaryExpandIcon: {
            [theme.breakpoints.up("md")]: {
                top: "auto !important"
            },
            transform: "rotate(0deg)",
            color: "inherit",
            right: "10px",
            position: "absolute",
            [theme.breakpoints.down("md")]: {
                top: "10px !important"
            },
            // some jss/css to make the cards look a bit better on Internet Explorer
            "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
                display: "inline-block !important"
            }
        },
        accordionSummaryExpandIconExpanded: {},
        title: {
            fontSize: "15px",
            fontWeight: "bolder",
            marginTop: "0",
            marginBottom: "0",
            color: "inherit"
        },
        accordionDetails: {
            display: "block",
            padding: "15px 0px 5px",
            fontSize: ".875rem"
        }
    });
/* harmony default export */ const components_accordionStyle = (accordionStyle);

;// CONCATENATED MODULE: ./components/Accordion/Accordion.js


// nodejs library to set properties for components





// @mui/icons-material


const Accordion_useStyles = makeStyles_default()(components_accordionStyle);
function CustomAccordion(props) {
    const [active, setActive] = external_react_default().useState(props.active.length === undefined ? [
        props.active
    ] : props.active);
    const [single] = external_react_default().useState(props.active.length === undefined ? true : false);
    const handleChange = (panel)=>()=>{
            let newArray;
            if (single) {
                if (active[0] === panel) {
                    newArray = [];
                } else {
                    newArray = [
                        panel
                    ];
                }
            } else {
                if (active.indexOf(panel) === -1) {
                    newArray = [
                        ...active,
                        panel
                    ];
                } else {
                    newArray = [
                        ...active
                    ];
                    newArray.splice(active.indexOf(panel), 1);
                }
            }
            setActive(newArray);
        };
    const { collapses , activeColor  } = props;
    const classes = Accordion_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.root,
        children: collapses.map((prop, key)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()), {
                expanded: active === key || active.indexOf(key) !== -1,
                onChange: handleChange(key),
                classes: {
                    root: classes.accordion,
                    expanded: classes.accordionExpanded
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((AccordionSummary_default()), {
                        expandIcon: /*#__PURE__*/ jsx_runtime_.jsx((ExpandMore_default()), {}),
                        classes: {
                            root: `${classes.accordionSummary} ${classes[activeColor + "AccordionSummary"]}`,
                            expanded: `${classes.accordionSummaryExpaned} ${classes[activeColor + "AccordionSummaryExpaned"]}`,
                            content: classes.accordionSummaryContent,
                            expandIcon: classes.accordionSummaryExpandIcon
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            className: classes.title,
                            children: prop.title
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((AccordionDetails_default()), {
                        className: classes.accordionDetails,
                        children: prop.content
                    })
                ]
            }, key);
        })
    });
};
CustomAccordion.defaultProps = {
    active: -1,
    activeColor: "primary"
};
CustomAccordion.propTypes = {
    // index of the default active collapse
    active: external_prop_types_default().oneOfType([
        (external_prop_types_default()).number,
        external_prop_types_default().arrayOf((external_prop_types_default()).number)
    ]),
    collapses: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        title: (external_prop_types_default()).string,
        content: (external_prop_types_default()).node
    })).isRequired,
    activeColor: external_prop_types_default().oneOf([
        "primary",
        "secondary",
        "warning",
        "danger",
        "success",
        "info",
        "rose"
    ])
};

;// CONCATENATED MODULE: ./components/CustomUpload/ImageUpload.js


// used for making the prop types of this component

// core components

function ImageUpload(props) {
    const [file, setFile] = external_react_default().useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = external_react_default().useState(props.avatar ? "/img/placeholder.jpg" : "/img/image_placeholder.jpg");
    let fileInput = /*#__PURE__*/ external_react_default().createRef();
    const handleImageChange = (e)=>{
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = ()=>{
            setFile(file);
            setImagePreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };
    // eslint-disable-next-line
    const handleSubmit = (e)=>{
        e.preventDefault();
    // file is the file/image uploaded
    // in this function you can save the image (file) on form submit
    // you have to call it yourself
    };
    const handleClick = ()=>{
        fileInput.current.click();
    };
    const handleRemove = ()=>{
        setFile(null);
        setImagePreviewUrl(props.avatar ? "/img/placeholder.jpg" : "/img/image_placeholder.jpg");
        fileInput.current.value = null;
    };
    let { avatar , addButtonProps , changeButtonProps , removeButtonProps  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "fileinput text-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "file",
                onChange: handleImageChange,
                ref: fileInput
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "thumbnail" + (avatar ? " img-circle" : ""),
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: imagePreviewUrl,
                    alt: "..."
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: file === null ? /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                    ...addButtonProps,
                    onClick: ()=>handleClick(),
                    children: avatar ? "Add Photo" : "Select image"
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                            ...changeButtonProps,
                            onClick: ()=>handleClick(),
                            children: "Change"
                        }),
                        avatar ? /*#__PURE__*/ jsx_runtime_.jsx("br", {}) : null,
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                            ...removeButtonProps,
                            onClick: ()=>handleRemove(),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fas fa-times"
                                }),
                                " Remove"
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
ImageUpload.propTypes = {
    avatar: (external_prop_types_default()).bool,
    addButtonProps: (external_prop_types_default()).object,
    changeButtonProps: (external_prop_types_default()).object,
    removeButtonProps: (external_prop_types_default()).object
};

;// CONCATENATED MODULE: ./styles/jss/novel-logiks/modalStyle.js

const modalStyle = (theme)=>({
        modalRoot: {
            overflow: "auto",
            display: "block"
        },
        modal: {
            [theme.breakpoints.up("sm")]: {
                maxWidth: "500px",
                margin: "auto"
            },
            borderRadius: "6px",
            overflow: "visible",
            maxHeight: "unset",
            width: "100%",
            marginTop: "130px !important"
        },
        modalHeader: {
            borderBottom: "none",
            paddingTop: "24px",
            paddingRight: "24px",
            paddingBottom: "0",
            paddingLeft: "24px",
            minHeight: "16.43px"
        },
        modalTitle: {
            margin: "0",
            lineHeight: "1.5"
        },
        modalCloseButton: {
            "&, &:hover": {
                color: novel_logiks/* grayColor.0 */.X_[0]
            },
            "&:hover": {
                opacity: "1"
            },
            cursor: "pointer",
            padding: "1rem",
            margin: "-1rem -1rem -1rem auto",
            backgroundColor: "transparent",
            border: "0",
            WebkitAppearance: "none",
            float: "right",
            fontSize: "1.5rem",
            fontWeight: "500",
            lineHeight: "1",
            textShadow: "0 1px 0 " + novel_logiks/* whiteColor */.zQ,
            opacity: ".5"
        },
        modalClose: {
            width: "16px",
            height: "16px"
        },
        modalBody: {
            paddingTop: "24px",
            paddingRight: "24px",
            paddingBottom: "16px",
            paddingLeft: "24px",
            position: "relative",
            overflow: "visible"
        },
        modalFooter: {
            padding: "15px",
            textAlign: "right",
            paddingTop: "0",
            margin: "0"
        },
        modalFooterCenter: {
            marginLeft: "auto",
            marginRight: "auto"
        },
        instructionNoticeModal: {
            marginBottom: "25px"
        },
        imageNoticeModal: {
            maxWidth: "150px"
        },
        modalLarge: {
            [theme.breakpoints.up("md")]: {
                maxWidth: "800px"
            }
        },
        modalSmall: {
            [theme.breakpoints.up("sm")]: {
                width: "300px",
                margin: "auto"
            },
            margin: "0 auto"
        },
        modalSmallBody: {
            marginTop: "20px"
        },
        modalSmallFooterFirstButton: {
            margin: "0",
            paddingLeft: "16px",
            paddingRight: "16px",
            width: "auto"
        },
        modalSmallFooterSecondButton: {
            marginBottom: "0",
            marginLeft: "5px"
        },
        modalLogin: {
            maxWidth: "360px",
            overflowY: "visible",
            width: "100%",
            "& $modalCloseButton": {
                color: novel_logiks/* whiteColor */.zQ,
                top: "-10px",
                right: "10px",
                textShadow: "none",
                position: "relative"
            },
            "& $modalHeader": {
                borderBottom: "none",
                paddingTop: "24px",
                paddingRight: "24px",
                paddingBottom: "0",
                paddingLeft: "24px"
            },
            "& $modalBody": {
                paddingBottom: "0",
                paddingTop: "0"
            },
            "& $modalFooter": {
                paddingBottom: "0",
                paddingTop: "0"
            }
        },
        modalLoginCard: {
            marginBottom: "0",
            margin: "0",
            "& $modalHeader": {
                paddingTop: "0"
            }
        },
        modalSignup: {
            maxWidth: "900px",
            width: "100%",
            "& $modalHeader": {
                paddingTop: "0"
            },
            "& $modalTitle": {
                textAlign: "center",
                width: "100%",
                marginTop: "0.625rem"
            },
            "& $modalBody": {
                paddingBottom: "0",
                paddingTop: "0"
            }
        },
        modalSignupCard: {
            padding: "40px 0",
            margin: "0"
        }
    });
/* harmony default export */ const novel_logiks_modalStyle = (modalStyle);

;// CONCATENATED MODULE: ./styles/jss/novel-logiks/popoverStyles.js

const popoverStyles = {
    popover: {
        padding: "0",
        boxShadow: "0 16px 24px 2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.14), 0 6px 30px 5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.2)",
        lineHeight: "1.5em",
        background: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* grayColor.15 */.X_[15]) + ",0.9)",
        border: "none",
        borderRadius: "3px",
        display: "block",
        maxWidth: "276px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "400",
        textAlign: "start",
        textDecoration: "none",
        textShadow: "none",
        textTransform: "none",
        letterSpacing: "normal",
        wordBreak: "normal",
        wordSpacing: "normal",
        whiteSpace: "normal",
        lineBreak: "auto",
        fontSize: "0.875rem",
        wordWrap: "break-word"
    },
    popoverBottom: {
        marginTop: "5px"
    },
    popoverHeader: {
        border: "none",
        padding: "15px 15px 5px",
        fontSize: "1.125rem",
        margin: "0",
        color: novel_logiks/* whiteColor */.zQ,
        borderTopLeftRadius: "calc(0.3rem - 1px)",
        borderTopRightRadius: "calc(0.3rem - 1px)"
    },
    popoverBody: {
        padding: "10px 15px 15px",
        lineHeight: "1.4",
        color: novel_logiks/* whiteColor */.zQ
    }
};
/* harmony default export */ const novel_logiks_popoverStyles = (popoverStyles);

;// CONCATENATED MODULE: ./styles/jss/novel-logiks/pages/componentsSections/javascriptStyles.js





const javascriptStyles = (theme)=>({
        container: novel_logiks/* container */.nC,
        description: novel_logiks/* description */.WL,
        cardTitle: novel_logiks/* cardTitle */.X5,
        mlAuto: novel_logiks/* mlAuto */.hU,
        mrAuto: novel_logiks/* mrAuto */.kq,
        ...tooltipsStyle/* default */.Z,
        ...novel_logiks_popoverStyles,
        ...novel_logiks_modalStyle(theme),
        ...customCheckboxRadioSwitchStyle,
        section: {
            padding: "70px 0 0"
        },
        title: {
            ...novel_logiks/* title */.TN,
            marginTop: "30px",
            minHeight: "32px",
            textDecoration: "none"
        },
        icon: {
            width: "24px",
            height: "24px",
            color: novel_logiks/* grayColor.13 */.X_[13]
        },
        label: {
            color: "rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* blackColor */.FT) + ", 0.26)",
            cursor: "pointer",
            display: "inline-flex",
            fontSize: "14px",
            transition: "0.3s ease all",
            lineHeight: "1.428571429",
            fontWeight: "400",
            paddingLeft: "0"
        },
        textCenter: {
            textAlign: "center"
        },
        cardTitleWhite: {
            ...novel_logiks/* cardTitle */.X5,
            color: novel_logiks/* whiteColor */.zQ + "  !important"
        },
        socialLine: {
            marginTop: "1rem",
            textAlign: "center",
            padding: "0"
        },
        socialLineButton: {
            "&, &:hover": {
                color: novel_logiks/* whiteColor */.zQ
            },
            marginLeft: "5px",
            marginRight: "5px"
        },
        cardLoginHeader: {
            marginTop: "-40px",
            padding: "20px 0",
            width: "100%",
            marginBottom: "15px"
        },
        cardLoginBody: {
            paddingTop: "0",
            paddingBottom: "0"
        },
        justifyContentCenter: {
            WebkitBoxPack: "center !important",
            MsFlexPack: "center !important",
            justifyContent: "center !important"
        },
        infoArea: {
            padding: "0px 0px 20px !important"
        },
        space50: {
            height: "50px",
            display: "block"
        }
    });
/* harmony default export */ const componentsSections_javascriptStyles = (javascriptStyles);

;// CONCATENATED MODULE: ./pages-sections/components/SectionJavascript.js
/*eslint-disable*/ 

// react plugin for creating date-time-picker















// @mui/icons-material














// core components













const SectionJavascript_useStyles = makeStyles_default()(componentsSections_javascriptStyles);
const Transition = /*#__PURE__*/ external_react_default().forwardRef(function Transition(props, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx((Slide_default()), {
        direction: "down",
        ref: ref,
        ...props
    });
});
Transition.displayName = "Transition";
function SectionJavascript() {
    const [anchorElLeft, setAnchorElLeft] = external_react_default().useState(null);
    const [anchorElTop, setAnchorElTop] = external_react_default().useState(null);
    const [anchorElBottom, setAnchorElBottom] = external_react_default().useState(null);
    const [anchorElRight, setAnchorElRight] = external_react_default().useState(null);
    const [checked, setChecked] = external_react_default().useState([]);
    const [classicModal, setClassicModal] = external_react_default().useState(false);
    const [noticeModal, setNoticeModal] = external_react_default().useState(false);
    const [smallModal, setSmallModal] = external_react_default().useState(false);
    const [loginModal, setLoginModal] = external_react_default().useState(false);
    const [signupModal, setSignupModal] = external_react_default().useState(false);
    const handleToggle = (value)=>{
        const currentIndex = checked.indexOf(value);
        const newChecked = [
            ...checked
        ];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    const classes = SectionJavascript_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section + " cd-section",
        id: "javascriptComponents",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.title,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Javascript components"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 6,
                            md: 6,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.title,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Modal"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                    block: true,
                                                    round: true,
                                                    onClick: ()=>setClassicModal(true),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((LibraryBooks_default()), {}),
                                                        "Classic"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                                                    classes: {
                                                        root: classes.modalRoot,
                                                        paper: classes.modal
                                                    },
                                                    open: classicModal,
                                                    TransitionComponent: Transition,
                                                    keepMounted: true,
                                                    onClose: ()=>setClassicModal(false),
                                                    "aria-labelledby": "classic-modal-slide-title",
                                                    "aria-describedby": "classic-modal-slide-description",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogTitle_default()), {
                                                            id: "classic-modal-slide-title",
                                                            className: classes.modalHeader,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                    simple: true,
                                                                    className: classes.modalCloseButton,
                                                                    "aria-label": "Close",
                                                                    onClick: ()=>setClassicModal(false),
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                                                            className: classes.modalClose
                                                                        })
                                                                    ]
                                                                }, "close"),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    className: classes.modalTitle,
                                                                    children: "Modal title"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                                                            id: "classic-modal-slide-description",
                                                            className: classes.modalBody,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                                                            className: classes.modalFooter,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    link: true,
                                                                    children: "Nice Button"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    onClick: ()=>setClassicModal(false),
                                                                    color: "danger",
                                                                    simple: true,
                                                                    children: "Close"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                    block: true,
                                                    round: true,
                                                    onClick: ()=>setNoticeModal(true),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                                                            children: "info_outline"
                                                        }),
                                                        " Notice"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                                                    classes: {
                                                        root: classes.modalRoot,
                                                        paper: classes.modal
                                                    },
                                                    open: noticeModal,
                                                    TransitionComponent: Transition,
                                                    keepMounted: true,
                                                    onClose: ()=>setNoticeModal(false),
                                                    "aria-labelledby": "notice-modal-slide-title",
                                                    "aria-describedby": "notice-modal-slide-description",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogTitle_default()), {
                                                            id: "notice-modal-slide-title",
                                                            className: classes.modalHeader,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                    simple: true,
                                                                    className: classes.modalCloseButton,
                                                                    "aria-label": "Close",
                                                                    onClick: ()=>setNoticeModal(false),
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                                                            className: classes.modalClose
                                                                        })
                                                                    ]
                                                                }, "close"),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    className: classes.modalTitle,
                                                                    children: "How Do You Become an Affiliate?"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                                                            id: "notice-modal-slide-description",
                                                            className: classes.modalBody,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Instruction, {
                                                                    title: "1. Register",
                                                                    text: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        children: [
                                                                            "The first step is to create an account at",
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "https://novellogiks.com/?ref=njsmkp-javascript-components",
                                                                                target: "_blank",
                                                                                children: "Sunil"
                                                                            }),
                                                                            ". You can choose a social network or go for the classic version, whatever works best for you."
                                                                        ]
                                                                    }),
                                                                    image: "/img/dg1.jpg",
                                                                    className: classes.instructionNoticeModal,
                                                                    imageClassName: classes.imageNoticeModal
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Instruction, {
                                                                    title: "2. Apply",
                                                                    text: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        children: [
                                                                            "The first step is to create an account at",
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "https://novellogiks.com/?ref=njsmkp-javascript-components",
                                                                                target: "_blank",
                                                                                children: "Sunil"
                                                                            }),
                                                                            ". You can choose a social network or go for the classic version, whatever works best for you."
                                                                        ]
                                                                    }),
                                                                    image: "/img/dg2.jpg",
                                                                    className: classes.instructionNoticeModal,
                                                                    imageClassName: classes.imageNoticeModal
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    children: [
                                                                        "If you have more questions, don",
                                                                        "'",
                                                                        "t hesitate to contact us or send us a tweet @creativetim. We",
                                                                        "'",
                                                                        "re here to help!"
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((DialogActions_default()), {
                                                            className: classes.modalFooter + " " + classes.modalFooterCenter,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                onClick: ()=>setNoticeModal(false),
                                                                color: "info",
                                                                round: true,
                                                                children: "Sounds Good"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                    block: true,
                                                    round: true,
                                                    onClick: ()=>setSmallModal(true),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Notifications_default()), {}),
                                                        " Small Alert"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                                                    classes: {
                                                        root: classes.modalRoot,
                                                        paper: classes.modal + " " + classes.modalSmall
                                                    },
                                                    open: smallModal,
                                                    TransitionComponent: Transition,
                                                    keepMounted: true,
                                                    onClose: ()=>setSmallModal(false),
                                                    "aria-labelledby": "small-modal-slide-title",
                                                    "aria-describedby": "small-modal-slide-description",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                                                            id: "small-modal-slide-title",
                                                            className: classes.modalHeader,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                simple: true,
                                                                className: classes.modalCloseButton,
                                                                "aria-label": "Close",
                                                                onClick: ()=>setSmallModal(false),
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                                                        className: classes.modalClose
                                                                    })
                                                                ]
                                                            }, "close")
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                                                            id: "small-modal-slide-description",
                                                            className: classes.modalBody + " " + classes.modalSmallBody,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                children: "Are you sure you want to do this?"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                                                            className: classes.modalFooter + " " + classes.modalFooterCenter,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    onClick: ()=>setSmallModal(false),
                                                                    link: true,
                                                                    className: classes.modalSmallFooterFirstButton,
                                                                    children: "Never Mind"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    onClick: ()=>setSmallModal(false),
                                                                    color: "success",
                                                                    simple: true,
                                                                    className: classes.modalSmallFooterFirstButton + " " + classes.modalSmallFooterSecondButton,
                                                                    children: "Yes"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 6,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                    block: true,
                                                    round: true,
                                                    onClick: ()=>setLoginModal(true),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((AccountCircle_default()), {}),
                                                        " Login"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Dialog_default()), {
                                                    classes: {
                                                        root: classes.modalRoot,
                                                        paper: classes.modal + " " + classes.modalLogin
                                                    },
                                                    open: loginModal,
                                                    TransitionComponent: Transition,
                                                    keepMounted: true,
                                                    onClose: ()=>setLoginModal(false),
                                                    "aria-labelledby": "login-modal-slide-title",
                                                    "aria-describedby": "login-modal-slide-description",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                        plain: true,
                                                        className: classes.modalLoginCard,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                                                                id: "login-modal-slide-title",
                                                                className: classes.modalHeader,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                                    plain: true,
                                                                    color: "primary",
                                                                    className: classes.textCenter + " " + classes.cardLoginHeader,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                            simple: true,
                                                                            className: classes.modalCloseButton,
                                                                            "aria-label": "Close",
                                                                            onClick: ()=>setLoginModal(false),
                                                                            children: [
                                                                                " ",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                                                                    className: classes.modalClose
                                                                                })
                                                                            ]
                                                                        }, "close"),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                            className: classes.cardTitleWhite,
                                                                            children: "Log in"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: classes.socialLine,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                    justIcon: true,
                                                                                    link: true,
                                                                                    className: classes.socialLineButton,
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fab fa-facebook-square"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                    justIcon: true,
                                                                                    link: true,
                                                                                    className: classes.socialLineButton,
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fab fa-twitter"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                    justIcon: true,
                                                                                    link: true,
                                                                                    className: classes.socialLineButton,
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fab fa-google-plus-g"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                                                                id: "login-modal-slide-description",
                                                                className: classes.modalBody,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: classes.description + " " + classes.textCenter,
                                                                            children: "Or Be Classical"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                            className: classes.cardLoginBody,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                                                                    id: "login-modal-first",
                                                                                    formControlProps: {
                                                                                        fullWidth: true
                                                                                    },
                                                                                    inputProps: {
                                                                                        startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                                                            position: "start",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Face_default()), {
                                                                                                className: classes.icon
                                                                                            })
                                                                                        }),
                                                                                        placeholder: "First Name..."
                                                                                    }
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                                                                    id: "login-modal-email",
                                                                                    formControlProps: {
                                                                                        fullWidth: true
                                                                                    },
                                                                                    inputProps: {
                                                                                        startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                                                            position: "start",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {
                                                                                                className: classes.icon
                                                                                            })
                                                                                        }),
                                                                                        placeholder: "Email..."
                                                                                    }
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                                                                    id: "login-modal-pass",
                                                                                    formControlProps: {
                                                                                        fullWidth: true
                                                                                    },
                                                                                    inputProps: {
                                                                                        startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                                                            position: "start",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                                                                                                className: classes.icon,
                                                                                                children: "lock_outline"
                                                                                            })
                                                                                        }),
                                                                                        placeholder: "Password..."
                                                                                    }
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((DialogActions_default()), {
                                                                className: classes.modalFooter + " " + classes.justifyContentCenter,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    color: "primary",
                                                                    simple: true,
                                                                    size: "lg",
                                                                    children: "Get started"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 6,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                    block: true,
                                                    round: true,
                                                    onClick: ()=>setSignupModal(true),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Assignment_default()), {}),
                                                        " Signup"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Dialog_default()), {
                                                    classes: {
                                                        root: classes.modalRoot,
                                                        paper: classes.modal + " " + classes.modalSignup
                                                    },
                                                    open: signupModal,
                                                    TransitionComponent: Transition,
                                                    keepMounted: true,
                                                    onClose: ()=>setSignupModal(false),
                                                    "aria-labelledby": "signup-modal-slide-title",
                                                    "aria-describedby": "signup-modal-slide-description",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                        plain: true,
                                                        className: classes.modalSignupCard,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogTitle_default()), {
                                                                id: "signup-modal-slide-title",
                                                                className: classes.modalHeader,
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                        simple: true,
                                                                        className: classes.modalCloseButton,
                                                                        "aria-label": "Close",
                                                                        onClick: ()=>setSignupModal(false),
                                                                        children: [
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                                                                className: classes.modalClose
                                                                            })
                                                                        ]
                                                                    }, "close"),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                        className: classes.cardTitle + " " + classes.modalTitle,
                                                                        children: "Register"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                                                                id: "signup-modal-slide-description",
                                                                className: classes.modalBody,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                                            xs: 12,
                                                                            sm: 5,
                                                                            md: 5,
                                                                            className: classes.mlAuto,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(InfoArea, {
                                                                                    className: classes.infoArea,
                                                                                    title: "Marketing",
                                                                                    description: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                                        children: [
                                                                                            "We",
                                                                                            "'",
                                                                                            "ve created the marketing campaign of the website. It was a very interesting collaboration."
                                                                                        ]
                                                                                    }),
                                                                                    icon: (Timeline_default()),
                                                                                    iconColor: "rose"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(InfoArea, {
                                                                                    className: classes.infoArea,
                                                                                    title: "Fully Coded in HTML5",
                                                                                    description: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                                        children: [
                                                                                            "We",
                                                                                            "'",
                                                                                            "ve developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                                                                                        ]
                                                                                    }),
                                                                                    icon: (Code_default()),
                                                                                    iconColor: "primary"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(InfoArea, {
                                                                                    className: classes.infoArea,
                                                                                    title: "Built Audience",
                                                                                    description: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                        children: "There is also a Fully Customizable CMS Admin Dashboard for this product."
                                                                                    }),
                                                                                    icon: (Group_default()),
                                                                                    iconColor: "info"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                                            xs: 12,
                                                                            sm: 5,
                                                                            md: 5,
                                                                            className: classes.mrAuto,
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: classes.textCenter,
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                            justIcon: true,
                                                                                            round: true,
                                                                                            color: "twitter",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "fab fa-twitter"
                                                                                            })
                                                                                        }),
                                                                                        ` `,
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                            justIcon: true,
                                                                                            round: true,
                                                                                            color: "dribbble",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "fab fa-dribbble"
                                                                                            })
                                                                                        }),
                                                                                        ` `,
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                            justIcon: true,
                                                                                            round: true,
                                                                                            color: "facebook",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "fab fa-facebook-f"
                                                                                            })
                                                                                        }),
                                                                                        ` `,
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                                            className: classes.socialTitle,
                                                                                            children: "or be classical"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                                                    className: classes.form,
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                                                                            formControlProps: {
                                                                                                fullWidth: true,
                                                                                                className: classes.customFormControlClasses
                                                                                            },
                                                                                            inputProps: {
                                                                                                startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                                                                    position: "start",
                                                                                                    className: classes.inputAdornment,
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Face_default()), {
                                                                                                        className: classes.inputAdornmentIcon
                                                                                                    })
                                                                                                }),
                                                                                                placeholder: "First Name..."
                                                                                            }
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                                                                            formControlProps: {
                                                                                                fullWidth: true,
                                                                                                className: classes.customFormControlClasses
                                                                                            },
                                                                                            inputProps: {
                                                                                                startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                                                                    position: "start",
                                                                                                    className: classes.inputAdornment,
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Email_default()), {
                                                                                                        className: classes.inputAdornmentIcon
                                                                                                    })
                                                                                                }),
                                                                                                placeholder: "Email..."
                                                                                            }
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                                                                            formControlProps: {
                                                                                                fullWidth: true,
                                                                                                className: classes.customFormControlClasses
                                                                                            },
                                                                                            inputProps: {
                                                                                                startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                                                                    position: "start",
                                                                                                    className: classes.inputAdornment,
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                                                                                                        className: classes.inputAdornmentIcon,
                                                                                                        children: "lock_outline"
                                                                                                    })
                                                                                                }),
                                                                                                placeholder: "Password..."
                                                                                            }
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                                            classes: {
                                                                                                label: classes.label
                                                                                            },
                                                                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                                                tabIndex: -1,
                                                                                                onClick: ()=>handleToggle(1),
                                                                                                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                                                                    className: classes.checkedIcon
                                                                                                }),
                                                                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                                                                    className: classes.uncheckedIcon
                                                                                                }),
                                                                                                classes: {
                                                                                                    checked: classes.checked,
                                                                                                    root: classes.checkRoot
                                                                                                }
                                                                                            }),
                                                                                            label: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                                children: [
                                                                                                    "I agree to the",
                                                                                                    " ",
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                                        href: "#pablo",
                                                                                                        children: "terms and conditions"
                                                                                                    }),
                                                                                                    "."
                                                                                                ]
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                            className: classes.textCenter,
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                                round: true,
                                                                                                color: "primary",
                                                                                                children: "Get started"
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 12,
                                    md: 12,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.title,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Datetime Picker"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 6,
                                                md: 6,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                        className: classes.label,
                                                        children: "Datetime Picker"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControl_default()), {
                                                        fullWidth: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_datetime_default()), {
                                                            inputProps: {
                                                                placeholder: "Datetime Picker Here"
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                        className: classes.label,
                                                        children: "Date Picker"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControl_default()), {
                                                        fullWidth: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_datetime_default()), {
                                                            timeFormat: false,
                                                            inputProps: {
                                                                placeholder: "Date Picker Here"
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                        className: classes.label,
                                                        children: "Time Picker"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControl_default()), {
                                                        fullWidth: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_datetime_default()), {
                                                            dateFormat: false,
                                                            inputProps: {
                                                                placeholder: "Time Picker Here"
                                                            }
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 6,
                            md: 6,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.title,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Popovers"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    onClick: (event)=>setAnchorElLeft(event.currentTarget),
                                    children: "On left"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Popover_default()), {
                                    classes: {
                                        paper: classes.popover
                                    },
                                    open: Boolean(anchorElLeft),
                                    anchorEl: anchorElLeft,
                                    onClose: ()=>setAnchorElLeft(null),
                                    anchorOrigin: {
                                        vertical: "center",
                                        horizontal: "left"
                                    },
                                    transformOrigin: {
                                        vertical: "center",
                                        horizontal: "right"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: classes.popoverHeader,
                                            children: "Popover on left"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.popoverBody,
                                            children: "Here will be some very useful information about his popover. Here will be some very useful information about his popover."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    onClick: (event)=>setAnchorElTop(event.currentTarget),
                                    children: "On top"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Popover_default()), {
                                    classes: {
                                        paper: classes.popover
                                    },
                                    open: Boolean(anchorElTop),
                                    anchorEl: anchorElTop,
                                    onClose: ()=>setAnchorElTop(null),
                                    anchorOrigin: {
                                        vertical: "top",
                                        horizontal: "center"
                                    },
                                    transformOrigin: {
                                        vertical: "bottom",
                                        horizontal: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: classes.popoverHeader,
                                            children: "Popover on top"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.popoverBody,
                                            children: "Here will be some very useful information about his popover."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    onClick: (event)=>setAnchorElBottom(event.currentTarget),
                                    children: "On bottom"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Popover_default()), {
                                    classes: {
                                        paper: classes.popover
                                    },
                                    open: Boolean(anchorElBottom),
                                    anchorEl: anchorElBottom,
                                    onClose: ()=>setAnchorElBottom(null),
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "center"
                                    },
                                    transformOrigin: {
                                        vertical: "top",
                                        horizontal: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: classes.popoverHeader,
                                            children: "Popover on bottom"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.popoverBody,
                                            children: "Here will be some very useful information about his popover."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    onClick: (event)=>setAnchorElRight(event.currentTarget),
                                    children: "On right"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Popover_default()), {
                                    classes: {
                                        paper: classes.popover
                                    },
                                    open: Boolean(anchorElRight),
                                    anchorEl: anchorElRight,
                                    onClose: ()=>setAnchorElRight(null),
                                    anchorOrigin: {
                                        vertical: "center",
                                        horizontal: "right"
                                    },
                                    transformOrigin: {
                                        vertical: "center",
                                        horizontal: "left"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: classes.popoverHeader,
                                            children: "Popover on right"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.popoverBody,
                                            children: "Here will be some very useful information about his popover."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.title,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Tooltips"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                    id: "tooltip-left",
                                    title: "Tooltip on left",
                                    placement: "left",
                                    classes: {
                                        tooltip: classes.tooltip
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        children: "On left"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                    id: "tooltip-top",
                                    title: "Tooltip on top",
                                    placement: "top",
                                    classes: {
                                        tooltip: classes.tooltip
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        children: "On top"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                    id: "tooltip-bottom",
                                    title: "Tooltip on bottom",
                                    placement: "bottom",
                                    classes: {
                                        tooltip: classes.tooltip
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        children: "On bottom"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                    id: "tooltip-right",
                                    title: "Tooltip on right",
                                    placement: "right",
                                    classes: {
                                        tooltip: classes.tooltip
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        children: "On right"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "collapse",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.title,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Collapse"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 8,
                                md: 8,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomAccordion, {
                                    active: 0,
                                    activeColor: "rose",
                                    collapses: [
                                        {
                                            title: "Collapsible group Item #1",
                                            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                                        },
                                        {
                                            title: "Collapsible group Item #2",
                                            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                                        },
                                        {
                                            title: "Collapsible group Item #3",
                                            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                                        }
                                    ]
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.space50
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "file-uploader",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.title,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "File Uploader"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 5,
                                    md: 5,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "Regular Image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ImageUpload, {
                                            addButtonProps: {
                                                round: true
                                            },
                                            changeButtonProps: {
                                                round: true
                                            },
                                            removeButtonProps: {
                                                round: true,
                                                color: "danger"
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 3,
                                    md: 3,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "Avatar"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ImageUpload, {
                                            avatar: true,
                                            addButtonProps: {
                                                round: true
                                            },
                                            changeButtonProps: {
                                                round: true
                                            },
                                            removeButtonProps: {
                                                round: true,
                                                color: "danger"
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 3,
                                    md: 3,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "Simple Material Input"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(CustomFileInput, {
                                            formControlProps: {
                                                fullWidth: true
                                            },
                                            inputProps: {
                                                placeholder: "Simple chooser..."
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(CustomFileInput, {
                                            formControlProps: {
                                                fullWidth: true
                                            },
                                            inputProps: {
                                                placeholder: "Single File..."
                                            },
                                            endButton: {
                                                buttonProps: {
                                                    round: true,
                                                    color: "primary",
                                                    justIcon: true,
                                                    fileButton: true
                                                },
                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((AttachFile_default()), {})
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(CustomFileInput, {
                                            multiple: true,
                                            formControlProps: {
                                                fullWidth: true
                                            },
                                            inputProps: {
                                                placeholder: "Multiple File..."
                                            },
                                            endButton: {
                                                buttonProps: {
                                                    round: true,
                                                    color: "info",
                                                    justIcon: true,
                                                    fileButton: true
                                                },
                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((Layers_default()), {})
                                            }
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.title,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Carousel"
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: external "@mui/icons-material/LocationOn"
const LocationOn_namespaceObject = require("@mui/icons-material/LocationOn");
var LocationOn_default = /*#__PURE__*/__webpack_require__.n(LocationOn_namespaceObject);
;// CONCATENATED MODULE: ./styles/jss/novel-logiks/pages/componentsSections/carouselStyle.js

const carouselStyle = {
    section: {
        padding: "70px 0"
    },
    container: novel_logiks/* container */.nC,
    marginAuto: {
        marginLeft: "auto !important",
        marginRight: "auto !important"
    }
};
/* harmony default export */ const componentsSections_carouselStyle = (carouselStyle);

;// CONCATENATED MODULE: ./pages-sections/components/SectionCarousel.js


// react component for creating beautiful carousel


// @mui/icons-material

// core components




const SectionCarousel_useStyles = makeStyles_default()(componentsSections_carouselStyle);
function SectionCarousel() {
    const classes = SectionCarousel_useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        id: "carousel",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.container,
            children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                    xs: 12,
                    sm: 10,
                    md: 8,
                    className: classes.marginAuto,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                            ...settings,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/bg.jpg",
                                            alt: "First slide",
                                            className: "slick-image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "slick-caption",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((LocationOn_default()), {
                                                        className: "slick-icons"
                                                    }),
                                                    "Yellowstone National Park, United States"
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/bg2.jpg",
                                            alt: "Second slide",
                                            className: "slick-image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "slick-caption",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((LocationOn_default()), {
                                                        className: "slick-icons"
                                                    }),
                                                    "Somewhere Beyond, United States"
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/bg3.jpg",
                                            alt: "Third slide",
                                            className: "slick-image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "slick-caption",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((LocationOn_default()), {
                                                        className: "slick-icons"
                                                    }),
                                                    "Yellowstone National Park, United States"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./styles/jss/novel-logiks/pages/componentsStyle.js

const componentsStyle = {
    main: novel_logiks/* main */.DH,
    mainRaised: novel_logiks/* mainRaised */._p,
    parallax: {
        height: "90vh",
        overflow: "hidden",
        backgroundPosition: "center top"
    },
    container: {
        ...novel_logiks/* container */.nC,
        zIndex: "2",
        position: "relative"
    },
    brand: {
        color: novel_logiks/* whiteColor */.zQ,
        textAlign: "center",
        "& h1": {
            fontSize: "4.2rem",
            fontWeight: "600",
            display: "inline-block",
            position: "relative"
        },
        "& h3": {
            fontSize: "1.313rem",
            maxWidth: "500px",
            margin: "10px auto 0"
        }
    },
    title: {
        ...novel_logiks/* title */.TN,
        color: novel_logiks/* whiteColor */.zQ + "  !important"
    },
    link: {
        textDecoration: "none"
    },
    textCenter: {
        textAlign: "center"
    },
    proBadge: {
        position: "absolute",
        fontSize: "22px",
        textTransform: "uppercase",
        fontWeight: "bold",
        right: "-90px",
        top: "-3px",
        padding: "10px 18px",
        backgroundColor: novel_logiks/* whiteColor */.zQ,
        borderRadius: "3px",
        color: novel_logiks/* grayColor.18 */.X_[18],
        lineHeight: "22px",
        boxShadow: "0px 5px 5px -2px rgba(" + (0,novel_logiks/* hexToRgb */.oo)(novel_logiks/* grayColor.25 */.X_[25]) + ",0.4)"
    },
    section: {
        ...novel_logiks/* section */.qi,
        padding: "70px 0px"
    },
    sectionGray: {
        background: novel_logiks/* grayColor.14 */.X_[14]
    },
    block: {
        color: "inherit",
        padding: "0.9375rem",
        fontWeight: "500",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        textDecoration: "none",
        position: "relative",
        display: "block"
    },
    inlineBlock: {
        display: "inline-block",
        padding: "0px",
        width: "auto"
    },
    list: {
        marginBottom: "0",
        padding: "0",
        marginTop: "0"
    },
    left: {
        float: "left!important",
        display: "block"
    },
    right: {
        padding: "15px 0",
        margin: "0",
        float: "right"
    },
    icon: {
        width: "18px",
        height: "18px",
        top: "3px",
        position: "relative"
    }
};
/* harmony default export */ const pages_componentsStyle = (componentsStyle);

;// CONCATENATED MODULE: ./pages/components.js
/*eslint-disable*/ 

// nodejs library that concatenates classes




// @mui/icons-material

// core components






// sections for this page












const components_useStyles = makeStyles_default()(pages_componentsStyle);
function Components() {
    external_react_default().useEffect(()=>{
        var href = window.location.href.substring(window.location.href.lastIndexOf("#") + 1);
        if (window.location.href.lastIndexOf("#") > 0) {
            document.getElementById(href).scrollIntoView();
        }
        window.addEventListener("scroll", updateView);
        updateView();
        return function cleanup() {
            window.removeEventListener("scroll", updateView);
        };
    });
    const easeInOutQuad = (t, b, c, d)=>{
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
    const updateView = ()=>{
        var contentSections = document.getElementsByClassName("cd-section");
        var navigationItems = document.getElementById("cd-vertical-nav").getElementsByTagName("a");
        for(let i = 0; i < contentSections.length; i++){
            var activeSection = parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
            if (contentSections[i].offsetTop - window.innerHeight / 2 + document.getElementById("main-panel").offsetTop < window.pageYOffset && contentSections[i].offsetTop + contentSections[i].scrollHeight - window.innerHeight / 2 + document.getElementById("main-panel").offsetTop > window.pageYOffset) {
                navigationItems[activeSection].classList.add("is-selected");
            } else {
                navigationItems[activeSection].classList.remove("is-selected");
            }
        }
    };
    const smoothScroll = (target)=>{
        var targetScroll = document.getElementById(target);
        scrollTo(document.documentElement, targetScroll.offsetTop, 900);
    };
    const scrollTo = (element, to, duration)=>{
        var start = element.scrollTop, change = to - start + document.getElementById("main-panel").offsetTop, currentTime = 0, increment = 20;
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
    const classes = components_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                brand: "",
                links: /*#__PURE__*/ jsx_runtime_.jsx(HeaderLinks/* default */.Z, {
                    dropdownHoverColor: "info"
                }),
                fixed: true,
                color: "transparent",
                changeColorOnScroll: {
                    height: 400,
                    color: "info"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Parallax/* default */.Z, {
                image: "/img/nextjs_header.jpg",
                className: classes.parallax,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: classes.brand,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                        children: [
                                            "NextJS Material Kit",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: classes.proBadge,
                                                children: "PRO"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: classes.title,
                                        children: "All Components"
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: external_classnames_default()(classes.main, classes.mainRaised),
                id: "main-panel",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionBasics, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionNavbars, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionTabs, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionPills, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionNotifications, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: external_classnames_default()(classes.section, classes.sectionGray, "cd-section"),
                        id: "footers",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SectionPreFooter, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(SectionFooter, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionTypography, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionCards, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionJavascript, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionCarousel, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                id: "cd-vertical-nav",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#buttons",
                                "data-number": "1",
                                className: "",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    smoothScroll("buttons");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Basic Elements"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#navigation",
                                "data-number": "2",
                                className: "",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    smoothScroll("navigation");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Navigation"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#notifications",
                                "data-number": "3",
                                className: "",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    smoothScroll("notifications");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Notifications"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#footers",
                                "data-number": "4",
                                className: "",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    smoothScroll("footers");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Footers"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#typography",
                                "data-number": "5",
                                className: "",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    smoothScroll("typography");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Typography"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#contentAreas",
                                "data-number": "6",
                                className: "",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    smoothScroll("contentAreas");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Content Areas"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#cards",
                                "data-number": "7",
                                className: "",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    smoothScroll("cards");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Cards"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#morphingCards",
                                "data-number": "8",
                                className: "",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    smoothScroll("morphingCards");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Morphing Cards"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#pablo",
                                "data-number": "9",
                                className: "",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    smoothScroll("javascriptComponents");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Javascript"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.left,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                className: classes.list,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://novellogiks.com/?ref=njsmkp-components",
                                            target: "_blank",
                                            className: classes.block,
                                            children: "Sunil"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://novellogiks.com/presentation?ref=njsmkp-components",
                                            target: "_blank",
                                            className: classes.block,
                                            children: "About us"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "http://blog.creative-tim.com/?ref=njsmkp-components",
                                            className: classes.block,
                                            children: "Blog"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://novellogiks.com/license?ref=njsmkp-components",
                                            target: "_blank",
                                            className: classes.block,
                                            children: "Licenses"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classes.right,
                            children: [
                                "\xa9 ",
                                1900 + new Date().getYear(),
                                " , made with",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {
                                    className: classes.icon
                                }),
                                " by",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://novellogiks.com?ref=njsmkp-components",
                                    target: "_blank",
                                    children: "Sunil"
                                }),
                                " ",
                                "for a better web."
                            ]
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 7372:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Favorite");

/***/ }),

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 3684:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Subject");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3882:
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

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

/***/ 4192:
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 1168:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 1431:
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

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

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

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
var __webpack_exports__ = __webpack_require__.X(0, [952,270,664,441,999,39,568,765,482,82,696,645,951,174,479], () => (__webpack_exec__(7980)));
module.exports = __webpack_exports__;

})();