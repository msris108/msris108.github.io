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
  text: 'Agile Design and Agile Thinking',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiXSwibmFtZXMiOlsiZGF0YSIsInBsYXRmb3JtIiwidGV4dCIsImxpbmsiLCJBY29tcGxpc2htZW50cyIsIm1hcCIsImNhcmQiLCJpbmRleCIsIndpbmRvdyIsImxvY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFBRUMsVUFBUSxFQUFFLFVBQVo7QUFBd0JDLE1BQUksRUFBRSw4QkFBOUI7QUFBOERDLE1BQUksRUFBRTtBQUFwRSxDQURXLEVBRVg7QUFBRUYsVUFBUSxFQUFFLFVBQVo7QUFBd0JDLE1BQUksRUFBRSwyQkFBOUI7QUFBMkRDLE1BQUksRUFBRTtBQUFqRSxDQUZXLEVBR1g7QUFBRUYsVUFBUSxFQUFFLFVBQVo7QUFBd0JDLE1BQUksRUFBRSx5QkFBOUI7QUFBeURDLE1BQUksRUFBRTtBQUEvRCxDQUhXLEVBSVg7QUFBRUYsVUFBUSxFQUFFLFVBQVo7QUFBd0JDLE1BQUksRUFBRSxxQ0FBOUI7QUFBcUVDLE1BQUksRUFBRTtBQUEzRSxDQUpXLEVBS1g7QUFBRUYsVUFBUSxFQUFFLFVBQVo7QUFBd0JDLE1BQUksRUFBRSxpQ0FBOUI7QUFBaUVDLE1BQUksRUFBRTtBQUF2RSxDQUxXLEVBTVg7QUFBRUYsVUFBUSxFQUFFLFVBQVo7QUFBd0JDLE1BQUksRUFBRSx3QkFBOUI7QUFBd0RDLE1BQUksRUFBRTtBQUE5RCxDQU5XLEVBT1g7QUFBRUYsVUFBUSxFQUFFLE9BQVo7QUFBcUJDLE1BQUksRUFBRSxpQ0FBM0I7QUFBOERDLE1BQUksRUFBRTtBQUFwRSxDQVBXLEVBUVg7QUFBRUYsVUFBUSxFQUFFLE9BQVo7QUFBcUJDLE1BQUksRUFBRSw0QkFBM0I7QUFBeURDLE1BQUksRUFBRTtBQUEvRCxDQVJXLENBQWI7O0FBV0EsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLHNCQUNyQiw4REFBQyw2REFBRDtBQUFTLE1BQUUsRUFBQyxRQUFaO0FBQUEsNEJBQ0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLHdEQUFEO0FBQUEsZ0JBQ0dKLElBQUksQ0FBQ0ssR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDRCQUNSLDhEQUFDLHNEQUFEO0FBQWlCLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUMsTUFBTSxDQUFDQyxRQUFQLGFBQXFCSCxJQUFJLENBQUNILElBQTFCLENBQU47QUFBQSxXQUExQjtBQUFBLGtDQUNFLDhEQUFDLHlEQUFEO0FBQUEsZ0NBQVlHLElBQUksQ0FBQ0wsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsMERBQUQ7QUFBQSxzQkFBVUssSUFBSSxDQUFDSjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQSxXQUFVSyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFE7QUFBQSxPQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURxQjtBQUFBLENBQXZCOztLQUFNSCxjO0FBY04sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGFkM2U2YWVjMjY4ZGYyYzU2NzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcclxuaW1wb3J0IHsgQm94LCBCb3hlcywgQm94TnVtLCBCb3hUZXh0IH0gZnJvbSAnLi9BY29tcGxpc2htZW50c1N0eWxlcyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHsgcGxhdGZvcm06ICdDb3Vyc2VyYScsIHRleHQ6ICdEZWVwIExlYXJuaW5nIFNwZWNpYWxpemF0aW9uJywgbGluazogJ2h0dHBzOi8vd3d3LmNvdXJzZXJhLm9yZy9hY2NvdW50L2FjY29tcGxpc2htZW50cy9zcGVjaWFsaXphdGlvbi9jZXJ0aWZpY2F0ZS9QRkpXSlVWTUZKV0EnLCB9LFxyXG4gIHsgcGxhdGZvcm06ICdDb3Vyc2VyYScsIHRleHQ6ICdCbG9ja2NoYWluIFNwZWNpYWxpemF0aW9uJywgbGluazogJ2h0dHBzOi8vd3d3LmNvdXJzZXJhLm9yZy9hY2NvdW50L2FjY29tcGxpc2htZW50cy9zcGVjaWFsaXphdGlvbi9jZXJ0aWZpY2F0ZS9ZVjg0OVhDWVZTWUwnLCB9LFxyXG4gIHsgcGxhdGZvcm06ICdDb3Vyc2VyYScsIHRleHQ6ICdUZW5zb3JmbG93IEluIFByYWN0aWNlICcsIGxpbms6ICdodHRwczovL3d3dy5jb3Vyc2VyYS5vcmcvYWNjb3VudC9hY2NvbXBsaXNobWVudHMvc3BlY2lhbGl6YXRpb24vY2VydGlmaWNhdGUvQUFSQVhBSkNGTENGJywgfSxcclxuICB7IHBsYXRmb3JtOiAnQ291cnNlcmEnLCB0ZXh0OiAnTGluZWFyIEFsZ2VicmEgZm9yIE1hY2hpbmUgTGVhcm5pbmcnLCBsaW5rOiAnaHR0cHM6Ly93d3cuY291cnNlcmEub3JnL2FjY291bnQvYWNjb21wbGlzaG1lbnRzL2NlcnRpZmljYXRlL1lOQzk1OEU0TUQ1MycsIH0sXHJcbiAgeyBwbGF0Zm9ybTogJ0NvdXJzZXJhJywgdGV4dDogJ0FnaWxlIERlc2lnbiBhbmQgQWdpbGUgVGhpbmtpbmcnLCBsaW5rOiAnaHR0cHM6Ly93d3cuY291cnNlcmEub3JnL2FjY291bnQvYWNjb21wbGlzaG1lbnRzL2NlcnRpZmljYXRlL1kzRFdGV0paOFlaUycsIH0sXHJcbiAgeyBwbGF0Zm9ybTogJ0NvdXJzZXJhJywgdGV4dDogJ1dlYiBBcHAgRGV2LiB1c2luZyBQSFAnLCBsaW5rOiAnaHR0cHM6Ly93d3cuY291cnNlcmEub3JnL2FjY291bnQvYWNjb21wbGlzaG1lbnRzL2NlcnRpZmljYXRlL1Y0NEYzREw0NkhKRScsIH0sXHJcbiAgeyBwbGF0Zm9ybTogJ05QVEVMJywgdGV4dDogJ0luZHVzdHJpYWwgSU9UIGFuZCBJbmR1c3RyeSA0LjAnLCBsaW5rOiAnLycsIH0sXHJcbiAgeyBwbGF0Zm9ybTogJ05QVEVMJywgdGV4dDogJ0RhdGEgQW5hbHl0aWNzIHdpdGggUHl0aG9uJywgbGluazogJy8nfVxyXG5dO1xyXG5cclxuY29uc3QgQWNvbXBsaXNobWVudHMgPSAoKSA9PiAoXHJcbiAgPFNlY3Rpb24gaWQ9J3NraWxscyc+XHJcbiAgICA8U2VjdGlvblRpdGxlPkNlcnRpZmljYXRpb25zPC9TZWN0aW9uVGl0bGU+XHJcbiAgICA8Qm94ZXM+XHJcbiAgICAgIHtkYXRhLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcclxuICAgICAgICA8Qm94IGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbiA9IGAke2NhcmQubGlua31gfT5cclxuICAgICAgICAgIDxCb3hOdW0+e2Ake2NhcmQucGxhdGZvcm19YH08L0JveE51bT5cclxuICAgICAgICAgIDxCb3hUZXh0PntjYXJkLnRleHR9PC9Cb3hUZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApKX1cclxuICAgIDwvQm94ZXM+XHJcbiAgPC9TZWN0aW9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNvbXBsaXNobWVudHM7Il0sInNvdXJjZVJvb3QiOiIifQ==