"use strict";
exports.id = 473;
exports.ids = [473];
exports.modules = {

/***/ 824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(262);
;// CONCATENATED MODULE: ./components/Header.js




class Header extends external_react_.Component {
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Menu, {
                pointing: true,
                style: {
                    marginTop: "10px",
                    marginBottom: "20px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                        legacyBehavior: true,
                        route: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "item",
                            children: "CrowdCoin"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Menu.Menu, {
                        position: "right",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                                legacyBehavior: true,
                                route: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "item",
                                    children: "Campaigns"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                                legacyBehavior: true,
                                route: "/campaigns/new",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "item",
                                    children: "+"
                                })
                            })
                        ]
                    })
                ]
            })
        });
    }
}

;// CONCATENATED MODULE: ./components/Layout.js




/* harmony default export */ const Layout = ((props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            props.children
        ]
    }, props.children);
});


/***/ }),

/***/ 156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

let web3;
if (false) {} else {
    const provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)("https://goerli.infura.io/v3/e8821f49dabd4c43b702605f3b7bf916");
    web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (web3);


/***/ }),

/***/ 262:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const routes = __webpack_require__(662)();
routes.add("/campaigns/new", "/campaigns/new").add("/campaigns/:address", "/campaigns/show").add("/campaigns/:address/requests", "/campaigns/requests/index").add("/campaigns/:address/requests/new", "/campaigns/requests/new");
module.exports = routes;


/***/ })

};
;