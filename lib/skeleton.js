"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Skeleton;
exports.skeletonStyles = exports.skeletonKeyframes = exports.defaultHighlightColor = exports.defaultBaseColor = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    background-position: -200px 0;\n  }\n  100% {\n    background-position: 120% 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var defaultBaseColor = "#eee";
exports.defaultBaseColor = defaultBaseColor;
var defaultHighlightColor = "#f5f5f5";
exports.defaultHighlightColor = defaultHighlightColor;
var skeletonKeyframes = (0, _core.keyframes)(_templateObject());
exports.skeletonKeyframes = skeletonKeyframes;
var skeletonStyles = /*#__PURE__*/(0, _core.css)("background-color:", defaultBaseColor, ";background-image:linear-gradient( 90deg,", defaultBaseColor, ",", defaultHighlightColor, ",", defaultBaseColor, " );background-size:200px 100%;background-repeat:no-repeat;border-radius:4px;display:inline-block;line-height:1;width:100%;;label:skeletonStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9za2VsZXRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmlDIiwiZmlsZSI6Ii4uL3NyYy9za2VsZXRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRCYXNlQ29sb3IgPSBcIiNlZWVcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRIaWdobGlnaHRDb2xvciA9IFwiI2Y1ZjVmNVwiO1xuXG5leHBvcnQgY29uc3Qgc2tlbGV0b25LZXlmcmFtZXMgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwcHggMDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMjAlIDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBza2VsZXRvblN0eWxlcyA9IGNzc2BcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtkZWZhdWx0QmFzZUNvbG9yfTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIDkwZGVnLFxuICAgICR7ZGVmYXVsdEJhc2VDb2xvcn0sXG4gICAgJHtkZWZhdWx0SGlnaGxpZ2h0Q29sb3J9LFxuICAgICR7ZGVmYXVsdEJhc2VDb2xvcn1cbiAgKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDBweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2tlbGV0b24oe1xuICBjb3VudCxcbiAgZHVyYXRpb24sXG4gIHdpZHRoLFxuICB3cmFwcGVyOiBXcmFwcGVyLFxuICBoZWlnaHQsXG4gIGNpcmNsZSxcbiAgc3R5bGU6IGN1c3RvbVN0eWxlLFxuICBjbGFzc05hbWU6IGN1c3RvbUNsYXNzTmFtZSxcbn0pIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICBsZXQgc3R5bGUgPSB7fTtcblxuICAgIGlmICh3aWR0aCAhPT0gbnVsbCkge1xuICAgICAgc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICB9XG5cbiAgICBpZiAoaGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBzdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKHdpZHRoICE9PSBudWxsICYmIGhlaWdodCAhPT0gbnVsbCAmJiBjaXJjbGUpIHtcbiAgICAgIHN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTAlXCI7XG4gICAgfVxuXG4gICAgbGV0IGNsYXNzTmFtZSA9IFwicmVhY3QtbG9hZGluZy1za2VsZXRvblwiO1xuICAgIGlmIChjdXN0b21DbGFzc05hbWUpIHtcbiAgICAgIGNsYXNzTmFtZSArPSBcIiBcIiArIGN1c3RvbUNsYXNzTmFtZTtcbiAgICB9XG5cbiAgICBlbGVtZW50cy5wdXNoKFxuICAgICAgPHNwYW5cbiAgICAgICAga2V5PXtpfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgJHtza2VsZXRvblN0eWxlc31cbiAgICAgICAgICBhbmltYXRpb246ICR7c2tlbGV0b25LZXlmcmFtZXN9ICR7ZHVyYXRpb259cyBlYXNlLWluLW91dCBpbmZpbml0ZVxuICAgICAgICBgfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIC4uLmN1c3RvbVN0eWxlLFxuICAgICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICAmenduajtcbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c3Bhbj5cbiAgICAgIHtXcmFwcGVyXG4gICAgICAgID8gZWxlbWVudHMubWFwKChlbGVtZW50LCBpKSA9PiAoXG4gICAgICAgICAgICA8V3JhcHBlciBrZXk9e2l9PlxuICAgICAgICAgICAgICB7ZWxlbWVudH1cbiAgICAgICAgICAgICAgJnp3bmo7XG4gICAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgICAgKSlcbiAgICAgICAgOiBlbGVtZW50c31cbiAgICA8L3NwYW4+XG4gICk7XG59XG5cblNrZWxldG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY291bnQ6IDEsXG4gIGR1cmF0aW9uOiAxLjIsXG4gIHdpZHRoOiBudWxsLFxuICB3cmFwcGVyOiBudWxsLFxuICBoZWlnaHQ6IG51bGwsXG4gIGNpcmNsZTogZmFsc2UsXG59O1xuIl19 */"));
exports.skeletonStyles = skeletonStyles;

function Skeleton(_ref) {
  var count = _ref.count,
      duration = _ref.duration,
      width = _ref.width,
      Wrapper = _ref.wrapper,
      height = _ref.height,
      circle = _ref.circle,
      customStyle = _ref.style,
      customClassName = _ref.className;
  var elements = [];

  for (var i = 0; i < count; i++) {
    var style = {};

    if (width !== null) {
      style.width = width;
    }

    if (height !== null) {
      style.height = height;
    }

    if (width !== null && height !== null && circle) {
      style.borderRadius = "50%";
    }

    var className = "react-loading-skeleton";

    if (customClassName) {
      className += " " + customClassName;
    }

    elements.push((0, _core.jsx)("span", {
      key: i,
      className: className,
      css: /*#__PURE__*/(0, _core.css)(skeletonStyles, " animation:", skeletonKeyframes, " ", duration, "s ease-in-out infinite;label:Skeleton;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9za2VsZXRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRWdCIiwiZmlsZSI6Ii4uL3NyYy9za2VsZXRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRCYXNlQ29sb3IgPSBcIiNlZWVcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRIaWdobGlnaHRDb2xvciA9IFwiI2Y1ZjVmNVwiO1xuXG5leHBvcnQgY29uc3Qgc2tlbGV0b25LZXlmcmFtZXMgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwcHggMDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMjAlIDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBza2VsZXRvblN0eWxlcyA9IGNzc2BcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtkZWZhdWx0QmFzZUNvbG9yfTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIDkwZGVnLFxuICAgICR7ZGVmYXVsdEJhc2VDb2xvcn0sXG4gICAgJHtkZWZhdWx0SGlnaGxpZ2h0Q29sb3J9LFxuICAgICR7ZGVmYXVsdEJhc2VDb2xvcn1cbiAgKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDBweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2tlbGV0b24oe1xuICBjb3VudCxcbiAgZHVyYXRpb24sXG4gIHdpZHRoLFxuICB3cmFwcGVyOiBXcmFwcGVyLFxuICBoZWlnaHQsXG4gIGNpcmNsZSxcbiAgc3R5bGU6IGN1c3RvbVN0eWxlLFxuICBjbGFzc05hbWU6IGN1c3RvbUNsYXNzTmFtZSxcbn0pIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICBsZXQgc3R5bGUgPSB7fTtcblxuICAgIGlmICh3aWR0aCAhPT0gbnVsbCkge1xuICAgICAgc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICB9XG5cbiAgICBpZiAoaGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBzdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKHdpZHRoICE9PSBudWxsICYmIGhlaWdodCAhPT0gbnVsbCAmJiBjaXJjbGUpIHtcbiAgICAgIHN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTAlXCI7XG4gICAgfVxuXG4gICAgbGV0IGNsYXNzTmFtZSA9IFwicmVhY3QtbG9hZGluZy1za2VsZXRvblwiO1xuICAgIGlmIChjdXN0b21DbGFzc05hbWUpIHtcbiAgICAgIGNsYXNzTmFtZSArPSBcIiBcIiArIGN1c3RvbUNsYXNzTmFtZTtcbiAgICB9XG5cbiAgICBlbGVtZW50cy5wdXNoKFxuICAgICAgPHNwYW5cbiAgICAgICAga2V5PXtpfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgJHtza2VsZXRvblN0eWxlc31cbiAgICAgICAgICBhbmltYXRpb246ICR7c2tlbGV0b25LZXlmcmFtZXN9ICR7ZHVyYXRpb259cyBlYXNlLWluLW91dCBpbmZpbml0ZVxuICAgICAgICBgfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIC4uLmN1c3RvbVN0eWxlLFxuICAgICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICAmenduajtcbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c3Bhbj5cbiAgICAgIHtXcmFwcGVyXG4gICAgICAgID8gZWxlbWVudHMubWFwKChlbGVtZW50LCBpKSA9PiAoXG4gICAgICAgICAgICA8V3JhcHBlciBrZXk9e2l9PlxuICAgICAgICAgICAgICB7ZWxlbWVudH1cbiAgICAgICAgICAgICAgJnp3bmo7XG4gICAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgICAgKSlcbiAgICAgICAgOiBlbGVtZW50c31cbiAgICA8L3NwYW4+XG4gICk7XG59XG5cblNrZWxldG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY291bnQ6IDEsXG4gIGR1cmF0aW9uOiAxLjIsXG4gIHdpZHRoOiBudWxsLFxuICB3cmFwcGVyOiBudWxsLFxuICBoZWlnaHQ6IG51bGwsXG4gIGNpcmNsZTogZmFsc2UsXG59O1xuIl19 */")),
      style: _objectSpread(_objectSpread({}, customStyle), style)
    }, "\u200C"));
  }

  return (0, _core.jsx)("span", null, Wrapper ? elements.map(function (element, i) {
    return (0, _core.jsx)(Wrapper, {
      key: i
    }, element, "\u200C");
  }) : elements);
}

Skeleton.defaultProps = {
  count: 1,
  duration: 1.2,
  width: null,
  wrapper: null,
  height: null,
  circle: false
};