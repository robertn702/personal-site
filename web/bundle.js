webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _baconjs = __webpack_require__(214);

	var _baconjs2 = _interopRequireDefault(_baconjs);

	var _radium = __webpack_require__(202);

	var _radium2 = _interopRequireDefault(_radium);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(158);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _routes = __webpack_require__(197);

	var _routes2 = _interopRequireDefault(_routes);

	var Route = _reactRouter2['default'].Route;
	var RouteHandler = _reactRouter2['default'].RouteHandler;
	var HistoryLocation = _reactRouter2['default'].HistoryLocation;

	_reactRouter2['default'].run(_routes2['default'], HistoryLocation, function (App) {
	  _react2['default'].render(_react2['default'].createElement(App, null), document.body);
	});

/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactRouter = __webpack_require__(158);

	var _componentsMainpageMainpage = __webpack_require__(198);

	var _componentsMainpageMainpage2 = _interopRequireDefault(_componentsMainpageMainpage);

	module.exports = React.createElement(_reactRouter.Route, { handler: _componentsMainpageMainpage2['default'] });

/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _reactRouter = __webpack_require__(158);

	/**
	 * DECRIPTION
	 *
	 * @prop {object}  - PROP_DESCRIPTION
	 */

	var MainPage = (function (_React$Component) {
	  _inherits(MainPage, _React$Component);

	  function MainPage(props) {
	    _classCallCheck(this, MainPage);

	    _get(Object.getPrototypeOf(MainPage.prototype), 'constructor', this).call(this, props);
	    // this.state = {  };
	  }

	  _createClass(MainPage, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h1',
	          null,
	          'App'
	        ),
	        React.createElement(_reactRouter.RouteHandler, null)
	      );
	    }
	  }]);

	  return MainPage;
	})(React.Component);

	MainPage.displayName = 'MainPage';

	module.exports = MainPage;

/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Enhancer = __webpack_require__(203);

	module.exports = function (ComposedComponent) {
	  return Enhancer(ComposedComponent);
	};
	module.exports.Style = __webpack_require__(211);
	module.exports.getState = __webpack_require__(208);
	module.exports.keyframes = __webpack_require__(213);
	module.exports.Config = __webpack_require__(205);

/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/* @flow */

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var resolveStyles = __webpack_require__(204);

	var enhanceWithRadium = function enhanceWithRadium(ComposedComponent) {
	  var displayName = ComposedComponent.displayName || ComposedComponent.name || 'Component';

	  var RadiumEnhancer = (function (_ComposedComponent) {
	    function RadiumEnhancer() {
	      _classCallCheck(this, RadiumEnhancer);

	      _get(Object.getPrototypeOf(RadiumEnhancer.prototype), 'constructor', this).apply(this, arguments);

	      this.state = this.state || {};
	      this.state._radiumStyleState = {};
	    }

	    _inherits(RadiumEnhancer, _ComposedComponent);

	    _createClass(RadiumEnhancer, [{
	      key: 'render',
	      value: function render() {
	        var renderedElement = _get(Object.getPrototypeOf(RadiumEnhancer.prototype), 'render', this).call(this);
	        return resolveStyles(this, renderedElement);
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        if (_get(Object.getPrototypeOf(RadiumEnhancer.prototype), 'componentWillUnmount', this)) {
	          _get(Object.getPrototypeOf(RadiumEnhancer.prototype), 'componentWillUnmount', this).call(this);
	        }

	        if (this._radiumMouseUpListener) {
	          this._radiumMouseUpListener.remove();
	        }

	        if (this._radiumMediaQueryListenersByQuery) {
	          Object.keys(this._radiumMediaQueryListenersByQuery).forEach(function (query) {
	            this._radiumMediaQueryListenersByQuery[query].remove();
	          }, this);
	        }
	      }
	    }]);

	    return RadiumEnhancer;
	  })(ComposedComponent);

	  // Class inheritance uses Object.create and because of __proto__ issues
	  // with IE <10 any static properties of the superclass aren't inherited and
	  // so need to be manually populated
	  // See http://babeljs.io/docs/advanced/caveats/#classes-10-and-below-
	  var staticKeys = ['defaultProps', 'propTypes', 'contextTypes', 'childContextTypes'];

	  staticKeys.forEach(function (key) {
	    if (ComposedComponent.hasOwnProperty(key)) {
	      RadiumEnhancer[key] = ComposedComponent[key];
	    }
	  });

	  if (process.env.NODE_ENV !== 'production') {
	    // This fixes React Hot Loader by exposing the original components top level
	    // prototype methods on the Radium enhanced prototype as discussed in #219.
	    Object.keys(ComposedComponent.prototype).forEach(function (key) {
	      if (!RadiumEnhancer.prototype.hasOwnProperty(key)) {
	        RadiumEnhancer.prototype[key] = ComposedComponent.prototype[key];
	      }
	    });
	  }

	  RadiumEnhancer.displayName = 'Radium(' + displayName + ')';

	  return RadiumEnhancer;
	};

	module.exports = enhanceWithRadium;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/* @flow */

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var MouseUpListener = __webpack_require__(207);
	var getState = __webpack_require__(208);
	var Prefixer = __webpack_require__(209);
	var Config = __webpack_require__(205);

	var ExecutionEnvironment = __webpack_require__(206);
	var React = __webpack_require__(1);

	// babel-eslint 3.1.7 fails here for some reason, error:
	//   0:0  error  Cannot call method 'isSequenceExpression' of undefined
	//
	// declare class RadiumComponent extends ReactComponent {
	//   _lastMouseDown: number,
	//   _radiumMediaQueryListenersByQuery: Object<string, {remove: () => void}>,
	//   _radiumMouseUpListener: {remove: () => void},
	// }

	var mediaQueryListByQueryString = {};

	var _isSpecialKey = function _isSpecialKey(key) {
	  return key[0] === ':' || key[0] === '@';
	};

	var _getStyleState = function _getStyleState(component, key, value) {
	  return getState(component.state, key, value);
	};

	var _setStyleState = function _setStyleState(component, key, newState) {
	  var existing = component._lastRadiumState || component.state && component.state._radiumStyleState || {};

	  var state = { _radiumStyleState: _extends({}, existing) };
	  state._radiumStyleState[key] = _extends({}, state._radiumStyleState[key], newState);

	  component._lastRadiumState = state._radiumStyleState;
	  component.setState(state);
	};

	// Merge style objects. Special casing for props starting with ';'; the values
	// should be objects, and are merged with others of the same name (instead of
	// overwriting).
	var _mergeStyles = function _mergeStyles(styles) {
	  var result = {};

	  styles.forEach(function (style) {
	    if (!style || typeof style !== 'object' || Array.isArray(style)) {
	      return;
	    }

	    Object.keys(style).forEach(function (key) {
	      if (_isSpecialKey(key) && result[key]) {
	        result[key] = _mergeStyles([result[key], style[key]]);
	      } else {
	        result[key] = style[key];
	      }
	    });
	  });

	  return result;
	};

	var _mouseUp = function _mouseUp(component) {
	  Object.keys(component.state._radiumStyleState).forEach(function (key) {
	    if (_getStyleState(component, key, ':active')) {
	      _setStyleState(component, key, { ':active': false });
	    }
	  });
	};

	var _onMediaQueryChange = function _onMediaQueryChange(component, query, mediaQueryList) {
	  var state = {};
	  state[query] = mediaQueryList.matches;
	  _setStyleState(component, '_all', state);
	};

	var _resolveMediaQueryStyles = function _resolveMediaQueryStyles(component, style) {
	  if (!Config.canMatchMedia()) {
	    return style;
	  }

	  Object.keys(style).filter(function (name) {
	    return name[0] === '@';
	  }).map(function (query) {
	    var mediaQueryStyles = style[query];
	    query = query.replace('@media ', '');

	    // Create a global MediaQueryList if one doesn't already exist
	    var mql = mediaQueryListByQueryString[query];
	    if (!mql) {
	      mediaQueryListByQueryString[query] = mql = Config.matchMedia(query);
	    }

	    // Keep track of which keys already have listeners
	    if (!component._radiumMediaQueryListenersByQuery) {
	      component._radiumMediaQueryListenersByQuery = {};
	    }

	    if (!component._radiumMediaQueryListenersByQuery[query]) {
	      var listener = _onMediaQueryChange.bind(null, component, query);
	      mql.addListener(listener);
	      component._radiumMediaQueryListenersByQuery[query] = {
	        remove: function remove() {
	          mql.removeListener(listener);
	        }
	      };
	    }

	    // Apply media query states
	    if (mql.matches) {
	      style = _mergeStyles([style, mediaQueryStyles]);
	    }
	  });

	  return style;
	};

	//
	// The nucleus of Radium. resolveStyles is called on the rendered elements
	// before they are returned in render. It iterates over the elements and
	// children, rewriting props to add event handlers required to capture user
	// interactions (e.g. mouse over). It also replaces the style prop because it
	// adds in the various interaction styles (e.g. :hover).
	//
	var resolveStyles = function resolveStyles(component, // ReactComponent, flow+eslint complaining
	renderedElement, // ReactElement
	existingKeyMap) {
	  // ReactElement
	  existingKeyMap = existingKeyMap || {};

	  if (!renderedElement) {
	    return renderedElement;
	  }

	  // Recurse over children first in case we bail early. Note that children only
	  // include those rendered in `this` component. Child nodes in other components
	  // will not be here, so each component needs to use Radium.
	  var newChildren = null;
	  var oldChildren = renderedElement.props.children;
	  if (oldChildren) {
	    var childrenType = typeof oldChildren;
	    if (childrenType === 'string' || childrenType === 'number') {
	      // Don't do anything with a single primitive child
	      newChildren = oldChildren;
	    } else if (React.Children.count(oldChildren) === 1 && oldChildren.type) {
	      // If a React Element is an only child, don't wrap it in an array for
	      // React.Children.map() for React.Children.only() compatibility.
	      var onlyChild = React.Children.only(oldChildren);
	      newChildren = resolveStyles(component, onlyChild, existingKeyMap);
	    } else {
	      newChildren = React.Children.map(oldChildren, function (child) {
	        if (React.isValidElement(child)) {
	          return resolveStyles(component, child, existingKeyMap);
	        }

	        return child;
	      });
	    }
	  }

	  // Bail early if element is not a simple ReactDOMElement.
	  if (!React.isValidElement(renderedElement) || typeof renderedElement.type !== 'string') {
	    if (oldChildren === newChildren) {
	      return renderedElement;
	    }

	    return React.cloneElement(renderedElement, renderedElement.props, newChildren);
	  }

	  var props = renderedElement.props;
	  var style = props.style;
	  var newProps = {};

	  // Convenient syntax for multiple styles: `style={[style1, style2, etc]}`
	  // Ignores non-objects, so you can do `this.state.isCool && styles.cool`.
	  if (Array.isArray(style)) {
	    style = _mergeStyles(style);
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    // Warn if you use longhand and shorthand properties in the same style
	    // object.
	    // https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties

	    var shorthandPropertyExpansions = {
	      'background': ['backgroundAttachment', 'backgroundBlendMode', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPosition', 'backgroundPositionX', 'backgroundPositionY', 'backgroundRepeat', 'backgroundRepeatX', 'backgroundRepeatY', 'backgroundSize'],
	      'border': ['borderBottom', 'borderBottomColor', 'borderBottomStyle', 'borderBottomWidth', 'borderColor', 'borderLeft', 'borderLeftColor', 'borderLeftStyle', 'borderLeftWidth', 'borderRight', 'borderRightColor', 'borderRightStyle', 'borderRightWidth', 'borderStyle', 'borderTop', 'borderTopColor', 'borderTopStyle', 'borderTopWidth', 'borderWidth'],
	      'borderImage': ['borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageWidth'],
	      'borderRadius': ['borderBottomLeftRadius', 'borderBottomRightRadius', 'borderTopLeftRadius', 'borderTopRightRadius'],
	      'font': ['fontFamily', 'fontKerning', 'fontSize', 'fontStretch', 'fontStyle', 'fontVariant', 'fontVariantLigatures', 'fontWeight', 'lineHeight'],
	      'listStyle': ['listStyleImage', 'listStylePosition', 'listStyleType'],
	      'margin': ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
	      'padding': ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
	      'transform': ['transformOrigin', 'transformStyle'],
	      'transition': ['transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction']
	    };

	    var checkProps = function checkProps(s) {
	      if (typeof s !== 'object') {
	        return;
	      }

	      var styleKeys = Object.keys(s);
	      styleKeys.forEach(function (styleKey) {
	        if (shorthandPropertyExpansions[styleKey] && shorthandPropertyExpansions[styleKey].some(function (sp) {
	          return styleKeys.indexOf(sp) !== -1;
	        })) {
	          /* eslint-disable no-console */
	          console.warn('Radium: property "' + styleKey + '" in style object', style, ': do not mix longhand and ' + 'shorthand properties in the same style object. Check the render ' + 'method of ' + component.constructor.displayName + '.', 'See https://github.com/FormidableLabs/radium/issues/95 for more ' + 'information.');
	          /* eslint-enable no-console */
	        }
	      });

	      styleKeys.forEach(function (k) {
	        return checkProps(s[k]);
	      });
	    };
	    checkProps(style);
	  }

	  // Bail early if no interactive styles.
	  if (!style || !Object.keys(style).some(_isSpecialKey)) {
	    if (style) {
	      // Still perform vendor prefixing, though.
	      newProps.style = Prefixer.getPrefixedStyle(style);
	      return React.cloneElement(renderedElement, newProps, newChildren);
	    } else if (newChildren) {
	      return React.cloneElement(renderedElement, {}, newChildren);
	    }

	    return renderedElement;
	  }

	  // We need a unique key to correlate state changes due to user interaction
	  // with the rendered element, so we know to apply the proper interactive
	  // styles.
	  var originalKey = renderedElement.ref || renderedElement.key;
	  var key = originalKey || 'main';

	  if (existingKeyMap[key]) {
	    throw new Error('Radium requires each element with interactive styles to have a unique ' + 'key, set using either the ref or key prop. ' + (originalKey ? 'Key "' + originalKey + '" is a duplicate.' : 'Multiple elements have no key specified.'));
	  }

	  existingKeyMap[key] = true;

	  // Media queries can contain pseudo styles, like :hover
	  style = _resolveMediaQueryStyles(component, style);

	  var newStyle = {};
	  Object.keys(style).forEach(function (styleKey) {
	    if (!_isSpecialKey(styleKey)) {
	      newStyle[styleKey] = style[styleKey];
	    }
	  });

	  // Only add handlers if necessary
	  if (style[':hover'] || style[':active']) {
	    // Always call the existing handler if one is already defined.
	    // This code, and the very similar ones below, could be abstracted a bit
	    // more, but it hurts readability IMO.
	    var existingOnMouseEnter = props.onMouseEnter;
	    newProps.onMouseEnter = function (e) {
	      existingOnMouseEnter && existingOnMouseEnter(e);
	      _setStyleState(component, key, { ':hover': true });
	    };

	    var existingOnMouseLeave = props.onMouseLeave;
	    newProps.onMouseLeave = function (e) {
	      existingOnMouseLeave && existingOnMouseLeave(e);
	      _setStyleState(component, key, { ':hover': false });
	    };
	  }

	  if (style[':active']) {
	    var existingOnMouseDown = props.onMouseDown;
	    newProps.onMouseDown = function (e) {
	      existingOnMouseDown && existingOnMouseDown(e);
	      component._lastMouseDown = Date.now();
	      _setStyleState(component, key, { ':active': true });
	    };
	  }

	  if (style[':focus']) {
	    var existingOnFocus = props.onFocus;
	    newProps.onFocus = function (e) {
	      existingOnFocus && existingOnFocus(e);
	      _setStyleState(component, key, { ':focus': true });
	    };

	    var existingOnBlur = props.onBlur;
	    newProps.onBlur = function (e) {
	      existingOnBlur && existingOnBlur(e);
	      _setStyleState(component, key, { ':focus': false });
	    };
	  }

	  // Merge the styles in the order they were defined
	  var interactionStyles = Object.keys(style).filter(function (name) {
	    return name === ':active' && _getStyleState(component, key, ':active') || name === ':hover' && _getStyleState(component, key, ':hover') || name === ':focus' && _getStyleState(component, key, ':focus');
	  }).map(function (name) {
	    return style[name];
	  });

	  if (interactionStyles.length) {
	    newStyle = _mergeStyles([newStyle].concat(interactionStyles));
	  }

	  if (style[':active'] && !component._radiumMouseUpListener && ExecutionEnvironment.canUseEventListeners) {
	    component._radiumMouseUpListener = MouseUpListener.subscribe(_mouseUp.bind(null, component));
	  }

	  newProps.style = Prefixer.getPrefixedStyle(newStyle);

	  return React.cloneElement(renderedElement, newProps, newChildren);
	};

	// Exposing methods for tests is ugly, but the alternative, re-requiring the
	// module each time, is too slow
	resolveStyles.__clearStateForTests = function () {
	  mediaQueryListByQueryString = {};
	};

	module.exports = resolveStyles;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	/* @flow */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(206);

	var _matchMediaFunction = ExecutionEnvironment.canUseDOM && window && window.matchMedia && function (mediaQueryString) {
	  return window.matchMedia(mediaQueryString);
	};

	module.exports = {
	  canMatchMedia: function canMatchMedia() {
	    return typeof _matchMediaFunction === 'function';
	  },

	  matchMedia: function matchMedia(query) {
	    return _matchMediaFunction(query);
	  },

	  setMatchMedia: function setMatchMedia(nextMatchMediaFunction) {
	    _matchMediaFunction = nextMatchMediaFunction;
	  }
	};

/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/

	(function () {
		'use strict';

		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);

		var ExecutionEnvironment = {

			canUseDOM: canUseDOM,

			canUseWorkers: typeof Worker !== 'undefined',

			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),

			canUseViewport: canUseDOM && !!window.screen

		};

		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}

	}());


/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	/* @flow */

	'use strict';

	var _callbacks = [];
	var _mouseUpListenerIsActive = false;

	var _handleMouseUp = function _handleMouseUp(ev) {
	  _callbacks.forEach(function (callback) {
	    callback(ev);
	  });
	};

	var subscribe = function subscribe(callback) {
	  if (_callbacks.indexOf(callback) === -1) {
	    _callbacks.push(callback);
	  }

	  if (!_mouseUpListenerIsActive) {
	    window.addEventListener('mouseup', _handleMouseUp);
	    _mouseUpListenerIsActive = true;
	  }

	  return {
	    remove: function remove() {
	      var index = _callbacks.indexOf(callback);
	      _callbacks.splice(index, 1);

	      if (_callbacks.length === 0 && _mouseUpListenerIsActive) {
	        window.removeEventListener('mouseup', _handleMouseUp);
	        _mouseUpListenerIsActive = false;
	      }
	    }
	  };
	};

	module.exports = {
	  subscribe: subscribe
	};

/***/ },

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	/* @flow */

	'use strict';

	var VALID_KEYS = [':active', ':focus', ':hover'];

	var getState = function getState(state, elementKey, value) {
	  elementKey = elementKey || 'main';

	  if (VALID_KEYS.indexOf(value) === -1) {
	    throw new Error('Radium.getState invalid value param: `' + value + '`');
	  }

	  return !!(state && state._radiumStyleState && state._radiumStyleState[elementKey] && state._radiumStyleState[elementKey][value]) || false;
	};

	module.exports = getState;

/***/ },

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Based on https://github.com/jsstyles/css-vendor, but without having to
	 * convert between different cases all the time.
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(206);
	var arrayFind = __webpack_require__(210);

	var infoByCssPrefix = {
	  '-moz-': {
	    cssPrefix: '-moz-',
	    jsPrefix: 'Moz',
	    alternativeProperties: {
	      // OLD - Firefox 19-
	      flex: [{ css: '-moz-box-flex', js: 'MozBoxFlex' }],
	      order: [{ css: '-moz-box-ordinal-group', js: 'MozBoxOrdinalGroup' }]
	    },
	    alternativeValues: {
	      display: {
	        // OLD - Firefox 19-
	        flex: ['-moz-box']
	      }
	    }
	  },
	  '-ms-': {
	    cssPrefix: '-ms-',
	    jsPrefix: 'ms',
	    alternativeValues: {
	      display: {
	        // TWEENER - IE 10
	        flex: ['-ms-flexbox'],
	        order: ['-ms-flex-order']
	      }
	    }
	  },
	  '-o-': {
	    cssPrefix: '-o-',
	    jsPrefix: 'O'
	  },
	  '-webkit-': {
	    cssPrefix: '-webkit-',
	    jsPrefix: 'Webkit',
	    alternativeProperties: {
	      // OLD - iOS 6-, Safari 3.1-6
	      flex: [{ css: '-webkit-box-flex', js: 'WebkitBoxFlex' }],
	      order: [{ css: '-webkit-box-ordinal-group', js: 'WebkitBoxOrdinalGroup' }]
	    },
	    alternativeValues: {
	      display: {
	        flex: ['-webkit-box'] // OLD - iOS 6-, Safari 3.1-6
	      }
	    }
	  }
	};

	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 * Copied from React core June 22, 2015.
	 * https://github.com/facebook/react/blob/
	 * ba81b60ad8e93b747be42a03b797065932c49c96/
	 * src/renderers/dom/shared/CSSProperty.js
	 */
	var isUnitlessNumber = {
	  boxFlex: true,
	  boxFlexGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,

	  // SVG-related properties
	  fillOpacity: true,
	  strokeDashoffset: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};

	var domStyle = {};
	var prefixedPropertyCache = {};
	var prefixedValueCache = {};
	var prefixInfo = {
	  cssPrefix: '',
	  jsPrefix: ''
	};

	if (ExecutionEnvironment.canUseDOM) {
	  domStyle = document.createElement('p').style;

	  // Based on http://davidwalsh.name/vendor-prefix
	  var windowStyles = window.getComputedStyle(document.documentElement, '');
	  var prefixMatch = Array.prototype.slice.call(windowStyles).join('').match(/-(moz|webkit|ms|o)-/);
	  var cssVendorPrefix = prefixMatch && prefixMatch[0];

	  prefixInfo = infoByCssPrefix[cssVendorPrefix] || prefixInfo;
	}

	var _camelCaseRegex = /([a-z])?([A-Z])/g;
	var _camelCaseReplacer = function _camelCaseReplacer(match, p1, p2) {
	  return p1 + '-' + p2.toLowerCase();
	};
	var _camelCaseToDashCase = function _camelCaseToDashCase(s) {
	  return s.replace(_camelCaseRegex, _camelCaseReplacer);
	};

	var getPrefixedPropertyName = function getPrefixedPropertyName(property) {
	  if (prefixedPropertyCache.hasOwnProperty(property)) {
	    return prefixedPropertyCache[property];
	  }

	  var unprefixed = {
	    css: _camelCaseToDashCase(property),
	    js: property,
	    isDefaultForServer: true
	  };

	  // Try the prefixed version first. Chrome in particular has the `filter` and
	  // `webkitFilter` properties availalbe on the style object, but only the
	  // prefixed version actually works.
	  var possiblePropertyNames = [
	  // Prefixed
	  {
	    css: prefixInfo.cssPrefix + _camelCaseToDashCase(property),
	    js: prefixInfo.jsPrefix + property[0].toUpperCase() + property.slice(1)
	  }, unprefixed];

	  // Alternative property names
	  if (prefixInfo.alternativeProperties && prefixInfo.alternativeProperties[property]) {
	    possiblePropertyNames = possiblePropertyNames.concat(prefixInfo.alternativeProperties[property]);
	  }

	  var workingProperty = arrayFind(possiblePropertyNames, function (possiblePropertyName) {
	    if (possiblePropertyName.js in domStyle) {
	      return possiblePropertyName;
	    }
	  }) || false;

	  return prefixedPropertyCache[property] = workingProperty;
	};

	// React is planning to deprecate adding px automatically
	// (https://github.com/facebook/react/issues/1873), and if they do, this
	// should change to a warning or be removed in favor of React's warning.
	// Same goes for below.
	var _addPixelSuffixToValueIfNeeded = function _addPixelSuffixToValueIfNeeded(originalProperty, value) {
	  if (value !== 0 && !isNaN(value) && !isUnitlessNumber[originalProperty]) {
	    return value + 'px';
	  }
	  return value;
	};

	var _getPrefixedValue = function _getPrefixedValue(property, value, originalProperty) {
	  if (!Array.isArray(value)) {
	    // don't test numbers (pure or stringy), but do add 'px' prefix if needed
	    if (!isNaN(value)) {
	      return _addPixelSuffixToValueIfNeeded(originalProperty, value);
	    }

	    if (typeof value !== 'string') {
	      if (value !== null && value !== undefined) {
	        value = value.toString();
	      } else {
	        /* eslint-disable no-console */
	        if (console && console.warn) {
	          console.warn('CSS value is "' + value + '" for property "' + property + '"');
	        }
	        return value;
	      }
	    }

	    // don't test numbers with units (e.g. 10em)
	    if (!isNaN(parseInt(value, 10))) {
	      return value;
	    }
	  }

	  var cacheKey = Array.isArray(value) ? value.join(' || ') : property + value;

	  if (prefixedValueCache.hasOwnProperty(cacheKey)) {
	    return prefixedValueCache[cacheKey];
	  }

	  var possibleValues;
	  if (Array.isArray(value)) {
	    // Add px for the same values React would, otherwise the testing below will
	    // fail and it will try to fallback.
	    possibleValues = value.map(function (v) {
	      return _addPixelSuffixToValueIfNeeded(originalProperty, v);
	    });

	    // Add prefixed versions
	    possibleValues = possibleValues.concat(value.filter(function (v) {
	      return !isNaN(v);
	    }) // Don't prefix numbers
	    .map(function (v) {
	      return prefixInfo.cssPrefix + v;
	    }));
	  } else {
	    possibleValues = [
	    // Unprefixed
	    value,
	    // Prefixed
	    prefixInfo.cssPrefix + value];
	  }

	  // Alternative values
	  if (prefixInfo.alternativeValues && prefixInfo.alternativeValues[originalProperty] && prefixInfo.alternativeValues[originalProperty][value]) {
	    possibleValues = possibleValues.concat(prefixInfo.alternativeValues[originalProperty][value]);
	  }

	  // Test possible value in order
	  var workingValue = arrayFind(possibleValues, function (possibleValue) {
	    domStyle[property] = '';
	    domStyle[property] = possibleValue;

	    // Note that we just make sure it is not an empty string. Browsers will
	    // sometimes rewrite values, but still accept them. They will set the value
	    // to an empty string if not supported.
	    // E.g. for border, "solid 1px black" becomes "1px solid black"
	    //      but "foobar" becomes "", since it is not supported.
	    return !!domStyle[property];
	  });

	  if (workingValue) {
	    prefixedValueCache[cacheKey] = workingValue;
	  } else {
	    // Unsupported, assume unprefixed works, but warn
	    prefixedValueCache[cacheKey] = value;

	    /* eslint-disable no-console */
	    if (console && console.warn) {
	      console.warn('Unsupported CSS value "' + value + '" for property "' + property + '"');
	    }
	    /* eslint-enable no-console */
	  }

	  return prefixedValueCache[cacheKey];
	};

	// Returns a new style object with vendor prefixes added to property names
	// and values.
	var getPrefixedStyle = function getPrefixedStyle(style, mode /* 'css' or 'js' */) {
	  mode = mode || 'js';

	  if (!ExecutionEnvironment.canUseDOM) {
	    return Object.keys(style).reduce(function (newStyle, key) {
	      var value = style[key];
	      var newKey = mode === 'css' ? _camelCaseToDashCase(key) : key;
	      var newValue = Array.isArray(value) ? value[0] : value;
	      newStyle[newKey] = newValue;
	      return newStyle;
	    }, {});
	  }

	  var prefixedStyle = {};
	  Object.keys(style).forEach(function (property) {
	    var value = style[property];

	    var newProperty = getPrefixedPropertyName(property);
	    if (newProperty === false) {
	      // Ignore unsupported properties
	      /* eslint-disable no-console */
	      if (console && console.warn) {
	        console.warn('Unsupported CSS property "' + property + '"');
	      }
	      /* eslint-enable no-console */
	      return;
	    }

	    var newValue = _getPrefixedValue(newProperty.js, value, property);

	    prefixedStyle[newProperty[mode]] = newValue;
	  });
	  return prefixedStyle;
	};

	module.exports = {
	  getPrefixedPropertyName: getPrefixedPropertyName,
	  getPrefixedStyle: getPrefixedStyle,
	  cssPrefix: prefixInfo.cssPrefix,
	  jsPrefix: prefixInfo.jsPrefix
	};

/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function find(array, predicate, context) {
	  if (typeof Array.prototype.find === 'function') {
	    return array.find(predicate, context);
	  }

	  context = context || this;
	  var length = array.length;
	  var i;

	  if (typeof predicate !== 'function') {
	    throw new TypeError(predicate + ' is not a function');
	  }

	  for (i = 0; i < length; i++) {
	    if (predicate.call(context, array[i], i, array)) {
	      return array[i];
	    }
	  }
	}

	module.exports = find;


/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var createMarkupForStyles = __webpack_require__(212);
	var Prefixer = __webpack_require__(209);

	var React = __webpack_require__(1);

	var buildCssString = function buildCssString(selector, rules) {
	  if (!selector || !rules) {
	    return;
	  }

	  var prefixedRules = Prefixer.getPrefixedStyle(rules, 'css');
	  var serializedRules = createMarkupForStyles(prefixedRules);

	  return selector + '{' + serializedRules + '}';
	};

	var Style = React.createClass({
	  displayName: 'Style',

	  propTypes: {
	    rules: React.PropTypes.object,
	    scopeSelector: React.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      scopeSelector: ''
	    };
	  },

	  _buildStyles: function _buildStyles(styles) {
	    var _this = this;

	    return Object.keys(styles).reduce(function (accumulator, selector) {
	      var rules = styles[selector];

	      if (selector === 'mediaQueries') {
	        accumulator += _this._buildMediaQueryString(rules);
	      } else {
	        var completeSelector = (_this.props.scopeSelector ? _this.props.scopeSelector + ' ' : '') + selector;
	        accumulator += buildCssString(completeSelector, rules);
	      }

	      return accumulator;
	    }, '');
	  },

	  _buildMediaQueryString: function _buildMediaQueryString(mediaQueryObj) {
	    var _this2 = this;

	    var contextMediaQueries = this._getContextMediaQueries();
	    var mediaQueryString = '';

	    Object.keys(mediaQueryObj).forEach(function (query) {
	      var completeQuery = contextMediaQueries[query] ? contextMediaQueries[query] : query;
	      mediaQueryString += '@media ' + completeQuery + '{' + _this2._buildStyles(mediaQueryObj[query]) + '}';
	    });

	    return mediaQueryString;
	  },

	  _getContextMediaQueries: function _getContextMediaQueries() {
	    var contextMediaQueries = {};
	    if (this.context && this.context.mediaQueries) {
	      Object.keys(this.context.mediaQueries).forEach((function (query) {
	        contextMediaQueries[query] = this.context.mediaQueries[query].media;
	      }).bind(this));
	    }

	    return contextMediaQueries;
	  },

	  render: function render() {
	    if (!this.props.rules) {
	      return null;
	    }

	    var styles = this._buildStyles(this.props.rules);

	    return React.createElement('style', { dangerouslySetInnerHTML: { __html: styles } });
	  }
	});

	module.exports = Style;

/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	/* @flow */

	'use strict';

	var createMarkupForStyles = function createMarkupForStyles(style, spaces) {
	  spaces = spaces || '';
	  return Object.keys(style).map(function (property) {
	    return spaces + property + ': ' + style[property] + ';';
	  }).join('\n');
	};

	module.exports = createMarkupForStyles;

/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	/* @flow */

	'use strict';

	var createMarkupForStyles = __webpack_require__(212);
	var Prefixer = __webpack_require__(209);

	var ExecutionEnvironment = __webpack_require__(206);

	var isAnimationSupported = ExecutionEnvironment.canUseDOM && Prefixer.getPrefixedPropertyName('animation') !== false;

	var animationIndex = 1;
	var animationStyleSheet = null;
	var keyframesPrefixed = null;

	if (isAnimationSupported) {
	  animationStyleSheet = document.createElement('style');
	  document.head.appendChild(animationStyleSheet);

	  // Test if prefix needed for keyframes (copied from PrefixFree)
	  keyframesPrefixed = 'keyframes';
	  animationStyleSheet.textContent = '@keyframes {}';
	  if (!animationStyleSheet.sheet.cssRules.length) {
	    keyframesPrefixed = Prefixer.cssPrefix + 'keyframes';
	  }
	}

	// Simple animation helper that injects CSS into a style object containing the
	// keyframes, and returns a string with the generated animation name.
	var keyframes = function keyframes(keyframeRules) {
	  var name = 'Animation' + animationIndex;
	  animationIndex += 1;

	  if (!isAnimationSupported) {
	    return name;
	  }

	  var rule = '@' + keyframesPrefixed + ' ' + name + ' {\n' + Object.keys(keyframeRules).map(function (percentage) {
	    var props = keyframeRules[percentage];
	    var prefixedProps = Prefixer.getPrefixedStyle(props, 'css');
	    var serializedProps = createMarkupForStyles(prefixedProps, '  ');
	    return '  ' + percentage + ' {\n  ' + serializedProps + '\n  }';
	  }).join('\n') + '\n}\n';

	  // for flow
	  /* istanbul ignore next */
	  if (!animationStyleSheet) {
	    throw new Error('keyframes not initialized properly');
	  }

	  animationStyleSheet.sheet.insertRule(rule, animationStyleSheet.sheet.cssRules.length);
	  return name;
	};

	module.exports = keyframes;

/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, module) {(function() {
	  var Bacon, BufferingSource, Bus, CompositeUnsubscribe, ConsumingSource, Desc, Dispatcher, End, Error, Event, EventStream, Exception, Initial, Next, None, Observable, Property, PropertyDispatcher, Some, Source, UpdateBarrier, _, addPropertyInitValueToStream, assert, assertArray, assertEventStream, assertFunction, assertNoArguments, assertObservable, assertObservableIsProperty, assertString, cloneArray, constantToFunction, containsDuplicateDeps, convertArgsToFunction, describe, endEvent, eventIdCounter, eventMethods, findDeps, findHandlerMethods, flatMap_, former, idCounter, initialEvent, isArray, isFieldKey, isObservable, latter, liftCallback, makeFunction, makeFunctionArgs, makeFunction_, makeObservable, makeSpawner, nextEvent, nop, partiallyApplied, recursionDepth, ref, registerObs, spys, toCombinator, toEvent, toFieldExtractor, toFieldKey, toOption, toSimpleExtractor, valueAndEnd, withDesc, withMethodCallSupport,
	    hasProp = {}.hasOwnProperty,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    slice = [].slice,
	    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	  Bacon = {
	    toString: function() {
	      return "Bacon";
	    }
	  };

	  Bacon.version = '0.7.70';

	  Exception = (typeof global !== "undefined" && global !== null ? global : this).Error;

	  nop = function() {};

	  latter = function(_, x) {
	    return x;
	  };

	  former = function(x, _) {
	    return x;
	  };

	  cloneArray = function(xs) {
	    return xs.slice(0);
	  };

	  assert = function(message, condition) {
	    if (!condition) {
	      throw new Exception(message);
	    }
	  };

	  assertObservableIsProperty = function(x) {
	    if (x instanceof Observable && !(x instanceof Property)) {
	      throw new Exception("Observable is not a Property : " + x);
	    }
	  };

	  assertEventStream = function(event) {
	    if (!(event instanceof EventStream)) {
	      throw new Exception("not an EventStream : " + event);
	    }
	  };

	  assertObservable = function(event) {
	    if (!(event instanceof Observable)) {
	      throw new Exception("not an Observable : " + event);
	    }
	  };

	  assertFunction = function(f) {
	    return assert("not a function : " + f, _.isFunction(f));
	  };

	  isArray = function(xs) {
	    return xs instanceof Array;
	  };

	  isObservable = function(x) {
	    return x instanceof Observable;
	  };

	  assertArray = function(xs) {
	    if (!isArray(xs)) {
	      throw new Exception("not an array : " + xs);
	    }
	  };

	  assertNoArguments = function(args) {
	    return assert("no arguments supported", args.length === 0);
	  };

	  assertString = function(x) {
	    if (typeof x !== "string") {
	      throw new Exception("not a string : " + x);
	    }
	  };

	  _ = {
	    indexOf: Array.prototype.indexOf ? function(xs, x) {
	      return xs.indexOf(x);
	    } : function(xs, x) {
	      var i, j, len1, y;
	      for (i = j = 0, len1 = xs.length; j < len1; i = ++j) {
	        y = xs[i];
	        if (x === y) {
	          return i;
	        }
	      }
	      return -1;
	    },
	    indexWhere: function(xs, f) {
	      var i, j, len1, y;
	      for (i = j = 0, len1 = xs.length; j < len1; i = ++j) {
	        y = xs[i];
	        if (f(y)) {
	          return i;
	        }
	      }
	      return -1;
	    },
	    head: function(xs) {
	      return xs[0];
	    },
	    always: function(x) {
	      return function() {
	        return x;
	      };
	    },
	    negate: function(f) {
	      return function(x) {
	        return !f(x);
	      };
	    },
	    empty: function(xs) {
	      return xs.length === 0;
	    },
	    tail: function(xs) {
	      return xs.slice(1, xs.length);
	    },
	    filter: function(f, xs) {
	      var filtered, j, len1, x;
	      filtered = [];
	      for (j = 0, len1 = xs.length; j < len1; j++) {
	        x = xs[j];
	        if (f(x)) {
	          filtered.push(x);
	        }
	      }
	      return filtered;
	    },
	    map: function(f, xs) {
	      var j, len1, results, x;
	      results = [];
	      for (j = 0, len1 = xs.length; j < len1; j++) {
	        x = xs[j];
	        results.push(f(x));
	      }
	      return results;
	    },
	    each: function(xs, f) {
	      var key, value;
	      for (key in xs) {
	        if (!hasProp.call(xs, key)) continue;
	        value = xs[key];
	        f(key, value);
	      }
	      return void 0;
	    },
	    toArray: function(xs) {
	      if (isArray(xs)) {
	        return xs;
	      } else {
	        return [xs];
	      }
	    },
	    contains: function(xs, x) {
	      return _.indexOf(xs, x) !== -1;
	    },
	    id: function(x) {
	      return x;
	    },
	    last: function(xs) {
	      return xs[xs.length - 1];
	    },
	    all: function(xs, f) {
	      var j, len1, x;
	      if (f == null) {
	        f = _.id;
	      }
	      for (j = 0, len1 = xs.length; j < len1; j++) {
	        x = xs[j];
	        if (!f(x)) {
	          return false;
	        }
	      }
	      return true;
	    },
	    any: function(xs, f) {
	      var j, len1, x;
	      if (f == null) {
	        f = _.id;
	      }
	      for (j = 0, len1 = xs.length; j < len1; j++) {
	        x = xs[j];
	        if (f(x)) {
	          return true;
	        }
	      }
	      return false;
	    },
	    without: function(x, xs) {
	      return _.filter((function(y) {
	        return y !== x;
	      }), xs);
	    },
	    remove: function(x, xs) {
	      var i;
	      i = _.indexOf(xs, x);
	      if (i >= 0) {
	        return xs.splice(i, 1);
	      }
	    },
	    fold: function(xs, seed, f) {
	      var j, len1, x;
	      for (j = 0, len1 = xs.length; j < len1; j++) {
	        x = xs[j];
	        seed = f(seed, x);
	      }
	      return seed;
	    },
	    flatMap: function(f, xs) {
	      return _.fold(xs, [], (function(ys, x) {
	        return ys.concat(f(x));
	      }));
	    },
	    cached: function(f) {
	      var value;
	      value = None;
	      return function() {
	        if (value === None) {
	          value = f();
	          f = void 0;
	        }
	        return value;
	      };
	    },
	    isFunction: function(f) {
	      return typeof f === "function";
	    },
	    toString: function(obj) {
	      var ex, internals, key, value;
	      try {
	        recursionDepth++;
	        if (obj == null) {
	          return "undefined";
	        } else if (_.isFunction(obj)) {
	          return "function";
	        } else if (isArray(obj)) {
	          if (recursionDepth > 5) {
	            return "[..]";
	          }
	          return "[" + _.map(_.toString, obj).toString() + "]";
	        } else if (((obj != null ? obj.toString : void 0) != null) && obj.toString !== Object.prototype.toString) {
	          return obj.toString();
	        } else if (typeof obj === "object") {
	          if (recursionDepth > 5) {
	            return "{..}";
	          }
	          internals = (function() {
	            var results;
	            results = [];
	            for (key in obj) {
	              if (!hasProp.call(obj, key)) continue;
	              value = (function() {
	                try {
	                  return obj[key];
	                } catch (_error) {
	                  ex = _error;
	                  return ex;
	                }
	              })();
	              results.push(_.toString(key) + ":" + _.toString(value));
	            }
	            return results;
	          })();
	          return "{" + internals + "}";
	        } else {
	          return obj;
	        }
	      } finally {
	        recursionDepth--;
	      }
	    }
	  };

	  recursionDepth = 0;

	  Bacon._ = _;

	  UpdateBarrier = Bacon.UpdateBarrier = (function() {
	    var afterTransaction, afters, aftersIndex, currentEventId, flush, flushDepsOf, flushWaiters, hasWaiters, inTransaction, rootEvent, waiterObs, waiters, whenDoneWith, wrappedSubscribe;
	    rootEvent = void 0;
	    waiterObs = [];
	    waiters = {};
	    afters = [];
	    aftersIndex = 0;
	    afterTransaction = function(f) {
	      if (rootEvent) {
	        return afters.push(f);
	      } else {
	        return f();
	      }
	    };
	    whenDoneWith = function(obs, f) {
	      var obsWaiters;
	      if (rootEvent) {
	        obsWaiters = waiters[obs.id];
	        if (obsWaiters == null) {
	          obsWaiters = waiters[obs.id] = [f];
	          return waiterObs.push(obs);
	        } else {
	          return obsWaiters.push(f);
	        }
	      } else {
	        return f();
	      }
	    };
	    flush = function() {
	      while (waiterObs.length > 0) {
	        flushWaiters(0);
	      }
	      return void 0;
	    };
	    flushWaiters = function(index) {
	      var f, j, len1, obs, obsId, obsWaiters;
	      obs = waiterObs[index];
	      obsId = obs.id;
	      obsWaiters = waiters[obsId];
	      waiterObs.splice(index, 1);
	      delete waiters[obsId];
	      flushDepsOf(obs);
	      for (j = 0, len1 = obsWaiters.length; j < len1; j++) {
	        f = obsWaiters[j];
	        f();
	      }
	      return void 0;
	    };
	    flushDepsOf = function(obs) {
	      var dep, deps, index, j, len1;
	      deps = obs.internalDeps();
	      for (j = 0, len1 = deps.length; j < len1; j++) {
	        dep = deps[j];
	        flushDepsOf(dep);
	        if (waiters[dep.id]) {
	          index = _.indexOf(waiterObs, dep);
	          flushWaiters(index);
	        }
	      }
	      return void 0;
	    };
	    inTransaction = function(event, context, f, args) {
	      var after, result;
	      if (rootEvent) {
	        return f.apply(context, args);
	      } else {
	        rootEvent = event;
	        try {
	          result = f.apply(context, args);
	          flush();
	        } finally {
	          rootEvent = void 0;
	          while (aftersIndex < afters.length) {
	            after = afters[aftersIndex];
	            aftersIndex++;
	            after();
	          }
	          aftersIndex = 0;
	          afters = [];
	        }
	        return result;
	      }
	    };
	    currentEventId = function() {
	      if (rootEvent) {
	        return rootEvent.id;
	      } else {
	        return void 0;
	      }
	    };
	    wrappedSubscribe = function(obs, sink) {
	      var doUnsub, shouldUnsub, unsub, unsubd;
	      unsubd = false;
	      shouldUnsub = false;
	      doUnsub = function() {
	        return shouldUnsub = true;
	      };
	      unsub = function() {
	        unsubd = true;
	        return doUnsub();
	      };
	      doUnsub = obs.dispatcher.subscribe(function(event) {
	        return afterTransaction(function() {
	          var reply;
	          if (!unsubd) {
	            reply = sink(event);
	            if (reply === Bacon.noMore) {
	              return unsub();
	            }
	          }
	        });
	      });
	      if (shouldUnsub) {
	        doUnsub();
	      }
	      return unsub;
	    };
	    hasWaiters = function() {
	      return waiterObs.length > 0;
	    };
	    return {
	      whenDoneWith: whenDoneWith,
	      hasWaiters: hasWaiters,
	      inTransaction: inTransaction,
	      currentEventId: currentEventId,
	      wrappedSubscribe: wrappedSubscribe,
	      afterTransaction: afterTransaction
	    };
	  })();

	  Source = (function() {
	    function Source(obs1, sync, lazy1) {
	      this.obs = obs1;
	      this.sync = sync;
	      this.lazy = lazy1 != null ? lazy1 : false;
	      this.queue = [];
	    }

	    Source.prototype.subscribe = function(sink) {
	      return this.obs.dispatcher.subscribe(sink);
	    };

	    Source.prototype.toString = function() {
	      return this.obs.toString();
	    };

	    Source.prototype.markEnded = function() {
	      return this.ended = true;
	    };

	    Source.prototype.consume = function() {
	      if (this.lazy) {
	        return {
	          value: _.always(this.queue[0])
	        };
	      } else {
	        return this.queue[0];
	      }
	    };

	    Source.prototype.push = function(x) {
	      return this.queue = [x];
	    };

	    Source.prototype.mayHave = function() {
	      return true;
	    };

	    Source.prototype.hasAtLeast = function() {
	      return this.queue.length;
	    };

	    Source.prototype.flatten = true;

	    return Source;

	  })();

	  ConsumingSource = (function(superClass) {
	    extend(ConsumingSource, superClass);

	    function ConsumingSource() {
	      return ConsumingSource.__super__.constructor.apply(this, arguments);
	    }

	    ConsumingSource.prototype.consume = function() {
	      return this.queue.shift();
	    };

	    ConsumingSource.prototype.push = function(x) {
	      return this.queue.push(x);
	    };

	    ConsumingSource.prototype.mayHave = function(c) {
	      return !this.ended || this.queue.length >= c;
	    };

	    ConsumingSource.prototype.hasAtLeast = function(c) {
	      return this.queue.length >= c;
	    };

	    ConsumingSource.prototype.flatten = false;

	    return ConsumingSource;

	  })(Source);

	  BufferingSource = (function(superClass) {
	    extend(BufferingSource, superClass);

	    function BufferingSource(obs) {
	      BufferingSource.__super__.constructor.call(this, obs, true);
	    }

	    BufferingSource.prototype.consume = function() {
	      var values;
	      values = this.queue;
	      this.queue = [];
	      return {
	        value: function() {
	          return values;
	        }
	      };
	    };

	    BufferingSource.prototype.push = function(x) {
	      return this.queue.push(x.value());
	    };

	    BufferingSource.prototype.hasAtLeast = function() {
	      return true;
	    };

	    return BufferingSource;

	  })(Source);

	  Source.isTrigger = function(s) {
	    if (s instanceof Source) {
	      return s.sync;
	    } else {
	      return s instanceof EventStream;
	    }
	  };

	  Source.fromObservable = function(s) {
	    if (s instanceof Source) {
	      return s;
	    } else if (s instanceof Property) {
	      return new Source(s, false);
	    } else {
	      return new ConsumingSource(s, true);
	    }
	  };

	  Desc = (function() {
	    function Desc(context1, method1, args1) {
	      this.context = context1;
	      this.method = method1;
	      this.args = args1;
	    }

	    Desc.prototype.deps = function() {
	      return this.cached || (this.cached = findDeps([this.context].concat(this.args)));
	    };

	    Desc.prototype.toString = function() {
	      return _.toString(this.context) + "." + _.toString(this.method) + "(" + _.map(_.toString, this.args) + ")";
	    };

	    return Desc;

	  })();

	  describe = function() {
	    var args, context, method;
	    context = arguments[0], method = arguments[1], args = 3 <= arguments.length ? slice.call(arguments, 2) : [];
	    if ((context || method) instanceof Desc) {
	      return context || method;
	    } else {
	      return new Desc(context, method, args);
	    }
	  };

	  withDesc = function(desc, obs) {
	    obs.desc = desc;
	    return obs;
	  };

	  findDeps = function(x) {
	    if (isArray(x)) {
	      return _.flatMap(findDeps, x);
	    } else if (isObservable(x)) {
	      return [x];
	    } else if (x instanceof Source) {
	      return [x.obs];
	    } else {
	      return [];
	    }
	  };

	  Bacon.Desc = Desc;

	  Bacon.Desc.empty = new Bacon.Desc("", "", []);

	  withMethodCallSupport = function(wrapped) {
	    return function() {
	      var args, context, f, methodName;
	      f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	      if (typeof f === "object" && args.length) {
	        context = f;
	        methodName = args[0];
	        f = function() {
	          return context[methodName].apply(context, arguments);
	        };
	        args = args.slice(1);
	      }
	      return wrapped.apply(null, [f].concat(slice.call(args)));
	    };
	  };

	  makeFunctionArgs = function(args) {
	    args = Array.prototype.slice.call(args);
	    return makeFunction_.apply(null, args);
	  };

	  partiallyApplied = function(f, applied) {
	    return function() {
	      var args;
	      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	      return f.apply(null, applied.concat(args));
	    };
	  };

	  toSimpleExtractor = function(args) {
	    return function(key) {
	      return function(value) {
	        var fieldValue;
	        if (value == null) {
	          return void 0;
	        } else {
	          fieldValue = value[key];
	          if (_.isFunction(fieldValue)) {
	            return fieldValue.apply(value, args);
	          } else {
	            return fieldValue;
	          }
	        }
	      };
	    };
	  };

	  toFieldExtractor = function(f, args) {
	    var partFuncs, parts;
	    parts = f.slice(1).split(".");
	    partFuncs = _.map(toSimpleExtractor(args), parts);
	    return function(value) {
	      var j, len1;
	      for (j = 0, len1 = partFuncs.length; j < len1; j++) {
	        f = partFuncs[j];
	        value = f(value);
	      }
	      return value;
	    };
	  };

	  isFieldKey = function(f) {
	    return (typeof f === "string") && f.length > 1 && f.charAt(0) === ".";
	  };

	  makeFunction_ = withMethodCallSupport(function() {
	    var args, f;
	    f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    if (_.isFunction(f)) {
	      if (args.length) {
	        return partiallyApplied(f, args);
	      } else {
	        return f;
	      }
	    } else if (isFieldKey(f)) {
	      return toFieldExtractor(f, args);
	    } else {
	      return _.always(f);
	    }
	  });

	  makeFunction = function(f, args) {
	    return makeFunction_.apply(null, [f].concat(slice.call(args)));
	  };

	  convertArgsToFunction = function(obs, f, args, method) {
	    var sampled;
	    if (f instanceof Property) {
	      sampled = f.sampledBy(obs, function(p, s) {
	        return [p, s];
	      });
	      return method.call(sampled, function(arg) {
	        var p, s;
	        p = arg[0], s = arg[1];
	        return p;
	      }).map(function(arg) {
	        var p, s;
	        p = arg[0], s = arg[1];
	        return s;
	      });
	    } else {
	      f = makeFunction(f, args);
	      return method.call(obs, f);
	    }
	  };

	  toCombinator = function(f) {
	    var key;
	    if (_.isFunction(f)) {
	      return f;
	    } else if (isFieldKey(f)) {
	      key = toFieldKey(f);
	      return function(left, right) {
	        return left[key](right);
	      };
	    } else {
	      throw new Exception("not a function or a field key: " + f);
	    }
	  };

	  toFieldKey = function(f) {
	    return f.slice(1);
	  };

	  Some = (function() {
	    function Some(value1) {
	      this.value = value1;
	    }

	    Some.prototype.getOrElse = function() {
	      return this.value;
	    };

	    Some.prototype.get = function() {
	      return this.value;
	    };

	    Some.prototype.filter = function(f) {
	      if (f(this.value)) {
	        return new Some(this.value);
	      } else {
	        return None;
	      }
	    };

	    Some.prototype.map = function(f) {
	      return new Some(f(this.value));
	    };

	    Some.prototype.forEach = function(f) {
	      return f(this.value);
	    };

	    Some.prototype.isDefined = true;

	    Some.prototype.toArray = function() {
	      return [this.value];
	    };

	    Some.prototype.inspect = function() {
	      return "Some(" + this.value + ")";
	    };

	    Some.prototype.toString = function() {
	      return this.inspect();
	    };

	    return Some;

	  })();

	  None = {
	    getOrElse: function(value) {
	      return value;
	    },
	    filter: function() {
	      return None;
	    },
	    map: function() {
	      return None;
	    },
	    forEach: function() {},
	    isDefined: false,
	    toArray: function() {
	      return [];
	    },
	    inspect: function() {
	      return "None";
	    },
	    toString: function() {
	      return this.inspect();
	    }
	  };

	  toOption = function(v) {
	    if (v instanceof Some || v === None) {
	      return v;
	    } else {
	      return new Some(v);
	    }
	  };

	  Bacon.noMore = ["<no-more>"];

	  Bacon.more = ["<more>"];

	  eventIdCounter = 0;

	  Event = (function() {
	    function Event() {
	      this.id = ++eventIdCounter;
	    }

	    Event.prototype.isEvent = function() {
	      return true;
	    };

	    Event.prototype.isEnd = function() {
	      return false;
	    };

	    Event.prototype.isInitial = function() {
	      return false;
	    };

	    Event.prototype.isNext = function() {
	      return false;
	    };

	    Event.prototype.isError = function() {
	      return false;
	    };

	    Event.prototype.hasValue = function() {
	      return false;
	    };

	    Event.prototype.filter = function() {
	      return true;
	    };

	    Event.prototype.inspect = function() {
	      return this.toString();
	    };

	    Event.prototype.log = function() {
	      return this.toString();
	    };

	    return Event;

	  })();

	  Next = (function(superClass) {
	    extend(Next, superClass);

	    function Next(valueF, eager) {
	      Next.__super__.constructor.call(this);
	      if (!eager && _.isFunction(valueF) || valueF instanceof Next) {
	        this.valueF = valueF;
	        this.valueInternal = void 0;
	      } else {
	        this.valueF = void 0;
	        this.valueInternal = valueF;
	      }
	    }

	    Next.prototype.isNext = function() {
	      return true;
	    };

	    Next.prototype.hasValue = function() {
	      return true;
	    };

	    Next.prototype.value = function() {
	      if (this.valueF instanceof Next) {
	        this.valueInternal = this.valueF.value();
	        this.valueF = void 0;
	      } else if (this.valueF) {
	        this.valueInternal = this.valueF();
	        this.valueF = void 0;
	      }
	      return this.valueInternal;
	    };

	    Next.prototype.fmap = function(f) {
	      var event, value;
	      if (this.valueInternal) {
	        value = this.valueInternal;
	        return this.apply(function() {
	          return f(value);
	        });
	      } else {
	        event = this;
	        return this.apply(function() {
	          return f(event.value());
	        });
	      }
	    };

	    Next.prototype.apply = function(value) {
	      return new Next(value);
	    };

	    Next.prototype.filter = function(f) {
	      return f(this.value());
	    };

	    Next.prototype.toString = function() {
	      return _.toString(this.value());
	    };

	    Next.prototype.log = function() {
	      return this.value();
	    };

	    return Next;

	  })(Event);

	  Initial = (function(superClass) {
	    extend(Initial, superClass);

	    function Initial() {
	      return Initial.__super__.constructor.apply(this, arguments);
	    }

	    Initial.prototype.isInitial = function() {
	      return true;
	    };

	    Initial.prototype.isNext = function() {
	      return false;
	    };

	    Initial.prototype.apply = function(value) {
	      return new Initial(value);
	    };

	    Initial.prototype.toNext = function() {
	      return new Next(this);
	    };

	    return Initial;

	  })(Next);

	  End = (function(superClass) {
	    extend(End, superClass);

	    function End() {
	      return End.__super__.constructor.apply(this, arguments);
	    }

	    End.prototype.isEnd = function() {
	      return true;
	    };

	    End.prototype.fmap = function() {
	      return this;
	    };

	    End.prototype.apply = function() {
	      return this;
	    };

	    End.prototype.toString = function() {
	      return "<end>";
	    };

	    return End;

	  })(Event);

	  Error = (function(superClass) {
	    extend(Error, superClass);

	    function Error(error1) {
	      this.error = error1;
	    }

	    Error.prototype.isError = function() {
	      return true;
	    };

	    Error.prototype.fmap = function() {
	      return this;
	    };

	    Error.prototype.apply = function() {
	      return this;
	    };

	    Error.prototype.toString = function() {
	      return "<error> " + _.toString(this.error);
	    };

	    return Error;

	  })(Event);

	  Bacon.Event = Event;

	  Bacon.Initial = Initial;

	  Bacon.Next = Next;

	  Bacon.End = End;

	  Bacon.Error = Error;

	  initialEvent = function(value) {
	    return new Initial(value, true);
	  };

	  nextEvent = function(value) {
	    return new Next(value, true);
	  };

	  endEvent = function() {
	    return new End();
	  };

	  toEvent = function(x) {
	    if (x instanceof Event) {
	      return x;
	    } else {
	      return nextEvent(x);
	    }
	  };

	  idCounter = 0;

	  registerObs = function() {};

	  Observable = (function() {
	    function Observable(desc1) {
	      this.desc = desc1;
	      this.id = ++idCounter;
	      this.initialDesc = this.desc;
	    }

	    Observable.prototype.subscribe = function(sink) {
	      return UpdateBarrier.wrappedSubscribe(this, sink);
	    };

	    Observable.prototype.subscribeInternal = function(sink) {
	      return this.dispatcher.subscribe(sink);
	    };

	    Observable.prototype.onValue = function() {
	      var f;
	      f = makeFunctionArgs(arguments);
	      return this.subscribe(function(event) {
	        if (event.hasValue()) {
	          return f(event.value());
	        }
	      });
	    };

	    Observable.prototype.onValues = function(f) {
	      return this.onValue(function(args) {
	        return f.apply(null, args);
	      });
	    };

	    Observable.prototype.onError = function() {
	      var f;
	      f = makeFunctionArgs(arguments);
	      return this.subscribe(function(event) {
	        if (event.isError()) {
	          return f(event.error);
	        }
	      });
	    };

	    Observable.prototype.onEnd = function() {
	      var f;
	      f = makeFunctionArgs(arguments);
	      return this.subscribe(function(event) {
	        if (event.isEnd()) {
	          return f();
	        }
	      });
	    };

	    Observable.prototype.name = function(name) {
	      this._name = name;
	      return this;
	    };

	    Observable.prototype.withDescription = function() {
	      this.desc = describe.apply(null, arguments);
	      return this;
	    };

	    Observable.prototype.toString = function() {
	      if (this._name) {
	        return this._name;
	      } else {
	        return this.desc.toString();
	      }
	    };

	    Observable.prototype.internalDeps = function() {
	      return this.initialDesc.deps();
	    };

	    return Observable;

	  })();

	  Observable.prototype.assign = Observable.prototype.onValue;

	  Observable.prototype.forEach = Observable.prototype.onValue;

	  Observable.prototype.inspect = Observable.prototype.toString;

	  Bacon.Observable = Observable;

	  CompositeUnsubscribe = (function() {
	    function CompositeUnsubscribe(ss) {
	      var j, len1, s;
	      if (ss == null) {
	        ss = [];
	      }
	      this.unsubscribe = bind(this.unsubscribe, this);
	      this.unsubscribed = false;
	      this.subscriptions = [];
	      this.starting = [];
	      for (j = 0, len1 = ss.length; j < len1; j++) {
	        s = ss[j];
	        this.add(s);
	      }
	    }

	    CompositeUnsubscribe.prototype.add = function(subscription) {
	      var ended, unsub, unsubMe;
	      if (this.unsubscribed) {
	        return;
	      }
	      ended = false;
	      unsub = nop;
	      this.starting.push(subscription);
	      unsubMe = (function(_this) {
	        return function() {
	          if (_this.unsubscribed) {
	            return;
	          }
	          ended = true;
	          _this.remove(unsub);
	          return _.remove(subscription, _this.starting);
	        };
	      })(this);
	      unsub = subscription(this.unsubscribe, unsubMe);
	      if (!(this.unsubscribed || ended)) {
	        this.subscriptions.push(unsub);
	      } else {
	        unsub();
	      }
	      _.remove(subscription, this.starting);
	      return unsub;
	    };

	    CompositeUnsubscribe.prototype.remove = function(unsub) {
	      if (this.unsubscribed) {
	        return;
	      }
	      if ((_.remove(unsub, this.subscriptions)) !== void 0) {
	        return unsub();
	      }
	    };

	    CompositeUnsubscribe.prototype.unsubscribe = function() {
	      var j, len1, ref, s;
	      if (this.unsubscribed) {
	        return;
	      }
	      this.unsubscribed = true;
	      ref = this.subscriptions;
	      for (j = 0, len1 = ref.length; j < len1; j++) {
	        s = ref[j];
	        s();
	      }
	      this.subscriptions = [];
	      return this.starting = [];
	    };

	    CompositeUnsubscribe.prototype.count = function() {
	      if (this.unsubscribed) {
	        return 0;
	      }
	      return this.subscriptions.length + this.starting.length;
	    };

	    CompositeUnsubscribe.prototype.empty = function() {
	      return this.count() === 0;
	    };

	    return CompositeUnsubscribe;

	  })();

	  Bacon.CompositeUnsubscribe = CompositeUnsubscribe;

	  Dispatcher = (function() {
	    Dispatcher.prototype.pushing = false;

	    Dispatcher.prototype.ended = false;

	    Dispatcher.prototype.prevError = void 0;

	    Dispatcher.prototype.unsubSrc = void 0;

	    function Dispatcher(_subscribe, _handleEvent) {
	      this._subscribe = _subscribe;
	      this._handleEvent = _handleEvent;
	      this.subscribe = bind(this.subscribe, this);
	      this.handleEvent = bind(this.handleEvent, this);
	      this.subscriptions = [];
	      this.queue = [];
	    }

	    Dispatcher.prototype.hasSubscribers = function() {
	      return this.subscriptions.length > 0;
	    };

	    Dispatcher.prototype.removeSub = function(subscription) {
	      return this.subscriptions = _.without(subscription, this.subscriptions);
	    };

	    Dispatcher.prototype.push = function(event) {
	      if (event.isEnd()) {
	        this.ended = true;
	      }
	      return UpdateBarrier.inTransaction(event, this, this.pushIt, [event]);
	    };

	    Dispatcher.prototype.pushToSubscriptions = function(event) {
	      var e, j, len1, reply, sub, tmp;
	      try {
	        tmp = this.subscriptions;
	        for (j = 0, len1 = tmp.length; j < len1; j++) {
	          sub = tmp[j];
	          reply = sub.sink(event);
	          if (reply === Bacon.noMore || event.isEnd()) {
	            this.removeSub(sub);
	          }
	        }
	        return true;
	      } catch (_error) {
	        e = _error;
	        this.pushing = false;
	        this.queue = [];
	        throw e;
	      }
	    };

	    Dispatcher.prototype.pushIt = function(event) {
	      if (!this.pushing) {
	        if (event === this.prevError) {
	          return;
	        }
	        if (event.isError()) {
	          this.prevError = event;
	        }
	        this.pushing = true;
	        this.pushToSubscriptions(event);
	        this.pushing = false;
	        while (this.queue.length) {
	          event = this.queue.shift();
	          this.push(event);
	        }
	        if (this.hasSubscribers()) {
	          return Bacon.more;
	        } else {
	          this.unsubscribeFromSource();
	          return Bacon.noMore;
	        }
	      } else {
	        this.queue.push(event);
	        return Bacon.more;
	      }
	    };

	    Dispatcher.prototype.handleEvent = function(event) {
	      if (this._handleEvent) {
	        return this._handleEvent(event);
	      } else {
	        return this.push(event);
	      }
	    };

	    Dispatcher.prototype.unsubscribeFromSource = function() {
	      if (this.unsubSrc) {
	        this.unsubSrc();
	      }
	      return this.unsubSrc = void 0;
	    };

	    Dispatcher.prototype.subscribe = function(sink) {
	      var subscription;
	      if (this.ended) {
	        sink(endEvent());
	        return nop;
	      } else {
	        assertFunction(sink);
	        subscription = {
	          sink: sink
	        };
	        this.subscriptions.push(subscription);
	        if (this.subscriptions.length === 1) {
	          this.unsubSrc = this._subscribe(this.handleEvent);
	          assertFunction(this.unsubSrc);
	        }
	        return (function(_this) {
	          return function() {
	            _this.removeSub(subscription);
	            if (!_this.hasSubscribers()) {
	              return _this.unsubscribeFromSource();
	            }
	          };
	        })(this);
	      }
	    };

	    return Dispatcher;

	  })();

	  Bacon.Dispatcher = Dispatcher;

	  EventStream = (function(superClass) {
	    extend(EventStream, superClass);

	    function EventStream(desc, subscribe, handler) {
	      if (_.isFunction(desc)) {
	        handler = subscribe;
	        subscribe = desc;
	        desc = Desc.empty;
	      }
	      EventStream.__super__.constructor.call(this, desc);
	      assertFunction(subscribe);
	      this.dispatcher = new Dispatcher(subscribe, handler);
	      registerObs(this);
	    }

	    EventStream.prototype.toProperty = function(initValue_) {
	      var disp, initValue;
	      initValue = arguments.length === 0 ? None : toOption(function() {
	        return initValue_;
	      });
	      disp = this.dispatcher;
	      return new Property(new Bacon.Desc(this, "toProperty", [initValue_]), function(sink) {
	        var initSent, reply, sendInit, unsub;
	        initSent = false;
	        unsub = nop;
	        reply = Bacon.more;
	        sendInit = function() {
	          if (!initSent) {
	            return initValue.forEach(function(value) {
	              initSent = true;
	              reply = sink(new Initial(value));
	              if (reply === Bacon.noMore) {
	                unsub();
	                return unsub = nop;
	              }
	            });
	          }
	        };
	        unsub = disp.subscribe(function(event) {
	          if (event.hasValue()) {
	            if (initSent && event.isInitial()) {
	              return Bacon.more;
	            } else {
	              if (!event.isInitial()) {
	                sendInit();
	              }
	              initSent = true;
	              initValue = new Some(event);
	              return sink(event);
	            }
	          } else {
	            if (event.isEnd()) {
	              reply = sendInit();
	            }
	            if (reply !== Bacon.noMore) {
	              return sink(event);
	            }
	          }
	        });
	        sendInit();
	        return unsub;
	      });
	    };

	    EventStream.prototype.toEventStream = function() {
	      return this;
	    };

	    EventStream.prototype.withHandler = function(handler) {
	      return new EventStream(new Bacon.Desc(this, "withHandler", [handler]), this.dispatcher.subscribe, handler);
	    };

	    return EventStream;

	  })(Observable);

	  Bacon.EventStream = EventStream;

	  Bacon.never = function() {
	    return new EventStream(describe(Bacon, "never"), function(sink) {
	      sink(endEvent());
	      return nop;
	    });
	  };

	  Bacon.when = function() {
	    var f, i, index, ix, j, k, len, len1, len2, needsBarrier, pat, patSources, pats, patterns, ref, resultStream, s, sources, triggerFound, usage;
	    if (arguments.length === 0) {
	      return Bacon.never();
	    }
	    len = arguments.length;
	    usage = "when: expecting arguments in the form (Observable+,function)+";
	    assert(usage, len % 2 === 0);
	    sources = [];
	    pats = [];
	    i = 0;
	    patterns = [];
	    while (i < len) {
	      patterns[i] = arguments[i];
	      patterns[i + 1] = arguments[i + 1];
	      patSources = _.toArray(arguments[i]);
	      f = constantToFunction(arguments[i + 1]);
	      pat = {
	        f: f,
	        ixs: []
	      };
	      triggerFound = false;
	      for (j = 0, len1 = patSources.length; j < len1; j++) {
	        s = patSources[j];
	        index = _.indexOf(sources, s);
	        if (!triggerFound) {
	          triggerFound = Source.isTrigger(s);
	        }
	        if (index < 0) {
	          sources.push(s);
	          index = sources.length - 1;
	        }
	        ref = pat.ixs;
	        for (k = 0, len2 = ref.length; k < len2; k++) {
	          ix = ref[k];
	          if (ix.index === index) {
	            ix.count++;
	          }
	        }
	        pat.ixs.push({
	          index: index,
	          count: 1
	        });
	      }
	      assert("At least one EventStream required", triggerFound || (!patSources.length));
	      if (patSources.length > 0) {
	        pats.push(pat);
	      }
	      i = i + 2;
	    }
	    if (!sources.length) {
	      return Bacon.never();
	    }
	    sources = _.map(Source.fromObservable, sources);
	    needsBarrier = (_.any(sources, function(s) {
	      return s.flatten;
	    })) && (containsDuplicateDeps(_.map((function(s) {
	      return s.obs;
	    }), sources)));
	    return resultStream = new EventStream(new Bacon.Desc(Bacon, "when", patterns), function(sink) {
	      var cannotMatch, cannotSync, ends, match, nonFlattened, part, triggers;
	      triggers = [];
	      ends = false;
	      match = function(p) {
	        var l, len3, ref1;
	        ref1 = p.ixs;
	        for (l = 0, len3 = ref1.length; l < len3; l++) {
	          i = ref1[l];
	          if (!sources[i.index].hasAtLeast(i.count)) {
	            return false;
	          }
	        }
	        return true;
	      };
	      cannotSync = function(source) {
	        return !source.sync || source.ended;
	      };
	      cannotMatch = function(p) {
	        var l, len3, ref1;
	        ref1 = p.ixs;
	        for (l = 0, len3 = ref1.length; l < len3; l++) {
	          i = ref1[l];
	          if (!sources[i.index].mayHave(i.count)) {
	            return true;
	          }
	        }
	      };
	      nonFlattened = function(trigger) {
	        return !trigger.source.flatten;
	      };
	      part = function(source) {
	        return function(unsubAll) {
	          var flush, flushLater, flushWhileTriggers;
	          flushLater = function() {
	            return UpdateBarrier.whenDoneWith(resultStream, flush);
	          };
	          flushWhileTriggers = function() {
	            var events, l, len3, p, reply, trigger;
	            if (triggers.length > 0) {
	              reply = Bacon.more;
	              trigger = triggers.pop();
	              for (l = 0, len3 = pats.length; l < len3; l++) {
	                p = pats[l];
	                if (match(p)) {
	                  events = (function() {
	                    var len4, m, ref1, results;
	                    ref1 = p.ixs;
	                    results = [];
	                    for (m = 0, len4 = ref1.length; m < len4; m++) {
	                      i = ref1[m];
	                      results.push(sources[i.index].consume());
	                    }
	                    return results;
	                  })();
	                  reply = sink(trigger.e.apply(function() {
	                    var event, values;
	                    values = (function() {
	                      var len4, m, results;
	                      results = [];
	                      for (m = 0, len4 = events.length; m < len4; m++) {
	                        event = events[m];
	                        results.push(event.value());
	                      }
	                      return results;
	                    })();
	                    return p.f.apply(p, values);
	                  }));
	                  if (triggers.length) {
	                    triggers = _.filter(nonFlattened, triggers);
	                  }
	                  if (reply === Bacon.noMore) {
	                    return reply;
	                  } else {
	                    return flushWhileTriggers();
	                  }
	                }
	              }
	            } else {
	              return Bacon.more;
	            }
	          };
	          flush = function() {
	            var reply;
	            reply = flushWhileTriggers();
	            if (ends) {
	              if (_.all(sources, cannotSync) || _.all(pats, cannotMatch)) {
	                reply = Bacon.noMore;
	                sink(endEvent());
	              }
	            }
	            if (reply === Bacon.noMore) {
	              unsubAll();
	            }
	            return reply;
	          };
	          return source.subscribe(function(e) {
	            var reply;
	            if (e.isEnd()) {
	              ends = true;
	              source.markEnded();
	              flushLater();
	            } else if (e.isError()) {
	              reply = sink(e);
	            } else {
	              source.push(e);
	              if (source.sync) {
	                triggers.push({
	                  source: source,
	                  e: e
	                });
	                if (needsBarrier || UpdateBarrier.hasWaiters()) {
	                  flushLater();
	                } else {
	                  flush();
	                }
	              }
	            }
	            if (reply === Bacon.noMore) {
	              unsubAll();
	            }
	            return reply || Bacon.more;
	          });
	        };
	      };
	      return new Bacon.CompositeUnsubscribe((function() {
	        var l, len3, results;
	        results = [];
	        for (l = 0, len3 = sources.length; l < len3; l++) {
	          s = sources[l];
	          results.push(part(s));
	        }
	        return results;
	      })()).unsubscribe;
	    });
	  };

	  containsDuplicateDeps = function(observables, state) {
	    var checkObservable;
	    if (state == null) {
	      state = [];
	    }
	    checkObservable = function(obs) {
	      var deps;
	      if (_.contains(state, obs)) {
	        return true;
	      } else {
	        deps = obs.internalDeps();
	        if (deps.length) {
	          state.push(obs);
	          return _.any(deps, checkObservable);
	        } else {
	          state.push(obs);
	          return false;
	        }
	      }
	    };
	    return _.any(observables, checkObservable);
	  };

	  constantToFunction = function(f) {
	    if (_.isFunction(f)) {
	      return f;
	    } else {
	      return _.always(f);
	    }
	  };

	  Bacon.groupSimultaneous = function() {
	    var s, sources, streams;
	    streams = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    if (streams.length === 1 && isArray(streams[0])) {
	      streams = streams[0];
	    }
	    sources = (function() {
	      var j, len1, results;
	      results = [];
	      for (j = 0, len1 = streams.length; j < len1; j++) {
	        s = streams[j];
	        results.push(new BufferingSource(s));
	      }
	      return results;
	    })();
	    return withDesc(new Bacon.Desc(Bacon, "groupSimultaneous", streams), Bacon.when(sources, (function() {
	      var xs;
	      xs = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	      return xs;
	    })));
	  };

	  PropertyDispatcher = (function(superClass) {
	    extend(PropertyDispatcher, superClass);

	    function PropertyDispatcher(property1, subscribe, handleEvent) {
	      this.property = property1;
	      this.subscribe = bind(this.subscribe, this);
	      PropertyDispatcher.__super__.constructor.call(this, subscribe, handleEvent);
	      this.current = None;
	      this.currentValueRootId = void 0;
	      this.propertyEnded = false;
	    }

	    PropertyDispatcher.prototype.push = function(event) {
	      if (event.isEnd()) {
	        this.propertyEnded = true;
	      }
	      if (event.hasValue()) {
	        this.current = new Some(event);
	        this.currentValueRootId = UpdateBarrier.currentEventId();
	      }
	      return PropertyDispatcher.__super__.push.call(this, event);
	    };

	    PropertyDispatcher.prototype.maybeSubSource = function(sink, reply) {
	      if (reply === Bacon.noMore) {
	        return nop;
	      } else if (this.propertyEnded) {
	        sink(endEvent());
	        return nop;
	      } else {
	        return Dispatcher.prototype.subscribe.call(this, sink);
	      }
	    };

	    PropertyDispatcher.prototype.subscribe = function(sink) {
	      var dispatchingId, initSent, reply, valId;
	      initSent = false;
	      reply = Bacon.more;
	      if (this.current.isDefined && (this.hasSubscribers() || this.propertyEnded)) {
	        dispatchingId = UpdateBarrier.currentEventId();
	        valId = this.currentValueRootId;
	        if (!this.propertyEnded && valId && dispatchingId && dispatchingId !== valId) {
	          UpdateBarrier.whenDoneWith(this.property, (function(_this) {
	            return function() {
	              if (_this.currentValueRootId === valId) {
	                return sink(initialEvent(_this.current.get().value()));
	              }
	            };
	          })(this));
	          return this.maybeSubSource(sink, reply);
	        } else {
	          UpdateBarrier.inTransaction(void 0, this, (function() {
	            return reply = sink(initialEvent(this.current.get().value()));
	          }), []);
	          return this.maybeSubSource(sink, reply);
	        }
	      } else {
	        return this.maybeSubSource(sink, reply);
	      }
	    };

	    return PropertyDispatcher;

	  })(Dispatcher);

	  Property = (function(superClass) {
	    extend(Property, superClass);

	    function Property(desc, subscribe, handler) {
	      Property.__super__.constructor.call(this, desc);
	      assertFunction(subscribe);
	      this.dispatcher = new PropertyDispatcher(this, subscribe, handler);
	      registerObs(this);
	    }

	    Property.prototype.changes = function() {
	      return new EventStream(new Bacon.Desc(this, "changes", []), (function(_this) {
	        return function(sink) {
	          return _this.dispatcher.subscribe(function(event) {
	            if (!event.isInitial()) {
	              return sink(event);
	            }
	          });
	        };
	      })(this));
	    };

	    Property.prototype.withHandler = function(handler) {
	      return new Property(new Bacon.Desc(this, "withHandler", [handler]), this.dispatcher.subscribe, handler);
	    };

	    Property.prototype.toProperty = function() {
	      assertNoArguments(arguments);
	      return this;
	    };

	    Property.prototype.toEventStream = function() {
	      return new EventStream(new Bacon.Desc(this, "toEventStream", []), (function(_this) {
	        return function(sink) {
	          return _this.dispatcher.subscribe(function(event) {
	            if (event.isInitial()) {
	              event = event.toNext();
	            }
	            return sink(event);
	          });
	        };
	      })(this));
	    };

	    return Property;

	  })(Observable);

	  Bacon.Property = Property;

	  Bacon.constant = function(value) {
	    return new Property(new Bacon.Desc(Bacon, "constant", [value]), function(sink) {
	      sink(initialEvent(value));
	      sink(endEvent());
	      return nop;
	    });
	  };

	  Bacon.fromBinder = function(binder, eventTransformer) {
	    if (eventTransformer == null) {
	      eventTransformer = _.id;
	    }
	    return new EventStream(new Bacon.Desc(Bacon, "fromBinder", [binder, eventTransformer]), function(sink) {
	      var shouldUnbind, unbind, unbinder, unbound;
	      unbound = false;
	      shouldUnbind = false;
	      unbind = function() {
	        if (!unbound) {
	          if (typeof unbinder !== "undefined" && unbinder !== null) {
	            unbinder();
	            return unbound = true;
	          } else {
	            return shouldUnbind = true;
	          }
	        }
	      };
	      unbinder = binder(function() {
	        var args, event, j, len1, reply, value;
	        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	        value = eventTransformer.apply(this, args);
	        if (!(isArray(value) && _.last(value) instanceof Event)) {
	          value = [value];
	        }
	        reply = Bacon.more;
	        for (j = 0, len1 = value.length; j < len1; j++) {
	          event = value[j];
	          reply = sink(event = toEvent(event));
	          if (reply === Bacon.noMore || event.isEnd()) {
	            unbind();
	            return reply;
	          }
	        }
	        return reply;
	      });
	      if (shouldUnbind) {
	        unbind();
	      }
	      return unbind;
	    });
	  };

	  eventMethods = [["addEventListener", "removeEventListener"], ["addListener", "removeListener"], ["on", "off"], ["bind", "unbind"]];

	  findHandlerMethods = function(target) {
	    var j, len1, methodPair, pair;
	    for (j = 0, len1 = eventMethods.length; j < len1; j++) {
	      pair = eventMethods[j];
	      methodPair = [target[pair[0]], target[pair[1]]];
	      if (methodPair[0] && methodPair[1]) {
	        return methodPair;
	      }
	    }
	    throw new Error("No suitable event methods in " + target);
	  };

	  Bacon.fromEventTarget = function(target, eventName, eventTransformer) {
	    var ref, sub, unsub;
	    ref = findHandlerMethods(target), sub = ref[0], unsub = ref[1];
	    return withDesc(new Bacon.Desc(Bacon, "fromEvent", [target, eventName]), Bacon.fromBinder(function(handler) {
	      sub.call(target, eventName, handler);
	      return function() {
	        return unsub.call(target, eventName, handler);
	      };
	    }, eventTransformer));
	  };

	  Bacon.fromEvent = Bacon.fromEventTarget;

	  Bacon.Observable.prototype.map = function() {
	    var args, p;
	    p = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    return convertArgsToFunction(this, p, args, function(f) {
	      return withDesc(new Bacon.Desc(this, "map", [f]), this.withHandler(function(event) {
	        return this.push(event.fmap(f));
	      }));
	    });
	  };

	  Bacon.combineAsArray = function() {
	    var index, j, len1, s, sources, stream, streams;
	    streams = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    if (streams.length === 1 && isArray(streams[0])) {
	      streams = streams[0];
	    }
	    for (index = j = 0, len1 = streams.length; j < len1; index = ++j) {
	      stream = streams[index];
	      if (!(isObservable(stream))) {
	        streams[index] = Bacon.constant(stream);
	      }
	    }
	    if (streams.length) {
	      sources = (function() {
	        var k, len2, results;
	        results = [];
	        for (k = 0, len2 = streams.length; k < len2; k++) {
	          s = streams[k];
	          results.push(new Source(s, true));
	        }
	        return results;
	      })();
	      return withDesc(new Bacon.Desc(Bacon, "combineAsArray", streams), Bacon.when(sources, (function() {
	        var xs;
	        xs = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	        return xs;
	      })).toProperty());
	    } else {
	      return Bacon.constant([]);
	    }
	  };

	  Bacon.onValues = function() {
	    var f, j, streams;
	    streams = 2 <= arguments.length ? slice.call(arguments, 0, j = arguments.length - 1) : (j = 0, []), f = arguments[j++];
	    return Bacon.combineAsArray(streams).onValues(f);
	  };

	  Bacon.combineWith = function() {
	    var f, streams;
	    f = arguments[0], streams = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    return withDesc(new Bacon.Desc(Bacon, "combineWith", [f].concat(slice.call(streams))), Bacon.combineAsArray(streams).map(function(values) {
	      return f.apply(null, values);
	    }));
	  };

	  Bacon.Observable.prototype.combine = function(other, f) {
	    var combinator;
	    combinator = toCombinator(f);
	    return withDesc(new Bacon.Desc(this, "combine", [other, f]), Bacon.combineAsArray(this, other).map(function(values) {
	      return combinator(values[0], values[1]);
	    }));
	  };

	  Bacon.Observable.prototype.withStateMachine = function(initState, f) {
	    var state;
	    state = initState;
	    return withDesc(new Bacon.Desc(this, "withStateMachine", [initState, f]), this.withHandler(function(event) {
	      var fromF, j, len1, newState, output, outputs, reply;
	      fromF = f(state, event);
	      newState = fromF[0], outputs = fromF[1];
	      state = newState;
	      reply = Bacon.more;
	      for (j = 0, len1 = outputs.length; j < len1; j++) {
	        output = outputs[j];
	        reply = this.push(output);
	        if (reply === Bacon.noMore) {
	          return reply;
	        }
	      }
	      return reply;
	    }));
	  };

	  Bacon.Observable.prototype.skipDuplicates = function(isEqual) {
	    if (isEqual == null) {
	      isEqual = function(a, b) {
	        return a === b;
	      };
	    }
	    return withDesc(new Bacon.Desc(this, "skipDuplicates", []), this.withStateMachine(None, function(prev, event) {
	      if (!event.hasValue()) {
	        return [prev, [event]];
	      } else if (event.isInitial() || prev === None || !isEqual(prev.get(), event.value())) {
	        return [new Some(event.value()), [event]];
	      } else {
	        return [prev, []];
	      }
	    }));
	  };

	  Bacon.Observable.prototype.awaiting = function(other) {
	    return withDesc(new Bacon.Desc(this, "awaiting", [other]), Bacon.groupSimultaneous(this, other).map(function(arg) {
	      var myValues, otherValues;
	      myValues = arg[0], otherValues = arg[1];
	      return otherValues.length === 0;
	    }).toProperty(false).skipDuplicates());
	  };

	  Bacon.Observable.prototype.not = function() {
	    return withDesc(new Bacon.Desc(this, "not", []), this.map(function(x) {
	      return !x;
	    }));
	  };

	  Bacon.Property.prototype.and = function(other) {
	    return withDesc(new Bacon.Desc(this, "and", [other]), this.combine(other, function(x, y) {
	      return x && y;
	    }));
	  };

	  Bacon.Property.prototype.or = function(other) {
	    return withDesc(new Bacon.Desc(this, "or", [other]), this.combine(other, function(x, y) {
	      return x || y;
	    }));
	  };

	  Bacon.scheduler = {
	    setTimeout: function(f, d) {
	      return setTimeout(f, d);
	    },
	    setInterval: function(f, i) {
	      return setInterval(f, i);
	    },
	    clearInterval: function(id) {
	      return clearInterval(id);
	    },
	    clearTimeout: function(id) {
	      return clearTimeout(id);
	    },
	    now: function() {
	      return new Date().getTime();
	    }
	  };

	  Bacon.EventStream.prototype.bufferWithTime = function(delay) {
	    return withDesc(new Bacon.Desc(this, "bufferWithTime", [delay]), this.bufferWithTimeOrCount(delay, Number.MAX_VALUE));
	  };

	  Bacon.EventStream.prototype.bufferWithCount = function(count) {
	    return withDesc(new Bacon.Desc(this, "bufferWithCount", [count]), this.bufferWithTimeOrCount(void 0, count));
	  };

	  Bacon.EventStream.prototype.bufferWithTimeOrCount = function(delay, count) {
	    var flushOrSchedule;
	    flushOrSchedule = function(buffer) {
	      if (buffer.values.length === count) {
	        return buffer.flush();
	      } else if (delay !== void 0) {
	        return buffer.schedule();
	      }
	    };
	    return withDesc(new Bacon.Desc(this, "bufferWithTimeOrCount", [delay, count]), this.buffer(delay, flushOrSchedule, flushOrSchedule));
	  };

	  Bacon.EventStream.prototype.buffer = function(delay, onInput, onFlush) {
	    var buffer, delayMs, reply;
	    if (onInput == null) {
	      onInput = nop;
	    }
	    if (onFlush == null) {
	      onFlush = nop;
	    }
	    buffer = {
	      scheduled: null,
	      end: void 0,
	      values: [],
	      flush: function() {
	        var reply, valuesToPush;
	        if (this.scheduled) {
	          Bacon.scheduler.clearTimeout(this.scheduled);
	          this.scheduled = null;
	        }
	        if (this.values.length > 0) {
	          valuesToPush = this.values;
	          this.values = [];
	          reply = this.push(nextEvent(valuesToPush));
	          if (this.end != null) {
	            return this.push(this.end);
	          } else if (reply !== Bacon.noMore) {
	            return onFlush(this);
	          }
	        } else {
	          if (this.end != null) {
	            return this.push(this.end);
	          }
	        }
	      },
	      schedule: function() {
	        if (!this.scheduled) {
	          return this.scheduled = delay((function(_this) {
	            return function() {
	              return _this.flush();
	            };
	          })(this));
	        }
	      }
	    };
	    reply = Bacon.more;
	    if (!_.isFunction(delay)) {
	      delayMs = delay;
	      delay = function(f) {
	        return Bacon.scheduler.setTimeout(f, delayMs);
	      };
	    }
	    return withDesc(new Bacon.Desc(this, "buffer", []), this.withHandler(function(event) {
	      buffer.push = (function(_this) {
	        return function(event) {
	          return _this.push(event);
	        };
	      })(this);
	      if (event.isError()) {
	        reply = this.push(event);
	      } else if (event.isEnd()) {
	        buffer.end = event;
	        if (!buffer.scheduled) {
	          buffer.flush();
	        }
	      } else {
	        buffer.values.push(event.value());
	        onInput(buffer);
	      }
	      return reply;
	    }));
	  };

	  Bacon.Observable.prototype.filter = function() {
	    var args, f;
	    f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    assertObservableIsProperty(f);
	    return convertArgsToFunction(this, f, args, function(f) {
	      return withDesc(new Bacon.Desc(this, "filter", [f]), this.withHandler(function(event) {
	        if (event.filter(f)) {
	          return this.push(event);
	        } else {
	          return Bacon.more;
	        }
	      }));
	    });
	  };

	  Bacon.once = function(value) {
	    return new EventStream(new Desc(Bacon, "once", [value]), function(sink) {
	      sink(toEvent(value));
	      sink(endEvent());
	      return nop;
	    });
	  };

	  Bacon.EventStream.prototype.concat = function(right) {
	    var left;
	    left = this;
	    return new EventStream(new Bacon.Desc(left, "concat", [right]), function(sink) {
	      var unsubLeft, unsubRight;
	      unsubRight = nop;
	      unsubLeft = left.dispatcher.subscribe(function(e) {
	        if (e.isEnd()) {
	          return unsubRight = right.dispatcher.subscribe(sink);
	        } else {
	          return sink(e);
	        }
	      });
	      return function() {
	        unsubLeft();
	        return unsubRight();
	      };
	    });
	  };

	  Bacon.Observable.prototype.flatMap = function() {
	    return flatMap_(this, makeSpawner(arguments));
	  };

	  Bacon.Observable.prototype.flatMapFirst = function() {
	    return flatMap_(this, makeSpawner(arguments), true);
	  };

	  flatMap_ = function(root, f, firstOnly, limit) {
	    var childDeps, result, rootDep;
	    rootDep = [root];
	    childDeps = [];
	    result = new EventStream(new Bacon.Desc(root, "flatMap" + (firstOnly ? "First" : ""), [f]), function(sink) {
	      var checkEnd, checkQueue, composite, queue, spawn;
	      composite = new CompositeUnsubscribe();
	      queue = [];
	      spawn = function(event) {
	        var child;
	        child = makeObservable(f(event.value()));
	        childDeps.push(child);
	        return composite.add(function(unsubAll, unsubMe) {
	          return child.dispatcher.subscribe(function(event) {
	            var reply;
	            if (event.isEnd()) {
	              _.remove(child, childDeps);
	              checkQueue();
	              checkEnd(unsubMe);
	              return Bacon.noMore;
	            } else {
	              if (event instanceof Initial) {
	                event = event.toNext();
	              }
	              reply = sink(event);
	              if (reply === Bacon.noMore) {
	                unsubAll();
	              }
	              return reply;
	            }
	          });
	        });
	      };
	      checkQueue = function() {
	        var event;
	        event = queue.shift();
	        if (event) {
	          return spawn(event);
	        }
	      };
	      checkEnd = function(unsub) {
	        unsub();
	        if (composite.empty()) {
	          return sink(endEvent());
	        }
	      };
	      composite.add(function(__, unsubRoot) {
	        return root.dispatcher.subscribe(function(event) {
	          if (event.isEnd()) {
	            return checkEnd(unsubRoot);
	          } else if (event.isError()) {
	            return sink(event);
	          } else if (firstOnly && composite.count() > 1) {
	            return Bacon.more;
	          } else {
	            if (composite.unsubscribed) {
	              return Bacon.noMore;
	            }
	            if (limit && composite.count() > limit) {
	              return queue.push(event);
	            } else {
	              return spawn(event);
	            }
	          }
	        });
	      });
	      return composite.unsubscribe;
	    });
	    result.internalDeps = function() {
	      if (childDeps.length) {
	        return rootDep.concat(childDeps);
	      } else {
	        return rootDep;
	      }
	    };
	    return result;
	  };

	  makeSpawner = function(args) {
	    if (args.length === 1 && isObservable(args[0])) {
	      return _.always(args[0]);
	    } else {
	      return makeFunctionArgs(args);
	    }
	  };

	  makeObservable = function(x) {
	    if (isObservable(x)) {
	      return x;
	    } else {
	      return Bacon.once(x);
	    }
	  };

	  Bacon.Observable.prototype.flatMapWithConcurrencyLimit = function() {
	    var args, limit;
	    limit = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    return withDesc(new Bacon.Desc(this, "flatMapWithConcurrencyLimit", [limit].concat(slice.call(args))), flatMap_(this, makeSpawner(args), false, limit));
	  };

	  Bacon.Observable.prototype.flatMapConcat = function() {
	    return withDesc(new Bacon.Desc(this, "flatMapConcat", Array.prototype.slice.call(arguments, 0)), this.flatMapWithConcurrencyLimit.apply(this, [1].concat(slice.call(arguments))));
	  };

	  Bacon.later = function(delay, value) {
	    return withDesc(new Bacon.Desc(Bacon, "later", [delay, value]), Bacon.fromBinder(function(sink) {
	      var id, sender;
	      sender = function() {
	        return sink([value, endEvent()]);
	      };
	      id = Bacon.scheduler.setTimeout(sender, delay);
	      return function() {
	        return Bacon.scheduler.clearTimeout(id);
	      };
	    }));
	  };

	  Bacon.Observable.prototype.bufferingThrottle = function(minimumInterval) {
	    return withDesc(new Bacon.Desc(this, "bufferingThrottle", [minimumInterval]), this.flatMapConcat(function(x) {
	      return Bacon.once(x).concat(Bacon.later(minimumInterval).filter(false));
	    }));
	  };

	  Bacon.Property.prototype.bufferingThrottle = function() {
	    return Bacon.Observable.prototype.bufferingThrottle.apply(this, arguments).toProperty();
	  };

	  Bus = (function(superClass) {
	    extend(Bus, superClass);

	    function Bus() {
	      this.guardedSink = bind(this.guardedSink, this);
	      this.subscribeAll = bind(this.subscribeAll, this);
	      this.unsubAll = bind(this.unsubAll, this);
	      this.sink = void 0;
	      this.subscriptions = [];
	      this.ended = false;
	      Bus.__super__.constructor.call(this, new Bacon.Desc(Bacon, "Bus", []), this.subscribeAll);
	    }

	    Bus.prototype.unsubAll = function() {
	      var j, len1, ref, sub;
	      ref = this.subscriptions;
	      for (j = 0, len1 = ref.length; j < len1; j++) {
	        sub = ref[j];
	        if (typeof sub.unsub === "function") {
	          sub.unsub();
	        }
	      }
	      return void 0;
	    };

	    Bus.prototype.subscribeAll = function(newSink) {
	      var j, len1, ref, subscription;
	      if (this.ended) {
	        newSink(endEvent());
	      } else {
	        this.sink = newSink;
	        ref = cloneArray(this.subscriptions);
	        for (j = 0, len1 = ref.length; j < len1; j++) {
	          subscription = ref[j];
	          this.subscribeInput(subscription);
	        }
	      }
	      return this.unsubAll;
	    };

	    Bus.prototype.guardedSink = function(input) {
	      return (function(_this) {
	        return function(event) {
	          if (event.isEnd()) {
	            _this.unsubscribeInput(input);
	            return Bacon.noMore;
	          } else {
	            return _this.sink(event);
	          }
	        };
	      })(this);
	    };

	    Bus.prototype.subscribeInput = function(subscription) {
	      return subscription.unsub = subscription.input.dispatcher.subscribe(this.guardedSink(subscription.input));
	    };

	    Bus.prototype.unsubscribeInput = function(input) {
	      var i, j, len1, ref, sub;
	      ref = this.subscriptions;
	      for (i = j = 0, len1 = ref.length; j < len1; i = ++j) {
	        sub = ref[i];
	        if (sub.input === input) {
	          if (typeof sub.unsub === "function") {
	            sub.unsub();
	          }
	          this.subscriptions.splice(i, 1);
	          return;
	        }
	      }
	    };

	    Bus.prototype.plug = function(input) {
	      var sub;
	      assertObservable(input);
	      if (this.ended) {
	        return;
	      }
	      sub = {
	        input: input
	      };
	      this.subscriptions.push(sub);
	      if ((this.sink != null)) {
	        this.subscribeInput(sub);
	      }
	      return (function(_this) {
	        return function() {
	          return _this.unsubscribeInput(input);
	        };
	      })(this);
	    };

	    Bus.prototype.end = function() {
	      this.ended = true;
	      this.unsubAll();
	      return typeof this.sink === "function" ? this.sink(endEvent()) : void 0;
	    };

	    Bus.prototype.push = function(value) {
	      if (!this.ended) {
	        return typeof this.sink === "function" ? this.sink(nextEvent(value)) : void 0;
	      }
	    };

	    Bus.prototype.error = function(error) {
	      return typeof this.sink === "function" ? this.sink(new Error(error)) : void 0;
	    };

	    return Bus;

	  })(EventStream);

	  Bacon.Bus = Bus;

	  liftCallback = function(desc, wrapped) {
	    return withMethodCallSupport(function() {
	      var args, f, stream;
	      f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	      stream = partiallyApplied(wrapped, [
	        function(values, callback) {
	          return f.apply(null, slice.call(values).concat([callback]));
	        }
	      ]);
	      return withDesc(new Bacon.Desc(Bacon, desc, [f].concat(slice.call(args))), Bacon.combineAsArray(args).flatMap(stream));
	    });
	  };

	  Bacon.fromCallback = liftCallback("fromCallback", function() {
	    var args, f;
	    f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    return Bacon.fromBinder(function(handler) {
	      makeFunction(f, args)(handler);
	      return nop;
	    }, (function(value) {
	      return [value, endEvent()];
	    }));
	  });

	  Bacon.fromNodeCallback = liftCallback("fromNodeCallback", function() {
	    var args, f;
	    f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    return Bacon.fromBinder(function(handler) {
	      makeFunction(f, args)(handler);
	      return nop;
	    }, function(error, value) {
	      if (error) {
	        return [new Error(error), endEvent()];
	      }
	      return [value, endEvent()];
	    });
	  });

	  Bacon.combineTemplate = function(template) {
	    var applyStreamValue, combinator, compile, compileTemplate, constantValue, current, funcs, mkContext, pushContext, setValue, streams;
	    funcs = [];
	    streams = [];
	    current = function(ctxStack) {
	      return ctxStack[ctxStack.length - 1];
	    };
	    setValue = function(ctxStack, key, value) {
	      return current(ctxStack)[key] = value;
	    };
	    applyStreamValue = function(key, index) {
	      return function(ctxStack, values) {
	        return setValue(ctxStack, key, values[index]);
	      };
	    };
	    constantValue = function(key, value) {
	      return function(ctxStack) {
	        return setValue(ctxStack, key, value);
	      };
	    };
	    mkContext = function(template) {
	      if (isArray(template)) {
	        return [];
	      } else {
	        return {};
	      }
	    };
	    pushContext = function(key, value) {
	      return function(ctxStack) {
	        var newContext;
	        newContext = mkContext(value);
	        setValue(ctxStack, key, newContext);
	        return ctxStack.push(newContext);
	      };
	    };
	    compile = function(key, value) {
	      var popContext;
	      if (isObservable(value)) {
	        streams.push(value);
	        return funcs.push(applyStreamValue(key, streams.length - 1));
	      } else if (value === Object(value) && typeof value !== "function" && !(value instanceof RegExp) && !(value instanceof Date)) {
	        popContext = function(ctxStack) {
	          return ctxStack.pop();
	        };
	        funcs.push(pushContext(key, value));
	        compileTemplate(value);
	        return funcs.push(popContext);
	      } else {
	        return funcs.push(constantValue(key, value));
	      }
	    };
	    compileTemplate = function(template) {
	      return _.each(template, compile);
	    };
	    compileTemplate(template);
	    combinator = function(values) {
	      var ctxStack, f, j, len1, rootContext;
	      rootContext = mkContext(template);
	      ctxStack = [rootContext];
	      for (j = 0, len1 = funcs.length; j < len1; j++) {
	        f = funcs[j];
	        f(ctxStack, values);
	      }
	      return rootContext;
	    };
	    return withDesc(new Bacon.Desc(Bacon, "combineTemplate", [template]), Bacon.combineAsArray(streams).map(combinator));
	  };

	  addPropertyInitValueToStream = function(property, stream) {
	    var justInitValue;
	    justInitValue = new EventStream(describe(property, "justInitValue"), function(sink) {
	      var unsub, value;
	      value = void 0;
	      unsub = property.dispatcher.subscribe(function(event) {
	        if (!event.isEnd()) {
	          value = event;
	        }
	        return Bacon.noMore;
	      });
	      UpdateBarrier.whenDoneWith(justInitValue, function() {
	        if (value != null) {
	          sink(value);
	        }
	        return sink(endEvent());
	      });
	      return unsub;
	    });
	    return justInitValue.concat(stream).toProperty();
	  };

	  Bacon.Observable.prototype.mapEnd = function() {
	    var f;
	    f = makeFunctionArgs(arguments);
	    return withDesc(new Bacon.Desc(this, "mapEnd", [f]), this.withHandler(function(event) {
	      if (event.isEnd()) {
	        this.push(nextEvent(f(event)));
	        this.push(endEvent());
	        return Bacon.noMore;
	      } else {
	        return this.push(event);
	      }
	    }));
	  };

	  Bacon.Observable.prototype.skipErrors = function() {
	    return withDesc(new Bacon.Desc(this, "skipErrors", []), this.withHandler(function(event) {
	      if (event.isError()) {
	        return Bacon.more;
	      } else {
	        return this.push(event);
	      }
	    }));
	  };

	  Bacon.EventStream.prototype.takeUntil = function(stopper) {
	    var endMarker;
	    endMarker = {};
	    return withDesc(new Bacon.Desc(this, "takeUntil", [stopper]), Bacon.groupSimultaneous(this.mapEnd(endMarker), stopper.skipErrors()).withHandler(function(event) {
	      var data, j, len1, ref, reply, value;
	      if (!event.hasValue()) {
	        return this.push(event);
	      } else {
	        ref = event.value(), data = ref[0], stopper = ref[1];
	        if (stopper.length) {
	          return this.push(endEvent());
	        } else {
	          reply = Bacon.more;
	          for (j = 0, len1 = data.length; j < len1; j++) {
	            value = data[j];
	            if (value === endMarker) {
	              reply = this.push(endEvent());
	            } else {
	              reply = this.push(nextEvent(value));
	            }
	          }
	          return reply;
	        }
	      }
	    }));
	  };

	  Bacon.Property.prototype.takeUntil = function(stopper) {
	    var changes;
	    changes = this.changes().takeUntil(stopper);
	    return withDesc(new Bacon.Desc(this, "takeUntil", [stopper]), addPropertyInitValueToStream(this, changes));
	  };

	  Bacon.Observable.prototype.flatMapLatest = function() {
	    var f, stream;
	    f = makeSpawner(arguments);
	    stream = this.toEventStream();
	    return withDesc(new Bacon.Desc(this, "flatMapLatest", [f]), stream.flatMap(function(value) {
	      return makeObservable(f(value)).takeUntil(stream);
	    }));
	  };

	  Bacon.Property.prototype.delayChanges = function(desc, f) {
	    return withDesc(desc, addPropertyInitValueToStream(this, f(this.changes())));
	  };

	  Bacon.EventStream.prototype.delay = function(delay) {
	    return withDesc(new Bacon.Desc(this, "delay", [delay]), this.flatMap(function(value) {
	      return Bacon.later(delay, value);
	    }));
	  };

	  Bacon.Property.prototype.delay = function(delay) {
	    return this.delayChanges(new Bacon.Desc(this, "delay", [delay]), function(changes) {
	      return changes.delay(delay);
	    });
	  };

	  Bacon.EventStream.prototype.debounce = function(delay) {
	    return withDesc(new Bacon.Desc(this, "debounce", [delay]), this.flatMapLatest(function(value) {
	      return Bacon.later(delay, value);
	    }));
	  };

	  Bacon.Property.prototype.debounce = function(delay) {
	    return this.delayChanges(new Bacon.Desc(this, "debounce", [delay]), function(changes) {
	      return changes.debounce(delay);
	    });
	  };

	  Bacon.EventStream.prototype.debounceImmediate = function(delay) {
	    return withDesc(new Bacon.Desc(this, "debounceImmediate", [delay]), this.flatMapFirst(function(value) {
	      return Bacon.once(value).concat(Bacon.later(delay).filter(false));
	    }));
	  };

	  Bacon.Observable.prototype.decode = function(cases) {
	    return withDesc(new Bacon.Desc(this, "decode", [cases]), this.combine(Bacon.combineTemplate(cases), function(key, values) {
	      return values[key];
	    }));
	  };

	  Bacon.Observable.prototype.scan = function(seed, f) {
	    var acc, initHandled, resultProperty, subscribe;
	    f = toCombinator(f);
	    acc = toOption(seed);
	    initHandled = false;
	    subscribe = (function(_this) {
	      return function(sink) {
	        var initSent, reply, sendInit, unsub;
	        initSent = false;
	        unsub = nop;
	        reply = Bacon.more;
	        sendInit = function() {
	          if (!initSent) {
	            return acc.forEach(function(value) {
	              initSent = initHandled = true;
	              reply = sink(new Initial(function() {
	                return value;
	              }));
	              if (reply === Bacon.noMore) {
	                unsub();
	                return unsub = nop;
	              }
	            });
	          }
	        };
	        unsub = _this.dispatcher.subscribe(function(event) {
	          var next, prev;
	          if (event.hasValue()) {
	            if (initHandled && event.isInitial()) {
	              return Bacon.more;
	            } else {
	              if (!event.isInitial()) {
	                sendInit();
	              }
	              initSent = initHandled = true;
	              prev = acc.getOrElse(void 0);
	              next = f(prev, event.value());
	              acc = new Some(next);
	              return sink(event.apply(function() {
	                return next;
	              }));
	            }
	          } else {
	            if (event.isEnd()) {
	              reply = sendInit();
	            }
	            if (reply !== Bacon.noMore) {
	              return sink(event);
	            }
	          }
	        });
	        UpdateBarrier.whenDoneWith(resultProperty, sendInit);
	        return unsub;
	      };
	    })(this);
	    return resultProperty = new Property(new Bacon.Desc(this, "scan", [seed, f]), subscribe);
	  };

	  Bacon.Observable.prototype.diff = function(start, f) {
	    f = toCombinator(f);
	    return withDesc(new Bacon.Desc(this, "diff", [start, f]), this.scan([start], function(prevTuple, next) {
	      return [next, f(prevTuple[0], next)];
	    }).filter(function(tuple) {
	      return tuple.length === 2;
	    }).map(function(tuple) {
	      return tuple[1];
	    }));
	  };

	  Bacon.Observable.prototype.doAction = function() {
	    var f;
	    f = makeFunctionArgs(arguments);
	    return withDesc(new Bacon.Desc(this, "doAction", [f]), this.withHandler(function(event) {
	      if (event.hasValue()) {
	        f(event.value());
	      }
	      return this.push(event);
	    }));
	  };

	  Bacon.Observable.prototype.doError = function() {
	    var f;
	    f = makeFunctionArgs(arguments);
	    return withDesc(new Bacon.Desc(this, "doError", [f]), this.withHandler(function(event) {
	      if (event.isError()) {
	        f(event.error);
	      }
	      return this.push(event);
	    }));
	  };

	  Bacon.Observable.prototype.doLog = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return withDesc(new Bacon.Desc(this, "doLog", args), this.withHandler(function(event) {
	      if (typeof console !== "undefined" && console !== null) {
	        if (typeof console.log === "function") {
	          console.log.apply(console, slice.call(args).concat([event.log()]));
	        }
	      }
	      return this.push(event);
	    }));
	  };

	  Bacon.Observable.prototype.endOnError = function() {
	    var args, f;
	    f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    if (f == null) {
	      f = true;
	    }
	    return convertArgsToFunction(this, f, args, function(f) {
	      return withDesc(new Bacon.Desc(this, "endOnError", []), this.withHandler(function(event) {
	        if (event.isError() && f(event.error)) {
	          this.push(event);
	          return this.push(endEvent());
	        } else {
	          return this.push(event);
	        }
	      }));
	    });
	  };

	  Observable.prototype.errors = function() {
	    return withDesc(new Bacon.Desc(this, "errors", []), this.filter(function() {
	      return false;
	    }));
	  };

	  valueAndEnd = (function(value) {
	    return [value, endEvent()];
	  });

	  Bacon.fromPromise = function(promise, abort, eventTransformer) {
	    if (eventTransformer == null) {
	      eventTransformer = valueAndEnd;
	    }
	    return withDesc(new Bacon.Desc(Bacon, "fromPromise", [promise]), Bacon.fromBinder(function(handler) {
	      var ref;
	      if ((ref = promise.then(handler, function(e) {
	        return handler(new Error(e));
	      })) != null) {
	        if (typeof ref.done === "function") {
	          ref.done();
	        }
	      }
	      return function() {
	        if (abort) {
	          return typeof promise.abort === "function" ? promise.abort() : void 0;
	        }
	      };
	    }, eventTransformer));
	  };

	  Bacon.Observable.prototype.mapError = function() {
	    var f;
	    f = makeFunctionArgs(arguments);
	    return withDesc(new Bacon.Desc(this, "mapError", [f]), this.withHandler(function(event) {
	      if (event.isError()) {
	        return this.push(nextEvent(f(event.error)));
	      } else {
	        return this.push(event);
	      }
	    }));
	  };

	  Bacon.Observable.prototype.flatMapError = function(fn) {
	    return withDesc(new Bacon.Desc(this, "flatMapError", [fn]), this.mapError(function(err) {
	      return new Error(err);
	    }).flatMap(function(x) {
	      if (x instanceof Error) {
	        return fn(x.error);
	      } else {
	        return Bacon.once(x);
	      }
	    }));
	  };

	  Bacon.EventStream.prototype.sampledBy = function(sampler, combinator) {
	    return withDesc(new Bacon.Desc(this, "sampledBy", [sampler, combinator]), this.toProperty().sampledBy(sampler, combinator));
	  };

	  Bacon.Property.prototype.sampledBy = function(sampler, combinator) {
	    var lazy, result, samplerSource, stream, thisSource;
	    if (combinator != null) {
	      combinator = toCombinator(combinator);
	    } else {
	      lazy = true;
	      combinator = function(f) {
	        return f.value();
	      };
	    }
	    thisSource = new Source(this, false, lazy);
	    samplerSource = new Source(sampler, true, lazy);
	    stream = Bacon.when([thisSource, samplerSource], combinator);
	    result = sampler instanceof Property ? stream.toProperty() : stream;
	    return withDesc(new Bacon.Desc(this, "sampledBy", [sampler, combinator]), result);
	  };

	  Bacon.Property.prototype.sample = function(interval) {
	    return withDesc(new Bacon.Desc(this, "sample", [interval]), this.sampledBy(Bacon.interval(interval, {})));
	  };

	  Bacon.Observable.prototype.map = function() {
	    var args, p;
	    p = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    if (p instanceof Property) {
	      return p.sampledBy(this, former);
	    } else {
	      return convertArgsToFunction(this, p, args, function(f) {
	        return withDesc(new Bacon.Desc(this, "map", [f]), this.withHandler(function(event) {
	          return this.push(event.fmap(f));
	        }));
	      });
	    }
	  };

	  Bacon.Observable.prototype.fold = function(seed, f) {
	    return withDesc(new Bacon.Desc(this, "fold", [seed, f]), this.scan(seed, f).sampledBy(this.filter(false).mapEnd().toProperty()));
	  };

	  Observable.prototype.reduce = Observable.prototype.fold;

	  Bacon.fromPoll = function(delay, poll) {
	    return withDesc(new Bacon.Desc(Bacon, "fromPoll", [delay, poll]), Bacon.fromBinder((function(handler) {
	      var id;
	      id = Bacon.scheduler.setInterval(handler, delay);
	      return function() {
	        return Bacon.scheduler.clearInterval(id);
	      };
	    }), poll));
	  };

	  Bacon.Observable.prototype.groupBy = function(keyF, limitF) {
	    var src, streams;
	    if (limitF == null) {
	      limitF = Bacon._.id;
	    }
	    streams = {};
	    src = this;
	    return src.filter(function(x) {
	      return !streams[keyF(x)];
	    }).map(function(x) {
	      var data, key, limited, similar;
	      key = keyF(x);
	      similar = src.filter(function(x) {
	        return keyF(x) === key;
	      });
	      data = Bacon.once(x).concat(similar);
	      limited = limitF(data, x).withHandler(function(event) {
	        this.push(event);
	        if (event.isEnd()) {
	          return delete streams[key];
	        }
	      });
	      return streams[key] = limited;
	    });
	  };

	  Bacon.fromArray = function(values) {
	    var i;
	    assertArray(values);
	    if (!values.length) {
	      return withDesc(new Bacon.Desc(Bacon, "fromArray", values), Bacon.never());
	    } else {
	      i = 0;
	      return new EventStream(new Bacon.Desc(Bacon, "fromArray", [values]), function(sink) {
	        var push, pushNeeded, pushing, reply, unsubd;
	        unsubd = false;
	        reply = Bacon.more;
	        pushing = false;
	        pushNeeded = false;
	        push = function() {
	          var value;
	          pushNeeded = true;
	          if (pushing) {
	            return;
	          }
	          pushing = true;
	          while (pushNeeded) {
	            pushNeeded = false;
	            if ((reply !== Bacon.noMore) && !unsubd) {
	              value = values[i++];
	              reply = sink(toEvent(value));
	              if (reply !== Bacon.noMore) {
	                if (i === values.length) {
	                  sink(endEvent());
	                } else {
	                  UpdateBarrier.afterTransaction(push);
	                }
	              }
	            }
	          }
	          return pushing = false;
	        };
	        push();
	        return function() {
	          return unsubd = true;
	        };
	      });
	    }
	  };

	  Bacon.EventStream.prototype.holdWhen = function(valve) {
	    var bufferedValues, onHold, src;
	    onHold = false;
	    bufferedValues = [];
	    src = this;
	    return new EventStream(new Bacon.Desc(this, "holdWhen", [valve]), function(sink) {
	      var composite, endIfBothEnded, subscribed;
	      composite = new CompositeUnsubscribe();
	      subscribed = false;
	      endIfBothEnded = function(unsub) {
	        if (typeof unsub === "function") {
	          unsub();
	        }
	        if (composite.empty() && subscribed) {
	          return sink(endEvent());
	        }
	      };
	      composite.add(function(unsubAll, unsubMe) {
	        return valve.subscribeInternal(function(event) {
	          var j, len1, results, toSend, value;
	          if (event.hasValue()) {
	            onHold = event.value();
	            if (!onHold) {
	              toSend = bufferedValues;
	              bufferedValues = [];
	              results = [];
	              for (j = 0, len1 = toSend.length; j < len1; j++) {
	                value = toSend[j];
	                results.push(sink(nextEvent(value)));
	              }
	              return results;
	            }
	          } else if (event.isEnd()) {
	            return endIfBothEnded(unsubMe);
	          } else {
	            return sink(event);
	          }
	        });
	      });
	      composite.add(function(unsubAll, unsubMe) {
	        return src.subscribeInternal(function(event) {
	          if (onHold && event.hasValue()) {
	            return bufferedValues.push(event.value());
	          } else if (event.isEnd() && bufferedValues.length) {
	            return endIfBothEnded(unsubMe);
	          } else {
	            return sink(event);
	          }
	        });
	      });
	      subscribed = true;
	      endIfBothEnded();
	      return composite.unsubscribe;
	    });
	  };

	  Bacon.interval = function(delay, value) {
	    if (value == null) {
	      value = {};
	    }
	    return withDesc(new Bacon.Desc(Bacon, "interval", [delay, value]), Bacon.fromPoll(delay, function() {
	      return nextEvent(value);
	    }));
	  };

	  Bacon.$ = {};

	  Bacon.$.asEventStream = function(eventName, selector, eventTransformer) {
	    var ref;
	    if (_.isFunction(selector)) {
	      ref = [selector, void 0], eventTransformer = ref[0], selector = ref[1];
	    }
	    return withDesc(new Bacon.Desc(this.selector || this, "asEventStream", [eventName]), Bacon.fromBinder((function(_this) {
	      return function(handler) {
	        _this.on(eventName, selector, handler);
	        return function() {
	          return _this.off(eventName, selector, handler);
	        };
	      };
	    })(this), eventTransformer));
	  };

	  if ((ref = typeof jQuery !== "undefined" && jQuery !== null ? jQuery : typeof Zepto !== "undefined" && Zepto !== null ? Zepto : void 0) != null) {
	    ref.fn.asEventStream = Bacon.$.asEventStream;
	  }

	  Bacon.Observable.prototype.log = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    this.subscribe(function(event) {
	      return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log.apply(console, slice.call(args).concat([event.log()])) : void 0 : void 0;
	    });
	    return this;
	  };

	  Bacon.EventStream.prototype.merge = function(right) {
	    var left;
	    assertEventStream(right);
	    left = this;
	    return withDesc(new Bacon.Desc(left, "merge", [right]), Bacon.mergeAll(this, right));
	  };

	  Bacon.mergeAll = function() {
	    var streams;
	    streams = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    if (isArray(streams[0])) {
	      streams = streams[0];
	    }
	    if (streams.length) {
	      return new EventStream(new Bacon.Desc(Bacon, "mergeAll", streams), function(sink) {
	        var ends, sinks, smartSink;
	        ends = 0;
	        smartSink = function(obs) {
	          return function(unsubBoth) {
	            return obs.dispatcher.subscribe(function(event) {
	              var reply;
	              if (event.isEnd()) {
	                ends++;
	                if (ends === streams.length) {
	                  return sink(endEvent());
	                } else {
	                  return Bacon.more;
	                }
	              } else {
	                reply = sink(event);
	                if (reply === Bacon.noMore) {
	                  unsubBoth();
	                }
	                return reply;
	              }
	            });
	          };
	        };
	        sinks = _.map(smartSink, streams);
	        return new Bacon.CompositeUnsubscribe(sinks).unsubscribe;
	      });
	    } else {
	      return Bacon.never();
	    }
	  };

	  Bacon.repeatedly = function(delay, values) {
	    var index;
	    index = 0;
	    return withDesc(new Bacon.Desc(Bacon, "repeatedly", [delay, values]), Bacon.fromPoll(delay, function() {
	      return values[index++ % values.length];
	    }));
	  };

	  Bacon.repeat = function(generator) {
	    var index;
	    index = 0;
	    return Bacon.fromBinder(function(sink) {
	      var flag, handleEvent, reply, subscribeNext, unsub;
	      flag = false;
	      reply = Bacon.more;
	      unsub = function() {};
	      handleEvent = function(event) {
	        if (event.isEnd()) {
	          if (!flag) {
	            return flag = true;
	          } else {
	            return subscribeNext();
	          }
	        } else {
	          return reply = sink(event);
	        }
	      };
	      subscribeNext = function() {
	        var next;
	        flag = true;
	        while (flag && reply !== Bacon.noMore) {
	          next = generator(index++);
	          flag = false;
	          if (next) {
	            unsub = next.subscribeInternal(handleEvent);
	          } else {
	            sink(endEvent());
	          }
	        }
	        return flag = true;
	      };
	      subscribeNext();
	      return function() {
	        return unsub();
	      };
	    });
	  };

	  Bacon.retry = function(options) {
	    var delay, error, finished, isRetryable, maxRetries, retries, source;
	    if (!_.isFunction(options.source)) {
	      throw new Exception("'source' option has to be a function");
	    }
	    source = options.source;
	    retries = options.retries || 0;
	    maxRetries = options.maxRetries || retries;
	    delay = options.delay || function() {
	      return 0;
	    };
	    isRetryable = options.isRetryable || function() {
	      return true;
	    };
	    finished = false;
	    error = null;
	    return withDesc(new Bacon.Desc(Bacon, "retry", [options]), Bacon.repeat(function() {
	      var context, pause, valueStream;
	      if (finished) {
	        return null;
	      } else {
	        valueStream = function() {
	          return source().endOnError().withHandler(function(event) {
	            if (event.isError()) {
	              error = event;
	              if (isRetryable(error.error) && retries > 0) {

	              } else {
	                finished = true;
	                return this.push(event);
	              }
	            } else {
	              if (event.hasValue()) {
	                error = null;
	                finished = true;
	              }
	              return this.push(event);
	            }
	          });
	        };
	        if (error) {
	          context = {
	            error: error.error,
	            retriesDone: maxRetries - retries
	          };
	          pause = Bacon.later(delay(context)).filter(false);
	          retries = retries - 1;
	          return pause.concat(Bacon.once().flatMap(valueStream));
	        } else {
	          return valueStream();
	        }
	      }
	    }));
	  };

	  Bacon.sequentially = function(delay, values) {
	    var index;
	    index = 0;
	    return withDesc(new Bacon.Desc(Bacon, "sequentially", [delay, values]), Bacon.fromPoll(delay, function() {
	      var value;
	      value = values[index++];
	      if (index < values.length) {
	        return value;
	      } else if (index === values.length) {
	        return [value, endEvent()];
	      } else {
	        return endEvent();
	      }
	    }));
	  };

	  Bacon.Observable.prototype.skip = function(count) {
	    return withDesc(new Bacon.Desc(this, "skip", [count]), this.withHandler(function(event) {
	      if (!event.hasValue()) {
	        return this.push(event);
	      } else if (count > 0) {
	        count--;
	        return Bacon.more;
	      } else {
	        return this.push(event);
	      }
	    }));
	  };

	  Bacon.Observable.prototype.take = function(count) {
	    if (count <= 0) {
	      return Bacon.never();
	    }
	    return withDesc(new Bacon.Desc(this, "take", [count]), this.withHandler(function(event) {
	      if (!event.hasValue()) {
	        return this.push(event);
	      } else {
	        count--;
	        if (count > 0) {
	          return this.push(event);
	        } else {
	          if (count === 0) {
	            this.push(event);
	          }
	          this.push(endEvent());
	          return Bacon.noMore;
	        }
	      }
	    }));
	  };

	  Bacon.EventStream.prototype.skipUntil = function(starter) {
	    var started;
	    started = starter.take(1).map(true).toProperty(false);
	    return withDesc(new Bacon.Desc(this, "skipUntil", [starter]), this.filter(started));
	  };

	  Bacon.EventStream.prototype.skipWhile = function() {
	    var args, f, ok;
	    f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    assertObservableIsProperty(f);
	    ok = false;
	    return convertArgsToFunction(this, f, args, function(f) {
	      return withDesc(new Bacon.Desc(this, "skipWhile", [f]), this.withHandler(function(event) {
	        if (ok || !event.hasValue() || !f(event.value())) {
	          if (event.hasValue()) {
	            ok = true;
	          }
	          return this.push(event);
	        } else {
	          return Bacon.more;
	        }
	      }));
	    });
	  };

	  Bacon.Observable.prototype.slidingWindow = function(n, minValues) {
	    if (minValues == null) {
	      minValues = 0;
	    }
	    return withDesc(new Bacon.Desc(this, "slidingWindow", [n, minValues]), this.scan([], (function(window, value) {
	      return window.concat([value]).slice(-n);
	    })).filter((function(values) {
	      return values.length >= minValues;
	    })));
	  };

	  Bacon.spy = function(spy) {
	    return spys.push(spy);
	  };

	  spys = [];

	  registerObs = function(obs) {
	    var j, len1, spy;
	    if (spys.length) {
	      if (!registerObs.running) {
	        try {
	          registerObs.running = true;
	          for (j = 0, len1 = spys.length; j < len1; j++) {
	            spy = spys[j];
	            spy(obs);
	          }
	        } finally {
	          delete registerObs.running;
	        }
	      }
	    }
	    return void 0;
	  };

	  Bacon.Property.prototype.startWith = function(seed) {
	    return withDesc(new Bacon.Desc(this, "startWith", [seed]), this.scan(seed, function(prev, next) {
	      return next;
	    }));
	  };

	  Bacon.EventStream.prototype.startWith = function(seed) {
	    return withDesc(new Bacon.Desc(this, "startWith", [seed]), Bacon.once(seed).concat(this));
	  };

	  Bacon.Observable.prototype.takeWhile = function() {
	    var args, f;
	    f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    assertObservableIsProperty(f);
	    return convertArgsToFunction(this, f, args, function(f) {
	      return withDesc(new Bacon.Desc(this, "takeWhile", [f]), this.withHandler(function(event) {
	        if (event.filter(f)) {
	          return this.push(event);
	        } else {
	          this.push(endEvent());
	          return Bacon.noMore;
	        }
	      }));
	    });
	  };

	  Bacon.update = function() {
	    var i, initial, lateBindFirst, patterns;
	    initial = arguments[0], patterns = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    lateBindFirst = function(f) {
	      return function() {
	        var args;
	        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	        return function(i) {
	          return f.apply(null, [i].concat(args));
	        };
	      };
	    };
	    i = patterns.length - 1;
	    while (i > 0) {
	      if (!(patterns[i] instanceof Function)) {
	        patterns[i] = (function(x) {
	          return function() {
	            return x;
	          };
	        })(patterns[i]);
	      }
	      patterns[i] = lateBindFirst(patterns[i]);
	      i = i - 2;
	    }
	    return withDesc(new Bacon.Desc(Bacon, "update", [initial].concat(slice.call(patterns))), Bacon.when.apply(Bacon, patterns).scan(initial, (function(x, f) {
	      return f(x);
	    })));
	  };

	  Bacon.zipAsArray = function() {
	    var streams;
	    streams = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    if (isArray(streams[0])) {
	      streams = streams[0];
	    }
	    return withDesc(new Bacon.Desc(Bacon, "zipAsArray", streams), Bacon.zipWith(streams, function() {
	      var xs;
	      xs = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	      return xs;
	    }));
	  };

	  Bacon.zipWith = function() {
	    var f, ref1, streams;
	    f = arguments[0], streams = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    if (!_.isFunction(f)) {
	      ref1 = [f, streams[0]], streams = ref1[0], f = ref1[1];
	    }
	    streams = _.map((function(s) {
	      return s.toEventStream();
	    }), streams);
	    return withDesc(new Bacon.Desc(Bacon, "zipWith", [f].concat(slice.call(streams))), Bacon.when(streams, f));
	  };

	  Bacon.Observable.prototype.zip = function(other, f) {
	    if (f == null) {
	      f = Array;
	    }
	    return withDesc(new Bacon.Desc(this, "zip", [other]), Bacon.zipWith([this, other], f));
	  };

	  

	Bacon.Observable.prototype.first = function () {
	  return withDesc(new Bacon.Desc(this, "first", []), this.take(1));
	};

	Bacon.Observable.prototype.last = function () {
	  var lastEvent;

	  return withDesc(new Bacon.Desc(this, "last", []), this.withHandler(function (event) {
	    if (event.isEnd()) {
	      if (lastEvent) {
	        this.push(lastEvent);
	      }
	      this.push(endEvent());
	      return Bacon.noMore;
	    } else {
	      lastEvent = event;
	    }
	  }));
	};

	Bacon.EventStream.prototype.throttle = function (delay) {
	  return withDesc(new Bacon.Desc(this, "throttle", [delay]), this.bufferWithTime(delay).map(function (values) {
	    return values[values.length - 1];
	  }));
	};

	Bacon.Property.prototype.throttle = function (delay) {
	  return this.delayChanges(new Bacon.Desc(this, "throttle", [delay]), function (changes) {
	    return changes.throttle(delay);
	  });
	};

	Observable.prototype.firstToPromise = function (PromiseCtr) {
	  var _this = this;

	  if (typeof PromiseCtr !== "function") {
	    if (typeof Promise === "function") {
	      PromiseCtr = Promise;
	    } else {
	      throw new Exception("There isn't default Promise, use shim or parameter");
	    }
	  }

	  return new PromiseCtr(function (resolve, reject) {
	    return _this.subscribe(function (event) {
	      if (event.hasValue()) {
	        resolve(event.value());
	      }
	      if (event.isError()) {
	        reject(event.error);
	      }

	      return Bacon.noMore;
	    });
	  });
	};

	Observable.prototype.toPromise = function (PromiseCtr) {
	  return this.last().firstToPromise(PromiseCtr);
	};

	if (("function" !== "undefined" && __webpack_require__(215) !== null) && (__webpack_require__(216) != null)) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return Bacon;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    this.Bacon = Bacon;
	  } else if ((typeof module !== "undefined" && module !== null) && (module.exports != null)) {
	    module.exports = Bacon;
	    Bacon.Bacon = Bacon;
	  } else {
	    this.Bacon = Bacon;
	  }

	}).call(this);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(201)(module)))

/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }

});