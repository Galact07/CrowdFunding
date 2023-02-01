"use strict";
(() => {
var exports = {};
exports.id = 634;
exports.ids = [634];
exports.modules = {

/***/ 727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ show)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(824);
// EXTERNAL MODULE: ./ethereum/campaign.js + 1 modules
var ethereum_campaign = __webpack_require__(165);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(156);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(262);
;// CONCATENATED MODULE: ./components/ContributeForm.js






const ContributeForm = ({ address  })=>{
    const [value, setValue] = (0,external_react_.useState)("");
    const [errorMessage, setErrorMessage] = (0,external_react_.useState)("");
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const [hidden, setHidden] = (0,external_react_.useState)(true);
    const [message, setMessage] = (0,external_react_.useState)("");
    const onSubmit = async (e)=>{
        e.preventDefault();
        setErrorMessage("");
        const campaign = await (0,ethereum_campaign/* default */.Z)(address);
        try {
            setHidden(false);
            setMessage("It will take around 15 to 20 seconds to complete the transaction. Please Wait!");
            setLoading(true);
            const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3/* default.utils.toWei */.Z.utils.toWei(value, "ether")
            });
            setMessage("");
            setHidden(true);
        } catch (err) {
            setHidden(true);
            setErrorMessage(err.message);
        }
        setLoading(false);
        routes.Router.replaceRoute(`/campaigns/${address}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form, {
        onSubmit: onSubmit,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form.Field, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        children: "Amount to Contribute"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Input, {
                        value: value,
                        onChange: (e)=>{
                            setValue(e.target.value);
                        },
                        label: "ether",
                        labelPosition: "right"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Message, {
                error: true,
                header: "Oops! Something Went Wrong",
                content: errorMessage
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Message, {
                hidden: hidden,
                primary: true,
                content: message
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                loading: loading,
                primary: true,
                children: "Contribute !"
            })
        ]
    });
};
/* harmony default export */ const components_ContributeForm = (ContributeForm);

;// CONCATENATED MODULE: ./pages/campaigns/show.js








const CampaignShow = (props)=>{
    const renderCards = ()=>{
        const { minimumContribution , balance , requestsCount , approversCount , manager  } = props;
        const items = [
            {
                header: manager,
                meta: "Address of manager",
                description: "The manager created this campaign and create requests for this campaign",
                style: {
                    overflowWrap: "break-word"
                }
            },
            {
                header: minimumContribution,
                meta: "Minimum Contribution (Wei)",
                description: "You must contribute at least this much wei to campaign"
            },
            {
                header: requestsCount,
                meta: "Number of Requests",
                description: "A request tries to withdraw money from the campaign"
            },
            {
                header: approversCount,
                meta: "Campaign Balance (ether)",
                description: "Number of people who have already donated to the"
            },
            {
                header: web3/* default.utils.fromWei */.Z.utils.fromWei(balance, "ether"),
                meta: "Campaign Balance (ether)",
                description: "The balance is how much money this campaign ha left to spend"
            }
        ];
        return /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Card.Group, {
            items: items
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid.Row, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                            width: 10,
                            children: renderCards()
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                            width: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_ContributeForm, {
                                address: props.address
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Row, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                            legacyBehavior: true,
                            route: `/campaigns/${props.address}/requests`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                                    primary: true,
                                    children: "View Requests"
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
};
CampaignShow.getInitialProps = async (props)=>{
    const campaign = await (0,ethereum_campaign/* default */.Z)(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    return {
        address: props.query.address,
        minimumContribution: summary[0],
        balance: summary[1],
        requestsCount: summary[2],
        approversCount: summary[3],
        manager: summary[4]
    };
};
/* harmony default export */ const show = (CampaignShow);


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
var __webpack_exports__ = __webpack_require__.X(0, [473,165], () => (__webpack_exec__(727)));
module.exports = __webpack_exports__;

})();