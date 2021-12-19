self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Acomplishments/Acomplishments.js":
/*!*********************************************************!*\
  !*** ./src/components/Acomplishments/Acomplishments.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AcomplishmentsStyles */ "./src/components/Acomplishments/AcomplishmentsStyles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\tmp\\msris108.github.io\\src\\components\\Acomplishments\\Acomplishments.js",
    _this = undefined;




var data = [{
  platform: 'Coursera',
  text: 'Deep Learning Specialization',
  link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/PFJWJUVMFJWA'
}, {
  platform: 'Coursera',
  text: 'Blockchain Specialization',
  link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/YV849XCYVSYL'
}, {
  platform: 'Coursera',
  text: 'Tensorflow In Practice ',
  link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/AARAXAJCFLCF'
}, {
  platform: 'Coursera',
  text: 'Linear Algebra for Machine Learning',
  link: 'https://www.coursera.org/account/accomplishments/certificate/YNC958E4MD53'
}, {
  platform: 'Coursera',
  text: 'Agile Design',
  link: 'https://www.coursera.org/account/accomplishments/certificate/Y3DWFWJZ8YZS'
}, {
  platform: 'Coursera',
  text: 'Web App Dev. using PHP',
  link: 'https://www.coursera.org/account/accomplishments/certificate/V44F3DL46HJE'
}, {
  platform: 'NPTEL',
  text: 'Industrial IOT and Industry 4.0',
  link: '/'
}, {
  platform: 'NPTEL',
  text: 'Data Analytics with Python',
  link: '/'
}];

var Acomplishments = function Acomplishments() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
    id: "skills",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
      children: "Certifications"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Boxes, {
      children: data.map(function (card, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Box, {
          onClick: function onClick() {
            return window.location = "".concat(card.link);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxNum, {
            children: "".concat(card.platform)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxText, {
            children: card.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 11
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }, _this);
};

_c = Acomplishments;
/* harmony default export */ __webpack_exports__["default"] = (Acomplishments);

var _c;

$RefreshReg$(_c, "Acomplishments");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiXSwibmFtZXMiOlsiZGF0YSIsInBsYXRmb3JtIiwidGV4dCIsImxpbmsiLCJBY29tcGxpc2htZW50cyIsIm1hcCIsImNhcmQiLCJpbmRleCIsIndpbmRvdyIsImxvY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFBRUMsVUFBUSxFQUFFLFVBQVo7QUFBd0JDLE1BQUksRUFBRSw4QkFBOUI7QUFBOERDLE1BQUksRUFBRTtBQUFwRSxDQURXLEVBRVg7QUFBRUYsVUFBUSxFQUFFLFVBQVo7QUFBd0JDLE1BQUksRUFBRSwyQkFBOUI7QUFBMkRDLE1BQUksRUFBRTtBQUFqRSxDQUZXLEVBR1g7QUFBRUYsVUFBUSxFQUFFLFVBQVo7QUFBd0JDLE1BQUksRUFBRSx5QkFBOUI7QUFBeURDLE1BQUksRUFBRTtBQUEvRCxDQUhXLEVBSVg7QUFBRUYsVUFBUSxFQUFFLFVBQVo7QUFBd0JDLE1BQUksRUFBRSxxQ0FBOUI7QUFBcUVDLE1BQUksRUFBRTtBQUEzRSxDQUpXLEVBS1g7QUFBRUYsVUFBUSxFQUFFLFVBQVo7QUFBd0JDLE1BQUksRUFBRSxjQUE5QjtBQUE4Q0MsTUFBSSxFQUFFO0FBQXBELENBTFcsRUFNWDtBQUFFRixVQUFRLEVBQUUsVUFBWjtBQUF3QkMsTUFBSSxFQUFFLHdCQUE5QjtBQUF3REMsTUFBSSxFQUFFO0FBQTlELENBTlcsRUFPWDtBQUFFRixVQUFRLEVBQUUsT0FBWjtBQUFxQkMsTUFBSSxFQUFFLGlDQUEzQjtBQUE4REMsTUFBSSxFQUFFO0FBQXBFLENBUFcsRUFRWDtBQUFFRixVQUFRLEVBQUUsT0FBWjtBQUFxQkMsTUFBSSxFQUFFLDRCQUEzQjtBQUF5REMsTUFBSSxFQUFFO0FBQS9ELENBUlcsQ0FBYjs7QUFXQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsc0JBQ3JCLDhEQUFDLDZEQUFEO0FBQVMsTUFBRSxFQUFDLFFBQVo7QUFBQSw0QkFDRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsd0RBQUQ7QUFBQSxnQkFDR0osSUFBSSxDQUFDSyxHQUFMLENBQVMsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsNEJBQ1IsOERBQUMsc0RBQUQ7QUFBaUIsaUJBQU8sRUFBRTtBQUFBLG1CQUFNQyxNQUFNLENBQUNDLFFBQVAsYUFBcUJILElBQUksQ0FBQ0gsSUFBMUIsQ0FBTjtBQUFBLFdBQTFCO0FBQUEsa0NBQ0UsOERBQUMseURBQUQ7QUFBQSxnQ0FBWUcsSUFBSSxDQUFDTCxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQywwREFBRDtBQUFBLHNCQUFVSyxJQUFJLENBQUNKO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBLFdBQVVLLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUTtBQUFBLE9BQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRHFCO0FBQUEsQ0FBdkI7O0tBQU1ILGM7QUFjTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iOGMzYzk4Yjg5ODFkOGEwMzM2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGV4dCwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBCb3gsIEJveGVzLCBCb3hOdW0sIEJveFRleHQgfSBmcm9tICcuL0Fjb21wbGlzaG1lbnRzU3R5bGVzJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAgeyBwbGF0Zm9ybTogJ0NvdXJzZXJhJywgdGV4dDogJ0RlZXAgTGVhcm5pbmcgU3BlY2lhbGl6YXRpb24nLCBsaW5rOiAnaHR0cHM6Ly93d3cuY291cnNlcmEub3JnL2FjY291bnQvYWNjb21wbGlzaG1lbnRzL3NwZWNpYWxpemF0aW9uL2NlcnRpZmljYXRlL1BGSldKVVZNRkpXQScsIH0sXHJcbiAgeyBwbGF0Zm9ybTogJ0NvdXJzZXJhJywgdGV4dDogJ0Jsb2NrY2hhaW4gU3BlY2lhbGl6YXRpb24nLCBsaW5rOiAnaHR0cHM6Ly93d3cuY291cnNlcmEub3JnL2FjY291bnQvYWNjb21wbGlzaG1lbnRzL3NwZWNpYWxpemF0aW9uL2NlcnRpZmljYXRlL1lWODQ5WENZVlNZTCcsIH0sXHJcbiAgeyBwbGF0Zm9ybTogJ0NvdXJzZXJhJywgdGV4dDogJ1RlbnNvcmZsb3cgSW4gUHJhY3RpY2UgJywgbGluazogJ2h0dHBzOi8vd3d3LmNvdXJzZXJhLm9yZy9hY2NvdW50L2FjY29tcGxpc2htZW50cy9zcGVjaWFsaXphdGlvbi9jZXJ0aWZpY2F0ZS9BQVJBWEFKQ0ZMQ0YnLCB9LFxyXG4gIHsgcGxhdGZvcm06ICdDb3Vyc2VyYScsIHRleHQ6ICdMaW5lYXIgQWxnZWJyYSBmb3IgTWFjaGluZSBMZWFybmluZycsIGxpbms6ICdodHRwczovL3d3dy5jb3Vyc2VyYS5vcmcvYWNjb3VudC9hY2NvbXBsaXNobWVudHMvY2VydGlmaWNhdGUvWU5DOTU4RTRNRDUzJywgfSxcclxuICB7IHBsYXRmb3JtOiAnQ291cnNlcmEnLCB0ZXh0OiAnQWdpbGUgRGVzaWduJywgbGluazogJ2h0dHBzOi8vd3d3LmNvdXJzZXJhLm9yZy9hY2NvdW50L2FjY29tcGxpc2htZW50cy9jZXJ0aWZpY2F0ZS9ZM0RXRldKWjhZWlMnLCB9LFxyXG4gIHsgcGxhdGZvcm06ICdDb3Vyc2VyYScsIHRleHQ6ICdXZWIgQXBwIERldi4gdXNpbmcgUEhQJywgbGluazogJ2h0dHBzOi8vd3d3LmNvdXJzZXJhLm9yZy9hY2NvdW50L2FjY29tcGxpc2htZW50cy9jZXJ0aWZpY2F0ZS9WNDRGM0RMNDZISkUnLCB9LFxyXG4gIHsgcGxhdGZvcm06ICdOUFRFTCcsIHRleHQ6ICdJbmR1c3RyaWFsIElPVCBhbmQgSW5kdXN0cnkgNC4wJywgbGluazogJy8nLCB9LFxyXG4gIHsgcGxhdGZvcm06ICdOUFRFTCcsIHRleHQ6ICdEYXRhIEFuYWx5dGljcyB3aXRoIFB5dGhvbicsIGxpbms6ICcvJ31cclxuXTtcclxuXHJcbmNvbnN0IEFjb21wbGlzaG1lbnRzID0gKCkgPT4gKFxyXG4gIDxTZWN0aW9uIGlkPSdza2lsbHMnPlxyXG4gICAgPFNlY3Rpb25UaXRsZT5DZXJ0aWZpY2F0aW9uczwvU2VjdGlvblRpdGxlPlxyXG4gICAgPEJveGVzPlxyXG4gICAgICB7ZGF0YS5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPEJveCBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24gPSBgJHtjYXJkLmxpbmt9YH0+XHJcbiAgICAgICAgICA8Qm94TnVtPntgJHtjYXJkLnBsYXRmb3JtfWB9PC9Cb3hOdW0+XHJcbiAgICAgICAgICA8Qm94VGV4dD57Y2FyZC50ZXh0fTwvQm94VGV4dD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKSl9XHJcbiAgICA8L0JveGVzPlxyXG4gIDwvU2VjdGlvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjb21wbGlzaG1lbnRzOyJdLCJzb3VyY2VSb290IjoiIn0=