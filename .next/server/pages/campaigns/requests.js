"use strict";
(() => {
var exports = {};
exports.id = 73;
exports.ids = [73];
exports.modules = {

/***/ 85:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ requests)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(824);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(262);
// EXTERNAL MODULE: ./ethereum/campaign.js + 1 modules
var ethereum_campaign = __webpack_require__(165);
// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(156);
;// CONCATENATED MODULE: ./components/RequestRow.js





const RequestRow = (props)=>{
    const { Row , Cell  } = external_semantic_ui_react_.Table;
    const { id , request , approversCount , address  } = props;
    const readyToFinalize = request.approvalCount > approversCount / 2;
    const onApprove = async ()=>{
        const campaign = await (0,ethereum_campaign/* default */.Z)(address);
        const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
        await campaign.methods.approveRequest(id).send({
            from: accounts[0]
        });
    };
    const onFinalize = async ()=>{
        const campaign = await (0,ethereum_campaign/* default */.Z)(address);
        const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
        await campaign.methods.finalizeRequest(id).send({
            from: accounts[0]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
        disabled: request.complete,
        positive: readyToFinalize && !request.complete,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                children: id
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                children: request.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                children: web3/* default.utils.fromWei */.Z.utils.fromWei(request.value, "ether")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                children: request.recipient
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Cell, {
                children: [
                    request.approvalCount,
                    "/",
                    approversCount
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                children: request.complete ? null : /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                    color: "green",
                    basic: true,
                    onClick: onApprove,
                    children: "Approve"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                children: request.complete ? null : /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                    color: "teal",
                    basic: true,
                    onClick: onFinalize,
                    children: "Finalize"
                })
            })
        ]
    });
};
/* harmony default export */ const components_RequestRow = (RequestRow);

;// CONCATENATED MODULE: ./pages/campaigns/requests/index.js







const RequestIndex = (props)=>{
    const { Header , Row , HeaderCell , Body  } = external_semantic_ui_react_.Table;
    const renderRows = ()=>{
        return props.requests.map((request, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(components_RequestRow, {
                id: index,
                request: request,
                address: props.address,
                approversCount: props.approversCount
            }, index);
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Requests"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                legacyBehavior: true,
                route: `/campaigns/${props.address}/requests/new`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                        primary: true,
                        floated: "right",
                        style: {
                            marginBottom: "10px"
                        },
                        children: "Add Requests"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Table, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                    children: "ID"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                    children: "Description"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                    children: "Amount"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                    children: "Recipient"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                    children: "Approval Count"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                    children: "Approve"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                    children: "Finalize"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Body, {
                        children: renderRows()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    "Found ",
                    props.requestCount,
                    " requests."
                ]
            })
        ]
    });
};
RequestIndex.getInitialProps = async (props)=>{
    const address = props.query.address;
    const campaign = await (0,ethereum_campaign/* default */.Z)(address);
    const requestCount = await campaign.methods.getRequestCount().call();
    const approversCount = await campaign.methods.approversCount().call();
    const requests = await Promise.all(Array(parseInt(requestCount)).fill().map((element, index)=>{
        return campaign.methods.requests(index).call();
    }));
    return {
        address,
        requests,
        requestCount,
        approversCount
    };
};
/* harmony default export */ const requests = (RequestIndex);


/***/ }),

/***/ 662:
/***/ ((module) => {

module.exports = require("next-routes");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 831:
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ 519:
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [473,165], () => (__webpack_exec__(85)));
module.exports = __webpack_exports__;

})();