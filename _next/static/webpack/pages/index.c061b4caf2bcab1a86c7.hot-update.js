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
  text: 'Web App Dev. ',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiXSwibmFtZXMiOlsiZGF0YSIsInBsYXRmb3JtIiwidGV4dCIsImxpbmsiLCJBY29tcGxpc2htZW50cyIsIm1hcCIsImNhcmQiLCJpbmRleCIsIndpbmRvdyIsImxvY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFBRUMsVUFBUSxFQUFFLFVBQVo7QUFBd0JDLE1BQUksRUFBRSw4QkFBOUI7QUFBOERDLE1BQUksRUFBRTtBQUFwRSxDQURXLEVBRVg7QUFBRUYsVUFBUSxFQUFFLFVBQVo7QUFBd0JDLE1BQUksRUFBRSwyQkFBOUI7QUFBMkRDLE1BQUksRUFBRTtBQUFqRSxDQUZXLEVBR1g7QUFBRUYsVUFBUSxFQUFFLFVBQVo7QUFBd0JDLE1BQUksRUFBRSx5QkFBOUI7QUFBeURDLE1BQUksRUFBRTtBQUEvRCxDQUhXLEVBSVg7QUFBRUYsVUFBUSxFQUFFLFVBQVo7QUFBd0JDLE1BQUksRUFBRSxxQ0FBOUI7QUFBcUVDLE1BQUksRUFBRTtBQUEzRSxDQUpXLEVBS1g7QUFBRUYsVUFBUSxFQUFFLFVBQVo7QUFBd0JDLE1BQUksRUFBRSxjQUE5QjtBQUE4Q0MsTUFBSSxFQUFFO0FBQXBELENBTFcsRUFNWDtBQUFFRixVQUFRLEVBQUUsVUFBWjtBQUF3QkMsTUFBSSxFQUFFLGVBQTlCO0FBQStDQyxNQUFJLEVBQUU7QUFBckQsQ0FOVyxFQU9YO0FBQUVGLFVBQVEsRUFBRSxPQUFaO0FBQXFCQyxNQUFJLEVBQUUsaUNBQTNCO0FBQThEQyxNQUFJLEVBQUU7QUFBcEUsQ0FQVyxFQVFYO0FBQUVGLFVBQVEsRUFBRSxPQUFaO0FBQXFCQyxNQUFJLEVBQUUsNEJBQTNCO0FBQXlEQyxNQUFJLEVBQUU7QUFBL0QsQ0FSVyxDQUFiOztBQVdBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxzQkFDckIsOERBQUMsNkRBQUQ7QUFBUyxNQUFFLEVBQUMsUUFBWjtBQUFBLDRCQUNFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyx3REFBRDtBQUFBLGdCQUNHSixJQUFJLENBQUNLLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSw0QkFDUiw4REFBQyxzREFBRDtBQUFpQixpQkFBTyxFQUFFO0FBQUEsbUJBQU1DLE1BQU0sQ0FBQ0MsUUFBUCxhQUFxQkgsSUFBSSxDQUFDSCxJQUExQixDQUFOO0FBQUEsV0FBMUI7QUFBQSxrQ0FDRSw4REFBQyx5REFBRDtBQUFBLGdDQUFZRyxJQUFJLENBQUNMLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLDBEQUFEO0FBQUEsc0JBQVVLLElBQUksQ0FBQ0o7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUEsV0FBVUssS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURRO0FBQUEsT0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEcUI7QUFBQSxDQUF2Qjs7S0FBTUgsYztBQWNOLCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMwNjFiNGNhZjJiY2FiMWE4NmM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvbkRpdmlkZXIsIFNlY3Rpb25UZXh0LCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEJveCwgQm94ZXMsIEJveE51bSwgQm94VGV4dCB9IGZyb20gJy4vQWNvbXBsaXNobWVudHNTdHlsZXMnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7IHBsYXRmb3JtOiAnQ291cnNlcmEnLCB0ZXh0OiAnRGVlcCBMZWFybmluZyBTcGVjaWFsaXphdGlvbicsIGxpbms6ICdodHRwczovL3d3dy5jb3Vyc2VyYS5vcmcvYWNjb3VudC9hY2NvbXBsaXNobWVudHMvc3BlY2lhbGl6YXRpb24vY2VydGlmaWNhdGUvUEZKV0pVVk1GSldBJywgfSxcclxuICB7IHBsYXRmb3JtOiAnQ291cnNlcmEnLCB0ZXh0OiAnQmxvY2tjaGFpbiBTcGVjaWFsaXphdGlvbicsIGxpbms6ICdodHRwczovL3d3dy5jb3Vyc2VyYS5vcmcvYWNjb3VudC9hY2NvbXBsaXNobWVudHMvc3BlY2lhbGl6YXRpb24vY2VydGlmaWNhdGUvWVY4NDlYQ1lWU1lMJywgfSxcclxuICB7IHBsYXRmb3JtOiAnQ291cnNlcmEnLCB0ZXh0OiAnVGVuc29yZmxvdyBJbiBQcmFjdGljZSAnLCBsaW5rOiAnaHR0cHM6Ly93d3cuY291cnNlcmEub3JnL2FjY291bnQvYWNjb21wbGlzaG1lbnRzL3NwZWNpYWxpemF0aW9uL2NlcnRpZmljYXRlL0FBUkFYQUpDRkxDRicsIH0sXHJcbiAgeyBwbGF0Zm9ybTogJ0NvdXJzZXJhJywgdGV4dDogJ0xpbmVhciBBbGdlYnJhIGZvciBNYWNoaW5lIExlYXJuaW5nJywgbGluazogJ2h0dHBzOi8vd3d3LmNvdXJzZXJhLm9yZy9hY2NvdW50L2FjY29tcGxpc2htZW50cy9jZXJ0aWZpY2F0ZS9ZTkM5NThFNE1ENTMnLCB9LFxyXG4gIHsgcGxhdGZvcm06ICdDb3Vyc2VyYScsIHRleHQ6ICdBZ2lsZSBEZXNpZ24nLCBsaW5rOiAnaHR0cHM6Ly93d3cuY291cnNlcmEub3JnL2FjY291bnQvYWNjb21wbGlzaG1lbnRzL2NlcnRpZmljYXRlL1kzRFdGV0paOFlaUycsIH0sXHJcbiAgeyBwbGF0Zm9ybTogJ0NvdXJzZXJhJywgdGV4dDogJ1dlYiBBcHAgRGV2LiAnLCBsaW5rOiAnaHR0cHM6Ly93d3cuY291cnNlcmEub3JnL2FjY291bnQvYWNjb21wbGlzaG1lbnRzL2NlcnRpZmljYXRlL1Y0NEYzREw0NkhKRScsIH0sXHJcbiAgeyBwbGF0Zm9ybTogJ05QVEVMJywgdGV4dDogJ0luZHVzdHJpYWwgSU9UIGFuZCBJbmR1c3RyeSA0LjAnLCBsaW5rOiAnLycsIH0sXHJcbiAgeyBwbGF0Zm9ybTogJ05QVEVMJywgdGV4dDogJ0RhdGEgQW5hbHl0aWNzIHdpdGggUHl0aG9uJywgbGluazogJy8nfVxyXG5dO1xyXG5cclxuY29uc3QgQWNvbXBsaXNobWVudHMgPSAoKSA9PiAoXHJcbiAgPFNlY3Rpb24gaWQ9J3NraWxscyc+XHJcbiAgICA8U2VjdGlvblRpdGxlPkNlcnRpZmljYXRpb25zPC9TZWN0aW9uVGl0bGU+XHJcbiAgICA8Qm94ZXM+XHJcbiAgICAgIHtkYXRhLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcclxuICAgICAgICA8Qm94IGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbiA9IGAke2NhcmQubGlua31gfT5cclxuICAgICAgICAgIDxCb3hOdW0+e2Ake2NhcmQucGxhdGZvcm19YH08L0JveE51bT5cclxuICAgICAgICAgIDxCb3hUZXh0PntjYXJkLnRleHR9PC9Cb3hUZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApKX1cclxuICAgIDwvQm94ZXM+XHJcbiAgPC9TZWN0aW9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNvbXBsaXNobWVudHM7Il0sInNvdXJjZVJvb3QiOiIifQ==