exports.id = 444;
exports.ids = [444];
exports.modules = {

/***/ 400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ factory)
});

// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(156);
;// CONCATENATED MODULE: ./ethereum/build/CampaignFactory.json
const CampaignFactory_namespaceObject = JSON.parse('{"w3":"[{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"deployedCampaigns\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getDeployedCampaign\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address[]\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"minimum\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"createCampaign\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}]"}');
;// CONCATENATED MODULE: ./ethereum/factory.js


const instance = new web3/* default.eth.Contract */.Z.eth.Contract(JSON.parse(CampaignFactory_namespaceObject.w3), "0x0086a55EB5804b6B35c6bA2EA97b98B6764e7981");
/* harmony default export */ const factory = (instance);


/***/ }),

/***/ 158:
/***/ (() => {



/***/ })

};
;