"use strict";
exports.id = 724;
exports.ids = [724];
exports.modules = {

/***/ 5870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ aboutUs)
/* harmony export */ });
const aboutUs = [
    {
        serviceTitle: "Vision",
        serviceImageUrl: "img/resized_imgs/vision.png",
        serviceOneLiner: "To inspire people and improve lives through technology delivered by us.",
        servicePoints: []
    },
    {
        serviceTitle: "Mission",
        serviceImageUrl: "img/resized_imgs/mission.png",
        serviceOneLiner: "To contribute to the overall wellbeing of the communities we operate our business.",
        servicePoints: []
    },
    {
        serviceTitle: "Values",
        serviceImageUrl: "img/resized_imgs/values.png",
        serviceOneLiner: null,
        servicePoints: [
            "Oneness",
            "Integrity",
            "Humour",
            "Trust",
            "Thrive",
            "Strive", 
        ]
    }, 
];


/***/ }),

/***/ 6724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4041);
/* harmony import */ var _components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6680);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_jss_novel_logiks_pages_sectionsSections_headersStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4866);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Card_Card_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2643);
/* harmony import */ var _components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3082);
/* harmony import */ var _components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(222);
/* harmony import */ var _components_Typography_Warning_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4951);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1168);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _data_about_us_data_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5870);











// import { Grid } from "@mui/material";






const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(_styles_jss_novel_logiks_pages_sectionsSections_headersStyle_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
const SectionAboutUsCard = (props)=>{
    const classes = useStyles();
    console.log(props);
    const { index  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        blog: true,
        style: {
            backgroundColor: "#FFF",
            borderRadius: "1rem",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            minHeight: "15rem",
            minWidth: "15.5rem"
        },
        sx: {
            height: {
                xs: "15rem",
                sm: "15rem",
                md: "18rem",
                lg: "21rem"
            },
            width: {
                xs: "15.5rem",
                sm: "15.5rem",
                md: "18.5rem",
                lg: "21.5rem"
            }
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    style: {
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: _data_about_us_data_js__WEBPACK_IMPORTED_MODULE_16__/* .aboutUs */ .N[index].serviceImageUrl,
                        alt: _data_about_us_data_js__WEBPACK_IMPORTED_MODULE_16__/* .aboutUs */ .N[index].serviceImageUrl,
                        style: {
                            width: "4.375rem",
                            height: "4.375rem",
                            textAlign: "center",
                            justifyContent: "center"
                        }
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                    className: classes.cardCategory,
                    style: {
                        fontFamily: "Montserrat",
                        fontSize: "1.5rem",
                        lineHeight: "1.5rem",
                        fontWeight: "600",
                        textAlign: "center",
                        color: "#112A46"
                    },
                    children: _data_about_us_data_js__WEBPACK_IMPORTED_MODULE_16__/* .aboutUs */ .N[index].serviceTitle
                }),
                _data_about_us_data_js__WEBPACK_IMPORTED_MODULE_16__/* .aboutUs */ .N[index].serviceOneLiner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default()), {
                    container: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default()), {
                        item: true,
                        xs: 12,
                        style: {
                            lineHeight: "1.313rem",
                            color: "#112A46",
                            fontWeight: "600"
                        },
                        children: _data_about_us_data_js__WEBPACK_IMPORTED_MODULE_16__/* .aboutUs */ .N[index].serviceOneLiner
                    })
                }),
                _data_about_us_data_js__WEBPACK_IMPORTED_MODULE_16__/* .aboutUs */ .N[index].servicePoints && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default()), {
                    container: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default()), {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default()), {
                            container: true,
                            children: _data_about_us_data_js__WEBPACK_IMPORTED_MODULE_16__/* .aboutUs */ .N[index].servicePoints.map((e, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default()), {
                                    item: true,
                                    xs: 6,
                                    style: {
                                        textAlign: "center",
                                        color: "#112A46",
                                        lineHeight: "1.313rem",
                                        fontWeight: "600"
                                    },
                                    children: e
                                }, index))
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionAboutUsCard);


/***/ })

};
;