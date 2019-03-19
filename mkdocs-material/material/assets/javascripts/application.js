(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/* eslint-disable no-underscore-dangle */
exports.default = /* JSX */{

  /**
   * Create a native DOM node from JSX's intermediate representation
   *
   * @param {string} tag - Tag name
   * @param {?Object} properties - Properties
   * @param {Array<string | number | { __html: string } | Array<HTMLElement>>}
   *   children - Child nodes
   * @return {HTMLElement} Native DOM node
   */
  createElement: function createElement(tag, properties) {
    var el = document.createElement(tag);

    /* Set all properties */
    if (properties) Array.prototype.forEach.call(Object.keys(properties), function (attr) {
      el.setAttribute(attr, properties[attr]);
    });

    /* Iterate child nodes */
    var iterateChildNodes = function iterateChildNodes(nodes) {
      Array.prototype.forEach.call(nodes, function (node) {

        /* Directly append text content */
        if (typeof node === "string" || typeof node === "number") {
          el.textContent += node;

          /* Recurse, if we got an array */
        } else if (Array.isArray(node)) {
          iterateChildNodes(node);

          /* Append raw HTML */
        } else if (typeof node.__html !== "undefined") {
          el.innerHTML += node.__html;

          /* Append regular nodes */
        } else if (node instanceof Node) {
          el.appendChild(node);
        }
      });
    };

    /* Iterate child nodes and return element */

    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    iterateChildNodes(children);
    return el;
  }
};
module.exports = exports.default;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var index = typeof fetch=='function' ? fetch.bind() : function(url, options) {
	options = options || {};
	return new Promise( function (resolve, reject) {
		var request = new XMLHttpRequest();

		request.open(options.method || 'get', url, true);

		for (var i in options.headers) {
			request.setRequestHeader(i, options.headers[i]);
		}

		request.withCredentials = options.credentials=='include';

		request.onload = function () {
			resolve(response());
		};

		request.onerror = reject;

		request.send(options.body || null);

		function response() {
			var keys = [],
				all = [],
				headers = {},
				header;

			request.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (m, key, value) {
				keys.push(key = key.toLowerCase());
				all.push([key, value]);
				header = headers[key];
				headers[key] = header ? (header + "," + value) : value;
			});

			return {
				ok: (request.status/100|0) == 2,		// 200-299
				status: request.status,
				statusText: request.statusText,
				url: request.responseURL,
				clone: response,
				text: function () { return Promise.resolve(request.responseText); },
				json: function () { return Promise.resolve(request.responseText).then(JSON.parse); },
				blob: function () { return Promise.resolve(new Blob([request.response])); },
				headers: {
					keys: function () { return keys; },
					entries: function () { return all; },
					get: function (n) { return headers[n.toLowerCase()]; },
					has: function (n) { return n.toLowerCase() in headers; }
				}
			};
		}
	});
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=unfetch.es.js.map


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Listener = function () {

  /**
   * Generic event listener
   *
   * @constructor
   *
   * @property {(Array<EventTarget>)} els_ - Event targets
   * @property {Object} handler_- Event handlers
   * @property {Array<string>} events_ - Event names
   * @property {Function} update_ - Update handler
   *
   * @param {?(string|EventTarget|NodeList<EventTarget>)} els -
   *   Selector or Event targets
   * @param {(string|Array<string>)} events - Event names
   * @param {(Object|Function)} handler - Handler to be invoked
   */
  function Listener(els, events, handler) {
    var _this = this;

    _classCallCheck(this, Listener);

    this.els_ = Array.prototype.slice.call(typeof els === "string" ? document.querySelectorAll(els) : [].concat(els));

    /* Set handler as function or directly as object */
    this.handler_ = typeof handler === "function" ? { update: handler } : handler;

    /* Initialize event names and update handler */
    this.events_ = [].concat(events);
    this.update_ = function (ev) {
      return _this.handler_.update(ev);
    };
  }

  /**
   * Register listener for all relevant events
   */


  Listener.prototype.listen = function listen() {
    var _this2 = this;

    this.els_.forEach(function (el) {
      _this2.events_.forEach(function (event) {
        el.addEventListener(event, _this2.update_, false);
      });
    });

    /* Execute setup handler, if implemented */
    if (typeof this.handler_.setup === "function") this.handler_.setup();
  };

  /**
   * Unregister listener for all relevant events
   */


  Listener.prototype.unlisten = function unlisten() {
    var _this3 = this;

    this.els_.forEach(function (el) {
      _this3.events_.forEach(function (event) {
        el.removeEventListener(event, _this3.update_);
      });
    });

    /* Execute reset handler, if implemented */
    if (typeof this.handler_.reset === "function") this.handler_.reset();
  };

  return Listener;
}();

exports.default = Listener;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(JSX) {

exports.__esModule = true;
exports.app = undefined;

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

var _promisePolyfill = __webpack_require__(14);

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

var _clipboard = __webpack_require__(19);

var _clipboard2 = _interopRequireDefault(_clipboard);

var _fastclick = __webpack_require__(20);

var _fastclick2 = _interopRequireDefault(_fastclick);

var _Material = __webpack_require__(21);

var _Material2 = _interopRequireDefault(_Material);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

window.Promise = window.Promise || _promisePolyfill2.default;

/* ----------------------------------------------------------------------------
 * Dependencies
 * ------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------
 * Polyfills
 * ------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */

/**
 * Return the meta tag value for the given key
 *
 * @param {string} key - Meta name
 *
 * @return {string} Meta content value
 */
var translate = function translate(key) {
  var meta = document.getElementsByName("lang:" + key)[0];
  if (!(meta instanceof HTMLMetaElement)) throw new ReferenceError();
  return meta.content;
};

/* ----------------------------------------------------------------------------
 * Application
 * ------------------------------------------------------------------------- */

/**
 * Initialize Material for MkDocs
 *
 * @param {Object} config - Configuration
 */
function initialize(config) {
  // eslint-disable-line func-style

  /* Initialize Modernizr and FastClick */
  new _Material2.default.Event.Listener(document, "DOMContentLoaded", function () {
    if (!(document.body instanceof HTMLElement)) throw new ReferenceError();

    /* Attach FastClick to mitigate 300ms delay on touch devices */
    _fastclick2.default.attach(document.body);

    /* Test for iOS */
    Modernizr.addTest("ios", function () {
      return !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
    });

    /* Wrap all data tables for better overflow scrolling */
    var tables = document.querySelectorAll("table:not([class])"); // TODO: this is JSX, we should rename the file
    Array.prototype.forEach.call(tables, function (table) {
      var wrap = JSX.createElement(
        "div",
        { "class": "md-typeset__scrollwrap" },
        JSX.createElement("div", { "class": "md-typeset__table" })
      );
      if (table.nextSibling) {
        table.parentNode.insertBefore(wrap, table.nextSibling);
      } else {
        table.parentNode.appendChild(wrap);
      }
      wrap.children[0].appendChild(table);
    });

    /* Clipboard integration */
    if (_clipboard2.default.isSupported()) {
      var blocks = document.querySelectorAll(".codehilite > pre, pre > code");
      Array.prototype.forEach.call(blocks, function (block, index) {
        var id = "__code_" + index;

        /* Create button with message container */
        var button = JSX.createElement(
          "button",
          { "class": "md-clipboard", title: translate("clipboard.copy"),
            "data-clipboard-target": "#" + id + " pre, #" + id + " code" },
          JSX.createElement("span", { "class": "md-clipboard__message" })
        );

        /* Link to block and insert button */
        var parent = block.parentNode;
        parent.id = id;
        parent.insertBefore(button, block);
      });

      /* Initialize Clipboard listener */
      var copy = new _clipboard2.default(".md-clipboard");

      /* Success handler */
      copy.on("success", function (action) {
        var message = action.trigger.querySelector(".md-clipboard__message");
        if (!(message instanceof HTMLElement)) throw new ReferenceError();

        /* Clear selection and reset debounce logic */
        action.clearSelection();
        if (message.dataset.mdTimer) clearTimeout(parseInt(message.dataset.mdTimer, 10));

        /* Set message indicating success and show it */
        message.classList.add("md-clipboard__message--active");
        message.innerHTML = translate("clipboard.copied");

        /* Hide message after two seconds */
        message.dataset.mdTimer = setTimeout(function () {
          message.classList.remove("md-clipboard__message--active");
          message.dataset.mdTimer = "";
        }, 2000).toString();
      });
    }

    /* Polyfill details/summary functionality */
    if (!Modernizr.details) {
      var _blocks = document.querySelectorAll("details > summary");
      Array.prototype.forEach.call(_blocks, function (summary) {
        summary.addEventListener("click", function (ev) {
          var details = ev.target.parentNode;
          if (details.hasAttribute("open")) {
            details.removeAttribute("open");
          } else {
            details.setAttribute("open", "");
          }
        });
      });
    }

    /* Open details after anchor jump */
    var details = function details() {
      if (document.location.hash) {
        var el = document.getElementById(document.location.hash.substring(1));
        if (!el) return;

        /* Walk up as long as we're not in a details tag */
        var parent = el.parentNode;
        while (parent && !(parent instanceof HTMLDetailsElement)) {
          parent = parent.parentNode;
        } /* If there's a details tag, open it */
        if (parent && !parent.open) {
          parent.open = true;

          /* Force reload, so the viewport repositions */
          var loc = location.hash;
          location.hash = " ";
          location.hash = loc;
        }
      }
    };
    window.addEventListener("hashchange", details);
    details();

    /* Force 1px scroll offset to trigger overflow scrolling */
    if (Modernizr.ios) {
      var scrollable = document.querySelectorAll("[data-md-scrollfix]");
      Array.prototype.forEach.call(scrollable, function (item) {
        item.addEventListener("touchstart", function () {
          var top = item.scrollTop;

          /* We're at the top of the container */
          if (top === 0) {
            item.scrollTop = 1;

            /* We're at the bottom of the container */
          } else if (top + item.offsetHeight === item.scrollHeight) {
            item.scrollTop = top - 1;
          }
        });
      });
    }
  }).listen();

  /* Component: header shadow toggle */
  new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Header.Shadow("[data-md-component=container]", "[data-md-component=header]")).listen();

  /* Component: header title toggle */
  new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Header.Title("[data-md-component=title]", ".md-typeset h1")).listen();

  /* Component: hero visibility toggle */
  if (document.querySelector("[data-md-component=hero]")) new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Tabs.Toggle("[data-md-component=hero]")).listen();

  /* Component: tabs visibility toggle */
  if (document.querySelector("[data-md-component=tabs]")) new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Tabs.Toggle("[data-md-component=tabs]")).listen();

  /* Component: sidebar with navigation */
  new _Material2.default.Event.MatchMedia("(min-width: 1220px)", new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Sidebar.Position("[data-md-component=navigation]", "[data-md-component=header]")));

  /* Component: sidebar with table of contents (missing on 404 page) */
  if (document.querySelector("[data-md-component=toc]")) new _Material2.default.Event.MatchMedia("(min-width: 960px)", new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Sidebar.Position("[data-md-component=toc]", "[data-md-component=header]")));

  /* Component: link blurring for table of contents */
  new _Material2.default.Event.MatchMedia("(min-width: 960px)", new _Material2.default.Event.Listener(window, "scroll", new _Material2.default.Nav.Blur("[data-md-component=toc] [href]")));

  /* Component: collapsible elements for navigation */
  var collapsibles = document.querySelectorAll("[data-md-component=collapsible]");
  Array.prototype.forEach.call(collapsibles, function (collapse) {
    new _Material2.default.Event.MatchMedia("(min-width: 1220px)", new _Material2.default.Event.Listener(collapse.previousElementSibling, "click", new _Material2.default.Nav.Collapse(collapse)));
  });

  /* Component: active pane monitor for iOS scrolling fixes */
  new _Material2.default.Event.MatchMedia("(max-width: 1219px)", new _Material2.default.Event.Listener("[data-md-component=navigation] [data-md-toggle]", "change", new _Material2.default.Nav.Scrolling("[data-md-component=navigation] nav")));

  /* Initialize search, if available */
  if (document.querySelector("[data-md-component=search]")) {

    /* Component: search body lock for mobile */
    new _Material2.default.Event.MatchMedia("(max-width: 959px)", new _Material2.default.Event.Listener("[data-md-toggle=search]", "change", new _Material2.default.Search.Lock("[data-md-toggle=search]")));

    /* Component: search results */
    new _Material2.default.Event.Listener("[data-md-component=query]", ["focus", "keyup", "change"], new _Material2.default.Search.Result("[data-md-component=result]", function () {
      return fetch(config.url.base + "/" + (config.version < "0.17" ? "mkdocs" : "search") + "/search_index.json", {
        credentials: "same-origin"
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.docs.map(function (doc) {
          doc.location = config.url.base + "/" + doc.location;
          return doc;
        });
      });
    })).listen();

    /* Listener: focus input after form reset */
    new _Material2.default.Event.Listener("[data-md-component=reset]", "click", function () {
      setTimeout(function () {
        var query = document.querySelector("[data-md-component=query]");
        if (!(query instanceof HTMLInputElement)) throw new ReferenceError();
        query.focus();
      }, 10);
    }).listen();

    /* Listener: focus input after opening search */
    new _Material2.default.Event.Listener("[data-md-toggle=search]", "change", function (ev) {
      setTimeout(function (toggle) {
        if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
        if (toggle.checked) {
          var query = document.querySelector("[data-md-component=query]");
          if (!(query instanceof HTMLInputElement)) throw new ReferenceError();
          query.focus();
        }
      }, 400, ev.target);
    }).listen();

    /* Listener: open search on focus */
    new _Material2.default.Event.MatchMedia("(min-width: 960px)", new _Material2.default.Event.Listener("[data-md-component=query]", "focus", function () {
      var toggle = document.querySelector("[data-md-toggle=search]");
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (!toggle.checked) {
        toggle.checked = true;
        toggle.dispatchEvent(new CustomEvent("change"));
      }
    }));

    /* Listener: keyboard handlers */ // eslint-disable-next-line complexity
    new _Material2.default.Event.Listener(window, "keydown", function (ev) {
      // TODO: split up into component to reduce complexity
      var toggle = document.querySelector("[data-md-toggle=search]");
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      var query = document.querySelector("[data-md-component=query]");
      if (!(query instanceof HTMLInputElement)) throw new ReferenceError();

      /* Abort if meta key (macOS) or ctrl key (Windows) is pressed */
      if (ev.metaKey || ev.ctrlKey) return;

      /* Search is open */
      if (toggle.checked) {

        /* Enter: prevent form submission */
        if (ev.keyCode === 13) {
          if (query === document.activeElement) {
            ev.preventDefault();

            /* Go to current active/focused link */
            var focus = document.querySelector("[data-md-component=search] [href][data-md-state=active]");
            if (focus instanceof HTMLLinkElement) {
              window.location = focus.getAttribute("href");

              /* Close search */
              toggle.checked = false;
              toggle.dispatchEvent(new CustomEvent("change"));
              query.blur();
            }
          }

          /* Escape or Tab: close search */
        } else if (ev.keyCode === 9 || ev.keyCode === 27) {
          toggle.checked = false;
          toggle.dispatchEvent(new CustomEvent("change"));
          query.blur();

          /* Horizontal arrows and backspace: focus input */
        } else if ([8, 37, 39].indexOf(ev.keyCode) !== -1) {
          if (query !== document.activeElement) query.focus();

          /* Vertical arrows: select previous or next search result */
        } else if ([38, 40].indexOf(ev.keyCode) !== -1) {
          var key = ev.keyCode;

          /* Retrieve all results */
          var links = Array.prototype.slice.call(document.querySelectorAll("[data-md-component=query], [data-md-component=search] [href]"));

          /* Retrieve current active/focused result */
          var _focus = links.find(function (link) {
            if (!(link instanceof HTMLElement)) throw new ReferenceError();
            return link.dataset.mdState === "active";
          });
          if (_focus) _focus.dataset.mdState = "";

          /* Calculate index depending on direction, add length to form ring */
          var index = Math.max(0, (links.indexOf(_focus) + links.length + (key === 38 ? -1 : +1)) % links.length);

          /* Set active state and focus */
          if (links[index]) {
            links[index].dataset.mdState = "active";
            links[index].focus();
          }

          /* Prevent scrolling of page */
          ev.preventDefault();
          ev.stopPropagation();

          /* Return false prevents the cursor position from changing */
          return false;
        }

        /* Search is closed and we're not inside a form */
      } else if (document.activeElement && !document.activeElement.form) {

        /* F/S: Open search if not in input field */
        if (ev.keyCode === 70 || ev.keyCode === 83) {
          query.focus();
          ev.preventDefault();
        }
      }
    }).listen();

    /* Listener: focus query if in search is open and character is typed */
    new _Material2.default.Event.Listener(window, "keypress", function () {
      var toggle = document.querySelector("[data-md-toggle=search]");
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (toggle.checked) {
        var query = document.querySelector("[data-md-component=query]");
        if (!(query instanceof HTMLInputElement)) throw new ReferenceError();
        if (query !== document.activeElement) query.focus();
      }
    }).listen();
  }

  /* Listener: handle tabbing context for better accessibility */
  new _Material2.default.Event.Listener(document.body, "keydown", function (ev) {
    if (ev.keyCode === 9) {
      var labels = document.querySelectorAll("[data-md-component=navigation] .md-nav__link[for]:not([tabindex])");
      Array.prototype.forEach.call(labels, function (label) {
        if (label.offsetHeight) label.tabIndex = 0;
      });
    }
  }).listen();

  /* Listener: reset tabbing behavior */
  new _Material2.default.Event.Listener(document.body, "mousedown", function () {
    var labels = document.querySelectorAll("[data-md-component=navigation] .md-nav__link[tabindex]");
    Array.prototype.forEach.call(labels, function (label) {
      label.removeAttribute("tabIndex");
    });
  }).listen();

  document.body.addEventListener("click", function () {
    if (document.body.dataset.mdState === "tabbing") document.body.dataset.mdState = "";
  });

  /* Listener: close drawer when anchor links are clicked */
  new _Material2.default.Event.MatchMedia("(max-width: 959px)", new _Material2.default.Event.Listener("[data-md-component=navigation] [href^='#']", "click", function () {
    var toggle = document.querySelector("[data-md-toggle=drawer]");
    if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
    if (toggle.checked) {
      toggle.checked = false;
      toggle.dispatchEvent(new CustomEvent("change"));
    }
  }))

  /* Retrieve facts for the given repository type */
  ;(function () {
    var el = document.querySelector("[data-md-source]");
    if (!el) return _promisePolyfill2.default.resolve([]);else if (!(el instanceof HTMLAnchorElement)) throw new ReferenceError();
    switch (el.dataset.mdSource) {
      case "github":
        return new _Material2.default.Source.Adapter.GitHub(el).fetch();
      default:
        return _promisePolyfill2.default.resolve([]);
    }

    /* Render repository information */
  })().then(function (facts) {
    var sources = document.querySelectorAll("[data-md-source]");
    Array.prototype.forEach.call(sources, function (source) {
      new _Material2.default.Source.Repository(source).initialize(facts);
    });
  });
}

/* ----------------------------------------------------------------------------
 * Exports
 * ------------------------------------------------------------------------- */

/* Provide this for downward compatibility for now */
var app = {
  initialize: initialize
};

exports.app = app;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icons/bitbucket.svg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icons/github.svg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icons/gitlab.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

(function() {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    var ce = new window.CustomEvent('test', { cancelable: true });
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
      // IE has problems with .preventDefault() on custom events
      // http://stackoverflow.com/questions/23349191
      throw new Error('Could not prevent default');
    }
  } catch (e) {
    var CustomEvent = function(event, params) {
      var evt, origPrevent;
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };

      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(
        event,
        params.bubbles,
        params.cancelable,
        params.detail
      );
      origPrevent = evt.preventDefault;
      evt.preventDefault = function() {
        origPrevent.call(this);
        try {
          Object.defineProperty(this, 'defaultPrevented', {
            get: function() {
              return true;
            }
          });
        } catch (e) {
          this.defaultPrevented = true;
        }
      };
      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent; // expose definition to window
  }
})();


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

if (!window.fetch) window.fetch = __webpack_require__(2).default || __webpack_require__(2);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__finally__ = __webpack_require__(18);


// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = __WEBPACK_IMPORTED_MODULE_0__finally__["a" /* default */];

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!arr || typeof arr.length === 'undefined')
      throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(values) {
  return new Promise(function(resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  (typeof setImmediate === 'function' &&
    function(fn) {
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Promise);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(15).setImmediate))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(16);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(17)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      return constructor.resolve(callback()).then(function() {
        return constructor.reject(reason);
      });
    }
  );
}

/* harmony default export */ __webpack_exports__["a"] = (finallyConstructor);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ClipboardJS"] = factory();
	else
		root["ClipboardJS"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clipboardAction = __webpack_require__(1);

var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

var _tinyEmitter = __webpack_require__(3);

var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

var _goodListener = __webpack_require__(4);

var _goodListener2 = _interopRequireDefault(_goodListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */
var Clipboard = function (_Emitter) {
    _inherits(Clipboard, _Emitter);

    /**
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     * @param {Object} options
     */
    function Clipboard(trigger, options) {
        _classCallCheck(this, Clipboard);

        var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

        _this.resolveOptions(options);
        _this.listenClick(trigger);
        return _this;
    }

    /**
     * Defines if attributes would be resolved using internal setter functions
     * or custom functions that were passed in the constructor.
     * @param {Object} options
     */


    _createClass(Clipboard, [{
        key: 'resolveOptions',
        value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
            this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
            this.text = typeof options.text === 'function' ? options.text : this.defaultText;
            this.container = _typeof(options.container) === 'object' ? options.container : document.body;
        }

        /**
         * Adds a click event listener to the passed trigger.
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         */

    }, {
        key: 'listenClick',
        value: function listenClick(trigger) {
            var _this2 = this;

            this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                return _this2.onClick(e);
            });
        }

        /**
         * Defines a new `ClipboardAction` on each click event.
         * @param {Event} e
         */

    }, {
        key: 'onClick',
        value: function onClick(e) {
            var trigger = e.delegateTarget || e.currentTarget;

            if (this.clipboardAction) {
                this.clipboardAction = null;
            }

            this.clipboardAction = new _clipboardAction2.default({
                action: this.action(trigger),
                target: this.target(trigger),
                text: this.text(trigger),
                container: this.container,
                trigger: trigger,
                emitter: this
            });
        }

        /**
         * Default `action` lookup function.
         * @param {Element} trigger
         */

    }, {
        key: 'defaultAction',
        value: function defaultAction(trigger) {
            return getAttributeValue('action', trigger);
        }

        /**
         * Default `target` lookup function.
         * @param {Element} trigger
         */

    }, {
        key: 'defaultTarget',
        value: function defaultTarget(trigger) {
            var selector = getAttributeValue('target', trigger);

            if (selector) {
                return document.querySelector(selector);
            }
        }

        /**
         * Returns the support of the given action, or all actions if no action is
         * given.
         * @param {String} [action]
         */

    }, {
        key: 'defaultText',


        /**
         * Default `text` lookup function.
         * @param {Element} trigger
         */
        value: function defaultText(trigger) {
            return getAttributeValue('text', trigger);
        }

        /**
         * Destroy lifecycle.
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.listener.destroy();

            if (this.clipboardAction) {
                this.clipboardAction.destroy();
                this.clipboardAction = null;
            }
        }
    }], [{
        key: 'isSupported',
        value: function isSupported() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

            var actions = typeof action === 'string' ? [action] : action;
            var support = !!document.queryCommandSupported;

            actions.forEach(function (action) {
                support = support && !!document.queryCommandSupported(action);
            });

            return support;
        }
    }]);

    return Clipboard;
}(_tinyEmitter2.default);

/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */


function getAttributeValue(suffix, element) {
    var attribute = 'data-clipboard-' + suffix;

    if (!element.hasAttribute(attribute)) {
        return;
    }

    return element.getAttribute(attribute);
}

module.exports = Clipboard;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _select = __webpack_require__(2);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Inner class which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 */
var ClipboardAction = function () {
    /**
     * @param {Object} options
     */
    function ClipboardAction(options) {
        _classCallCheck(this, ClipboardAction);

        this.resolveOptions(options);
        this.initSelection();
    }

    /**
     * Defines base properties passed from constructor.
     * @param {Object} options
     */


    _createClass(ClipboardAction, [{
        key: 'resolveOptions',
        value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.action = options.action;
            this.container = options.container;
            this.emitter = options.emitter;
            this.target = options.target;
            this.text = options.text;
            this.trigger = options.trigger;

            this.selectedText = '';
        }

        /**
         * Decides which selection strategy is going to be applied based
         * on the existence of `text` and `target` properties.
         */

    }, {
        key: 'initSelection',
        value: function initSelection() {
            if (this.text) {
                this.selectFake();
            } else if (this.target) {
                this.selectTarget();
            }
        }

        /**
         * Creates a fake textarea element, sets its value from `text` property,
         * and makes a selection on it.
         */

    }, {
        key: 'selectFake',
        value: function selectFake() {
            var _this = this;

            var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

            this.removeFake();

            this.fakeHandlerCallback = function () {
                return _this.removeFake();
            };
            this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

            this.fakeElem = document.createElement('textarea');
            // Prevent zooming on iOS
            this.fakeElem.style.fontSize = '12pt';
            // Reset box model
            this.fakeElem.style.border = '0';
            this.fakeElem.style.padding = '0';
            this.fakeElem.style.margin = '0';
            // Move element out of screen horizontally
            this.fakeElem.style.position = 'absolute';
            this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
            // Move element to the same position vertically
            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
            this.fakeElem.style.top = yPosition + 'px';

            this.fakeElem.setAttribute('readonly', '');
            this.fakeElem.value = this.text;

            this.container.appendChild(this.fakeElem);

            this.selectedText = (0, _select2.default)(this.fakeElem);
            this.copyText();
        }

        /**
         * Only removes the fake element after another click event, that way
         * a user can hit `Ctrl+C` to copy because selection still exists.
         */

    }, {
        key: 'removeFake',
        value: function removeFake() {
            if (this.fakeHandler) {
                this.container.removeEventListener('click', this.fakeHandlerCallback);
                this.fakeHandler = null;
                this.fakeHandlerCallback = null;
            }

            if (this.fakeElem) {
                this.container.removeChild(this.fakeElem);
                this.fakeElem = null;
            }
        }

        /**
         * Selects the content from element passed on `target` property.
         */

    }, {
        key: 'selectTarget',
        value: function selectTarget() {
            this.selectedText = (0, _select2.default)(this.target);
            this.copyText();
        }

        /**
         * Executes the copy operation based on the current selection.
         */

    }, {
        key: 'copyText',
        value: function copyText() {
            var succeeded = void 0;

            try {
                succeeded = document.execCommand(this.action);
            } catch (err) {
                succeeded = false;
            }

            this.handleResult(succeeded);
        }

        /**
         * Fires an event based on the copy operation result.
         * @param {Boolean} succeeded
         */

    }, {
        key: 'handleResult',
        value: function handleResult(succeeded) {
            this.emitter.emit(succeeded ? 'success' : 'error', {
                action: this.action,
                text: this.selectedText,
                trigger: this.trigger,
                clearSelection: this.clearSelection.bind(this)
            });
        }

        /**
         * Moves focus away from `target` and back to the trigger, removes current selection.
         */

    }, {
        key: 'clearSelection',
        value: function clearSelection() {
            if (this.trigger) {
                this.trigger.focus();
            }

            window.getSelection().removeAllRanges();
        }

        /**
         * Sets the `action` to be performed which can be either 'copy' or 'cut'.
         * @param {String} action
         */

    }, {
        key: 'destroy',


        /**
         * Destroy lifecycle.
         */
        value: function destroy() {
            this.removeFake();
        }
    }, {
        key: 'action',
        set: function set() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

            this._action = action;

            if (this._action !== 'copy' && this._action !== 'cut') {
                throw new Error('Invalid "action" value, use either "copy" or "cut"');
            }
        }

        /**
         * Gets the `action` property.
         * @return {String}
         */
        ,
        get: function get() {
            return this._action;
        }

        /**
         * Sets the `target` property using an element
         * that will be have its content copied.
         * @param {Element} target
         */

    }, {
        key: 'target',
        set: function set(target) {
            if (target !== undefined) {
                if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                    if (this.action === 'copy' && target.hasAttribute('disabled')) {
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    }

                    if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                    }

                    this._target = target;
                } else {
                    throw new Error('Invalid "target" value, use a valid Element');
                }
            }
        }

        /**
         * Gets the `target` property.
         * @return {String|HTMLElement}
         */
        ,
        get: function get() {
            return this._target;
        }
    }]);

    return ClipboardAction;
}();

module.exports = ClipboardAction;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(5);
var delegate = __webpack_require__(6);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(7);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ })
/******/ ]);
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (true) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return FastClick;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Event = __webpack_require__(22);

var _Event2 = _interopRequireDefault(_Event);

var _Header = __webpack_require__(24);

var _Header2 = _interopRequireDefault(_Header);

var _Nav = __webpack_require__(27);

var _Nav2 = _interopRequireDefault(_Nav);

var _Search = __webpack_require__(31);

var _Search2 = _interopRequireDefault(_Search);

var _Sidebar = __webpack_require__(37);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Source = __webpack_require__(39);

var _Source2 = _interopRequireDefault(_Source);

var _Tabs = __webpack_require__(45);

var _Tabs2 = _interopRequireDefault(_Tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Event: _Event2.default,
  Header: _Header2.default,
  Nav: _Nav2.default,
  Search: _Search2.default,
  Sidebar: _Sidebar2.default,
  Source: _Source2.default,
  Tabs: _Tabs2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Listener = __webpack_require__(3);

var _Listener2 = _interopRequireDefault(_Listener);

var _MatchMedia = __webpack_require__(23);

var _MatchMedia2 = _interopRequireDefault(_MatchMedia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Listener: _Listener2.default,
  MatchMedia: _MatchMedia2.default
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Listener = __webpack_require__(3);

var _Listener2 = _interopRequireDefault(_Listener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                           *
                                                                                                                                                           * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                           * of this software and associated documentation files (the "Software"), to
                                                                                                                                                           * deal in the Software without restriction, including without limitation the
                                                                                                                                                           * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                           * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                           * furnished to do so, subject to the following conditions:
                                                                                                                                                           *
                                                                                                                                                           * The above copyright notice and this permission notice shall be included in
                                                                                                                                                           * all copies or substantial portions of the Software.
                                                                                                                                                           *
                                                                                                                                                           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                           * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                           * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                           * IN THE SOFTWARE.
                                                                                                                                                           */

// eslint-disable-line no-unused-vars

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var MatchMedia =

/**
 * Media query listener
 *
 * This class listens for state changes of media queries and automatically
 * switches the given listeners on or off.
 *
 * @constructor
 *
 * @property {Function} handler_ - Media query event handler
 *
 * @param {string} query - Media query to test for
 * @param {Listener} listener - Event listener
 */
function MatchMedia(query, listener) {
  _classCallCheck(this, MatchMedia);

  this.handler_ = function (mq) {
    if (mq.matches) listener.listen();else listener.unlisten();
  };

  /* Initialize media query listener */
  var media = window.matchMedia(query);
  media.addListener(this.handler_);

  /* Always check at initialization */
  this.handler_(media);
};

exports.default = MatchMedia;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Shadow = __webpack_require__(25);

var _Shadow2 = _interopRequireDefault(_Shadow);

var _Title = __webpack_require__(26);

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Shadow: _Shadow2.default,
  Title: _Title2.default
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Shadow = function () {

  /**
   * Show or hide header shadow depending on page y-offset
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Content container
   * @property {HTMLElement} header_ - Header
   * @property {number} height_ - Offset height of previous nodes
   * @property {boolean} active_ - Header shadow state
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(string|HTMLElement)} header - Selector or HTML element
   */
  function Shadow(el, header) {
    _classCallCheck(this, Shadow);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement) || !(ref.parentNode instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref.parentNode;

    /* Retrieve header */
    ref = typeof header === "string" ? document.querySelector(header) : header;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.header_ = ref;

    /* Initialize height and state */
    this.height_ = 0;
    this.active_ = false;
  }

  /**
   * Calculate total height of previous nodes
   */


  Shadow.prototype.setup = function setup() {
    var current = this.el_;
    while (current = current.previousElementSibling) {
      if (!(current instanceof HTMLElement)) throw new ReferenceError();
      this.height_ += current.offsetHeight;
    }
    this.update();
  };

  /**
   * Update shadow state
   *
   * @param {Event} ev - Event
   */


  Shadow.prototype.update = function update(ev) {
    if (ev && (ev.type === "resize" || ev.type === "orientationchange")) {
      this.height_ = 0;
      this.setup();
    } else {
      var active = window.pageYOffset >= this.height_;
      if (active !== this.active_) this.header_.dataset.mdState = (this.active_ = active) ? "shadow" : "";
    }
  };

  /**
   * Reset shadow state
   */


  Shadow.prototype.reset = function reset() {
    this.header_.dataset.mdState = "";
    this.height_ = 0;
    this.active_ = false;
  };

  return Shadow;
}();

exports.default = Shadow;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Title = function () {

  /**
   * Swap header title topics when header is scrolled past
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Element
   * @property {HTMLElement} header_ - Header
   * @property {boolean} active_ - Title state
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(string|HTMLHeadingElement)} header - Selector or HTML element
   */
  function Title(el, header) {
    _classCallCheck(this, Title);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve header */
    ref = typeof header === "string" ? document.querySelector(header) : header;
    if (!(ref instanceof HTMLHeadingElement)) throw new ReferenceError();
    this.header_ = ref;

    /* Initialize state */
    this.active_ = false;
  }

  /**
   * Setup title state
   */


  Title.prototype.setup = function setup() {
    var _this = this;

    Array.prototype.forEach.call(this.el_.children, function (node) {
      // TODO: use childNodes here for IE?
      node.style.width = _this.el_.offsetWidth - 20 + "px";
    });
  };

  /**
   * Update title state
   *
   * @param {Event} ev - Event
   */


  Title.prototype.update = function update(ev) {
    var _this2 = this;

    var active = window.pageYOffset >= this.header_.offsetTop;
    if (active !== this.active_) this.el_.dataset.mdState = (this.active_ = active) ? "active" : "";

    /* Hack: induce ellipsis on topics */
    if (ev.type === "resize" || ev.type === "orientationchange") {
      Array.prototype.forEach.call(this.el_.children, function (node) {
        node.style.width = _this2.el_.offsetWidth - 20 + "px";
      });
    }
  };

  /**
   * Reset title state
   */


  Title.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.el_.style.width = "";
    this.active_ = false;
  };

  return Title;
}();

exports.default = Title;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Blur = __webpack_require__(28);

var _Blur2 = _interopRequireDefault(_Blur);

var _Collapse = __webpack_require__(29);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Scrolling = __webpack_require__(30);

var _Scrolling2 = _interopRequireDefault(_Scrolling);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Blur: _Blur2.default,
  Collapse: _Collapse2.default,
  Scrolling: _Scrolling2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Blur = function () {

  /**
   * Blur links within the table of contents above current page y-offset
   *
   * @constructor
   *
   * @property {NodeList<HTMLElement>} els_ - Table of contents links
   * @property {Array<HTMLElement>} anchors_ - Referenced anchor nodes
   * @property {number} index_ - Current link index
   * @property {number} offset_ - Current page y-offset
   * @property {boolean} dir_ - Scroll direction change
   *
   * @param {(string|NodeList<HTMLElement>)} els - Selector or HTML elements
   */
  function Blur(els) {
    _classCallCheck(this, Blur);

    this.els_ = typeof els === "string" ? document.querySelectorAll(els) : els;

    /* Initialize index and page y-offset */
    this.index_ = 0;
    this.offset_ = window.pageYOffset;

    /* Necessary state to correctly reset the index */
    this.dir_ = false;

    /* Index anchor node offsets for fast lookup */
    this.anchors_ = [].reduce.call(this.els_, function (anchors, el) {
      return anchors.concat(document.getElementById(el.hash.substring(1)) || []);
    }, []);
  }

  /**
   * Initialize blur states
   */


  Blur.prototype.setup = function setup() {
    this.update();
  };

  /**
   * Update blur states
   *
   * Deduct the static offset of the header (56px) and sidebar offset (24px),
   * see _permalinks.scss for more information.
   */


  Blur.prototype.update = function update() {
    var offset = window.pageYOffset;
    var dir = this.offset_ - offset < 0;

    /* Hack: reset index if direction changed to catch very fast scrolling,
       because otherwise we would have to register a timer and that sucks */
    if (this.dir_ !== dir) this.index_ = dir ? this.index_ = 0 : this.index_ = this.els_.length - 1;

    /* Exit when there are no anchors */
    if (this.anchors_.length === 0) return;

    /* Scroll direction is down */
    if (this.offset_ <= offset) {
      for (var i = this.index_ + 1; i < this.els_.length; i++) {
        if (this.anchors_[i].offsetTop - (56 + 24) <= offset) {
          if (i > 0) this.els_[i - 1].dataset.mdState = "blur";
          this.index_ = i;
        } else {
          break;
        }
      }

      /* Scroll direction is up */
    } else {
      for (var _i = this.index_; _i >= 0; _i--) {
        if (this.anchors_[_i].offsetTop - (56 + 24) > offset) {
          if (_i > 0) this.els_[_i - 1].dataset.mdState = "";
        } else {
          this.index_ = _i;
          break;
        }
      }
    }

    /* Remember current offset and direction for next iteration */
    this.offset_ = offset;
    this.dir_ = dir;
  };

  /**
   * Reset blur states
   */


  Blur.prototype.reset = function reset() {
    Array.prototype.forEach.call(this.els_, function (el) {
      el.dataset.mdState = "";
    });

    /* Reset index and page y-offset */
    this.index_ = 0;
    this.offset_ = window.pageYOffset;
  };

  return Blur;
}();

exports.default = Blur;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Collapse = function () {

  /**
   * Expand or collapse navigation on toggle
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Navigation list
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Collapse(el) {
    _classCallCheck(this, Collapse);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
  }

  /**
   * Initialize overflow and display for accessibility
   */


  Collapse.prototype.setup = function setup() {
    var current = this.el_.getBoundingClientRect().height;

    /* Hidden links should not be focusable, so hide them when the navigation
       is collapsed and set overflow so the outline is not cut off */
    this.el_.style.display = current ? "block" : "none";
    this.el_.style.overflow = current ? "visible" : "hidden";
  };

  /**
   * Animate expand and collapse smoothly
   *
   * Internet Explorer 11 is very slow at recognizing changes on the dataset
   * which results in the menu not expanding or collapsing properly. THerefore,
   * for reasons of compatibility, the attribute accessors are used.
   */


  Collapse.prototype.update = function update() {
    var _this = this;

    var current = this.el_.getBoundingClientRect().height;

    /* Reset overflow to CSS defaults */
    this.el_.style.display = "block";
    this.el_.style.overflow = "";

    /* Expanded, so collapse */
    if (current) {
      this.el_.style.maxHeight = current + "px";
      requestAnimationFrame(function () {
        _this.el_.setAttribute("data-md-state", "animate");
        _this.el_.style.maxHeight = "0px";
      });

      /* Collapsed, so expand */
    } else {
      this.el_.setAttribute("data-md-state", "expand");
      this.el_.style.maxHeight = "";

      /* Read height and unset pseudo-toggled state */
      var height = this.el_.getBoundingClientRect().height;
      this.el_.removeAttribute("data-md-state");

      /* Set initial state and animate */
      this.el_.style.maxHeight = "0px";
      requestAnimationFrame(function () {
        _this.el_.setAttribute("data-md-state", "animate");
        _this.el_.style.maxHeight = height + "px";
      });
    }

    /* Remove state on end of transition */
    var end = function end(ev) {
      var target = ev.target;
      if (!(target instanceof HTMLElement)) throw new ReferenceError();

      /* Reset height and state */
      target.removeAttribute("data-md-state");
      target.style.maxHeight = "";

      /* Hidden links should not be focusable, so hide them when the navigation
         is collapsed and set overflow so the outline is not cut off */
      target.style.display = current ? "none" : "block";
      target.style.overflow = current ? "hidden" : "visible";

      /* Only fire once, so directly remove event listener */
      target.removeEventListener("transitionend", end);
    };
    this.el_.addEventListener("transitionend", end, false);
  };

  /**
   * Reset height and pseudo-toggled state
   */


  Collapse.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.el_.style.maxHeight = "";
    this.el_.style.display = "";
    this.el_.style.overflow = "";
  };

  return Collapse;
}();

exports.default = Collapse;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Scrolling = function () {

  /**
   * Set overflow scrolling on the current active pane (for iOS)
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Primary navigation
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Scrolling(el) {
    _classCallCheck(this, Scrolling);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
  }

  /**
   * Setup panes
   */


  Scrolling.prototype.setup = function setup() {

    /* Initially set overflow scrolling on main pane */
    var main = this.el_.children[this.el_.children.length - 1];
    main.style.webkitOverflowScrolling = "touch";

    /* Find all toggles and check which one is active */
    var toggles = this.el_.querySelectorAll("[data-md-toggle]");
    Array.prototype.forEach.call(toggles, function (toggle) {
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (toggle.checked) {

        /* Find corresponding navigational pane */
        var pane = toggle.nextElementSibling;
        if (!(pane instanceof HTMLElement)) throw new ReferenceError();
        while (pane.tagName !== "NAV" && pane.nextElementSibling) {
          pane = pane.nextElementSibling;
        } /* Check references */
        if (!(toggle.parentNode instanceof HTMLElement) || !(toggle.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError();

        /* Find current and parent list elements */
        var parent = toggle.parentNode.parentNode;
        var target = pane.children[pane.children.length - 1];

        /* Always reset all lists when transitioning */
        parent.style.webkitOverflowScrolling = "";
        target.style.webkitOverflowScrolling = "touch";
      }
    });
  };

  /**
   * Update active panes
   *
   * @param {Event} ev - Change event
   */


  Scrolling.prototype.update = function update(ev) {
    var target = ev.target;
    if (!(target instanceof HTMLElement)) throw new ReferenceError();

    /* Find corresponding navigational pane */
    var pane = target.nextElementSibling;
    if (!(pane instanceof HTMLElement)) throw new ReferenceError();
    while (pane.tagName !== "NAV" && pane.nextElementSibling) {
      pane = pane.nextElementSibling;
    } /* Check references */
    if (!(target.parentNode instanceof HTMLElement) || !(target.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError();

    /* Find parent and active panes */
    var parent = target.parentNode.parentNode;
    var active = pane.children[pane.children.length - 1];

    /* Always reset all lists when transitioning */
    parent.style.webkitOverflowScrolling = "";
    active.style.webkitOverflowScrolling = "";

    /* Set overflow scrolling on parent pane */
    if (!target.checked) {
      var end = function end() {
        if (pane instanceof HTMLElement) {
          parent.style.webkitOverflowScrolling = "touch";
          pane.removeEventListener("transitionend", end);
        }
      };
      pane.addEventListener("transitionend", end, false);
    }

    /* Set overflow scrolling on active pane */
    if (target.checked) {
      var _end = function _end() {
        if (pane instanceof HTMLElement) {
          active.style.webkitOverflowScrolling = "touch";
          pane.removeEventListener("transitionend", _end);
        }
      };
      pane.addEventListener("transitionend", _end, false);
    }
  };

  /**
   * Reset panes
   */


  Scrolling.prototype.reset = function reset() {

    /* Reset overflow scrolling on main pane */
    this.el_.children[1].style.webkitOverflowScrolling = "";

    /* Find all toggles and check which one is active */
    var toggles = this.el_.querySelectorAll("[data-md-toggle]");
    Array.prototype.forEach.call(toggles, function (toggle) {
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (toggle.checked) {

        /* Find corresponding navigational pane */
        var pane = toggle.nextElementSibling;
        if (!(pane instanceof HTMLElement)) throw new ReferenceError();
        while (pane.tagName !== "NAV" && pane.nextElementSibling) {
          pane = pane.nextElementSibling;
        } /* Check references */
        if (!(toggle.parentNode instanceof HTMLElement) || !(toggle.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError();

        /* Find parent and active panes */
        var parent = toggle.parentNode.parentNode;
        var active = pane.children[pane.children.length - 1];

        /* Always reset all lists when transitioning */
        parent.style.webkitOverflowScrolling = "";
        active.style.webkitOverflowScrolling = "";
      }
    });
  };

  return Scrolling;
}();

exports.default = Scrolling;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Lock = __webpack_require__(32);

var _Lock2 = _interopRequireDefault(_Lock);

var _Result = __webpack_require__(33);

var _Result2 = _interopRequireDefault(_Result);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Lock: _Lock2.default,
  Result: _Result2.default
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Lock = function () {

  /**
   * Lock body for full-screen search modal
   *
   * @constructor
   *
   * @property {HTMLInputElement} el_ - Lock toggle
   * @property {HTMLElement} lock_ - Element to lock (document body)
   * @property {number} offset_ - Current page y-offset
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Lock(el) {
    _classCallCheck(this, Lock);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLInputElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve element to lock (= body) */
    if (!document.body) throw new ReferenceError();
    this.lock_ = document.body;
  }

  /**
   * Setup locked state
   */


  Lock.prototype.setup = function setup() {
    this.update();
  };

  /**
   * Update locked state
   */


  Lock.prototype.update = function update() {
    var _this = this;

    /* Entering search mode */
    if (this.el_.checked) {
      this.offset_ = window.pageYOffset;

      /* Scroll to top after transition, to omit flickering */
      setTimeout(function () {
        window.scrollTo(0, 0);

        /* Lock body after finishing transition */
        if (_this.el_.checked) {
          _this.lock_.dataset.mdState = "lock";
        }
      }, 400);

      /* Exiting search mode */
    } else {
      this.lock_.dataset.mdState = "";

      /* Scroll to former position, but wait for 100ms to prevent flashes on
         iOS. A short timeout seems to do the trick */
      setTimeout(function () {
        if (typeof _this.offset_ !== "undefined") window.scrollTo(0, _this.offset_);
      }, 100);
    }
  };

  /**
   * Reset locked state and page y-offset
   */


  Lock.prototype.reset = function reset() {
    if (this.lock_.dataset.mdState === "lock") window.scrollTo(0, this.offset_);
    this.lock_.dataset.mdState = "";
  };

  return Lock;
}();

exports.default = Lock;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(JSX) {

exports.__esModule = true;

var _escapeStringRegexp = __webpack_require__(34);

var _escapeStringRegexp2 = _interopRequireDefault(_escapeStringRegexp);

var _exposeLoaderLunrLunr = __webpack_require__(35);

var _exposeLoaderLunrLunr2 = _interopRequireDefault(_exposeLoaderLunrLunr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                           *
                                                                                                                                                           * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                           * of this software and associated documentation files (the "Software"), to
                                                                                                                                                           * deal in the Software without restriction, including without limitation the
                                                                                                                                                           * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                           * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                           * furnished to do so, subject to the following conditions:
                                                                                                                                                           *
                                                                                                                                                           * The above copyright notice and this permission notice shall be included in
                                                                                                                                                           * all copies or substantial portions of the Software.
                                                                                                                                                           *
                                                                                                                                                           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                           * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                           * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                           * IN THE SOFTWARE.
                                                                                                                                                           */

/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */

/**
 * Escape HTML strings
 *
 * Documentation may contain code JavaScript code snippets which would get
 * executed when inserted into the DOM as plain HTML.
 *
 * See https://github.com/squidfunk/mkdocs-material/issues/906
 *
 * @param {string} html - HTML string
 *
 * @return {string} Escaped HTML string
 */
var escapeHTML = function escapeHTML(html) {
  var text = document.createTextNode(html);
  var p = document.createElement('p');
  p.appendChild(text);
  return p.innerHTML;
};

/**
 * Truncate a string after the given number of character
 *
 * This is not a reasonable approach, since the summaries kind of suck. It
 * would be better to create something more intelligent, highlighting the
 * search occurrences and making a better summary out of it.
 *
 * @param {string} string - String to be truncated
 * @param {number} n - Number of characters
 * @return {string} Truncated string
 */
var truncate = function truncate(string, n) {
  var i = n;
  if (string.length > i) {
    while (string[i] !== " " && --i > 0) {}
    return string.substring(0, i) + "...";
  }
  return string;
};

/**
 * Return the meta tag value for the given key
 *
 * @param {string} key - Meta name
 *
 * @return {string} Meta content value
 */
var translate = function translate(key) {
  var meta = document.getElementsByName("lang:" + key)[0];
  if (!(meta instanceof HTMLMetaElement)) throw new ReferenceError();
  return meta.content;
};

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Result = function () {

  /**
   * Perform search and update results on keyboard events
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Search result container
   * @property {(Array<Object>|Function)} data_ - Raw document data
   * @property {Object} docs_ - Indexed documents
   * @property {HTMLElement} meta_ - Search meta information
   * @property {HTMLElement} list_ - Search result list
   * @property {Array<string>} lang_ - Search languages
   * @property {Object} message_ - Search result messages
   * @property {Object} index_ - Search index
   * @property {Array<Function>} stack_ - Search result stack
   * @property {string} value_ - Last input value
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(Array<Object>|Function)} data - Function providing data or array
   */
  function Result(el, data) {
    _classCallCheck(this, Result);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve metadata and list element */

    var _Array$prototype$slic = Array.prototype.slice.call(this.el_.children),
        meta = _Array$prototype$slic[0],
        list = _Array$prototype$slic[1];

    /* Set data, metadata and list elements */


    this.data_ = data;
    this.meta_ = meta;
    this.list_ = list;

    /* Load messages for metadata display */
    this.message_ = {
      placeholder: this.meta_.textContent,
      none: translate("search.result.none"),
      one: translate("search.result.one"),
      other: translate("search.result.other")

      /* Override tokenizer separator, if given */
    };var tokenizer = translate("search.tokenizer");
    if (tokenizer.length) _exposeLoaderLunrLunr2.default.tokenizer.separator = tokenizer;

    /* Load search languages */
    this.lang_ = translate("search.language").split(",").filter(Boolean).map(function (lang) {
      return lang.trim();
    });
  }

  /**
   * Update search results
   *
   * @param {Event} ev - Input or focus event
   */


  Result.prototype.update = function update(ev) {
    var _this = this;

    /* Initialize index, if this has not be done yet */
    if (ev.type === "focus" && !this.index_) {

      /* Initialize index */
      var init = function init(data) {

        /* Preprocess and index sections and documents */
        _this.docs_ = data.reduce(function (docs, doc) {
          var _doc$location$split = doc.location.split("#"),
              path = _doc$location$split[0],
              hash = _doc$location$split[1];

          /* Escape HTML */


          doc.title = escapeHTML(doc.title);
          doc.text = escapeHTML(doc.text);

          /* Associate section with parent document */
          if (hash) {
            doc.parent = docs.get(path);

            /* Override page title with document title if first section */
            if (doc.parent && !doc.parent.done) {
              doc.parent.title = doc.title;
              doc.parent.text = doc.text;
              doc.parent.done = true;
            }
          }

          /* Some cleanup on the text */
          doc.text = doc.text.replace(/\n/g, " ") /* Remove newlines */
          .replace(/\s+/g, " ") /* Compact whitespace */
          .replace(/\s+([,.:;!?])/g, /* Correct punctuation */
          function (_, char) {
            return char;
          });

          /* Index sections and documents, but skip top-level headline */
          if (!doc.parent || doc.parent.title !== doc.title) docs.set(doc.location, doc);
          return docs;
        }, new Map());

        /* eslint-disable no-invalid-this */
        var docs = _this.docs_,
            lang = _this.lang_;

        /* Create stack and index */
        _this.stack_ = [];
        _this.index_ = (0, _exposeLoaderLunrLunr2.default)(function () {
          var _pipeline,
              _this2 = this;

          var filters = {
            "search.pipeline.trimmer": _exposeLoaderLunrLunr2.default.trimmer,
            "search.pipeline.stopwords": _exposeLoaderLunrLunr2.default.stopWordFilter

            /* Disable stop words filter and trimmer, if desired */
          };var pipeline = Object.keys(filters).reduce(function (result, name) {
            if (!translate(name).match(/^false$/i)) result.push(filters[name]);
            return result;
          }, []);

          /* Remove stemmer, as it cripples search experience */
          this.pipeline.reset();
          if (pipeline) (_pipeline = this.pipeline).add.apply(_pipeline, pipeline);

          /* Set up alternate search languages */
          if (lang.length === 1 && lang[0] !== "en" && _exposeLoaderLunrLunr2.default[lang[0]]) {
            this.use(_exposeLoaderLunrLunr2.default[lang[0]]);
          } else if (lang.length > 1) {
            this.use(_exposeLoaderLunrLunr2.default.multiLanguage.apply(_exposeLoaderLunrLunr2.default, lang));
          }

          /* Index fields */
          this.field("title", { boost: 10 });
          this.field("text");
          this.ref("location");

          /* Index documents */
          docs.forEach(function (doc) {
            return _this2.add(doc);
          });
        });

        /* Register event handler for lazy rendering */
        var container = _this.el_.parentNode;
        if (!(container instanceof HTMLElement)) throw new ReferenceError();
        container.addEventListener("scroll", function () {
          while (_this.stack_.length && container.scrollTop + container.offsetHeight >= container.scrollHeight - 16) {
            _this.stack_.splice(0, 10).forEach(function (render) {
              return render();
            });
          }
        });
      };
      /* eslint-enable no-invalid-this */

      /* Initialize index after short timeout to account for transition */
      setTimeout(function () {
        return typeof _this.data_ === "function" ? _this.data_().then(init) : init(_this.data_);
      }, 250);

      /* Execute search on new input event */
    } else if (ev.type === "focus" || ev.type === "keyup") {
      var target = ev.target;
      if (!(target instanceof HTMLInputElement)) throw new ReferenceError();

      /* Abort early, if index is not build or input hasn't changed */
      if (!this.index_ || target.value === this.value_) return;

      /* Clear current list */
      while (this.list_.firstChild) {
        this.list_.removeChild(this.list_.firstChild);
      } /* Abort early, if search input is empty */
      this.value_ = target.value;
      if (this.value_.length === 0) {
        this.meta_.textContent = this.message_.placeholder;
        return;
      }

      /* Perform search on index and group sections by document */
      var result = this.index_

      /* Append trailing wildcard to all terms for prefix querying */
      .query(function (query) {
        _this.value_.toLowerCase().split(" ").filter(Boolean).forEach(function (term) {
          query.term(term, { wildcard: _exposeLoaderLunrLunr2.default.Query.wildcard.TRAILING });
        });
      })

      /* Process query results */
      .reduce(function (items, item) {
        var doc = _this.docs_.get(item.ref);
        if (doc.parent) {
          var ref = doc.parent.location;
          items.set(ref, (items.get(ref) || []).concat(item));
        } else {
          var _ref = doc.location;
          items.set(_ref, items.get(_ref) || []);
        }
        return items;
      }, new Map());

      /* Assemble regular expressions for matching */
      var query = (0, _escapeStringRegexp2.default)(this.value_.trim()).replace(new RegExp(_exposeLoaderLunrLunr2.default.tokenizer.separator, "img"), "|");
      var match = new RegExp("(^|" + _exposeLoaderLunrLunr2.default.tokenizer.separator + ")(" + query + ")", "img");
      var highlight = function highlight(_, separator, token) {
        return separator + "<em>" + token + "</em>";
      };

      /* Reset stack and render results */
      this.stack_ = [];
      result.forEach(function (items, ref) {
        var _stack_;

        var doc = _this.docs_.get(ref);

        /* Render article */
        var article = JSX.createElement(
          "li",
          { "class": "md-search-result__item" },
          JSX.createElement(
            "a",
            { href: doc.location, title: doc.title,
              "class": "md-search-result__link", tabindex: "-1" },
            JSX.createElement(
              "article",
              { "class": "md-search-result__article md-search-result__article--document" },
              JSX.createElement(
                "h1",
                { "class": "md-search-result__title" },
                { __html: doc.title.replace(match, highlight) }
              ),
              doc.text.length ? JSX.createElement(
                "p",
                { "class": "md-search-result__teaser" },
                { __html: doc.text.replace(match, highlight) }
              ) : {}
            )
          )
        );

        /* Render sections for article */
        var sections = items.map(function (item) {
          return function () {
            var section = _this.docs_.get(item.ref);
            article.appendChild(JSX.createElement(
              "a",
              { href: section.location, title: section.title,
                "class": "md-search-result__link", "data-md-rel": "anchor",
                tabindex: "-1" },
              JSX.createElement(
                "article",
                { "class": "md-search-result__article" },
                JSX.createElement(
                  "h1",
                  { "class": "md-search-result__title" },
                  { __html: section.title.replace(match, highlight) }
                ),
                section.text.length ? JSX.createElement(
                  "p",
                  { "class": "md-search-result__teaser" },
                  { __html: truncate(section.text.replace(match, highlight), 400)
                  }
                ) : {}
              )
            ));
          };
        });

        /* Push articles and section renderers onto stack */
        (_stack_ = _this.stack_).push.apply(_stack_, [function () {
          return _this.list_.appendChild(article);
        }].concat(sections));
      });

      /* Gradually add results as long as the height of the container grows */
      var container = this.el_.parentNode;
      if (!(container instanceof HTMLElement)) throw new ReferenceError();
      while (this.stack_.length && container.offsetHeight >= container.scrollHeight - 16) {
        this.stack_.shift()();
      } /* Bind click handlers for anchors */
      var anchors = this.list_.querySelectorAll("[data-md-rel=anchor]");
      Array.prototype.forEach.call(anchors, function (anchor) {
        ["click", "keydown"].forEach(function (action) {
          anchor.addEventListener(action, function (ev2) {
            if (action === "keydown" && ev2.keyCode !== 13) return;

            /* Close search */
            var toggle = document.querySelector("[data-md-toggle=search]");
            if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
            if (toggle.checked) {
              toggle.checked = false;
              toggle.dispatchEvent(new CustomEvent("change"));
            }

            /* Hack: prevent default, as the navigation needs to be delayed due
               to the search body lock on mobile */
            ev2.preventDefault();
            setTimeout(function () {
              document.location.href = anchor.href;
            }, 100);
          });
        });
      });

      /* Update search metadata */
      switch (result.size) {
        case 0:
          this.meta_.textContent = this.message_.none;
          break;
        case 1:
          this.meta_.textContent = this.message_.one;
          break;
        default:
          this.meta_.textContent = this.message_.other.replace("#", result.size);
      }
    }
  };

  return Result;
}();

exports.default = Result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(matchOperatorsRe, '\\$&');
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["lunr"] = __webpack_require__(36);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.3.5
 * Copyright (C) 2018 Oliver Nightingale
 * @license MIT
 */

;(function(){

/**
 * A convenience function for configuring and constructing
 * a new lunr Index.
 *
 * A lunr.Builder instance is created and the pipeline setup
 * with a trimmer, stop word filter and stemmer.
 *
 * This builder object is yielded to the configuration function
 * that is passed as a parameter, allowing the list of fields
 * and other builder parameters to be customised.
 *
 * All documents _must_ be added within the passed config function.
 *
 * @example
 * var idx = lunr(function () {
 *   this.field('title')
 *   this.field('body')
 *   this.ref('id')
 *
 *   documents.forEach(function (doc) {
 *     this.add(doc)
 *   }, this)
 * })
 *
 * @see {@link lunr.Builder}
 * @see {@link lunr.Pipeline}
 * @see {@link lunr.trimmer}
 * @see {@link lunr.stopWordFilter}
 * @see {@link lunr.stemmer}
 * @namespace {function} lunr
 */
var lunr = function (config) {
  var builder = new lunr.Builder

  builder.pipeline.add(
    lunr.trimmer,
    lunr.stopWordFilter,
    lunr.stemmer
  )

  builder.searchPipeline.add(
    lunr.stemmer
  )

  config.call(builder, builder)
  return builder.build()
}

lunr.version = "2.3.5"
/*!
 * lunr.utils
 * Copyright (C) 2018 Oliver Nightingale
 */

/**
 * A namespace containing utils for the rest of the lunr library
 * @namespace lunr.utils
 */
lunr.utils = {}

/**
 * Print a warning message to the console.
 *
 * @param {String} message The message to be printed.
 * @memberOf lunr.utils
 * @function
 */
lunr.utils.warn = (function (global) {
  /* eslint-disable no-console */
  return function (message) {
    if (global.console && console.warn) {
      console.warn(message)
    }
  }
  /* eslint-enable no-console */
})(this)

/**
 * Convert an object to a string.
 *
 * In the case of `null` and `undefined` the function returns
 * the empty string, in all other cases the result of calling
 * `toString` on the passed object is returned.
 *
 * @param {Any} obj The object to convert to a string.
 * @return {String} string representation of the passed object.
 * @memberOf lunr.utils
 */
lunr.utils.asString = function (obj) {
  if (obj === void 0 || obj === null) {
    return ""
  } else {
    return obj.toString()
  }
}

/**
 * Clones an object.
 *
 * Will create a copy of an existing object such that any mutations
 * on the copy cannot affect the original.
 *
 * Only shallow objects are supported, passing a nested object to this
 * function will cause a TypeError.
 *
 * Objects with primitives, and arrays of primitives are supported.
 *
 * @param {Object} obj The object to clone.
 * @return {Object} a clone of the passed object.
 * @throws {TypeError} when a nested object is passed.
 * @memberOf Utils
 */
lunr.utils.clone = function (obj) {
  if (obj === null || obj === undefined) {
    return obj
  }

  var clone = Object.create(null),
      keys = Object.keys(obj)

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i],
        val = obj[key]

    if (Array.isArray(val)) {
      clone[key] = val.slice()
      continue
    }

    if (typeof val === 'string' ||
        typeof val === 'number' ||
        typeof val === 'boolean') {
      clone[key] = val
      continue
    }

    throw new TypeError("clone is not deep and does not support nested objects")
  }

  return clone
}
lunr.FieldRef = function (docRef, fieldName, stringValue) {
  this.docRef = docRef
  this.fieldName = fieldName
  this._stringValue = stringValue
}

lunr.FieldRef.joiner = "/"

lunr.FieldRef.fromString = function (s) {
  var n = s.indexOf(lunr.FieldRef.joiner)

  if (n === -1) {
    throw "malformed field ref string"
  }

  var fieldRef = s.slice(0, n),
      docRef = s.slice(n + 1)

  return new lunr.FieldRef (docRef, fieldRef, s)
}

lunr.FieldRef.prototype.toString = function () {
  if (this._stringValue == undefined) {
    this._stringValue = this.fieldName + lunr.FieldRef.joiner + this.docRef
  }

  return this._stringValue
}
/*!
 * lunr.Set
 * Copyright (C) 2018 Oliver Nightingale
 */

/**
 * A lunr set.
 *
 * @constructor
 */
lunr.Set = function (elements) {
  this.elements = Object.create(null)

  if (elements) {
    this.length = elements.length

    for (var i = 0; i < this.length; i++) {
      this.elements[elements[i]] = true
    }
  } else {
    this.length = 0
  }
}

/**
 * A complete set that contains all elements.
 *
 * @static
 * @readonly
 * @type {lunr.Set}
 */
lunr.Set.complete = {
  intersect: function (other) {
    return other
  },

  union: function (other) {
    return other
  },

  contains: function () {
    return true
  }
}

/**
 * An empty set that contains no elements.
 *
 * @static
 * @readonly
 * @type {lunr.Set}
 */
lunr.Set.empty = {
  intersect: function () {
    return this
  },

  union: function (other) {
    return other
  },

  contains: function () {
    return false
  }
}

/**
 * Returns true if this set contains the specified object.
 *
 * @param {object} object - Object whose presence in this set is to be tested.
 * @returns {boolean} - True if this set contains the specified object.
 */
lunr.Set.prototype.contains = function (object) {
  return !!this.elements[object]
}

/**
 * Returns a new set containing only the elements that are present in both
 * this set and the specified set.
 *
 * @param {lunr.Set} other - set to intersect with this set.
 * @returns {lunr.Set} a new set that is the intersection of this and the specified set.
 */

lunr.Set.prototype.intersect = function (other) {
  var a, b, elements, intersection = []

  if (other === lunr.Set.complete) {
    return this
  }

  if (other === lunr.Set.empty) {
    return other
  }

  if (this.length < other.length) {
    a = this
    b = other
  } else {
    a = other
    b = this
  }

  elements = Object.keys(a.elements)

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i]
    if (element in b.elements) {
      intersection.push(element)
    }
  }

  return new lunr.Set (intersection)
}

/**
 * Returns a new set combining the elements of this and the specified set.
 *
 * @param {lunr.Set} other - set to union with this set.
 * @return {lunr.Set} a new set that is the union of this and the specified set.
 */

lunr.Set.prototype.union = function (other) {
  if (other === lunr.Set.complete) {
    return lunr.Set.complete
  }

  if (other === lunr.Set.empty) {
    return this
  }

  return new lunr.Set(Object.keys(this.elements).concat(Object.keys(other.elements)))
}
/**
 * A function to calculate the inverse document frequency for
 * a posting. This is shared between the builder and the index
 *
 * @private
 * @param {object} posting - The posting for a given term
 * @param {number} documentCount - The total number of documents.
 */
lunr.idf = function (posting, documentCount) {
  var documentsWithTerm = 0

  for (var fieldName in posting) {
    if (fieldName == '_index') continue // Ignore the term index, its not a field
    documentsWithTerm += Object.keys(posting[fieldName]).length
  }

  var x = (documentCount - documentsWithTerm + 0.5) / (documentsWithTerm + 0.5)

  return Math.log(1 + Math.abs(x))
}

/**
 * A token wraps a string representation of a token
 * as it is passed through the text processing pipeline.
 *
 * @constructor
 * @param {string} [str=''] - The string token being wrapped.
 * @param {object} [metadata={}] - Metadata associated with this token.
 */
lunr.Token = function (str, metadata) {
  this.str = str || ""
  this.metadata = metadata || {}
}

/**
 * Returns the token string that is being wrapped by this object.
 *
 * @returns {string}
 */
lunr.Token.prototype.toString = function () {
  return this.str
}

/**
 * A token update function is used when updating or optionally
 * when cloning a token.
 *
 * @callback lunr.Token~updateFunction
 * @param {string} str - The string representation of the token.
 * @param {Object} metadata - All metadata associated with this token.
 */

/**
 * Applies the given function to the wrapped string token.
 *
 * @example
 * token.update(function (str, metadata) {
 *   return str.toUpperCase()
 * })
 *
 * @param {lunr.Token~updateFunction} fn - A function to apply to the token string.
 * @returns {lunr.Token}
 */
lunr.Token.prototype.update = function (fn) {
  this.str = fn(this.str, this.metadata)
  return this
}

/**
 * Creates a clone of this token. Optionally a function can be
 * applied to the cloned token.
 *
 * @param {lunr.Token~updateFunction} [fn] - An optional function to apply to the cloned token.
 * @returns {lunr.Token}
 */
lunr.Token.prototype.clone = function (fn) {
  fn = fn || function (s) { return s }
  return new lunr.Token (fn(this.str, this.metadata), this.metadata)
}
/*!
 * lunr.tokenizer
 * Copyright (C) 2018 Oliver Nightingale
 */

/**
 * A function for splitting a string into tokens ready to be inserted into
 * the search index. Uses `lunr.tokenizer.separator` to split strings, change
 * the value of this property to change how strings are split into tokens.
 *
 * This tokenizer will convert its parameter to a string by calling `toString` and
 * then will split this string on the character in `lunr.tokenizer.separator`.
 * Arrays will have their elements converted to strings and wrapped in a lunr.Token.
 *
 * Optional metadata can be passed to the tokenizer, this metadata will be cloned and
 * added as metadata to every token that is created from the object to be tokenized.
 *
 * @static
 * @param {?(string|object|object[])} obj - The object to convert into tokens
 * @param {?object} metadata - Optional metadata to associate with every token
 * @returns {lunr.Token[]}
 * @see {@link lunr.Pipeline}
 */
lunr.tokenizer = function (obj, metadata) {
  if (obj == null || obj == undefined) {
    return []
  }

  if (Array.isArray(obj)) {
    return obj.map(function (t) {
      return new lunr.Token(
        lunr.utils.asString(t).toLowerCase(),
        lunr.utils.clone(metadata)
      )
    })
  }

  var str = obj.toString().trim().toLowerCase(),
      len = str.length,
      tokens = []

  for (var sliceEnd = 0, sliceStart = 0; sliceEnd <= len; sliceEnd++) {
    var char = str.charAt(sliceEnd),
        sliceLength = sliceEnd - sliceStart

    if ((char.match(lunr.tokenizer.separator) || sliceEnd == len)) {

      if (sliceLength > 0) {
        var tokenMetadata = lunr.utils.clone(metadata) || {}
        tokenMetadata["position"] = [sliceStart, sliceLength]
        tokenMetadata["index"] = tokens.length

        tokens.push(
          new lunr.Token (
            str.slice(sliceStart, sliceEnd),
            tokenMetadata
          )
        )
      }

      sliceStart = sliceEnd + 1
    }

  }

  return tokens
}

/**
 * The separator used to split a string into tokens. Override this property to change the behaviour of
 * `lunr.tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.
 *
 * @static
 * @see lunr.tokenizer
 */
lunr.tokenizer.separator = /[\s\-]+/
/*!
 * lunr.Pipeline
 * Copyright (C) 2018 Oliver Nightingale
 */

/**
 * lunr.Pipelines maintain an ordered list of functions to be applied to all
 * tokens in documents entering the search index and queries being ran against
 * the index.
 *
 * An instance of lunr.Index created with the lunr shortcut will contain a
 * pipeline with a stop word filter and an English language stemmer. Extra
 * functions can be added before or after either of these functions or these
 * default functions can be removed.
 *
 * When run the pipeline will call each function in turn, passing a token, the
 * index of that token in the original list of all tokens and finally a list of
 * all the original tokens.
 *
 * The output of functions in the pipeline will be passed to the next function
 * in the pipeline. To exclude a token from entering the index the function
 * should return undefined, the rest of the pipeline will not be called with
 * this token.
 *
 * For serialisation of pipelines to work, all functions used in an instance of
 * a pipeline should be registered with lunr.Pipeline. Registered functions can
 * then be loaded. If trying to load a serialised pipeline that uses functions
 * that are not registered an error will be thrown.
 *
 * If not planning on serialising the pipeline then registering pipeline functions
 * is not necessary.
 *
 * @constructor
 */
lunr.Pipeline = function () {
  this._stack = []
}

lunr.Pipeline.registeredFunctions = Object.create(null)

/**
 * A pipeline function maps lunr.Token to lunr.Token. A lunr.Token contains the token
 * string as well as all known metadata. A pipeline function can mutate the token string
 * or mutate (or add) metadata for a given token.
 *
 * A pipeline function can indicate that the passed token should be discarded by returning
 * null. This token will not be passed to any downstream pipeline functions and will not be
 * added to the index.
 *
 * Multiple tokens can be returned by returning an array of tokens. Each token will be passed
 * to any downstream pipeline functions and all will returned tokens will be added to the index.
 *
 * Any number of pipeline functions may be chained together using a lunr.Pipeline.
 *
 * @interface lunr.PipelineFunction
 * @param {lunr.Token} token - A token from the document being processed.
 * @param {number} i - The index of this token in the complete list of tokens for this document/field.
 * @param {lunr.Token[]} tokens - All tokens for this document/field.
 * @returns {(?lunr.Token|lunr.Token[])}
 */

/**
 * Register a function with the pipeline.
 *
 * Functions that are used in the pipeline should be registered if the pipeline
 * needs to be serialised, or a serialised pipeline needs to be loaded.
 *
 * Registering a function does not add it to a pipeline, functions must still be
 * added to instances of the pipeline for them to be used when running a pipeline.
 *
 * @param {lunr.PipelineFunction} fn - The function to check for.
 * @param {String} label - The label to register this function with
 */
lunr.Pipeline.registerFunction = function (fn, label) {
  if (label in this.registeredFunctions) {
    lunr.utils.warn('Overwriting existing registered function: ' + label)
  }

  fn.label = label
  lunr.Pipeline.registeredFunctions[fn.label] = fn
}

/**
 * Warns if the function is not registered as a Pipeline function.
 *
 * @param {lunr.PipelineFunction} fn - The function to check for.
 * @private
 */
lunr.Pipeline.warnIfFunctionNotRegistered = function (fn) {
  var isRegistered = fn.label && (fn.label in this.registeredFunctions)

  if (!isRegistered) {
    lunr.utils.warn('Function is not registered with pipeline. This may cause problems when serialising the index.\n', fn)
  }
}

/**
 * Loads a previously serialised pipeline.
 *
 * All functions to be loaded must already be registered with lunr.Pipeline.
 * If any function from the serialised data has not been registered then an
 * error will be thrown.
 *
 * @param {Object} serialised - The serialised pipeline to load.
 * @returns {lunr.Pipeline}
 */
lunr.Pipeline.load = function (serialised) {
  var pipeline = new lunr.Pipeline

  serialised.forEach(function (fnName) {
    var fn = lunr.Pipeline.registeredFunctions[fnName]

    if (fn) {
      pipeline.add(fn)
    } else {
      throw new Error('Cannot load unregistered function: ' + fnName)
    }
  })

  return pipeline
}

/**
 * Adds new functions to the end of the pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction[]} functions - Any number of functions to add to the pipeline.
 */
lunr.Pipeline.prototype.add = function () {
  var fns = Array.prototype.slice.call(arguments)

  fns.forEach(function (fn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(fn)
    this._stack.push(fn)
  }, this)
}

/**
 * Adds a single function after a function that already exists in the
 * pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
 * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
 */
lunr.Pipeline.prototype.after = function (existingFn, newFn) {
  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)

  var pos = this._stack.indexOf(existingFn)
  if (pos == -1) {
    throw new Error('Cannot find existingFn')
  }

  pos = pos + 1
  this._stack.splice(pos, 0, newFn)
}

/**
 * Adds a single function before a function that already exists in the
 * pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
 * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
 */
lunr.Pipeline.prototype.before = function (existingFn, newFn) {
  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)

  var pos = this._stack.indexOf(existingFn)
  if (pos == -1) {
    throw new Error('Cannot find existingFn')
  }

  this._stack.splice(pos, 0, newFn)
}

/**
 * Removes a function from the pipeline.
 *
 * @param {lunr.PipelineFunction} fn The function to remove from the pipeline.
 */
lunr.Pipeline.prototype.remove = function (fn) {
  var pos = this._stack.indexOf(fn)
  if (pos == -1) {
    return
  }

  this._stack.splice(pos, 1)
}

/**
 * Runs the current list of functions that make up the pipeline against the
 * passed tokens.
 *
 * @param {Array} tokens The tokens to run through the pipeline.
 * @returns {Array}
 */
lunr.Pipeline.prototype.run = function (tokens) {
  var stackLength = this._stack.length

  for (var i = 0; i < stackLength; i++) {
    var fn = this._stack[i]
    var memo = []

    for (var j = 0; j < tokens.length; j++) {
      var result = fn(tokens[j], j, tokens)

      if (result === void 0 || result === '') continue

      if (Array.isArray(result)) {
        for (var k = 0; k < result.length; k++) {
          memo.push(result[k])
        }
      } else {
        memo.push(result)
      }
    }

    tokens = memo
  }

  return tokens
}

/**
 * Convenience method for passing a string through a pipeline and getting
 * strings out. This method takes care of wrapping the passed string in a
 * token and mapping the resulting tokens back to strings.
 *
 * @param {string} str - The string to pass through the pipeline.
 * @param {?object} metadata - Optional metadata to associate with the token
 * passed to the pipeline.
 * @returns {string[]}
 */
lunr.Pipeline.prototype.runString = function (str, metadata) {
  var token = new lunr.Token (str, metadata)

  return this.run([token]).map(function (t) {
    return t.toString()
  })
}

/**
 * Resets the pipeline by removing any existing processors.
 *
 */
lunr.Pipeline.prototype.reset = function () {
  this._stack = []
}

/**
 * Returns a representation of the pipeline ready for serialisation.
 *
 * Logs a warning if the function has not been registered.
 *
 * @returns {Array}
 */
lunr.Pipeline.prototype.toJSON = function () {
  return this._stack.map(function (fn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(fn)

    return fn.label
  })
}
/*!
 * lunr.Vector
 * Copyright (C) 2018 Oliver Nightingale
 */

/**
 * A vector is used to construct the vector space of documents and queries. These
 * vectors support operations to determine the similarity between two documents or
 * a document and a query.
 *
 * Normally no parameters are required for initializing a vector, but in the case of
 * loading a previously dumped vector the raw elements can be provided to the constructor.
 *
 * For performance reasons vectors are implemented with a flat array, where an elements
 * index is immediately followed by its value. E.g. [index, value, index, value]. This
 * allows the underlying array to be as sparse as possible and still offer decent
 * performance when being used for vector calculations.
 *
 * @constructor
 * @param {Number[]} [elements] - The flat list of element index and element value pairs.
 */
lunr.Vector = function (elements) {
  this._magnitude = 0
  this.elements = elements || []
}


/**
 * Calculates the position within the vector to insert a given index.
 *
 * This is used internally by insert and upsert. If there are duplicate indexes then
 * the position is returned as if the value for that index were to be updated, but it
 * is the callers responsibility to check whether there is a duplicate at that index
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @returns {Number}
 */
lunr.Vector.prototype.positionForIndex = function (index) {
  // For an empty vector the tuple can be inserted at the beginning
  if (this.elements.length == 0) {
    return 0
  }

  var start = 0,
      end = this.elements.length / 2,
      sliceLength = end - start,
      pivotPoint = Math.floor(sliceLength / 2),
      pivotIndex = this.elements[pivotPoint * 2]

  while (sliceLength > 1) {
    if (pivotIndex < index) {
      start = pivotPoint
    }

    if (pivotIndex > index) {
      end = pivotPoint
    }

    if (pivotIndex == index) {
      break
    }

    sliceLength = end - start
    pivotPoint = start + Math.floor(sliceLength / 2)
    pivotIndex = this.elements[pivotPoint * 2]
  }

  if (pivotIndex == index) {
    return pivotPoint * 2
  }

  if (pivotIndex > index) {
    return pivotPoint * 2
  }

  if (pivotIndex < index) {
    return (pivotPoint + 1) * 2
  }
}

/**
 * Inserts an element at an index within the vector.
 *
 * Does not allow duplicates, will throw an error if there is already an entry
 * for this index.
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @param {Number} val - The value to be inserted into the vector.
 */
lunr.Vector.prototype.insert = function (insertIdx, val) {
  this.upsert(insertIdx, val, function () {
    throw "duplicate index"
  })
}

/**
 * Inserts or updates an existing index within the vector.
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @param {Number} val - The value to be inserted into the vector.
 * @param {function} fn - A function that is called for updates, the existing value and the
 * requested value are passed as arguments
 */
lunr.Vector.prototype.upsert = function (insertIdx, val, fn) {
  this._magnitude = 0
  var position = this.positionForIndex(insertIdx)

  if (this.elements[position] == insertIdx) {
    this.elements[position + 1] = fn(this.elements[position + 1], val)
  } else {
    this.elements.splice(position, 0, insertIdx, val)
  }
}

/**
 * Calculates the magnitude of this vector.
 *
 * @returns {Number}
 */
lunr.Vector.prototype.magnitude = function () {
  if (this._magnitude) return this._magnitude

  var sumOfSquares = 0,
      elementsLength = this.elements.length

  for (var i = 1; i < elementsLength; i += 2) {
    var val = this.elements[i]
    sumOfSquares += val * val
  }

  return this._magnitude = Math.sqrt(sumOfSquares)
}

/**
 * Calculates the dot product of this vector and another vector.
 *
 * @param {lunr.Vector} otherVector - The vector to compute the dot product with.
 * @returns {Number}
 */
lunr.Vector.prototype.dot = function (otherVector) {
  var dotProduct = 0,
      a = this.elements, b = otherVector.elements,
      aLen = a.length, bLen = b.length,
      aVal = 0, bVal = 0,
      i = 0, j = 0

  while (i < aLen && j < bLen) {
    aVal = a[i], bVal = b[j]
    if (aVal < bVal) {
      i += 2
    } else if (aVal > bVal) {
      j += 2
    } else if (aVal == bVal) {
      dotProduct += a[i + 1] * b[j + 1]
      i += 2
      j += 2
    }
  }

  return dotProduct
}

/**
 * Calculates the similarity between this vector and another vector.
 *
 * @param {lunr.Vector} otherVector - The other vector to calculate the
 * similarity with.
 * @returns {Number}
 */
lunr.Vector.prototype.similarity = function (otherVector) {
  return this.dot(otherVector) / this.magnitude() || 0
}

/**
 * Converts the vector to an array of the elements within the vector.
 *
 * @returns {Number[]}
 */
lunr.Vector.prototype.toArray = function () {
  var output = new Array (this.elements.length / 2)

  for (var i = 1, j = 0; i < this.elements.length; i += 2, j++) {
    output[j] = this.elements[i]
  }

  return output
}

/**
 * A JSON serializable representation of the vector.
 *
 * @returns {Number[]}
 */
lunr.Vector.prototype.toJSON = function () {
  return this.elements
}
/* eslint-disable */
/*!
 * lunr.stemmer
 * Copyright (C) 2018 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */

/**
 * lunr.stemmer is an english language stemmer, this is a JavaScript
 * implementation of the PorterStemmer taken from http://tartarus.org/~martin
 *
 * @static
 * @implements {lunr.PipelineFunction}
 * @param {lunr.Token} token - The string to stem
 * @returns {lunr.Token}
 * @see {@link lunr.Pipeline}
 * @function
 */
lunr.stemmer = (function(){
  var step2list = {
      "ational" : "ate",
      "tional" : "tion",
      "enci" : "ence",
      "anci" : "ance",
      "izer" : "ize",
      "bli" : "ble",
      "alli" : "al",
      "entli" : "ent",
      "eli" : "e",
      "ousli" : "ous",
      "ization" : "ize",
      "ation" : "ate",
      "ator" : "ate",
      "alism" : "al",
      "iveness" : "ive",
      "fulness" : "ful",
      "ousness" : "ous",
      "aliti" : "al",
      "iviti" : "ive",
      "biliti" : "ble",
      "logi" : "log"
    },

    step3list = {
      "icate" : "ic",
      "ative" : "",
      "alize" : "al",
      "iciti" : "ic",
      "ical" : "ic",
      "ful" : "",
      "ness" : ""
    },

    c = "[^aeiou]",          // consonant
    v = "[aeiouy]",          // vowel
    C = c + "[^aeiouy]*",    // consonant sequence
    V = v + "[aeiou]*",      // vowel sequence

    mgr0 = "^(" + C + ")?" + V + C,               // [C]VC... is m>0
    meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",  // [C]VC[V] is m=1
    mgr1 = "^(" + C + ")?" + V + C + V + C,       // [C]VCVC... is m>1
    s_v = "^(" + C + ")?" + v;                   // vowel in stem

  var re_mgr0 = new RegExp(mgr0);
  var re_mgr1 = new RegExp(mgr1);
  var re_meq1 = new RegExp(meq1);
  var re_s_v = new RegExp(s_v);

  var re_1a = /^(.+?)(ss|i)es$/;
  var re2_1a = /^(.+?)([^s])s$/;
  var re_1b = /^(.+?)eed$/;
  var re2_1b = /^(.+?)(ed|ing)$/;
  var re_1b_2 = /.$/;
  var re2_1b_2 = /(at|bl|iz)$/;
  var re3_1b_2 = new RegExp("([^aeiouylsz])\\1$");
  var re4_1b_2 = new RegExp("^" + C + v + "[^aeiouwxy]$");

  var re_1c = /^(.+?[^aeiou])y$/;
  var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;

  var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;

  var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
  var re2_4 = /^(.+?)(s|t)(ion)$/;

  var re_5 = /^(.+?)e$/;
  var re_5_1 = /ll$/;
  var re3_5 = new RegExp("^" + C + v + "[^aeiouwxy]$");

  var porterStemmer = function porterStemmer(w) {
    var stem,
      suffix,
      firstch,
      re,
      re2,
      re3,
      re4;

    if (w.length < 3) { return w; }

    firstch = w.substr(0,1);
    if (firstch == "y") {
      w = firstch.toUpperCase() + w.substr(1);
    }

    // Step 1a
    re = re_1a
    re2 = re2_1a;

    if (re.test(w)) { w = w.replace(re,"$1$2"); }
    else if (re2.test(w)) { w = w.replace(re2,"$1$2"); }

    // Step 1b
    re = re_1b;
    re2 = re2_1b;
    if (re.test(w)) {
      var fp = re.exec(w);
      re = re_mgr0;
      if (re.test(fp[1])) {
        re = re_1b_2;
        w = w.replace(re,"");
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1];
      re2 = re_s_v;
      if (re2.test(stem)) {
        w = stem;
        re2 = re2_1b_2;
        re3 = re3_1b_2;
        re4 = re4_1b_2;
        if (re2.test(w)) { w = w + "e"; }
        else if (re3.test(w)) { re = re_1b_2; w = w.replace(re,""); }
        else if (re4.test(w)) { w = w + "e"; }
      }
    }

    // Step 1c - replace suffix y or Y by i if preceded by a non-vowel which is not the first letter of the word (so cry -> cri, by -> by, say -> say)
    re = re_1c;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      w = stem + "i";
    }

    // Step 2
    re = re_2;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = re_mgr0;
      if (re.test(stem)) {
        w = stem + step2list[suffix];
      }
    }

    // Step 3
    re = re_3;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = re_mgr0;
      if (re.test(stem)) {
        w = stem + step3list[suffix];
      }
    }

    // Step 4
    re = re_4;
    re2 = re2_4;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = re_mgr1;
      if (re.test(stem)) {
        w = stem;
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1] + fp[2];
      re2 = re_mgr1;
      if (re2.test(stem)) {
        w = stem;
      }
    }

    // Step 5
    re = re_5;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = re_mgr1;
      re2 = re_meq1;
      re3 = re3_5;
      if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
        w = stem;
      }
    }

    re = re_5_1;
    re2 = re_mgr1;
    if (re.test(w) && re2.test(w)) {
      re = re_1b_2;
      w = w.replace(re,"");
    }

    // and turn initial Y back to y

    if (firstch == "y") {
      w = firstch.toLowerCase() + w.substr(1);
    }

    return w;
  };

  return function (token) {
    return token.update(porterStemmer);
  }
})();

lunr.Pipeline.registerFunction(lunr.stemmer, 'stemmer')
/*!
 * lunr.stopWordFilter
 * Copyright (C) 2018 Oliver Nightingale
 */

/**
 * lunr.generateStopWordFilter builds a stopWordFilter function from the provided
 * list of stop words.
 *
 * The built in lunr.stopWordFilter is built using this generator and can be used
 * to generate custom stopWordFilters for applications or non English languages.
 *
 * @function
 * @param {Array} token The token to pass through the filter
 * @returns {lunr.PipelineFunction}
 * @see lunr.Pipeline
 * @see lunr.stopWordFilter
 */
lunr.generateStopWordFilter = function (stopWords) {
  var words = stopWords.reduce(function (memo, stopWord) {
    memo[stopWord] = stopWord
    return memo
  }, {})

  return function (token) {
    if (token && words[token.toString()] !== token.toString()) return token
  }
}

/**
 * lunr.stopWordFilter is an English language stop word list filter, any words
 * contained in the list will not be passed through the filter.
 *
 * This is intended to be used in the Pipeline. If the token does not pass the
 * filter then undefined will be returned.
 *
 * @function
 * @implements {lunr.PipelineFunction}
 * @params {lunr.Token} token - A token to check for being a stop word.
 * @returns {lunr.Token}
 * @see {@link lunr.Pipeline}
 */
lunr.stopWordFilter = lunr.generateStopWordFilter([
  'a',
  'able',
  'about',
  'across',
  'after',
  'all',
  'almost',
  'also',
  'am',
  'among',
  'an',
  'and',
  'any',
  'are',
  'as',
  'at',
  'be',
  'because',
  'been',
  'but',
  'by',
  'can',
  'cannot',
  'could',
  'dear',
  'did',
  'do',
  'does',
  'either',
  'else',
  'ever',
  'every',
  'for',
  'from',
  'get',
  'got',
  'had',
  'has',
  'have',
  'he',
  'her',
  'hers',
  'him',
  'his',
  'how',
  'however',
  'i',
  'if',
  'in',
  'into',
  'is',
  'it',
  'its',
  'just',
  'least',
  'let',
  'like',
  'likely',
  'may',
  'me',
  'might',
  'most',
  'must',
  'my',
  'neither',
  'no',
  'nor',
  'not',
  'of',
  'off',
  'often',
  'on',
  'only',
  'or',
  'other',
  'our',
  'own',
  'rather',
  'said',
  'say',
  'says',
  'she',
  'should',
  'since',
  'so',
  'some',
  'than',
  'that',
  'the',
  'their',
  'them',
  'then',
  'there',
  'these',
  'they',
  'this',
  'tis',
  'to',
  'too',
  'twas',
  'us',
  'wants',
  'was',
  'we',
  'were',
  'what',
  'when',
  'where',
  'which',
  'while',
  'who',
  'whom',
  'why',
  'will',
  'with',
  'would',
  'yet',
  'you',
  'your'
])

lunr.Pipeline.registerFunction(lunr.stopWordFilter, 'stopWordFilter')
/*!
 * lunr.trimmer
 * Copyright (C) 2018 Oliver Nightingale
 */

/**
 * lunr.trimmer is a pipeline function for trimming non word
 * characters from the beginning and end of tokens before they
 * enter the index.
 *
 * This implementation may not work correctly for non latin
 * characters and should either be removed or adapted for use
 * with languages with non-latin characters.
 *
 * @static
 * @implements {lunr.PipelineFunction}
 * @param {lunr.Token} token The token to pass through the filter
 * @returns {lunr.Token}
 * @see lunr.Pipeline
 */
lunr.trimmer = function (token) {
  return token.update(function (s) {
    return s.replace(/^\W+/, '').replace(/\W+$/, '')
  })
}

lunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer')
/*!
 * lunr.TokenSet
 * Copyright (C) 2018 Oliver Nightingale
 */

/**
 * A token set is used to store the unique list of all tokens
 * within an index. Token sets are also used to represent an
 * incoming query to the index, this query token set and index
 * token set are then intersected to find which tokens to look
 * up in the inverted index.
 *
 * A token set can hold multiple tokens, as in the case of the
 * index token set, or it can hold a single token as in the
 * case of a simple query token set.
 *
 * Additionally token sets are used to perform wildcard matching.
 * Leading, contained and trailing wildcards are supported, and
 * from this edit distance matching can also be provided.
 *
 * Token sets are implemented as a minimal finite state automata,
 * where both common prefixes and suffixes are shared between tokens.
 * This helps to reduce the space used for storing the token set.
 *
 * @constructor
 */
lunr.TokenSet = function () {
  this.final = false
  this.edges = {}
  this.id = lunr.TokenSet._nextId
  lunr.TokenSet._nextId += 1
}

/**
 * Keeps track of the next, auto increment, identifier to assign
 * to a new tokenSet.
 *
 * TokenSets require a unique identifier to be correctly minimised.
 *
 * @private
 */
lunr.TokenSet._nextId = 1

/**
 * Creates a TokenSet instance from the given sorted array of words.
 *
 * @param {String[]} arr - A sorted array of strings to create the set from.
 * @returns {lunr.TokenSet}
 * @throws Will throw an error if the input array is not sorted.
 */
lunr.TokenSet.fromArray = function (arr) {
  var builder = new lunr.TokenSet.Builder

  for (var i = 0, len = arr.length; i < len; i++) {
    builder.insert(arr[i])
  }

  builder.finish()
  return builder.root
}

/**
 * Creates a token set from a query clause.
 *
 * @private
 * @param {Object} clause - A single clause from lunr.Query.
 * @param {string} clause.term - The query clause term.
 * @param {number} [clause.editDistance] - The optional edit distance for the term.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.fromClause = function (clause) {
  if ('editDistance' in clause) {
    return lunr.TokenSet.fromFuzzyString(clause.term, clause.editDistance)
  } else {
    return lunr.TokenSet.fromString(clause.term)
  }
}

/**
 * Creates a token set representing a single string with a specified
 * edit distance.
 *
 * Insertions, deletions, substitutions and transpositions are each
 * treated as an edit distance of 1.
 *
 * Increasing the allowed edit distance will have a dramatic impact
 * on the performance of both creating and intersecting these TokenSets.
 * It is advised to keep the edit distance less than 3.
 *
 * @param {string} str - The string to create the token set from.
 * @param {number} editDistance - The allowed edit distance to match.
 * @returns {lunr.Vector}
 */
lunr.TokenSet.fromFuzzyString = function (str, editDistance) {
  var root = new lunr.TokenSet

  var stack = [{
    node: root,
    editsRemaining: editDistance,
    str: str
  }]

  while (stack.length) {
    var frame = stack.pop()

    // no edit
    if (frame.str.length > 0) {
      var char = frame.str.charAt(0),
          noEditNode

      if (char in frame.node.edges) {
        noEditNode = frame.node.edges[char]
      } else {
        noEditNode = new lunr.TokenSet
        frame.node.edges[char] = noEditNode
      }

      if (frame.str.length == 1) {
        noEditNode.final = true
      }

      stack.push({
        node: noEditNode,
        editsRemaining: frame.editsRemaining,
        str: frame.str.slice(1)
      })
    }

    // deletion
    // can only do a deletion if we have enough edits remaining
    // and if there are characters left to delete in the string
    if (frame.editsRemaining > 0 && frame.str.length > 1) {
      var char = frame.str.charAt(1),
          deletionNode

      if (char in frame.node.edges) {
        deletionNode = frame.node.edges[char]
      } else {
        deletionNode = new lunr.TokenSet
        frame.node.edges[char] = deletionNode
      }

      if (frame.str.length <= 2) {
        deletionNode.final = true
      } else {
        stack.push({
          node: deletionNode,
          editsRemaining: frame.editsRemaining - 1,
          str: frame.str.slice(2)
        })
      }
    }

    // deletion
    // just removing the last character from the str
    if (frame.editsRemaining > 0 && frame.str.length == 1) {
      frame.node.final = true
    }

    // substitution
    // can only do a substitution if we have enough edits remaining
    // and if there are characters left to substitute
    if (frame.editsRemaining > 0 && frame.str.length >= 1) {
      if ("*" in frame.node.edges) {
        var substitutionNode = frame.node.edges["*"]
      } else {
        var substitutionNode = new lunr.TokenSet
        frame.node.edges["*"] = substitutionNode
      }

      if (frame.str.length == 1) {
        substitutionNode.final = true
      } else {
        stack.push({
          node: substitutionNode,
          editsRemaining: frame.editsRemaining - 1,
          str: frame.str.slice(1)
        })
      }
    }

    // insertion
    // can only do insertion if there are edits remaining
    if (frame.editsRemaining > 0) {
      if ("*" in frame.node.edges) {
        var insertionNode = frame.node.edges["*"]
      } else {
        var insertionNode = new lunr.TokenSet
        frame.node.edges["*"] = insertionNode
      }

      if (frame.str.length == 0) {
        insertionNode.final = true
      } else {
        stack.push({
          node: insertionNode,
          editsRemaining: frame.editsRemaining - 1,
          str: frame.str
        })
      }
    }

    // transposition
    // can only do a transposition if there are edits remaining
    // and there are enough characters to transpose
    if (frame.editsRemaining > 0 && frame.str.length > 1) {
      var charA = frame.str.charAt(0),
          charB = frame.str.charAt(1),
          transposeNode

      if (charB in frame.node.edges) {
        transposeNode = frame.node.edges[charB]
      } else {
        transposeNode = new lunr.TokenSet
        frame.node.edges[charB] = transposeNode
      }

      if (frame.str.length == 1) {
        transposeNode.final = true
      } else {
        stack.push({
          node: transposeNode,
          editsRemaining: frame.editsRemaining - 1,
          str: charA + frame.str.slice(2)
        })
      }
    }
  }

  return root
}

/**
 * Creates a TokenSet from a string.
 *
 * The string may contain one or more wildcard characters (*)
 * that will allow wildcard matching when intersecting with
 * another TokenSet.
 *
 * @param {string} str - The string to create a TokenSet from.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.fromString = function (str) {
  var node = new lunr.TokenSet,
      root = node

  /*
   * Iterates through all characters within the passed string
   * appending a node for each character.
   *
   * When a wildcard character is found then a self
   * referencing edge is introduced to continually match
   * any number of any characters.
   */
  for (var i = 0, len = str.length; i < len; i++) {
    var char = str[i],
        final = (i == len - 1)

    if (char == "*") {
      node.edges[char] = node
      node.final = final

    } else {
      var next = new lunr.TokenSet
      next.final = final

      node.edges[char] = next
      node = next
    }
  }

  return root
}

/**
 * Converts this TokenSet into an array of strings
 * contained within the TokenSet.
 *
 * @returns {string[]}
 */
lunr.TokenSet.prototype.toArray = function () {
  var words = []

  var stack = [{
    prefix: "",
    node: this
  }]

  while (stack.length) {
    var frame = stack.pop(),
        edges = Object.keys(frame.node.edges),
        len = edges.length

    if (frame.node.final) {
      /* In Safari, at this point the prefix is sometimes corrupted, see:
       * https://github.com/olivernn/lunr.js/issues/279 Calling any
       * String.prototype method forces Safari to "cast" this string to what
       * it's supposed to be, fixing the bug. */
      frame.prefix.charAt(0)
      words.push(frame.prefix)
    }

    for (var i = 0; i < len; i++) {
      var edge = edges[i]

      stack.push({
        prefix: frame.prefix.concat(edge),
        node: frame.node.edges[edge]
      })
    }
  }

  return words
}

/**
 * Generates a string representation of a TokenSet.
 *
 * This is intended to allow TokenSets to be used as keys
 * in objects, largely to aid the construction and minimisation
 * of a TokenSet. As such it is not designed to be a human
 * friendly representation of the TokenSet.
 *
 * @returns {string}
 */
lunr.TokenSet.prototype.toString = function () {
  // NOTE: Using Object.keys here as this.edges is very likely
  // to enter 'hash-mode' with many keys being added
  //
  // avoiding a for-in loop here as it leads to the function
  // being de-optimised (at least in V8). From some simple
  // benchmarks the performance is comparable, but allowing
  // V8 to optimize may mean easy performance wins in the future.

  if (this._str) {
    return this._str
  }

  var str = this.final ? '1' : '0',
      labels = Object.keys(this.edges).sort(),
      len = labels.length

  for (var i = 0; i < len; i++) {
    var label = labels[i],
        node = this.edges[label]

    str = str + label + node.id
  }

  return str
}

/**
 * Returns a new TokenSet that is the intersection of
 * this TokenSet and the passed TokenSet.
 *
 * This intersection will take into account any wildcards
 * contained within the TokenSet.
 *
 * @param {lunr.TokenSet} b - An other TokenSet to intersect with.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.prototype.intersect = function (b) {
  var output = new lunr.TokenSet,
      frame = undefined

  var stack = [{
    qNode: b,
    output: output,
    node: this
  }]

  while (stack.length) {
    frame = stack.pop()

    // NOTE: As with the #toString method, we are using
    // Object.keys and a for loop instead of a for-in loop
    // as both of these objects enter 'hash' mode, causing
    // the function to be de-optimised in V8
    var qEdges = Object.keys(frame.qNode.edges),
        qLen = qEdges.length,
        nEdges = Object.keys(frame.node.edges),
        nLen = nEdges.length

    for (var q = 0; q < qLen; q++) {
      var qEdge = qEdges[q]

      for (var n = 0; n < nLen; n++) {
        var nEdge = nEdges[n]

        if (nEdge == qEdge || qEdge == '*') {
          var node = frame.node.edges[nEdge],
              qNode = frame.qNode.edges[qEdge],
              final = node.final && qNode.final,
              next = undefined

          if (nEdge in frame.output.edges) {
            // an edge already exists for this character
            // no need to create a new node, just set the finality
            // bit unless this node is already final
            next = frame.output.edges[nEdge]
            next.final = next.final || final

          } else {
            // no edge exists yet, must create one
            // set the finality bit and insert it
            // into the output
            next = new lunr.TokenSet
            next.final = final
            frame.output.edges[nEdge] = next
          }

          stack.push({
            qNode: qNode,
            output: next,
            node: node
          })
        }
      }
    }
  }

  return output
}
lunr.TokenSet.Builder = function () {
  this.previousWord = ""
  this.root = new lunr.TokenSet
  this.uncheckedNodes = []
  this.minimizedNodes = {}
}

lunr.TokenSet.Builder.prototype.insert = function (word) {
  var node,
      commonPrefix = 0

  if (word < this.previousWord) {
    throw new Error ("Out of order word insertion")
  }

  for (var i = 0; i < word.length && i < this.previousWord.length; i++) {
    if (word[i] != this.previousWord[i]) break
    commonPrefix++
  }

  this.minimize(commonPrefix)

  if (this.uncheckedNodes.length == 0) {
    node = this.root
  } else {
    node = this.uncheckedNodes[this.uncheckedNodes.length - 1].child
  }

  for (var i = commonPrefix; i < word.length; i++) {
    var nextNode = new lunr.TokenSet,
        char = word[i]

    node.edges[char] = nextNode

    this.uncheckedNodes.push({
      parent: node,
      char: char,
      child: nextNode
    })

    node = nextNode
  }

  node.final = true
  this.previousWord = word
}

lunr.TokenSet.Builder.prototype.finish = function () {
  this.minimize(0)
}

lunr.TokenSet.Builder.prototype.minimize = function (downTo) {
  for (var i = this.uncheckedNodes.length - 1; i >= downTo; i--) {
    var node = this.uncheckedNodes[i],
        childKey = node.child.toString()

    if (childKey in this.minimizedNodes) {
      node.parent.edges[node.char] = this.minimizedNodes[childKey]
    } else {
      // Cache the key for this node since
      // we know it can't change anymore
      node.child._str = childKey

      this.minimizedNodes[childKey] = node.child
    }

    this.uncheckedNodes.pop()
  }
}
/*!
 * lunr.Index
 * Copyright (C) 2018 Oliver Nightingale
 */

/**
 * An index contains the built index of all documents and provides a query interface
 * to the index.
 *
 * Usually instances of lunr.Index will not be created using this constructor, instead
 * lunr.Builder should be used to construct new indexes, or lunr.Index.load should be
 * used to load previously built and serialized indexes.
 *
 * @constructor
 * @param {Object} attrs - The attributes of the built search index.
 * @param {Object} attrs.invertedIndex - An index of term/field to document reference.
 * @param {Object<string, lunr.Vector>} attrs.fieldVectors - Field vectors
 * @param {lunr.TokenSet} attrs.tokenSet - An set of all corpus tokens.
 * @param {string[]} attrs.fields - The names of indexed document fields.
 * @param {lunr.Pipeline} attrs.pipeline - The pipeline to use for search terms.
 */
lunr.Index = function (attrs) {
  this.invertedIndex = attrs.invertedIndex
  this.fieldVectors = attrs.fieldVectors
  this.tokenSet = attrs.tokenSet
  this.fields = attrs.fields
  this.pipeline = attrs.pipeline
}

/**
 * A result contains details of a document matching a search query.
 * @typedef {Object} lunr.Index~Result
 * @property {string} ref - The reference of the document this result represents.
 * @property {number} score - A number between 0 and 1 representing how similar this document is to the query.
 * @property {lunr.MatchData} matchData - Contains metadata about this match including which term(s) caused the match.
 */

/**
 * Although lunr provides the ability to create queries using lunr.Query, it also provides a simple
 * query language which itself is parsed into an instance of lunr.Query.
 *
 * For programmatically building queries it is advised to directly use lunr.Query, the query language
 * is best used for human entered text rather than program generated text.
 *
 * At its simplest queries can just be a single term, e.g. `hello`, multiple terms are also supported
 * and will be combined with OR, e.g `hello world` will match documents that contain either 'hello'
 * or 'world', though those that contain both will rank higher in the results.
 *
 * Wildcards can be included in terms to match one or more unspecified characters, these wildcards can
 * be inserted anywhere within the term, and more than one wildcard can exist in a single term. Adding
 * wildcards will increase the number of documents that will be found but can also have a negative
 * impact on query performance, especially with wildcards at the beginning of a term.
 *
 * Terms can be restricted to specific fields, e.g. `title:hello`, only documents with the term
 * hello in the title field will match this query. Using a field not present in the index will lead
 * to an error being thrown.
 *
 * Modifiers can also be added to terms, lunr supports edit distance and boost modifiers on terms. A term
 * boost will make documents matching that term score higher, e.g. `foo^5`. Edit distance is also supported
 * to provide fuzzy matching, e.g. 'hello~2' will match documents with hello with an edit distance of 2.
 * Avoid large values for edit distance to improve query performance.
 *
 * Each term also supports a presence modifier. By default a term's presence in document is optional, however
 * this can be changed to either required or prohibited. For a term's presence to be required in a document the
 * term should be prefixed with a '+', e.g. `+foo bar` is a search for documents that must contain 'foo' and
 * optionally contain 'bar'. Conversely a leading '-' sets the terms presence to prohibited, i.e. it must not
 * appear in a document, e.g. `-foo bar` is a search for documents that do not contain 'foo' but may contain 'bar'.
 *
 * To escape special characters the backslash character '\' can be used, this allows searches to include
 * characters that would normally be considered modifiers, e.g. `foo\~2` will search for a term "foo~2" instead
 * of attempting to apply a boost of 2 to the search term "foo".
 *
 * @typedef {string} lunr.Index~QueryString
 * @example <caption>Simple single term query</caption>
 * hello
 * @example <caption>Multiple term query</caption>
 * hello world
 * @example <caption>term scoped to a field</caption>
 * title:hello
 * @example <caption>term with a boost of 10</caption>
 * hello^10
 * @example <caption>term with an edit distance of 2</caption>
 * hello~2
 * @example <caption>terms with presence modifiers</caption>
 * -foo +bar baz
 */

/**
 * Performs a search against the index using lunr query syntax.
 *
 * Results will be returned sorted by their score, the most relevant results
 * will be returned first.  For details on how the score is calculated, please see
 * the {@link https://lunrjs.com/guides/searching.html#scoring|guide}.
 *
 * For more programmatic querying use lunr.Index#query.
 *
 * @param {lunr.Index~QueryString} queryString - A string containing a lunr query.
 * @throws {lunr.QueryParseError} If the passed query string cannot be parsed.
 * @returns {lunr.Index~Result[]}
 */
lunr.Index.prototype.search = function (queryString) {
  return this.query(function (query) {
    var parser = new lunr.QueryParser(queryString, query)
    parser.parse()
  })
}

/**
 * A query builder callback provides a query object to be used to express
 * the query to perform on the index.
 *
 * @callback lunr.Index~queryBuilder
 * @param {lunr.Query} query - The query object to build up.
 * @this lunr.Query
 */

/**
 * Performs a query against the index using the yielded lunr.Query object.
 *
 * If performing programmatic queries against the index, this method is preferred
 * over lunr.Index#search so as to avoid the additional query parsing overhead.
 *
 * A query object is yielded to the supplied function which should be used to
 * express the query to be run against the index.
 *
 * Note that although this function takes a callback parameter it is _not_ an
 * asynchronous operation, the callback is just yielded a query object to be
 * customized.
 *
 * @param {lunr.Index~queryBuilder} fn - A function that is used to build the query.
 * @returns {lunr.Index~Result[]}
 */
lunr.Index.prototype.query = function (fn) {
  // for each query clause
  // * process terms
  // * expand terms from token set
  // * find matching documents and metadata
  // * get document vectors
  // * score documents

  var query = new lunr.Query(this.fields),
      matchingFields = Object.create(null),
      queryVectors = Object.create(null),
      termFieldCache = Object.create(null),
      requiredMatches = Object.create(null),
      prohibitedMatches = Object.create(null)

  /*
   * To support field level boosts a query vector is created per
   * field. An empty vector is eagerly created to support negated
   * queries.
   */
  for (var i = 0; i < this.fields.length; i++) {
    queryVectors[this.fields[i]] = new lunr.Vector
  }

  fn.call(query, query)

  for (var i = 0; i < query.clauses.length; i++) {
    /*
     * Unless the pipeline has been disabled for this term, which is
     * the case for terms with wildcards, we need to pass the clause
     * term through the search pipeline. A pipeline returns an array
     * of processed terms. Pipeline functions may expand the passed
     * term, which means we may end up performing multiple index lookups
     * for a single query term.
     */
    var clause = query.clauses[i],
        terms = null,
        clauseMatches = lunr.Set.complete

    if (clause.usePipeline) {
      terms = this.pipeline.runString(clause.term, {
        fields: clause.fields
      })
    } else {
      terms = [clause.term]
    }

    for (var m = 0; m < terms.length; m++) {
      var term = terms[m]

      /*
       * Each term returned from the pipeline needs to use the same query
       * clause object, e.g. the same boost and or edit distance. The
       * simplest way to do this is to re-use the clause object but mutate
       * its term property.
       */
      clause.term = term

      /*
       * From the term in the clause we create a token set which will then
       * be used to intersect the indexes token set to get a list of terms
       * to lookup in the inverted index
       */
      var termTokenSet = lunr.TokenSet.fromClause(clause),
          expandedTerms = this.tokenSet.intersect(termTokenSet).toArray()

      /*
       * If a term marked as required does not exist in the tokenSet it is
       * impossible for the search to return any matches. We set all the field
       * scoped required matches set to empty and stop examining any further
       * clauses.
       */
      if (expandedTerms.length === 0 && clause.presence === lunr.Query.presence.REQUIRED) {
        for (var k = 0; k < clause.fields.length; k++) {
          var field = clause.fields[k]
          requiredMatches[field] = lunr.Set.empty
        }

        break
      }

      for (var j = 0; j < expandedTerms.length; j++) {
        /*
         * For each term get the posting and termIndex, this is required for
         * building the query vector.
         */
        var expandedTerm = expandedTerms[j],
            posting = this.invertedIndex[expandedTerm],
            termIndex = posting._index

        for (var k = 0; k < clause.fields.length; k++) {
          /*
           * For each field that this query term is scoped by (by default
           * all fields are in scope) we need to get all the document refs
           * that have this term in that field.
           *
           * The posting is the entry in the invertedIndex for the matching
           * term from above.
           */
          var field = clause.fields[k],
              fieldPosting = posting[field],
              matchingDocumentRefs = Object.keys(fieldPosting),
              termField = expandedTerm + "/" + field,
              matchingDocumentsSet = new lunr.Set(matchingDocumentRefs)

          /*
           * if the presence of this term is required ensure that the matching
           * documents are added to the set of required matches for this clause.
           *
           */
          if (clause.presence == lunr.Query.presence.REQUIRED) {
            clauseMatches = clauseMatches.union(matchingDocumentsSet)

            if (requiredMatches[field] === undefined) {
              requiredMatches[field] = lunr.Set.complete
            }
          }

          /*
           * if the presence of this term is prohibited ensure that the matching
           * documents are added to the set of prohibited matches for this field,
           * creating that set if it does not yet exist.
           */
          if (clause.presence == lunr.Query.presence.PROHIBITED) {
            if (prohibitedMatches[field] === undefined) {
              prohibitedMatches[field] = lunr.Set.empty
            }

            prohibitedMatches[field] = prohibitedMatches[field].union(matchingDocumentsSet)

            /*
             * Prohibited matches should not be part of the query vector used for
             * similarity scoring and no metadata should be extracted so we continue
             * to the next field
             */
            continue
          }

          /*
           * The query field vector is populated using the termIndex found for
           * the term and a unit value with the appropriate boost applied.
           * Using upsert because there could already be an entry in the vector
           * for the term we are working with. In that case we just add the scores
           * together.
           */
          queryVectors[field].upsert(termIndex, clause.boost, function (a, b) { return a + b })

          /**
           * If we've already seen this term, field combo then we've already collected
           * the matching documents and metadata, no need to go through all that again
           */
          if (termFieldCache[termField]) {
            continue
          }

          for (var l = 0; l < matchingDocumentRefs.length; l++) {
            /*
             * All metadata for this term/field/document triple
             * are then extracted and collected into an instance
             * of lunr.MatchData ready to be returned in the query
             * results
             */
            var matchingDocumentRef = matchingDocumentRefs[l],
                matchingFieldRef = new lunr.FieldRef (matchingDocumentRef, field),
                metadata = fieldPosting[matchingDocumentRef],
                fieldMatch

            if ((fieldMatch = matchingFields[matchingFieldRef]) === undefined) {
              matchingFields[matchingFieldRef] = new lunr.MatchData (expandedTerm, field, metadata)
            } else {
              fieldMatch.add(expandedTerm, field, metadata)
            }

          }

          termFieldCache[termField] = true
        }
      }
    }

    /**
     * If the presence was required we need to update the requiredMatches field sets.
     * We do this after all fields for the term have collected their matches because
     * the clause terms presence is required in _any_ of the fields not _all_ of the
     * fields.
     */
    if (clause.presence === lunr.Query.presence.REQUIRED) {
      for (var k = 0; k < clause.fields.length; k++) {
        var field = clause.fields[k]
        requiredMatches[field] = requiredMatches[field].intersect(clauseMatches)
      }
    }
  }

  /**
   * Need to combine the field scoped required and prohibited
   * matching documents into a global set of required and prohibited
   * matches
   */
  var allRequiredMatches = lunr.Set.complete,
      allProhibitedMatches = lunr.Set.empty

  for (var i = 0; i < this.fields.length; i++) {
    var field = this.fields[i]

    if (requiredMatches[field]) {
      allRequiredMatches = allRequiredMatches.intersect(requiredMatches[field])
    }

    if (prohibitedMatches[field]) {
      allProhibitedMatches = allProhibitedMatches.union(prohibitedMatches[field])
    }
  }

  var matchingFieldRefs = Object.keys(matchingFields),
      results = [],
      matches = Object.create(null)

  /*
   * If the query is negated (contains only prohibited terms)
   * we need to get _all_ fieldRefs currently existing in the
   * index. This is only done when we know that the query is
   * entirely prohibited terms to avoid any cost of getting all
   * fieldRefs unnecessarily.
   *
   * Additionally, blank MatchData must be created to correctly
   * populate the results.
   */
  if (query.isNegated()) {
    matchingFieldRefs = Object.keys(this.fieldVectors)

    for (var i = 0; i < matchingFieldRefs.length; i++) {
      var matchingFieldRef = matchingFieldRefs[i]
      var fieldRef = lunr.FieldRef.fromString(matchingFieldRef)
      matchingFields[matchingFieldRef] = new lunr.MatchData
    }
  }

  for (var i = 0; i < matchingFieldRefs.length; i++) {
    /*
     * Currently we have document fields that match the query, but we
     * need to return documents. The matchData and scores are combined
     * from multiple fields belonging to the same document.
     *
     * Scores are calculated by field, using the query vectors created
     * above, and combined into a final document score using addition.
     */
    var fieldRef = lunr.FieldRef.fromString(matchingFieldRefs[i]),
        docRef = fieldRef.docRef

    if (!allRequiredMatches.contains(docRef)) {
      continue
    }

    if (allProhibitedMatches.contains(docRef)) {
      continue
    }

    var fieldVector = this.fieldVectors[fieldRef],
        score = queryVectors[fieldRef.fieldName].similarity(fieldVector),
        docMatch

    if ((docMatch = matches[docRef]) !== undefined) {
      docMatch.score += score
      docMatch.matchData.combine(matchingFields[fieldRef])
    } else {
      var match = {
        ref: docRef,
        score: score,
        matchData: matchingFields[fieldRef]
      }
      matches[docRef] = match
      results.push(match)
    }
  }

  /*
   * Sort the results objects by score, highest first.
   */
  return results.sort(function (a, b) {
    return b.score - a.score
  })
}

/**
 * Prepares the index for JSON serialization.
 *
 * The schema for this JSON blob will be described in a
 * separate JSON schema file.
 *
 * @returns {Object}
 */
lunr.Index.prototype.toJSON = function () {
  var invertedIndex = Object.keys(this.invertedIndex)
    .sort()
    .map(function (term) {
      return [term, this.invertedIndex[term]]
    }, this)

  var fieldVectors = Object.keys(this.fieldVectors)
    .map(function (ref) {
      return [ref, this.fieldVectors[ref].toJSON()]
    }, this)

  return {
    version: lunr.version,
    fields: this.fields,
    fieldVectors: fieldVectors,
    invertedIndex: invertedIndex,
    pipeline: this.pipeline.toJSON()
  }
}

/**
 * Loads a previously serialized lunr.Index
 *
 * @param {Object} serializedIndex - A previously serialized lunr.Index
 * @returns {lunr.Index}
 */
lunr.Index.load = function (serializedIndex) {
  var attrs = {},
      fieldVectors = {},
      serializedVectors = serializedIndex.fieldVectors,
      invertedIndex = Object.create(null),
      serializedInvertedIndex = serializedIndex.invertedIndex,
      tokenSetBuilder = new lunr.TokenSet.Builder,
      pipeline = lunr.Pipeline.load(serializedIndex.pipeline)

  if (serializedIndex.version != lunr.version) {
    lunr.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + lunr.version + "' does not match serialized index '" + serializedIndex.version + "'")
  }

  for (var i = 0; i < serializedVectors.length; i++) {
    var tuple = serializedVectors[i],
        ref = tuple[0],
        elements = tuple[1]

    fieldVectors[ref] = new lunr.Vector(elements)
  }

  for (var i = 0; i < serializedInvertedIndex.length; i++) {
    var tuple = serializedInvertedIndex[i],
        term = tuple[0],
        posting = tuple[1]

    tokenSetBuilder.insert(term)
    invertedIndex[term] = posting
  }

  tokenSetBuilder.finish()

  attrs.fields = serializedIndex.fields

  attrs.fieldVectors = fieldVectors
  attrs.invertedIndex = invertedIndex
  attrs.tokenSet = tokenSetBuilder.root
  attrs.pipeline = pipeline

  return new lunr.Index(attrs)
}
/*!
 * lunr.Builder
 * Copyright (C) 2018 Oliver Nightingale
 */

/**
 * lunr.Builder performs indexing on a set of documents and
 * returns instances of lunr.Index ready for querying.
 *
 * All configuration of the index is done via the builder, the
 * fields to index, the document reference, the text processing
 * pipeline and document scoring parameters are all set on the
 * builder before indexing.
 *
 * @constructor
 * @property {string} _ref - Internal reference to the document reference field.
 * @property {string[]} _fields - Internal reference to the document fields to index.
 * @property {object} invertedIndex - The inverted index maps terms to document fields.
 * @property {object} documentTermFrequencies - Keeps track of document term frequencies.
 * @property {object} documentLengths - Keeps track of the length of documents added to the index.
 * @property {lunr.tokenizer} tokenizer - Function for splitting strings into tokens for indexing.
 * @property {lunr.Pipeline} pipeline - The pipeline performs text processing on tokens before indexing.
 * @property {lunr.Pipeline} searchPipeline - A pipeline for processing search terms before querying the index.
 * @property {number} documentCount - Keeps track of the total number of documents indexed.
 * @property {number} _b - A parameter to control field length normalization, setting this to 0 disabled normalization, 1 fully normalizes field lengths, the default value is 0.75.
 * @property {number} _k1 - A parameter to control how quickly an increase in term frequency results in term frequency saturation, the default value is 1.2.
 * @property {number} termIndex - A counter incremented for each unique term, used to identify a terms position in the vector space.
 * @property {array} metadataWhitelist - A list of metadata keys that have been whitelisted for entry in the index.
 */
lunr.Builder = function () {
  this._ref = "id"
  this._fields = Object.create(null)
  this._documents = Object.create(null)
  this.invertedIndex = Object.create(null)
  this.fieldTermFrequencies = {}
  this.fieldLengths = {}
  this.tokenizer = lunr.tokenizer
  this.pipeline = new lunr.Pipeline
  this.searchPipeline = new lunr.Pipeline
  this.documentCount = 0
  this._b = 0.75
  this._k1 = 1.2
  this.termIndex = 0
  this.metadataWhitelist = []
}

/**
 * Sets the document field used as the document reference. Every document must have this field.
 * The type of this field in the document should be a string, if it is not a string it will be
 * coerced into a string by calling toString.
 *
 * The default ref is 'id'.
 *
 * The ref should _not_ be changed during indexing, it should be set before any documents are
 * added to the index. Changing it during indexing can lead to inconsistent results.
 *
 * @param {string} ref - The name of the reference field in the document.
 */
lunr.Builder.prototype.ref = function (ref) {
  this._ref = ref
}

/**
 * A function that is used to extract a field from a document.
 *
 * Lunr expects a field to be at the top level of a document, if however the field
 * is deeply nested within a document an extractor function can be used to extract
 * the right field for indexing.
 *
 * @callback fieldExtractor
 * @param {object} doc - The document being added to the index.
 * @returns {?(string|object|object[])} obj - The object that will be indexed for this field.
 * @example <caption>Extracting a nested field</caption>
 * function (doc) { return doc.nested.field }
 */

/**
 * Adds a field to the list of document fields that will be indexed. Every document being
 * indexed should have this field. Null values for this field in indexed documents will
 * not cause errors but will limit the chance of that document being retrieved by searches.
 *
 * All fields should be added before adding documents to the index. Adding fields after
 * a document has been indexed will have no effect on already indexed documents.
 *
 * Fields can be boosted at build time. This allows terms within that field to have more
 * importance when ranking search results. Use a field boost to specify that matches within
 * one field are more important than other fields.
 *
 * @param {string} fieldName - The name of a field to index in all documents.
 * @param {object} attributes - Optional attributes associated with this field.
 * @param {number} [attributes.boost=1] - Boost applied to all terms within this field.
 * @param {fieldExtractor} [attributes.extractor] - Function to extract a field from a document.
 * @throws {RangeError} fieldName cannot contain unsupported characters '/'
 */
lunr.Builder.prototype.field = function (fieldName, attributes) {
  if (/\//.test(fieldName)) {
    throw new RangeError ("Field '" + fieldName + "' contains illegal character '/'")
  }

  this._fields[fieldName] = attributes || {}
}

/**
 * A parameter to tune the amount of field length normalisation that is applied when
 * calculating relevance scores. A value of 0 will completely disable any normalisation
 * and a value of 1 will fully normalise field lengths. The default is 0.75. Values of b
 * will be clamped to the range 0 - 1.
 *
 * @param {number} number - The value to set for this tuning parameter.
 */
lunr.Builder.prototype.b = function (number) {
  if (number < 0) {
    this._b = 0
  } else if (number > 1) {
    this._b = 1
  } else {
    this._b = number
  }
}

/**
 * A parameter that controls the speed at which a rise in term frequency results in term
 * frequency saturation. The default value is 1.2. Setting this to a higher value will give
 * slower saturation levels, a lower value will result in quicker saturation.
 *
 * @param {number} number - The value to set for this tuning parameter.
 */
lunr.Builder.prototype.k1 = function (number) {
  this._k1 = number
}

/**
 * Adds a document to the index.
 *
 * Before adding fields to the index the index should have been fully setup, with the document
 * ref and all fields to index already having been specified.
 *
 * The document must have a field name as specified by the ref (by default this is 'id') and
 * it should have all fields defined for indexing, though null or undefined values will not
 * cause errors.
 *
 * Entire documents can be boosted at build time. Applying a boost to a document indicates that
 * this document should rank higher in search results than other documents.
 *
 * @param {object} doc - The document to add to the index.
 * @param {object} attributes - Optional attributes associated with this document.
 * @param {number} [attributes.boost=1] - Boost applied to all terms within this document.
 */
lunr.Builder.prototype.add = function (doc, attributes) {
  var docRef = doc[this._ref],
      fields = Object.keys(this._fields)

  this._documents[docRef] = attributes || {}
  this.documentCount += 1

  for (var i = 0; i < fields.length; i++) {
    var fieldName = fields[i],
        extractor = this._fields[fieldName].extractor,
        field = extractor ? extractor(doc) : doc[fieldName],
        tokens = this.tokenizer(field, {
          fields: [fieldName]
        }),
        terms = this.pipeline.run(tokens),
        fieldRef = new lunr.FieldRef (docRef, fieldName),
        fieldTerms = Object.create(null)

    this.fieldTermFrequencies[fieldRef] = fieldTerms
    this.fieldLengths[fieldRef] = 0

    // store the length of this field for this document
    this.fieldLengths[fieldRef] += terms.length

    // calculate term frequencies for this field
    for (var j = 0; j < terms.length; j++) {
      var term = terms[j]

      if (fieldTerms[term] == undefined) {
        fieldTerms[term] = 0
      }

      fieldTerms[term] += 1

      // add to inverted index
      // create an initial posting if one doesn't exist
      if (this.invertedIndex[term] == undefined) {
        var posting = Object.create(null)
        posting["_index"] = this.termIndex
        this.termIndex += 1

        for (var k = 0; k < fields.length; k++) {
          posting[fields[k]] = Object.create(null)
        }

        this.invertedIndex[term] = posting
      }

      // add an entry for this term/fieldName/docRef to the invertedIndex
      if (this.invertedIndex[term][fieldName][docRef] == undefined) {
        this.invertedIndex[term][fieldName][docRef] = Object.create(null)
      }

      // store all whitelisted metadata about this token in the
      // inverted index
      for (var l = 0; l < this.metadataWhitelist.length; l++) {
        var metadataKey = this.metadataWhitelist[l],
            metadata = term.metadata[metadataKey]

        if (this.invertedIndex[term][fieldName][docRef][metadataKey] == undefined) {
          this.invertedIndex[term][fieldName][docRef][metadataKey] = []
        }

        this.invertedIndex[term][fieldName][docRef][metadataKey].push(metadata)
      }
    }

  }
}

/**
 * Calculates the average document length for this index
 *
 * @private
 */
lunr.Builder.prototype.calculateAverageFieldLengths = function () {

  var fieldRefs = Object.keys(this.fieldLengths),
      numberOfFields = fieldRefs.length,
      accumulator = {},
      documentsWithField = {}

  for (var i = 0; i < numberOfFields; i++) {
    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
        field = fieldRef.fieldName

    documentsWithField[field] || (documentsWithField[field] = 0)
    documentsWithField[field] += 1

    accumulator[field] || (accumulator[field] = 0)
    accumulator[field] += this.fieldLengths[fieldRef]
  }

  var fields = Object.keys(this._fields)

  for (var i = 0; i < fields.length; i++) {
    var fieldName = fields[i]
    accumulator[fieldName] = accumulator[fieldName] / documentsWithField[fieldName]
  }

  this.averageFieldLength = accumulator
}

/**
 * Builds a vector space model of every document using lunr.Vector
 *
 * @private
 */
lunr.Builder.prototype.createFieldVectors = function () {
  var fieldVectors = {},
      fieldRefs = Object.keys(this.fieldTermFrequencies),
      fieldRefsLength = fieldRefs.length,
      termIdfCache = Object.create(null)

  for (var i = 0; i < fieldRefsLength; i++) {
    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
        fieldName = fieldRef.fieldName,
        fieldLength = this.fieldLengths[fieldRef],
        fieldVector = new lunr.Vector,
        termFrequencies = this.fieldTermFrequencies[fieldRef],
        terms = Object.keys(termFrequencies),
        termsLength = terms.length


    var fieldBoost = this._fields[fieldName].boost || 1,
        docBoost = this._documents[fieldRef.docRef].boost || 1

    for (var j = 0; j < termsLength; j++) {
      var term = terms[j],
          tf = termFrequencies[term],
          termIndex = this.invertedIndex[term]._index,
          idf, score, scoreWithPrecision

      if (termIdfCache[term] === undefined) {
        idf = lunr.idf(this.invertedIndex[term], this.documentCount)
        termIdfCache[term] = idf
      } else {
        idf = termIdfCache[term]
      }

      score = idf * ((this._k1 + 1) * tf) / (this._k1 * (1 - this._b + this._b * (fieldLength / this.averageFieldLength[fieldName])) + tf)
      score *= fieldBoost
      score *= docBoost
      scoreWithPrecision = Math.round(score * 1000) / 1000
      // Converts 1.23456789 to 1.234.
      // Reducing the precision so that the vectors take up less
      // space when serialised. Doing it now so that they behave
      // the same before and after serialisation. Also, this is
      // the fastest approach to reducing a number's precision in
      // JavaScript.

      fieldVector.insert(termIndex, scoreWithPrecision)
    }

    fieldVectors[fieldRef] = fieldVector
  }

  this.fieldVectors = fieldVectors
}

/**
 * Creates a token set of all tokens in the index using lunr.TokenSet
 *
 * @private
 */
lunr.Builder.prototype.createTokenSet = function () {
  this.tokenSet = lunr.TokenSet.fromArray(
    Object.keys(this.invertedIndex).sort()
  )
}

/**
 * Builds the index, creating an instance of lunr.Index.
 *
 * This completes the indexing process and should only be called
 * once all documents have been added to the index.
 *
 * @returns {lunr.Index}
 */
lunr.Builder.prototype.build = function () {
  this.calculateAverageFieldLengths()
  this.createFieldVectors()
  this.createTokenSet()

  return new lunr.Index({
    invertedIndex: this.invertedIndex,
    fieldVectors: this.fieldVectors,
    tokenSet: this.tokenSet,
    fields: Object.keys(this._fields),
    pipeline: this.searchPipeline
  })
}

/**
 * Applies a plugin to the index builder.
 *
 * A plugin is a function that is called with the index builder as its context.
 * Plugins can be used to customise or extend the behaviour of the index
 * in some way. A plugin is just a function, that encapsulated the custom
 * behaviour that should be applied when building the index.
 *
 * The plugin function will be called with the index builder as its argument, additional
 * arguments can also be passed when calling use. The function will be called
 * with the index builder as its context.
 *
 * @param {Function} plugin The plugin to apply.
 */
lunr.Builder.prototype.use = function (fn) {
  var args = Array.prototype.slice.call(arguments, 1)
  args.unshift(this)
  fn.apply(this, args)
}
/**
 * Contains and collects metadata about a matching document.
 * A single instance of lunr.MatchData is returned as part of every
 * lunr.Index~Result.
 *
 * @constructor
 * @param {string} term - The term this match data is associated with
 * @param {string} field - The field in which the term was found
 * @param {object} metadata - The metadata recorded about this term in this field
 * @property {object} metadata - A cloned collection of metadata associated with this document.
 * @see {@link lunr.Index~Result}
 */
lunr.MatchData = function (term, field, metadata) {
  var clonedMetadata = Object.create(null),
      metadataKeys = Object.keys(metadata || {})

  // Cloning the metadata to prevent the original
  // being mutated during match data combination.
  // Metadata is kept in an array within the inverted
  // index so cloning the data can be done with
  // Array#slice
  for (var i = 0; i < metadataKeys.length; i++) {
    var key = metadataKeys[i]
    clonedMetadata[key] = metadata[key].slice()
  }

  this.metadata = Object.create(null)

  if (term !== undefined) {
    this.metadata[term] = Object.create(null)
    this.metadata[term][field] = clonedMetadata
  }
}

/**
 * An instance of lunr.MatchData will be created for every term that matches a
 * document. However only one instance is required in a lunr.Index~Result. This
 * method combines metadata from another instance of lunr.MatchData with this
 * objects metadata.
 *
 * @param {lunr.MatchData} otherMatchData - Another instance of match data to merge with this one.
 * @see {@link lunr.Index~Result}
 */
lunr.MatchData.prototype.combine = function (otherMatchData) {
  var terms = Object.keys(otherMatchData.metadata)

  for (var i = 0; i < terms.length; i++) {
    var term = terms[i],
        fields = Object.keys(otherMatchData.metadata[term])

    if (this.metadata[term] == undefined) {
      this.metadata[term] = Object.create(null)
    }

    for (var j = 0; j < fields.length; j++) {
      var field = fields[j],
          keys = Object.keys(otherMatchData.metadata[term][field])

      if (this.metadata[term][field] == undefined) {
        this.metadata[term][field] = Object.create(null)
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k]

        if (this.metadata[term][field][key] == undefined) {
          this.metadata[term][field][key] = otherMatchData.metadata[term][field][key]
        } else {
          this.metadata[term][field][key] = this.metadata[term][field][key].concat(otherMatchData.metadata[term][field][key])
        }

      }
    }
  }
}

/**
 * Add metadata for a term/field pair to this instance of match data.
 *
 * @param {string} term - The term this match data is associated with
 * @param {string} field - The field in which the term was found
 * @param {object} metadata - The metadata recorded about this term in this field
 */
lunr.MatchData.prototype.add = function (term, field, metadata) {
  if (!(term in this.metadata)) {
    this.metadata[term] = Object.create(null)
    this.metadata[term][field] = metadata
    return
  }

  if (!(field in this.metadata[term])) {
    this.metadata[term][field] = metadata
    return
  }

  var metadataKeys = Object.keys(metadata)

  for (var i = 0; i < metadataKeys.length; i++) {
    var key = metadataKeys[i]

    if (key in this.metadata[term][field]) {
      this.metadata[term][field][key] = this.metadata[term][field][key].concat(metadata[key])
    } else {
      this.metadata[term][field][key] = metadata[key]
    }
  }
}
/**
 * A lunr.Query provides a programmatic way of defining queries to be performed
 * against a {@link lunr.Index}.
 *
 * Prefer constructing a lunr.Query using the {@link lunr.Index#query} method
 * so the query object is pre-initialized with the right index fields.
 *
 * @constructor
 * @property {lunr.Query~Clause[]} clauses - An array of query clauses.
 * @property {string[]} allFields - An array of all available fields in a lunr.Index.
 */
lunr.Query = function (allFields) {
  this.clauses = []
  this.allFields = allFields
}

/**
 * Constants for indicating what kind of automatic wildcard insertion will be used when constructing a query clause.
 *
 * This allows wildcards to be added to the beginning and end of a term without having to manually do any string
 * concatenation.
 *
 * The wildcard constants can be bitwise combined to select both leading and trailing wildcards.
 *
 * @constant
 * @default
 * @property {number} wildcard.NONE - The term will have no wildcards inserted, this is the default behaviour
 * @property {number} wildcard.LEADING - Prepend the term with a wildcard, unless a leading wildcard already exists
 * @property {number} wildcard.TRAILING - Append a wildcard to the term, unless a trailing wildcard already exists
 * @see lunr.Query~Clause
 * @see lunr.Query#clause
 * @see lunr.Query#term
 * @example <caption>query term with trailing wildcard</caption>
 * query.term('foo', { wildcard: lunr.Query.wildcard.TRAILING })
 * @example <caption>query term with leading and trailing wildcard</caption>
 * query.term('foo', {
 *   wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING
 * })
 */

lunr.Query.wildcard = new String ("*")
lunr.Query.wildcard.NONE = 0
lunr.Query.wildcard.LEADING = 1
lunr.Query.wildcard.TRAILING = 2

/**
 * Constants for indicating what kind of presence a term must have in matching documents.
 *
 * @constant
 * @enum {number}
 * @see lunr.Query~Clause
 * @see lunr.Query#clause
 * @see lunr.Query#term
 * @example <caption>query term with required presence</caption>
 * query.term('foo', { presence: lunr.Query.presence.REQUIRED })
 */
lunr.Query.presence = {
  /**
   * Term's presence in a document is optional, this is the default value.
   */
  OPTIONAL: 1,

  /**
   * Term's presence in a document is required, documents that do not contain
   * this term will not be returned.
   */
  REQUIRED: 2,

  /**
   * Term's presence in a document is prohibited, documents that do contain
   * this term will not be returned.
   */
  PROHIBITED: 3
}

/**
 * A single clause in a {@link lunr.Query} contains a term and details on how to
 * match that term against a {@link lunr.Index}.
 *
 * @typedef {Object} lunr.Query~Clause
 * @property {string[]} fields - The fields in an index this clause should be matched against.
 * @property {number} [boost=1] - Any boost that should be applied when matching this clause.
 * @property {number} [editDistance] - Whether the term should have fuzzy matching applied, and how fuzzy the match should be.
 * @property {boolean} [usePipeline] - Whether the term should be passed through the search pipeline.
 * @property {number} [wildcard=lunr.Query.wildcard.NONE] - Whether the term should have wildcards appended or prepended.
 * @property {number} [presence=lunr.Query.presence.OPTIONAL] - The terms presence in any matching documents.
 */

/**
 * Adds a {@link lunr.Query~Clause} to this query.
 *
 * Unless the clause contains the fields to be matched all fields will be matched. In addition
 * a default boost of 1 is applied to the clause.
 *
 * @param {lunr.Query~Clause} clause - The clause to add to this query.
 * @see lunr.Query~Clause
 * @returns {lunr.Query}
 */
lunr.Query.prototype.clause = function (clause) {
  if (!('fields' in clause)) {
    clause.fields = this.allFields
  }

  if (!('boost' in clause)) {
    clause.boost = 1
  }

  if (!('usePipeline' in clause)) {
    clause.usePipeline = true
  }

  if (!('wildcard' in clause)) {
    clause.wildcard = lunr.Query.wildcard.NONE
  }

  if ((clause.wildcard & lunr.Query.wildcard.LEADING) && (clause.term.charAt(0) != lunr.Query.wildcard)) {
    clause.term = "*" + clause.term
  }

  if ((clause.wildcard & lunr.Query.wildcard.TRAILING) && (clause.term.slice(-1) != lunr.Query.wildcard)) {
    clause.term = "" + clause.term + "*"
  }

  if (!('presence' in clause)) {
    clause.presence = lunr.Query.presence.OPTIONAL
  }

  this.clauses.push(clause)

  return this
}

/**
 * A negated query is one in which every clause has a presence of
 * prohibited. These queries require some special processing to return
 * the expected results.
 *
 * @returns boolean
 */
lunr.Query.prototype.isNegated = function () {
  for (var i = 0; i < this.clauses.length; i++) {
    if (this.clauses[i].presence != lunr.Query.presence.PROHIBITED) {
      return false
    }
  }

  return true
}

/**
 * Adds a term to the current query, under the covers this will create a {@link lunr.Query~Clause}
 * to the list of clauses that make up this query.
 *
 * The term is used as is, i.e. no tokenization will be performed by this method. Instead conversion
 * to a token or token-like string should be done before calling this method.
 *
 * The term will be converted to a string by calling `toString`. Multiple terms can be passed as an
 * array, each term in the array will share the same options.
 *
 * @param {object|object[]} term - The term(s) to add to the query.
 * @param {object} [options] - Any additional properties to add to the query clause.
 * @returns {lunr.Query}
 * @see lunr.Query#clause
 * @see lunr.Query~Clause
 * @example <caption>adding a single term to a query</caption>
 * query.term("foo")
 * @example <caption>adding a single term to a query and specifying search fields, term boost and automatic trailing wildcard</caption>
 * query.term("foo", {
 *   fields: ["title"],
 *   boost: 10,
 *   wildcard: lunr.Query.wildcard.TRAILING
 * })
 * @example <caption>using lunr.tokenizer to convert a string to tokens before using them as terms</caption>
 * query.term(lunr.tokenizer("foo bar"))
 */
lunr.Query.prototype.term = function (term, options) {
  if (Array.isArray(term)) {
    term.forEach(function (t) { this.term(t, lunr.utils.clone(options)) }, this)
    return this
  }

  var clause = options || {}
  clause.term = term.toString()

  this.clause(clause)

  return this
}
lunr.QueryParseError = function (message, start, end) {
  this.name = "QueryParseError"
  this.message = message
  this.start = start
  this.end = end
}

lunr.QueryParseError.prototype = new Error
lunr.QueryLexer = function (str) {
  this.lexemes = []
  this.str = str
  this.length = str.length
  this.pos = 0
  this.start = 0
  this.escapeCharPositions = []
}

lunr.QueryLexer.prototype.run = function () {
  var state = lunr.QueryLexer.lexText

  while (state) {
    state = state(this)
  }
}

lunr.QueryLexer.prototype.sliceString = function () {
  var subSlices = [],
      sliceStart = this.start,
      sliceEnd = this.pos

  for (var i = 0; i < this.escapeCharPositions.length; i++) {
    sliceEnd = this.escapeCharPositions[i]
    subSlices.push(this.str.slice(sliceStart, sliceEnd))
    sliceStart = sliceEnd + 1
  }

  subSlices.push(this.str.slice(sliceStart, this.pos))
  this.escapeCharPositions.length = 0

  return subSlices.join('')
}

lunr.QueryLexer.prototype.emit = function (type) {
  this.lexemes.push({
    type: type,
    str: this.sliceString(),
    start: this.start,
    end: this.pos
  })

  this.start = this.pos
}

lunr.QueryLexer.prototype.escapeCharacter = function () {
  this.escapeCharPositions.push(this.pos - 1)
  this.pos += 1
}

lunr.QueryLexer.prototype.next = function () {
  if (this.pos >= this.length) {
    return lunr.QueryLexer.EOS
  }

  var char = this.str.charAt(this.pos)
  this.pos += 1
  return char
}

lunr.QueryLexer.prototype.width = function () {
  return this.pos - this.start
}

lunr.QueryLexer.prototype.ignore = function () {
  if (this.start == this.pos) {
    this.pos += 1
  }

  this.start = this.pos
}

lunr.QueryLexer.prototype.backup = function () {
  this.pos -= 1
}

lunr.QueryLexer.prototype.acceptDigitRun = function () {
  var char, charCode

  do {
    char = this.next()
    charCode = char.charCodeAt(0)
  } while (charCode > 47 && charCode < 58)

  if (char != lunr.QueryLexer.EOS) {
    this.backup()
  }
}

lunr.QueryLexer.prototype.more = function () {
  return this.pos < this.length
}

lunr.QueryLexer.EOS = 'EOS'
lunr.QueryLexer.FIELD = 'FIELD'
lunr.QueryLexer.TERM = 'TERM'
lunr.QueryLexer.EDIT_DISTANCE = 'EDIT_DISTANCE'
lunr.QueryLexer.BOOST = 'BOOST'
lunr.QueryLexer.PRESENCE = 'PRESENCE'

lunr.QueryLexer.lexField = function (lexer) {
  lexer.backup()
  lexer.emit(lunr.QueryLexer.FIELD)
  lexer.ignore()
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexTerm = function (lexer) {
  if (lexer.width() > 1) {
    lexer.backup()
    lexer.emit(lunr.QueryLexer.TERM)
  }

  lexer.ignore()

  if (lexer.more()) {
    return lunr.QueryLexer.lexText
  }
}

lunr.QueryLexer.lexEditDistance = function (lexer) {
  lexer.ignore()
  lexer.acceptDigitRun()
  lexer.emit(lunr.QueryLexer.EDIT_DISTANCE)
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexBoost = function (lexer) {
  lexer.ignore()
  lexer.acceptDigitRun()
  lexer.emit(lunr.QueryLexer.BOOST)
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexEOS = function (lexer) {
  if (lexer.width() > 0) {
    lexer.emit(lunr.QueryLexer.TERM)
  }
}

// This matches the separator used when tokenising fields
// within a document. These should match otherwise it is
// not possible to search for some tokens within a document.
//
// It is possible for the user to change the separator on the
// tokenizer so it _might_ clash with any other of the special
// characters already used within the search string, e.g. :.
//
// This means that it is possible to change the separator in
// such a way that makes some words unsearchable using a search
// string.
lunr.QueryLexer.termSeparator = lunr.tokenizer.separator

lunr.QueryLexer.lexText = function (lexer) {
  while (true) {
    var char = lexer.next()

    if (char == lunr.QueryLexer.EOS) {
      return lunr.QueryLexer.lexEOS
    }

    // Escape character is '\'
    if (char.charCodeAt(0) == 92) {
      lexer.escapeCharacter()
      continue
    }

    if (char == ":") {
      return lunr.QueryLexer.lexField
    }

    if (char == "~") {
      lexer.backup()
      if (lexer.width() > 0) {
        lexer.emit(lunr.QueryLexer.TERM)
      }
      return lunr.QueryLexer.lexEditDistance
    }

    if (char == "^") {
      lexer.backup()
      if (lexer.width() > 0) {
        lexer.emit(lunr.QueryLexer.TERM)
      }
      return lunr.QueryLexer.lexBoost
    }

    // "+" indicates term presence is required
    // checking for length to ensure that only
    // leading "+" are considered
    if (char == "+" && lexer.width() === 1) {
      lexer.emit(lunr.QueryLexer.PRESENCE)
      return lunr.QueryLexer.lexText
    }

    // "-" indicates term presence is prohibited
    // checking for length to ensure that only
    // leading "-" are considered
    if (char == "-" && lexer.width() === 1) {
      lexer.emit(lunr.QueryLexer.PRESENCE)
      return lunr.QueryLexer.lexText
    }

    if (char.match(lunr.QueryLexer.termSeparator)) {
      return lunr.QueryLexer.lexTerm
    }
  }
}

lunr.QueryParser = function (str, query) {
  this.lexer = new lunr.QueryLexer (str)
  this.query = query
  this.currentClause = {}
  this.lexemeIdx = 0
}

lunr.QueryParser.prototype.parse = function () {
  this.lexer.run()
  this.lexemes = this.lexer.lexemes

  var state = lunr.QueryParser.parseClause

  while (state) {
    state = state(this)
  }

  return this.query
}

lunr.QueryParser.prototype.peekLexeme = function () {
  return this.lexemes[this.lexemeIdx]
}

lunr.QueryParser.prototype.consumeLexeme = function () {
  var lexeme = this.peekLexeme()
  this.lexemeIdx += 1
  return lexeme
}

lunr.QueryParser.prototype.nextClause = function () {
  var completedClause = this.currentClause
  this.query.clause(completedClause)
  this.currentClause = {}
}

lunr.QueryParser.parseClause = function (parser) {
  var lexeme = parser.peekLexeme()

  if (lexeme == undefined) {
    return
  }

  switch (lexeme.type) {
    case lunr.QueryLexer.PRESENCE:
      return lunr.QueryParser.parsePresence
    case lunr.QueryLexer.FIELD:
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expected either a field or a term, found " + lexeme.type

      if (lexeme.str.length >= 1) {
        errorMessage += " with value '" + lexeme.str + "'"
      }

      throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }
}

lunr.QueryParser.parsePresence = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  switch (lexeme.str) {
    case "-":
      parser.currentClause.presence = lunr.Query.presence.PROHIBITED
      break
    case "+":
      parser.currentClause.presence = lunr.Query.presence.REQUIRED
      break
    default:
      var errorMessage = "unrecognised presence operator'" + lexeme.str + "'"
      throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    var errorMessage = "expecting term or field, found nothing"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.FIELD:
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expecting term or field, found '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseField = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  if (parser.query.allFields.indexOf(lexeme.str) == -1) {
    var possibleFields = parser.query.allFields.map(function (f) { return "'" + f + "'" }).join(', '),
        errorMessage = "unrecognised field '" + lexeme.str + "', possible fields: " + possibleFields

    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.fields = [lexeme.str]

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    var errorMessage = "expecting term, found nothing"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expecting term, found '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseTerm = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  parser.currentClause.term = lexeme.str.toLowerCase()

  if (lexeme.str.indexOf("*") != -1) {
    parser.currentClause.usePipeline = false
  }

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    case lunr.QueryLexer.PRESENCE:
      parser.nextClause()
      return lunr.QueryParser.parsePresence
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseEditDistance = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  var editDistance = parseInt(lexeme.str, 10)

  if (isNaN(editDistance)) {
    var errorMessage = "edit distance must be numeric"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.editDistance = editDistance

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    case lunr.QueryLexer.PRESENCE:
      parser.nextClause()
      return lunr.QueryParser.parsePresence
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseBoost = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  var boost = parseInt(lexeme.str, 10)

  if (isNaN(boost)) {
    var errorMessage = "boost must be numeric"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.boost = boost

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    case lunr.QueryLexer.PRESENCE:
      parser.nextClause()
      return lunr.QueryParser.parsePresence
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

  /**
   * export the module via AMD, CommonJS or as a browser global
   * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
   */
  ;(function (root, factory) {
    if (true) {
      // AMD. Register as an anonymous module.
      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    } else if (typeof exports === 'object') {
      /**
       * Node. Does not work with strict CommonJS, but
       * only CommonJS-like enviroments that support module.exports,
       * like Node.
       */
      module.exports = factory()
    } else {
      // Browser globals (root is window)
      root.lunr = factory()
    }
  }(this, function () {
    /**
     * Just return a value to define the module export.
     * This example returns an object, but the module
     * can return a function as the exported value.
     */
    return lunr
  }))
})();


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Position = __webpack_require__(38);

var _Position2 = _interopRequireDefault(_Position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Position: _Position2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Position = function () {

  /**
   * Set sidebars to locked state and limit height to parent node
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Sidebar
   * @property {HTMLElement} parent_ - Sidebar container
   * @property {HTMLElement} header_ - Header
   * @property {number} height_ - Current sidebar height
   * @property {number} offset_ - Current page y-offset
   * @property {boolean} pad_ - Pad when header is fixed
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(string|HTMLElement)} header - Selector or HTML element
   */
  function Position(el, header) {
    _classCallCheck(this, Position);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement) || !(ref.parentNode instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
    this.parent_ = ref.parentNode;

    /* Retrieve header */
    ref = typeof header === "string" ? document.querySelector(header) : header;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.header_ = ref;

    /* Initialize current height and test whether header is fixed */
    this.height_ = 0;
    this.pad_ = window.getComputedStyle(this.header_).position === "fixed";
  }

  /**
   * Initialize sidebar state
   */


  Position.prototype.setup = function setup() {
    var top = Array.prototype.reduce.call(this.parent_.children, function (offset, child) {
      return Math.max(offset, child.offsetTop);
    }, 0);

    /* Set lock offset for element with largest top offset */
    this.offset_ = top - (this.pad_ ? this.header_.offsetHeight : 0);
    this.update();
  };

  /**
   * Update locked state and height
   *
   * The inner height of the window (= the visible area) is the maximum
   * possible height for the stretching sidebar. This height must be deducted
   * by the height of the fixed header (56px). Depending on the page y-offset,
   * the top offset of the sidebar must be taken into account, as well as the
   * case where the window is scrolled beyond the sidebar container.
   *
   * @param {Event?} ev - Event
   */


  Position.prototype.update = function update(ev) {
    var offset = window.pageYOffset;
    var visible = window.innerHeight;

    /* Update offset, in case window is resized */
    if (ev && ev.type === "resize") this.setup();

    /* Set bounds of sidebar container - must be calculated on every run, as
       the height of the content might change due to loading images etc. */
    var bounds = {
      top: this.pad_ ? this.header_.offsetHeight : 0,
      bottom: this.parent_.offsetTop + this.parent_.offsetHeight

      /* Calculate new offset and height */
    };var height = visible - bounds.top - Math.max(0, this.offset_ - offset) - Math.max(0, offset + visible - bounds.bottom);

    /* If height changed, update element */
    if (height !== this.height_) this.el_.style.height = (this.height_ = height) + "px";

    /* Sidebar should be locked, as we're below parent offset */
    if (offset >= this.offset_) {
      if (this.el_.dataset.mdState !== "lock") this.el_.dataset.mdState = "lock";

      /* Sidebar should be unlocked, if locked */
    } else if (this.el_.dataset.mdState === "lock") {
      this.el_.dataset.mdState = "";
    }
  };

  /**
   * Reset locked state and height
   */


  Position.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.el_.style.height = "";
    this.height_ = 0;
  };

  return Position;
}();

exports.default = Position;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Adapter = __webpack_require__(40);

var _Adapter2 = _interopRequireDefault(_Adapter);

var _Repository = __webpack_require__(44);

var _Repository2 = _interopRequireDefault(_Repository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Adapter: _Adapter2.default,
  Repository: _Repository2.default
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _GitHub = __webpack_require__(41);

var _GitHub2 = _interopRequireDefault(_GitHub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  GitHub: _GitHub2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Abstract2 = __webpack_require__(42);

var _Abstract3 = _interopRequireDefault(_Abstract2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * deal in the Software without restriction, including without limitation the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IN THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var GitHub = function (_Abstract) {
  _inherits(GitHub, _Abstract);

  /**
   * Retrieve repository information from GitHub
   *
   * @constructor
   *
   * @property {string} name_ - Name of the repository
   *
   * @param {(string|HTMLAnchorElement)} el - Selector or HTML element
   */
  function GitHub(el) {
    _classCallCheck(this, GitHub);

    /* Extract user (and repository name) from URL, as we have to query for all
       repositories, to omit 404 errors for private repositories */
    var _this = _possibleConstructorReturn(this, _Abstract.call(this, el));

    var matches = /^.+github\.com\/([^/]+)\/?([^/]+)?.*$/.exec(_this.base_);
    if (matches && matches.length === 3) {
      var user = matches[1],
          name = matches[2];

      /* Initialize base URL and repository name */

      _this.base_ = "https://api.github.com/users/" + user + "/repos";
      _this.name_ = name;
    }
    return _this;
  }

  /**
   * Fetch relevant repository information from GitHub
   *
   * @return {Promise<Array<string>>} Promise returning an array of facts
   */


  GitHub.prototype.fetch_ = function fetch_() {
    var _this2 = this;

    var paginate = function paginate() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      return fetch(_this2.base_ + "?per_page=30&page=" + page).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (!(data instanceof Array)) throw new TypeError();

        /* Display number of stars and forks, if repository is given */
        if (_this2.name_) {
          var repo = data.find(function (item) {
            return item.name === _this2.name_;
          });
          if (!repo && data.length === 30) return paginate(page + 1);

          /* If we found a repo, extract the facts */
          return repo ? [_this2.format_(repo.stargazers_count) + " Stars", _this2.format_(repo.forks_count) + " Forks"] : [];

          /* Display number of repositories, otherwise */
        } else {
          return [data.length + " Repositories"];
        }
      });
    };

    /* Paginate through repos */
    return paginate();
  };

  return GitHub;
}(_Abstract3.default);

exports.default = GitHub;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsCookie = __webpack_require__(43);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                           *
                                                                                                                                                           * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                           * of this software and associated documentation files (the "Software"), to
                                                                                                                                                           * deal in the Software without restriction, including without limitation the
                                                                                                                                                           * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                           * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                           * furnished to do so, subject to the following conditions:
                                                                                                                                                           *
                                                                                                                                                           * The above copyright notice and this permission notice shall be included in
                                                                                                                                                           * all copies or substantial portions of the Software.
                                                                                                                                                           *
                                                                                                                                                           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                           * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                           * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                           * IN THE SOFTWARE.
                                                                                                                                                           */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Abstract = function () {

  /**
   * Retrieve repository information
   *
   * @constructor
   *
   * @property {HTMLAnchorElement} el_ - Link to repository
   * @property {string} base_ - API base URL
   * @property {number} salt_ - Unique identifier
   *
   * @param {(string|HTMLAnchorElement)} el - Selector or HTML element
   */
  function Abstract(el) {
    _classCallCheck(this, Abstract);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLAnchorElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve base URL */
    this.base_ = this.el_.href;
    this.salt_ = this.hash_(this.base_);
  }

  /**
   * Retrieve data from Cookie or fetch from respective API
   *
   * @return {Promise<Array<string>>} Promise that returns an array of facts
   */


  Abstract.prototype.fetch = function fetch() {
    var _this = this;

    return new Promise(function (resolve) {
      var cached = _jsCookie2.default.getJSON(_this.salt_ + ".cache-source");
      if (typeof cached !== "undefined") {
        resolve(cached);

        /* If the data is not cached in a cookie, invoke fetch and set
           a cookie that automatically expires in 15 minutes */
      } else {
        _this.fetch_().then(function (data) {
          _jsCookie2.default.set(_this.salt_ + ".cache-source", data, { expires: 1 / 96 });
          resolve(data);
        });
      }
    });
  };

  /**
   * Abstract private function that fetches relevant repository information
   *
   * @abstract
   */


  Abstract.prototype.fetch_ = function fetch_() {
    throw new Error("fetch_(): Not implemented");
  };

  /**
   * Format a number with suffix
   *
   * @param {number} number - Number to format
   * @return {string} Formatted number
   */


  Abstract.prototype.format_ = function format_(number) {
    if (number > 10000) return (number / 1000).toFixed(0) + "k";else if (number > 1000) return (number / 1000).toFixed(1) + "k";
    return "" + number;
  };

  /**
   * Simple hash function
   *
   * Taken from http://stackoverflow.com/a/7616484/1065584
   *
   * @param {string} str - Input string
   * @return {number} Hashed string
   */


  Abstract.prototype.hash_ = function hash_(str) {
    var hash = 0;
    if (str.length === 0) return hash;
    for (var i = 0, len = str.length; i < len; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  return Abstract;
}();

exports.default = Abstract;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(JSX) {

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Repository = function () {

  /**
   * Render repository information
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Repository information
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Repository(el) {
    _classCallCheck(this, Repository);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
  }

  /**
   * Initialize the repository
   *
   * @param {Array<string>} facts - Facts to be rendered
   */


  Repository.prototype.initialize = function initialize(facts) {
    if (facts.length && this.el_.children.length) this.el_.children[this.el_.children.length - 1].appendChild(JSX.createElement(
      "ul",
      { "class": "md-source__facts" },
      facts.map(function (fact) {
        return JSX.createElement(
          "li",
          { "class": "md-source__fact" },
          fact
        );
      })
    ));

    /* Finish rendering with animation */
    this.el_.dataset.mdState = "done";
  };

  return Repository;
}();

exports.default = Repository;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Toggle = __webpack_require__(46);

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Toggle: _Toggle2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Toggle = function () {

  /**
   * Toggle tabs visibility depending on page y-offset
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Content container
   * @property {number} offset_ - Toggle page-y offset
   * @property {boolean} active_ - Tabs visibility
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Toggle(el) {
    _classCallCheck(this, Toggle);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof Node)) throw new ReferenceError();
    this.el_ = ref;

    /* Initialize offset and state */
    this.active_ = false;
  }

  /**
   * Update visibility
   */


  Toggle.prototype.update = function update() {
    var active = window.pageYOffset >= this.el_.children[0].offsetTop + (5 - 48); // TODO: quick hack to enable same handling for hero
    if (active !== this.active_) this.el_.dataset.mdState = (this.active_ = active) ? "hidden" : "";
  };

  /**
   * Reset visibility
   */


  Toggle.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.active_ = false;
  };

  return Toggle;
}();

exports.default = Toggle;

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2MwODA0ZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9wcm92aWRlcnMvanN4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZmV0Y2gvZGlzdC91bmZldGNoLmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9FdmVudC9MaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2FwcGxpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2JpdGJ1Y2tldC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZ2l0aHViLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9naXRsYWIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvYXBwbGljYXRpb24uc2Nzcz80NzI4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvYXBwbGljYXRpb24tcGFsZXR0ZS5zY3NzPzRjOWYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2N1c3RvbS1ldmVudC1wb2x5ZmlsbC9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5mZXRjaC9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvZmluYWxseS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xpcGJvYXJkL2Rpc3QvY2xpcGJvYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYXN0Y2xpY2svbGliL2Zhc3RjbGljay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9FdmVudC9NYXRjaE1lZGlhLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0hlYWRlci9TaGFkb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0hlYWRlci9UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvTmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYvQmx1ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvTmF2L0NvbGxhcHNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYvU2Nyb2xsaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC9Mb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9TZWFyY2gvUmVzdWx0LmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXNjYXBlLXN0cmluZy1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1bnIvbHVuci5qcy1leHBvc2VkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sdW5yL2x1bnIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NpZGViYXIvUG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlL0FkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS9BZGFwdGVyL0dpdEh1Yi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlL0FkYXB0ZXIvQWJzdHJhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzLWNvb2tpZS9zcmMvanMuY29va2llLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvUmVwb3NpdG9yeS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1RhYnMvVG9nZ2xlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnQiLCJ0YWciLCJwcm9wZXJ0aWVzIiwiZWwiLCJkb2N1bWVudCIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJPYmplY3QiLCJrZXlzIiwic2V0QXR0cmlidXRlIiwiYXR0ciIsIml0ZXJhdGVDaGlsZE5vZGVzIiwibm9kZXMiLCJub2RlIiwidGV4dENvbnRlbnQiLCJpc0FycmF5IiwiX19odG1sIiwiaW5uZXJIVE1MIiwiTm9kZSIsImFwcGVuZENoaWxkIiwiY2hpbGRyZW4iLCJMaXN0ZW5lciIsImVscyIsImV2ZW50cyIsImhhbmRsZXIiLCJlbHNfIiwic2xpY2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uY2F0IiwiaGFuZGxlcl8iLCJ1cGRhdGUiLCJldmVudHNfIiwidXBkYXRlXyIsImV2IiwibGlzdGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic2V0dXAiLCJ1bmxpc3RlbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXNldCIsIndpbmRvdyIsIlByb21pc2UiLCJ0cmFuc2xhdGUiLCJtZXRhIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJrZXkiLCJIVE1MTWV0YUVsZW1lbnQiLCJSZWZlcmVuY2VFcnJvciIsImNvbnRlbnQiLCJpbml0aWFsaXplIiwiY29uZmlnIiwiTWF0ZXJpYWwiLCJFdmVudCIsImJvZHkiLCJIVE1MRWxlbWVudCIsIkZhc3RDbGljayIsImF0dGFjaCIsIk1vZGVybml6ciIsImFkZFRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsInRhYmxlcyIsIndyYXAiLCJ0YWJsZSIsIm5leHRTaWJsaW5nIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIkNsaXBib2FyZCIsImlzU3VwcG9ydGVkIiwiYmxvY2tzIiwiYmxvY2siLCJpbmRleCIsImlkIiwiYnV0dG9uIiwicGFyZW50IiwiY29weSIsIm9uIiwibWVzc2FnZSIsImFjdGlvbiIsInRyaWdnZXIiLCJxdWVyeVNlbGVjdG9yIiwiY2xlYXJTZWxlY3Rpb24iLCJkYXRhc2V0IiwibWRUaW1lciIsImNsZWFyVGltZW91dCIsInBhcnNlSW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsInRvU3RyaW5nIiwiZGV0YWlscyIsInN1bW1hcnkiLCJ0YXJnZXQiLCJoYXNBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2NhdGlvbiIsImhhc2giLCJnZXRFbGVtZW50QnlJZCIsInN1YnN0cmluZyIsIkhUTUxEZXRhaWxzRWxlbWVudCIsIm9wZW4iLCJsb2MiLCJpb3MiLCJzY3JvbGxhYmxlIiwiaXRlbSIsInRvcCIsInNjcm9sbFRvcCIsIm9mZnNldEhlaWdodCIsInNjcm9sbEhlaWdodCIsIkhlYWRlciIsIlNoYWRvdyIsIlRpdGxlIiwiVGFicyIsIlRvZ2dsZSIsIk1hdGNoTWVkaWEiLCJTaWRlYmFyIiwiUG9zaXRpb24iLCJOYXYiLCJCbHVyIiwiY29sbGFwc2libGVzIiwiY29sbGFwc2UiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiQ29sbGFwc2UiLCJTY3JvbGxpbmciLCJTZWFyY2giLCJMb2NrIiwiUmVzdWx0IiwiZmV0Y2giLCJ1cmwiLCJiYXNlIiwidmVyc2lvbiIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJkb2NzIiwibWFwIiwiZG9jIiwicXVlcnkiLCJIVE1MSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJ0b2dnbGUiLCJjaGVja2VkIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwibWV0YUtleSIsImN0cmxLZXkiLCJrZXlDb2RlIiwiYWN0aXZlRWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiSFRNTExpbmtFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwiYmx1ciIsImluZGV4T2YiLCJsaW5rcyIsImZpbmQiLCJsaW5rIiwibWRTdGF0ZSIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJzdG9wUHJvcGFnYXRpb24iLCJmb3JtIiwibGFiZWxzIiwibGFiZWwiLCJ0YWJJbmRleCIsInJlc29sdmUiLCJIVE1MQW5jaG9yRWxlbWVudCIsIm1kU291cmNlIiwiU291cmNlIiwiQWRhcHRlciIsIkdpdEh1YiIsInNvdXJjZXMiLCJSZXBvc2l0b3J5Iiwic291cmNlIiwiZmFjdHMiLCJhcHAiLCJsaXN0ZW5lciIsIm1xIiwibWF0Y2hlcyIsIm1lZGlhIiwibWF0Y2hNZWRpYSIsImFkZExpc3RlbmVyIiwiaGVhZGVyIiwicmVmIiwiZWxfIiwiaGVhZGVyXyIsImhlaWdodF8iLCJhY3RpdmVfIiwiY3VycmVudCIsInR5cGUiLCJhY3RpdmUiLCJwYWdlWU9mZnNldCIsIkhUTUxIZWFkaW5nRWxlbWVudCIsInN0eWxlIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsIm9mZnNldFRvcCIsImluZGV4XyIsIm9mZnNldF8iLCJkaXJfIiwiYW5jaG9yc18iLCJyZWR1Y2UiLCJhbmNob3JzIiwib2Zmc2V0IiwiZGlyIiwiaSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsImRpc3BsYXkiLCJvdmVyZmxvdyIsIm1heEhlaWdodCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImVuZCIsIm1haW4iLCJ3ZWJraXRPdmVyZmxvd1Njcm9sbGluZyIsInRvZ2dsZXMiLCJwYW5lIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidGFnTmFtZSIsImxvY2tfIiwic2Nyb2xsVG8iLCJlc2NhcGVIVE1MIiwidGV4dCIsImNyZWF0ZVRleHROb2RlIiwiaHRtbCIsInAiLCJ0cnVuY2F0ZSIsInN0cmluZyIsIm4iLCJsaXN0IiwiZGF0YV8iLCJtZXRhXyIsImxpc3RfIiwibWVzc2FnZV8iLCJwbGFjZWhvbGRlciIsIm5vbmUiLCJvbmUiLCJvdGhlciIsInRva2VuaXplciIsImx1bnIiLCJzZXBhcmF0b3IiLCJsYW5nXyIsInNwbGl0IiwiZmlsdGVyIiwiQm9vbGVhbiIsImxhbmciLCJ0cmltIiwiaW5pdCIsImRvY3NfIiwicGF0aCIsInRpdGxlIiwiZ2V0IiwiZG9uZSIsInJlcGxhY2UiLCJfIiwiY2hhciIsInNldCIsIk1hcCIsInN0YWNrXyIsImZpbHRlcnMiLCJ0cmltbWVyIiwic3RvcFdvcmRGaWx0ZXIiLCJwaXBlbGluZSIsInJlc3VsdCIsIm5hbWUiLCJwdXNoIiwidXNlIiwibXVsdGlMYW5ndWFnZSIsImZpZWxkIiwiYm9vc3QiLCJjb250YWluZXIiLCJzcGxpY2UiLCJyZW5kZXIiLCJ2YWx1ZSIsInZhbHVlXyIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInRvTG93ZXJDYXNlIiwidGVybSIsIndpbGRjYXJkIiwiUXVlcnkiLCJUUkFJTElORyIsIml0ZW1zIiwiUmVnRXhwIiwiaGlnaGxpZ2h0IiwidG9rZW4iLCJhcnRpY2xlIiwic2VjdGlvbnMiLCJzZWN0aW9uIiwic2hpZnQiLCJhbmNob3IiLCJldjIiLCJocmVmIiwic2l6ZSIsInBhcmVudF8iLCJwYWRfIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBvc2l0aW9uIiwiY2hpbGQiLCJ2aXNpYmxlIiwiaW5uZXJIZWlnaHQiLCJib3VuZHMiLCJib3R0b20iLCJleGVjIiwiYmFzZV8iLCJ1c2VyIiwibmFtZV8iLCJmZXRjaF8iLCJwYWdpbmF0ZSIsInBhZ2UiLCJUeXBlRXJyb3IiLCJyZXBvIiwiZm9ybWF0XyIsInN0YXJnYXplcnNfY291bnQiLCJmb3Jrc19jb3VudCIsIkFic3RyYWN0Iiwic2FsdF8iLCJoYXNoXyIsImNhY2hlZCIsIkNvb2tpZXMiLCJnZXRKU09OIiwiZXhwaXJlcyIsIkVycm9yIiwibnVtYmVyIiwi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O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUN6TEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FB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QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCOztBQUVBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0I7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEIsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2QkFBNkI7QUFDekMsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQixjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEIsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWSxPQUFPLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEtBQUssSUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsV0FBVyxXQUFXO0FBQ3RCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIscUNBQXFDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0VBQWtFLHVCQUF1QjtBQUN6Rjs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFNMkwsTUFBTyxPQUFPM0wsRUFBUCxLQUFjLFFBQWYsR0FDUkMsU0FBU2dGLGFBQVQsQ0FBdUJqRixFQUF2QixDQURRLEdBRVJBLEVBRko7QUFHQSxRQUFJLEVBQUUyTCxlQUFlMUssSUFBakIsQ0FBSixFQUNFLE1BQU0sSUFBSThCLGNBQUosRUFBTjtBQUNGLFNBQUs2SSxHQUFMLEdBQVdELEdBQVg7O0FBRUE7QUFDQSxTQUFLSSxPQUFMLEdBQWUsS0FBZjtBQUNEOztBQUVEOzs7OzttQkFHQWxLLE0scUJBQVM7QUFDUCxRQUFNcUssU0FBUzFKLE9BQU8ySixXQUFQLElBQ2IsS0FBS1AsR0FBTCxDQUFTekssUUFBVCxDQUFrQixDQUFsQixFQUFxQnFMLFNBQXJCLElBQWtDLElBQUksRUFBdEMsQ0FERixDQURPLENBRXFFO0FBQzVFLFFBQUlOLFdBQVcsS0FBS0gsT0FBcEIsRUFDRSxLQUFLSCxHQUFMLENBQVN6RyxPQUFULENBQWlCNkUsT0FBakIsR0FBMkIsQ0FBQyxLQUFLK0IsT0FBTCxHQUFlRyxNQUFoQixJQUEwQixRQUExQixHQUFxQyxFQUFoRTtBQUNILEc7O0FBRUQ7Ozs7O21CQUdBM0osSyxvQkFBUTtBQUNOLFNBQUtxSixHQUFMLENBQVN6RyxPQUFULENBQWlCNkUsT0FBakIsR0FBMkIsRUFBM0I7QUFDQSxTQUFLK0IsT0FBTCxHQUFlLEtBQWY7QUFDRCxHOzs7OztrQkF6Q2tCNUUsTSIsImZpbGUiOiJhc3NldHMvamF2YXNjcmlwdHMvYXBwbGljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3YzA4MDRmMiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogTW9kdWxlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5leHBvcnQgZGVmYXVsdCAvKiBKU1ggKi8ge1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuYXRpdmUgRE9NIG5vZGUgZnJvbSBKU1gncyBpbnRlcm1lZGlhdGUgcmVwcmVzZW50YXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZyAtIFRhZyBuYW1lXG4gICAqIEBwYXJhbSB7P09iamVjdH0gcHJvcGVydGllcyAtIFByb3BlcnRpZXNcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmcgfCBudW1iZXIgfCB7IF9faHRtbDogc3RyaW5nIH0gfCBBcnJheTxIVE1MRWxlbWVudD4+fVxuICAgKiAgIGNoaWxkcmVuIC0gQ2hpbGQgbm9kZXNcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IE5hdGl2ZSBET00gbm9kZVxuICAgKi9cbiAgY3JlYXRlRWxlbWVudCh0YWcsIHByb3BlcnRpZXMsIC4uLmNoaWxkcmVuKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZylcblxuICAgIC8qIFNldCBhbGwgcHJvcGVydGllcyAqL1xuICAgIGlmIChwcm9wZXJ0aWVzKVxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSwgYXR0ciA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCBwcm9wZXJ0aWVzW2F0dHJdKVxuICAgICAgfSlcblxuICAgIC8qIEl0ZXJhdGUgY2hpbGQgbm9kZXMgKi9cbiAgICBjb25zdCBpdGVyYXRlQ2hpbGROb2RlcyA9IG5vZGVzID0+IHtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZXMsIG5vZGUgPT4ge1xuXG4gICAgICAgIC8qIERpcmVjdGx5IGFwcGVuZCB0ZXh0IGNvbnRlbnQgKi9cbiAgICAgICAgaWYgKHR5cGVvZiBub2RlID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICB0eXBlb2Ygbm9kZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIGVsLnRleHRDb250ZW50ICs9IG5vZGVcblxuICAgICAgICAvKiBSZWN1cnNlLCBpZiB3ZSBnb3QgYW4gYXJyYXkgKi9cbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICAgICAgaXRlcmF0ZUNoaWxkTm9kZXMobm9kZSlcblxuICAgICAgICAvKiBBcHBlbmQgcmF3IEhUTUwgKi9cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygbm9kZS5fX2h0bWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBlbC5pbm5lckhUTUwgKz0gbm9kZS5fX2h0bWxcblxuICAgICAgICAvKiBBcHBlbmQgcmVndWxhciBub2RlcyAqL1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgZWwuYXBwZW5kQ2hpbGQobm9kZSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKiBJdGVyYXRlIGNoaWxkIG5vZGVzIGFuZCByZXR1cm4gZWxlbWVudCAqL1xuICAgIGl0ZXJhdGVDaGlsZE5vZGVzKGNoaWxkcmVuKVxuICAgIHJldHVybiBlbFxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL3Byb3ZpZGVycy9qc3guanMiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGluZGV4ID0gdHlwZW9mIGZldGNoPT0nZnVuY3Rpb24nID8gZmV0Y2guYmluZCgpIDogZnVuY3Rpb24odXJsLCBvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRyZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG5cdFx0cmVxdWVzdC5vcGVuKG9wdGlvbnMubWV0aG9kIHx8ICdnZXQnLCB1cmwsIHRydWUpO1xuXG5cdFx0Zm9yICh2YXIgaSBpbiBvcHRpb25zLmhlYWRlcnMpIHtcblx0XHRcdHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihpLCBvcHRpb25zLmhlYWRlcnNbaV0pO1xuXHRcdH1cblxuXHRcdHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscz09J2luY2x1ZGUnO1xuXG5cdFx0cmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXNvbHZlKHJlc3BvbnNlKCkpO1xuXHRcdH07XG5cblx0XHRyZXF1ZXN0Lm9uZXJyb3IgPSByZWplY3Q7XG5cblx0XHRyZXF1ZXN0LnNlbmQob3B0aW9ucy5ib2R5IHx8IG51bGwpO1xuXG5cdFx0ZnVuY3Rpb24gcmVzcG9uc2UoKSB7XG5cdFx0XHR2YXIga2V5cyA9IFtdLFxuXHRcdFx0XHRhbGwgPSBbXSxcblx0XHRcdFx0aGVhZGVycyA9IHt9LFxuXHRcdFx0XHRoZWFkZXI7XG5cblx0XHRcdHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkucmVwbGFjZSgvXiguKj8pOlteXFxTXFxuXSooW1xcc1xcU10qPykkL2dtLCBmdW5jdGlvbiAobSwga2V5LCB2YWx1ZSkge1xuXHRcdFx0XHRrZXlzLnB1c2goa2V5ID0ga2V5LnRvTG93ZXJDYXNlKCkpO1xuXHRcdFx0XHRhbGwucHVzaChba2V5LCB2YWx1ZV0pO1xuXHRcdFx0XHRoZWFkZXIgPSBoZWFkZXJzW2tleV07XG5cdFx0XHRcdGhlYWRlcnNba2V5XSA9IGhlYWRlciA/IChoZWFkZXIgKyBcIixcIiArIHZhbHVlKSA6IHZhbHVlO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG9rOiAocmVxdWVzdC5zdGF0dXMvMTAwfDApID09IDIsXHRcdC8vIDIwMC0yOTlcblx0XHRcdFx0c3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcblx0XHRcdFx0c3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuXHRcdFx0XHR1cmw6IHJlcXVlc3QucmVzcG9uc2VVUkwsXG5cdFx0XHRcdGNsb25lOiByZXNwb25zZSxcblx0XHRcdFx0dGV4dDogZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTsgfSxcblx0XHRcdFx0anNvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcXVlc3QucmVzcG9uc2VUZXh0KS50aGVuKEpTT04ucGFyc2UpOyB9LFxuXHRcdFx0XHRibG9iOiBmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3JlcXVlc3QucmVzcG9uc2VdKSk7IH0sXG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHRrZXlzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBrZXlzOyB9LFxuXHRcdFx0XHRcdGVudHJpZXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFsbDsgfSxcblx0XHRcdFx0XHRnZXQ6IGZ1bmN0aW9uIChuKSB7IHJldHVybiBoZWFkZXJzW24udG9Mb3dlckNhc2UoKV07IH0sXG5cdFx0XHRcdFx0aGFzOiBmdW5jdGlvbiAobikgeyByZXR1cm4gbi50b0xvd2VyQ2FzZSgpIGluIGhlYWRlcnM7IH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11bmZldGNoLmVzLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdW5mZXRjaC9kaXN0L3VuZmV0Y2guZXMuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0ZW5lciB7XG5cbiAgLyoqXG4gICAqIEdlbmVyaWMgZXZlbnQgbGlzdGVuZXJcbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7KEFycmF5PEV2ZW50VGFyZ2V0Pil9IGVsc18gLSBFdmVudCB0YXJnZXRzXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBoYW5kbGVyXy0gRXZlbnQgaGFuZGxlcnNcbiAgICogQHByb3BlcnR5IHtBcnJheTxzdHJpbmc+fSBldmVudHNfIC0gRXZlbnQgbmFtZXNcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gdXBkYXRlXyAtIFVwZGF0ZSBoYW5kbGVyXG4gICAqXG4gICAqIEBwYXJhbSB7PyhzdHJpbmd8RXZlbnRUYXJnZXR8Tm9kZUxpc3Q8RXZlbnRUYXJnZXQ+KX0gZWxzIC1cbiAgICogICBTZWxlY3RvciBvciBFdmVudCB0YXJnZXRzXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xBcnJheTxzdHJpbmc+KX0gZXZlbnRzIC0gRXZlbnQgbmFtZXNcbiAgICogQHBhcmFtIHsoT2JqZWN0fEZ1bmN0aW9uKX0gaGFuZGxlciAtIEhhbmRsZXIgdG8gYmUgaW52b2tlZFxuICAgKi9cbiAgY29uc3RydWN0b3IoZWxzLCBldmVudHMsIGhhbmRsZXIpIHtcbiAgICB0aGlzLmVsc18gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcbiAgICAgICh0eXBlb2YgZWxzID09PSBcInN0cmluZ1wiKVxuICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxzKVxuICAgICAgICA6IFtdLmNvbmNhdChlbHMpKVxuXG4gICAgLyogU2V0IGhhbmRsZXIgYXMgZnVuY3Rpb24gb3IgZGlyZWN0bHkgYXMgb2JqZWN0ICovXG4gICAgdGhpcy5oYW5kbGVyXyA9IHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8geyB1cGRhdGU6IGhhbmRsZXIgfVxuICAgICAgOiBoYW5kbGVyXG5cbiAgICAvKiBJbml0aWFsaXplIGV2ZW50IG5hbWVzIGFuZCB1cGRhdGUgaGFuZGxlciAqL1xuICAgIHRoaXMuZXZlbnRzXyA9IFtdLmNvbmNhdChldmVudHMpXG4gICAgdGhpcy51cGRhdGVfID0gZXYgPT4gdGhpcy5oYW5kbGVyXy51cGRhdGUoZXYpXG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgbGlzdGVuZXIgZm9yIGFsbCByZWxldmFudCBldmVudHNcbiAgICovXG4gIGxpc3RlbigpIHtcbiAgICB0aGlzLmVsc18uZm9yRWFjaChlbCA9PiB7XG4gICAgICB0aGlzLmV2ZW50c18uZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMudXBkYXRlXywgZmFsc2UpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvKiBFeGVjdXRlIHNldHVwIGhhbmRsZXIsIGlmIGltcGxlbWVudGVkICovXG4gICAgaWYgKHR5cGVvZiB0aGlzLmhhbmRsZXJfLnNldHVwID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICB0aGlzLmhhbmRsZXJfLnNldHVwKClcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVyIGxpc3RlbmVyIGZvciBhbGwgcmVsZXZhbnQgZXZlbnRzXG4gICAqL1xuICB1bmxpc3RlbigpIHtcbiAgICB0aGlzLmVsc18uZm9yRWFjaChlbCA9PiB7XG4gICAgICB0aGlzLmV2ZW50c18uZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMudXBkYXRlXylcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8qIEV4ZWN1dGUgcmVzZXQgaGFuZGxlciwgaWYgaW1wbGVtZW50ZWQgKi9cbiAgICBpZiAodHlwZW9mIHRoaXMuaGFuZGxlcl8ucmVzZXQgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgIHRoaXMuaGFuZGxlcl8ucmVzZXQoKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvRXZlbnQvTGlzdGVuZXIuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBcIi4uL2ltYWdlcy9pY29ucy9iaXRidWNrZXQuc3ZnXCJcbmltcG9ydCBcIi4uL2ltYWdlcy9pY29ucy9naXRodWIuc3ZnXCJcbmltcG9ydCBcIi4uL2ltYWdlcy9pY29ucy9naXRsYWIuc3ZnXCJcblxuaW1wb3J0IFwiLi4vc3R5bGVzaGVldHMvYXBwbGljYXRpb24uc2Nzc1wiXG5pbXBvcnQgXCIuLi9zdHlsZXNoZWV0cy9hcHBsaWNhdGlvbi1wYWxldHRlLnNjc3NcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQb2x5ZmlsbHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuaW1wb3J0IFwiY3VzdG9tLWV2ZW50LXBvbHlmaWxsXCJcbmltcG9ydCBcInVuZmV0Y2gvcG9seWZpbGxcIlxuXG5pbXBvcnQgUHJvbWlzZSBmcm9tIFwicHJvbWlzZS1wb2x5ZmlsbFwiXG53aW5kb3cuUHJvbWlzZSA9IHdpbmRvdy5Qcm9taXNlIHx8IFByb21pc2VcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGVwZW5kZW5jaWVzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmltcG9ydCBDbGlwYm9hcmQgZnJvbSBcImNsaXBib2FyZFwiXG5pbXBvcnQgRmFzdENsaWNrIGZyb20gXCJmYXN0Y2xpY2tcIlxuXG5pbXBvcnQgTWF0ZXJpYWwgZnJvbSBcIi4vY29tcG9uZW50cy9NYXRlcmlhbFwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFJldHVybiB0aGUgbWV0YSB0YWcgdmFsdWUgZm9yIHRoZSBnaXZlbiBrZXlcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gTWV0YSBuYW1lXG4gKlxuICogQHJldHVybiB7c3RyaW5nfSBNZXRhIGNvbnRlbnQgdmFsdWVcbiAqL1xuY29uc3QgdHJhbnNsYXRlID0ga2V5ID0+IHtcbiAgY29uc3QgbWV0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGBsYW5nOiR7a2V5fWApWzBdXG4gIGlmICghKG1ldGEgaW5zdGFuY2VvZiBIVE1MTWV0YUVsZW1lbnQpKVxuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICByZXR1cm4gbWV0YS5jb250ZW50XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFwcGxpY2F0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogSW5pdGlhbGl6ZSBNYXRlcmlhbCBmb3IgTWtEb2NzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAtIENvbmZpZ3VyYXRpb25cbiAqL1xuZnVuY3Rpb24gaW5pdGlhbGl6ZShjb25maWcpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLXN0eWxlXG5cbiAgLyogSW5pdGlhbGl6ZSBNb2Rlcm5penIgYW5kIEZhc3RDbGljayAqL1xuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoZG9jdW1lbnQsIFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgaWYgKCEoZG9jdW1lbnQuYm9keSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuXG4gICAgLyogQXR0YWNoIEZhc3RDbGljayB0byBtaXRpZ2F0ZSAzMDBtcyBkZWxheSBvbiB0b3VjaCBkZXZpY2VzICovXG4gICAgRmFzdENsaWNrLmF0dGFjaChkb2N1bWVudC5ib2R5KVxuXG4gICAgLyogVGVzdCBmb3IgaU9TICovXG4gICAgTW9kZXJuaXpyLmFkZFRlc3QoXCJpb3NcIiwgKCkgPT4ge1xuICAgICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQYWR8aVBob25lfGlQb2QpL2cpXG4gICAgfSlcblxuICAgIC8qIFdyYXAgYWxsIGRhdGEgdGFibGVzIGZvciBiZXR0ZXIgb3ZlcmZsb3cgc2Nyb2xsaW5nICovXG4gICAgY29uc3QgdGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRhYmxlOm5vdChbY2xhc3NdKVwiKSAgICAgICAgICAgICAgLy8gVE9ETzogdGhpcyBpcyBKU1gsIHdlIHNob3VsZCByZW5hbWUgdGhlIGZpbGVcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRhYmxlcywgdGFibGUgPT4ge1xuICAgICAgY29uc3Qgd3JhcCA9IChcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXR5cGVzZXRfX3Njcm9sbHdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdHlwZXNldF9fdGFibGVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgICBpZiAodGFibGUubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgdGFibGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcCwgdGFibGUubmV4dFNpYmxpbmcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJsZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHdyYXApXG4gICAgICB9XG4gICAgICB3cmFwLmNoaWxkcmVuWzBdLmFwcGVuZENoaWxkKHRhYmxlKVxuICAgIH0pXG5cbiAgICAvKiBDbGlwYm9hcmQgaW50ZWdyYXRpb24gKi9cbiAgICBpZiAoQ2xpcGJvYXJkLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29kZWhpbGl0ZSA+IHByZSwgcHJlID4gY29kZVwiKVxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChibG9ja3MsIChibG9jaywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBgX19jb2RlXyR7aW5kZXh9YFxuXG4gICAgICAgIC8qIENyZWF0ZSBidXR0b24gd2l0aCBtZXNzYWdlIGNvbnRhaW5lciAqL1xuICAgICAgICBjb25zdCBidXR0b24gPSAoXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1kLWNsaXBib2FyZFwiIHRpdGxlPXt0cmFuc2xhdGUoXCJjbGlwYm9hcmQuY29weVwiKX1cbiAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRhcmdldD17YCMke2lkfSBwcmUsICMke2lkfSBjb2RlYH0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kLWNsaXBib2FyZF9fbWVzc2FnZVwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKVxuXG4gICAgICAgIC8qIExpbmsgdG8gYmxvY2sgYW5kIGluc2VydCBidXR0b24gKi9cbiAgICAgICAgY29uc3QgcGFyZW50ID0gYmxvY2sucGFyZW50Tm9kZVxuICAgICAgICBwYXJlbnQuaWQgPSBpZFxuICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGJ1dHRvbiwgYmxvY2spXG4gICAgICB9KVxuXG4gICAgICAvKiBJbml0aWFsaXplIENsaXBib2FyZCBsaXN0ZW5lciAqL1xuICAgICAgY29uc3QgY29weSA9IG5ldyBDbGlwYm9hcmQoXCIubWQtY2xpcGJvYXJkXCIpXG5cbiAgICAgIC8qIFN1Y2Nlc3MgaGFuZGxlciAqL1xuICAgICAgY29weS5vbihcInN1Y2Nlc3NcIiwgYWN0aW9uID0+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGFjdGlvbi50cmlnZ2VyLnF1ZXJ5U2VsZWN0b3IoXCIubWQtY2xpcGJvYXJkX19tZXNzYWdlXCIpXG4gICAgICAgIGlmICghKG1lc3NhZ2UgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG5cbiAgICAgICAgLyogQ2xlYXIgc2VsZWN0aW9uIGFuZCByZXNldCBkZWJvdW5jZSBsb2dpYyAqL1xuICAgICAgICBhY3Rpb24uY2xlYXJTZWxlY3Rpb24oKVxuICAgICAgICBpZiAobWVzc2FnZS5kYXRhc2V0Lm1kVGltZXIpXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHBhcnNlSW50KG1lc3NhZ2UuZGF0YXNldC5tZFRpbWVyLCAxMCkpXG5cbiAgICAgICAgLyogU2V0IG1lc3NhZ2UgaW5kaWNhdGluZyBzdWNjZXNzIGFuZCBzaG93IGl0ICovXG4gICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcIm1kLWNsaXBib2FyZF9fbWVzc2FnZS0tYWN0aXZlXCIpXG4gICAgICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gdHJhbnNsYXRlKFwiY2xpcGJvYXJkLmNvcGllZFwiKVxuXG4gICAgICAgIC8qIEhpZGUgbWVzc2FnZSBhZnRlciB0d28gc2Vjb25kcyAqL1xuICAgICAgICBtZXNzYWdlLmRhdGFzZXQubWRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZShcIm1kLWNsaXBib2FyZF9fbWVzc2FnZS0tYWN0aXZlXCIpXG4gICAgICAgICAgbWVzc2FnZS5kYXRhc2V0Lm1kVGltZXIgPSBcIlwiXG4gICAgICAgIH0sIDIwMDApLnRvU3RyaW5nKClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyogUG9seWZpbGwgZGV0YWlscy9zdW1tYXJ5IGZ1bmN0aW9uYWxpdHkgKi9cbiAgICBpZiAoIU1vZGVybml6ci5kZXRhaWxzKSB7XG4gICAgICBjb25zdCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGV0YWlscyA+IHN1bW1hcnlcIilcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYmxvY2tzLCBzdW1tYXJ5ID0+IHtcbiAgICAgICAgc3VtbWFyeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXYgPT4ge1xuICAgICAgICAgIGNvbnN0IGRldGFpbHMgPSBldi50YXJnZXQucGFyZW50Tm9kZVxuICAgICAgICAgIGlmIChkZXRhaWxzLmhhc0F0dHJpYnV0ZShcIm9wZW5cIikpIHtcbiAgICAgICAgICAgIGRldGFpbHMucmVtb3ZlQXR0cmlidXRlKFwib3BlblwiKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZShcIm9wZW5cIiwgXCJcIilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qIE9wZW4gZGV0YWlscyBhZnRlciBhbmNob3IganVtcCAqL1xuICAgIGNvbnN0IGRldGFpbHMgPSAoKSA9PiB7XG4gICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaGFzaCkge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvY3VtZW50LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpKVxuICAgICAgICBpZiAoIWVsKVxuICAgICAgICAgIHJldHVyblxuXG4gICAgICAgIC8qIFdhbGsgdXAgYXMgbG9uZyBhcyB3ZSdyZSBub3QgaW4gYSBkZXRhaWxzIHRhZyAqL1xuICAgICAgICBsZXQgcGFyZW50ID0gZWwucGFyZW50Tm9kZVxuICAgICAgICB3aGlsZSAocGFyZW50ICYmICEocGFyZW50IGluc3RhbmNlb2YgSFRNTERldGFpbHNFbGVtZW50KSlcbiAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxuXG4gICAgICAgIC8qIElmIHRoZXJlJ3MgYSBkZXRhaWxzIHRhZywgb3BlbiBpdCAqL1xuICAgICAgICBpZiAocGFyZW50ICYmICFwYXJlbnQub3Blbikge1xuICAgICAgICAgIHBhcmVudC5vcGVuID0gdHJ1ZVxuXG4gICAgICAgICAgLyogRm9yY2UgcmVsb2FkLCBzbyB0aGUgdmlld3BvcnQgcmVwb3NpdGlvbnMgKi9cbiAgICAgICAgICBjb25zdCBsb2MgPSBsb2NhdGlvbi5oYXNoXG4gICAgICAgICAgbG9jYXRpb24uaGFzaCA9IFwiIFwiXG4gICAgICAgICAgbG9jYXRpb24uaGFzaCA9IGxvY1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBkZXRhaWxzKVxuICAgIGRldGFpbHMoKVxuXG4gICAgLyogRm9yY2UgMXB4IHNjcm9sbCBvZmZzZXQgdG8gdHJpZ2dlciBvdmVyZmxvdyBzY3JvbGxpbmcgKi9cbiAgICBpZiAoTW9kZXJuaXpyLmlvcykge1xuICAgICAgY29uc3Qgc2Nyb2xsYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tZC1zY3JvbGxmaXhdXCIpXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHNjcm9sbGFibGUsIGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b3AgPSBpdGVtLnNjcm9sbFRvcFxuXG4gICAgICAgICAgLyogV2UncmUgYXQgdGhlIHRvcCBvZiB0aGUgY29udGFpbmVyICovXG4gICAgICAgICAgaWYgKHRvcCA9PT0gMCkge1xuICAgICAgICAgICAgaXRlbS5zY3JvbGxUb3AgPSAxXG5cbiAgICAgICAgICAgIC8qIFdlJ3JlIGF0IHRoZSBib3R0b20gb2YgdGhlIGNvbnRhaW5lciAqL1xuICAgICAgICAgIH0gZWxzZSBpZiAodG9wICsgaXRlbS5vZmZzZXRIZWlnaHQgPT09IGl0ZW0uc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgICAgICBpdGVtLnNjcm9sbFRvcCA9IHRvcCAtIDFcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfSkubGlzdGVuKClcblxuICAvKiBDb21wb25lbnQ6IGhlYWRlciBzaGFkb3cgdG9nZ2xlICovXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFtcbiAgICBcInNjcm9sbFwiLCBcInJlc2l6ZVwiLCBcIm9yaWVudGF0aW9uY2hhbmdlXCJcbiAgXSwgbmV3IE1hdGVyaWFsLkhlYWRlci5TaGFkb3coXG4gICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9Y29udGFpbmVyXVwiLFxuICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PWhlYWRlcl1cIilcbiAgKS5saXN0ZW4oKVxuXG4gIC8qIENvbXBvbmVudDogaGVhZGVyIHRpdGxlIHRvZ2dsZSAqL1xuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIod2luZG93LCBbXG4gICAgXCJzY3JvbGxcIiwgXCJyZXNpemVcIiwgXCJvcmllbnRhdGlvbmNoYW5nZVwiXG4gIF0sIG5ldyBNYXRlcmlhbC5IZWFkZXIuVGl0bGUoXG4gICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9dGl0bGVdXCIsXG4gICAgXCIubWQtdHlwZXNldCBoMVwiKVxuICApLmxpc3RlbigpXG5cbiAgLyogQ29tcG9uZW50OiBoZXJvIHZpc2liaWxpdHkgdG9nZ2xlICovXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtY29tcG9uZW50PWhlcm9dXCIpKVxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFtcbiAgICAgIFwic2Nyb2xsXCIsIFwicmVzaXplXCIsIFwib3JpZW50YXRpb25jaGFuZ2VcIlxuICAgIF0sIG5ldyBNYXRlcmlhbC5UYWJzLlRvZ2dsZShcIltkYXRhLW1kLWNvbXBvbmVudD1oZXJvXVwiKSkubGlzdGVuKClcblxuICAvKiBDb21wb25lbnQ6IHRhYnMgdmlzaWJpbGl0eSB0b2dnbGUgKi9cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9dGFic11cIikpXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgW1xuICAgICAgXCJzY3JvbGxcIiwgXCJyZXNpemVcIiwgXCJvcmllbnRhdGlvbmNoYW5nZVwiXG4gICAgXSwgbmV3IE1hdGVyaWFsLlRhYnMuVG9nZ2xlKFwiW2RhdGEtbWQtY29tcG9uZW50PXRhYnNdXCIpKS5saXN0ZW4oKVxuXG4gIC8qIENvbXBvbmVudDogc2lkZWJhciB3aXRoIG5hdmlnYXRpb24gKi9cbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiAxMjIwcHgpXCIsXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgW1xuICAgICAgXCJzY3JvbGxcIiwgXCJyZXNpemVcIiwgXCJvcmllbnRhdGlvbmNoYW5nZVwiXG4gICAgXSwgbmV3IE1hdGVyaWFsLlNpZGViYXIuUG9zaXRpb24oXG4gICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1uYXZpZ2F0aW9uXVwiLFxuICAgICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9aGVhZGVyXVwiKSkpXG5cbiAgLyogQ29tcG9uZW50OiBzaWRlYmFyIHdpdGggdGFibGUgb2YgY29udGVudHMgKG1pc3Npbmcgb24gNDA0IHBhZ2UpICovXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtY29tcG9uZW50PXRvY11cIikpXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA5NjBweClcIixcbiAgICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFtcbiAgICAgICAgXCJzY3JvbGxcIiwgXCJyZXNpemVcIiwgXCJvcmllbnRhdGlvbmNoYW5nZVwiXG4gICAgICBdLCBuZXcgTWF0ZXJpYWwuU2lkZWJhci5Qb3NpdGlvbihcbiAgICAgICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9dG9jXVwiLFxuICAgICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1oZWFkZXJdXCIpKSlcblxuICAvKiBDb21wb25lbnQ6IGxpbmsgYmx1cnJpbmcgZm9yIHRhYmxlIG9mIGNvbnRlbnRzICovXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogOTYwcHgpXCIsXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgXCJzY3JvbGxcIixcbiAgICAgIG5ldyBNYXRlcmlhbC5OYXYuQmx1cihcIltkYXRhLW1kLWNvbXBvbmVudD10b2NdIFtocmVmXVwiKSkpXG5cbiAgLyogQ29tcG9uZW50OiBjb2xsYXBzaWJsZSBlbGVtZW50cyBmb3IgbmF2aWdhdGlvbiAqL1xuICBjb25zdCBjb2xsYXBzaWJsZXMgPVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tZC1jb21wb25lbnQ9Y29sbGFwc2libGVdXCIpXG4gIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoY29sbGFwc2libGVzLCBjb2xsYXBzZSA9PiB7XG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiAxMjIwcHgpXCIsXG4gICAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoY29sbGFwc2UucHJldmlvdXNFbGVtZW50U2libGluZywgXCJjbGlja1wiLFxuICAgICAgICBuZXcgTWF0ZXJpYWwuTmF2LkNvbGxhcHNlKGNvbGxhcHNlKSkpXG4gIH0pXG5cbiAgLyogQ29tcG9uZW50OiBhY3RpdmUgcGFuZSBtb25pdG9yIGZvciBpT1Mgc2Nyb2xsaW5nIGZpeGVzICovXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTIxOXB4KVwiLFxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihcbiAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PW5hdmlnYXRpb25dIFtkYXRhLW1kLXRvZ2dsZV1cIiwgXCJjaGFuZ2VcIixcbiAgICAgIG5ldyBNYXRlcmlhbC5OYXYuU2Nyb2xsaW5nKFwiW2RhdGEtbWQtY29tcG9uZW50PW5hdmlnYXRpb25dIG5hdlwiKSkpXG5cbiAgLyogSW5pdGlhbGl6ZSBzZWFyY2gsIGlmIGF2YWlsYWJsZSAqL1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLWNvbXBvbmVudD1zZWFyY2hdXCIpKSB7XG5cbiAgICAvKiBDb21wb25lbnQ6IHNlYXJjaCBib2R5IGxvY2sgZm9yIG1vYmlsZSAqL1xuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1heC13aWR0aDogOTU5cHgpXCIsXG4gICAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoXCJbZGF0YS1tZC10b2dnbGU9c2VhcmNoXVwiLCBcImNoYW5nZVwiLFxuICAgICAgICBuZXcgTWF0ZXJpYWwuU2VhcmNoLkxvY2soXCJbZGF0YS1tZC10b2dnbGU9c2VhcmNoXVwiKSkpXG5cbiAgICAvKiBDb21wb25lbnQ6IHNlYXJjaCByZXN1bHRzICovXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKFwiW2RhdGEtbWQtY29tcG9uZW50PXF1ZXJ5XVwiLCBbXG4gICAgICBcImZvY3VzXCIsIFwia2V5dXBcIiwgXCJjaGFuZ2VcIlxuICAgIF0sIG5ldyBNYXRlcmlhbC5TZWFyY2guUmVzdWx0KFwiW2RhdGEtbWQtY29tcG9uZW50PXJlc3VsdF1cIiwgKCkgPT4ge1xuICAgICAgcmV0dXJuIGZldGNoKGAke2NvbmZpZy51cmwuYmFzZX0vJHtcbiAgICAgICAgY29uZmlnLnZlcnNpb24gPCBcIjAuMTdcIiA/IFwibWtkb2NzXCIgOiBcInNlYXJjaFwiXG4gICAgICB9L3NlYXJjaF9pbmRleC5qc29uYCwge1xuICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXG4gICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGRhdGEuZG9jcy5tYXAoZG9jID0+IHtcbiAgICAgICAgICAgIGRvYy5sb2NhdGlvbiA9IGAke2NvbmZpZy51cmwuYmFzZX0vJHtkb2MubG9jYXRpb259YFxuICAgICAgICAgICAgcmV0dXJuIGRvY1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSkpLmxpc3RlbigpXG5cbiAgICAvKiBMaXN0ZW5lcjogZm9jdXMgaW5wdXQgYWZ0ZXIgZm9ybSByZXNldCAqL1xuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihcIltkYXRhLW1kLWNvbXBvbmVudD1yZXNldF1cIiwgXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtY29tcG9uZW50PXF1ZXJ5XVwiKVxuICAgICAgICBpZiAoIShxdWVyeSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgICAgICBxdWVyeS5mb2N1cygpXG4gICAgICB9LCAxMClcbiAgICB9KS5saXN0ZW4oKVxuXG4gICAgLyogTGlzdGVuZXI6IGZvY3VzIGlucHV0IGFmdGVyIG9wZW5pbmcgc2VhcmNoICovXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKFwiW2RhdGEtbWQtdG9nZ2xlPXNlYXJjaF1cIiwgXCJjaGFuZ2VcIiwgZXYgPT4ge1xuICAgICAgc2V0VGltZW91dCh0b2dnbGUgPT4ge1xuICAgICAgICBpZiAoISh0b2dnbGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICAgICAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XG4gICAgICAgICAgY29uc3QgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtY29tcG9uZW50PXF1ZXJ5XVwiKVxuICAgICAgICAgIGlmICghKHF1ZXJ5IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICAgICAgICBxdWVyeS5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH0sIDQwMCwgZXYudGFyZ2V0KVxuICAgIH0pLmxpc3RlbigpXG5cbiAgICAvKiBMaXN0ZW5lcjogb3BlbiBzZWFyY2ggb24gZm9jdXMgKi9cbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDk2MHB4KVwiLFxuICAgICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKFwiW2RhdGEtbWQtY29tcG9uZW50PXF1ZXJ5XVwiLCBcImZvY3VzXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIpXG4gICAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgICAgICBpZiAoIXRvZ2dsZS5jaGVja2VkKSB7XG4gICAgICAgICAgdG9nZ2xlLmNoZWNrZWQgPSB0cnVlXG4gICAgICAgICAgdG9nZ2xlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKVxuICAgICAgICB9XG4gICAgICB9KSlcblxuICAgIC8qIExpc3RlbmVyOiBrZXlib2FyZCBoYW5kbGVycyAqLyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFwia2V5ZG93blwiLCBldiA9PiB7ICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogc3BsaXQgdXAgaW50byBjb21wb25lbnQgdG8gcmVkdWNlIGNvbXBsZXhpdHlcbiAgICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC10b2dnbGU9c2VhcmNoXVwiKVxuICAgICAgaWYgKCEodG9nZ2xlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgICAgY29uc3QgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtY29tcG9uZW50PXF1ZXJ5XVwiKVxuICAgICAgaWYgKCEocXVlcnkgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG5cbiAgICAgIC8qIEFib3J0IGlmIG1ldGEga2V5IChtYWNPUykgb3IgY3RybCBrZXkgKFdpbmRvd3MpIGlzIHByZXNzZWQgKi9cbiAgICAgIGlmIChldi5tZXRhS2V5IHx8IGV2LmN0cmxLZXkpXG4gICAgICAgIHJldHVyblxuXG4gICAgICAvKiBTZWFyY2ggaXMgb3BlbiAqL1xuICAgICAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XG5cbiAgICAgICAgLyogRW50ZXI6IHByZXZlbnQgZm9ybSBzdWJtaXNzaW9uICovXG4gICAgICAgIGlmIChldi5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgIGlmIChxdWVyeSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgICAgICAvKiBHbyB0byBjdXJyZW50IGFjdGl2ZS9mb2N1c2VkIGxpbmsgKi9cbiAgICAgICAgICAgIGNvbnN0IGZvY3VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9c2VhcmNoXSBbaHJlZl1bZGF0YS1tZC1zdGF0ZT1hY3RpdmVdXCIpXG4gICAgICAgICAgICBpZiAoZm9jdXMgaW5zdGFuY2VvZiBIVE1MTGlua0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gZm9jdXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKVxuXG4gICAgICAgICAgICAgIC8qIENsb3NlIHNlYXJjaCAqL1xuICAgICAgICAgICAgICB0b2dnbGUuY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgICAgICAgIHRvZ2dsZS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSlcbiAgICAgICAgICAgICAgcXVlcnkuYmx1cigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIC8qIEVzY2FwZSBvciBUYWI6IGNsb3NlIHNlYXJjaCAqL1xuICAgICAgICB9IGVsc2UgaWYgKGV2LmtleUNvZGUgPT09IDkgfHwgZXYua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICB0b2dnbGUuY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgICAgdG9nZ2xlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKVxuICAgICAgICAgIHF1ZXJ5LmJsdXIoKVxuXG4gICAgICAgIC8qIEhvcml6b250YWwgYXJyb3dzIGFuZCBiYWNrc3BhY2U6IGZvY3VzIGlucHV0ICovXG4gICAgICAgIH0gZWxzZSBpZiAoWzgsIDM3LCAzOV0uaW5kZXhPZihldi5rZXlDb2RlKSAhPT0gLTEpIHtcbiAgICAgICAgICBpZiAocXVlcnkgIT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpXG4gICAgICAgICAgICBxdWVyeS5mb2N1cygpXG5cbiAgICAgICAgLyogVmVydGljYWwgYXJyb3dzOiBzZWxlY3QgcHJldmlvdXMgb3IgbmV4dCBzZWFyY2ggcmVzdWx0ICovXG4gICAgICAgIH0gZWxzZSBpZiAoWzM4LCA0MF0uaW5kZXhPZihldi5rZXlDb2RlKSAhPT0gLTEpIHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBldi5rZXlDb2RlXG5cbiAgICAgICAgICAvKiBSZXRyaWV2ZSBhbGwgcmVzdWx0cyAqL1xuICAgICAgICAgIGNvbnN0IGxpbmtzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1xdWVyeV0sIFtkYXRhLW1kLWNvbXBvbmVudD1zZWFyY2hdIFtocmVmXVwiKSlcblxuICAgICAgICAgIC8qIFJldHJpZXZlIGN1cnJlbnQgYWN0aXZlL2ZvY3VzZWQgcmVzdWx0ICovXG4gICAgICAgICAgY29uc3QgZm9jdXMgPSBsaW5rcy5maW5kKGxpbmsgPT4ge1xuICAgICAgICAgICAgaWYgKCEobGluayBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgICAgICAgICByZXR1cm4gbGluay5kYXRhc2V0Lm1kU3RhdGUgPT09IFwiYWN0aXZlXCJcbiAgICAgICAgICB9KVxuICAgICAgICAgIGlmIChmb2N1cylcbiAgICAgICAgICAgIGZvY3VzLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcblxuICAgICAgICAgIC8qIENhbGN1bGF0ZSBpbmRleCBkZXBlbmRpbmcgb24gZGlyZWN0aW9uLCBhZGQgbGVuZ3RoIHRvIGZvcm0gcmluZyAqL1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5tYXgoMCwgKFxuICAgICAgICAgICAgbGlua3MuaW5kZXhPZihmb2N1cykgKyBsaW5rcy5sZW5ndGggKyAoa2V5ID09PSAzOCA/IC0xIDogKzEpXG4gICAgICAgICAgKSAlIGxpbmtzLmxlbmd0aClcblxuICAgICAgICAgIC8qIFNldCBhY3RpdmUgc3RhdGUgYW5kIGZvY3VzICovXG4gICAgICAgICAgaWYgKGxpbmtzW2luZGV4XSkge1xuICAgICAgICAgICAgbGlua3NbaW5kZXhdLmRhdGFzZXQubWRTdGF0ZSA9IFwiYWN0aXZlXCJcbiAgICAgICAgICAgIGxpbmtzW2luZGV4XS5mb2N1cygpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogUHJldmVudCBzY3JvbGxpbmcgb2YgcGFnZSAqL1xuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgICAgLyogUmV0dXJuIGZhbHNlIHByZXZlbnRzIHRoZSBjdXJzb3IgcG9zaXRpb24gZnJvbSBjaGFuZ2luZyAqL1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgIC8qIFNlYXJjaCBpcyBjbG9zZWQgYW5kIHdlJ3JlIG5vdCBpbnNpZGUgYSBmb3JtICovXG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgIWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuZm9ybSkge1xuXG4gICAgICAgIC8qIEYvUzogT3BlbiBzZWFyY2ggaWYgbm90IGluIGlucHV0IGZpZWxkICovXG4gICAgICAgIGlmIChldi5rZXlDb2RlID09PSA3MCB8fCBldi5rZXlDb2RlID09PSA4Mykge1xuICAgICAgICAgIHF1ZXJ5LmZvY3VzKClcbiAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KS5saXN0ZW4oKVxuXG4gICAgLyogTGlzdGVuZXI6IGZvY3VzIHF1ZXJ5IGlmIGluIHNlYXJjaCBpcyBvcGVuIGFuZCBjaGFyYWN0ZXIgaXMgdHlwZWQgKi9cbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIod2luZG93LCBcImtleXByZXNzXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC10b2dnbGU9c2VhcmNoXVwiKVxuICAgICAgaWYgKCEodG9nZ2xlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgICAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLWNvbXBvbmVudD1xdWVyeV1cIilcbiAgICAgICAgaWYgKCEocXVlcnkgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICAgICAgaWYgKHF1ZXJ5ICE9PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KVxuICAgICAgICAgIHF1ZXJ5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KS5saXN0ZW4oKVxuICB9XG5cbiAgLyogTGlzdGVuZXI6IGhhbmRsZSB0YWJiaW5nIGNvbnRleHQgZm9yIGJldHRlciBhY2Nlc3NpYmlsaXR5ICovXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihkb2N1bWVudC5ib2R5LCBcImtleWRvd25cIiwgZXYgPT4ge1xuICAgIGlmIChldi5rZXlDb2RlID09PSA5KSB7XG4gICAgICBjb25zdCBsYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1uYXZpZ2F0aW9uXSAubWQtbmF2X19saW5rW2Zvcl06bm90KFt0YWJpbmRleF0pXCIpXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxhYmVscywgbGFiZWwgPT4ge1xuICAgICAgICBpZiAobGFiZWwub2Zmc2V0SGVpZ2h0KVxuICAgICAgICAgIGxhYmVsLnRhYkluZGV4ID0gMFxuICAgICAgfSlcbiAgICB9XG4gIH0pLmxpc3RlbigpXG5cbiAgLyogTGlzdGVuZXI6IHJlc2V0IHRhYmJpbmcgYmVoYXZpb3IgKi9cbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKGRvY3VtZW50LmJvZHksIFwibW91c2Vkb3duXCIsICgpID0+IHtcbiAgICBjb25zdCBsYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9bmF2aWdhdGlvbl0gLm1kLW5hdl9fbGlua1t0YWJpbmRleF1cIilcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxhYmVscywgbGFiZWwgPT4ge1xuICAgICAgbGFiZWwucmVtb3ZlQXR0cmlidXRlKFwidGFiSW5kZXhcIilcbiAgICB9KVxuICB9KS5saXN0ZW4oKVxuXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5kYXRhc2V0Lm1kU3RhdGUgPT09IFwidGFiYmluZ1wiKVxuICAgICAgZG9jdW1lbnQuYm9keS5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXG4gIH0pXG5cbiAgLyogTGlzdGVuZXI6IGNsb3NlIGRyYXdlciB3aGVuIGFuY2hvciBsaW5rcyBhcmUgY2xpY2tlZCAqL1xuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDk1OXB4KVwiLFxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihcIltkYXRhLW1kLWNvbXBvbmVudD1uYXZpZ2F0aW9uXSBbaHJlZl49JyMnXVwiLFxuICAgICAgXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC10b2dnbGU9ZHJhd2VyXVwiKVxuICAgICAgICBpZiAoISh0b2dnbGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICAgICAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XG4gICAgICAgICAgdG9nZ2xlLmNoZWNrZWQgPSBmYWxzZVxuICAgICAgICAgIHRvZ2dsZS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSlcbiAgICAgICAgfVxuICAgICAgfSkpXG5cbiAgLyogUmV0cmlldmUgZmFjdHMgZm9yIHRoZSBnaXZlbiByZXBvc2l0b3J5IHR5cGUgKi9cbiAgOygoKSA9PiB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtc291cmNlXVwiKVxuICAgIGlmICghZWwpXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKVxuICAgIGVsc2UgaWYgKCEoZWwgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkpXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICBzd2l0Y2ggKGVsLmRhdGFzZXQubWRTb3VyY2UpIHtcbiAgICAgIGNhc2UgXCJnaXRodWJcIjogcmV0dXJuIG5ldyBNYXRlcmlhbC5Tb3VyY2UuQWRhcHRlci5HaXRIdWIoZWwpLmZldGNoKClcbiAgICAgIGRlZmF1bHQ6IHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pXG4gICAgfVxuXG4gIC8qIFJlbmRlciByZXBvc2l0b3J5IGluZm9ybWF0aW9uICovXG4gIH0pKCkudGhlbihmYWN0cyA9PiB7XG4gICAgY29uc3Qgc291cmNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tZC1zb3VyY2VdXCIpXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzb3VyY2VzLCBzb3VyY2UgPT4ge1xuICAgICAgbmV3IE1hdGVyaWFsLlNvdXJjZS5SZXBvc2l0b3J5KHNvdXJjZSlcbiAgICAgICAgLmluaXRpYWxpemUoZmFjdHMpXG4gICAgfSlcbiAgfSlcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXhwb3J0c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiBQcm92aWRlIHRoaXMgZm9yIGRvd253YXJkIGNvbXBhdGliaWxpdHkgZm9yIG5vdyAqL1xuY29uc3QgYXBwID0ge1xuICBpbml0aWFsaXplXG59XG5cbmV4cG9ydCB7XG4gIGFwcFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9hcHBsaWNhdGlvbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaWNvbnMvYml0YnVja2V0LnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvYml0YnVja2V0LnN2Z1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2ljb25zL2dpdGh1Yi5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2dpdGh1Yi5zdmdcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9pY29ucy9naXRsYWIuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9naXRsYWIuc3ZnXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2FwcGxpY2F0aW9uLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2FwcGxpY2F0aW9uLXBhbGV0dGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gUG9seWZpbGwgZm9yIGNyZWF0aW5nIEN1c3RvbUV2ZW50cyBvbiBJRTkvMTAvMTFcblxuLy8gY29kZSBwdWxsZWQgZnJvbTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kNHRvY2NoaW5pL2N1c3RvbWV2ZW50LXBvbHlmaWxsXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ3VzdG9tRXZlbnQjUG9seWZpbGxcblxuKGZ1bmN0aW9uKCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cnkge1xuICAgIHZhciBjZSA9IG5ldyB3aW5kb3cuQ3VzdG9tRXZlbnQoJ3Rlc3QnLCB7IGNhbmNlbGFibGU6IHRydWUgfSk7XG4gICAgY2UucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoY2UuZGVmYXVsdFByZXZlbnRlZCAhPT0gdHJ1ZSkge1xuICAgICAgLy8gSUUgaGFzIHByb2JsZW1zIHdpdGggLnByZXZlbnREZWZhdWx0KCkgb24gY3VzdG9tIGV2ZW50c1xuICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzM0OTE5MVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgcHJldmVudCBkZWZhdWx0Jyk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIEN1c3RvbUV2ZW50ID0gZnVuY3Rpb24oZXZlbnQsIHBhcmFtcykge1xuICAgICAgdmFyIGV2dCwgb3JpZ1ByZXZlbnQ7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMgfHwge1xuICAgICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICAgIGRldGFpbDogdW5kZWZpbmVkXG4gICAgICB9O1xuXG4gICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoXG4gICAgICAgIGV2ZW50LFxuICAgICAgICBwYXJhbXMuYnViYmxlcyxcbiAgICAgICAgcGFyYW1zLmNhbmNlbGFibGUsXG4gICAgICAgIHBhcmFtcy5kZXRhaWxcbiAgICAgICk7XG4gICAgICBvcmlnUHJldmVudCA9IGV2dC5wcmV2ZW50RGVmYXVsdDtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBvcmlnUHJldmVudC5jYWxsKHRoaXMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnZGVmYXVsdFByZXZlbnRlZCcsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhpcy5kZWZhdWx0UHJldmVudGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiBldnQ7XG4gICAgfTtcblxuICAgIEN1c3RvbUV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGU7XG4gICAgd2luZG93LkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnQ7IC8vIGV4cG9zZSBkZWZpbml0aW9uIHRvIHdpbmRvd1xuICB9XG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3VzdG9tLWV2ZW50LXBvbHlmaWxsL3BvbHlmaWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpZiAoIXdpbmRvdy5mZXRjaCkgd2luZG93LmZldGNoID0gcmVxdWlyZSgnLicpLmRlZmF1bHQgfHwgcmVxdWlyZSgnLicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdW5mZXRjaC9wb2x5ZmlsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHByb21pc2VGaW5hbGx5IGZyb20gJy4vZmluYWxseSc7XG5cbi8vIFN0b3JlIHNldFRpbWVvdXQgcmVmZXJlbmNlIHNvIHByb21pc2UtcG9seWZpbGwgd2lsbCBiZSB1bmFmZmVjdGVkIGJ5XG4vLyBvdGhlciBjb2RlIG1vZGlmeWluZyBzZXRUaW1lb3V0IChsaWtlIHNpbm9uLnVzZUZha2VUaW1lcnMoKSlcbnZhciBzZXRUaW1lb3V0RnVuYyA9IHNldFRpbWVvdXQ7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vLyBQb2x5ZmlsbCBmb3IgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbmZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICovXG5mdW5jdGlvbiBQcm9taXNlKGZuKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlKSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlcyBtdXN0IGJlIGNvbnN0cnVjdGVkIHZpYSBuZXcnKTtcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgZnVuY3Rpb24nKTtcbiAgLyoqIEB0eXBlIHshbnVtYmVyfSAqL1xuICB0aGlzLl9zdGF0ZSA9IDA7XG4gIC8qKiBAdHlwZSB7IWJvb2xlYW59ICovXG4gIHRoaXMuX2hhbmRsZWQgPSBmYWxzZTtcbiAgLyoqIEB0eXBlIHtQcm9taXNlfHVuZGVmaW5lZH0gKi9cbiAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gIC8qKiBAdHlwZSB7IUFycmF5PCFGdW5jdGlvbj59ICovXG4gIHRoaXMuX2RlZmVycmVkcyA9IFtdO1xuXG4gIGRvUmVzb2x2ZShmbiwgdGhpcyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZShzZWxmLCBkZWZlcnJlZCkge1xuICB3aGlsZSAoc2VsZi5fc3RhdGUgPT09IDMpIHtcbiAgICBzZWxmID0gc2VsZi5fdmFsdWU7XG4gIH1cbiAgaWYgKHNlbGYuX3N0YXRlID09PSAwKSB7XG4gICAgc2VsZi5fZGVmZXJyZWRzLnB1c2goZGVmZXJyZWQpO1xuICAgIHJldHVybjtcbiAgfVxuICBzZWxmLl9oYW5kbGVkID0gdHJ1ZTtcbiAgUHJvbWlzZS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNiID0gc2VsZi5fc3RhdGUgPT09IDEgPyBkZWZlcnJlZC5vbkZ1bGZpbGxlZCA6IGRlZmVycmVkLm9uUmVqZWN0ZWQ7XG4gICAgaWYgKGNiID09PSBudWxsKSB7XG4gICAgICAoc2VsZi5fc3RhdGUgPT09IDEgPyByZXNvbHZlIDogcmVqZWN0KShkZWZlcnJlZC5wcm9taXNlLCBzZWxmLl92YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciByZXQ7XG4gICAgdHJ5IHtcbiAgICAgIHJldCA9IGNiKHNlbGYuX3ZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3QoZGVmZXJyZWQucHJvbWlzZSwgZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlc29sdmUoZGVmZXJyZWQucHJvbWlzZSwgcmV0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmUoc2VsZiwgbmV3VmFsdWUpIHtcbiAgdHJ5IHtcbiAgICAvLyBQcm9taXNlIFJlc29sdXRpb24gUHJvY2VkdXJlOiBodHRwczovL2dpdGh1Yi5jb20vcHJvbWlzZXMtYXBsdXMvcHJvbWlzZXMtc3BlYyN0aGUtcHJvbWlzZS1yZXNvbHV0aW9uLXByb2NlZHVyZVxuICAgIGlmIChuZXdWYWx1ZSA9PT0gc2VsZilcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuJyk7XG4gICAgaWYgKFxuICAgICAgbmV3VmFsdWUgJiZcbiAgICAgICh0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICApIHtcbiAgICAgIHZhciB0aGVuID0gbmV3VmFsdWUudGhlbjtcbiAgICAgIGlmIChuZXdWYWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgc2VsZi5fc3RhdGUgPSAzO1xuICAgICAgICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBmaW5hbGUoc2VsZik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZG9SZXNvbHZlKGJpbmQodGhlbiwgbmV3VmFsdWUpLCBzZWxmKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBzZWxmLl9zdGF0ZSA9IDE7XG4gICAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICBmaW5hbGUoc2VsZik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZWplY3Qoc2VsZiwgZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVqZWN0KHNlbGYsIG5ld1ZhbHVlKSB7XG4gIHNlbGYuX3N0YXRlID0gMjtcbiAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgZmluYWxlKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBmaW5hbGUoc2VsZikge1xuICBpZiAoc2VsZi5fc3RhdGUgPT09IDIgJiYgc2VsZi5fZGVmZXJyZWRzLmxlbmd0aCA9PT0gMCkge1xuICAgIFByb21pc2UuX2ltbWVkaWF0ZUZuKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFzZWxmLl9oYW5kbGVkKSB7XG4gICAgICAgIFByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbkZuKHNlbGYuX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWxmLl9kZWZlcnJlZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBoYW5kbGUoc2VsZiwgc2VsZi5fZGVmZXJyZWRzW2ldKTtcbiAgfVxuICBzZWxmLl9kZWZlcnJlZHMgPSBudWxsO1xufVxuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBwcm9taXNlKSB7XG4gIHRoaXMub25GdWxmaWxsZWQgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IG51bGw7XG4gIHRoaXMub25SZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IG51bGw7XG4gIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG59XG5cbi8qKlxuICogVGFrZSBhIHBvdGVudGlhbGx5IG1pc2JlaGF2aW5nIHJlc29sdmVyIGZ1bmN0aW9uIGFuZCBtYWtlIHN1cmVcbiAqIG9uRnVsZmlsbGVkIGFuZCBvblJlamVjdGVkIGFyZSBvbmx5IGNhbGxlZCBvbmNlLlxuICpcbiAqIE1ha2VzIG5vIGd1YXJhbnRlZXMgYWJvdXQgYXN5bmNocm9ueS5cbiAqL1xuZnVuY3Rpb24gZG9SZXNvbHZlKGZuLCBzZWxmKSB7XG4gIHZhciBkb25lID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgZm4oXG4gICAgICBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZShzZWxmLCB2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICByZWplY3Qoc2VsZiwgcmVhc29uKTtcbiAgICAgIH1cbiAgICApO1xuICB9IGNhdGNoIChleCkge1xuICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgZG9uZSA9IHRydWU7XG4gICAgcmVqZWN0KHNlbGYsIGV4KTtcbiAgfVxufVxuXG5Qcm9taXNlLnByb3RvdHlwZVsnY2F0Y2gnXSA9IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpIHtcbiAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAvLyBAdHMtaWdub3JlXG4gIHZhciBwcm9tID0gbmV3IHRoaXMuY29uc3RydWN0b3Iobm9vcCk7XG5cbiAgaGFuZGxlKHRoaXMsIG5ldyBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBwcm9tKSk7XG4gIHJldHVybiBwcm9tO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGVbJ2ZpbmFsbHknXSA9IHByb21pc2VGaW5hbGx5O1xuXG5Qcm9taXNlLmFsbCA9IGZ1bmN0aW9uKGFycikge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKCFhcnIgfHwgdHlwZW9mIGFyci5sZW5ndGggPT09ICd1bmRlZmluZWQnKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZS5hbGwgYWNjZXB0cyBhbiBhcnJheScpO1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyKTtcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHJldHVybiByZXNvbHZlKFtdKTtcbiAgICB2YXIgcmVtYWluaW5nID0gYXJncy5sZW5ndGg7XG5cbiAgICBmdW5jdGlvbiByZXMoaSwgdmFsKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodmFsICYmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgIHZhciB0aGVuID0gdmFsLnRoZW47XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwoXG4gICAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgICAgZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgcmVzKGksIHZhbCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXJnc1tpXSA9IHZhbDtcbiAgICAgICAgaWYgKC0tcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgICAgcmVzb2x2ZShhcmdzKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgcmVqZWN0KGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlcyhpLCBhcmdzW2ldKTtcbiAgICB9XG4gIH0pO1xufTtcblxuUHJvbWlzZS5yZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IFByb21pc2UpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9KTtcbn07XG5cblByb21pc2UucmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHJlamVjdCh2YWx1ZSk7XG4gIH0pO1xufTtcblxuUHJvbWlzZS5yYWNlID0gZnVuY3Rpb24odmFsdWVzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdmFsdWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YWx1ZXNbaV0udGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBVc2UgcG9seWZpbGwgZm9yIHNldEltbWVkaWF0ZSBmb3IgcGVyZm9ybWFuY2UgZ2FpbnNcblByb21pc2UuX2ltbWVkaWF0ZUZuID1cbiAgKHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09ICdmdW5jdGlvbicgJiZcbiAgICBmdW5jdGlvbihmbikge1xuICAgICAgc2V0SW1tZWRpYXRlKGZuKTtcbiAgICB9KSB8fFxuICBmdW5jdGlvbihmbikge1xuICAgIHNldFRpbWVvdXRGdW5jKGZuLCAwKTtcbiAgfTtcblxuUHJvbWlzZS5fdW5oYW5kbGVkUmVqZWN0aW9uRm4gPSBmdW5jdGlvbiBfdW5oYW5kbGVkUmVqZWN0aW9uRm4oZXJyKSB7XG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZSkge1xuICAgIGNvbnNvbGUud2FybignUG9zc2libGUgVW5oYW5kbGVkIFByb21pc2UgUmVqZWN0aW9uOicsIGVycik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAdGhpcyB7UHJvbWlzZX1cbiAqL1xuZnVuY3Rpb24gZmluYWxseUNvbnN0cnVjdG9yKGNhbGxiYWNrKSB7XG4gIHZhciBjb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG4gIHJldHVybiB0aGlzLnRoZW4oXG4gICAgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICByZXR1cm4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY29uc3RydWN0b3IucmVqZWN0KHJlYXNvbik7XG4gICAgICB9KTtcbiAgICB9XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmFsbHlDb25zdHJ1Y3RvcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb21pc2UtcG9seWZpbGwvc3JjL2ZpbmFsbHkuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogY2xpcGJvYXJkLmpzIHYyLjAuNFxuICogaHR0cHM6Ly96ZW5vcm9jaGEuZ2l0aHViLmlvL2NsaXBib2FyZC5qc1xuICogXG4gKiBMaWNlbnNlZCBNSVQgwqkgWmVubyBSb2NoYVxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDbGlwYm9hcmRKU1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDbGlwYm9hcmRKU1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jbGlwYm9hcmRBY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX2NsaXBib2FyZEFjdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGlwYm9hcmRBY3Rpb24pO1xuXG52YXIgX3RpbnlFbWl0dGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxudmFyIF90aW55RW1pdHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW55RW1pdHRlcik7XG5cbnZhciBfZ29vZExpc3RlbmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIF9nb29kTGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ29vZExpc3RlbmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIEJhc2UgY2xhc3Mgd2hpY2ggdGFrZXMgb25lIG9yIG1vcmUgZWxlbWVudHMsIGFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZW0sXG4gKiBhbmQgaW5zdGFudGlhdGVzIGEgbmV3IGBDbGlwYm9hcmRBY3Rpb25gIG9uIGVhY2ggY2xpY2suXG4gKi9cbnZhciBDbGlwYm9hcmQgPSBmdW5jdGlvbiAoX0VtaXR0ZXIpIHtcbiAgICBfaW5oZXJpdHMoQ2xpcGJvYXJkLCBfRW1pdHRlcik7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudHxIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdH0gdHJpZ2dlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gQ2xpcGJvYXJkKHRyaWdnZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENsaXBib2FyZCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENsaXBib2FyZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENsaXBib2FyZCkpLmNhbGwodGhpcykpO1xuXG4gICAgICAgIF90aGlzLnJlc29sdmVPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICBfdGhpcy5saXN0ZW5DbGljayh0cmlnZ2VyKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgaWYgYXR0cmlidXRlcyB3b3VsZCBiZSByZXNvbHZlZCB1c2luZyBpbnRlcm5hbCBzZXR0ZXIgZnVuY3Rpb25zXG4gICAgICogb3IgY3VzdG9tIGZ1bmN0aW9ucyB0aGF0IHdlcmUgcGFzc2VkIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2xpcGJvYXJkLCBbe1xuICAgICAgICBrZXk6ICdyZXNvbHZlT3B0aW9ucycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlT3B0aW9ucygpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSB0eXBlb2Ygb3B0aW9ucy5hY3Rpb24gPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLmFjdGlvbiA6IHRoaXMuZGVmYXVsdEFjdGlvbjtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdHlwZW9mIG9wdGlvbnMudGFyZ2V0ID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy50YXJnZXQgOiB0aGlzLmRlZmF1bHRUYXJnZXQ7XG4gICAgICAgICAgICB0aGlzLnRleHQgPSB0eXBlb2Ygb3B0aW9ucy50ZXh0ID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy50ZXh0IDogdGhpcy5kZWZhdWx0VGV4dDtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gX3R5cGVvZihvcHRpb25zLmNvbnRhaW5lcikgPT09ICdvYmplY3QnID8gb3B0aW9ucy5jb250YWluZXIgOiBkb2N1bWVudC5ib2R5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZHMgYSBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgcGFzc2VkIHRyaWdnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfEhUTUxFbGVtZW50fEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fSB0cmlnZ2VyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsaXN0ZW5DbGljaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW5DbGljayh0cmlnZ2VyKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5saXN0ZW5lciA9ICgwLCBfZ29vZExpc3RlbmVyMi5kZWZhdWx0KSh0cmlnZ2VyLCAnY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIub25DbGljayhlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluZXMgYSBuZXcgYENsaXBib2FyZEFjdGlvbmAgb24gZWFjaCBjbGljayBldmVudC5cbiAgICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25DbGljaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICAgIHZhciB0cmlnZ2VyID0gZS5kZWxlZ2F0ZVRhcmdldCB8fCBlLmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNsaXBib2FyZEFjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkQWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jbGlwYm9hcmRBY3Rpb24gPSBuZXcgX2NsaXBib2FyZEFjdGlvbjIuZGVmYXVsdCh7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiB0aGlzLmFjdGlvbih0cmlnZ2VyKSxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMudGFyZ2V0KHRyaWdnZXIpLFxuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dCh0cmlnZ2VyKSxcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuY29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IHRyaWdnZXIsXG4gICAgICAgICAgICAgICAgZW1pdHRlcjogdGhpc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBgYWN0aW9uYCBsb29rdXAgZnVuY3Rpb24uXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdHJpZ2dlclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVmYXVsdEFjdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0QWN0aW9uKHRyaWdnZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRBdHRyaWJ1dGVWYWx1ZSgnYWN0aW9uJywgdHJpZ2dlcik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBgdGFyZ2V0YCBsb29rdXAgZnVuY3Rpb24uXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdHJpZ2dlclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVmYXVsdFRhcmdldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0VGFyZ2V0KHRyaWdnZXIpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RvciA9IGdldEF0dHJpYnV0ZVZhbHVlKCd0YXJnZXQnLCB0cmlnZ2VyKTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIHN1cHBvcnQgb2YgdGhlIGdpdmVuIGFjdGlvbiwgb3IgYWxsIGFjdGlvbnMgaWYgbm8gYWN0aW9uIGlzXG4gICAgICAgICAqIGdpdmVuLlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2FjdGlvbl1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2RlZmF1bHRUZXh0JyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZhdWx0IGB0ZXh0YCBsb29rdXAgZnVuY3Rpb24uXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdHJpZ2dlclxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlZmF1bHRUZXh0KHRyaWdnZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRBdHRyaWJ1dGVWYWx1ZSgndGV4dCcsIHRyaWdnZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlc3Ryb3kgbGlmZWN5Y2xlLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVzdHJveScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lci5kZXN0cm95KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNsaXBib2FyZEFjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkQWN0aW9uLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaXBib2FyZEFjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgICAga2V5OiAnaXNTdXBwb3J0ZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNTdXBwb3J0ZWQoKSB7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbJ2NvcHknLCAnY3V0J107XG5cbiAgICAgICAgICAgIHZhciBhY3Rpb25zID0gdHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycgPyBbYWN0aW9uXSA6IGFjdGlvbjtcbiAgICAgICAgICAgIHZhciBzdXBwb3J0ID0gISFkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQ7XG5cbiAgICAgICAgICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgc3VwcG9ydCA9IHN1cHBvcnQgJiYgISFkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQoYWN0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDbGlwYm9hcmQ7XG59KF90aW55RW1pdHRlcjIuZGVmYXVsdCk7XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHJldHJpZXZlIGF0dHJpYnV0ZSB2YWx1ZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdWZmaXhcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlVmFsdWUoc3VmZml4LCBlbGVtZW50KSB7XG4gICAgdmFyIGF0dHJpYnV0ZSA9ICdkYXRhLWNsaXBib2FyZC0nICsgc3VmZml4O1xuXG4gICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDbGlwYm9hcmQ7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfc2VsZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9zZWxlY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2VsZWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBJbm5lciBjbGFzcyB3aGljaCBwZXJmb3JtcyBzZWxlY3Rpb24gZnJvbSBlaXRoZXIgYHRleHRgIG9yIGB0YXJnZXRgXG4gKiBwcm9wZXJ0aWVzIGFuZCB0aGVuIGV4ZWN1dGVzIGNvcHkgb3IgY3V0IG9wZXJhdGlvbnMuXG4gKi9cbnZhciBDbGlwYm9hcmRBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBDbGlwYm9hcmRBY3Rpb24ob3B0aW9ucykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2xpcGJvYXJkQWN0aW9uKTtcblxuICAgICAgICB0aGlzLnJlc29sdmVPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmluaXRTZWxlY3Rpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGJhc2UgcHJvcGVydGllcyBwYXNzZWQgZnJvbSBjb25zdHJ1Y3Rvci5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2xpcGJvYXJkQWN0aW9uLCBbe1xuICAgICAgICBrZXk6ICdyZXNvbHZlT3B0aW9ucycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlT3B0aW9ucygpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBvcHRpb25zLmFjdGlvbjtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG4gICAgICAgICAgICB0aGlzLmVtaXR0ZXIgPSBvcHRpb25zLmVtaXR0ZXI7XG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IG9wdGlvbnMudGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyID0gb3B0aW9ucy50cmlnZ2VyO1xuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGV4dCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlY2lkZXMgd2hpY2ggc2VsZWN0aW9uIHN0cmF0ZWd5IGlzIGdvaW5nIHRvIGJlIGFwcGxpZWQgYmFzZWRcbiAgICAgICAgICogb24gdGhlIGV4aXN0ZW5jZSBvZiBgdGV4dGAgYW5kIGB0YXJnZXRgIHByb3BlcnRpZXMuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpbml0U2VsZWN0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRTZWxlY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RGYWtlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RUYXJnZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgZmFrZSB0ZXh0YXJlYSBlbGVtZW50LCBzZXRzIGl0cyB2YWx1ZSBmcm9tIGB0ZXh0YCBwcm9wZXJ0eSxcbiAgICAgICAgICogYW5kIG1ha2VzIGEgc2VsZWN0aW9uIG9uIGl0LlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2VsZWN0RmFrZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3RGYWtlKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGlzUlRMID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlyJykgPT0gJ3J0bCc7XG5cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRmFrZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmZha2VIYW5kbGVyQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlbW92ZUZha2UoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmZha2VIYW5kbGVyID0gdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmZha2VIYW5kbGVyQ2FsbGJhY2spIHx8IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgLy8gUHJldmVudCB6b29taW5nIG9uIGlPU1xuICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS5mb250U2l6ZSA9ICcxMnB0JztcbiAgICAgICAgICAgIC8vIFJlc2V0IGJveCBtb2RlbFxuICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS5ib3JkZXIgPSAnMCc7XG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLnBhZGRpbmcgPSAnMCc7XG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICAgICAgICAgIC8vIE1vdmUgZWxlbWVudCBvdXQgb2Ygc2NyZWVuIGhvcml6b250YWxseVxuICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlW2lzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0J10gPSAnLTk5OTlweCc7XG4gICAgICAgICAgICAvLyBNb3ZlIGVsZW1lbnQgdG8gdGhlIHNhbWUgcG9zaXRpb24gdmVydGljYWxseVxuICAgICAgICAgICAgdmFyIHlQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS50b3AgPSB5UG9zaXRpb24gKyAncHgnO1xuXG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLnZhbHVlID0gdGhpcy50ZXh0O1xuXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZha2VFbGVtKTtcblxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRleHQgPSAoMCwgX3NlbGVjdDIuZGVmYXVsdCkodGhpcy5mYWtlRWxlbSk7XG4gICAgICAgICAgICB0aGlzLmNvcHlUZXh0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogT25seSByZW1vdmVzIHRoZSBmYWtlIGVsZW1lbnQgYWZ0ZXIgYW5vdGhlciBjbGljayBldmVudCwgdGhhdCB3YXlcbiAgICAgICAgICogYSB1c2VyIGNhbiBoaXQgYEN0cmwrQ2AgdG8gY29weSBiZWNhdXNlIHNlbGVjdGlvbiBzdGlsbCBleGlzdHMuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW1vdmVGYWtlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUZha2UoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mYWtlSGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5mYWtlSGFuZGxlckNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VIYW5kbGVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VIYW5kbGVyQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5mYWtlRWxlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZmFrZUVsZW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlbGVjdHMgdGhlIGNvbnRlbnQgZnJvbSBlbGVtZW50IHBhc3NlZCBvbiBgdGFyZ2V0YCBwcm9wZXJ0eS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NlbGVjdFRhcmdldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3RUYXJnZXQoKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGV4dCA9ICgwLCBfc2VsZWN0Mi5kZWZhdWx0KSh0aGlzLnRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLmNvcHlUZXh0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRXhlY3V0ZXMgdGhlIGNvcHkgb3BlcmF0aW9uIGJhc2VkIG9uIHRoZSBjdXJyZW50IHNlbGVjdGlvbi5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvcHlUZXh0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvcHlUZXh0KCkge1xuICAgICAgICAgICAgdmFyIHN1Y2NlZWRlZCA9IHZvaWQgMDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzdWNjZWVkZWQgPSBkb2N1bWVudC5leGVjQ29tbWFuZCh0aGlzLmFjdGlvbik7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBzdWNjZWVkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5oYW5kbGVSZXN1bHQoc3VjY2VlZGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaXJlcyBhbiBldmVudCBiYXNlZCBvbiB0aGUgY29weSBvcGVyYXRpb24gcmVzdWx0LlxuICAgICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHN1Y2NlZWRlZFxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlUmVzdWx0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVJlc3VsdChzdWNjZWVkZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KHN1Y2NlZWRlZCA/ICdzdWNjZXNzJyA6ICdlcnJvcicsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IHRoaXMuYWN0aW9uLFxuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuc2VsZWN0ZWRUZXh0LFxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IHRoaXMudHJpZ2dlcixcbiAgICAgICAgICAgICAgICBjbGVhclNlbGVjdGlvbjogdGhpcy5jbGVhclNlbGVjdGlvbi5iaW5kKHRoaXMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNb3ZlcyBmb2N1cyBhd2F5IGZyb20gYHRhcmdldGAgYW5kIGJhY2sgdG8gdGhlIHRyaWdnZXIsIHJlbW92ZXMgY3VycmVudCBzZWxlY3Rpb24uXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjbGVhclNlbGVjdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhclNlbGVjdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIGBhY3Rpb25gIHRvIGJlIHBlcmZvcm1lZCB3aGljaCBjYW4gYmUgZWl0aGVyICdjb3B5JyBvciAnY3V0Jy5cbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvblxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVzdHJveScsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVzdHJveSBsaWZlY3ljbGUuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRmFrZSgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdhY3Rpb24nLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCgpIHtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICdjb3B5JztcblxuICAgICAgICAgICAgdGhpcy5fYWN0aW9uID0gYWN0aW9uO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fYWN0aW9uICE9PSAnY29weScgJiYgdGhpcy5fYWN0aW9uICE9PSAnY3V0Jykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcImFjdGlvblwiIHZhbHVlLCB1c2UgZWl0aGVyIFwiY29weVwiIG9yIFwiY3V0XCInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSBgYWN0aW9uYCBwcm9wZXJ0eS5cbiAgICAgICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgYHRhcmdldGAgcHJvcGVydHkgdXNpbmcgYW4gZWxlbWVudFxuICAgICAgICAgKiB0aGF0IHdpbGwgYmUgaGF2ZSBpdHMgY29udGVudCBjb3BpZWQuXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICd0YXJnZXQnLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgKHR5cGVvZiB0YXJnZXQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHRhcmdldCkpID09PSAnb2JqZWN0JyAmJiB0YXJnZXQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSAnY29weScgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgYXR0cmlidXRlLiBQbGVhc2UgdXNlIFwicmVhZG9ubHlcIiBpbnN0ZWFkIG9mIFwiZGlzYWJsZWRcIiBhdHRyaWJ1dGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ2N1dCcgJiYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoJ3JlYWRvbmx5JykgfHwgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIGF0dHJpYnV0ZS4gWW91IGNhblxcJ3QgY3V0IHRleHQgZnJvbSBlbGVtZW50cyB3aXRoIFwicmVhZG9ubHlcIiBvciBcImRpc2FibGVkXCIgYXR0cmlidXRlcycpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIHZhbHVlLCB1c2UgYSB2YWxpZCBFbGVtZW50Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIGB0YXJnZXRgIHByb3BlcnR5LlxuICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd8SFRNTEVsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDbGlwYm9hcmRBY3Rpb247XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xpcGJvYXJkQWN0aW9uO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gc2VsZWN0KGVsZW1lbnQpIHtcbiAgICB2YXIgc2VsZWN0ZWRUZXh0O1xuXG4gICAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IGVsZW1lbnQubm9kZU5hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgdmFyIGlzUmVhZE9ubHkgPSBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgncmVhZG9ubHknKTtcblxuICAgICAgICBpZiAoIWlzUmVhZE9ubHkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuc2VsZWN0KCk7XG4gICAgICAgIGVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgZWxlbWVudC52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICAgIGlmICghaXNSZWFkT25seSkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKSkge1xuICAgICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcblxuICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZWxlbWVudCk7XG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBzZWxlY3Rpb24udG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRUZXh0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlbGVjdDtcblxuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gRSAoKSB7XG4gIC8vIEtlZXAgdGhpcyBlbXB0eSBzbyBpdCdzIGVhc2llciB0byBpbmhlcml0IGZyb21cbiAgLy8gKHZpYSBodHRwczovL2dpdGh1Yi5jb20vbGlwc21hY2sgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2lzc3Vlcy8zKVxufVxuXG5FLnByb3RvdHlwZSA9IHtcbiAgb246IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcblxuICAgIChlW25hbWVdIHx8IChlW25hbWVdID0gW10pKS5wdXNoKHtcbiAgICAgIGZuOiBjYWxsYmFjayxcbiAgICAgIGN0eDogY3R4XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvbmNlOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBmdW5jdGlvbiBsaXN0ZW5lciAoKSB7XG4gICAgICBzZWxmLm9mZihuYW1lLCBsaXN0ZW5lcik7XG4gICAgICBjYWxsYmFjay5hcHBseShjdHgsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVyLl8gPSBjYWxsYmFja1xuICAgIHJldHVybiB0aGlzLm9uKG5hbWUsIGxpc3RlbmVyLCBjdHgpO1xuICB9LFxuXG4gIGVtaXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGRhdGEgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGV2dEFyciA9ICgodGhpcy5lIHx8ICh0aGlzLmUgPSB7fSkpW25hbWVdIHx8IFtdKS5zbGljZSgpO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuID0gZXZ0QXJyLmxlbmd0aDtcblxuICAgIGZvciAoaTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBldnRBcnJbaV0uZm4uYXBwbHkoZXZ0QXJyW2ldLmN0eCwgZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb2ZmOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuICAgIHZhciBldnRzID0gZVtuYW1lXTtcbiAgICB2YXIgbGl2ZUV2ZW50cyA9IFtdO1xuXG4gICAgaWYgKGV2dHMgJiYgY2FsbGJhY2spIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBldnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChldnRzW2ldLmZuICE9PSBjYWxsYmFjayAmJiBldnRzW2ldLmZuLl8gIT09IGNhbGxiYWNrKVxuICAgICAgICAgIGxpdmVFdmVudHMucHVzaChldnRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZXZlbnQgZnJvbSBxdWV1ZSB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gICAgLy8gU3VnZ2VzdGVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9sYXpkXG4gICAgLy8gUmVmOiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2NvbW1pdC9jNmViZmFhOWJjOTczYjMzZDExMGE4NGEzMDc3NDJiN2NmOTRjOTUzI2NvbW1pdGNvbW1lbnQtNTAyNDkxMFxuXG4gICAgKGxpdmVFdmVudHMubGVuZ3RoKVxuICAgICAgPyBlW25hbWVdID0gbGl2ZUV2ZW50c1xuICAgICAgOiBkZWxldGUgZVtuYW1lXTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEU7XG5cblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBpcyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG52YXIgZGVsZWdhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG4vKipcbiAqIFZhbGlkYXRlcyBhbGwgcGFyYW1zIGFuZCBjYWxscyB0aGUgcmlnaHRcbiAqIGxpc3RlbmVyIGZ1bmN0aW9uIGJhc2VkIG9uIGl0cyB0YXJnZXQgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudHxIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIXRhcmdldCAmJiAhdHlwZSAmJiAhY2FsbGJhY2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50cycpO1xuICAgIH1cblxuICAgIGlmICghaXMuc3RyaW5nKHR5cGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgU3RyaW5nJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpcy5mbihjYWxsYmFjaykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhpcmQgYXJndW1lbnQgbXVzdCBiZSBhIEZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzLm5vZGUodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbGlzdGVuTm9kZSh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXMubm9kZUxpc3QodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbGlzdGVuTm9kZUxpc3QodGFyZ2V0LCB0eXBlLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzLnN0cmluZyh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5TZWxlY3Rvcih0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBTdHJpbmcsIEhUTUxFbGVtZW50LCBIVE1MQ29sbGVjdGlvbiwgb3IgTm9kZUxpc3QnKTtcbiAgICB9XG59XG5cbi8qKlxuICogQWRkcyBhbiBldmVudCBsaXN0ZW5lciB0byBhIEhUTUwgZWxlbWVudFxuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3Rlbk5vZGUobm9kZSwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBhIGxpc3Qgb2YgSFRNTCBlbGVtZW50c1xuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtOb2RlTGlzdHxIVE1MQ29sbGVjdGlvbn0gbm9kZUxpc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBsaXN0ZW5Ob2RlTGlzdChub2RlTGlzdCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVMaXN0LCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZUxpc3QsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgc2VsZWN0b3JcbiAqIGFuZCByZXR1cm5zIGEgcmVtb3ZlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3RlblNlbGVjdG9yKHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBkZWxlZ2F0ZShkb2N1bWVudC5ib2R5LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RlbjtcblxuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIEhUTUwgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMubm9kZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgJiYgdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxuICAgICAgICAmJiB2YWx1ZS5ub2RlVHlwZSA9PT0gMTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBsaXN0IG9mIEhUTUwgZWxlbWVudHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLm5vZGVMaXN0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG5cbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICAmJiAodHlwZSA9PT0gJ1tvYmplY3QgTm9kZUxpc3RdJyB8fCB0eXBlID09PSAnW29iamVjdCBIVE1MQ29sbGVjdGlvbl0nKVxuICAgICAgICAmJiAoJ2xlbmd0aCcgaW4gdmFsdWUpXG4gICAgICAgICYmICh2YWx1ZS5sZW5ndGggPT09IDAgfHwgZXhwb3J0cy5ub2RlKHZhbHVlWzBdKSk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5zdHJpbmcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gICAgICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5mbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG4gICAgcmV0dXJuIHR5cGUgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgY2xvc2VzdCA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cbi8qKlxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIF9kZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICB2YXIgbGlzdGVuZXJGbiA9IGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR8U3RyaW5nfEFycmF5fSBbZWxlbWVudHNdXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGRlbGVnYXRlKGVsZW1lbnRzLCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICAvLyBIYW5kbGUgdGhlIHJlZ3VsYXIgRWxlbWVudCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEVsZW1lbnQtbGVzcyB1c2FnZSwgaXQgZGVmYXVsdHMgdG8gZ2xvYmFsIGRlbGVnYXRpb25cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gVXNlIGBkb2N1bWVudGAgYXMgdGhlIGZpcnN0IHBhcmFtZXRlciwgdGhlbiBhcHBseSBhcmd1bWVudHNcbiAgICAgICAgLy8gVGhpcyBpcyBhIHNob3J0IHdheSB0byAudW5zaGlmdCBgYXJndW1lbnRzYCB3aXRob3V0IHJ1bm5pbmcgaW50byBkZW9wdGltaXphdGlvbnNcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5iaW5kKG51bGwsIGRvY3VtZW50KS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBTZWxlY3Rvci1iYXNlZCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEFycmF5LWxpa2UgYmFzZWQgdXNhZ2VcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogRmluZHMgY2xvc2VzdCBtYXRjaCBhbmQgaW52b2tlcyBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuZXIoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5kZWxlZ2F0ZVRhcmdldCA9IGNsb3Nlc3QoZS50YXJnZXQsIHNlbGVjdG9yKTtcblxuICAgICAgICBpZiAoZS5kZWxlZ2F0ZVRhcmdldCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChlbGVtZW50LCBlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWxlZ2F0ZTtcblxuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxudmFyIERPQ1VNRU5UX05PREVfVFlQRSA9IDk7XG5cbi8qKlxuICogQSBwb2x5ZmlsbCBmb3IgRWxlbWVudC5tYXRjaGVzKClcbiAqL1xuaWYgKHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICAgIHZhciBwcm90byA9IEVsZW1lbnQucHJvdG90eXBlO1xuXG4gICAgcHJvdG8ubWF0Y2hlcyA9IHByb3RvLm1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ub01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIGNsb3Nlc3QgcGFyZW50IHRoYXQgbWF0Y2hlcyBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY2xvc2VzdCAoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB3aGlsZSAoZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVUeXBlICE9PSBET0NVTUVOVF9OT0RFX1RZUEUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Lm1hdGNoZXMgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgIGVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9zZXN0O1xuXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NsaXBib2FyZC9kaXN0L2NsaXBib2FyZC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiOyhmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvKipcblx0ICogQHByZXNlcnZlIEZhc3RDbGljazogcG9seWZpbGwgdG8gcmVtb3ZlIGNsaWNrIGRlbGF5cyBvbiBicm93c2VycyB3aXRoIHRvdWNoIFVJcy5cblx0ICpcblx0ICogQGNvZGluZ3N0YW5kYXJkIGZ0bGFicy1qc3YyXG5cdCAqIEBjb3B5cmlnaHQgVGhlIEZpbmFuY2lhbCBUaW1lcyBMaW1pdGVkIFtBbGwgUmlnaHRzIFJlc2VydmVkXVxuXHQgKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoc2VlIExJQ0VOU0UudHh0KVxuXHQgKi9cblxuXHQvKmpzbGludCBicm93c2VyOnRydWUsIG5vZGU6dHJ1ZSovXG5cdC8qZ2xvYmFsIGRlZmluZSwgRXZlbnQsIE5vZGUqL1xuXG5cblx0LyoqXG5cdCAqIEluc3RhbnRpYXRlIGZhc3QtY2xpY2tpbmcgbGlzdGVuZXJzIG9uIHRoZSBzcGVjaWZpZWQgbGF5ZXIuXG5cdCAqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGxheWVyIFRoZSBsYXllciB0byBsaXN0ZW4gb25cblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHNcblx0ICovXG5cdGZ1bmN0aW9uIEZhc3RDbGljayhsYXllciwgb3B0aW9ucykge1xuXHRcdHZhciBvbGRPbkNsaWNrO1xuXG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0XHQvKipcblx0XHQgKiBXaGV0aGVyIGEgY2xpY2sgaXMgY3VycmVudGx5IGJlaW5nIHRyYWNrZWQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBib29sZWFuXG5cdFx0ICovXG5cdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFRpbWVzdGFtcCBmb3Igd2hlbiBjbGljayB0cmFja2luZyBzdGFydGVkLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50cmFja2luZ0NsaWNrU3RhcnQgPSAwO1xuXG5cblx0XHQvKipcblx0XHQgKiBUaGUgZWxlbWVudCBiZWluZyB0cmFja2VkIGZvciBhIGNsaWNrLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgRXZlbnRUYXJnZXRcblx0XHQgKi9cblx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXG5cblx0XHQvKipcblx0XHQgKiBYLWNvb3JkaW5hdGUgb2YgdG91Y2ggc3RhcnQgZXZlbnQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRvdWNoU3RhcnRYID0gMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogWS1jb29yZGluYXRlIG9mIHRvdWNoIHN0YXJ0IGV2ZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50b3VjaFN0YXJ0WSA9IDA7XG5cblxuXHRcdC8qKlxuXHRcdCAqIElEIG9mIHRoZSBsYXN0IHRvdWNoLCByZXRyaWV2ZWQgZnJvbSBUb3VjaC5pZGVudGlmaWVyLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy5sYXN0VG91Y2hJZGVudGlmaWVyID0gMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogVG91Y2htb3ZlIGJvdW5kYXJ5LCBiZXlvbmQgd2hpY2ggYSBjbGljayB3aWxsIGJlIGNhbmNlbGxlZC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudG91Y2hCb3VuZGFyeSA9IG9wdGlvbnMudG91Y2hCb3VuZGFyeSB8fCAxMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogVGhlIEZhc3RDbGljayBsYXllci5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIEVsZW1lbnRcblx0XHQgKi9cblx0XHR0aGlzLmxheWVyID0gbGF5ZXI7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgbWluaW11bSB0aW1lIGJldHdlZW4gdGFwKHRvdWNoc3RhcnQgYW5kIHRvdWNoZW5kKSBldmVudHNcblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudGFwRGVsYXkgPSBvcHRpb25zLnRhcERlbGF5IHx8IDIwMDtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBtYXhpbXVtIHRpbWUgZm9yIGEgdGFwXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRhcFRpbWVvdXQgPSBvcHRpb25zLnRhcFRpbWVvdXQgfHwgNzAwO1xuXG5cdFx0aWYgKEZhc3RDbGljay5ub3ROZWVkZWQobGF5ZXIpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gU29tZSBvbGQgdmVyc2lvbnMgb2YgQW5kcm9pZCBkb24ndCBoYXZlIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG5cdFx0ZnVuY3Rpb24gYmluZChtZXRob2QsIGNvbnRleHQpIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ldGhvZC5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpOyB9O1xuXHRcdH1cblxuXG5cdFx0dmFyIG1ldGhvZHMgPSBbJ29uTW91c2UnLCAnb25DbGljaycsICdvblRvdWNoU3RhcnQnLCAnb25Ub3VjaE1vdmUnLCAnb25Ub3VjaEVuZCcsICdvblRvdWNoQ2FuY2VsJ107XG5cdFx0dmFyIGNvbnRleHQgPSB0aGlzO1xuXHRcdGZvciAodmFyIGkgPSAwLCBsID0gbWV0aG9kcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRcdGNvbnRleHRbbWV0aG9kc1tpXV0gPSBiaW5kKGNvbnRleHRbbWV0aG9kc1tpXV0sIGNvbnRleHQpO1xuXHRcdH1cblxuXHRcdC8vIFNldCB1cCBldmVudCBoYW5kbGVycyBhcyByZXF1aXJlZFxuXHRcdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0fVxuXG5cdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2ssIHRydWUpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIGZhbHNlKTtcblx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCwgZmFsc2UpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5vblRvdWNoQ2FuY2VsLCBmYWxzZSk7XG5cblx0XHQvLyBIYWNrIGlzIHJlcXVpcmVkIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgRXZlbnQjc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIChlLmcuIEFuZHJvaWQgMilcblx0XHQvLyB3aGljaCBpcyBob3cgRmFzdENsaWNrIG5vcm1hbGx5IHN0b3BzIGNsaWNrIGV2ZW50cyBidWJibGluZyB0byBjYWxsYmFja3MgcmVnaXN0ZXJlZCBvbiB0aGUgRmFzdENsaWNrXG5cdFx0Ly8gbGF5ZXIgd2hlbiB0aGV5IGFyZSBjYW5jZWxsZWQuXG5cdFx0aWYgKCFFdmVudC5wcm90b3R5cGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKSB7XG5cdFx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcblx0XHRcdFx0dmFyIHJtdiA9IE5vZGUucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7XG5cdFx0XHRcdGlmICh0eXBlID09PSAnY2xpY2snKSB7XG5cdFx0XHRcdFx0cm12LmNhbGwobGF5ZXIsIHR5cGUsIGNhbGxiYWNrLmhpamFja2VkIHx8IGNhbGxiYWNrLCBjYXB0dXJlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRybXYuY2FsbChsYXllciwgdHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcblx0XHRcdFx0dmFyIGFkdiA9IE5vZGUucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7XG5cdFx0XHRcdGlmICh0eXBlID09PSAnY2xpY2snKSB7XG5cdFx0XHRcdFx0YWR2LmNhbGwobGF5ZXIsIHR5cGUsIGNhbGxiYWNrLmhpamFja2VkIHx8IChjYWxsYmFjay5oaWphY2tlZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRpZiAoIWV2ZW50LnByb3BhZ2F0aW9uU3RvcHBlZCkge1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayhldmVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSksIGNhcHR1cmUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFkdi5jYWxsKGxheWVyLCB0eXBlLCBjYWxsYmFjaywgY2FwdHVyZSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gSWYgYSBoYW5kbGVyIGlzIGFscmVhZHkgZGVjbGFyZWQgaW4gdGhlIGVsZW1lbnQncyBvbmNsaWNrIGF0dHJpYnV0ZSwgaXQgd2lsbCBiZSBmaXJlZCBiZWZvcmVcblx0XHQvLyBGYXN0Q2xpY2sncyBvbkNsaWNrIGhhbmRsZXIuIEZpeCB0aGlzIGJ5IHB1bGxpbmcgb3V0IHRoZSB1c2VyLWRlZmluZWQgaGFuZGxlciBmdW5jdGlvbiBhbmRcblx0XHQvLyBhZGRpbmcgaXQgYXMgbGlzdGVuZXIuXG5cdFx0aWYgKHR5cGVvZiBsYXllci5vbmNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG5cblx0XHRcdC8vIEFuZHJvaWQgYnJvd3NlciBvbiBhdCBsZWFzdCAzLjIgcmVxdWlyZXMgYSBuZXcgcmVmZXJlbmNlIHRvIHRoZSBmdW5jdGlvbiBpbiBsYXllci5vbmNsaWNrXG5cdFx0XHQvLyAtIHRoZSBvbGQgb25lIHdvbid0IHdvcmsgaWYgcGFzc2VkIHRvIGFkZEV2ZW50TGlzdGVuZXIgZGlyZWN0bHkuXG5cdFx0XHRvbGRPbkNsaWNrID0gbGF5ZXIub25jbGljaztcblx0XHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0b2xkT25DbGljayhldmVudCk7XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHRsYXllci5vbmNsaWNrID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBXaW5kb3dzIFBob25lIDguMSBmYWtlcyB1c2VyIGFnZW50IHN0cmluZyB0byBsb29rIGxpa2UgQW5kcm9pZCBhbmQgaVBob25lLlxuXHQqXG5cdCogQHR5cGUgYm9vbGVhblxuXHQqL1xuXHR2YXIgZGV2aWNlSXNXaW5kb3dzUGhvbmUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJXaW5kb3dzIFBob25lXCIpID49IDA7XG5cblx0LyoqXG5cdCAqIEFuZHJvaWQgcmVxdWlyZXMgZXhjZXB0aW9ucy5cblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dmFyIGRldmljZUlzQW5kcm9pZCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQW5kcm9pZCcpID4gMCAmJiAhZGV2aWNlSXNXaW5kb3dzUGhvbmU7XG5cblxuXHQvKipcblx0ICogaU9TIHJlcXVpcmVzIGV4Y2VwdGlvbnMuXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0lPUyA9IC9pUChhZHxob25lfG9kKS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhZGV2aWNlSXNXaW5kb3dzUGhvbmU7XG5cblxuXHQvKipcblx0ICogaU9TIDQgcmVxdWlyZXMgYW4gZXhjZXB0aW9uIGZvciBzZWxlY3QgZWxlbWVudHMuXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0lPUzQgPSBkZXZpY2VJc0lPUyAmJiAoL09TIDRfXFxkKF9cXGQpPy8pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cblxuXHQvKipcblx0ICogaU9TIDYuMC03LiogcmVxdWlyZXMgdGhlIHRhcmdldCBlbGVtZW50IHRvIGJlIG1hbnVhbGx5IGRlcml2ZWRcblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dmFyIGRldmljZUlzSU9TV2l0aEJhZFRhcmdldCA9IGRldmljZUlzSU9TICYmICgvT1MgWzYtN11fXFxkLykudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuXHQvKipcblx0ICogQmxhY2tCZXJyeSByZXF1aXJlcyBleGNlcHRpb25zLlxuXHQgKlxuXHQgKiBAdHlwZSBib29sZWFuXG5cdCAqL1xuXHR2YXIgZGV2aWNlSXNCbGFja0JlcnJ5MTAgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0JCMTAnKSA+IDA7XG5cblx0LyoqXG5cdCAqIERldGVybWluZSB3aGV0aGVyIGEgZ2l2ZW4gZWxlbWVudCByZXF1aXJlcyBhIG5hdGl2ZSBjbGljay5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXQgVGFyZ2V0IERPTSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgbmVlZHMgYSBuYXRpdmUgY2xpY2tcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUubmVlZHNDbGljayA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHRcdHN3aXRjaCAodGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpIHtcblxuXHRcdC8vIERvbid0IHNlbmQgYSBzeW50aGV0aWMgY2xpY2sgdG8gZGlzYWJsZWQgaW5wdXRzIChpc3N1ZSAjNjIpXG5cdFx0Y2FzZSAnYnV0dG9uJzpcblx0XHRjYXNlICdzZWxlY3QnOlxuXHRcdGNhc2UgJ3RleHRhcmVhJzpcblx0XHRcdGlmICh0YXJnZXQuZGlzYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2lucHV0JzpcblxuXHRcdFx0Ly8gRmlsZSBpbnB1dHMgbmVlZCByZWFsIGNsaWNrcyBvbiBpT1MgNiBkdWUgdG8gYSBicm93c2VyIGJ1ZyAoaXNzdWUgIzY4KVxuXHRcdFx0aWYgKChkZXZpY2VJc0lPUyAmJiB0YXJnZXQudHlwZSA9PT0gJ2ZpbGUnKSB8fCB0YXJnZXQuZGlzYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2xhYmVsJzpcblx0XHRjYXNlICdpZnJhbWUnOiAvLyBpT1M4IGhvbWVzY3JlZW4gYXBwcyBjYW4gcHJldmVudCBldmVudHMgYnViYmxpbmcgaW50byBmcmFtZXNcblx0XHRjYXNlICd2aWRlbyc6XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKC9cXGJuZWVkc2NsaWNrXFxiLykudGVzdCh0YXJnZXQuY2xhc3NOYW1lKTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgd2hldGhlciBhIGdpdmVuIGVsZW1lbnQgcmVxdWlyZXMgYSBjYWxsIHRvIGZvY3VzIHRvIHNpbXVsYXRlIGNsaWNrIGludG8gZWxlbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXQgVGFyZ2V0IERPTSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgcmVxdWlyZXMgYSBjYWxsIHRvIGZvY3VzIHRvIHNpbXVsYXRlIG5hdGl2ZSBjbGljay5cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUubmVlZHNGb2N1cyA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHRcdHN3aXRjaCAodGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRjYXNlICd0ZXh0YXJlYSc6XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRjYXNlICdzZWxlY3QnOlxuXHRcdFx0cmV0dXJuICFkZXZpY2VJc0FuZHJvaWQ7XG5cdFx0Y2FzZSAnaW5wdXQnOlxuXHRcdFx0c3dpdGNoICh0YXJnZXQudHlwZSkge1xuXHRcdFx0Y2FzZSAnYnV0dG9uJzpcblx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdGNhc2UgJ2ZpbGUnOlxuXHRcdFx0Y2FzZSAnaW1hZ2UnOlxuXHRcdFx0Y2FzZSAncmFkaW8nOlxuXHRcdFx0Y2FzZSAnc3VibWl0Jzpcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBObyBwb2ludCBpbiBhdHRlbXB0aW5nIHRvIGZvY3VzIGRpc2FibGVkIGlucHV0c1xuXHRcdFx0cmV0dXJuICF0YXJnZXQuZGlzYWJsZWQgJiYgIXRhcmdldC5yZWFkT25seTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuICgvXFxibmVlZHNmb2N1c1xcYi8pLnRlc3QodGFyZ2V0LmNsYXNzTmFtZSk7XG5cdFx0fVxuXHR9O1xuXG5cblx0LyoqXG5cdCAqIFNlbmQgYSBjbGljayBldmVudCB0byB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8RWxlbWVudH0gdGFyZ2V0RWxlbWVudFxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5zZW5kQ2xpY2sgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50LCBldmVudCkge1xuXHRcdHZhciBjbGlja0V2ZW50LCB0b3VjaDtcblxuXHRcdC8vIE9uIHNvbWUgQW5kcm9pZCBkZXZpY2VzIGFjdGl2ZUVsZW1lbnQgbmVlZHMgdG8gYmUgYmx1cnJlZCBvdGhlcndpc2UgdGhlIHN5bnRoZXRpYyBjbGljayB3aWxsIGhhdmUgbm8gZWZmZWN0ICgjMjQpXG5cdFx0aWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gdGFyZ2V0RWxlbWVudCkge1xuXHRcdFx0ZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG5cdFx0fVxuXG5cdFx0dG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcblxuXHRcdC8vIFN5bnRoZXNpc2UgYSBjbGljayBldmVudCwgd2l0aCBhbiBleHRyYSBhdHRyaWJ1dGUgc28gaXQgY2FuIGJlIHRyYWNrZWRcblx0XHRjbGlja0V2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJyk7XG5cdFx0Y2xpY2tFdmVudC5pbml0TW91c2VFdmVudCh0aGlzLmRldGVybWluZUV2ZW50VHlwZSh0YXJnZXRFbGVtZW50KSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAxLCB0b3VjaC5zY3JlZW5YLCB0b3VjaC5zY3JlZW5ZLCB0b3VjaC5jbGllbnRYLCB0b3VjaC5jbGllbnRZLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbCk7XG5cdFx0Y2xpY2tFdmVudC5mb3J3YXJkZWRUb3VjaEV2ZW50ID0gdHJ1ZTtcblx0XHR0YXJnZXRFbGVtZW50LmRpc3BhdGNoRXZlbnQoY2xpY2tFdmVudCk7XG5cdH07XG5cblx0RmFzdENsaWNrLnByb3RvdHlwZS5kZXRlcm1pbmVFdmVudFR5cGUgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50KSB7XG5cblx0XHQvL0lzc3VlICMxNTk6IEFuZHJvaWQgQ2hyb21lIFNlbGVjdCBCb3ggZG9lcyBub3Qgb3BlbiB3aXRoIGEgc3ludGhldGljIGNsaWNrIGV2ZW50XG5cdFx0aWYgKGRldmljZUlzQW5kcm9pZCAmJiB0YXJnZXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlbGVjdCcpIHtcblx0XHRcdHJldHVybiAnbW91c2Vkb3duJztcblx0XHR9XG5cblx0XHRyZXR1cm4gJ2NsaWNrJztcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldEVsZW1lbnRcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZm9jdXMgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50KSB7XG5cdFx0dmFyIGxlbmd0aDtcblxuXHRcdC8vIElzc3VlICMxNjA6IG9uIGlPUyA3LCBzb21lIGlucHV0IGVsZW1lbnRzIChlLmcuIGRhdGUgZGF0ZXRpbWUgbW9udGgpIHRocm93IGEgdmFndWUgVHlwZUVycm9yIG9uIHNldFNlbGVjdGlvblJhbmdlLiBUaGVzZSBlbGVtZW50cyBkb24ndCBoYXZlIGFuIGludGVnZXIgdmFsdWUgZm9yIHRoZSBzZWxlY3Rpb25TdGFydCBhbmQgc2VsZWN0aW9uRW5kIHByb3BlcnRpZXMsIGJ1dCB1bmZvcnR1bmF0ZWx5IHRoYXQgY2FuJ3QgYmUgdXNlZCBmb3IgZGV0ZWN0aW9uIGJlY2F1c2UgYWNjZXNzaW5nIHRoZSBwcm9wZXJ0aWVzIGFsc28gdGhyb3dzIGEgVHlwZUVycm9yLiBKdXN0IGNoZWNrIHRoZSB0eXBlIGluc3RlYWQuIEZpbGVkIGFzIEFwcGxlIGJ1ZyAjMTUxMjI3MjQuXG5cdFx0aWYgKGRldmljZUlzSU9TICYmIHRhcmdldEVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UgJiYgdGFyZ2V0RWxlbWVudC50eXBlLmluZGV4T2YoJ2RhdGUnKSAhPT0gMCAmJiB0YXJnZXRFbGVtZW50LnR5cGUgIT09ICd0aW1lJyAmJiB0YXJnZXRFbGVtZW50LnR5cGUgIT09ICdtb250aCcpIHtcblx0XHRcdGxlbmd0aCA9IHRhcmdldEVsZW1lbnQudmFsdWUubGVuZ3RoO1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShsZW5ndGgsIGxlbmd0aCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldEVsZW1lbnQuZm9jdXMoKTtcblx0XHR9XG5cdH07XG5cblxuXHQvKipcblx0ICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdGFyZ2V0IGVsZW1lbnQgaXMgYSBjaGlsZCBvZiBhIHNjcm9sbGFibGUgbGF5ZXIgYW5kIGlmIHNvLCBzZXQgYSBmbGFnIG9uIGl0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldEVsZW1lbnRcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUudXBkYXRlU2Nyb2xsUGFyZW50ID0gZnVuY3Rpb24odGFyZ2V0RWxlbWVudCkge1xuXHRcdHZhciBzY3JvbGxQYXJlbnQsIHBhcmVudEVsZW1lbnQ7XG5cblx0XHRzY3JvbGxQYXJlbnQgPSB0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudDtcblxuXHRcdC8vIEF0dGVtcHQgdG8gZGlzY292ZXIgd2hldGhlciB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgY29udGFpbmVkIHdpdGhpbiBhIHNjcm9sbGFibGUgbGF5ZXIuIFJlLWNoZWNrIGlmIHRoZVxuXHRcdC8vIHRhcmdldCBlbGVtZW50IHdhcyBtb3ZlZCB0byBhbm90aGVyIHBhcmVudC5cblx0XHRpZiAoIXNjcm9sbFBhcmVudCB8fCAhc2Nyb2xsUGFyZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpKSB7XG5cdFx0XHRwYXJlbnRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudDtcblx0XHRcdGRvIHtcblx0XHRcdFx0aWYgKHBhcmVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gcGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQpIHtcblx0XHRcdFx0XHRzY3JvbGxQYXJlbnQgPSBwYXJlbnRFbGVtZW50O1xuXHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50ID0gcGFyZW50RWxlbWVudDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHR9IHdoaWxlIChwYXJlbnRFbGVtZW50KTtcblx0XHR9XG5cblx0XHQvLyBBbHdheXMgdXBkYXRlIHRoZSBzY3JvbGwgdG9wIHRyYWNrZXIgaWYgcG9zc2libGUuXG5cdFx0aWYgKHNjcm9sbFBhcmVudCkge1xuXHRcdFx0c2Nyb2xsUGFyZW50LmZhc3RDbGlja0xhc3RTY3JvbGxUb3AgPSBzY3JvbGxQYXJlbnQuc2Nyb2xsVG9wO1xuXHRcdH1cblx0fTtcblxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSB0YXJnZXRFbGVtZW50XG5cdCAqIEByZXR1cm5zIHtFbGVtZW50fEV2ZW50VGFyZ2V0fVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5nZXRUYXJnZXRFbGVtZW50RnJvbUV2ZW50VGFyZ2V0ID0gZnVuY3Rpb24oZXZlbnRUYXJnZXQpIHtcblxuXHRcdC8vIE9uIHNvbWUgb2xkZXIgYnJvd3NlcnMgKG5vdGFibHkgU2FmYXJpIG9uIGlPUyA0LjEgLSBzZWUgaXNzdWUgIzU2KSB0aGUgZXZlbnQgdGFyZ2V0IG1heSBiZSBhIHRleHQgbm9kZS5cblx0XHRpZiAoZXZlbnRUYXJnZXQubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG5cdFx0XHRyZXR1cm4gZXZlbnRUYXJnZXQucGFyZW50Tm9kZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnRUYXJnZXQ7XG5cdH07XG5cblxuXHQvKipcblx0ICogT24gdG91Y2ggc3RhcnQsIHJlY29yZCB0aGUgcG9zaXRpb24gYW5kIHNjcm9sbCBvZmZzZXQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciB0YXJnZXRFbGVtZW50LCB0b3VjaCwgc2VsZWN0aW9uO1xuXG5cdFx0Ly8gSWdub3JlIG11bHRpcGxlIHRvdWNoZXMsIG90aGVyd2lzZSBwaW5jaC10by16b29tIGlzIHByZXZlbnRlZCBpZiBib3RoIGZpbmdlcnMgYXJlIG9uIHRoZSBGYXN0Q2xpY2sgZWxlbWVudCAoaXNzdWUgIzExMSkuXG5cdFx0aWYgKGV2ZW50LnRhcmdldFRvdWNoZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0dGFyZ2V0RWxlbWVudCA9IHRoaXMuZ2V0VGFyZ2V0RWxlbWVudEZyb21FdmVudFRhcmdldChldmVudC50YXJnZXQpO1xuXHRcdHRvdWNoID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXTtcblxuXHRcdGlmIChkZXZpY2VJc0lPUykge1xuXG5cdFx0XHQvLyBPbmx5IHRydXN0ZWQgZXZlbnRzIHdpbGwgZGVzZWxlY3QgdGV4dCBvbiBpT1MgKGlzc3VlICM0OSlcblx0XHRcdHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcblx0XHRcdGlmIChzZWxlY3Rpb24ucmFuZ2VDb3VudCAmJiAhc2VsZWN0aW9uLmlzQ29sbGFwc2VkKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWRldmljZUlzSU9TNCkge1xuXG5cdFx0XHRcdC8vIFdlaXJkIHRoaW5ncyBoYXBwZW4gb24gaU9TIHdoZW4gYW4gYWxlcnQgb3IgY29uZmlybSBkaWFsb2cgaXMgb3BlbmVkIGZyb20gYSBjbGljayBldmVudCBjYWxsYmFjayAoaXNzdWUgIzIzKTpcblx0XHRcdFx0Ly8gd2hlbiB0aGUgdXNlciBuZXh0IHRhcHMgYW55d2hlcmUgZWxzZSBvbiB0aGUgcGFnZSwgbmV3IHRvdWNoc3RhcnQgYW5kIHRvdWNoZW5kIGV2ZW50cyBhcmUgZGlzcGF0Y2hlZFxuXHRcdFx0XHQvLyB3aXRoIHRoZSBzYW1lIGlkZW50aWZpZXIgYXMgdGhlIHRvdWNoIGV2ZW50IHRoYXQgcHJldmlvdXNseSB0cmlnZ2VyZWQgdGhlIGNsaWNrIHRoYXQgdHJpZ2dlcmVkIHRoZSBhbGVydC5cblx0XHRcdFx0Ly8gU2FkbHksIHRoZXJlIGlzIGFuIGlzc3VlIG9uIGlPUyA0IHRoYXQgY2F1c2VzIHNvbWUgbm9ybWFsIHRvdWNoIGV2ZW50cyB0byBoYXZlIHRoZSBzYW1lIGlkZW50aWZpZXIgYXMgYW5cblx0XHRcdFx0Ly8gaW1tZWRpYXRlbHkgcHJlY2VlZGluZyB0b3VjaCBldmVudCAoaXNzdWUgIzUyKSwgc28gdGhpcyBmaXggaXMgdW5hdmFpbGFibGUgb24gdGhhdCBwbGF0Zm9ybS5cblx0XHRcdFx0Ly8gSXNzdWUgMTIwOiB0b3VjaC5pZGVudGlmaWVyIGlzIDAgd2hlbiBDaHJvbWUgZGV2IHRvb2xzICdFbXVsYXRlIHRvdWNoIGV2ZW50cycgaXMgc2V0IHdpdGggYW4gaU9TIGRldmljZSBVQSBzdHJpbmcsXG5cdFx0XHRcdC8vIHdoaWNoIGNhdXNlcyBhbGwgdG91Y2ggZXZlbnRzIHRvIGJlIGlnbm9yZWQuIEFzIHRoaXMgYmxvY2sgb25seSBhcHBsaWVzIHRvIGlPUywgYW5kIGlPUyBpZGVudGlmaWVycyBhcmUgYWx3YXlzIGxvbmcsXG5cdFx0XHRcdC8vIHJhbmRvbSBpbnRlZ2VycywgaXQncyBzYWZlIHRvIHRvIGNvbnRpbnVlIGlmIHRoZSBpZGVudGlmaWVyIGlzIDAgaGVyZS5cblx0XHRcdFx0aWYgKHRvdWNoLmlkZW50aWZpZXIgJiYgdG91Y2guaWRlbnRpZmllciA9PT0gdGhpcy5sYXN0VG91Y2hJZGVudGlmaWVyKSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmxhc3RUb3VjaElkZW50aWZpZXIgPSB0b3VjaC5pZGVudGlmaWVyO1xuXG5cdFx0XHRcdC8vIElmIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIGEgc2Nyb2xsYWJsZSBsYXllciAodXNpbmcgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoKSBhbmQ6XG5cdFx0XHRcdC8vIDEpIHRoZSB1c2VyIGRvZXMgYSBmbGluZyBzY3JvbGwgb24gdGhlIHNjcm9sbGFibGUgbGF5ZXJcblx0XHRcdFx0Ly8gMikgdGhlIHVzZXIgc3RvcHMgdGhlIGZsaW5nIHNjcm9sbCB3aXRoIGFub3RoZXIgdGFwXG5cdFx0XHRcdC8vIHRoZW4gdGhlIGV2ZW50LnRhcmdldCBvZiB0aGUgbGFzdCAndG91Y2hlbmQnIGV2ZW50IHdpbGwgYmUgdGhlIGVsZW1lbnQgdGhhdCB3YXMgdW5kZXIgdGhlIHVzZXIncyBmaW5nZXJcblx0XHRcdFx0Ly8gd2hlbiB0aGUgZmxpbmcgc2Nyb2xsIHdhcyBzdGFydGVkLCBjYXVzaW5nIEZhc3RDbGljayB0byBzZW5kIGEgY2xpY2sgZXZlbnQgdG8gdGhhdCBsYXllciAtIHVubGVzcyBhIGNoZWNrXG5cdFx0XHRcdC8vIGlzIG1hZGUgdG8gZW5zdXJlIHRoYXQgYSBwYXJlbnQgbGF5ZXIgd2FzIG5vdCBzY3JvbGxlZCBiZWZvcmUgc2VuZGluZyBhIHN5bnRoZXRpYyBjbGljayAoaXNzdWUgIzQyKS5cblx0XHRcdFx0dGhpcy51cGRhdGVTY3JvbGxQYXJlbnQodGFyZ2V0RWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy50cmFja2luZ0NsaWNrID0gdHJ1ZTtcblx0XHR0aGlzLnRyYWNraW5nQ2xpY2tTdGFydCA9IGV2ZW50LnRpbWVTdGFtcDtcblx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50O1xuXG5cdFx0dGhpcy50b3VjaFN0YXJ0WCA9IHRvdWNoLnBhZ2VYO1xuXHRcdHRoaXMudG91Y2hTdGFydFkgPSB0b3VjaC5wYWdlWTtcblxuXHRcdC8vIFByZXZlbnQgcGhhbnRvbSBjbGlja3Mgb24gZmFzdCBkb3VibGUtdGFwIChpc3N1ZSAjMzYpXG5cdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0aGlzLmxhc3RDbGlja1RpbWUpIDwgdGhpcy50YXBEZWxheSkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBCYXNlZCBvbiBhIHRvdWNobW92ZSBldmVudCBvYmplY3QsIGNoZWNrIHdoZXRoZXIgdGhlIHRvdWNoIGhhcyBtb3ZlZCBwYXN0IGEgYm91bmRhcnkgc2luY2UgaXQgc3RhcnRlZC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLnRvdWNoSGFzTW92ZWQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLCBib3VuZGFyeSA9IHRoaXMudG91Y2hCb3VuZGFyeTtcblxuXHRcdGlmIChNYXRoLmFicyh0b3VjaC5wYWdlWCAtIHRoaXMudG91Y2hTdGFydFgpID4gYm91bmRhcnkgfHwgTWF0aC5hYnModG91Y2gucGFnZVkgLSB0aGlzLnRvdWNoU3RhcnRZKSA+IGJvdW5kYXJ5KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblxuXHQvKipcblx0ICogVXBkYXRlIHRoZSBsYXN0IHBvc2l0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaE1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdGlmICghdGhpcy50cmFja2luZ0NsaWNrKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgdG91Y2ggaGFzIG1vdmVkLCBjYW5jZWwgdGhlIGNsaWNrIHRyYWNraW5nXG5cdFx0aWYgKHRoaXMudGFyZ2V0RWxlbWVudCAhPT0gdGhpcy5nZXRUYXJnZXRFbGVtZW50RnJvbUV2ZW50VGFyZ2V0KGV2ZW50LnRhcmdldCkgfHwgdGhpcy50b3VjaEhhc01vdmVkKGV2ZW50KSkge1xuXHRcdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIEF0dGVtcHQgdG8gZmluZCB0aGUgbGFiZWxsZWQgY29udHJvbCBmb3IgdGhlIGdpdmVuIGxhYmVsIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8SFRNTExhYmVsRWxlbWVudH0gbGFiZWxFbGVtZW50XG5cdCAqIEByZXR1cm5zIHtFbGVtZW50fG51bGx9XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLmZpbmRDb250cm9sID0gZnVuY3Rpb24obGFiZWxFbGVtZW50KSB7XG5cblx0XHQvLyBGYXN0IHBhdGggZm9yIG5ld2VyIGJyb3dzZXJzIHN1cHBvcnRpbmcgdGhlIEhUTUw1IGNvbnRyb2wgYXR0cmlidXRlXG5cdFx0aWYgKGxhYmVsRWxlbWVudC5jb250cm9sICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBsYWJlbEVsZW1lbnQuY29udHJvbDtcblx0XHR9XG5cblx0XHQvLyBBbGwgYnJvd3NlcnMgdW5kZXIgdGVzdCB0aGF0IHN1cHBvcnQgdG91Y2ggZXZlbnRzIGFsc28gc3VwcG9ydCB0aGUgSFRNTDUgaHRtbEZvciBhdHRyaWJ1dGVcblx0XHRpZiAobGFiZWxFbGVtZW50Lmh0bWxGb3IpIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYWJlbEVsZW1lbnQuaHRtbEZvcik7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgbm8gZm9yIGF0dHJpYnV0ZSBleGlzdHMsIGF0dGVtcHQgdG8gcmV0cmlldmUgdGhlIGZpcnN0IGxhYmVsbGFibGUgZGVzY2VuZGFudCBlbGVtZW50XG5cdFx0Ly8gdGhlIGxpc3Qgb2Ygd2hpY2ggaXMgZGVmaW5lZCBoZXJlOiBodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNS9mb3Jtcy5odG1sI2NhdGVnb3J5LWxhYmVsXG5cdFx0cmV0dXJuIGxhYmVsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24sIGlucHV0Om5vdChbdHlwZT1oaWRkZW5dKSwga2V5Z2VuLCBtZXRlciwgb3V0cHV0LCBwcm9ncmVzcywgc2VsZWN0LCB0ZXh0YXJlYScpO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIE9uIHRvdWNoIGVuZCwgZGV0ZXJtaW5lIHdoZXRoZXIgdG8gc2VuZCBhIGNsaWNrIGV2ZW50IGF0IG9uY2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgZm9yRWxlbWVudCwgdHJhY2tpbmdDbGlja1N0YXJ0LCB0YXJnZXRUYWdOYW1lLCBzY3JvbGxQYXJlbnQsIHRvdWNoLCB0YXJnZXRFbGVtZW50ID0gdGhpcy50YXJnZXRFbGVtZW50O1xuXG5cdFx0aWYgKCF0aGlzLnRyYWNraW5nQ2xpY2spIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFByZXZlbnQgcGhhbnRvbSBjbGlja3Mgb24gZmFzdCBkb3VibGUtdGFwIChpc3N1ZSAjMzYpXG5cdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0aGlzLmxhc3RDbGlja1RpbWUpIDwgdGhpcy50YXBEZWxheSkge1xuXHRcdFx0dGhpcy5jYW5jZWxOZXh0Q2xpY2sgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0aGlzLnRyYWNraW5nQ2xpY2tTdGFydCkgPiB0aGlzLnRhcFRpbWVvdXQpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFJlc2V0IHRvIHByZXZlbnQgd3JvbmcgY2xpY2sgY2FuY2VsIG9uIGlucHV0IChpc3N1ZSAjMTU2KS5cblx0XHR0aGlzLmNhbmNlbE5leHRDbGljayA9IGZhbHNlO1xuXG5cdFx0dGhpcy5sYXN0Q2xpY2tUaW1lID0gZXZlbnQudGltZVN0YW1wO1xuXG5cdFx0dHJhY2tpbmdDbGlja1N0YXJ0ID0gdGhpcy50cmFja2luZ0NsaWNrU3RhcnQ7XG5cdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cdFx0dGhpcy50cmFja2luZ0NsaWNrU3RhcnQgPSAwO1xuXG5cdFx0Ly8gT24gc29tZSBpT1MgZGV2aWNlcywgdGhlIHRhcmdldEVsZW1lbnQgc3VwcGxpZWQgd2l0aCB0aGUgZXZlbnQgaXMgaW52YWxpZCBpZiB0aGUgbGF5ZXJcblx0XHQvLyBpcyBwZXJmb3JtaW5nIGEgdHJhbnNpdGlvbiBvciBzY3JvbGwsIGFuZCBoYXMgdG8gYmUgcmUtZGV0ZWN0ZWQgbWFudWFsbHkuIE5vdGUgdGhhdFxuXHRcdC8vIGZvciB0aGlzIHRvIGZ1bmN0aW9uIGNvcnJlY3RseSwgaXQgbXVzdCBiZSBjYWxsZWQgKmFmdGVyKiB0aGUgZXZlbnQgdGFyZ2V0IGlzIGNoZWNrZWQhXG5cdFx0Ly8gU2VlIGlzc3VlICM1NzsgYWxzbyBmaWxlZCBhcyByZGFyOi8vMTMwNDg1ODkgLlxuXHRcdGlmIChkZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQpIHtcblx0XHRcdHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG5cblx0XHRcdC8vIEluIGNlcnRhaW4gY2FzZXMgYXJndW1lbnRzIG9mIGVsZW1lbnRGcm9tUG9pbnQgY2FuIGJlIG5lZ2F0aXZlLCBzbyBwcmV2ZW50IHNldHRpbmcgdGFyZ2V0RWxlbWVudCB0byBudWxsXG5cdFx0XHR0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh0b3VjaC5wYWdlWCAtIHdpbmRvdy5wYWdlWE9mZnNldCwgdG91Y2gucGFnZVkgLSB3aW5kb3cucGFnZVlPZmZzZXQpIHx8IHRhcmdldEVsZW1lbnQ7XG5cdFx0XHR0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudCA9IHRoaXMudGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQ7XG5cdFx0fVxuXG5cdFx0dGFyZ2V0VGFnTmFtZSA9IHRhcmdldEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICh0YXJnZXRUYWdOYW1lID09PSAnbGFiZWwnKSB7XG5cdFx0XHRmb3JFbGVtZW50ID0gdGhpcy5maW5kQ29udHJvbCh0YXJnZXRFbGVtZW50KTtcblx0XHRcdGlmIChmb3JFbGVtZW50KSB7XG5cdFx0XHRcdHRoaXMuZm9jdXModGFyZ2V0RWxlbWVudCk7XG5cdFx0XHRcdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0YXJnZXRFbGVtZW50ID0gZm9yRWxlbWVudDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHRoaXMubmVlZHNGb2N1cyh0YXJnZXRFbGVtZW50KSkge1xuXG5cdFx0XHQvLyBDYXNlIDE6IElmIHRoZSB0b3VjaCBzdGFydGVkIGEgd2hpbGUgYWdvIChiZXN0IGd1ZXNzIGlzIDEwMG1zIGJhc2VkIG9uIHRlc3RzIGZvciBpc3N1ZSAjMzYpIHRoZW4gZm9jdXMgd2lsbCBiZSB0cmlnZ2VyZWQgYW55d2F5LiBSZXR1cm4gZWFybHkgYW5kIHVuc2V0IHRoZSB0YXJnZXQgZWxlbWVudCByZWZlcmVuY2Ugc28gdGhhdCB0aGUgc3Vic2VxdWVudCBjbGljayB3aWxsIGJlIGFsbG93ZWQgdGhyb3VnaC5cblx0XHRcdC8vIENhc2UgMjogV2l0aG91dCB0aGlzIGV4Y2VwdGlvbiBmb3IgaW5wdXQgZWxlbWVudHMgdGFwcGVkIHdoZW4gdGhlIGRvY3VtZW50IGlzIGNvbnRhaW5lZCBpbiBhbiBpZnJhbWUsIHRoZW4gYW55IGlucHV0dGVkIHRleHQgd29uJ3QgYmUgdmlzaWJsZSBldmVuIHRob3VnaCB0aGUgdmFsdWUgYXR0cmlidXRlIGlzIHVwZGF0ZWQgYXMgdGhlIHVzZXIgdHlwZXMgKGlzc3VlICMzNykuXG5cdFx0XHRpZiAoKGV2ZW50LnRpbWVTdGFtcCAtIHRyYWNraW5nQ2xpY2tTdGFydCkgPiAxMDAgfHwgKGRldmljZUlzSU9TICYmIHdpbmRvdy50b3AgIT09IHdpbmRvdyAmJiB0YXJnZXRUYWdOYW1lID09PSAnaW5wdXQnKSkge1xuXHRcdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZm9jdXModGFyZ2V0RWxlbWVudCk7XG5cdFx0XHR0aGlzLnNlbmRDbGljayh0YXJnZXRFbGVtZW50LCBldmVudCk7XG5cblx0XHRcdC8vIFNlbGVjdCBlbGVtZW50cyBuZWVkIHRoZSBldmVudCB0byBnbyB0aHJvdWdoIG9uIGlPUyA0LCBvdGhlcndpc2UgdGhlIHNlbGVjdG9yIG1lbnUgd29uJ3Qgb3Blbi5cblx0XHRcdC8vIEFsc28gdGhpcyBicmVha3Mgb3BlbmluZyBzZWxlY3RzIHdoZW4gVm9pY2VPdmVyIGlzIGFjdGl2ZSBvbiBpT1M2LCBpT1M3IChhbmQgcG9zc2libHkgb3RoZXJzKVxuXHRcdFx0aWYgKCFkZXZpY2VJc0lPUyB8fCB0YXJnZXRUYWdOYW1lICE9PSAnc2VsZWN0Jykge1xuXHRcdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKGRldmljZUlzSU9TICYmICFkZXZpY2VJc0lPUzQpIHtcblxuXHRcdFx0Ly8gRG9uJ3Qgc2VuZCBhIHN5bnRoZXRpYyBjbGljayBldmVudCBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgY29udGFpbmVkIHdpdGhpbiBhIHBhcmVudCBsYXllciB0aGF0IHdhcyBzY3JvbGxlZFxuXHRcdFx0Ly8gYW5kIHRoaXMgdGFwIGlzIGJlaW5nIHVzZWQgdG8gc3RvcCB0aGUgc2Nyb2xsaW5nICh1c3VhbGx5IGluaXRpYXRlZCBieSBhIGZsaW5nIC0gaXNzdWUgIzQyKS5cblx0XHRcdHNjcm9sbFBhcmVudCA9IHRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50O1xuXHRcdFx0aWYgKHNjcm9sbFBhcmVudCAmJiBzY3JvbGxQYXJlbnQuZmFzdENsaWNrTGFzdFNjcm9sbFRvcCAhPT0gc2Nyb2xsUGFyZW50LnNjcm9sbFRvcCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBQcmV2ZW50IHRoZSBhY3R1YWwgY2xpY2sgZnJvbSBnb2luZyB0aG91Z2ggLSB1bmxlc3MgdGhlIHRhcmdldCBub2RlIGlzIG1hcmtlZCBhcyByZXF1aXJpbmdcblx0XHQvLyByZWFsIGNsaWNrcyBvciBpZiBpdCBpcyBpbiB0aGUgd2hpdGVsaXN0IGluIHdoaWNoIGNhc2Ugb25seSBub24tcHJvZ3JhbW1hdGljIGNsaWNrcyBhcmUgcGVybWl0dGVkLlxuXHRcdGlmICghdGhpcy5uZWVkc0NsaWNrKHRhcmdldEVsZW1lbnQpKSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGhpcy5zZW5kQ2xpY2sodGFyZ2V0RWxlbWVudCwgZXZlbnQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBPbiB0b3VjaCBjYW5jZWwsIHN0b3AgdHJhY2tpbmcgdGhlIGNsaWNrLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaENhbmNlbCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdH07XG5cblxuXHQvKipcblx0ICogRGV0ZXJtaW5lIG1vdXNlIGV2ZW50cyB3aGljaCBzaG91bGQgYmUgcGVybWl0dGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Nb3VzZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cblx0XHQvLyBJZiBhIHRhcmdldCBlbGVtZW50IHdhcyBuZXZlciBzZXQgKGJlY2F1c2UgYSB0b3VjaCBldmVudCB3YXMgbmV2ZXIgZmlyZWQpIGFsbG93IHRoZSBldmVudFxuXHRcdGlmICghdGhpcy50YXJnZXRFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQuZm9yd2FyZGVkVG91Y2hFdmVudCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gUHJvZ3JhbW1hdGljYWxseSBnZW5lcmF0ZWQgZXZlbnRzIHRhcmdldGluZyBhIHNwZWNpZmljIGVsZW1lbnQgc2hvdWxkIGJlIHBlcm1pdHRlZFxuXHRcdGlmICghZXZlbnQuY2FuY2VsYWJsZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gRGVyaXZlIGFuZCBjaGVjayB0aGUgdGFyZ2V0IGVsZW1lbnQgdG8gc2VlIHdoZXRoZXIgdGhlIG1vdXNlIGV2ZW50IG5lZWRzIHRvIGJlIHBlcm1pdHRlZDtcblx0XHQvLyB1bmxlc3MgZXhwbGljaXRseSBlbmFibGVkLCBwcmV2ZW50IG5vbi10b3VjaCBjbGljayBldmVudHMgZnJvbSB0cmlnZ2VyaW5nIGFjdGlvbnMsXG5cdFx0Ly8gdG8gcHJldmVudCBnaG9zdC9kb3VibGVjbGlja3MuXG5cdFx0aWYgKCF0aGlzLm5lZWRzQ2xpY2sodGhpcy50YXJnZXRFbGVtZW50KSB8fCB0aGlzLmNhbmNlbE5leHRDbGljaykge1xuXG5cdFx0XHQvLyBQcmV2ZW50IGFueSB1c2VyLWFkZGVkIGxpc3RlbmVycyBkZWNsYXJlZCBvbiBGYXN0Q2xpY2sgZWxlbWVudCBmcm9tIGJlaW5nIGZpcmVkLlxuXHRcdFx0aWYgKGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikge1xuXHRcdFx0XHRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gUGFydCBvZiB0aGUgaGFjayBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IEV2ZW50I3N0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiAoZS5nLiBBbmRyb2lkIDIpXG5cdFx0XHRcdGV2ZW50LnByb3BhZ2F0aW9uU3RvcHBlZCA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENhbmNlbCB0aGUgZXZlbnRcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZSBtb3VzZSBldmVudCBpcyBwZXJtaXR0ZWQsIHJldHVybiB0cnVlIGZvciB0aGUgYWN0aW9uIHRvIGdvIHRocm91Z2guXG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblxuXHQvKipcblx0ICogT24gYWN0dWFsIGNsaWNrcywgZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhIHRvdWNoLWdlbmVyYXRlZCBjbGljaywgYSBjbGljayBhY3Rpb24gb2NjdXJyaW5nXG5cdCAqIG5hdHVyYWxseSBhZnRlciBhIGRlbGF5IGFmdGVyIGEgdG91Y2ggKHdoaWNoIG5lZWRzIHRvIGJlIGNhbmNlbGxlZCB0byBhdm9pZCBkdXBsaWNhdGlvbiksIG9yXG5cdCAqIGFuIGFjdHVhbCBjbGljayB3aGljaCBzaG91bGQgYmUgcGVybWl0dGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25DbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIHBlcm1pdHRlZDtcblxuXHRcdC8vIEl0J3MgcG9zc2libGUgZm9yIGFub3RoZXIgRmFzdENsaWNrLWxpa2UgbGlicmFyeSBkZWxpdmVyZWQgd2l0aCB0aGlyZC1wYXJ0eSBjb2RlIHRvIGZpcmUgYSBjbGljayBldmVudCBiZWZvcmUgRmFzdENsaWNrIGRvZXMgKGlzc3VlICM0NCkuIEluIHRoYXQgY2FzZSwgc2V0IHRoZSBjbGljay10cmFja2luZyBmbGFnIGJhY2sgdG8gZmFsc2UgYW5kIHJldHVybiBlYXJseS4gVGhpcyB3aWxsIGNhdXNlIG9uVG91Y2hFbmQgdG8gcmV0dXJuIGVhcmx5LlxuXHRcdGlmICh0aGlzLnRyYWNraW5nQ2xpY2spIHtcblx0XHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdFx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSBmYWxzZTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFZlcnkgb2RkIGJlaGF2aW91ciBvbiBpT1MgKGlzc3VlICMxOCk6IGlmIGEgc3VibWl0IGVsZW1lbnQgaXMgcHJlc2VudCBpbnNpZGUgYSBmb3JtIGFuZCB0aGUgdXNlciBoaXRzIGVudGVyIGluIHRoZSBpT1Mgc2ltdWxhdG9yIG9yIGNsaWNrcyB0aGUgR28gYnV0dG9uIG9uIHRoZSBwb3AtdXAgT1Mga2V5Ym9hcmQgdGhlIGEga2luZCBvZiAnZmFrZScgY2xpY2sgZXZlbnQgd2lsbCBiZSB0cmlnZ2VyZWQgd2l0aCB0aGUgc3VibWl0LXR5cGUgaW5wdXQgZWxlbWVudCBhcyB0aGUgdGFyZ2V0LlxuXHRcdGlmIChldmVudC50YXJnZXQudHlwZSA9PT0gJ3N1Ym1pdCcgJiYgZXZlbnQuZGV0YWlsID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRwZXJtaXR0ZWQgPSB0aGlzLm9uTW91c2UoZXZlbnQpO1xuXG5cdFx0Ly8gT25seSB1bnNldCB0YXJnZXRFbGVtZW50IGlmIHRoZSBjbGljayBpcyBub3QgcGVybWl0dGVkLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgdGhlIGNoZWNrIGZvciAhdGFyZ2V0RWxlbWVudCBpbiBvbk1vdXNlIGZhaWxzIGFuZCB0aGUgYnJvd3NlcidzIGNsaWNrIGRvZXNuJ3QgZ28gdGhyb3VnaC5cblx0XHRpZiAoIXBlcm1pdHRlZCkge1xuXHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHR9XG5cblx0XHQvLyBJZiBjbGlja3MgYXJlIHBlcm1pdHRlZCwgcmV0dXJuIHRydWUgZm9yIHRoZSBhY3Rpb24gdG8gZ28gdGhyb3VnaC5cblx0XHRyZXR1cm4gcGVybWl0dGVkO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIFJlbW92ZSBhbGwgRmFzdENsaWNrJ3MgZXZlbnQgbGlzdGVuZXJzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBsYXllciA9IHRoaXMubGF5ZXI7XG5cblx0XHRpZiAoZGV2aWNlSXNBbmRyb2lkKSB7XG5cdFx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlLCB0cnVlKTtcblx0XHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdH1cblxuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLCB0cnVlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIGZhbHNlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLCBmYWxzZSk7XG5cdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQsIGZhbHNlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMub25Ub3VjaENhbmNlbCwgZmFsc2UpO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIENoZWNrIHdoZXRoZXIgRmFzdENsaWNrIGlzIG5lZWRlZC5cblx0ICpcblx0ICogQHBhcmFtIHtFbGVtZW50fSBsYXllciBUaGUgbGF5ZXIgdG8gbGlzdGVuIG9uXG5cdCAqL1xuXHRGYXN0Q2xpY2subm90TmVlZGVkID0gZnVuY3Rpb24obGF5ZXIpIHtcblx0XHR2YXIgbWV0YVZpZXdwb3J0O1xuXHRcdHZhciBjaHJvbWVWZXJzaW9uO1xuXHRcdHZhciBibGFja2JlcnJ5VmVyc2lvbjtcblx0XHR2YXIgZmlyZWZveFZlcnNpb247XG5cblx0XHQvLyBEZXZpY2VzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0b3VjaCBkb24ndCBuZWVkIEZhc3RDbGlja1xuXHRcdGlmICh0eXBlb2Ygd2luZG93Lm9udG91Y2hzdGFydCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIENocm9tZSB2ZXJzaW9uIC0gemVybyBmb3Igb3RoZXIgYnJvd3NlcnNcblx0XHRjaHJvbWVWZXJzaW9uID0gKygvQ2hyb21lXFwvKFswLTldKykvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgWywwXSlbMV07XG5cblx0XHRpZiAoY2hyb21lVmVyc2lvbikge1xuXG5cdFx0XHRpZiAoZGV2aWNlSXNBbmRyb2lkKSB7XG5cdFx0XHRcdG1ldGFWaWV3cG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT12aWV3cG9ydF0nKTtcblxuXHRcdFx0XHRpZiAobWV0YVZpZXdwb3J0KSB7XG5cdFx0XHRcdFx0Ly8gQ2hyb21lIG9uIEFuZHJvaWQgd2l0aCB1c2VyLXNjYWxhYmxlPVwibm9cIiBkb2Vzbid0IG5lZWQgRmFzdENsaWNrIChpc3N1ZSAjODkpXG5cdFx0XHRcdFx0aWYgKG1ldGFWaWV3cG9ydC5jb250ZW50LmluZGV4T2YoJ3VzZXItc2NhbGFibGU9bm8nKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBDaHJvbWUgMzIgYW5kIGFib3ZlIHdpdGggd2lkdGg9ZGV2aWNlLXdpZHRoIG9yIGxlc3MgZG9uJ3QgbmVlZCBGYXN0Q2xpY2tcblx0XHRcdFx0XHRpZiAoY2hyb21lVmVyc2lvbiA+IDMxICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCA8PSB3aW5kb3cub3V0ZXJXaWR0aCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdC8vIENocm9tZSBkZXNrdG9wIGRvZXNuJ3QgbmVlZCBGYXN0Q2xpY2sgKGlzc3VlICMxNSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChkZXZpY2VJc0JsYWNrQmVycnkxMCkge1xuXHRcdFx0YmxhY2tiZXJyeVZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9WZXJzaW9uXFwvKFswLTldKilcXC4oWzAtOV0qKS8pO1xuXG5cdFx0XHQvLyBCbGFja0JlcnJ5IDEwLjMrIGRvZXMgbm90IHJlcXVpcmUgRmFzdGNsaWNrIGxpYnJhcnkuXG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vZnRsYWJzL2Zhc3RjbGljay9pc3N1ZXMvMjUxXG5cdFx0XHRpZiAoYmxhY2tiZXJyeVZlcnNpb25bMV0gPj0gMTAgJiYgYmxhY2tiZXJyeVZlcnNpb25bMl0gPj0gMykge1xuXHRcdFx0XHRtZXRhVmlld3BvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9dmlld3BvcnRdJyk7XG5cblx0XHRcdFx0aWYgKG1ldGFWaWV3cG9ydCkge1xuXHRcdFx0XHRcdC8vIHVzZXItc2NhbGFibGU9bm8gZWxpbWluYXRlcyBjbGljayBkZWxheS5cblx0XHRcdFx0XHRpZiAobWV0YVZpZXdwb3J0LmNvbnRlbnQuaW5kZXhPZigndXNlci1zY2FsYWJsZT1ubycpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIHdpZHRoPWRldmljZS13aWR0aCAob3IgbGVzcyB0aGFuIGRldmljZS13aWR0aCkgZWxpbWluYXRlcyBjbGljayBkZWxheS5cblx0XHRcdFx0XHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoIDw9IHdpbmRvdy5vdXRlcldpZHRoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJRTEwIHdpdGggLW1zLXRvdWNoLWFjdGlvbjogbm9uZSBvciBtYW5pcHVsYXRpb24sIHdoaWNoIGRpc2FibGVzIGRvdWJsZS10YXAtdG8tem9vbSAoaXNzdWUgIzk3KVxuXHRcdGlmIChsYXllci5zdHlsZS5tc1RvdWNoQWN0aW9uID09PSAnbm9uZScgfHwgbGF5ZXIuc3R5bGUudG91Y2hBY3Rpb24gPT09ICdtYW5pcHVsYXRpb24nKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBGaXJlZm94IHZlcnNpb24gLSB6ZXJvIGZvciBvdGhlciBicm93c2Vyc1xuXHRcdGZpcmVmb3hWZXJzaW9uID0gKygvRmlyZWZveFxcLyhbMC05XSspLy5leGVjKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IFssMF0pWzFdO1xuXG5cdFx0aWYgKGZpcmVmb3hWZXJzaW9uID49IDI3KSB7XG5cdFx0XHQvLyBGaXJlZm94IDI3KyBkb2VzIG5vdCBoYXZlIHRhcCBkZWxheSBpZiB0aGUgY29udGVudCBpcyBub3Qgem9vbWFibGUgLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD05MjI4OTZcblxuXHRcdFx0bWV0YVZpZXdwb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXZpZXdwb3J0XScpO1xuXHRcdFx0aWYgKG1ldGFWaWV3cG9ydCAmJiAobWV0YVZpZXdwb3J0LmNvbnRlbnQuaW5kZXhPZigndXNlci1zY2FsYWJsZT1ubycpICE9PSAtMSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGggPD0gd2luZG93Lm91dGVyV2lkdGgpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElFMTE6IHByZWZpeGVkIC1tcy10b3VjaC1hY3Rpb24gaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCBhbmQgaXQncyByZWNvbWVuZGVkIHRvIHVzZSBub24tcHJlZml4ZWQgdmVyc2lvblxuXHRcdC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS93aW5kb3dzL2FwcHMvSGg3NjczMTMuYXNweFxuXHRcdGlmIChsYXllci5zdHlsZS50b3VjaEFjdGlvbiA9PT0gJ25vbmUnIHx8IGxheWVyLnN0eWxlLnRvdWNoQWN0aW9uID09PSAnbWFuaXB1bGF0aW9uJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIEZhY3RvcnkgbWV0aG9kIGZvciBjcmVhdGluZyBhIEZhc3RDbGljayBvYmplY3Rcblx0ICpcblx0ICogQHBhcmFtIHtFbGVtZW50fSBsYXllciBUaGUgbGF5ZXIgdG8gbGlzdGVuIG9uXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzXG5cdCAqL1xuXHRGYXN0Q2xpY2suYXR0YWNoID0gZnVuY3Rpb24obGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRyZXR1cm4gbmV3IEZhc3RDbGljayhsYXllciwgb3B0aW9ucyk7XG5cdH07XG5cblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBGYXN0Q2xpY2s7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IEZhc3RDbGljay5hdHRhY2g7XG5cdFx0bW9kdWxlLmV4cG9ydHMuRmFzdENsaWNrID0gRmFzdENsaWNrO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5GYXN0Q2xpY2sgPSBGYXN0Q2xpY2s7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mYXN0Y2xpY2svbGliL2Zhc3RjbGljay5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgRXZlbnQgZnJvbSBcIi4vTWF0ZXJpYWwvRXZlbnRcIlxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9NYXRlcmlhbC9IZWFkZXJcIlxuaW1wb3J0IE5hdiBmcm9tIFwiLi9NYXRlcmlhbC9OYXZcIlxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9NYXRlcmlhbC9TZWFyY2hcIlxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vTWF0ZXJpYWwvU2lkZWJhclwiXG5pbXBvcnQgU291cmNlIGZyb20gXCIuL01hdGVyaWFsL1NvdXJjZVwiXG5pbXBvcnQgVGFicyBmcm9tIFwiLi9NYXRlcmlhbC9UYWJzXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogTW9kdWxlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgRXZlbnQsXG4gIEhlYWRlcixcbiAgTmF2LFxuICBTZWFyY2gsXG4gIFNpZGViYXIsXG4gIFNvdXJjZSxcbiAgVGFic1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTGlzdGVuZXIgZnJvbSBcIi4vRXZlbnQvTGlzdGVuZXJcIlxuaW1wb3J0IE1hdGNoTWVkaWEgZnJvbSBcIi4vRXZlbnQvTWF0Y2hNZWRpYVwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIE1vZHVsZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIExpc3RlbmVyLFxuICBNYXRjaE1lZGlhXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvRXZlbnQuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBMaXN0ZW5lciBmcm9tIFwiLi9MaXN0ZW5lclwiIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0Y2hNZWRpYSB7XG5cbiAgLyoqXG4gICAqIE1lZGlhIHF1ZXJ5IGxpc3RlbmVyXG4gICAqXG4gICAqIFRoaXMgY2xhc3MgbGlzdGVucyBmb3Igc3RhdGUgY2hhbmdlcyBvZiBtZWRpYSBxdWVyaWVzIGFuZCBhdXRvbWF0aWNhbGx5XG4gICAqIHN3aXRjaGVzIHRoZSBnaXZlbiBsaXN0ZW5lcnMgb24gb3Igb2ZmLlxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gaGFuZGxlcl8gLSBNZWRpYSBxdWVyeSBldmVudCBoYW5kbGVyXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSAtIE1lZGlhIHF1ZXJ5IHRvIHRlc3QgZm9yXG4gICAqIEBwYXJhbSB7TGlzdGVuZXJ9IGxpc3RlbmVyIC0gRXZlbnQgbGlzdGVuZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKHF1ZXJ5LCBsaXN0ZW5lcikge1xuICAgIHRoaXMuaGFuZGxlcl8gPSBtcSA9PiB7XG4gICAgICBpZiAobXEubWF0Y2hlcylcbiAgICAgICAgbGlzdGVuZXIubGlzdGVuKClcbiAgICAgIGVsc2VcbiAgICAgICAgbGlzdGVuZXIudW5saXN0ZW4oKVxuICAgIH1cblxuICAgIC8qIEluaXRpYWxpemUgbWVkaWEgcXVlcnkgbGlzdGVuZXIgKi9cbiAgICBjb25zdCBtZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KVxuICAgIG1lZGlhLmFkZExpc3RlbmVyKHRoaXMuaGFuZGxlcl8pXG5cbiAgICAvKiBBbHdheXMgY2hlY2sgYXQgaW5pdGlhbGl6YXRpb24gKi9cbiAgICB0aGlzLmhhbmRsZXJfKG1lZGlhKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvRXZlbnQvTWF0Y2hNZWRpYS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IFNoYWRvdyBmcm9tIFwiLi9IZWFkZXIvU2hhZG93XCJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9IZWFkZXIvVGl0bGVcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBNb2R1bGVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBTaGFkb3csXG4gIFRpdGxlXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvSGVhZGVyLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFkb3cge1xuXG4gIC8qKlxuICAgKiBTaG93IG9yIGhpZGUgaGVhZGVyIHNoYWRvdyBkZXBlbmRpbmcgb24gcGFnZSB5LW9mZnNldFxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gQ29udGVudCBjb250YWluZXJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gaGVhZGVyXyAtIEhlYWRlclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gaGVpZ2h0XyAtIE9mZnNldCBoZWlnaHQgb2YgcHJldmlvdXMgbm9kZXNcbiAgICogQHByb3BlcnR5IHtib29sZWFufSBhY3RpdmVfIC0gSGVhZGVyIHNoYWRvdyBzdGF0ZVxuICAgKlxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBoZWFkZXIgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsLCBoZWFkZXIpIHtcbiAgICBsZXQgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcbiAgICAgIDogZWxcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHxcbiAgICAgICAgIShyZWYucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgIHRoaXMuZWxfID0gcmVmLnBhcmVudE5vZGVcblxuICAgIC8qIFJldHJpZXZlIGhlYWRlciAqL1xuICAgIHJlZiA9ICh0eXBlb2YgaGVhZGVyID09PSBcInN0cmluZ1wiKVxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhlYWRlcilcbiAgICAgIDogaGVhZGVyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgdGhpcy5oZWFkZXJfID0gcmVmXG5cbiAgICAvKiBJbml0aWFsaXplIGhlaWdodCBhbmQgc3RhdGUgKi9cbiAgICB0aGlzLmhlaWdodF8gPSAwXG4gICAgdGhpcy5hY3RpdmVfID0gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgdG90YWwgaGVpZ2h0IG9mIHByZXZpb3VzIG5vZGVzXG4gICAqL1xuICBzZXR1cCgpIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuZWxfXG4gICAgd2hpbGUgKChjdXJyZW50ID0gY3VycmVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSkge1xuICAgICAgaWYgKCEoY3VycmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgICB0aGlzLmhlaWdodF8gKz0gY3VycmVudC5vZmZzZXRIZWlnaHRcbiAgICB9XG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzaGFkb3cgc3RhdGVcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXYgLSBFdmVudFxuICAgKi9cbiAgdXBkYXRlKGV2KSB7XG4gICAgaWYgKGV2ICYmIChldi50eXBlID09PSBcInJlc2l6ZVwiIHx8IGV2LnR5cGUgPT09IFwib3JpZW50YXRpb25jaGFuZ2VcIikpIHtcbiAgICAgIHRoaXMuaGVpZ2h0XyA9IDBcbiAgICAgIHRoaXMuc2V0dXAoKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhY3RpdmUgPSB3aW5kb3cucGFnZVlPZmZzZXQgPj0gdGhpcy5oZWlnaHRfXG4gICAgICBpZiAoYWN0aXZlICE9PSB0aGlzLmFjdGl2ZV8pXG4gICAgICAgIHRoaXMuaGVhZGVyXy5kYXRhc2V0Lm1kU3RhdGUgPSAodGhpcy5hY3RpdmVfID0gYWN0aXZlKSA/IFwic2hhZG93XCIgOiBcIlwiXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHNoYWRvdyBzdGF0ZVxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5oZWFkZXJfLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcbiAgICB0aGlzLmhlaWdodF8gPSAwXG4gICAgdGhpcy5hY3RpdmVfID0gZmFsc2VcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0hlYWRlci9TaGFkb3cuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpdGxlIHtcblxuICAvKipcbiAgICogU3dhcCBoZWFkZXIgdGl0bGUgdG9waWNzIHdoZW4gaGVhZGVyIGlzIHNjcm9sbGVkIHBhc3RcbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsXyAtIEVsZW1lbnRcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gaGVhZGVyXyAtIEhlYWRlclxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGFjdGl2ZV8gLSBUaXRsZSBzdGF0ZVxuICAgKlxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEhlYWRpbmdFbGVtZW50KX0gaGVhZGVyIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbCwgaGVhZGVyKSB7XG4gICAgbGV0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXG4gICAgICA6IGVsXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgdGhpcy5lbF8gPSByZWZcblxuICAgIC8qIFJldHJpZXZlIGhlYWRlciAqL1xuICAgIHJlZiA9ICh0eXBlb2YgaGVhZGVyID09PSBcInN0cmluZ1wiKVxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhlYWRlcilcbiAgICAgIDogaGVhZGVyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEhlYWRpbmdFbGVtZW50KSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgIHRoaXMuaGVhZGVyXyA9IHJlZlxuXG4gICAgLyogSW5pdGlhbGl6ZSBzdGF0ZSAqL1xuICAgIHRoaXMuYWN0aXZlXyA9IGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogU2V0dXAgdGl0bGUgc3RhdGVcbiAgICovXG4gIHNldHVwKCkge1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5lbF8uY2hpbGRyZW4sIG5vZGUgPT4geyAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB1c2UgY2hpbGROb2RlcyBoZXJlIGZvciBJRT9cbiAgICAgIG5vZGUuc3R5bGUud2lkdGggPSBgJHt0aGlzLmVsXy5vZmZzZXRXaWR0aCAtIDIwfXB4YFxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRpdGxlIHN0YXRlXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2IC0gRXZlbnRcbiAgICovXG4gIHVwZGF0ZShldikge1xuICAgIGNvbnN0IGFjdGl2ZSA9IHdpbmRvdy5wYWdlWU9mZnNldCA+PSB0aGlzLmhlYWRlcl8ub2Zmc2V0VG9wXG4gICAgaWYgKGFjdGl2ZSAhPT0gdGhpcy5hY3RpdmVfKVxuICAgICAgdGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID0gKHRoaXMuYWN0aXZlXyA9IGFjdGl2ZSkgPyBcImFjdGl2ZVwiIDogXCJcIlxuXG4gICAgLyogSGFjazogaW5kdWNlIGVsbGlwc2lzIG9uIHRvcGljcyAqL1xuICAgIGlmIChldi50eXBlID09PSBcInJlc2l6ZVwiIHx8IGV2LnR5cGUgPT09IFwib3JpZW50YXRpb25jaGFuZ2VcIikge1xuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLmVsXy5jaGlsZHJlbiwgbm9kZSA9PiB7XG4gICAgICAgIG5vZGUuc3R5bGUud2lkdGggPSBgJHt0aGlzLmVsXy5vZmZzZXRXaWR0aCAtIDIwfXB4YFxuICAgICAgfSlcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aXRsZSBzdGF0ZVxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID0gXCJcIlxuICAgIHRoaXMuZWxfLnN0eWxlLndpZHRoID0gXCJcIlxuICAgIHRoaXMuYWN0aXZlXyA9IGZhbHNlXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9IZWFkZXIvVGl0bGUuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBCbHVyIGZyb20gXCIuL05hdi9CbHVyXCJcbmltcG9ydCBDb2xsYXBzZSBmcm9tIFwiLi9OYXYvQ29sbGFwc2VcIlxuaW1wb3J0IFNjcm9sbGluZyBmcm9tIFwiLi9OYXYvU2Nyb2xsaW5nXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogTW9kdWxlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgQmx1cixcbiAgQ29sbGFwc2UsXG4gIFNjcm9sbGluZ1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmx1ciB7XG5cbiAgLyoqXG4gICAqIEJsdXIgbGlua3Mgd2l0aGluIHRoZSB0YWJsZSBvZiBjb250ZW50cyBhYm92ZSBjdXJyZW50IHBhZ2UgeS1vZmZzZXRcbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7Tm9kZUxpc3Q8SFRNTEVsZW1lbnQ+fSBlbHNfIC0gVGFibGUgb2YgY29udGVudHMgbGlua3NcbiAgICogQHByb3BlcnR5IHtBcnJheTxIVE1MRWxlbWVudD59IGFuY2hvcnNfIC0gUmVmZXJlbmNlZCBhbmNob3Igbm9kZXNcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IGluZGV4XyAtIEN1cnJlbnQgbGluayBpbmRleFxuICAgKiBAcHJvcGVydHkge251bWJlcn0gb2Zmc2V0XyAtIEN1cnJlbnQgcGFnZSB5LW9mZnNldFxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGRpcl8gLSBTY3JvbGwgZGlyZWN0aW9uIGNoYW5nZVxuICAgKlxuICAgKiBAcGFyYW0geyhzdHJpbmd8Tm9kZUxpc3Q8SFRNTEVsZW1lbnQ+KX0gZWxzIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50c1xuICAgKi9cbiAgY29uc3RydWN0b3IoZWxzKSB7XG4gICAgdGhpcy5lbHNfID0gKHR5cGVvZiBlbHMgPT09IFwic3RyaW5nXCIpXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxzKVxuICAgICAgOiBlbHNcblxuICAgIC8qIEluaXRpYWxpemUgaW5kZXggYW5kIHBhZ2UgeS1vZmZzZXQgKi9cbiAgICB0aGlzLmluZGV4XyA9IDBcbiAgICB0aGlzLm9mZnNldF8gPSB3aW5kb3cucGFnZVlPZmZzZXRcblxuICAgIC8qIE5lY2Vzc2FyeSBzdGF0ZSB0byBjb3JyZWN0bHkgcmVzZXQgdGhlIGluZGV4ICovXG4gICAgdGhpcy5kaXJfID0gZmFsc2VcblxuICAgIC8qIEluZGV4IGFuY2hvciBub2RlIG9mZnNldHMgZm9yIGZhc3QgbG9va3VwICovXG4gICAgdGhpcy5hbmNob3JzXyA9IFtdLnJlZHVjZS5jYWxsKHRoaXMuZWxzXywgKGFuY2hvcnMsIGVsKSA9PiB7XG4gICAgICByZXR1cm4gYW5jaG9ycy5jb25jYXQoXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsLmhhc2guc3Vic3RyaW5nKDEpKSB8fCBbXSlcbiAgICB9LCBbXSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGJsdXIgc3RhdGVzXG4gICAqL1xuICBzZXR1cCgpIHtcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGJsdXIgc3RhdGVzXG4gICAqXG4gICAqIERlZHVjdCB0aGUgc3RhdGljIG9mZnNldCBvZiB0aGUgaGVhZGVyICg1NnB4KSBhbmQgc2lkZWJhciBvZmZzZXQgKDI0cHgpLFxuICAgKiBzZWUgX3Blcm1hbGlua3Muc2NzcyBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICovXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBvZmZzZXQgPSB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICBjb25zdCBkaXIgPSB0aGlzLm9mZnNldF8gLSBvZmZzZXQgPCAwXG5cbiAgICAvKiBIYWNrOiByZXNldCBpbmRleCBpZiBkaXJlY3Rpb24gY2hhbmdlZCB0byBjYXRjaCB2ZXJ5IGZhc3Qgc2Nyb2xsaW5nLFxuICAgICAgIGJlY2F1c2Ugb3RoZXJ3aXNlIHdlIHdvdWxkIGhhdmUgdG8gcmVnaXN0ZXIgYSB0aW1lciBhbmQgdGhhdCBzdWNrcyAqL1xuICAgIGlmICh0aGlzLmRpcl8gIT09IGRpcilcbiAgICAgIHRoaXMuaW5kZXhfID0gZGlyXG4gICAgICAgID8gdGhpcy5pbmRleF8gPSAwXG4gICAgICAgIDogdGhpcy5pbmRleF8gPSB0aGlzLmVsc18ubGVuZ3RoIC0gMVxuXG4gICAgLyogRXhpdCB3aGVuIHRoZXJlIGFyZSBubyBhbmNob3JzICovXG4gICAgaWYgKHRoaXMuYW5jaG9yc18ubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuXG5cbiAgICAvKiBTY3JvbGwgZGlyZWN0aW9uIGlzIGRvd24gKi9cbiAgICBpZiAodGhpcy5vZmZzZXRfIDw9IG9mZnNldCkge1xuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaW5kZXhfICsgMTsgaSA8IHRoaXMuZWxzXy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5hbmNob3JzX1tpXS5vZmZzZXRUb3AgLSAoNTYgKyAyNCkgPD0gb2Zmc2V0KSB7XG4gICAgICAgICAgaWYgKGkgPiAwKVxuICAgICAgICAgICAgdGhpcy5lbHNfW2kgLSAxXS5kYXRhc2V0Lm1kU3RhdGUgPSBcImJsdXJcIlxuICAgICAgICAgIHRoaXMuaW5kZXhfID0gaVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIC8qIFNjcm9sbCBkaXJlY3Rpb24gaXMgdXAgKi9cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaW5kZXhfOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAodGhpcy5hbmNob3JzX1tpXS5vZmZzZXRUb3AgLSAoNTYgKyAyNCkgPiBvZmZzZXQpIHtcbiAgICAgICAgICBpZiAoaSA+IDApXG4gICAgICAgICAgICB0aGlzLmVsc19baSAtIDFdLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmluZGV4XyA9IGlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogUmVtZW1iZXIgY3VycmVudCBvZmZzZXQgYW5kIGRpcmVjdGlvbiBmb3IgbmV4dCBpdGVyYXRpb24gKi9cbiAgICB0aGlzLm9mZnNldF8gPSBvZmZzZXRcbiAgICB0aGlzLmRpcl8gPSBkaXJcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBibHVyIHN0YXRlc1xuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLmVsc18sIGVsID0+IHtcbiAgICAgIGVsLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcbiAgICB9KVxuXG4gICAgLyogUmVzZXQgaW5kZXggYW5kIHBhZ2UgeS1vZmZzZXQgKi9cbiAgICB0aGlzLmluZGV4XyAgPSAwXG4gICAgdGhpcy5vZmZzZXRfID0gd2luZG93LnBhZ2VZT2Zmc2V0XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYvQmx1ci5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGFwc2Uge1xuXG4gIC8qKlxuICAgKiBFeHBhbmQgb3IgY29sbGFwc2UgbmF2aWdhdGlvbiBvbiB0b2dnbGVcbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsXyAtIE5hdmlnYXRpb24gbGlzdFxuICAgKlxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxuICAgKi9cbiAgY29uc3RydWN0b3IoZWwpIHtcbiAgICBjb25zdCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxuICAgICAgOiBlbFxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgIHRoaXMuZWxfID0gcmVmXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBvdmVyZmxvdyBhbmQgZGlzcGxheSBmb3IgYWNjZXNzaWJpbGl0eVxuICAgKi9cbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuZWxfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuXG4gICAgLyogSGlkZGVuIGxpbmtzIHNob3VsZCBub3QgYmUgZm9jdXNhYmxlLCBzbyBoaWRlIHRoZW0gd2hlbiB0aGUgbmF2aWdhdGlvblxuICAgICAgIGlzIGNvbGxhcHNlZCBhbmQgc2V0IG92ZXJmbG93IHNvIHRoZSBvdXRsaW5lIGlzIG5vdCBjdXQgb2ZmICovXG4gICAgdGhpcy5lbF8uc3R5bGUuZGlzcGxheSAgPSBjdXJyZW50ID8gXCJibG9ja1wiICAgOiBcIm5vbmVcIlxuICAgIHRoaXMuZWxfLnN0eWxlLm92ZXJmbG93ID0gY3VycmVudCA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIlxuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGUgZXhwYW5kIGFuZCBjb2xsYXBzZSBzbW9vdGhseVxuICAgKlxuICAgKiBJbnRlcm5ldCBFeHBsb3JlciAxMSBpcyB2ZXJ5IHNsb3cgYXQgcmVjb2duaXppbmcgY2hhbmdlcyBvbiB0aGUgZGF0YXNldFxuICAgKiB3aGljaCByZXN1bHRzIGluIHRoZSBtZW51IG5vdCBleHBhbmRpbmcgb3IgY29sbGFwc2luZyBwcm9wZXJseS4gVEhlcmVmb3JlLFxuICAgKiBmb3IgcmVhc29ucyBvZiBjb21wYXRpYmlsaXR5LCB0aGUgYXR0cmlidXRlIGFjY2Vzc29ycyBhcmUgdXNlZC5cbiAgICovXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5lbF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG5cbiAgICAvKiBSZXNldCBvdmVyZmxvdyB0byBDU1MgZGVmYXVsdHMgKi9cbiAgICB0aGlzLmVsXy5zdHlsZS5kaXNwbGF5ICA9IFwiYmxvY2tcIlxuICAgIHRoaXMuZWxfLnN0eWxlLm92ZXJmbG93ID0gXCJcIlxuXG4gICAgLyogRXhwYW5kZWQsIHNvIGNvbGxhcHNlICovXG4gICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgIHRoaXMuZWxfLnN0eWxlLm1heEhlaWdodCA9IGAke2N1cnJlbnR9cHhgXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmVsXy5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1kLXN0YXRlXCIsIFwiYW5pbWF0ZVwiKVxuICAgICAgICB0aGlzLmVsXy5zdHlsZS5tYXhIZWlnaHQgPSBcIjBweFwiXG4gICAgICB9KVxuXG4gICAgLyogQ29sbGFwc2VkLCBzbyBleHBhbmQgKi9cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKFwiZGF0YS1tZC1zdGF0ZVwiLCBcImV4cGFuZFwiKVxuICAgICAgdGhpcy5lbF8uc3R5bGUubWF4SGVpZ2h0ID0gXCJcIlxuXG4gICAgICAvKiBSZWFkIGhlaWdodCBhbmQgdW5zZXQgcHNldWRvLXRvZ2dsZWQgc3RhdGUgKi9cbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZWxfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICAgICAgdGhpcy5lbF8ucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1tZC1zdGF0ZVwiKVxuXG4gICAgICAvKiBTZXQgaW5pdGlhbCBzdGF0ZSBhbmQgYW5pbWF0ZSAqL1xuICAgICAgdGhpcy5lbF8uc3R5bGUubWF4SGVpZ2h0ID0gXCIwcHhcIlxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKFwiZGF0YS1tZC1zdGF0ZVwiLCBcImFuaW1hdGVcIilcbiAgICAgICAgdGhpcy5lbF8uc3R5bGUubWF4SGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKiBSZW1vdmUgc3RhdGUgb24gZW5kIG9mIHRyYW5zaXRpb24gKi9cbiAgICBjb25zdCBlbmQgPSBldiA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXRcbiAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG5cbiAgICAgIC8qIFJlc2V0IGhlaWdodCBhbmQgc3RhdGUgKi9cbiAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLW1kLXN0YXRlXCIpXG4gICAgICB0YXJnZXQuc3R5bGUubWF4SGVpZ2h0ID0gXCJcIlxuXG4gICAgICAvKiBIaWRkZW4gbGlua3Mgc2hvdWxkIG5vdCBiZSBmb2N1c2FibGUsIHNvIGhpZGUgdGhlbSB3aGVuIHRoZSBuYXZpZ2F0aW9uXG4gICAgICAgICBpcyBjb2xsYXBzZWQgYW5kIHNldCBvdmVyZmxvdyBzbyB0aGUgb3V0bGluZSBpcyBub3QgY3V0IG9mZiAqL1xuICAgICAgdGFyZ2V0LnN0eWxlLmRpc3BsYXkgID0gY3VycmVudCA/IFwibm9uZVwiICAgOiBcImJsb2NrXCJcbiAgICAgIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9IGN1cnJlbnQgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCJcblxuICAgICAgLyogT25seSBmaXJlIG9uY2UsIHNvIGRpcmVjdGx5IHJlbW92ZSBldmVudCBsaXN0ZW5lciAqL1xuICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGVuZClcbiAgICB9XG4gICAgdGhpcy5lbF8uYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZW5kLCBmYWxzZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBoZWlnaHQgYW5kIHBzZXVkby10b2dnbGVkIHN0YXRlXG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXG4gICAgdGhpcy5lbF8uc3R5bGUubWF4SGVpZ2h0ID0gXCJcIlxuICAgIHRoaXMuZWxfLnN0eWxlLmRpc3BsYXkgICA9IFwiXCJcbiAgICB0aGlzLmVsXy5zdHlsZS5vdmVyZmxvdyAgPSBcIlwiXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYvQ29sbGFwc2UuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbGluZyB7XG5cbiAgLyoqXG4gICAqIFNldCBvdmVyZmxvdyBzY3JvbGxpbmcgb24gdGhlIGN1cnJlbnQgYWN0aXZlIHBhbmUgKGZvciBpT1MpXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBlbF8gLSBQcmltYXJ5IG5hdmlnYXRpb25cbiAgICpcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgY29uc3QgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcbiAgICAgIDogZWxcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICB0aGlzLmVsXyA9IHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFNldHVwIHBhbmVzXG4gICAqL1xuICBzZXR1cCgpIHtcblxuICAgIC8qIEluaXRpYWxseSBzZXQgb3ZlcmZsb3cgc2Nyb2xsaW5nIG9uIG1haW4gcGFuZSAqL1xuICAgIGNvbnN0IG1haW4gPSB0aGlzLmVsXy5jaGlsZHJlblt0aGlzLmVsXy5jaGlsZHJlbi5sZW5ndGggLSAxXVxuICAgIG1haW4uc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcInRvdWNoXCJcblxuICAgIC8qIEZpbmQgYWxsIHRvZ2dsZXMgYW5kIGNoZWNrIHdoaWNoIG9uZSBpcyBhY3RpdmUgKi9cbiAgICBjb25zdCB0b2dnbGVzID0gdGhpcy5lbF8ucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1kLXRvZ2dsZV1cIilcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRvZ2dsZXMsIHRvZ2dsZSA9PiB7XG4gICAgICBpZiAoISh0b2dnbGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcblxuICAgICAgICAvKiBGaW5kIGNvcnJlc3BvbmRpbmcgbmF2aWdhdGlvbmFsIHBhbmUgKi9cbiAgICAgICAgbGV0IHBhbmUgPSB0b2dnbGUubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgICAgIGlmICghKHBhbmUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgICAgIHdoaWxlIChwYW5lLnRhZ05hbWUgIT09IFwiTkFWXCIgJiYgcGFuZS5uZXh0RWxlbWVudFNpYmxpbmcpXG4gICAgICAgICAgcGFuZSA9IHBhbmUubmV4dEVsZW1lbnRTaWJsaW5nXG5cbiAgICAgICAgLyogQ2hlY2sgcmVmZXJlbmNlcyAqL1xuICAgICAgICBpZiAoISh0b2dnbGUucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fFxuICAgICAgICAgICAgISh0b2dnbGUucGFyZW50Tm9kZS5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuXG4gICAgICAgIC8qIEZpbmQgY3VycmVudCBhbmQgcGFyZW50IGxpc3QgZWxlbWVudHMgKi9cbiAgICAgICAgY29uc3QgcGFyZW50ID0gdG9nZ2xlLnBhcmVudE5vZGUucGFyZW50Tm9kZVxuICAgICAgICBjb25zdCB0YXJnZXQgPSBwYW5lLmNoaWxkcmVuW3BhbmUuY2hpbGRyZW4ubGVuZ3RoIC0gMV1cblxuICAgICAgICAvKiBBbHdheXMgcmVzZXQgYWxsIGxpc3RzIHdoZW4gdHJhbnNpdGlvbmluZyAqL1xuICAgICAgICBwYXJlbnQuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcIlwiXG4gICAgICAgIHRhcmdldC5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwidG91Y2hcIlxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGFjdGl2ZSBwYW5lc1xuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldiAtIENoYW5nZSBldmVudFxuICAgKi9cbiAgdXBkYXRlKGV2KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0XG4gICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG5cbiAgICAvKiBGaW5kIGNvcnJlc3BvbmRpbmcgbmF2aWdhdGlvbmFsIHBhbmUgKi9cbiAgICBsZXQgcGFuZSA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICBpZiAoIShwYW5lIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgd2hpbGUgKHBhbmUudGFnTmFtZSAhPT0gXCJOQVZcIiAmJiBwYW5lLm5leHRFbGVtZW50U2libGluZylcbiAgICAgIHBhbmUgPSBwYW5lLm5leHRFbGVtZW50U2libGluZ1xuXG4gICAgLyogQ2hlY2sgcmVmZXJlbmNlcyAqL1xuICAgIGlmICghKHRhcmdldC5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8XG4gICAgICAgICEodGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuXG4gICAgLyogRmluZCBwYXJlbnQgYW5kIGFjdGl2ZSBwYW5lcyAqL1xuICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGVcbiAgICBjb25zdCBhY3RpdmUgPSBwYW5lLmNoaWxkcmVuW3BhbmUuY2hpbGRyZW4ubGVuZ3RoIC0gMV1cblxuICAgIC8qIEFsd2F5cyByZXNldCBhbGwgbGlzdHMgd2hlbiB0cmFuc2l0aW9uaW5nICovXG4gICAgcGFyZW50LnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJcIlxuICAgIGFjdGl2ZS5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwiXCJcblxuICAgIC8qIFNldCBvdmVyZmxvdyBzY3JvbGxpbmcgb24gcGFyZW50IHBhbmUgKi9cbiAgICBpZiAoIXRhcmdldC5jaGVja2VkKSB7XG4gICAgICBjb25zdCBlbmQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChwYW5lIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICBwYXJlbnQuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcInRvdWNoXCJcbiAgICAgICAgICBwYW5lLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGVuZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcGFuZS5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBlbmQsIGZhbHNlKVxuICAgIH1cblxuICAgIC8qIFNldCBvdmVyZmxvdyBzY3JvbGxpbmcgb24gYWN0aXZlIHBhbmUgKi9cbiAgICBpZiAodGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIGNvbnN0IGVuZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHBhbmUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgIGFjdGl2ZS5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwidG91Y2hcIlxuICAgICAgICAgIHBhbmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZW5kKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwYW5lLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGVuZCwgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHBhbmVzXG4gICAqL1xuICByZXNldCgpIHtcblxuICAgIC8qIFJlc2V0IG92ZXJmbG93IHNjcm9sbGluZyBvbiBtYWluIHBhbmUgKi9cbiAgICB0aGlzLmVsXy5jaGlsZHJlblsxXS5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwiXCJcblxuICAgIC8qIEZpbmQgYWxsIHRvZ2dsZXMgYW5kIGNoZWNrIHdoaWNoIG9uZSBpcyBhY3RpdmUgKi9cbiAgICBjb25zdCB0b2dnbGVzID0gdGhpcy5lbF8ucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1kLXRvZ2dsZV1cIilcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRvZ2dsZXMsIHRvZ2dsZSA9PiB7XG4gICAgICBpZiAoISh0b2dnbGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcblxuICAgICAgICAvKiBGaW5kIGNvcnJlc3BvbmRpbmcgbmF2aWdhdGlvbmFsIHBhbmUgKi9cbiAgICAgICAgbGV0IHBhbmUgPSB0b2dnbGUubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgICAgIGlmICghKHBhbmUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgICAgIHdoaWxlIChwYW5lLnRhZ05hbWUgIT09IFwiTkFWXCIgJiYgcGFuZS5uZXh0RWxlbWVudFNpYmxpbmcpXG4gICAgICAgICAgcGFuZSA9IHBhbmUubmV4dEVsZW1lbnRTaWJsaW5nXG5cbiAgICAgICAgLyogQ2hlY2sgcmVmZXJlbmNlcyAqL1xuICAgICAgICBpZiAoISh0b2dnbGUucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fFxuICAgICAgICAgICAgISh0b2dnbGUucGFyZW50Tm9kZS5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuXG4gICAgICAgIC8qIEZpbmQgcGFyZW50IGFuZCBhY3RpdmUgcGFuZXMgKi9cbiAgICAgICAgY29uc3QgcGFyZW50ID0gdG9nZ2xlLnBhcmVudE5vZGUucGFyZW50Tm9kZVxuICAgICAgICBjb25zdCBhY3RpdmUgPSBwYW5lLmNoaWxkcmVuW3BhbmUuY2hpbGRyZW4ubGVuZ3RoIC0gMV1cblxuICAgICAgICAvKiBBbHdheXMgcmVzZXQgYWxsIGxpc3RzIHdoZW4gdHJhbnNpdGlvbmluZyAqL1xuICAgICAgICBwYXJlbnQuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcIlwiXG4gICAgICAgIGFjdGl2ZS5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwiXCJcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvTmF2L1Njcm9sbGluZy5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IExvY2sgZnJvbSBcIi4vU2VhcmNoL0xvY2tcIlxuaW1wb3J0IFJlc3VsdCBmcm9tIFwiLi9TZWFyY2gvUmVzdWx0XCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogTW9kdWxlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgTG9jayxcbiAgUmVzdWx0XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2VhcmNoLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NrIHtcblxuICAvKipcbiAgICogTG9jayBib2R5IGZvciBmdWxsLXNjcmVlbiBzZWFyY2ggbW9kYWxcbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7SFRNTElucHV0RWxlbWVudH0gZWxfIC0gTG9jayB0b2dnbGVcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gbG9ja18gLSBFbGVtZW50IHRvIGxvY2sgKGRvY3VtZW50IGJvZHkpXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBvZmZzZXRfIC0gQ3VycmVudCBwYWdlIHktb2Zmc2V0XG4gICAqXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbCkge1xuICAgIGNvbnN0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXG4gICAgICA6IGVsXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICB0aGlzLmVsXyA9IHJlZlxuXG4gICAgLyogUmV0cmlldmUgZWxlbWVudCB0byBsb2NrICg9IGJvZHkpICovXG4gICAgaWYgKCFkb2N1bWVudC5ib2R5KVxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgdGhpcy5sb2NrXyA9IGRvY3VtZW50LmJvZHlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCBsb2NrZWQgc3RhdGVcbiAgICovXG4gIHNldHVwKCkge1xuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgbG9ja2VkIHN0YXRlXG4gICAqL1xuICB1cGRhdGUoKSB7XG5cbiAgICAvKiBFbnRlcmluZyBzZWFyY2ggbW9kZSAqL1xuICAgIGlmICh0aGlzLmVsXy5jaGVja2VkKSB7XG4gICAgICB0aGlzLm9mZnNldF8gPSB3aW5kb3cucGFnZVlPZmZzZXRcblxuICAgICAgLyogU2Nyb2xsIHRvIHRvcCBhZnRlciB0cmFuc2l0aW9uLCB0byBvbWl0IGZsaWNrZXJpbmcgKi9cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcblxuICAgICAgICAvKiBMb2NrIGJvZHkgYWZ0ZXIgZmluaXNoaW5nIHRyYW5zaXRpb24gKi9cbiAgICAgICAgaWYgKHRoaXMuZWxfLmNoZWNrZWQpIHtcbiAgICAgICAgICB0aGlzLmxvY2tfLmRhdGFzZXQubWRTdGF0ZSA9IFwibG9ja1wiXG4gICAgICAgIH1cbiAgICAgIH0sIDQwMClcblxuICAgIC8qIEV4aXRpbmcgc2VhcmNoIG1vZGUgKi9cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2NrXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXG5cbiAgICAgIC8qIFNjcm9sbCB0byBmb3JtZXIgcG9zaXRpb24sIGJ1dCB3YWl0IGZvciAxMDBtcyB0byBwcmV2ZW50IGZsYXNoZXMgb25cbiAgICAgICAgIGlPUy4gQSBzaG9ydCB0aW1lb3V0IHNlZW1zIHRvIGRvIHRoZSB0cmljayAqL1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vZmZzZXRfICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCB0aGlzLm9mZnNldF8pXG4gICAgICB9LCAxMDApXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IGxvY2tlZCBzdGF0ZSBhbmQgcGFnZSB5LW9mZnNldFxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgaWYgKHRoaXMubG9ja18uZGF0YXNldC5tZFN0YXRlID09PSBcImxvY2tcIilcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCB0aGlzLm9mZnNldF8pXG4gICAgdGhpcy5sb2NrXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9TZWFyY2gvTG9jay5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IGVzY2FwZSBmcm9tIFwiZXNjYXBlLXN0cmluZy1yZWdleHBcIlxuaW1wb3J0IGx1bnIgZnJvbSBcImV4cG9zZS1sb2FkZXI/bHVuciFsdW5yXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogRXNjYXBlIEhUTUwgc3RyaW5nc1xuICpcbiAqIERvY3VtZW50YXRpb24gbWF5IGNvbnRhaW4gY29kZSBKYXZhU2NyaXB0IGNvZGUgc25pcHBldHMgd2hpY2ggd291bGQgZ2V0XG4gKiBleGVjdXRlZCB3aGVuIGluc2VydGVkIGludG8gdGhlIERPTSBhcyBwbGFpbiBIVE1MLlxuICpcbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc3F1aWRmdW5rL21rZG9jcy1tYXRlcmlhbC9pc3N1ZXMvOTA2XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWwgLSBIVE1MIHN0cmluZ1xuICpcbiAqIEByZXR1cm4ge3N0cmluZ30gRXNjYXBlZCBIVE1MIHN0cmluZ1xuICovXG5jb25zdCBlc2NhcGVIVE1MID0gaHRtbCA9PiB7XG4gIHZhciB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaHRtbCk7XG4gIHZhciBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmFwcGVuZENoaWxkKHRleHQpO1xuICByZXR1cm4gcC5pbm5lckhUTUw7XG59XG5cbi8qKlxuICogVHJ1bmNhdGUgYSBzdHJpbmcgYWZ0ZXIgdGhlIGdpdmVuIG51bWJlciBvZiBjaGFyYWN0ZXJcbiAqXG4gKiBUaGlzIGlzIG5vdCBhIHJlYXNvbmFibGUgYXBwcm9hY2gsIHNpbmNlIHRoZSBzdW1tYXJpZXMga2luZCBvZiBzdWNrLiBJdFxuICogd291bGQgYmUgYmV0dGVyIHRvIGNyZWF0ZSBzb21ldGhpbmcgbW9yZSBpbnRlbGxpZ2VudCwgaGlnaGxpZ2h0aW5nIHRoZVxuICogc2VhcmNoIG9jY3VycmVuY2VzIGFuZCBtYWtpbmcgYSBiZXR0ZXIgc3VtbWFyeSBvdXQgb2YgaXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIFN0cmluZyB0byBiZSB0cnVuY2F0ZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIC0gTnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAqIEByZXR1cm4ge3N0cmluZ30gVHJ1bmNhdGVkIHN0cmluZ1xuICovXG5jb25zdCB0cnVuY2F0ZSA9IChzdHJpbmcsIG4pID0+IHtcbiAgbGV0IGkgPSBuXG4gIGlmIChzdHJpbmcubGVuZ3RoID4gaSkge1xuICAgIHdoaWxlIChzdHJpbmdbaV0gIT09IFwiIFwiICYmIC0taSA+IDApO1xuICAgIHJldHVybiBgJHtzdHJpbmcuc3Vic3RyaW5nKDAsIGkpfS4uLmBcbiAgfVxuICByZXR1cm4gc3RyaW5nXG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBtZXRhIHRhZyB2YWx1ZSBmb3IgdGhlIGdpdmVuIGtleVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBNZXRhIG5hbWVcbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmd9IE1ldGEgY29udGVudCB2YWx1ZVxuICovXG5jb25zdCB0cmFuc2xhdGUgPSBrZXkgPT4ge1xuICBjb25zdCBtZXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoYGxhbmc6JHtrZXl9YClbMF1cbiAgaWYgKCEobWV0YSBpbnN0YW5jZW9mIEhUTUxNZXRhRWxlbWVudCkpXG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gIHJldHVybiBtZXRhLmNvbnRlbnRcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0IHtcblxuICAvKipcbiAgICogUGVyZm9ybSBzZWFyY2ggYW5kIHVwZGF0ZSByZXN1bHRzIG9uIGtleWJvYXJkIGV2ZW50c1xuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gU2VhcmNoIHJlc3VsdCBjb250YWluZXJcbiAgICogQHByb3BlcnR5IHsoQXJyYXk8T2JqZWN0PnxGdW5jdGlvbil9IGRhdGFfIC0gUmF3IGRvY3VtZW50IGRhdGFcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IGRvY3NfIC0gSW5kZXhlZCBkb2N1bWVudHNcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gbWV0YV8gLSBTZWFyY2ggbWV0YSBpbmZvcm1hdGlvblxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBsaXN0XyAtIFNlYXJjaCByZXN1bHQgbGlzdFxuICAgKiBAcHJvcGVydHkge0FycmF5PHN0cmluZz59IGxhbmdfIC0gU2VhcmNoIGxhbmd1YWdlc1xuICAgKiBAcHJvcGVydHkge09iamVjdH0gbWVzc2FnZV8gLSBTZWFyY2ggcmVzdWx0IG1lc3NhZ2VzXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBpbmRleF8gLSBTZWFyY2ggaW5kZXhcbiAgICogQHByb3BlcnR5IHtBcnJheTxGdW5jdGlvbj59IHN0YWNrXyAtIFNlYXJjaCByZXN1bHQgc3RhY2tcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHZhbHVlXyAtIExhc3QgaW5wdXQgdmFsdWVcbiAgICpcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcbiAgICogQHBhcmFtIHsoQXJyYXk8T2JqZWN0PnxGdW5jdGlvbil9IGRhdGEgLSBGdW5jdGlvbiBwcm92aWRpbmcgZGF0YSBvciBhcnJheVxuICAgKi9cbiAgY29uc3RydWN0b3IoZWwsIGRhdGEpIHtcbiAgICBjb25zdCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxuICAgICAgOiBlbFxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgIHRoaXMuZWxfID0gcmVmXG5cbiAgICAvKiBSZXRyaWV2ZSBtZXRhZGF0YSBhbmQgbGlzdCBlbGVtZW50ICovXG4gICAgY29uc3QgW21ldGEsIGxpc3RdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5lbF8uY2hpbGRyZW4pXG5cbiAgICAvKiBTZXQgZGF0YSwgbWV0YWRhdGEgYW5kIGxpc3QgZWxlbWVudHMgKi9cbiAgICB0aGlzLmRhdGFfID0gZGF0YVxuICAgIHRoaXMubWV0YV8gPSBtZXRhXG4gICAgdGhpcy5saXN0XyA9IGxpc3RcblxuICAgIC8qIExvYWQgbWVzc2FnZXMgZm9yIG1ldGFkYXRhIGRpc3BsYXkgKi9cbiAgICB0aGlzLm1lc3NhZ2VfID0ge1xuICAgICAgcGxhY2Vob2xkZXI6IHRoaXMubWV0YV8udGV4dENvbnRlbnQsXG4gICAgICBub25lOiB0cmFuc2xhdGUoXCJzZWFyY2gucmVzdWx0Lm5vbmVcIiksXG4gICAgICBvbmU6IHRyYW5zbGF0ZShcInNlYXJjaC5yZXN1bHQub25lXCIpLFxuICAgICAgb3RoZXI6IHRyYW5zbGF0ZShcInNlYXJjaC5yZXN1bHQub3RoZXJcIilcbiAgICB9XG5cbiAgICAvKiBPdmVycmlkZSB0b2tlbml6ZXIgc2VwYXJhdG9yLCBpZiBnaXZlbiAqL1xuICAgIGNvbnN0IHRva2VuaXplciA9IHRyYW5zbGF0ZShcInNlYXJjaC50b2tlbml6ZXJcIilcbiAgICBpZiAodG9rZW5pemVyLmxlbmd0aClcbiAgICAgIGx1bnIudG9rZW5pemVyLnNlcGFyYXRvciA9IHRva2VuaXplclxuXG4gICAgLyogTG9hZCBzZWFyY2ggbGFuZ3VhZ2VzICovXG4gICAgdGhpcy5sYW5nXyA9IHRyYW5zbGF0ZShcInNlYXJjaC5sYW5ndWFnZVwiKS5zcGxpdChcIixcIilcbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgIC5tYXAobGFuZyA9PiBsYW5nLnRyaW0oKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc2VhcmNoIHJlc3VsdHNcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXYgLSBJbnB1dCBvciBmb2N1cyBldmVudFxuICAgKi9cbiAgdXBkYXRlKGV2KSB7XG5cbiAgICAvKiBJbml0aWFsaXplIGluZGV4LCBpZiB0aGlzIGhhcyBub3QgYmUgZG9uZSB5ZXQgKi9cbiAgICBpZiAoZXYudHlwZSA9PT0gXCJmb2N1c1wiICYmICF0aGlzLmluZGV4Xykge1xuXG4gICAgICAvKiBJbml0aWFsaXplIGluZGV4ICovXG4gICAgICBjb25zdCBpbml0ID0gZGF0YSA9PiB7XG5cbiAgICAgICAgLyogUHJlcHJvY2VzcyBhbmQgaW5kZXggc2VjdGlvbnMgYW5kIGRvY3VtZW50cyAqL1xuICAgICAgICB0aGlzLmRvY3NfID0gZGF0YS5yZWR1Y2UoKGRvY3MsIGRvYykgPT4ge1xuICAgICAgICAgIGNvbnN0IFtwYXRoLCBoYXNoXSA9IGRvYy5sb2NhdGlvbi5zcGxpdChcIiNcIilcblxuICAgICAgICAgIC8qIEVzY2FwZSBIVE1MICovXG4gICAgICAgICAgZG9jLnRpdGxlID0gZXNjYXBlSFRNTChkb2MudGl0bGUpXG4gICAgICAgICAgZG9jLnRleHQgID0gZXNjYXBlSFRNTChkb2MudGV4dClcblxuICAgICAgICAgIC8qIEFzc29jaWF0ZSBzZWN0aW9uIHdpdGggcGFyZW50IGRvY3VtZW50ICovXG4gICAgICAgICAgaWYgKGhhc2gpIHtcbiAgICAgICAgICAgIGRvYy5wYXJlbnQgPSBkb2NzLmdldChwYXRoKVxuXG4gICAgICAgICAgICAvKiBPdmVycmlkZSBwYWdlIHRpdGxlIHdpdGggZG9jdW1lbnQgdGl0bGUgaWYgZmlyc3Qgc2VjdGlvbiAqL1xuICAgICAgICAgICAgaWYgKGRvYy5wYXJlbnQgJiYgIWRvYy5wYXJlbnQuZG9uZSkge1xuICAgICAgICAgICAgICBkb2MucGFyZW50LnRpdGxlID0gZG9jLnRpdGxlXG4gICAgICAgICAgICAgIGRvYy5wYXJlbnQudGV4dCAgPSBkb2MudGV4dFxuICAgICAgICAgICAgICBkb2MucGFyZW50LmRvbmUgID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIFNvbWUgY2xlYW51cCBvbiB0aGUgdGV4dCAqL1xuICAgICAgICAgIGRvYy50ZXh0ID0gZG9jLnRleHRcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXG4vZywgXCIgXCIpICAgICAgICAgICAgICAgLyogUmVtb3ZlIG5ld2xpbmVzICovXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikgICAgICAgICAgICAgIC8qIENvbXBhY3Qgd2hpdGVzcGFjZSAqL1xuICAgICAgICAgICAgLnJlcGxhY2UoL1xccysoWywuOjshP10pL2csICAgICAgICAgLyogQ29ycmVjdCBwdW5jdHVhdGlvbiAqL1xuICAgICAgICAgICAgICAoXywgY2hhcikgPT4gY2hhcilcblxuICAgICAgICAgIC8qIEluZGV4IHNlY3Rpb25zIGFuZCBkb2N1bWVudHMsIGJ1dCBza2lwIHRvcC1sZXZlbCBoZWFkbGluZSAqL1xuICAgICAgICAgIGlmICghZG9jLnBhcmVudCB8fCBkb2MucGFyZW50LnRpdGxlICE9PSBkb2MudGl0bGUpXG4gICAgICAgICAgICBkb2NzLnNldChkb2MubG9jYXRpb24sIGRvYylcbiAgICAgICAgICByZXR1cm4gZG9jc1xuICAgICAgICB9LCBuZXcgTWFwKVxuXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWludmFsaWQtdGhpcyAqL1xuICAgICAgICBjb25zdCBkb2NzID0gdGhpcy5kb2NzXyxcbiAgICAgICAgICAgICAgbGFuZyA9IHRoaXMubGFuZ19cblxuICAgICAgICAvKiBDcmVhdGUgc3RhY2sgYW5kIGluZGV4ICovXG4gICAgICAgIHRoaXMuc3RhY2tfID0gW11cbiAgICAgICAgdGhpcy5pbmRleF8gPSBsdW5yKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnN0IGZpbHRlcnMgPSB7XG4gICAgICAgICAgICBcInNlYXJjaC5waXBlbGluZS50cmltbWVyXCI6IGx1bnIudHJpbW1lcixcbiAgICAgICAgICAgIFwic2VhcmNoLnBpcGVsaW5lLnN0b3B3b3Jkc1wiOiBsdW5yLnN0b3BXb3JkRmlsdGVyXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogRGlzYWJsZSBzdG9wIHdvcmRzIGZpbHRlciBhbmQgdHJpbW1lciwgaWYgZGVzaXJlZCAqL1xuICAgICAgICAgIGNvbnN0IHBpcGVsaW5lID0gT2JqZWN0LmtleXMoZmlsdGVycykucmVkdWNlKChyZXN1bHQsIG5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmICghdHJhbnNsYXRlKG5hbWUpLm1hdGNoKC9eZmFsc2UkL2kpKVxuICAgICAgICAgICAgICByZXN1bHQucHVzaChmaWx0ZXJzW25hbWVdKVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICAgIH0sIFtdKVxuXG4gICAgICAgICAgLyogUmVtb3ZlIHN0ZW1tZXIsIGFzIGl0IGNyaXBwbGVzIHNlYXJjaCBleHBlcmllbmNlICovXG4gICAgICAgICAgdGhpcy5waXBlbGluZS5yZXNldCgpXG4gICAgICAgICAgaWYgKHBpcGVsaW5lKVxuICAgICAgICAgICAgdGhpcy5waXBlbGluZS5hZGQoLi4ucGlwZWxpbmUpXG5cbiAgICAgICAgICAvKiBTZXQgdXAgYWx0ZXJuYXRlIHNlYXJjaCBsYW5ndWFnZXMgKi9cbiAgICAgICAgICBpZiAobGFuZy5sZW5ndGggPT09IDEgJiYgbGFuZ1swXSAhPT0gXCJlblwiICYmIGx1bnJbbGFuZ1swXV0pIHtcbiAgICAgICAgICAgIHRoaXMudXNlKGx1bnJbbGFuZ1swXV0pXG4gICAgICAgICAgfSBlbHNlIGlmIChsYW5nLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMudXNlKGx1bnIubXVsdGlMYW5ndWFnZSguLi5sYW5nKSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBJbmRleCBmaWVsZHMgKi9cbiAgICAgICAgICB0aGlzLmZpZWxkKFwidGl0bGVcIiwgeyBib29zdDogMTAgfSlcbiAgICAgICAgICB0aGlzLmZpZWxkKFwidGV4dFwiKVxuICAgICAgICAgIHRoaXMucmVmKFwibG9jYXRpb25cIilcblxuICAgICAgICAgIC8qIEluZGV4IGRvY3VtZW50cyAqL1xuICAgICAgICAgIGRvY3MuZm9yRWFjaChkb2MgPT4gdGhpcy5hZGQoZG9jKSlcbiAgICAgICAgfSlcblxuICAgICAgICAvKiBSZWdpc3RlciBldmVudCBoYW5kbGVyIGZvciBsYXp5IHJlbmRlcmluZyAqL1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsXy5wYXJlbnROb2RlXG4gICAgICAgIGlmICghKGNvbnRhaW5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgICAgIHdoaWxlICh0aGlzLnN0YWNrXy5sZW5ndGggJiYgY29udGFpbmVyLnNjcm9sbFRvcCArXG4gICAgICAgICAgICAgIGNvbnRhaW5lci5vZmZzZXRIZWlnaHQgPj0gY29udGFpbmVyLnNjcm9sbEhlaWdodCAtIDE2KVxuICAgICAgICAgICAgdGhpcy5zdGFja18uc3BsaWNlKDAsIDEwKS5mb3JFYWNoKHJlbmRlciA9PiByZW5kZXIoKSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8taW52YWxpZC10aGlzICovXG5cbiAgICAgIC8qIEluaXRpYWxpemUgaW5kZXggYWZ0ZXIgc2hvcnQgdGltZW91dCB0byBhY2NvdW50IGZvciB0cmFuc2l0aW9uICovXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLmRhdGFfID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IHRoaXMuZGF0YV8oKS50aGVuKGluaXQpXG4gICAgICAgICAgOiBpbml0KHRoaXMuZGF0YV8pXG4gICAgICB9LCAyNTApXG5cbiAgICAvKiBFeGVjdXRlIHNlYXJjaCBvbiBuZXcgaW5wdXQgZXZlbnQgKi9cbiAgICB9IGVsc2UgaWYgKGV2LnR5cGUgPT09IFwiZm9jdXNcIiB8fCBldi50eXBlID09PSBcImtleXVwXCIpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldFxuICAgICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuXG4gICAgICAvKiBBYm9ydCBlYXJseSwgaWYgaW5kZXggaXMgbm90IGJ1aWxkIG9yIGlucHV0IGhhc24ndCBjaGFuZ2VkICovXG4gICAgICBpZiAoIXRoaXMuaW5kZXhfIHx8IHRhcmdldC52YWx1ZSA9PT0gdGhpcy52YWx1ZV8pXG4gICAgICAgIHJldHVyblxuXG4gICAgICAvKiBDbGVhciBjdXJyZW50IGxpc3QgKi9cbiAgICAgIHdoaWxlICh0aGlzLmxpc3RfLmZpcnN0Q2hpbGQpXG4gICAgICAgIHRoaXMubGlzdF8ucmVtb3ZlQ2hpbGQodGhpcy5saXN0Xy5maXJzdENoaWxkKVxuXG4gICAgICAvKiBBYm9ydCBlYXJseSwgaWYgc2VhcmNoIGlucHV0IGlzIGVtcHR5ICovXG4gICAgICB0aGlzLnZhbHVlXyA9IHRhcmdldC52YWx1ZVxuICAgICAgaWYgKHRoaXMudmFsdWVfLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLm1ldGFfLnRleHRDb250ZW50ID0gdGhpcy5tZXNzYWdlXy5wbGFjZWhvbGRlclxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLyogUGVyZm9ybSBzZWFyY2ggb24gaW5kZXggYW5kIGdyb3VwIHNlY3Rpb25zIGJ5IGRvY3VtZW50ICovXG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmluZGV4X1xuXG4gICAgICAgIC8qIEFwcGVuZCB0cmFpbGluZyB3aWxkY2FyZCB0byBhbGwgdGVybXMgZm9yIHByZWZpeCBxdWVyeWluZyAqL1xuICAgICAgICAucXVlcnkocXVlcnkgPT4ge1xuICAgICAgICAgIHRoaXMudmFsdWVfLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpXG4gICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgICAgICAuZm9yRWFjaCh0ZXJtID0+IHtcbiAgICAgICAgICAgICAgcXVlcnkudGVybSh0ZXJtLCB7IHdpbGRjYXJkOiBsdW5yLlF1ZXJ5LndpbGRjYXJkLlRSQUlMSU5HIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIC8qIFByb2Nlc3MgcXVlcnkgcmVzdWx0cyAqL1xuICAgICAgICAucmVkdWNlKChpdGVtcywgaXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRvYyA9IHRoaXMuZG9jc18uZ2V0KGl0ZW0ucmVmKVxuICAgICAgICAgIGlmIChkb2MucGFyZW50KSB7XG4gICAgICAgICAgICBjb25zdCByZWYgPSBkb2MucGFyZW50LmxvY2F0aW9uXG4gICAgICAgICAgICBpdGVtcy5zZXQocmVmLCAoaXRlbXMuZ2V0KHJlZikgfHwgW10pLmNvbmNhdChpdGVtKSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVmID0gZG9jLmxvY2F0aW9uXG4gICAgICAgICAgICBpdGVtcy5zZXQocmVmLCAoaXRlbXMuZ2V0KHJlZikgfHwgW10pKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaXRlbXNcbiAgICAgICAgfSwgbmV3IE1hcClcblxuICAgICAgLyogQXNzZW1ibGUgcmVndWxhciBleHByZXNzaW9ucyBmb3IgbWF0Y2hpbmcgKi9cbiAgICAgIGNvbnN0IHF1ZXJ5ID0gZXNjYXBlKHRoaXMudmFsdWVfLnRyaW0oKSkucmVwbGFjZShcbiAgICAgICAgbmV3IFJlZ0V4cChsdW5yLnRva2VuaXplci5zZXBhcmF0b3IsIFwiaW1nXCIpLCBcInxcIilcbiAgICAgIGNvbnN0IG1hdGNoID1cbiAgICAgICAgbmV3IFJlZ0V4cChgKF58JHtsdW5yLnRva2VuaXplci5zZXBhcmF0b3J9KSgke3F1ZXJ5fSlgLCBcImltZ1wiKVxuICAgICAgY29uc3QgaGlnaGxpZ2h0ID0gKF8sIHNlcGFyYXRvciwgdG9rZW4pID0+XG4gICAgICAgIGAke3NlcGFyYXRvcn08ZW0+JHt0b2tlbn08L2VtPmBcblxuICAgICAgLyogUmVzZXQgc3RhY2sgYW5kIHJlbmRlciByZXN1bHRzICovXG4gICAgICB0aGlzLnN0YWNrXyA9IFtdXG4gICAgICByZXN1bHQuZm9yRWFjaCgoaXRlbXMsIHJlZikgPT4ge1xuICAgICAgICBjb25zdCBkb2MgPSB0aGlzLmRvY3NfLmdldChyZWYpXG5cbiAgICAgICAgLyogUmVuZGVyIGFydGljbGUgKi9cbiAgICAgICAgY29uc3QgYXJ0aWNsZSA9IChcbiAgICAgICAgICA8bGkgY2xhc3M9XCJtZC1zZWFyY2gtcmVzdWx0X19pdGVtXCI+XG4gICAgICAgICAgICA8YSBocmVmPXtkb2MubG9jYXRpb259IHRpdGxlPXtkb2MudGl0bGV9XG4gICAgICAgICAgICAgIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fbGlua1wiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJtZC1zZWFyY2gtcmVzdWx0X19hcnRpY2xlXG4gICAgICAgICAgICAgICAgICAgIG1kLXNlYXJjaC1yZXN1bHRfX2FydGljbGUtLWRvY3VtZW50XCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIHt7IF9faHRtbDogZG9jLnRpdGxlLnJlcGxhY2UobWF0Y2gsIGhpZ2hsaWdodCkgfX1cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIHtkb2MudGV4dC5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtZC1zZWFyY2gtcmVzdWx0X190ZWFzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgX19odG1sOiBkb2MudGV4dC5yZXBsYWNlKG1hdGNoLCBoaWdobGlnaHQpIH19XG4gICAgICAgICAgICAgICAgICA8L3A+IDoge319XG4gICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApXG5cbiAgICAgICAgLyogUmVuZGVyIHNlY3Rpb25zIGZvciBhcnRpY2xlICovXG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uID0gdGhpcy5kb2NzXy5nZXQoaXRlbS5yZWYpXG4gICAgICAgICAgICBhcnRpY2xlLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICA8YSBocmVmPXtzZWN0aW9uLmxvY2F0aW9ufSB0aXRsZT17c2VjdGlvbi50aXRsZX1cbiAgICAgICAgICAgICAgICBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX2xpbmtcIiBkYXRhLW1kLXJlbD1cImFuY2hvclwiXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fYXJ0aWNsZVwiPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgX19odG1sOiBzZWN0aW9uLnRpdGxlLnJlcGxhY2UobWF0Y2gsIGhpZ2hsaWdodCkgfX1cbiAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICB7c2VjdGlvbi50ZXh0Lmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fdGVhc2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3sgX19odG1sOiB0cnVuY2F0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb24udGV4dC5yZXBsYWNlKG1hdGNoLCBoaWdobGlnaHQpLCA0MDApXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPiA6IHt9fVxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvKiBQdXNoIGFydGljbGVzIGFuZCBzZWN0aW9uIHJlbmRlcmVycyBvbnRvIHN0YWNrICovXG4gICAgICAgIHRoaXMuc3RhY2tfLnB1c2goKCkgPT4gdGhpcy5saXN0Xy5hcHBlbmRDaGlsZChhcnRpY2xlKSwgLi4uc2VjdGlvbnMpXG4gICAgICB9KVxuXG4gICAgICAvKiBHcmFkdWFsbHkgYWRkIHJlc3VsdHMgYXMgbG9uZyBhcyB0aGUgaGVpZ2h0IG9mIHRoZSBjb250YWluZXIgZ3Jvd3MgKi9cbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWxfLnBhcmVudE5vZGVcbiAgICAgIGlmICghKGNvbnRhaW5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgICB3aGlsZSAodGhpcy5zdGFja18ubGVuZ3RoICYmXG4gICAgICAgICAgY29udGFpbmVyLm9mZnNldEhlaWdodCA+PSBjb250YWluZXIuc2Nyb2xsSGVpZ2h0IC0gMTYpXG4gICAgICAgICh0aGlzLnN0YWNrXy5zaGlmdCgpKSgpXG5cbiAgICAgIC8qIEJpbmQgY2xpY2sgaGFuZGxlcnMgZm9yIGFuY2hvcnMgKi9cbiAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmxpc3RfLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tZC1yZWw9YW5jaG9yXVwiKVxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhbmNob3JzLCBhbmNob3IgPT4ge1xuICAgICAgICBbXCJjbGlja1wiLCBcImtleWRvd25cIl0uZm9yRWFjaChhY3Rpb24gPT4ge1xuICAgICAgICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKGFjdGlvbiwgZXYyID0+IHtcbiAgICAgICAgICAgIGlmIChhY3Rpb24gPT09IFwia2V5ZG93blwiICYmIGV2Mi5rZXlDb2RlICE9PSAxMylcbiAgICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgICAgIC8qIENsb3NlIHNlYXJjaCAqL1xuICAgICAgICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIpXG4gICAgICAgICAgICBpZiAoISh0b2dnbGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgICAgICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgdG9nZ2xlLmNoZWNrZWQgPSBmYWxzZVxuICAgICAgICAgICAgICB0b2dnbGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIEhhY2s6IHByZXZlbnQgZGVmYXVsdCwgYXMgdGhlIG5hdmlnYXRpb24gbmVlZHMgdG8gYmUgZGVsYXllZCBkdWVcbiAgICAgICAgICAgICAgIHRvIHRoZSBzZWFyY2ggYm9keSBsb2NrIG9uIG1vYmlsZSAqL1xuICAgICAgICAgICAgZXYyLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gYW5jaG9yLmhyZWZcbiAgICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgLyogVXBkYXRlIHNlYXJjaCBtZXRhZGF0YSAqL1xuICAgICAgc3dpdGNoIChyZXN1bHQuc2l6ZSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgdGhpcy5tZXRhXy50ZXh0Q29udGVudCA9IHRoaXMubWVzc2FnZV8ubm9uZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aGlzLm1ldGFfLnRleHRDb250ZW50ID0gdGhpcy5tZXNzYWdlXy5vbmVcbiAgICAgICAgICBicmVha1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMubWV0YV8udGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlXy5vdGhlci5yZXBsYWNlKFwiI1wiLCByZXN1bHQuc2l6ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9TZWFyY2gvUmVzdWx0LmpzeCIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1hdGNoT3BlcmF0b3JzUmUgPSAvW3xcXFxce30oKVtcXF1eJCsqPy5dL2c7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cikge1xuXHRpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZycpO1xuXHR9XG5cblx0cmV0dXJuIHN0ci5yZXBsYWNlKG1hdGNoT3BlcmF0b3JzUmUsICdcXFxcJCYnKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lc2NhcGUtc3RyaW5nLXJlZ2V4cC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxbXCJsdW5yXCJdID0gcmVxdWlyZShcIi0hLi9sdW5yLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2V4cG9zZS1sb2FkZXI/bHVuciEuL25vZGVfbW9kdWxlcy9sdW5yL2x1bnIuanMtZXhwb3NlZFxuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBsdW5yIC0gaHR0cDovL2x1bnJqcy5jb20gLSBBIGJpdCBsaWtlIFNvbHIsIGJ1dCBtdWNoIHNtYWxsZXIgYW5kIG5vdCBhcyBicmlnaHQgLSAyLjMuNVxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICogQGxpY2Vuc2UgTUlUXG4gKi9cblxuOyhmdW5jdGlvbigpe1xuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGNvbmZpZ3VyaW5nIGFuZCBjb25zdHJ1Y3RpbmdcbiAqIGEgbmV3IGx1bnIgSW5kZXguXG4gKlxuICogQSBsdW5yLkJ1aWxkZXIgaW5zdGFuY2UgaXMgY3JlYXRlZCBhbmQgdGhlIHBpcGVsaW5lIHNldHVwXG4gKiB3aXRoIGEgdHJpbW1lciwgc3RvcCB3b3JkIGZpbHRlciBhbmQgc3RlbW1lci5cbiAqXG4gKiBUaGlzIGJ1aWxkZXIgb2JqZWN0IGlzIHlpZWxkZWQgdG8gdGhlIGNvbmZpZ3VyYXRpb24gZnVuY3Rpb25cbiAqIHRoYXQgaXMgcGFzc2VkIGFzIGEgcGFyYW1ldGVyLCBhbGxvd2luZyB0aGUgbGlzdCBvZiBmaWVsZHNcbiAqIGFuZCBvdGhlciBidWlsZGVyIHBhcmFtZXRlcnMgdG8gYmUgY3VzdG9taXNlZC5cbiAqXG4gKiBBbGwgZG9jdW1lbnRzIF9tdXN0XyBiZSBhZGRlZCB3aXRoaW4gdGhlIHBhc3NlZCBjb25maWcgZnVuY3Rpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBpZHggPSBsdW5yKGZ1bmN0aW9uICgpIHtcbiAqICAgdGhpcy5maWVsZCgndGl0bGUnKVxuICogICB0aGlzLmZpZWxkKCdib2R5JylcbiAqICAgdGhpcy5yZWYoJ2lkJylcbiAqXG4gKiAgIGRvY3VtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChkb2MpIHtcbiAqICAgICB0aGlzLmFkZChkb2MpXG4gKiAgIH0sIHRoaXMpXG4gKiB9KVxuICpcbiAqIEBzZWUge0BsaW5rIGx1bnIuQnVpbGRlcn1cbiAqIEBzZWUge0BsaW5rIGx1bnIuUGlwZWxpbmV9XG4gKiBAc2VlIHtAbGluayBsdW5yLnRyaW1tZXJ9XG4gKiBAc2VlIHtAbGluayBsdW5yLnN0b3BXb3JkRmlsdGVyfVxuICogQHNlZSB7QGxpbmsgbHVuci5zdGVtbWVyfVxuICogQG5hbWVzcGFjZSB7ZnVuY3Rpb259IGx1bnJcbiAqL1xudmFyIGx1bnIgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHZhciBidWlsZGVyID0gbmV3IGx1bnIuQnVpbGRlclxuXG4gIGJ1aWxkZXIucGlwZWxpbmUuYWRkKFxuICAgIGx1bnIudHJpbW1lcixcbiAgICBsdW5yLnN0b3BXb3JkRmlsdGVyLFxuICAgIGx1bnIuc3RlbW1lclxuICApXG5cbiAgYnVpbGRlci5zZWFyY2hQaXBlbGluZS5hZGQoXG4gICAgbHVuci5zdGVtbWVyXG4gIClcblxuICBjb25maWcuY2FsbChidWlsZGVyLCBidWlsZGVyKVxuICByZXR1cm4gYnVpbGRlci5idWlsZCgpXG59XG5cbmx1bnIudmVyc2lvbiA9IFwiMi4zLjVcIlxuLyohXG4gKiBsdW5yLnV0aWxzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBBIG5hbWVzcGFjZSBjb250YWluaW5nIHV0aWxzIGZvciB0aGUgcmVzdCBvZiB0aGUgbHVuciBsaWJyYXJ5XG4gKiBAbmFtZXNwYWNlIGx1bnIudXRpbHNcbiAqL1xubHVuci51dGlscyA9IHt9XG5cbi8qKlxuICogUHJpbnQgYSB3YXJuaW5nIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gYmUgcHJpbnRlZC5cbiAqIEBtZW1iZXJPZiBsdW5yLnV0aWxzXG4gKiBAZnVuY3Rpb25cbiAqL1xubHVuci51dGlscy53YXJuID0gKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICBpZiAoZ2xvYmFsLmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG59KSh0aGlzKVxuXG4vKipcbiAqIENvbnZlcnQgYW4gb2JqZWN0IHRvIGEgc3RyaW5nLlxuICpcbiAqIEluIHRoZSBjYXNlIG9mIGBudWxsYCBhbmQgYHVuZGVmaW5lZGAgdGhlIGZ1bmN0aW9uIHJldHVybnNcbiAqIHRoZSBlbXB0eSBzdHJpbmcsIGluIGFsbCBvdGhlciBjYXNlcyB0aGUgcmVzdWx0IG9mIGNhbGxpbmdcbiAqIGB0b1N0cmluZ2Agb24gdGhlIHBhc3NlZCBvYmplY3QgaXMgcmV0dXJuZWQuXG4gKlxuICogQHBhcmFtIHtBbnl9IG9iaiBUaGUgb2JqZWN0IHRvIGNvbnZlcnQgdG8gYSBzdHJpbmcuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcGFzc2VkIG9iamVjdC5cbiAqIEBtZW1iZXJPZiBsdW5yLnV0aWxzXG4gKi9cbmx1bnIudXRpbHMuYXNTdHJpbmcgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmIChvYmogPT09IHZvaWQgMCB8fCBvYmogPT09IG51bGwpIHtcbiAgICByZXR1cm4gXCJcIlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBvYmoudG9TdHJpbmcoKVxuICB9XG59XG5cbi8qKlxuICogQ2xvbmVzIGFuIG9iamVjdC5cbiAqXG4gKiBXaWxsIGNyZWF0ZSBhIGNvcHkgb2YgYW4gZXhpc3Rpbmcgb2JqZWN0IHN1Y2ggdGhhdCBhbnkgbXV0YXRpb25zXG4gKiBvbiB0aGUgY29weSBjYW5ub3QgYWZmZWN0IHRoZSBvcmlnaW5hbC5cbiAqXG4gKiBPbmx5IHNoYWxsb3cgb2JqZWN0cyBhcmUgc3VwcG9ydGVkLCBwYXNzaW5nIGEgbmVzdGVkIG9iamVjdCB0byB0aGlzXG4gKiBmdW5jdGlvbiB3aWxsIGNhdXNlIGEgVHlwZUVycm9yLlxuICpcbiAqIE9iamVjdHMgd2l0aCBwcmltaXRpdmVzLCBhbmQgYXJyYXlzIG9mIHByaW1pdGl2ZXMgYXJlIHN1cHBvcnRlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJuIHtPYmplY3R9IGEgY2xvbmUgb2YgdGhlIHBhc3NlZCBvYmplY3QuXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZW4gYSBuZXN0ZWQgb2JqZWN0IGlzIHBhc3NlZC5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICovXG5sdW5yLnV0aWxzLmNsb25lID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG9ialxuICB9XG5cbiAgdmFyIGNsb25lID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhvYmopXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV0sXG4gICAgICAgIHZhbCA9IG9ialtrZXldXG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICBjbG9uZVtrZXldID0gdmFsLnNsaWNlKClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgIHR5cGVvZiB2YWwgPT09ICdudW1iZXInIHx8XG4gICAgICAgIHR5cGVvZiB2YWwgPT09ICdib29sZWFuJykge1xuICAgICAgY2xvbmVba2V5XSA9IHZhbFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2xvbmUgaXMgbm90IGRlZXAgYW5kIGRvZXMgbm90IHN1cHBvcnQgbmVzdGVkIG9iamVjdHNcIilcbiAgfVxuXG4gIHJldHVybiBjbG9uZVxufVxubHVuci5GaWVsZFJlZiA9IGZ1bmN0aW9uIChkb2NSZWYsIGZpZWxkTmFtZSwgc3RyaW5nVmFsdWUpIHtcbiAgdGhpcy5kb2NSZWYgPSBkb2NSZWZcbiAgdGhpcy5maWVsZE5hbWUgPSBmaWVsZE5hbWVcbiAgdGhpcy5fc3RyaW5nVmFsdWUgPSBzdHJpbmdWYWx1ZVxufVxuXG5sdW5yLkZpZWxkUmVmLmpvaW5lciA9IFwiL1wiXG5cbmx1bnIuRmllbGRSZWYuZnJvbVN0cmluZyA9IGZ1bmN0aW9uIChzKSB7XG4gIHZhciBuID0gcy5pbmRleE9mKGx1bnIuRmllbGRSZWYuam9pbmVyKVxuXG4gIGlmIChuID09PSAtMSkge1xuICAgIHRocm93IFwibWFsZm9ybWVkIGZpZWxkIHJlZiBzdHJpbmdcIlxuICB9XG5cbiAgdmFyIGZpZWxkUmVmID0gcy5zbGljZSgwLCBuKSxcbiAgICAgIGRvY1JlZiA9IHMuc2xpY2UobiArIDEpXG5cbiAgcmV0dXJuIG5ldyBsdW5yLkZpZWxkUmVmIChkb2NSZWYsIGZpZWxkUmVmLCBzKVxufVxuXG5sdW5yLkZpZWxkUmVmLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuX3N0cmluZ1ZhbHVlID09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3N0cmluZ1ZhbHVlID0gdGhpcy5maWVsZE5hbWUgKyBsdW5yLkZpZWxkUmVmLmpvaW5lciArIHRoaXMuZG9jUmVmXG4gIH1cblxuICByZXR1cm4gdGhpcy5fc3RyaW5nVmFsdWVcbn1cbi8qIVxuICogbHVuci5TZXRcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIEEgbHVuciBzZXQuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmx1bnIuU2V0ID0gZnVuY3Rpb24gKGVsZW1lbnRzKSB7XG4gIHRoaXMuZWxlbWVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgaWYgKGVsZW1lbnRzKSB7XG4gICAgdGhpcy5sZW5ndGggPSBlbGVtZW50cy5sZW5ndGhcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5lbGVtZW50c1tlbGVtZW50c1tpXV0gPSB0cnVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMubGVuZ3RoID0gMFxuICB9XG59XG5cbi8qKlxuICogQSBjb21wbGV0ZSBzZXQgdGhhdCBjb250YWlucyBhbGwgZWxlbWVudHMuXG4gKlxuICogQHN0YXRpY1xuICogQHJlYWRvbmx5XG4gKiBAdHlwZSB7bHVuci5TZXR9XG4gKi9cbmx1bnIuU2V0LmNvbXBsZXRlID0ge1xuICBpbnRlcnNlY3Q6IGZ1bmN0aW9uIChvdGhlcikge1xuICAgIHJldHVybiBvdGhlclxuICB9LFxuXG4gIHVuaW9uOiBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICByZXR1cm4gb3RoZXJcbiAgfSxcblxuICBjb250YWluczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuLyoqXG4gKiBBbiBlbXB0eSBzZXQgdGhhdCBjb250YWlucyBubyBlbGVtZW50cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAcmVhZG9ubHlcbiAqIEB0eXBlIHtsdW5yLlNldH1cbiAqL1xubHVuci5TZXQuZW1wdHkgPSB7XG4gIGludGVyc2VjdDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzXG4gIH0sXG5cbiAgdW5pb246IGZ1bmN0aW9uIChvdGhlcikge1xuICAgIHJldHVybiBvdGhlclxuICB9LFxuXG4gIGNvbnRhaW5zOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBzZXQgY29udGFpbnMgdGhlIHNwZWNpZmllZCBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdCAtIE9iamVjdCB3aG9zZSBwcmVzZW5jZSBpbiB0aGlzIHNldCBpcyB0byBiZSB0ZXN0ZWQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBUcnVlIGlmIHRoaXMgc2V0IGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgb2JqZWN0LlxuICovXG5sdW5yLlNldC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gIHJldHVybiAhIXRoaXMuZWxlbWVudHNbb2JqZWN0XVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgc2V0IGNvbnRhaW5pbmcgb25seSB0aGUgZWxlbWVudHMgdGhhdCBhcmUgcHJlc2VudCBpbiBib3RoXG4gKiB0aGlzIHNldCBhbmQgdGhlIHNwZWNpZmllZCBzZXQuXG4gKlxuICogQHBhcmFtIHtsdW5yLlNldH0gb3RoZXIgLSBzZXQgdG8gaW50ZXJzZWN0IHdpdGggdGhpcyBzZXQuXG4gKiBAcmV0dXJucyB7bHVuci5TZXR9IGEgbmV3IHNldCB0aGF0IGlzIHRoZSBpbnRlcnNlY3Rpb24gb2YgdGhpcyBhbmQgdGhlIHNwZWNpZmllZCBzZXQuXG4gKi9cblxubHVuci5TZXQucHJvdG90eXBlLmludGVyc2VjdCA9IGZ1bmN0aW9uIChvdGhlcikge1xuICB2YXIgYSwgYiwgZWxlbWVudHMsIGludGVyc2VjdGlvbiA9IFtdXG5cbiAgaWYgKG90aGVyID09PSBsdW5yLlNldC5jb21wbGV0ZSkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBpZiAob3RoZXIgPT09IGx1bnIuU2V0LmVtcHR5KSB7XG4gICAgcmV0dXJuIG90aGVyXG4gIH1cblxuICBpZiAodGhpcy5sZW5ndGggPCBvdGhlci5sZW5ndGgpIHtcbiAgICBhID0gdGhpc1xuICAgIGIgPSBvdGhlclxuICB9IGVsc2Uge1xuICAgIGEgPSBvdGhlclxuICAgIGIgPSB0aGlzXG4gIH1cblxuICBlbGVtZW50cyA9IE9iamVjdC5rZXlzKGEuZWxlbWVudHMpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBlbGVtZW50ID0gZWxlbWVudHNbaV1cbiAgICBpZiAoZWxlbWVudCBpbiBiLmVsZW1lbnRzKSB7XG4gICAgICBpbnRlcnNlY3Rpb24ucHVzaChlbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgbHVuci5TZXQgKGludGVyc2VjdGlvbilcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IHNldCBjb21iaW5pbmcgdGhlIGVsZW1lbnRzIG9mIHRoaXMgYW5kIHRoZSBzcGVjaWZpZWQgc2V0LlxuICpcbiAqIEBwYXJhbSB7bHVuci5TZXR9IG90aGVyIC0gc2V0IHRvIHVuaW9uIHdpdGggdGhpcyBzZXQuXG4gKiBAcmV0dXJuIHtsdW5yLlNldH0gYSBuZXcgc2V0IHRoYXQgaXMgdGhlIHVuaW9uIG9mIHRoaXMgYW5kIHRoZSBzcGVjaWZpZWQgc2V0LlxuICovXG5cbmx1bnIuU2V0LnByb3RvdHlwZS51bmlvbiA9IGZ1bmN0aW9uIChvdGhlcikge1xuICBpZiAob3RoZXIgPT09IGx1bnIuU2V0LmNvbXBsZXRlKSB7XG4gICAgcmV0dXJuIGx1bnIuU2V0LmNvbXBsZXRlXG4gIH1cblxuICBpZiAob3RoZXIgPT09IGx1bnIuU2V0LmVtcHR5KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJldHVybiBuZXcgbHVuci5TZXQoT2JqZWN0LmtleXModGhpcy5lbGVtZW50cykuY29uY2F0KE9iamVjdC5rZXlzKG90aGVyLmVsZW1lbnRzKSkpXG59XG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gY2FsY3VsYXRlIHRoZSBpbnZlcnNlIGRvY3VtZW50IGZyZXF1ZW5jeSBmb3JcbiAqIGEgcG9zdGluZy4gVGhpcyBpcyBzaGFyZWQgYmV0d2VlbiB0aGUgYnVpbGRlciBhbmQgdGhlIGluZGV4XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwb3N0aW5nIC0gVGhlIHBvc3RpbmcgZm9yIGEgZ2l2ZW4gdGVybVxuICogQHBhcmFtIHtudW1iZXJ9IGRvY3VtZW50Q291bnQgLSBUaGUgdG90YWwgbnVtYmVyIG9mIGRvY3VtZW50cy5cbiAqL1xubHVuci5pZGYgPSBmdW5jdGlvbiAocG9zdGluZywgZG9jdW1lbnRDb3VudCkge1xuICB2YXIgZG9jdW1lbnRzV2l0aFRlcm0gPSAwXG5cbiAgZm9yICh2YXIgZmllbGROYW1lIGluIHBvc3RpbmcpIHtcbiAgICBpZiAoZmllbGROYW1lID09ICdfaW5kZXgnKSBjb250aW51ZSAvLyBJZ25vcmUgdGhlIHRlcm0gaW5kZXgsIGl0cyBub3QgYSBmaWVsZFxuICAgIGRvY3VtZW50c1dpdGhUZXJtICs9IE9iamVjdC5rZXlzKHBvc3RpbmdbZmllbGROYW1lXSkubGVuZ3RoXG4gIH1cblxuICB2YXIgeCA9IChkb2N1bWVudENvdW50IC0gZG9jdW1lbnRzV2l0aFRlcm0gKyAwLjUpIC8gKGRvY3VtZW50c1dpdGhUZXJtICsgMC41KVxuXG4gIHJldHVybiBNYXRoLmxvZygxICsgTWF0aC5hYnMoeCkpXG59XG5cbi8qKlxuICogQSB0b2tlbiB3cmFwcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHRva2VuXG4gKiBhcyBpdCBpcyBwYXNzZWQgdGhyb3VnaCB0aGUgdGV4dCBwcm9jZXNzaW5nIHBpcGVsaW5lLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtzdHJpbmd9IFtzdHI9JyddIC0gVGhlIHN0cmluZyB0b2tlbiBiZWluZyB3cmFwcGVkLlxuICogQHBhcmFtIHtvYmplY3R9IFttZXRhZGF0YT17fV0gLSBNZXRhZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhpcyB0b2tlbi5cbiAqL1xubHVuci5Ub2tlbiA9IGZ1bmN0aW9uIChzdHIsIG1ldGFkYXRhKSB7XG4gIHRoaXMuc3RyID0gc3RyIHx8IFwiXCJcbiAgdGhpcy5tZXRhZGF0YSA9IG1ldGFkYXRhIHx8IHt9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdG9rZW4gc3RyaW5nIHRoYXQgaXMgYmVpbmcgd3JhcHBlZCBieSB0aGlzIG9iamVjdC5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5sdW5yLlRva2VuLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuc3RyXG59XG5cbi8qKlxuICogQSB0b2tlbiB1cGRhdGUgZnVuY3Rpb24gaXMgdXNlZCB3aGVuIHVwZGF0aW5nIG9yIG9wdGlvbmFsbHlcbiAqIHdoZW4gY2xvbmluZyBhIHRva2VuLlxuICpcbiAqIEBjYWxsYmFjayBsdW5yLlRva2VufnVwZGF0ZUZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdG9rZW4uXG4gKiBAcGFyYW0ge09iamVjdH0gbWV0YWRhdGEgLSBBbGwgbWV0YWRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoaXMgdG9rZW4uXG4gKi9cblxuLyoqXG4gKiBBcHBsaWVzIHRoZSBnaXZlbiBmdW5jdGlvbiB0byB0aGUgd3JhcHBlZCBzdHJpbmcgdG9rZW4uXG4gKlxuICogQGV4YW1wbGVcbiAqIHRva2VuLnVwZGF0ZShmdW5jdGlvbiAoc3RyLCBtZXRhZGF0YSkge1xuICogICByZXR1cm4gc3RyLnRvVXBwZXJDYXNlKClcbiAqIH0pXG4gKlxuICogQHBhcmFtIHtsdW5yLlRva2VufnVwZGF0ZUZ1bmN0aW9ufSBmbiAtIEEgZnVuY3Rpb24gdG8gYXBwbHkgdG8gdGhlIHRva2VuIHN0cmluZy5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VufVxuICovXG5sdW5yLlRva2VuLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgdGhpcy5zdHIgPSBmbih0aGlzLnN0ciwgdGhpcy5tZXRhZGF0YSlcbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhpcyB0b2tlbi4gT3B0aW9uYWxseSBhIGZ1bmN0aW9uIGNhbiBiZVxuICogYXBwbGllZCB0byB0aGUgY2xvbmVkIHRva2VuLlxuICpcbiAqIEBwYXJhbSB7bHVuci5Ub2tlbn51cGRhdGVGdW5jdGlvbn0gW2ZuXSAtIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIHRoZSBjbG9uZWQgdG9rZW4uXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlbn1cbiAqL1xubHVuci5Ub2tlbi5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgZm4gPSBmbiB8fCBmdW5jdGlvbiAocykgeyByZXR1cm4gcyB9XG4gIHJldHVybiBuZXcgbHVuci5Ub2tlbiAoZm4odGhpcy5zdHIsIHRoaXMubWV0YWRhdGEpLCB0aGlzLm1ldGFkYXRhKVxufVxuLyohXG4gKiBsdW5yLnRva2VuaXplclxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiBmb3Igc3BsaXR0aW5nIGEgc3RyaW5nIGludG8gdG9rZW5zIHJlYWR5IHRvIGJlIGluc2VydGVkIGludG9cbiAqIHRoZSBzZWFyY2ggaW5kZXguIFVzZXMgYGx1bnIudG9rZW5pemVyLnNlcGFyYXRvcmAgdG8gc3BsaXQgc3RyaW5ncywgY2hhbmdlXG4gKiB0aGUgdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSB0byBjaGFuZ2UgaG93IHN0cmluZ3MgYXJlIHNwbGl0IGludG8gdG9rZW5zLlxuICpcbiAqIFRoaXMgdG9rZW5pemVyIHdpbGwgY29udmVydCBpdHMgcGFyYW1ldGVyIHRvIGEgc3RyaW5nIGJ5IGNhbGxpbmcgYHRvU3RyaW5nYCBhbmRcbiAqIHRoZW4gd2lsbCBzcGxpdCB0aGlzIHN0cmluZyBvbiB0aGUgY2hhcmFjdGVyIGluIGBsdW5yLnRva2VuaXplci5zZXBhcmF0b3JgLlxuICogQXJyYXlzIHdpbGwgaGF2ZSB0aGVpciBlbGVtZW50cyBjb252ZXJ0ZWQgdG8gc3RyaW5ncyBhbmQgd3JhcHBlZCBpbiBhIGx1bnIuVG9rZW4uXG4gKlxuICogT3B0aW9uYWwgbWV0YWRhdGEgY2FuIGJlIHBhc3NlZCB0byB0aGUgdG9rZW5pemVyLCB0aGlzIG1ldGFkYXRhIHdpbGwgYmUgY2xvbmVkIGFuZFxuICogYWRkZWQgYXMgbWV0YWRhdGEgdG8gZXZlcnkgdG9rZW4gdGhhdCBpcyBjcmVhdGVkIGZyb20gdGhlIG9iamVjdCB0byBiZSB0b2tlbml6ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQHBhcmFtIHs/KHN0cmluZ3xvYmplY3R8b2JqZWN0W10pfSBvYmogLSBUaGUgb2JqZWN0IHRvIGNvbnZlcnQgaW50byB0b2tlbnNcbiAqIEBwYXJhbSB7P29iamVjdH0gbWV0YWRhdGEgLSBPcHRpb25hbCBtZXRhZGF0YSB0byBhc3NvY2lhdGUgd2l0aCBldmVyeSB0b2tlblxuICogQHJldHVybnMge2x1bnIuVG9rZW5bXX1cbiAqIEBzZWUge0BsaW5rIGx1bnIuUGlwZWxpbmV9XG4gKi9cbmx1bnIudG9rZW5pemVyID0gZnVuY3Rpb24gKG9iaiwgbWV0YWRhdGEpIHtcbiAgaWYgKG9iaiA9PSBudWxsIHx8IG9iaiA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICByZXR1cm4gb2JqLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIG5ldyBsdW5yLlRva2VuKFxuICAgICAgICBsdW5yLnV0aWxzLmFzU3RyaW5nKHQpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGx1bnIudXRpbHMuY2xvbmUobWV0YWRhdGEpXG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIHZhciBzdHIgPSBvYmoudG9TdHJpbmcoKS50cmltKCkudG9Mb3dlckNhc2UoKSxcbiAgICAgIGxlbiA9IHN0ci5sZW5ndGgsXG4gICAgICB0b2tlbnMgPSBbXVxuXG4gIGZvciAodmFyIHNsaWNlRW5kID0gMCwgc2xpY2VTdGFydCA9IDA7IHNsaWNlRW5kIDw9IGxlbjsgc2xpY2VFbmQrKykge1xuICAgIHZhciBjaGFyID0gc3RyLmNoYXJBdChzbGljZUVuZCksXG4gICAgICAgIHNsaWNlTGVuZ3RoID0gc2xpY2VFbmQgLSBzbGljZVN0YXJ0XG5cbiAgICBpZiAoKGNoYXIubWF0Y2gobHVuci50b2tlbml6ZXIuc2VwYXJhdG9yKSB8fCBzbGljZUVuZCA9PSBsZW4pKSB7XG5cbiAgICAgIGlmIChzbGljZUxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIHRva2VuTWV0YWRhdGEgPSBsdW5yLnV0aWxzLmNsb25lKG1ldGFkYXRhKSB8fCB7fVxuICAgICAgICB0b2tlbk1ldGFkYXRhW1wicG9zaXRpb25cIl0gPSBbc2xpY2VTdGFydCwgc2xpY2VMZW5ndGhdXG4gICAgICAgIHRva2VuTWV0YWRhdGFbXCJpbmRleFwiXSA9IHRva2Vucy5sZW5ndGhcblxuICAgICAgICB0b2tlbnMucHVzaChcbiAgICAgICAgICBuZXcgbHVuci5Ub2tlbiAoXG4gICAgICAgICAgICBzdHIuc2xpY2Uoc2xpY2VTdGFydCwgc2xpY2VFbmQpLFxuICAgICAgICAgICAgdG9rZW5NZXRhZGF0YVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBzbGljZVN0YXJ0ID0gc2xpY2VFbmQgKyAxXG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gdG9rZW5zXG59XG5cbi8qKlxuICogVGhlIHNlcGFyYXRvciB1c2VkIHRvIHNwbGl0IGEgc3RyaW5nIGludG8gdG9rZW5zLiBPdmVycmlkZSB0aGlzIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgYmVoYXZpb3VyIG9mXG4gKiBgbHVuci50b2tlbml6ZXJgIGJlaGF2aW91ciB3aGVuIHRva2VuaXppbmcgc3RyaW5ncy4gQnkgZGVmYXVsdCB0aGlzIHNwbGl0cyBvbiB3aGl0ZXNwYWNlIGFuZCBoeXBoZW5zLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzZWUgbHVuci50b2tlbml6ZXJcbiAqL1xubHVuci50b2tlbml6ZXIuc2VwYXJhdG9yID0gL1tcXHNcXC1dKy9cbi8qIVxuICogbHVuci5QaXBlbGluZVxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogbHVuci5QaXBlbGluZXMgbWFpbnRhaW4gYW4gb3JkZXJlZCBsaXN0IG9mIGZ1bmN0aW9ucyB0byBiZSBhcHBsaWVkIHRvIGFsbFxuICogdG9rZW5zIGluIGRvY3VtZW50cyBlbnRlcmluZyB0aGUgc2VhcmNoIGluZGV4IGFuZCBxdWVyaWVzIGJlaW5nIHJhbiBhZ2FpbnN0XG4gKiB0aGUgaW5kZXguXG4gKlxuICogQW4gaW5zdGFuY2Ugb2YgbHVuci5JbmRleCBjcmVhdGVkIHdpdGggdGhlIGx1bnIgc2hvcnRjdXQgd2lsbCBjb250YWluIGFcbiAqIHBpcGVsaW5lIHdpdGggYSBzdG9wIHdvcmQgZmlsdGVyIGFuZCBhbiBFbmdsaXNoIGxhbmd1YWdlIHN0ZW1tZXIuIEV4dHJhXG4gKiBmdW5jdGlvbnMgY2FuIGJlIGFkZGVkIGJlZm9yZSBvciBhZnRlciBlaXRoZXIgb2YgdGhlc2UgZnVuY3Rpb25zIG9yIHRoZXNlXG4gKiBkZWZhdWx0IGZ1bmN0aW9ucyBjYW4gYmUgcmVtb3ZlZC5cbiAqXG4gKiBXaGVuIHJ1biB0aGUgcGlwZWxpbmUgd2lsbCBjYWxsIGVhY2ggZnVuY3Rpb24gaW4gdHVybiwgcGFzc2luZyBhIHRva2VuLCB0aGVcbiAqIGluZGV4IG9mIHRoYXQgdG9rZW4gaW4gdGhlIG9yaWdpbmFsIGxpc3Qgb2YgYWxsIHRva2VucyBhbmQgZmluYWxseSBhIGxpc3Qgb2ZcbiAqIGFsbCB0aGUgb3JpZ2luYWwgdG9rZW5zLlxuICpcbiAqIFRoZSBvdXRwdXQgb2YgZnVuY3Rpb25zIGluIHRoZSBwaXBlbGluZSB3aWxsIGJlIHBhc3NlZCB0byB0aGUgbmV4dCBmdW5jdGlvblxuICogaW4gdGhlIHBpcGVsaW5lLiBUbyBleGNsdWRlIGEgdG9rZW4gZnJvbSBlbnRlcmluZyB0aGUgaW5kZXggdGhlIGZ1bmN0aW9uXG4gKiBzaG91bGQgcmV0dXJuIHVuZGVmaW5lZCwgdGhlIHJlc3Qgb2YgdGhlIHBpcGVsaW5lIHdpbGwgbm90IGJlIGNhbGxlZCB3aXRoXG4gKiB0aGlzIHRva2VuLlxuICpcbiAqIEZvciBzZXJpYWxpc2F0aW9uIG9mIHBpcGVsaW5lcyB0byB3b3JrLCBhbGwgZnVuY3Rpb25zIHVzZWQgaW4gYW4gaW5zdGFuY2Ugb2ZcbiAqIGEgcGlwZWxpbmUgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgd2l0aCBsdW5yLlBpcGVsaW5lLiBSZWdpc3RlcmVkIGZ1bmN0aW9ucyBjYW5cbiAqIHRoZW4gYmUgbG9hZGVkLiBJZiB0cnlpbmcgdG8gbG9hZCBhIHNlcmlhbGlzZWQgcGlwZWxpbmUgdGhhdCB1c2VzIGZ1bmN0aW9uc1xuICogdGhhdCBhcmUgbm90IHJlZ2lzdGVyZWQgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKlxuICogSWYgbm90IHBsYW5uaW5nIG9uIHNlcmlhbGlzaW5nIHRoZSBwaXBlbGluZSB0aGVuIHJlZ2lzdGVyaW5nIHBpcGVsaW5lIGZ1bmN0aW9uc1xuICogaXMgbm90IG5lY2Vzc2FyeS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xubHVuci5QaXBlbGluZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fc3RhY2sgPSBbXVxufVxuXG5sdW5yLlBpcGVsaW5lLnJlZ2lzdGVyZWRGdW5jdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbi8qKlxuICogQSBwaXBlbGluZSBmdW5jdGlvbiBtYXBzIGx1bnIuVG9rZW4gdG8gbHVuci5Ub2tlbi4gQSBsdW5yLlRva2VuIGNvbnRhaW5zIHRoZSB0b2tlblxuICogc3RyaW5nIGFzIHdlbGwgYXMgYWxsIGtub3duIG1ldGFkYXRhLiBBIHBpcGVsaW5lIGZ1bmN0aW9uIGNhbiBtdXRhdGUgdGhlIHRva2VuIHN0cmluZ1xuICogb3IgbXV0YXRlIChvciBhZGQpIG1ldGFkYXRhIGZvciBhIGdpdmVuIHRva2VuLlxuICpcbiAqIEEgcGlwZWxpbmUgZnVuY3Rpb24gY2FuIGluZGljYXRlIHRoYXQgdGhlIHBhc3NlZCB0b2tlbiBzaG91bGQgYmUgZGlzY2FyZGVkIGJ5IHJldHVybmluZ1xuICogbnVsbC4gVGhpcyB0b2tlbiB3aWxsIG5vdCBiZSBwYXNzZWQgdG8gYW55IGRvd25zdHJlYW0gcGlwZWxpbmUgZnVuY3Rpb25zIGFuZCB3aWxsIG5vdCBiZVxuICogYWRkZWQgdG8gdGhlIGluZGV4LlxuICpcbiAqIE11bHRpcGxlIHRva2VucyBjYW4gYmUgcmV0dXJuZWQgYnkgcmV0dXJuaW5nIGFuIGFycmF5IG9mIHRva2Vucy4gRWFjaCB0b2tlbiB3aWxsIGJlIHBhc3NlZFxuICogdG8gYW55IGRvd25zdHJlYW0gcGlwZWxpbmUgZnVuY3Rpb25zIGFuZCBhbGwgd2lsbCByZXR1cm5lZCB0b2tlbnMgd2lsbCBiZSBhZGRlZCB0byB0aGUgaW5kZXguXG4gKlxuICogQW55IG51bWJlciBvZiBwaXBlbGluZSBmdW5jdGlvbnMgbWF5IGJlIGNoYWluZWQgdG9nZXRoZXIgdXNpbmcgYSBsdW5yLlBpcGVsaW5lLlxuICpcbiAqIEBpbnRlcmZhY2UgbHVuci5QaXBlbGluZUZ1bmN0aW9uXG4gKiBAcGFyYW0ge2x1bnIuVG9rZW59IHRva2VuIC0gQSB0b2tlbiBmcm9tIHRoZSBkb2N1bWVudCBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gaSAtIFRoZSBpbmRleCBvZiB0aGlzIHRva2VuIGluIHRoZSBjb21wbGV0ZSBsaXN0IG9mIHRva2VucyBmb3IgdGhpcyBkb2N1bWVudC9maWVsZC5cbiAqIEBwYXJhbSB7bHVuci5Ub2tlbltdfSB0b2tlbnMgLSBBbGwgdG9rZW5zIGZvciB0aGlzIGRvY3VtZW50L2ZpZWxkLlxuICogQHJldHVybnMgeyg/bHVuci5Ub2tlbnxsdW5yLlRva2VuW10pfVxuICovXG5cbi8qKlxuICogUmVnaXN0ZXIgYSBmdW5jdGlvbiB3aXRoIHRoZSBwaXBlbGluZS5cbiAqXG4gKiBGdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgcGlwZWxpbmUgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgaWYgdGhlIHBpcGVsaW5lXG4gKiBuZWVkcyB0byBiZSBzZXJpYWxpc2VkLCBvciBhIHNlcmlhbGlzZWQgcGlwZWxpbmUgbmVlZHMgdG8gYmUgbG9hZGVkLlxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgZnVuY3Rpb24gZG9lcyBub3QgYWRkIGl0IHRvIGEgcGlwZWxpbmUsIGZ1bmN0aW9ucyBtdXN0IHN0aWxsIGJlXG4gKiBhZGRlZCB0byBpbnN0YW5jZXMgb2YgdGhlIHBpcGVsaW5lIGZvciB0aGVtIHRvIGJlIHVzZWQgd2hlbiBydW5uaW5nIGEgcGlwZWxpbmUuXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGNoZWNrIGZvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBsYWJlbCAtIFRoZSBsYWJlbCB0byByZWdpc3RlciB0aGlzIGZ1bmN0aW9uIHdpdGhcbiAqL1xubHVuci5QaXBlbGluZS5yZWdpc3RlckZ1bmN0aW9uID0gZnVuY3Rpb24gKGZuLCBsYWJlbCkge1xuICBpZiAobGFiZWwgaW4gdGhpcy5yZWdpc3RlcmVkRnVuY3Rpb25zKSB7XG4gICAgbHVuci51dGlscy53YXJuKCdPdmVyd3JpdGluZyBleGlzdGluZyByZWdpc3RlcmVkIGZ1bmN0aW9uOiAnICsgbGFiZWwpXG4gIH1cblxuICBmbi5sYWJlbCA9IGxhYmVsXG4gIGx1bnIuUGlwZWxpbmUucmVnaXN0ZXJlZEZ1bmN0aW9uc1tmbi5sYWJlbF0gPSBmblxufVxuXG4vKipcbiAqIFdhcm5zIGlmIHRoZSBmdW5jdGlvbiBpcyBub3QgcmVnaXN0ZXJlZCBhcyBhIFBpcGVsaW5lIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBjaGVjayBmb3IuXG4gKiBAcHJpdmF0ZVxuICovXG5sdW5yLlBpcGVsaW5lLndhcm5JZkZ1bmN0aW9uTm90UmVnaXN0ZXJlZCA9IGZ1bmN0aW9uIChmbikge1xuICB2YXIgaXNSZWdpc3RlcmVkID0gZm4ubGFiZWwgJiYgKGZuLmxhYmVsIGluIHRoaXMucmVnaXN0ZXJlZEZ1bmN0aW9ucylcblxuICBpZiAoIWlzUmVnaXN0ZXJlZCkge1xuICAgIGx1bnIudXRpbHMud2FybignRnVuY3Rpb24gaXMgbm90IHJlZ2lzdGVyZWQgd2l0aCBwaXBlbGluZS4gVGhpcyBtYXkgY2F1c2UgcHJvYmxlbXMgd2hlbiBzZXJpYWxpc2luZyB0aGUgaW5kZXguXFxuJywgZm4pXG4gIH1cbn1cblxuLyoqXG4gKiBMb2FkcyBhIHByZXZpb3VzbHkgc2VyaWFsaXNlZCBwaXBlbGluZS5cbiAqXG4gKiBBbGwgZnVuY3Rpb25zIHRvIGJlIGxvYWRlZCBtdXN0IGFscmVhZHkgYmUgcmVnaXN0ZXJlZCB3aXRoIGx1bnIuUGlwZWxpbmUuXG4gKiBJZiBhbnkgZnVuY3Rpb24gZnJvbSB0aGUgc2VyaWFsaXNlZCBkYXRhIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkIHRoZW4gYW5cbiAqIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXJpYWxpc2VkIC0gVGhlIHNlcmlhbGlzZWQgcGlwZWxpbmUgdG8gbG9hZC5cbiAqIEByZXR1cm5zIHtsdW5yLlBpcGVsaW5lfVxuICovXG5sdW5yLlBpcGVsaW5lLmxvYWQgPSBmdW5jdGlvbiAoc2VyaWFsaXNlZCkge1xuICB2YXIgcGlwZWxpbmUgPSBuZXcgbHVuci5QaXBlbGluZVxuXG4gIHNlcmlhbGlzZWQuZm9yRWFjaChmdW5jdGlvbiAoZm5OYW1lKSB7XG4gICAgdmFyIGZuID0gbHVuci5QaXBlbGluZS5yZWdpc3RlcmVkRnVuY3Rpb25zW2ZuTmFtZV1cblxuICAgIGlmIChmbikge1xuICAgICAgcGlwZWxpbmUuYWRkKGZuKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBsb2FkIHVucmVnaXN0ZXJlZCBmdW5jdGlvbjogJyArIGZuTmFtZSlcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHBpcGVsaW5lXG59XG5cbi8qKlxuICogQWRkcyBuZXcgZnVuY3Rpb25zIHRvIHRoZSBlbmQgb2YgdGhlIHBpcGVsaW5lLlxuICpcbiAqIExvZ3MgYSB3YXJuaW5nIGlmIHRoZSBmdW5jdGlvbiBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbltdfSBmdW5jdGlvbnMgLSBBbnkgbnVtYmVyIG9mIGZ1bmN0aW9ucyB0byBhZGQgdG8gdGhlIHBpcGVsaW5lLlxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmbnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG5cbiAgZm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgbHVuci5QaXBlbGluZS53YXJuSWZGdW5jdGlvbk5vdFJlZ2lzdGVyZWQoZm4pXG4gICAgdGhpcy5fc3RhY2sucHVzaChmbilcbiAgfSwgdGhpcylcbn1cblxuLyoqXG4gKiBBZGRzIGEgc2luZ2xlIGZ1bmN0aW9uIGFmdGVyIGEgZnVuY3Rpb24gdGhhdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGVcbiAqIHBpcGVsaW5lLlxuICpcbiAqIExvZ3MgYSB3YXJuaW5nIGlmIHRoZSBmdW5jdGlvbiBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn0gZXhpc3RpbmdGbiAtIEEgZnVuY3Rpb24gdGhhdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgcGlwZWxpbmUuXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn0gbmV3Rm4gLSBUaGUgbmV3IGZ1bmN0aW9uIHRvIGFkZCB0byB0aGUgcGlwZWxpbmUuXG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLmFmdGVyID0gZnVuY3Rpb24gKGV4aXN0aW5nRm4sIG5ld0ZuKSB7XG4gIGx1bnIuUGlwZWxpbmUud2FybklmRnVuY3Rpb25Ob3RSZWdpc3RlcmVkKG5ld0ZuKVxuXG4gIHZhciBwb3MgPSB0aGlzLl9zdGFjay5pbmRleE9mKGV4aXN0aW5nRm4pXG4gIGlmIChwb3MgPT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIGV4aXN0aW5nRm4nKVxuICB9XG5cbiAgcG9zID0gcG9zICsgMVxuICB0aGlzLl9zdGFjay5zcGxpY2UocG9zLCAwLCBuZXdGbilcbn1cblxuLyoqXG4gKiBBZGRzIGEgc2luZ2xlIGZ1bmN0aW9uIGJlZm9yZSBhIGZ1bmN0aW9uIHRoYXQgYWxyZWFkeSBleGlzdHMgaW4gdGhlXG4gKiBwaXBlbGluZS5cbiAqXG4gKiBMb2dzIGEgd2FybmluZyBpZiB0aGUgZnVuY3Rpb24gaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQuXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IGV4aXN0aW5nRm4gLSBBIGZ1bmN0aW9uIHRoYXQgYWxyZWFkeSBleGlzdHMgaW4gdGhlIHBpcGVsaW5lLlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IG5ld0ZuIC0gVGhlIG5ldyBmdW5jdGlvbiB0byBhZGQgdG8gdGhlIHBpcGVsaW5lLlxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbiAoZXhpc3RpbmdGbiwgbmV3Rm4pIHtcbiAgbHVuci5QaXBlbGluZS53YXJuSWZGdW5jdGlvbk5vdFJlZ2lzdGVyZWQobmV3Rm4pXG5cbiAgdmFyIHBvcyA9IHRoaXMuX3N0YWNrLmluZGV4T2YoZXhpc3RpbmdGbilcbiAgaWYgKHBvcyA9PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgZXhpc3RpbmdGbicpXG4gIH1cblxuICB0aGlzLl9zdGFjay5zcGxpY2UocG9zLCAwLCBuZXdGbilcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGEgZnVuY3Rpb24gZnJvbSB0aGUgcGlwZWxpbmUuXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byByZW1vdmUgZnJvbSB0aGUgcGlwZWxpbmUuXG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChmbikge1xuICB2YXIgcG9zID0gdGhpcy5fc3RhY2suaW5kZXhPZihmbilcbiAgaWYgKHBvcyA9PSAtMSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdGhpcy5fc3RhY2suc3BsaWNlKHBvcywgMSlcbn1cblxuLyoqXG4gKiBSdW5zIHRoZSBjdXJyZW50IGxpc3Qgb2YgZnVuY3Rpb25zIHRoYXQgbWFrZSB1cCB0aGUgcGlwZWxpbmUgYWdhaW5zdCB0aGVcbiAqIHBhc3NlZCB0b2tlbnMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gdG9rZW5zIFRoZSB0b2tlbnMgdG8gcnVuIHRocm91Z2ggdGhlIHBpcGVsaW5lLlxuICogQHJldHVybnMge0FycmF5fVxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAodG9rZW5zKSB7XG4gIHZhciBzdGFja0xlbmd0aCA9IHRoaXMuX3N0YWNrLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhY2tMZW5ndGg7IGkrKykge1xuICAgIHZhciBmbiA9IHRoaXMuX3N0YWNrW2ldXG4gICAgdmFyIG1lbW8gPSBbXVxuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0b2tlbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciByZXN1bHQgPSBmbih0b2tlbnNbal0sIGosIHRva2VucylcblxuICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwIHx8IHJlc3VsdCA9PT0gJycpIGNvbnRpbnVlXG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCByZXN1bHQubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICBtZW1vLnB1c2gocmVzdWx0W2tdKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW1vLnB1c2gocmVzdWx0KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRva2VucyA9IG1lbW9cbiAgfVxuXG4gIHJldHVybiB0b2tlbnNcbn1cblxuLyoqXG4gKiBDb252ZW5pZW5jZSBtZXRob2QgZm9yIHBhc3NpbmcgYSBzdHJpbmcgdGhyb3VnaCBhIHBpcGVsaW5lIGFuZCBnZXR0aW5nXG4gKiBzdHJpbmdzIG91dC4gVGhpcyBtZXRob2QgdGFrZXMgY2FyZSBvZiB3cmFwcGluZyB0aGUgcGFzc2VkIHN0cmluZyBpbiBhXG4gKiB0b2tlbiBhbmQgbWFwcGluZyB0aGUgcmVzdWx0aW5nIHRva2VucyBiYWNrIHRvIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gcGFzcyB0aHJvdWdoIHRoZSBwaXBlbGluZS5cbiAqIEBwYXJhbSB7P29iamVjdH0gbWV0YWRhdGEgLSBPcHRpb25hbCBtZXRhZGF0YSB0byBhc3NvY2lhdGUgd2l0aCB0aGUgdG9rZW5cbiAqIHBhc3NlZCB0byB0aGUgcGlwZWxpbmUuXG4gKiBAcmV0dXJucyB7c3RyaW5nW119XG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLnJ1blN0cmluZyA9IGZ1bmN0aW9uIChzdHIsIG1ldGFkYXRhKSB7XG4gIHZhciB0b2tlbiA9IG5ldyBsdW5yLlRva2VuIChzdHIsIG1ldGFkYXRhKVxuXG4gIHJldHVybiB0aGlzLnJ1bihbdG9rZW5dKS5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gdC50b1N0cmluZygpXG4gIH0pXG59XG5cbi8qKlxuICogUmVzZXRzIHRoZSBwaXBlbGluZSBieSByZW1vdmluZyBhbnkgZXhpc3RpbmcgcHJvY2Vzc29ycy5cbiAqXG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9zdGFjayA9IFtdXG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwaXBlbGluZSByZWFkeSBmb3Igc2VyaWFsaXNhdGlvbi5cbiAqXG4gKiBMb2dzIGEgd2FybmluZyBpZiB0aGUgZnVuY3Rpb24gaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQuXG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9zdGFjay5tYXAoZnVuY3Rpb24gKGZuKSB7XG4gICAgbHVuci5QaXBlbGluZS53YXJuSWZGdW5jdGlvbk5vdFJlZ2lzdGVyZWQoZm4pXG5cbiAgICByZXR1cm4gZm4ubGFiZWxcbiAgfSlcbn1cbi8qIVxuICogbHVuci5WZWN0b3JcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIEEgdmVjdG9yIGlzIHVzZWQgdG8gY29uc3RydWN0IHRoZSB2ZWN0b3Igc3BhY2Ugb2YgZG9jdW1lbnRzIGFuZCBxdWVyaWVzLiBUaGVzZVxuICogdmVjdG9ycyBzdXBwb3J0IG9wZXJhdGlvbnMgdG8gZGV0ZXJtaW5lIHRoZSBzaW1pbGFyaXR5IGJldHdlZW4gdHdvIGRvY3VtZW50cyBvclxuICogYSBkb2N1bWVudCBhbmQgYSBxdWVyeS5cbiAqXG4gKiBOb3JtYWxseSBubyBwYXJhbWV0ZXJzIGFyZSByZXF1aXJlZCBmb3IgaW5pdGlhbGl6aW5nIGEgdmVjdG9yLCBidXQgaW4gdGhlIGNhc2Ugb2ZcbiAqIGxvYWRpbmcgYSBwcmV2aW91c2x5IGR1bXBlZCB2ZWN0b3IgdGhlIHJhdyBlbGVtZW50cyBjYW4gYmUgcHJvdmlkZWQgdG8gdGhlIGNvbnN0cnVjdG9yLlxuICpcbiAqIEZvciBwZXJmb3JtYW5jZSByZWFzb25zIHZlY3RvcnMgYXJlIGltcGxlbWVudGVkIHdpdGggYSBmbGF0IGFycmF5LCB3aGVyZSBhbiBlbGVtZW50c1xuICogaW5kZXggaXMgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgaXRzIHZhbHVlLiBFLmcuIFtpbmRleCwgdmFsdWUsIGluZGV4LCB2YWx1ZV0uIFRoaXNcbiAqIGFsbG93cyB0aGUgdW5kZXJseWluZyBhcnJheSB0byBiZSBhcyBzcGFyc2UgYXMgcG9zc2libGUgYW5kIHN0aWxsIG9mZmVyIGRlY2VudFxuICogcGVyZm9ybWFuY2Ugd2hlbiBiZWluZyB1c2VkIGZvciB2ZWN0b3IgY2FsY3VsYXRpb25zLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtOdW1iZXJbXX0gW2VsZW1lbnRzXSAtIFRoZSBmbGF0IGxpc3Qgb2YgZWxlbWVudCBpbmRleCBhbmQgZWxlbWVudCB2YWx1ZSBwYWlycy5cbiAqL1xubHVuci5WZWN0b3IgPSBmdW5jdGlvbiAoZWxlbWVudHMpIHtcbiAgdGhpcy5fbWFnbml0dWRlID0gMFxuICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHMgfHwgW11cbn1cblxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHBvc2l0aW9uIHdpdGhpbiB0aGUgdmVjdG9yIHRvIGluc2VydCBhIGdpdmVuIGluZGV4LlxuICpcbiAqIFRoaXMgaXMgdXNlZCBpbnRlcm5hbGx5IGJ5IGluc2VydCBhbmQgdXBzZXJ0LiBJZiB0aGVyZSBhcmUgZHVwbGljYXRlIGluZGV4ZXMgdGhlblxuICogdGhlIHBvc2l0aW9uIGlzIHJldHVybmVkIGFzIGlmIHRoZSB2YWx1ZSBmb3IgdGhhdCBpbmRleCB3ZXJlIHRvIGJlIHVwZGF0ZWQsIGJ1dCBpdFxuICogaXMgdGhlIGNhbGxlcnMgcmVzcG9uc2liaWxpdHkgdG8gY2hlY2sgd2hldGhlciB0aGVyZSBpcyBhIGR1cGxpY2F0ZSBhdCB0aGF0IGluZGV4XG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluc2VydElkeCAtIFRoZSBpbmRleCBhdCB3aGljaCB0aGUgZWxlbWVudCBzaG91bGQgYmUgaW5zZXJ0ZWQuXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUucG9zaXRpb25Gb3JJbmRleCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAvLyBGb3IgYW4gZW1wdHkgdmVjdG9yIHRoZSB0dXBsZSBjYW4gYmUgaW5zZXJ0ZWQgYXQgdGhlIGJlZ2lubmluZ1xuICBpZiAodGhpcy5lbGVtZW50cy5sZW5ndGggPT0gMCkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICB2YXIgc3RhcnQgPSAwLFxuICAgICAgZW5kID0gdGhpcy5lbGVtZW50cy5sZW5ndGggLyAyLFxuICAgICAgc2xpY2VMZW5ndGggPSBlbmQgLSBzdGFydCxcbiAgICAgIHBpdm90UG9pbnQgPSBNYXRoLmZsb29yKHNsaWNlTGVuZ3RoIC8gMiksXG4gICAgICBwaXZvdEluZGV4ID0gdGhpcy5lbGVtZW50c1twaXZvdFBvaW50ICogMl1cblxuICB3aGlsZSAoc2xpY2VMZW5ndGggPiAxKSB7XG4gICAgaWYgKHBpdm90SW5kZXggPCBpbmRleCkge1xuICAgICAgc3RhcnQgPSBwaXZvdFBvaW50XG4gICAgfVxuXG4gICAgaWYgKHBpdm90SW5kZXggPiBpbmRleCkge1xuICAgICAgZW5kID0gcGl2b3RQb2ludFxuICAgIH1cblxuICAgIGlmIChwaXZvdEluZGV4ID09IGluZGV4KSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHNsaWNlTGVuZ3RoID0gZW5kIC0gc3RhcnRcbiAgICBwaXZvdFBvaW50ID0gc3RhcnQgKyBNYXRoLmZsb29yKHNsaWNlTGVuZ3RoIC8gMilcbiAgICBwaXZvdEluZGV4ID0gdGhpcy5lbGVtZW50c1twaXZvdFBvaW50ICogMl1cbiAgfVxuXG4gIGlmIChwaXZvdEluZGV4ID09IGluZGV4KSB7XG4gICAgcmV0dXJuIHBpdm90UG9pbnQgKiAyXG4gIH1cblxuICBpZiAocGl2b3RJbmRleCA+IGluZGV4KSB7XG4gICAgcmV0dXJuIHBpdm90UG9pbnQgKiAyXG4gIH1cblxuICBpZiAocGl2b3RJbmRleCA8IGluZGV4KSB7XG4gICAgcmV0dXJuIChwaXZvdFBvaW50ICsgMSkgKiAyXG4gIH1cbn1cblxuLyoqXG4gKiBJbnNlcnRzIGFuIGVsZW1lbnQgYXQgYW4gaW5kZXggd2l0aGluIHRoZSB2ZWN0b3IuXG4gKlxuICogRG9lcyBub3QgYWxsb3cgZHVwbGljYXRlcywgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGVyZSBpcyBhbHJlYWR5IGFuIGVudHJ5XG4gKiBmb3IgdGhpcyBpbmRleC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5zZXJ0SWR4IC0gVGhlIGluZGV4IGF0IHdoaWNoIHRoZSBlbGVtZW50IHNob3VsZCBiZSBpbnNlcnRlZC5cbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWwgLSBUaGUgdmFsdWUgdG8gYmUgaW5zZXJ0ZWQgaW50byB0aGUgdmVjdG9yLlxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gKGluc2VydElkeCwgdmFsKSB7XG4gIHRoaXMudXBzZXJ0KGluc2VydElkeCwgdmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgXCJkdXBsaWNhdGUgaW5kZXhcIlxuICB9KVxufVxuXG4vKipcbiAqIEluc2VydHMgb3IgdXBkYXRlcyBhbiBleGlzdGluZyBpbmRleCB3aXRoaW4gdGhlIHZlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5zZXJ0SWR4IC0gVGhlIGluZGV4IGF0IHdoaWNoIHRoZSBlbGVtZW50IHNob3VsZCBiZSBpbnNlcnRlZC5cbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWwgLSBUaGUgdmFsdWUgdG8gYmUgaW5zZXJ0ZWQgaW50byB0aGUgdmVjdG9yLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gLSBBIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGZvciB1cGRhdGVzLCB0aGUgZXhpc3RpbmcgdmFsdWUgYW5kIHRoZVxuICogcmVxdWVzdGVkIHZhbHVlIGFyZSBwYXNzZWQgYXMgYXJndW1lbnRzXG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS51cHNlcnQgPSBmdW5jdGlvbiAoaW5zZXJ0SWR4LCB2YWwsIGZuKSB7XG4gIHRoaXMuX21hZ25pdHVkZSA9IDBcbiAgdmFyIHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbkZvckluZGV4KGluc2VydElkeClcblxuICBpZiAodGhpcy5lbGVtZW50c1twb3NpdGlvbl0gPT0gaW5zZXJ0SWR4KSB7XG4gICAgdGhpcy5lbGVtZW50c1twb3NpdGlvbiArIDFdID0gZm4odGhpcy5lbGVtZW50c1twb3NpdGlvbiArIDFdLCB2YWwpXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5lbGVtZW50cy5zcGxpY2UocG9zaXRpb24sIDAsIGluc2VydElkeCwgdmFsKVxuICB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbWFnbml0dWRlIG9mIHRoaXMgdmVjdG9yLlxuICpcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS5tYWduaXR1ZGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLl9tYWduaXR1ZGUpIHJldHVybiB0aGlzLl9tYWduaXR1ZGVcblxuICB2YXIgc3VtT2ZTcXVhcmVzID0gMCxcbiAgICAgIGVsZW1lbnRzTGVuZ3RoID0gdGhpcy5lbGVtZW50cy5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGVsZW1lbnRzTGVuZ3RoOyBpICs9IDIpIHtcbiAgICB2YXIgdmFsID0gdGhpcy5lbGVtZW50c1tpXVxuICAgIHN1bU9mU3F1YXJlcyArPSB2YWwgKiB2YWxcbiAgfVxuXG4gIHJldHVybiB0aGlzLl9tYWduaXR1ZGUgPSBNYXRoLnNxcnQoc3VtT2ZTcXVhcmVzKVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyIHZlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuVmVjdG9yfSBvdGhlclZlY3RvciAtIFRoZSB2ZWN0b3IgdG8gY29tcHV0ZSB0aGUgZG90IHByb2R1Y3Qgd2l0aC5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS5kb3QgPSBmdW5jdGlvbiAob3RoZXJWZWN0b3IpIHtcbiAgdmFyIGRvdFByb2R1Y3QgPSAwLFxuICAgICAgYSA9IHRoaXMuZWxlbWVudHMsIGIgPSBvdGhlclZlY3Rvci5lbGVtZW50cyxcbiAgICAgIGFMZW4gPSBhLmxlbmd0aCwgYkxlbiA9IGIubGVuZ3RoLFxuICAgICAgYVZhbCA9IDAsIGJWYWwgPSAwLFxuICAgICAgaSA9IDAsIGogPSAwXG5cbiAgd2hpbGUgKGkgPCBhTGVuICYmIGogPCBiTGVuKSB7XG4gICAgYVZhbCA9IGFbaV0sIGJWYWwgPSBiW2pdXG4gICAgaWYgKGFWYWwgPCBiVmFsKSB7XG4gICAgICBpICs9IDJcbiAgICB9IGVsc2UgaWYgKGFWYWwgPiBiVmFsKSB7XG4gICAgICBqICs9IDJcbiAgICB9IGVsc2UgaWYgKGFWYWwgPT0gYlZhbCkge1xuICAgICAgZG90UHJvZHVjdCArPSBhW2kgKyAxXSAqIGJbaiArIDFdXG4gICAgICBpICs9IDJcbiAgICAgIGogKz0gMlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkb3RQcm9kdWN0XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc2ltaWxhcml0eSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyIHZlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuVmVjdG9yfSBvdGhlclZlY3RvciAtIFRoZSBvdGhlciB2ZWN0b3IgdG8gY2FsY3VsYXRlIHRoZVxuICogc2ltaWxhcml0eSB3aXRoLlxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLnNpbWlsYXJpdHkgPSBmdW5jdGlvbiAob3RoZXJWZWN0b3IpIHtcbiAgcmV0dXJuIHRoaXMuZG90KG90aGVyVmVjdG9yKSAvIHRoaXMubWFnbml0dWRlKCkgfHwgMFxufVxuXG4vKipcbiAqIENvbnZlcnRzIHRoZSB2ZWN0b3IgdG8gYW4gYXJyYXkgb2YgdGhlIGVsZW1lbnRzIHdpdGhpbiB0aGUgdmVjdG9yLlxuICpcbiAqIEByZXR1cm5zIHtOdW1iZXJbXX1cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvdXRwdXQgPSBuZXcgQXJyYXkgKHRoaXMuZWxlbWVudHMubGVuZ3RoIC8gMilcblxuICBmb3IgKHZhciBpID0gMSwgaiA9IDA7IGkgPCB0aGlzLmVsZW1lbnRzLmxlbmd0aDsgaSArPSAyLCBqKyspIHtcbiAgICBvdXRwdXRbal0gPSB0aGlzLmVsZW1lbnRzW2ldXG4gIH1cblxuICByZXR1cm4gb3V0cHV0XG59XG5cbi8qKlxuICogQSBKU09OIHNlcmlhbGl6YWJsZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yLlxuICpcbiAqIEByZXR1cm5zIHtOdW1iZXJbXX1cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZWxlbWVudHNcbn1cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKiFcbiAqIGx1bnIuc3RlbW1lclxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICogSW5jbHVkZXMgY29kZSBmcm9tIC0gaHR0cDovL3RhcnRhcnVzLm9yZy9+bWFydGluL1BvcnRlclN0ZW1tZXIvanMudHh0XG4gKi9cblxuLyoqXG4gKiBsdW5yLnN0ZW1tZXIgaXMgYW4gZW5nbGlzaCBsYW5ndWFnZSBzdGVtbWVyLCB0aGlzIGlzIGEgSmF2YVNjcmlwdFxuICogaW1wbGVtZW50YXRpb24gb2YgdGhlIFBvcnRlclN0ZW1tZXIgdGFrZW4gZnJvbSBodHRwOi8vdGFydGFydXMub3JnL35tYXJ0aW5cbiAqXG4gKiBAc3RhdGljXG4gKiBAaW1wbGVtZW50cyB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufVxuICogQHBhcmFtIHtsdW5yLlRva2VufSB0b2tlbiAtIFRoZSBzdHJpbmcgdG8gc3RlbVxuICogQHJldHVybnMge2x1bnIuVG9rZW59XG4gKiBAc2VlIHtAbGluayBsdW5yLlBpcGVsaW5lfVxuICogQGZ1bmN0aW9uXG4gKi9cbmx1bnIuc3RlbW1lciA9IChmdW5jdGlvbigpe1xuICB2YXIgc3RlcDJsaXN0ID0ge1xuICAgICAgXCJhdGlvbmFsXCIgOiBcImF0ZVwiLFxuICAgICAgXCJ0aW9uYWxcIiA6IFwidGlvblwiLFxuICAgICAgXCJlbmNpXCIgOiBcImVuY2VcIixcbiAgICAgIFwiYW5jaVwiIDogXCJhbmNlXCIsXG4gICAgICBcIml6ZXJcIiA6IFwiaXplXCIsXG4gICAgICBcImJsaVwiIDogXCJibGVcIixcbiAgICAgIFwiYWxsaVwiIDogXCJhbFwiLFxuICAgICAgXCJlbnRsaVwiIDogXCJlbnRcIixcbiAgICAgIFwiZWxpXCIgOiBcImVcIixcbiAgICAgIFwib3VzbGlcIiA6IFwib3VzXCIsXG4gICAgICBcIml6YXRpb25cIiA6IFwiaXplXCIsXG4gICAgICBcImF0aW9uXCIgOiBcImF0ZVwiLFxuICAgICAgXCJhdG9yXCIgOiBcImF0ZVwiLFxuICAgICAgXCJhbGlzbVwiIDogXCJhbFwiLFxuICAgICAgXCJpdmVuZXNzXCIgOiBcIml2ZVwiLFxuICAgICAgXCJmdWxuZXNzXCIgOiBcImZ1bFwiLFxuICAgICAgXCJvdXNuZXNzXCIgOiBcIm91c1wiLFxuICAgICAgXCJhbGl0aVwiIDogXCJhbFwiLFxuICAgICAgXCJpdml0aVwiIDogXCJpdmVcIixcbiAgICAgIFwiYmlsaXRpXCIgOiBcImJsZVwiLFxuICAgICAgXCJsb2dpXCIgOiBcImxvZ1wiXG4gICAgfSxcblxuICAgIHN0ZXAzbGlzdCA9IHtcbiAgICAgIFwiaWNhdGVcIiA6IFwiaWNcIixcbiAgICAgIFwiYXRpdmVcIiA6IFwiXCIsXG4gICAgICBcImFsaXplXCIgOiBcImFsXCIsXG4gICAgICBcImljaXRpXCIgOiBcImljXCIsXG4gICAgICBcImljYWxcIiA6IFwiaWNcIixcbiAgICAgIFwiZnVsXCIgOiBcIlwiLFxuICAgICAgXCJuZXNzXCIgOiBcIlwiXG4gICAgfSxcblxuICAgIGMgPSBcIlteYWVpb3VdXCIsICAgICAgICAgIC8vIGNvbnNvbmFudFxuICAgIHYgPSBcIlthZWlvdXldXCIsICAgICAgICAgIC8vIHZvd2VsXG4gICAgQyA9IGMgKyBcIlteYWVpb3V5XSpcIiwgICAgLy8gY29uc29uYW50IHNlcXVlbmNlXG4gICAgViA9IHYgKyBcIlthZWlvdV0qXCIsICAgICAgLy8gdm93ZWwgc2VxdWVuY2VcblxuICAgIG1ncjAgPSBcIl4oXCIgKyBDICsgXCIpP1wiICsgViArIEMsICAgICAgICAgICAgICAgLy8gW0NdVkMuLi4gaXMgbT4wXG4gICAgbWVxMSA9IFwiXihcIiArIEMgKyBcIik/XCIgKyBWICsgQyArIFwiKFwiICsgViArIFwiKT8kXCIsICAvLyBbQ11WQ1tWXSBpcyBtPTFcbiAgICBtZ3IxID0gXCJeKFwiICsgQyArIFwiKT9cIiArIFYgKyBDICsgViArIEMsICAgICAgIC8vIFtDXVZDVkMuLi4gaXMgbT4xXG4gICAgc192ID0gXCJeKFwiICsgQyArIFwiKT9cIiArIHY7ICAgICAgICAgICAgICAgICAgIC8vIHZvd2VsIGluIHN0ZW1cblxuICB2YXIgcmVfbWdyMCA9IG5ldyBSZWdFeHAobWdyMCk7XG4gIHZhciByZV9tZ3IxID0gbmV3IFJlZ0V4cChtZ3IxKTtcbiAgdmFyIHJlX21lcTEgPSBuZXcgUmVnRXhwKG1lcTEpO1xuICB2YXIgcmVfc192ID0gbmV3IFJlZ0V4cChzX3YpO1xuXG4gIHZhciByZV8xYSA9IC9eKC4rPykoc3N8aSllcyQvO1xuICB2YXIgcmUyXzFhID0gL14oLis/KShbXnNdKXMkLztcbiAgdmFyIHJlXzFiID0gL14oLis/KWVlZCQvO1xuICB2YXIgcmUyXzFiID0gL14oLis/KShlZHxpbmcpJC87XG4gIHZhciByZV8xYl8yID0gLy4kLztcbiAgdmFyIHJlMl8xYl8yID0gLyhhdHxibHxpeikkLztcbiAgdmFyIHJlM18xYl8yID0gbmV3IFJlZ0V4cChcIihbXmFlaW91eWxzel0pXFxcXDEkXCIpO1xuICB2YXIgcmU0XzFiXzIgPSBuZXcgUmVnRXhwKFwiXlwiICsgQyArIHYgKyBcIlteYWVpb3V3eHldJFwiKTtcblxuICB2YXIgcmVfMWMgPSAvXiguKz9bXmFlaW91XSl5JC87XG4gIHZhciByZV8yID0gL14oLis/KShhdGlvbmFsfHRpb25hbHxlbmNpfGFuY2l8aXplcnxibGl8YWxsaXxlbnRsaXxlbGl8b3VzbGl8aXphdGlvbnxhdGlvbnxhdG9yfGFsaXNtfGl2ZW5lc3N8ZnVsbmVzc3xvdXNuZXNzfGFsaXRpfGl2aXRpfGJpbGl0aXxsb2dpKSQvO1xuXG4gIHZhciByZV8zID0gL14oLis/KShpY2F0ZXxhdGl2ZXxhbGl6ZXxpY2l0aXxpY2FsfGZ1bHxuZXNzKSQvO1xuXG4gIHZhciByZV80ID0gL14oLis/KShhbHxhbmNlfGVuY2V8ZXJ8aWN8YWJsZXxpYmxlfGFudHxlbWVudHxtZW50fGVudHxvdXxpc218YXRlfGl0aXxvdXN8aXZlfGl6ZSkkLztcbiAgdmFyIHJlMl80ID0gL14oLis/KShzfHQpKGlvbikkLztcblxuICB2YXIgcmVfNSA9IC9eKC4rPyllJC87XG4gIHZhciByZV81XzEgPSAvbGwkLztcbiAgdmFyIHJlM181ID0gbmV3IFJlZ0V4cChcIl5cIiArIEMgKyB2ICsgXCJbXmFlaW91d3h5XSRcIik7XG5cbiAgdmFyIHBvcnRlclN0ZW1tZXIgPSBmdW5jdGlvbiBwb3J0ZXJTdGVtbWVyKHcpIHtcbiAgICB2YXIgc3RlbSxcbiAgICAgIHN1ZmZpeCxcbiAgICAgIGZpcnN0Y2gsXG4gICAgICByZSxcbiAgICAgIHJlMixcbiAgICAgIHJlMyxcbiAgICAgIHJlNDtcblxuICAgIGlmICh3Lmxlbmd0aCA8IDMpIHsgcmV0dXJuIHc7IH1cblxuICAgIGZpcnN0Y2ggPSB3LnN1YnN0cigwLDEpO1xuICAgIGlmIChmaXJzdGNoID09IFwieVwiKSB7XG4gICAgICB3ID0gZmlyc3RjaC50b1VwcGVyQ2FzZSgpICsgdy5zdWJzdHIoMSk7XG4gICAgfVxuXG4gICAgLy8gU3RlcCAxYVxuICAgIHJlID0gcmVfMWFcbiAgICByZTIgPSByZTJfMWE7XG5cbiAgICBpZiAocmUudGVzdCh3KSkgeyB3ID0gdy5yZXBsYWNlKHJlLFwiJDEkMlwiKTsgfVxuICAgIGVsc2UgaWYgKHJlMi50ZXN0KHcpKSB7IHcgPSB3LnJlcGxhY2UocmUyLFwiJDEkMlwiKTsgfVxuXG4gICAgLy8gU3RlcCAxYlxuICAgIHJlID0gcmVfMWI7XG4gICAgcmUyID0gcmUyXzFiO1xuICAgIGlmIChyZS50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZS5leGVjKHcpO1xuICAgICAgcmUgPSByZV9tZ3IwO1xuICAgICAgaWYgKHJlLnRlc3QoZnBbMV0pKSB7XG4gICAgICAgIHJlID0gcmVfMWJfMjtcbiAgICAgICAgdyA9IHcucmVwbGFjZShyZSxcIlwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJlMi50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZTIuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXTtcbiAgICAgIHJlMiA9IHJlX3NfdjtcbiAgICAgIGlmIChyZTIudGVzdChzdGVtKSkge1xuICAgICAgICB3ID0gc3RlbTtcbiAgICAgICAgcmUyID0gcmUyXzFiXzI7XG4gICAgICAgIHJlMyA9IHJlM18xYl8yO1xuICAgICAgICByZTQgPSByZTRfMWJfMjtcbiAgICAgICAgaWYgKHJlMi50ZXN0KHcpKSB7IHcgPSB3ICsgXCJlXCI7IH1cbiAgICAgICAgZWxzZSBpZiAocmUzLnRlc3QodykpIHsgcmUgPSByZV8xYl8yOyB3ID0gdy5yZXBsYWNlKHJlLFwiXCIpOyB9XG4gICAgICAgIGVsc2UgaWYgKHJlNC50ZXN0KHcpKSB7IHcgPSB3ICsgXCJlXCI7IH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGVwIDFjIC0gcmVwbGFjZSBzdWZmaXggeSBvciBZIGJ5IGkgaWYgcHJlY2VkZWQgYnkgYSBub24tdm93ZWwgd2hpY2ggaXMgbm90IHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIHdvcmQgKHNvIGNyeSAtPiBjcmksIGJ5IC0+IGJ5LCBzYXkgLT4gc2F5KVxuICAgIHJlID0gcmVfMWM7XG4gICAgaWYgKHJlLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV07XG4gICAgICB3ID0gc3RlbSArIFwiaVwiO1xuICAgIH1cblxuICAgIC8vIFN0ZXAgMlxuICAgIHJlID0gcmVfMjtcbiAgICBpZiAocmUudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXTtcbiAgICAgIHN1ZmZpeCA9IGZwWzJdO1xuICAgICAgcmUgPSByZV9tZ3IwO1xuICAgICAgaWYgKHJlLnRlc3Qoc3RlbSkpIHtcbiAgICAgICAgdyA9IHN0ZW0gKyBzdGVwMmxpc3Rbc3VmZml4XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGVwIDNcbiAgICByZSA9IHJlXzM7XG4gICAgaWYgKHJlLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV07XG4gICAgICBzdWZmaXggPSBmcFsyXTtcbiAgICAgIHJlID0gcmVfbWdyMDtcbiAgICAgIGlmIChyZS50ZXN0KHN0ZW0pKSB7XG4gICAgICAgIHcgPSBzdGVtICsgc3RlcDNsaXN0W3N1ZmZpeF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RlcCA0XG4gICAgcmUgPSByZV80O1xuICAgIHJlMiA9IHJlMl80O1xuICAgIGlmIChyZS50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZS5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdO1xuICAgICAgcmUgPSByZV9tZ3IxO1xuICAgICAgaWYgKHJlLnRlc3Qoc3RlbSkpIHtcbiAgICAgICAgdyA9IHN0ZW07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZTIudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUyLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV0gKyBmcFsyXTtcbiAgICAgIHJlMiA9IHJlX21ncjE7XG4gICAgICBpZiAocmUyLnRlc3Qoc3RlbSkpIHtcbiAgICAgICAgdyA9IHN0ZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RlcCA1XG4gICAgcmUgPSByZV81O1xuICAgIGlmIChyZS50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZS5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdO1xuICAgICAgcmUgPSByZV9tZ3IxO1xuICAgICAgcmUyID0gcmVfbWVxMTtcbiAgICAgIHJlMyA9IHJlM181O1xuICAgICAgaWYgKHJlLnRlc3Qoc3RlbSkgfHwgKHJlMi50ZXN0KHN0ZW0pICYmICEocmUzLnRlc3Qoc3RlbSkpKSkge1xuICAgICAgICB3ID0gc3RlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZSA9IHJlXzVfMTtcbiAgICByZTIgPSByZV9tZ3IxO1xuICAgIGlmIChyZS50ZXN0KHcpICYmIHJlMi50ZXN0KHcpKSB7XG4gICAgICByZSA9IHJlXzFiXzI7XG4gICAgICB3ID0gdy5yZXBsYWNlKHJlLFwiXCIpO1xuICAgIH1cblxuICAgIC8vIGFuZCB0dXJuIGluaXRpYWwgWSBiYWNrIHRvIHlcblxuICAgIGlmIChmaXJzdGNoID09IFwieVwiKSB7XG4gICAgICB3ID0gZmlyc3RjaC50b0xvd2VyQ2FzZSgpICsgdy5zdWJzdHIoMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHc7XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHJldHVybiB0b2tlbi51cGRhdGUocG9ydGVyU3RlbW1lcik7XG4gIH1cbn0pKCk7XG5cbmx1bnIuUGlwZWxpbmUucmVnaXN0ZXJGdW5jdGlvbihsdW5yLnN0ZW1tZXIsICdzdGVtbWVyJylcbi8qIVxuICogbHVuci5zdG9wV29yZEZpbHRlclxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogbHVuci5nZW5lcmF0ZVN0b3BXb3JkRmlsdGVyIGJ1aWxkcyBhIHN0b3BXb3JkRmlsdGVyIGZ1bmN0aW9uIGZyb20gdGhlIHByb3ZpZGVkXG4gKiBsaXN0IG9mIHN0b3Agd29yZHMuXG4gKlxuICogVGhlIGJ1aWx0IGluIGx1bnIuc3RvcFdvcmRGaWx0ZXIgaXMgYnVpbHQgdXNpbmcgdGhpcyBnZW5lcmF0b3IgYW5kIGNhbiBiZSB1c2VkXG4gKiB0byBnZW5lcmF0ZSBjdXN0b20gc3RvcFdvcmRGaWx0ZXJzIGZvciBhcHBsaWNhdGlvbnMgb3Igbm9uIEVuZ2xpc2ggbGFuZ3VhZ2VzLlxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtBcnJheX0gdG9rZW4gVGhlIHRva2VuIHRvIHBhc3MgdGhyb3VnaCB0aGUgZmlsdGVyXG4gKiBAcmV0dXJucyB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufVxuICogQHNlZSBsdW5yLlBpcGVsaW5lXG4gKiBAc2VlIGx1bnIuc3RvcFdvcmRGaWx0ZXJcbiAqL1xubHVuci5nZW5lcmF0ZVN0b3BXb3JkRmlsdGVyID0gZnVuY3Rpb24gKHN0b3BXb3Jkcykge1xuICB2YXIgd29yZHMgPSBzdG9wV29yZHMucmVkdWNlKGZ1bmN0aW9uIChtZW1vLCBzdG9wV29yZCkge1xuICAgIG1lbW9bc3RvcFdvcmRdID0gc3RvcFdvcmRcbiAgICByZXR1cm4gbWVtb1xuICB9LCB7fSlcblxuICByZXR1cm4gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgaWYgKHRva2VuICYmIHdvcmRzW3Rva2VuLnRvU3RyaW5nKCldICE9PSB0b2tlbi50b1N0cmluZygpKSByZXR1cm4gdG9rZW5cbiAgfVxufVxuXG4vKipcbiAqIGx1bnIuc3RvcFdvcmRGaWx0ZXIgaXMgYW4gRW5nbGlzaCBsYW5ndWFnZSBzdG9wIHdvcmQgbGlzdCBmaWx0ZXIsIGFueSB3b3Jkc1xuICogY29udGFpbmVkIGluIHRoZSBsaXN0IHdpbGwgbm90IGJlIHBhc3NlZCB0aHJvdWdoIHRoZSBmaWx0ZXIuXG4gKlxuICogVGhpcyBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGluIHRoZSBQaXBlbGluZS4gSWYgdGhlIHRva2VuIGRvZXMgbm90IHBhc3MgdGhlXG4gKiBmaWx0ZXIgdGhlbiB1bmRlZmluZWQgd2lsbCBiZSByZXR1cm5lZC5cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBpbXBsZW1lbnRzIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259XG4gKiBAcGFyYW1zIHtsdW5yLlRva2VufSB0b2tlbiAtIEEgdG9rZW4gdG8gY2hlY2sgZm9yIGJlaW5nIGEgc3RvcCB3b3JkLlxuICogQHJldHVybnMge2x1bnIuVG9rZW59XG4gKiBAc2VlIHtAbGluayBsdW5yLlBpcGVsaW5lfVxuICovXG5sdW5yLnN0b3BXb3JkRmlsdGVyID0gbHVuci5nZW5lcmF0ZVN0b3BXb3JkRmlsdGVyKFtcbiAgJ2EnLFxuICAnYWJsZScsXG4gICdhYm91dCcsXG4gICdhY3Jvc3MnLFxuICAnYWZ0ZXInLFxuICAnYWxsJyxcbiAgJ2FsbW9zdCcsXG4gICdhbHNvJyxcbiAgJ2FtJyxcbiAgJ2Ftb25nJyxcbiAgJ2FuJyxcbiAgJ2FuZCcsXG4gICdhbnknLFxuICAnYXJlJyxcbiAgJ2FzJyxcbiAgJ2F0JyxcbiAgJ2JlJyxcbiAgJ2JlY2F1c2UnLFxuICAnYmVlbicsXG4gICdidXQnLFxuICAnYnknLFxuICAnY2FuJyxcbiAgJ2Nhbm5vdCcsXG4gICdjb3VsZCcsXG4gICdkZWFyJyxcbiAgJ2RpZCcsXG4gICdkbycsXG4gICdkb2VzJyxcbiAgJ2VpdGhlcicsXG4gICdlbHNlJyxcbiAgJ2V2ZXInLFxuICAnZXZlcnknLFxuICAnZm9yJyxcbiAgJ2Zyb20nLFxuICAnZ2V0JyxcbiAgJ2dvdCcsXG4gICdoYWQnLFxuICAnaGFzJyxcbiAgJ2hhdmUnLFxuICAnaGUnLFxuICAnaGVyJyxcbiAgJ2hlcnMnLFxuICAnaGltJyxcbiAgJ2hpcycsXG4gICdob3cnLFxuICAnaG93ZXZlcicsXG4gICdpJyxcbiAgJ2lmJyxcbiAgJ2luJyxcbiAgJ2ludG8nLFxuICAnaXMnLFxuICAnaXQnLFxuICAnaXRzJyxcbiAgJ2p1c3QnLFxuICAnbGVhc3QnLFxuICAnbGV0JyxcbiAgJ2xpa2UnLFxuICAnbGlrZWx5JyxcbiAgJ21heScsXG4gICdtZScsXG4gICdtaWdodCcsXG4gICdtb3N0JyxcbiAgJ211c3QnLFxuICAnbXknLFxuICAnbmVpdGhlcicsXG4gICdubycsXG4gICdub3InLFxuICAnbm90JyxcbiAgJ29mJyxcbiAgJ29mZicsXG4gICdvZnRlbicsXG4gICdvbicsXG4gICdvbmx5JyxcbiAgJ29yJyxcbiAgJ290aGVyJyxcbiAgJ291cicsXG4gICdvd24nLFxuICAncmF0aGVyJyxcbiAgJ3NhaWQnLFxuICAnc2F5JyxcbiAgJ3NheXMnLFxuICAnc2hlJyxcbiAgJ3Nob3VsZCcsXG4gICdzaW5jZScsXG4gICdzbycsXG4gICdzb21lJyxcbiAgJ3RoYW4nLFxuICAndGhhdCcsXG4gICd0aGUnLFxuICAndGhlaXInLFxuICAndGhlbScsXG4gICd0aGVuJyxcbiAgJ3RoZXJlJyxcbiAgJ3RoZXNlJyxcbiAgJ3RoZXknLFxuICAndGhpcycsXG4gICd0aXMnLFxuICAndG8nLFxuICAndG9vJyxcbiAgJ3R3YXMnLFxuICAndXMnLFxuICAnd2FudHMnLFxuICAnd2FzJyxcbiAgJ3dlJyxcbiAgJ3dlcmUnLFxuICAnd2hhdCcsXG4gICd3aGVuJyxcbiAgJ3doZXJlJyxcbiAgJ3doaWNoJyxcbiAgJ3doaWxlJyxcbiAgJ3dobycsXG4gICd3aG9tJyxcbiAgJ3doeScsXG4gICd3aWxsJyxcbiAgJ3dpdGgnLFxuICAnd291bGQnLFxuICAneWV0JyxcbiAgJ3lvdScsXG4gICd5b3VyJ1xuXSlcblxubHVuci5QaXBlbGluZS5yZWdpc3RlckZ1bmN0aW9uKGx1bnIuc3RvcFdvcmRGaWx0ZXIsICdzdG9wV29yZEZpbHRlcicpXG4vKiFcbiAqIGx1bnIudHJpbW1lclxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogbHVuci50cmltbWVyIGlzIGEgcGlwZWxpbmUgZnVuY3Rpb24gZm9yIHRyaW1taW5nIG5vbiB3b3JkXG4gKiBjaGFyYWN0ZXJzIGZyb20gdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIHRva2VucyBiZWZvcmUgdGhleVxuICogZW50ZXIgdGhlIGluZGV4LlxuICpcbiAqIFRoaXMgaW1wbGVtZW50YXRpb24gbWF5IG5vdCB3b3JrIGNvcnJlY3RseSBmb3Igbm9uIGxhdGluXG4gKiBjaGFyYWN0ZXJzIGFuZCBzaG91bGQgZWl0aGVyIGJlIHJlbW92ZWQgb3IgYWRhcHRlZCBmb3IgdXNlXG4gKiB3aXRoIGxhbmd1YWdlcyB3aXRoIG5vbi1sYXRpbiBjaGFyYWN0ZXJzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBpbXBsZW1lbnRzIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259XG4gKiBAcGFyYW0ge2x1bnIuVG9rZW59IHRva2VuIFRoZSB0b2tlbiB0byBwYXNzIHRocm91Z2ggdGhlIGZpbHRlclxuICogQHJldHVybnMge2x1bnIuVG9rZW59XG4gKiBAc2VlIGx1bnIuUGlwZWxpbmVcbiAqL1xubHVuci50cmltbWVyID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbi51cGRhdGUoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gcy5yZXBsYWNlKC9eXFxXKy8sICcnKS5yZXBsYWNlKC9cXFcrJC8sICcnKVxuICB9KVxufVxuXG5sdW5yLlBpcGVsaW5lLnJlZ2lzdGVyRnVuY3Rpb24obHVuci50cmltbWVyLCAndHJpbW1lcicpXG4vKiFcbiAqIGx1bnIuVG9rZW5TZXRcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIEEgdG9rZW4gc2V0IGlzIHVzZWQgdG8gc3RvcmUgdGhlIHVuaXF1ZSBsaXN0IG9mIGFsbCB0b2tlbnNcbiAqIHdpdGhpbiBhbiBpbmRleC4gVG9rZW4gc2V0cyBhcmUgYWxzbyB1c2VkIHRvIHJlcHJlc2VudCBhblxuICogaW5jb21pbmcgcXVlcnkgdG8gdGhlIGluZGV4LCB0aGlzIHF1ZXJ5IHRva2VuIHNldCBhbmQgaW5kZXhcbiAqIHRva2VuIHNldCBhcmUgdGhlbiBpbnRlcnNlY3RlZCB0byBmaW5kIHdoaWNoIHRva2VucyB0byBsb29rXG4gKiB1cCBpbiB0aGUgaW52ZXJ0ZWQgaW5kZXguXG4gKlxuICogQSB0b2tlbiBzZXQgY2FuIGhvbGQgbXVsdGlwbGUgdG9rZW5zLCBhcyBpbiB0aGUgY2FzZSBvZiB0aGVcbiAqIGluZGV4IHRva2VuIHNldCwgb3IgaXQgY2FuIGhvbGQgYSBzaW5nbGUgdG9rZW4gYXMgaW4gdGhlXG4gKiBjYXNlIG9mIGEgc2ltcGxlIHF1ZXJ5IHRva2VuIHNldC5cbiAqXG4gKiBBZGRpdGlvbmFsbHkgdG9rZW4gc2V0cyBhcmUgdXNlZCB0byBwZXJmb3JtIHdpbGRjYXJkIG1hdGNoaW5nLlxuICogTGVhZGluZywgY29udGFpbmVkIGFuZCB0cmFpbGluZyB3aWxkY2FyZHMgYXJlIHN1cHBvcnRlZCwgYW5kXG4gKiBmcm9tIHRoaXMgZWRpdCBkaXN0YW5jZSBtYXRjaGluZyBjYW4gYWxzbyBiZSBwcm92aWRlZC5cbiAqXG4gKiBUb2tlbiBzZXRzIGFyZSBpbXBsZW1lbnRlZCBhcyBhIG1pbmltYWwgZmluaXRlIHN0YXRlIGF1dG9tYXRhLFxuICogd2hlcmUgYm90aCBjb21tb24gcHJlZml4ZXMgYW5kIHN1ZmZpeGVzIGFyZSBzaGFyZWQgYmV0d2VlbiB0b2tlbnMuXG4gKiBUaGlzIGhlbHBzIHRvIHJlZHVjZSB0aGUgc3BhY2UgdXNlZCBmb3Igc3RvcmluZyB0aGUgdG9rZW4gc2V0LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5sdW5yLlRva2VuU2V0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZpbmFsID0gZmFsc2VcbiAgdGhpcy5lZGdlcyA9IHt9XG4gIHRoaXMuaWQgPSBsdW5yLlRva2VuU2V0Ll9uZXh0SWRcbiAgbHVuci5Ub2tlblNldC5fbmV4dElkICs9IDFcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgbmV4dCwgYXV0byBpbmNyZW1lbnQsIGlkZW50aWZpZXIgdG8gYXNzaWduXG4gKiB0byBhIG5ldyB0b2tlblNldC5cbiAqXG4gKiBUb2tlblNldHMgcmVxdWlyZSBhIHVuaXF1ZSBpZGVudGlmaWVyIHRvIGJlIGNvcnJlY3RseSBtaW5pbWlzZWQuXG4gKlxuICogQHByaXZhdGVcbiAqL1xubHVuci5Ub2tlblNldC5fbmV4dElkID0gMVxuXG4vKipcbiAqIENyZWF0ZXMgYSBUb2tlblNldCBpbnN0YW5jZSBmcm9tIHRoZSBnaXZlbiBzb3J0ZWQgYXJyYXkgb2Ygd29yZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmdbXX0gYXJyIC0gQSBzb3J0ZWQgYXJyYXkgb2Ygc3RyaW5ncyB0byBjcmVhdGUgdGhlIHNldCBmcm9tLlxuICogQHJldHVybnMge2x1bnIuVG9rZW5TZXR9XG4gKiBAdGhyb3dzIFdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlIGlucHV0IGFycmF5IGlzIG5vdCBzb3J0ZWQuXG4gKi9cbmx1bnIuVG9rZW5TZXQuZnJvbUFycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICB2YXIgYnVpbGRlciA9IG5ldyBsdW5yLlRva2VuU2V0LkJ1aWxkZXJcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYnVpbGRlci5pbnNlcnQoYXJyW2ldKVxuICB9XG5cbiAgYnVpbGRlci5maW5pc2goKVxuICByZXR1cm4gYnVpbGRlci5yb290XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRva2VuIHNldCBmcm9tIGEgcXVlcnkgY2xhdXNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2xhdXNlIC0gQSBzaW5nbGUgY2xhdXNlIGZyb20gbHVuci5RdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGF1c2UudGVybSAtIFRoZSBxdWVyeSBjbGF1c2UgdGVybS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbY2xhdXNlLmVkaXREaXN0YW5jZV0gLSBUaGUgb3B0aW9uYWwgZWRpdCBkaXN0YW5jZSBmb3IgdGhlIHRlcm0uXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlblNldH1cbiAqL1xubHVuci5Ub2tlblNldC5mcm9tQ2xhdXNlID0gZnVuY3Rpb24gKGNsYXVzZSkge1xuICBpZiAoJ2VkaXREaXN0YW5jZScgaW4gY2xhdXNlKSB7XG4gICAgcmV0dXJuIGx1bnIuVG9rZW5TZXQuZnJvbUZ1enp5U3RyaW5nKGNsYXVzZS50ZXJtLCBjbGF1c2UuZWRpdERpc3RhbmNlKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBsdW5yLlRva2VuU2V0LmZyb21TdHJpbmcoY2xhdXNlLnRlcm0pXG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdG9rZW4gc2V0IHJlcHJlc2VudGluZyBhIHNpbmdsZSBzdHJpbmcgd2l0aCBhIHNwZWNpZmllZFxuICogZWRpdCBkaXN0YW5jZS5cbiAqXG4gKiBJbnNlcnRpb25zLCBkZWxldGlvbnMsIHN1YnN0aXR1dGlvbnMgYW5kIHRyYW5zcG9zaXRpb25zIGFyZSBlYWNoXG4gKiB0cmVhdGVkIGFzIGFuIGVkaXQgZGlzdGFuY2Ugb2YgMS5cbiAqXG4gKiBJbmNyZWFzaW5nIHRoZSBhbGxvd2VkIGVkaXQgZGlzdGFuY2Ugd2lsbCBoYXZlIGEgZHJhbWF0aWMgaW1wYWN0XG4gKiBvbiB0aGUgcGVyZm9ybWFuY2Ugb2YgYm90aCBjcmVhdGluZyBhbmQgaW50ZXJzZWN0aW5nIHRoZXNlIFRva2VuU2V0cy5cbiAqIEl0IGlzIGFkdmlzZWQgdG8ga2VlcCB0aGUgZWRpdCBkaXN0YW5jZSBsZXNzIHRoYW4gMy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBjcmVhdGUgdGhlIHRva2VuIHNldCBmcm9tLlxuICogQHBhcmFtIHtudW1iZXJ9IGVkaXREaXN0YW5jZSAtIFRoZSBhbGxvd2VkIGVkaXQgZGlzdGFuY2UgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7bHVuci5WZWN0b3J9XG4gKi9cbmx1bnIuVG9rZW5TZXQuZnJvbUZ1enp5U3RyaW5nID0gZnVuY3Rpb24gKHN0ciwgZWRpdERpc3RhbmNlKSB7XG4gIHZhciByb290ID0gbmV3IGx1bnIuVG9rZW5TZXRcblxuICB2YXIgc3RhY2sgPSBbe1xuICAgIG5vZGU6IHJvb3QsXG4gICAgZWRpdHNSZW1haW5pbmc6IGVkaXREaXN0YW5jZSxcbiAgICBzdHI6IHN0clxuICB9XVxuXG4gIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICB2YXIgZnJhbWUgPSBzdGFjay5wb3AoKVxuXG4gICAgLy8gbm8gZWRpdFxuICAgIGlmIChmcmFtZS5zdHIubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGNoYXIgPSBmcmFtZS5zdHIuY2hhckF0KDApLFxuICAgICAgICAgIG5vRWRpdE5vZGVcblxuICAgICAgaWYgKGNoYXIgaW4gZnJhbWUubm9kZS5lZGdlcykge1xuICAgICAgICBub0VkaXROb2RlID0gZnJhbWUubm9kZS5lZGdlc1tjaGFyXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9FZGl0Tm9kZSA9IG5ldyBsdW5yLlRva2VuU2V0XG4gICAgICAgIGZyYW1lLm5vZGUuZWRnZXNbY2hhcl0gPSBub0VkaXROb2RlXG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFtZS5zdHIubGVuZ3RoID09IDEpIHtcbiAgICAgICAgbm9FZGl0Tm9kZS5maW5hbCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgIG5vZGU6IG5vRWRpdE5vZGUsXG4gICAgICAgIGVkaXRzUmVtYWluaW5nOiBmcmFtZS5lZGl0c1JlbWFpbmluZyxcbiAgICAgICAgc3RyOiBmcmFtZS5zdHIuc2xpY2UoMSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gZGVsZXRpb25cbiAgICAvLyBjYW4gb25seSBkbyBhIGRlbGV0aW9uIGlmIHdlIGhhdmUgZW5vdWdoIGVkaXRzIHJlbWFpbmluZ1xuICAgIC8vIGFuZCBpZiB0aGVyZSBhcmUgY2hhcmFjdGVycyBsZWZ0IHRvIGRlbGV0ZSBpbiB0aGUgc3RyaW5nXG4gICAgaWYgKGZyYW1lLmVkaXRzUmVtYWluaW5nID4gMCAmJiBmcmFtZS5zdHIubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIGNoYXIgPSBmcmFtZS5zdHIuY2hhckF0KDEpLFxuICAgICAgICAgIGRlbGV0aW9uTm9kZVxuXG4gICAgICBpZiAoY2hhciBpbiBmcmFtZS5ub2RlLmVkZ2VzKSB7XG4gICAgICAgIGRlbGV0aW9uTm9kZSA9IGZyYW1lLm5vZGUuZWRnZXNbY2hhcl1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0aW9uTm9kZSA9IG5ldyBsdW5yLlRva2VuU2V0XG4gICAgICAgIGZyYW1lLm5vZGUuZWRnZXNbY2hhcl0gPSBkZWxldGlvbk5vZGVcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lLnN0ci5sZW5ndGggPD0gMikge1xuICAgICAgICBkZWxldGlvbk5vZGUuZmluYWwgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICBub2RlOiBkZWxldGlvbk5vZGUsXG4gICAgICAgICAgZWRpdHNSZW1haW5pbmc6IGZyYW1lLmVkaXRzUmVtYWluaW5nIC0gMSxcbiAgICAgICAgICBzdHI6IGZyYW1lLnN0ci5zbGljZSgyKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRlbGV0aW9uXG4gICAgLy8ganVzdCByZW1vdmluZyB0aGUgbGFzdCBjaGFyYWN0ZXIgZnJvbSB0aGUgc3RyXG4gICAgaWYgKGZyYW1lLmVkaXRzUmVtYWluaW5nID4gMCAmJiBmcmFtZS5zdHIubGVuZ3RoID09IDEpIHtcbiAgICAgIGZyYW1lLm5vZGUuZmluYWwgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gc3Vic3RpdHV0aW9uXG4gICAgLy8gY2FuIG9ubHkgZG8gYSBzdWJzdGl0dXRpb24gaWYgd2UgaGF2ZSBlbm91Z2ggZWRpdHMgcmVtYWluaW5nXG4gICAgLy8gYW5kIGlmIHRoZXJlIGFyZSBjaGFyYWN0ZXJzIGxlZnQgdG8gc3Vic3RpdHV0ZVxuICAgIGlmIChmcmFtZS5lZGl0c1JlbWFpbmluZyA+IDAgJiYgZnJhbWUuc3RyLmxlbmd0aCA+PSAxKSB7XG4gICAgICBpZiAoXCIqXCIgaW4gZnJhbWUubm9kZS5lZGdlcykge1xuICAgICAgICB2YXIgc3Vic3RpdHV0aW9uTm9kZSA9IGZyYW1lLm5vZGUuZWRnZXNbXCIqXCJdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc3Vic3RpdHV0aW9uTm9kZSA9IG5ldyBsdW5yLlRva2VuU2V0XG4gICAgICAgIGZyYW1lLm5vZGUuZWRnZXNbXCIqXCJdID0gc3Vic3RpdHV0aW9uTm9kZVxuICAgICAgfVxuXG4gICAgICBpZiAoZnJhbWUuc3RyLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbk5vZGUuZmluYWwgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICBub2RlOiBzdWJzdGl0dXRpb25Ob2RlLFxuICAgICAgICAgIGVkaXRzUmVtYWluaW5nOiBmcmFtZS5lZGl0c1JlbWFpbmluZyAtIDEsXG4gICAgICAgICAgc3RyOiBmcmFtZS5zdHIuc2xpY2UoMSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpbnNlcnRpb25cbiAgICAvLyBjYW4gb25seSBkbyBpbnNlcnRpb24gaWYgdGhlcmUgYXJlIGVkaXRzIHJlbWFpbmluZ1xuICAgIGlmIChmcmFtZS5lZGl0c1JlbWFpbmluZyA+IDApIHtcbiAgICAgIGlmIChcIipcIiBpbiBmcmFtZS5ub2RlLmVkZ2VzKSB7XG4gICAgICAgIHZhciBpbnNlcnRpb25Ob2RlID0gZnJhbWUubm9kZS5lZGdlc1tcIipcIl1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpbnNlcnRpb25Ob2RlID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgICAgICAgZnJhbWUubm9kZS5lZGdlc1tcIipcIl0gPSBpbnNlcnRpb25Ob2RlXG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFtZS5zdHIubGVuZ3RoID09IDApIHtcbiAgICAgICAgaW5zZXJ0aW9uTm9kZS5maW5hbCA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgIG5vZGU6IGluc2VydGlvbk5vZGUsXG4gICAgICAgICAgZWRpdHNSZW1haW5pbmc6IGZyYW1lLmVkaXRzUmVtYWluaW5nIC0gMSxcbiAgICAgICAgICBzdHI6IGZyYW1lLnN0clxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRyYW5zcG9zaXRpb25cbiAgICAvLyBjYW4gb25seSBkbyBhIHRyYW5zcG9zaXRpb24gaWYgdGhlcmUgYXJlIGVkaXRzIHJlbWFpbmluZ1xuICAgIC8vIGFuZCB0aGVyZSBhcmUgZW5vdWdoIGNoYXJhY3RlcnMgdG8gdHJhbnNwb3NlXG4gICAgaWYgKGZyYW1lLmVkaXRzUmVtYWluaW5nID4gMCAmJiBmcmFtZS5zdHIubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIGNoYXJBID0gZnJhbWUuc3RyLmNoYXJBdCgwKSxcbiAgICAgICAgICBjaGFyQiA9IGZyYW1lLnN0ci5jaGFyQXQoMSksXG4gICAgICAgICAgdHJhbnNwb3NlTm9kZVxuXG4gICAgICBpZiAoY2hhckIgaW4gZnJhbWUubm9kZS5lZGdlcykge1xuICAgICAgICB0cmFuc3Bvc2VOb2RlID0gZnJhbWUubm9kZS5lZGdlc1tjaGFyQl1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zcG9zZU5vZGUgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgICBmcmFtZS5ub2RlLmVkZ2VzW2NoYXJCXSA9IHRyYW5zcG9zZU5vZGVcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lLnN0ci5sZW5ndGggPT0gMSkge1xuICAgICAgICB0cmFuc3Bvc2VOb2RlLmZpbmFsID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgbm9kZTogdHJhbnNwb3NlTm9kZSxcbiAgICAgICAgICBlZGl0c1JlbWFpbmluZzogZnJhbWUuZWRpdHNSZW1haW5pbmcgLSAxLFxuICAgICAgICAgIHN0cjogY2hhckEgKyBmcmFtZS5zdHIuc2xpY2UoMilcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcm9vdFxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBUb2tlblNldCBmcm9tIGEgc3RyaW5nLlxuICpcbiAqIFRoZSBzdHJpbmcgbWF5IGNvbnRhaW4gb25lIG9yIG1vcmUgd2lsZGNhcmQgY2hhcmFjdGVycyAoKilcbiAqIHRoYXQgd2lsbCBhbGxvdyB3aWxkY2FyZCBtYXRjaGluZyB3aGVuIGludGVyc2VjdGluZyB3aXRoXG4gKiBhbm90aGVyIFRva2VuU2V0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIGNyZWF0ZSBhIFRva2VuU2V0IGZyb20uXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlblNldH1cbiAqL1xubHVuci5Ub2tlblNldC5mcm9tU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICB2YXIgbm9kZSA9IG5ldyBsdW5yLlRva2VuU2V0LFxuICAgICAgcm9vdCA9IG5vZGVcblxuICAvKlxuICAgKiBJdGVyYXRlcyB0aHJvdWdoIGFsbCBjaGFyYWN0ZXJzIHdpdGhpbiB0aGUgcGFzc2VkIHN0cmluZ1xuICAgKiBhcHBlbmRpbmcgYSBub2RlIGZvciBlYWNoIGNoYXJhY3Rlci5cbiAgICpcbiAgICogV2hlbiBhIHdpbGRjYXJkIGNoYXJhY3RlciBpcyBmb3VuZCB0aGVuIGEgc2VsZlxuICAgKiByZWZlcmVuY2luZyBlZGdlIGlzIGludHJvZHVjZWQgdG8gY29udGludWFsbHkgbWF0Y2hcbiAgICogYW55IG51bWJlciBvZiBhbnkgY2hhcmFjdGVycy5cbiAgICovXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzdHIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgY2hhciA9IHN0cltpXSxcbiAgICAgICAgZmluYWwgPSAoaSA9PSBsZW4gLSAxKVxuXG4gICAgaWYgKGNoYXIgPT0gXCIqXCIpIHtcbiAgICAgIG5vZGUuZWRnZXNbY2hhcl0gPSBub2RlXG4gICAgICBub2RlLmZpbmFsID0gZmluYWxcblxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbmV4dCA9IG5ldyBsdW5yLlRva2VuU2V0XG4gICAgICBuZXh0LmZpbmFsID0gZmluYWxcblxuICAgICAgbm9kZS5lZGdlc1tjaGFyXSA9IG5leHRcbiAgICAgIG5vZGUgPSBuZXh0XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJvb3Rcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGlzIFRva2VuU2V0IGludG8gYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICogY29udGFpbmVkIHdpdGhpbiB0aGUgVG9rZW5TZXQuXG4gKlxuICogQHJldHVybnMge3N0cmluZ1tdfVxuICovXG5sdW5yLlRva2VuU2V0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgd29yZHMgPSBbXVxuXG4gIHZhciBzdGFjayA9IFt7XG4gICAgcHJlZml4OiBcIlwiLFxuICAgIG5vZGU6IHRoaXNcbiAgfV1cblxuICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgdmFyIGZyYW1lID0gc3RhY2sucG9wKCksXG4gICAgICAgIGVkZ2VzID0gT2JqZWN0LmtleXMoZnJhbWUubm9kZS5lZGdlcyksXG4gICAgICAgIGxlbiA9IGVkZ2VzLmxlbmd0aFxuXG4gICAgaWYgKGZyYW1lLm5vZGUuZmluYWwpIHtcbiAgICAgIC8qIEluIFNhZmFyaSwgYXQgdGhpcyBwb2ludCB0aGUgcHJlZml4IGlzIHNvbWV0aW1lcyBjb3JydXB0ZWQsIHNlZTpcbiAgICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9vbGl2ZXJubi9sdW5yLmpzL2lzc3Vlcy8yNzkgQ2FsbGluZyBhbnlcbiAgICAgICAqIFN0cmluZy5wcm90b3R5cGUgbWV0aG9kIGZvcmNlcyBTYWZhcmkgdG8gXCJjYXN0XCIgdGhpcyBzdHJpbmcgdG8gd2hhdFxuICAgICAgICogaXQncyBzdXBwb3NlZCB0byBiZSwgZml4aW5nIHRoZSBidWcuICovXG4gICAgICBmcmFtZS5wcmVmaXguY2hhckF0KDApXG4gICAgICB3b3Jkcy5wdXNoKGZyYW1lLnByZWZpeClcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgZWRnZSA9IGVkZ2VzW2ldXG5cbiAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICBwcmVmaXg6IGZyYW1lLnByZWZpeC5jb25jYXQoZWRnZSksXG4gICAgICAgIG5vZGU6IGZyYW1lLm5vZGUuZWRnZXNbZWRnZV1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHdvcmRzXG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgVG9rZW5TZXQuXG4gKlxuICogVGhpcyBpcyBpbnRlbmRlZCB0byBhbGxvdyBUb2tlblNldHMgdG8gYmUgdXNlZCBhcyBrZXlzXG4gKiBpbiBvYmplY3RzLCBsYXJnZWx5IHRvIGFpZCB0aGUgY29uc3RydWN0aW9uIGFuZCBtaW5pbWlzYXRpb25cbiAqIG9mIGEgVG9rZW5TZXQuIEFzIHN1Y2ggaXQgaXMgbm90IGRlc2lnbmVkIHRvIGJlIGEgaHVtYW5cbiAqIGZyaWVuZGx5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBUb2tlblNldC5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5sdW5yLlRva2VuU2V0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gTk9URTogVXNpbmcgT2JqZWN0LmtleXMgaGVyZSBhcyB0aGlzLmVkZ2VzIGlzIHZlcnkgbGlrZWx5XG4gIC8vIHRvIGVudGVyICdoYXNoLW1vZGUnIHdpdGggbWFueSBrZXlzIGJlaW5nIGFkZGVkXG4gIC8vXG4gIC8vIGF2b2lkaW5nIGEgZm9yLWluIGxvb3AgaGVyZSBhcyBpdCBsZWFkcyB0byB0aGUgZnVuY3Rpb25cbiAgLy8gYmVpbmcgZGUtb3B0aW1pc2VkIChhdCBsZWFzdCBpbiBWOCkuIEZyb20gc29tZSBzaW1wbGVcbiAgLy8gYmVuY2htYXJrcyB0aGUgcGVyZm9ybWFuY2UgaXMgY29tcGFyYWJsZSwgYnV0IGFsbG93aW5nXG4gIC8vIFY4IHRvIG9wdGltaXplIG1heSBtZWFuIGVhc3kgcGVyZm9ybWFuY2Ugd2lucyBpbiB0aGUgZnV0dXJlLlxuXG4gIGlmICh0aGlzLl9zdHIpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RyXG4gIH1cblxuICB2YXIgc3RyID0gdGhpcy5maW5hbCA/ICcxJyA6ICcwJyxcbiAgICAgIGxhYmVscyA9IE9iamVjdC5rZXlzKHRoaXMuZWRnZXMpLnNvcnQoKSxcbiAgICAgIGxlbiA9IGxhYmVscy5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGxhYmVsID0gbGFiZWxzW2ldLFxuICAgICAgICBub2RlID0gdGhpcy5lZGdlc1tsYWJlbF1cblxuICAgIHN0ciA9IHN0ciArIGxhYmVsICsgbm9kZS5pZFxuICB9XG5cbiAgcmV0dXJuIHN0clxufVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgVG9rZW5TZXQgdGhhdCBpcyB0aGUgaW50ZXJzZWN0aW9uIG9mXG4gKiB0aGlzIFRva2VuU2V0IGFuZCB0aGUgcGFzc2VkIFRva2VuU2V0LlxuICpcbiAqIFRoaXMgaW50ZXJzZWN0aW9uIHdpbGwgdGFrZSBpbnRvIGFjY291bnQgYW55IHdpbGRjYXJkc1xuICogY29udGFpbmVkIHdpdGhpbiB0aGUgVG9rZW5TZXQuXG4gKlxuICogQHBhcmFtIHtsdW5yLlRva2VuU2V0fSBiIC0gQW4gb3RoZXIgVG9rZW5TZXQgdG8gaW50ZXJzZWN0IHdpdGguXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlblNldH1cbiAqL1xubHVuci5Ub2tlblNldC5wcm90b3R5cGUuaW50ZXJzZWN0ID0gZnVuY3Rpb24gKGIpIHtcbiAgdmFyIG91dHB1dCA9IG5ldyBsdW5yLlRva2VuU2V0LFxuICAgICAgZnJhbWUgPSB1bmRlZmluZWRcblxuICB2YXIgc3RhY2sgPSBbe1xuICAgIHFOb2RlOiBiLFxuICAgIG91dHB1dDogb3V0cHV0LFxuICAgIG5vZGU6IHRoaXNcbiAgfV1cblxuICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgZnJhbWUgPSBzdGFjay5wb3AoKVxuXG4gICAgLy8gTk9URTogQXMgd2l0aCB0aGUgI3RvU3RyaW5nIG1ldGhvZCwgd2UgYXJlIHVzaW5nXG4gICAgLy8gT2JqZWN0LmtleXMgYW5kIGEgZm9yIGxvb3AgaW5zdGVhZCBvZiBhIGZvci1pbiBsb29wXG4gICAgLy8gYXMgYm90aCBvZiB0aGVzZSBvYmplY3RzIGVudGVyICdoYXNoJyBtb2RlLCBjYXVzaW5nXG4gICAgLy8gdGhlIGZ1bmN0aW9uIHRvIGJlIGRlLW9wdGltaXNlZCBpbiBWOFxuICAgIHZhciBxRWRnZXMgPSBPYmplY3Qua2V5cyhmcmFtZS5xTm9kZS5lZGdlcyksXG4gICAgICAgIHFMZW4gPSBxRWRnZXMubGVuZ3RoLFxuICAgICAgICBuRWRnZXMgPSBPYmplY3Qua2V5cyhmcmFtZS5ub2RlLmVkZ2VzKSxcbiAgICAgICAgbkxlbiA9IG5FZGdlcy5sZW5ndGhcblxuICAgIGZvciAodmFyIHEgPSAwOyBxIDwgcUxlbjsgcSsrKSB7XG4gICAgICB2YXIgcUVkZ2UgPSBxRWRnZXNbcV1cblxuICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBuTGVuOyBuKyspIHtcbiAgICAgICAgdmFyIG5FZGdlID0gbkVkZ2VzW25dXG5cbiAgICAgICAgaWYgKG5FZGdlID09IHFFZGdlIHx8IHFFZGdlID09ICcqJykge1xuICAgICAgICAgIHZhciBub2RlID0gZnJhbWUubm9kZS5lZGdlc1tuRWRnZV0sXG4gICAgICAgICAgICAgIHFOb2RlID0gZnJhbWUucU5vZGUuZWRnZXNbcUVkZ2VdLFxuICAgICAgICAgICAgICBmaW5hbCA9IG5vZGUuZmluYWwgJiYgcU5vZGUuZmluYWwsXG4gICAgICAgICAgICAgIG5leHQgPSB1bmRlZmluZWRcblxuICAgICAgICAgIGlmIChuRWRnZSBpbiBmcmFtZS5vdXRwdXQuZWRnZXMpIHtcbiAgICAgICAgICAgIC8vIGFuIGVkZ2UgYWxyZWFkeSBleGlzdHMgZm9yIHRoaXMgY2hhcmFjdGVyXG4gICAgICAgICAgICAvLyBubyBuZWVkIHRvIGNyZWF0ZSBhIG5ldyBub2RlLCBqdXN0IHNldCB0aGUgZmluYWxpdHlcbiAgICAgICAgICAgIC8vIGJpdCB1bmxlc3MgdGhpcyBub2RlIGlzIGFscmVhZHkgZmluYWxcbiAgICAgICAgICAgIG5leHQgPSBmcmFtZS5vdXRwdXQuZWRnZXNbbkVkZ2VdXG4gICAgICAgICAgICBuZXh0LmZpbmFsID0gbmV4dC5maW5hbCB8fCBmaW5hbFxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vIGVkZ2UgZXhpc3RzIHlldCwgbXVzdCBjcmVhdGUgb25lXG4gICAgICAgICAgICAvLyBzZXQgdGhlIGZpbmFsaXR5IGJpdCBhbmQgaW5zZXJ0IGl0XG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBvdXRwdXRcbiAgICAgICAgICAgIG5leHQgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgICAgICAgbmV4dC5maW5hbCA9IGZpbmFsXG4gICAgICAgICAgICBmcmFtZS5vdXRwdXQuZWRnZXNbbkVkZ2VdID0gbmV4dFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgICAgcU5vZGU6IHFOb2RlLFxuICAgICAgICAgICAgb3V0cHV0OiBuZXh0LFxuICAgICAgICAgICAgbm9kZTogbm9kZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0cHV0XG59XG5sdW5yLlRva2VuU2V0LkJ1aWxkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucHJldmlvdXNXb3JkID0gXCJcIlxuICB0aGlzLnJvb3QgPSBuZXcgbHVuci5Ub2tlblNldFxuICB0aGlzLnVuY2hlY2tlZE5vZGVzID0gW11cbiAgdGhpcy5taW5pbWl6ZWROb2RlcyA9IHt9XG59XG5cbmx1bnIuVG9rZW5TZXQuQnVpbGRlci5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gKHdvcmQpIHtcbiAgdmFyIG5vZGUsXG4gICAgICBjb21tb25QcmVmaXggPSAwXG5cbiAgaWYgKHdvcmQgPCB0aGlzLnByZXZpb3VzV29yZCkge1xuICAgIHRocm93IG5ldyBFcnJvciAoXCJPdXQgb2Ygb3JkZXIgd29yZCBpbnNlcnRpb25cIilcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgd29yZC5sZW5ndGggJiYgaSA8IHRoaXMucHJldmlvdXNXb3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHdvcmRbaV0gIT0gdGhpcy5wcmV2aW91c1dvcmRbaV0pIGJyZWFrXG4gICAgY29tbW9uUHJlZml4KytcbiAgfVxuXG4gIHRoaXMubWluaW1pemUoY29tbW9uUHJlZml4KVxuXG4gIGlmICh0aGlzLnVuY2hlY2tlZE5vZGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgbm9kZSA9IHRoaXMucm9vdFxuICB9IGVsc2Uge1xuICAgIG5vZGUgPSB0aGlzLnVuY2hlY2tlZE5vZGVzW3RoaXMudW5jaGVja2VkTm9kZXMubGVuZ3RoIC0gMV0uY2hpbGRcbiAgfVxuXG4gIGZvciAodmFyIGkgPSBjb21tb25QcmVmaXg7IGkgPCB3b3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG5leHROb2RlID0gbmV3IGx1bnIuVG9rZW5TZXQsXG4gICAgICAgIGNoYXIgPSB3b3JkW2ldXG5cbiAgICBub2RlLmVkZ2VzW2NoYXJdID0gbmV4dE5vZGVcblxuICAgIHRoaXMudW5jaGVja2VkTm9kZXMucHVzaCh7XG4gICAgICBwYXJlbnQ6IG5vZGUsXG4gICAgICBjaGFyOiBjaGFyLFxuICAgICAgY2hpbGQ6IG5leHROb2RlXG4gICAgfSlcblxuICAgIG5vZGUgPSBuZXh0Tm9kZVxuICB9XG5cbiAgbm9kZS5maW5hbCA9IHRydWVcbiAgdGhpcy5wcmV2aW91c1dvcmQgPSB3b3JkXG59XG5cbmx1bnIuVG9rZW5TZXQuQnVpbGRlci5wcm90b3R5cGUuZmluaXNoID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm1pbmltaXplKDApXG59XG5cbmx1bnIuVG9rZW5TZXQuQnVpbGRlci5wcm90b3R5cGUubWluaW1pemUgPSBmdW5jdGlvbiAoZG93blRvKSB7XG4gIGZvciAodmFyIGkgPSB0aGlzLnVuY2hlY2tlZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gZG93blRvOyBpLS0pIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMudW5jaGVja2VkTm9kZXNbaV0sXG4gICAgICAgIGNoaWxkS2V5ID0gbm9kZS5jaGlsZC50b1N0cmluZygpXG5cbiAgICBpZiAoY2hpbGRLZXkgaW4gdGhpcy5taW5pbWl6ZWROb2Rlcykge1xuICAgICAgbm9kZS5wYXJlbnQuZWRnZXNbbm9kZS5jaGFyXSA9IHRoaXMubWluaW1pemVkTm9kZXNbY2hpbGRLZXldXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENhY2hlIHRoZSBrZXkgZm9yIHRoaXMgbm9kZSBzaW5jZVxuICAgICAgLy8gd2Uga25vdyBpdCBjYW4ndCBjaGFuZ2UgYW55bW9yZVxuICAgICAgbm9kZS5jaGlsZC5fc3RyID0gY2hpbGRLZXlcblxuICAgICAgdGhpcy5taW5pbWl6ZWROb2Rlc1tjaGlsZEtleV0gPSBub2RlLmNoaWxkXG4gICAgfVxuXG4gICAgdGhpcy51bmNoZWNrZWROb2Rlcy5wb3AoKVxuICB9XG59XG4vKiFcbiAqIGx1bnIuSW5kZXhcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIEFuIGluZGV4IGNvbnRhaW5zIHRoZSBidWlsdCBpbmRleCBvZiBhbGwgZG9jdW1lbnRzIGFuZCBwcm92aWRlcyBhIHF1ZXJ5IGludGVyZmFjZVxuICogdG8gdGhlIGluZGV4LlxuICpcbiAqIFVzdWFsbHkgaW5zdGFuY2VzIG9mIGx1bnIuSW5kZXggd2lsbCBub3QgYmUgY3JlYXRlZCB1c2luZyB0aGlzIGNvbnN0cnVjdG9yLCBpbnN0ZWFkXG4gKiBsdW5yLkJ1aWxkZXIgc2hvdWxkIGJlIHVzZWQgdG8gY29uc3RydWN0IG5ldyBpbmRleGVzLCBvciBsdW5yLkluZGV4LmxvYWQgc2hvdWxkIGJlXG4gKiB1c2VkIHRvIGxvYWQgcHJldmlvdXNseSBidWlsdCBhbmQgc2VyaWFsaXplZCBpbmRleGVzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJzIC0gVGhlIGF0dHJpYnV0ZXMgb2YgdGhlIGJ1aWx0IHNlYXJjaCBpbmRleC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRycy5pbnZlcnRlZEluZGV4IC0gQW4gaW5kZXggb2YgdGVybS9maWVsZCB0byBkb2N1bWVudCByZWZlcmVuY2UuXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGx1bnIuVmVjdG9yPn0gYXR0cnMuZmllbGRWZWN0b3JzIC0gRmllbGQgdmVjdG9yc1xuICogQHBhcmFtIHtsdW5yLlRva2VuU2V0fSBhdHRycy50b2tlblNldCAtIEFuIHNldCBvZiBhbGwgY29ycHVzIHRva2Vucy5cbiAqIEBwYXJhbSB7c3RyaW5nW119IGF0dHJzLmZpZWxkcyAtIFRoZSBuYW1lcyBvZiBpbmRleGVkIGRvY3VtZW50IGZpZWxkcy5cbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZX0gYXR0cnMucGlwZWxpbmUgLSBUaGUgcGlwZWxpbmUgdG8gdXNlIGZvciBzZWFyY2ggdGVybXMuXG4gKi9cbmx1bnIuSW5kZXggPSBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgdGhpcy5pbnZlcnRlZEluZGV4ID0gYXR0cnMuaW52ZXJ0ZWRJbmRleFxuICB0aGlzLmZpZWxkVmVjdG9ycyA9IGF0dHJzLmZpZWxkVmVjdG9yc1xuICB0aGlzLnRva2VuU2V0ID0gYXR0cnMudG9rZW5TZXRcbiAgdGhpcy5maWVsZHMgPSBhdHRycy5maWVsZHNcbiAgdGhpcy5waXBlbGluZSA9IGF0dHJzLnBpcGVsaW5lXG59XG5cbi8qKlxuICogQSByZXN1bHQgY29udGFpbnMgZGV0YWlscyBvZiBhIGRvY3VtZW50IG1hdGNoaW5nIGEgc2VhcmNoIHF1ZXJ5LlxuICogQHR5cGVkZWYge09iamVjdH0gbHVuci5JbmRleH5SZXN1bHRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSByZWYgLSBUaGUgcmVmZXJlbmNlIG9mIHRoZSBkb2N1bWVudCB0aGlzIHJlc3VsdCByZXByZXNlbnRzLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNjb3JlIC0gQSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIHJlcHJlc2VudGluZyBob3cgc2ltaWxhciB0aGlzIGRvY3VtZW50IGlzIHRvIHRoZSBxdWVyeS5cbiAqIEBwcm9wZXJ0eSB7bHVuci5NYXRjaERhdGF9IG1hdGNoRGF0YSAtIENvbnRhaW5zIG1ldGFkYXRhIGFib3V0IHRoaXMgbWF0Y2ggaW5jbHVkaW5nIHdoaWNoIHRlcm0ocykgY2F1c2VkIHRoZSBtYXRjaC5cbiAqL1xuXG4vKipcbiAqIEFsdGhvdWdoIGx1bnIgcHJvdmlkZXMgdGhlIGFiaWxpdHkgdG8gY3JlYXRlIHF1ZXJpZXMgdXNpbmcgbHVuci5RdWVyeSwgaXQgYWxzbyBwcm92aWRlcyBhIHNpbXBsZVxuICogcXVlcnkgbGFuZ3VhZ2Ugd2hpY2ggaXRzZWxmIGlzIHBhcnNlZCBpbnRvIGFuIGluc3RhbmNlIG9mIGx1bnIuUXVlcnkuXG4gKlxuICogRm9yIHByb2dyYW1tYXRpY2FsbHkgYnVpbGRpbmcgcXVlcmllcyBpdCBpcyBhZHZpc2VkIHRvIGRpcmVjdGx5IHVzZSBsdW5yLlF1ZXJ5LCB0aGUgcXVlcnkgbGFuZ3VhZ2VcbiAqIGlzIGJlc3QgdXNlZCBmb3IgaHVtYW4gZW50ZXJlZCB0ZXh0IHJhdGhlciB0aGFuIHByb2dyYW0gZ2VuZXJhdGVkIHRleHQuXG4gKlxuICogQXQgaXRzIHNpbXBsZXN0IHF1ZXJpZXMgY2FuIGp1c3QgYmUgYSBzaW5nbGUgdGVybSwgZS5nLiBgaGVsbG9gLCBtdWx0aXBsZSB0ZXJtcyBhcmUgYWxzbyBzdXBwb3J0ZWRcbiAqIGFuZCB3aWxsIGJlIGNvbWJpbmVkIHdpdGggT1IsIGUuZyBgaGVsbG8gd29ybGRgIHdpbGwgbWF0Y2ggZG9jdW1lbnRzIHRoYXQgY29udGFpbiBlaXRoZXIgJ2hlbGxvJ1xuICogb3IgJ3dvcmxkJywgdGhvdWdoIHRob3NlIHRoYXQgY29udGFpbiBib3RoIHdpbGwgcmFuayBoaWdoZXIgaW4gdGhlIHJlc3VsdHMuXG4gKlxuICogV2lsZGNhcmRzIGNhbiBiZSBpbmNsdWRlZCBpbiB0ZXJtcyB0byBtYXRjaCBvbmUgb3IgbW9yZSB1bnNwZWNpZmllZCBjaGFyYWN0ZXJzLCB0aGVzZSB3aWxkY2FyZHMgY2FuXG4gKiBiZSBpbnNlcnRlZCBhbnl3aGVyZSB3aXRoaW4gdGhlIHRlcm0sIGFuZCBtb3JlIHRoYW4gb25lIHdpbGRjYXJkIGNhbiBleGlzdCBpbiBhIHNpbmdsZSB0ZXJtLiBBZGRpbmdcbiAqIHdpbGRjYXJkcyB3aWxsIGluY3JlYXNlIHRoZSBudW1iZXIgb2YgZG9jdW1lbnRzIHRoYXQgd2lsbCBiZSBmb3VuZCBidXQgY2FuIGFsc28gaGF2ZSBhIG5lZ2F0aXZlXG4gKiBpbXBhY3Qgb24gcXVlcnkgcGVyZm9ybWFuY2UsIGVzcGVjaWFsbHkgd2l0aCB3aWxkY2FyZHMgYXQgdGhlIGJlZ2lubmluZyBvZiBhIHRlcm0uXG4gKlxuICogVGVybXMgY2FuIGJlIHJlc3RyaWN0ZWQgdG8gc3BlY2lmaWMgZmllbGRzLCBlLmcuIGB0aXRsZTpoZWxsb2AsIG9ubHkgZG9jdW1lbnRzIHdpdGggdGhlIHRlcm1cbiAqIGhlbGxvIGluIHRoZSB0aXRsZSBmaWVsZCB3aWxsIG1hdGNoIHRoaXMgcXVlcnkuIFVzaW5nIGEgZmllbGQgbm90IHByZXNlbnQgaW4gdGhlIGluZGV4IHdpbGwgbGVhZFxuICogdG8gYW4gZXJyb3IgYmVpbmcgdGhyb3duLlxuICpcbiAqIE1vZGlmaWVycyBjYW4gYWxzbyBiZSBhZGRlZCB0byB0ZXJtcywgbHVuciBzdXBwb3J0cyBlZGl0IGRpc3RhbmNlIGFuZCBib29zdCBtb2RpZmllcnMgb24gdGVybXMuIEEgdGVybVxuICogYm9vc3Qgd2lsbCBtYWtlIGRvY3VtZW50cyBtYXRjaGluZyB0aGF0IHRlcm0gc2NvcmUgaGlnaGVyLCBlLmcuIGBmb29eNWAuIEVkaXQgZGlzdGFuY2UgaXMgYWxzbyBzdXBwb3J0ZWRcbiAqIHRvIHByb3ZpZGUgZnV6enkgbWF0Y2hpbmcsIGUuZy4gJ2hlbGxvfjInIHdpbGwgbWF0Y2ggZG9jdW1lbnRzIHdpdGggaGVsbG8gd2l0aCBhbiBlZGl0IGRpc3RhbmNlIG9mIDIuXG4gKiBBdm9pZCBsYXJnZSB2YWx1ZXMgZm9yIGVkaXQgZGlzdGFuY2UgdG8gaW1wcm92ZSBxdWVyeSBwZXJmb3JtYW5jZS5cbiAqXG4gKiBFYWNoIHRlcm0gYWxzbyBzdXBwb3J0cyBhIHByZXNlbmNlIG1vZGlmaWVyLiBCeSBkZWZhdWx0IGEgdGVybSdzIHByZXNlbmNlIGluIGRvY3VtZW50IGlzIG9wdGlvbmFsLCBob3dldmVyXG4gKiB0aGlzIGNhbiBiZSBjaGFuZ2VkIHRvIGVpdGhlciByZXF1aXJlZCBvciBwcm9oaWJpdGVkLiBGb3IgYSB0ZXJtJ3MgcHJlc2VuY2UgdG8gYmUgcmVxdWlyZWQgaW4gYSBkb2N1bWVudCB0aGVcbiAqIHRlcm0gc2hvdWxkIGJlIHByZWZpeGVkIHdpdGggYSAnKycsIGUuZy4gYCtmb28gYmFyYCBpcyBhIHNlYXJjaCBmb3IgZG9jdW1lbnRzIHRoYXQgbXVzdCBjb250YWluICdmb28nIGFuZFxuICogb3B0aW9uYWxseSBjb250YWluICdiYXInLiBDb252ZXJzZWx5IGEgbGVhZGluZyAnLScgc2V0cyB0aGUgdGVybXMgcHJlc2VuY2UgdG8gcHJvaGliaXRlZCwgaS5lLiBpdCBtdXN0IG5vdFxuICogYXBwZWFyIGluIGEgZG9jdW1lbnQsIGUuZy4gYC1mb28gYmFyYCBpcyBhIHNlYXJjaCBmb3IgZG9jdW1lbnRzIHRoYXQgZG8gbm90IGNvbnRhaW4gJ2ZvbycgYnV0IG1heSBjb250YWluICdiYXInLlxuICpcbiAqIFRvIGVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnMgdGhlIGJhY2tzbGFzaCBjaGFyYWN0ZXIgJ1xcJyBjYW4gYmUgdXNlZCwgdGhpcyBhbGxvd3Mgc2VhcmNoZXMgdG8gaW5jbHVkZVxuICogY2hhcmFjdGVycyB0aGF0IHdvdWxkIG5vcm1hbGx5IGJlIGNvbnNpZGVyZWQgbW9kaWZpZXJzLCBlLmcuIGBmb29cXH4yYCB3aWxsIHNlYXJjaCBmb3IgYSB0ZXJtIFwiZm9vfjJcIiBpbnN0ZWFkXG4gKiBvZiBhdHRlbXB0aW5nIHRvIGFwcGx5IGEgYm9vc3Qgb2YgMiB0byB0aGUgc2VhcmNoIHRlcm0gXCJmb29cIi5cbiAqXG4gKiBAdHlwZWRlZiB7c3RyaW5nfSBsdW5yLkluZGV4flF1ZXJ5U3RyaW5nXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5TaW1wbGUgc2luZ2xlIHRlcm0gcXVlcnk8L2NhcHRpb24+XG4gKiBoZWxsb1xuICogQGV4YW1wbGUgPGNhcHRpb24+TXVsdGlwbGUgdGVybSBxdWVyeTwvY2FwdGlvbj5cbiAqIGhlbGxvIHdvcmxkXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj50ZXJtIHNjb3BlZCB0byBhIGZpZWxkPC9jYXB0aW9uPlxuICogdGl0bGU6aGVsbG9cbiAqIEBleGFtcGxlIDxjYXB0aW9uPnRlcm0gd2l0aCBhIGJvb3N0IG9mIDEwPC9jYXB0aW9uPlxuICogaGVsbG9eMTBcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnRlcm0gd2l0aCBhbiBlZGl0IGRpc3RhbmNlIG9mIDI8L2NhcHRpb24+XG4gKiBoZWxsb34yXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj50ZXJtcyB3aXRoIHByZXNlbmNlIG1vZGlmaWVyczwvY2FwdGlvbj5cbiAqIC1mb28gK2JhciBiYXpcbiAqL1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgc2VhcmNoIGFnYWluc3QgdGhlIGluZGV4IHVzaW5nIGx1bnIgcXVlcnkgc3ludGF4LlxuICpcbiAqIFJlc3VsdHMgd2lsbCBiZSByZXR1cm5lZCBzb3J0ZWQgYnkgdGhlaXIgc2NvcmUsIHRoZSBtb3N0IHJlbGV2YW50IHJlc3VsdHNcbiAqIHdpbGwgYmUgcmV0dXJuZWQgZmlyc3QuICBGb3IgZGV0YWlscyBvbiBob3cgdGhlIHNjb3JlIGlzIGNhbGN1bGF0ZWQsIHBsZWFzZSBzZWVcbiAqIHRoZSB7QGxpbmsgaHR0cHM6Ly9sdW5yanMuY29tL2d1aWRlcy9zZWFyY2hpbmcuaHRtbCNzY29yaW5nfGd1aWRlfS5cbiAqXG4gKiBGb3IgbW9yZSBwcm9ncmFtbWF0aWMgcXVlcnlpbmcgdXNlIGx1bnIuSW5kZXgjcXVlcnkuXG4gKlxuICogQHBhcmFtIHtsdW5yLkluZGV4flF1ZXJ5U3RyaW5nfSBxdWVyeVN0cmluZyAtIEEgc3RyaW5nIGNvbnRhaW5pbmcgYSBsdW5yIHF1ZXJ5LlxuICogQHRocm93cyB7bHVuci5RdWVyeVBhcnNlRXJyb3J9IElmIHRoZSBwYXNzZWQgcXVlcnkgc3RyaW5nIGNhbm5vdCBiZSBwYXJzZWQuXG4gKiBAcmV0dXJucyB7bHVuci5JbmRleH5SZXN1bHRbXX1cbiAqL1xubHVuci5JbmRleC5wcm90b3R5cGUuc2VhcmNoID0gZnVuY3Rpb24gKHF1ZXJ5U3RyaW5nKSB7XG4gIHJldHVybiB0aGlzLnF1ZXJ5KGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIHZhciBwYXJzZXIgPSBuZXcgbHVuci5RdWVyeVBhcnNlcihxdWVyeVN0cmluZywgcXVlcnkpXG4gICAgcGFyc2VyLnBhcnNlKClcbiAgfSlcbn1cblxuLyoqXG4gKiBBIHF1ZXJ5IGJ1aWxkZXIgY2FsbGJhY2sgcHJvdmlkZXMgYSBxdWVyeSBvYmplY3QgdG8gYmUgdXNlZCB0byBleHByZXNzXG4gKiB0aGUgcXVlcnkgdG8gcGVyZm9ybSBvbiB0aGUgaW5kZXguXG4gKlxuICogQGNhbGxiYWNrIGx1bnIuSW5kZXh+cXVlcnlCdWlsZGVyXG4gKiBAcGFyYW0ge2x1bnIuUXVlcnl9IHF1ZXJ5IC0gVGhlIHF1ZXJ5IG9iamVjdCB0byBidWlsZCB1cC5cbiAqIEB0aGlzIGx1bnIuUXVlcnlcbiAqL1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgcXVlcnkgYWdhaW5zdCB0aGUgaW5kZXggdXNpbmcgdGhlIHlpZWxkZWQgbHVuci5RdWVyeSBvYmplY3QuXG4gKlxuICogSWYgcGVyZm9ybWluZyBwcm9ncmFtbWF0aWMgcXVlcmllcyBhZ2FpbnN0IHRoZSBpbmRleCwgdGhpcyBtZXRob2QgaXMgcHJlZmVycmVkXG4gKiBvdmVyIGx1bnIuSW5kZXgjc2VhcmNoIHNvIGFzIHRvIGF2b2lkIHRoZSBhZGRpdGlvbmFsIHF1ZXJ5IHBhcnNpbmcgb3ZlcmhlYWQuXG4gKlxuICogQSBxdWVyeSBvYmplY3QgaXMgeWllbGRlZCB0byB0aGUgc3VwcGxpZWQgZnVuY3Rpb24gd2hpY2ggc2hvdWxkIGJlIHVzZWQgdG9cbiAqIGV4cHJlc3MgdGhlIHF1ZXJ5IHRvIGJlIHJ1biBhZ2FpbnN0IHRoZSBpbmRleC5cbiAqXG4gKiBOb3RlIHRoYXQgYWx0aG91Z2ggdGhpcyBmdW5jdGlvbiB0YWtlcyBhIGNhbGxiYWNrIHBhcmFtZXRlciBpdCBpcyBfbm90XyBhblxuICogYXN5bmNocm9ub3VzIG9wZXJhdGlvbiwgdGhlIGNhbGxiYWNrIGlzIGp1c3QgeWllbGRlZCBhIHF1ZXJ5IG9iamVjdCB0byBiZVxuICogY3VzdG9taXplZC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuSW5kZXh+cXVlcnlCdWlsZGVyfSBmbiAtIEEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGJ1aWxkIHRoZSBxdWVyeS5cbiAqIEByZXR1cm5zIHtsdW5yLkluZGV4flJlc3VsdFtdfVxuICovXG5sdW5yLkluZGV4LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChmbikge1xuICAvLyBmb3IgZWFjaCBxdWVyeSBjbGF1c2VcbiAgLy8gKiBwcm9jZXNzIHRlcm1zXG4gIC8vICogZXhwYW5kIHRlcm1zIGZyb20gdG9rZW4gc2V0XG4gIC8vICogZmluZCBtYXRjaGluZyBkb2N1bWVudHMgYW5kIG1ldGFkYXRhXG4gIC8vICogZ2V0IGRvY3VtZW50IHZlY3RvcnNcbiAgLy8gKiBzY29yZSBkb2N1bWVudHNcblxuICB2YXIgcXVlcnkgPSBuZXcgbHVuci5RdWVyeSh0aGlzLmZpZWxkcyksXG4gICAgICBtYXRjaGluZ0ZpZWxkcyA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICBxdWVyeVZlY3RvcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgdGVybUZpZWxkQ2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgcmVxdWlyZWRNYXRjaGVzID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIHByb2hpYml0ZWRNYXRjaGVzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIC8qXG4gICAqIFRvIHN1cHBvcnQgZmllbGQgbGV2ZWwgYm9vc3RzIGEgcXVlcnkgdmVjdG9yIGlzIGNyZWF0ZWQgcGVyXG4gICAqIGZpZWxkLiBBbiBlbXB0eSB2ZWN0b3IgaXMgZWFnZXJseSBjcmVhdGVkIHRvIHN1cHBvcnQgbmVnYXRlZFxuICAgKiBxdWVyaWVzLlxuICAgKi9cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgIHF1ZXJ5VmVjdG9yc1t0aGlzLmZpZWxkc1tpXV0gPSBuZXcgbHVuci5WZWN0b3JcbiAgfVxuXG4gIGZuLmNhbGwocXVlcnksIHF1ZXJ5KVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcXVlcnkuY2xhdXNlcy5sZW5ndGg7IGkrKykge1xuICAgIC8qXG4gICAgICogVW5sZXNzIHRoZSBwaXBlbGluZSBoYXMgYmVlbiBkaXNhYmxlZCBmb3IgdGhpcyB0ZXJtLCB3aGljaCBpc1xuICAgICAqIHRoZSBjYXNlIGZvciB0ZXJtcyB3aXRoIHdpbGRjYXJkcywgd2UgbmVlZCB0byBwYXNzIHRoZSBjbGF1c2VcbiAgICAgKiB0ZXJtIHRocm91Z2ggdGhlIHNlYXJjaCBwaXBlbGluZS4gQSBwaXBlbGluZSByZXR1cm5zIGFuIGFycmF5XG4gICAgICogb2YgcHJvY2Vzc2VkIHRlcm1zLiBQaXBlbGluZSBmdW5jdGlvbnMgbWF5IGV4cGFuZCB0aGUgcGFzc2VkXG4gICAgICogdGVybSwgd2hpY2ggbWVhbnMgd2UgbWF5IGVuZCB1cCBwZXJmb3JtaW5nIG11bHRpcGxlIGluZGV4IGxvb2t1cHNcbiAgICAgKiBmb3IgYSBzaW5nbGUgcXVlcnkgdGVybS5cbiAgICAgKi9cbiAgICB2YXIgY2xhdXNlID0gcXVlcnkuY2xhdXNlc1tpXSxcbiAgICAgICAgdGVybXMgPSBudWxsLFxuICAgICAgICBjbGF1c2VNYXRjaGVzID0gbHVuci5TZXQuY29tcGxldGVcblxuICAgIGlmIChjbGF1c2UudXNlUGlwZWxpbmUpIHtcbiAgICAgIHRlcm1zID0gdGhpcy5waXBlbGluZS5ydW5TdHJpbmcoY2xhdXNlLnRlcm0sIHtcbiAgICAgICAgZmllbGRzOiBjbGF1c2UuZmllbGRzXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0ZXJtcyA9IFtjbGF1c2UudGVybV1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBtID0gMDsgbSA8IHRlcm1zLmxlbmd0aDsgbSsrKSB7XG4gICAgICB2YXIgdGVybSA9IHRlcm1zW21dXG5cbiAgICAgIC8qXG4gICAgICAgKiBFYWNoIHRlcm0gcmV0dXJuZWQgZnJvbSB0aGUgcGlwZWxpbmUgbmVlZHMgdG8gdXNlIHRoZSBzYW1lIHF1ZXJ5XG4gICAgICAgKiBjbGF1c2Ugb2JqZWN0LCBlLmcuIHRoZSBzYW1lIGJvb3N0IGFuZCBvciBlZGl0IGRpc3RhbmNlLiBUaGVcbiAgICAgICAqIHNpbXBsZXN0IHdheSB0byBkbyB0aGlzIGlzIHRvIHJlLXVzZSB0aGUgY2xhdXNlIG9iamVjdCBidXQgbXV0YXRlXG4gICAgICAgKiBpdHMgdGVybSBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgY2xhdXNlLnRlcm0gPSB0ZXJtXG5cbiAgICAgIC8qXG4gICAgICAgKiBGcm9tIHRoZSB0ZXJtIGluIHRoZSBjbGF1c2Ugd2UgY3JlYXRlIGEgdG9rZW4gc2V0IHdoaWNoIHdpbGwgdGhlblxuICAgICAgICogYmUgdXNlZCB0byBpbnRlcnNlY3QgdGhlIGluZGV4ZXMgdG9rZW4gc2V0IHRvIGdldCBhIGxpc3Qgb2YgdGVybXNcbiAgICAgICAqIHRvIGxvb2t1cCBpbiB0aGUgaW52ZXJ0ZWQgaW5kZXhcbiAgICAgICAqL1xuICAgICAgdmFyIHRlcm1Ub2tlblNldCA9IGx1bnIuVG9rZW5TZXQuZnJvbUNsYXVzZShjbGF1c2UpLFxuICAgICAgICAgIGV4cGFuZGVkVGVybXMgPSB0aGlzLnRva2VuU2V0LmludGVyc2VjdCh0ZXJtVG9rZW5TZXQpLnRvQXJyYXkoKVxuXG4gICAgICAvKlxuICAgICAgICogSWYgYSB0ZXJtIG1hcmtlZCBhcyByZXF1aXJlZCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgdG9rZW5TZXQgaXQgaXNcbiAgICAgICAqIGltcG9zc2libGUgZm9yIHRoZSBzZWFyY2ggdG8gcmV0dXJuIGFueSBtYXRjaGVzLiBXZSBzZXQgYWxsIHRoZSBmaWVsZFxuICAgICAgICogc2NvcGVkIHJlcXVpcmVkIG1hdGNoZXMgc2V0IHRvIGVtcHR5IGFuZCBzdG9wIGV4YW1pbmluZyBhbnkgZnVydGhlclxuICAgICAgICogY2xhdXNlcy5cbiAgICAgICAqL1xuICAgICAgaWYgKGV4cGFuZGVkVGVybXMubGVuZ3RoID09PSAwICYmIGNsYXVzZS5wcmVzZW5jZSA9PT0gbHVuci5RdWVyeS5wcmVzZW5jZS5SRVFVSVJFRCkge1xuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGNsYXVzZS5maWVsZHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICB2YXIgZmllbGQgPSBjbGF1c2UuZmllbGRzW2tdXG4gICAgICAgICAgcmVxdWlyZWRNYXRjaGVzW2ZpZWxkXSA9IGx1bnIuU2V0LmVtcHR5XG4gICAgICAgIH1cblxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGV4cGFuZGVkVGVybXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgLypcbiAgICAgICAgICogRm9yIGVhY2ggdGVybSBnZXQgdGhlIHBvc3RpbmcgYW5kIHRlcm1JbmRleCwgdGhpcyBpcyByZXF1aXJlZCBmb3JcbiAgICAgICAgICogYnVpbGRpbmcgdGhlIHF1ZXJ5IHZlY3Rvci5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBleHBhbmRlZFRlcm0gPSBleHBhbmRlZFRlcm1zW2pdLFxuICAgICAgICAgICAgcG9zdGluZyA9IHRoaXMuaW52ZXJ0ZWRJbmRleFtleHBhbmRlZFRlcm1dLFxuICAgICAgICAgICAgdGVybUluZGV4ID0gcG9zdGluZy5faW5kZXhcblxuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGNsYXVzZS5maWVsZHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAvKlxuICAgICAgICAgICAqIEZvciBlYWNoIGZpZWxkIHRoYXQgdGhpcyBxdWVyeSB0ZXJtIGlzIHNjb3BlZCBieSAoYnkgZGVmYXVsdFxuICAgICAgICAgICAqIGFsbCBmaWVsZHMgYXJlIGluIHNjb3BlKSB3ZSBuZWVkIHRvIGdldCBhbGwgdGhlIGRvY3VtZW50IHJlZnNcbiAgICAgICAgICAgKiB0aGF0IGhhdmUgdGhpcyB0ZXJtIGluIHRoYXQgZmllbGQuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBUaGUgcG9zdGluZyBpcyB0aGUgZW50cnkgaW4gdGhlIGludmVydGVkSW5kZXggZm9yIHRoZSBtYXRjaGluZ1xuICAgICAgICAgICAqIHRlcm0gZnJvbSBhYm92ZS5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICB2YXIgZmllbGQgPSBjbGF1c2UuZmllbGRzW2tdLFxuICAgICAgICAgICAgICBmaWVsZFBvc3RpbmcgPSBwb3N0aW5nW2ZpZWxkXSxcbiAgICAgICAgICAgICAgbWF0Y2hpbmdEb2N1bWVudFJlZnMgPSBPYmplY3Qua2V5cyhmaWVsZFBvc3RpbmcpLFxuICAgICAgICAgICAgICB0ZXJtRmllbGQgPSBleHBhbmRlZFRlcm0gKyBcIi9cIiArIGZpZWxkLFxuICAgICAgICAgICAgICBtYXRjaGluZ0RvY3VtZW50c1NldCA9IG5ldyBsdW5yLlNldChtYXRjaGluZ0RvY3VtZW50UmVmcylcblxuICAgICAgICAgIC8qXG4gICAgICAgICAgICogaWYgdGhlIHByZXNlbmNlIG9mIHRoaXMgdGVybSBpcyByZXF1aXJlZCBlbnN1cmUgdGhhdCB0aGUgbWF0Y2hpbmdcbiAgICAgICAgICAgKiBkb2N1bWVudHMgYXJlIGFkZGVkIHRvIHRoZSBzZXQgb2YgcmVxdWlyZWQgbWF0Y2hlcyBmb3IgdGhpcyBjbGF1c2UuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAoY2xhdXNlLnByZXNlbmNlID09IGx1bnIuUXVlcnkucHJlc2VuY2UuUkVRVUlSRUQpIHtcbiAgICAgICAgICAgIGNsYXVzZU1hdGNoZXMgPSBjbGF1c2VNYXRjaGVzLnVuaW9uKG1hdGNoaW5nRG9jdW1lbnRzU2V0KVxuXG4gICAgICAgICAgICBpZiAocmVxdWlyZWRNYXRjaGVzW2ZpZWxkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJlcXVpcmVkTWF0Y2hlc1tmaWVsZF0gPSBsdW5yLlNldC5jb21wbGV0ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qXG4gICAgICAgICAgICogaWYgdGhlIHByZXNlbmNlIG9mIHRoaXMgdGVybSBpcyBwcm9oaWJpdGVkIGVuc3VyZSB0aGF0IHRoZSBtYXRjaGluZ1xuICAgICAgICAgICAqIGRvY3VtZW50cyBhcmUgYWRkZWQgdG8gdGhlIHNldCBvZiBwcm9oaWJpdGVkIG1hdGNoZXMgZm9yIHRoaXMgZmllbGQsXG4gICAgICAgICAgICogY3JlYXRpbmcgdGhhdCBzZXQgaWYgaXQgZG9lcyBub3QgeWV0IGV4aXN0LlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmIChjbGF1c2UucHJlc2VuY2UgPT0gbHVuci5RdWVyeS5wcmVzZW5jZS5QUk9ISUJJVEVEKSB7XG4gICAgICAgICAgICBpZiAocHJvaGliaXRlZE1hdGNoZXNbZmllbGRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcHJvaGliaXRlZE1hdGNoZXNbZmllbGRdID0gbHVuci5TZXQuZW1wdHlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvaGliaXRlZE1hdGNoZXNbZmllbGRdID0gcHJvaGliaXRlZE1hdGNoZXNbZmllbGRdLnVuaW9uKG1hdGNoaW5nRG9jdW1lbnRzU2V0KVxuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICogUHJvaGliaXRlZCBtYXRjaGVzIHNob3VsZCBub3QgYmUgcGFydCBvZiB0aGUgcXVlcnkgdmVjdG9yIHVzZWQgZm9yXG4gICAgICAgICAgICAgKiBzaW1pbGFyaXR5IHNjb3JpbmcgYW5kIG5vIG1ldGFkYXRhIHNob3VsZCBiZSBleHRyYWN0ZWQgc28gd2UgY29udGludWVcbiAgICAgICAgICAgICAqIHRvIHRoZSBuZXh0IGZpZWxkXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBUaGUgcXVlcnkgZmllbGQgdmVjdG9yIGlzIHBvcHVsYXRlZCB1c2luZyB0aGUgdGVybUluZGV4IGZvdW5kIGZvclxuICAgICAgICAgICAqIHRoZSB0ZXJtIGFuZCBhIHVuaXQgdmFsdWUgd2l0aCB0aGUgYXBwcm9wcmlhdGUgYm9vc3QgYXBwbGllZC5cbiAgICAgICAgICAgKiBVc2luZyB1cHNlcnQgYmVjYXVzZSB0aGVyZSBjb3VsZCBhbHJlYWR5IGJlIGFuIGVudHJ5IGluIHRoZSB2ZWN0b3JcbiAgICAgICAgICAgKiBmb3IgdGhlIHRlcm0gd2UgYXJlIHdvcmtpbmcgd2l0aC4gSW4gdGhhdCBjYXNlIHdlIGp1c3QgYWRkIHRoZSBzY29yZXNcbiAgICAgICAgICAgKiB0b2dldGhlci5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBxdWVyeVZlY3RvcnNbZmllbGRdLnVwc2VydCh0ZXJtSW5kZXgsIGNsYXVzZS5ib29zdCwgZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgKyBiIH0pXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJZiB3ZSd2ZSBhbHJlYWR5IHNlZW4gdGhpcyB0ZXJtLCBmaWVsZCBjb21ibyB0aGVuIHdlJ3ZlIGFscmVhZHkgY29sbGVjdGVkXG4gICAgICAgICAgICogdGhlIG1hdGNoaW5nIGRvY3VtZW50cyBhbmQgbWV0YWRhdGEsIG5vIG5lZWQgdG8gZ28gdGhyb3VnaCBhbGwgdGhhdCBhZ2FpblxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmICh0ZXJtRmllbGRDYWNoZVt0ZXJtRmllbGRdKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAodmFyIGwgPSAwOyBsIDwgbWF0Y2hpbmdEb2N1bWVudFJlZnMubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgKiBBbGwgbWV0YWRhdGEgZm9yIHRoaXMgdGVybS9maWVsZC9kb2N1bWVudCB0cmlwbGVcbiAgICAgICAgICAgICAqIGFyZSB0aGVuIGV4dHJhY3RlZCBhbmQgY29sbGVjdGVkIGludG8gYW4gaW5zdGFuY2VcbiAgICAgICAgICAgICAqIG9mIGx1bnIuTWF0Y2hEYXRhIHJlYWR5IHRvIGJlIHJldHVybmVkIGluIHRoZSBxdWVyeVxuICAgICAgICAgICAgICogcmVzdWx0c1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIgbWF0Y2hpbmdEb2N1bWVudFJlZiA9IG1hdGNoaW5nRG9jdW1lbnRSZWZzW2xdLFxuICAgICAgICAgICAgICAgIG1hdGNoaW5nRmllbGRSZWYgPSBuZXcgbHVuci5GaWVsZFJlZiAobWF0Y2hpbmdEb2N1bWVudFJlZiwgZmllbGQpLFxuICAgICAgICAgICAgICAgIG1ldGFkYXRhID0gZmllbGRQb3N0aW5nW21hdGNoaW5nRG9jdW1lbnRSZWZdLFxuICAgICAgICAgICAgICAgIGZpZWxkTWF0Y2hcblxuICAgICAgICAgICAgaWYgKChmaWVsZE1hdGNoID0gbWF0Y2hpbmdGaWVsZHNbbWF0Y2hpbmdGaWVsZFJlZl0pID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbWF0Y2hpbmdGaWVsZHNbbWF0Y2hpbmdGaWVsZFJlZl0gPSBuZXcgbHVuci5NYXRjaERhdGEgKGV4cGFuZGVkVGVybSwgZmllbGQsIG1ldGFkYXRhKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZmllbGRNYXRjaC5hZGQoZXhwYW5kZWRUZXJtLCBmaWVsZCwgbWV0YWRhdGEpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0ZXJtRmllbGRDYWNoZVt0ZXJtRmllbGRdID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIHByZXNlbmNlIHdhcyByZXF1aXJlZCB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgcmVxdWlyZWRNYXRjaGVzIGZpZWxkIHNldHMuXG4gICAgICogV2UgZG8gdGhpcyBhZnRlciBhbGwgZmllbGRzIGZvciB0aGUgdGVybSBoYXZlIGNvbGxlY3RlZCB0aGVpciBtYXRjaGVzIGJlY2F1c2VcbiAgICAgKiB0aGUgY2xhdXNlIHRlcm1zIHByZXNlbmNlIGlzIHJlcXVpcmVkIGluIF9hbnlfIG9mIHRoZSBmaWVsZHMgbm90IF9hbGxfIG9mIHRoZVxuICAgICAqIGZpZWxkcy5cbiAgICAgKi9cbiAgICBpZiAoY2xhdXNlLnByZXNlbmNlID09PSBsdW5yLlF1ZXJ5LnByZXNlbmNlLlJFUVVJUkVEKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IGNsYXVzZS5maWVsZHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGZpZWxkID0gY2xhdXNlLmZpZWxkc1trXVxuICAgICAgICByZXF1aXJlZE1hdGNoZXNbZmllbGRdID0gcmVxdWlyZWRNYXRjaGVzW2ZpZWxkXS5pbnRlcnNlY3QoY2xhdXNlTWF0Y2hlcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTmVlZCB0byBjb21iaW5lIHRoZSBmaWVsZCBzY29wZWQgcmVxdWlyZWQgYW5kIHByb2hpYml0ZWRcbiAgICogbWF0Y2hpbmcgZG9jdW1lbnRzIGludG8gYSBnbG9iYWwgc2V0IG9mIHJlcXVpcmVkIGFuZCBwcm9oaWJpdGVkXG4gICAqIG1hdGNoZXNcbiAgICovXG4gIHZhciBhbGxSZXF1aXJlZE1hdGNoZXMgPSBsdW5yLlNldC5jb21wbGV0ZSxcbiAgICAgIGFsbFByb2hpYml0ZWRNYXRjaGVzID0gbHVuci5TZXQuZW1wdHlcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZpZWxkID0gdGhpcy5maWVsZHNbaV1cblxuICAgIGlmIChyZXF1aXJlZE1hdGNoZXNbZmllbGRdKSB7XG4gICAgICBhbGxSZXF1aXJlZE1hdGNoZXMgPSBhbGxSZXF1aXJlZE1hdGNoZXMuaW50ZXJzZWN0KHJlcXVpcmVkTWF0Y2hlc1tmaWVsZF0pXG4gICAgfVxuXG4gICAgaWYgKHByb2hpYml0ZWRNYXRjaGVzW2ZpZWxkXSkge1xuICAgICAgYWxsUHJvaGliaXRlZE1hdGNoZXMgPSBhbGxQcm9oaWJpdGVkTWF0Y2hlcy51bmlvbihwcm9oaWJpdGVkTWF0Y2hlc1tmaWVsZF0pXG4gICAgfVxuICB9XG5cbiAgdmFyIG1hdGNoaW5nRmllbGRSZWZzID0gT2JqZWN0LmtleXMobWF0Y2hpbmdGaWVsZHMpLFxuICAgICAgcmVzdWx0cyA9IFtdLFxuICAgICAgbWF0Y2hlcyA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICAvKlxuICAgKiBJZiB0aGUgcXVlcnkgaXMgbmVnYXRlZCAoY29udGFpbnMgb25seSBwcm9oaWJpdGVkIHRlcm1zKVxuICAgKiB3ZSBuZWVkIHRvIGdldCBfYWxsXyBmaWVsZFJlZnMgY3VycmVudGx5IGV4aXN0aW5nIGluIHRoZVxuICAgKiBpbmRleC4gVGhpcyBpcyBvbmx5IGRvbmUgd2hlbiB3ZSBrbm93IHRoYXQgdGhlIHF1ZXJ5IGlzXG4gICAqIGVudGlyZWx5IHByb2hpYml0ZWQgdGVybXMgdG8gYXZvaWQgYW55IGNvc3Qgb2YgZ2V0dGluZyBhbGxcbiAgICogZmllbGRSZWZzIHVubmVjZXNzYXJpbHkuXG4gICAqXG4gICAqIEFkZGl0aW9uYWxseSwgYmxhbmsgTWF0Y2hEYXRhIG11c3QgYmUgY3JlYXRlZCB0byBjb3JyZWN0bHlcbiAgICogcG9wdWxhdGUgdGhlIHJlc3VsdHMuXG4gICAqL1xuICBpZiAocXVlcnkuaXNOZWdhdGVkKCkpIHtcbiAgICBtYXRjaGluZ0ZpZWxkUmVmcyA9IE9iamVjdC5rZXlzKHRoaXMuZmllbGRWZWN0b3JzKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGluZ0ZpZWxkUmVmcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG1hdGNoaW5nRmllbGRSZWYgPSBtYXRjaGluZ0ZpZWxkUmVmc1tpXVxuICAgICAgdmFyIGZpZWxkUmVmID0gbHVuci5GaWVsZFJlZi5mcm9tU3RyaW5nKG1hdGNoaW5nRmllbGRSZWYpXG4gICAgICBtYXRjaGluZ0ZpZWxkc1ttYXRjaGluZ0ZpZWxkUmVmXSA9IG5ldyBsdW5yLk1hdGNoRGF0YVxuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0Y2hpbmdGaWVsZFJlZnMubGVuZ3RoOyBpKyspIHtcbiAgICAvKlxuICAgICAqIEN1cnJlbnRseSB3ZSBoYXZlIGRvY3VtZW50IGZpZWxkcyB0aGF0IG1hdGNoIHRoZSBxdWVyeSwgYnV0IHdlXG4gICAgICogbmVlZCB0byByZXR1cm4gZG9jdW1lbnRzLiBUaGUgbWF0Y2hEYXRhIGFuZCBzY29yZXMgYXJlIGNvbWJpbmVkXG4gICAgICogZnJvbSBtdWx0aXBsZSBmaWVsZHMgYmVsb25naW5nIHRvIHRoZSBzYW1lIGRvY3VtZW50LlxuICAgICAqXG4gICAgICogU2NvcmVzIGFyZSBjYWxjdWxhdGVkIGJ5IGZpZWxkLCB1c2luZyB0aGUgcXVlcnkgdmVjdG9ycyBjcmVhdGVkXG4gICAgICogYWJvdmUsIGFuZCBjb21iaW5lZCBpbnRvIGEgZmluYWwgZG9jdW1lbnQgc2NvcmUgdXNpbmcgYWRkaXRpb24uXG4gICAgICovXG4gICAgdmFyIGZpZWxkUmVmID0gbHVuci5GaWVsZFJlZi5mcm9tU3RyaW5nKG1hdGNoaW5nRmllbGRSZWZzW2ldKSxcbiAgICAgICAgZG9jUmVmID0gZmllbGRSZWYuZG9jUmVmXG5cbiAgICBpZiAoIWFsbFJlcXVpcmVkTWF0Y2hlcy5jb250YWlucyhkb2NSZWYpKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChhbGxQcm9oaWJpdGVkTWF0Y2hlcy5jb250YWlucyhkb2NSZWYpKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHZhciBmaWVsZFZlY3RvciA9IHRoaXMuZmllbGRWZWN0b3JzW2ZpZWxkUmVmXSxcbiAgICAgICAgc2NvcmUgPSBxdWVyeVZlY3RvcnNbZmllbGRSZWYuZmllbGROYW1lXS5zaW1pbGFyaXR5KGZpZWxkVmVjdG9yKSxcbiAgICAgICAgZG9jTWF0Y2hcblxuICAgIGlmICgoZG9jTWF0Y2ggPSBtYXRjaGVzW2RvY1JlZl0pICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRvY01hdGNoLnNjb3JlICs9IHNjb3JlXG4gICAgICBkb2NNYXRjaC5tYXRjaERhdGEuY29tYmluZShtYXRjaGluZ0ZpZWxkc1tmaWVsZFJlZl0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtYXRjaCA9IHtcbiAgICAgICAgcmVmOiBkb2NSZWYsXG4gICAgICAgIHNjb3JlOiBzY29yZSxcbiAgICAgICAgbWF0Y2hEYXRhOiBtYXRjaGluZ0ZpZWxkc1tmaWVsZFJlZl1cbiAgICAgIH1cbiAgICAgIG1hdGNoZXNbZG9jUmVmXSA9IG1hdGNoXG4gICAgICByZXN1bHRzLnB1c2gobWF0Y2gpXG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogU29ydCB0aGUgcmVzdWx0cyBvYmplY3RzIGJ5IHNjb3JlLCBoaWdoZXN0IGZpcnN0LlxuICAgKi9cbiAgcmV0dXJuIHJlc3VsdHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBiLnNjb3JlIC0gYS5zY29yZVxuICB9KVxufVxuXG4vKipcbiAqIFByZXBhcmVzIHRoZSBpbmRleCBmb3IgSlNPTiBzZXJpYWxpemF0aW9uLlxuICpcbiAqIFRoZSBzY2hlbWEgZm9yIHRoaXMgSlNPTiBibG9iIHdpbGwgYmUgZGVzY3JpYmVkIGluIGFcbiAqIHNlcGFyYXRlIEpTT04gc2NoZW1hIGZpbGUuXG4gKlxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xubHVuci5JbmRleC5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaW52ZXJ0ZWRJbmRleCA9IE9iamVjdC5rZXlzKHRoaXMuaW52ZXJ0ZWRJbmRleClcbiAgICAuc29ydCgpXG4gICAgLm1hcChmdW5jdGlvbiAodGVybSkge1xuICAgICAgcmV0dXJuIFt0ZXJtLCB0aGlzLmludmVydGVkSW5kZXhbdGVybV1dXG4gICAgfSwgdGhpcylcblxuICB2YXIgZmllbGRWZWN0b3JzID0gT2JqZWN0LmtleXModGhpcy5maWVsZFZlY3RvcnMpXG4gICAgLm1hcChmdW5jdGlvbiAocmVmKSB7XG4gICAgICByZXR1cm4gW3JlZiwgdGhpcy5maWVsZFZlY3RvcnNbcmVmXS50b0pTT04oKV1cbiAgICB9LCB0aGlzKVxuXG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogbHVuci52ZXJzaW9uLFxuICAgIGZpZWxkczogdGhpcy5maWVsZHMsXG4gICAgZmllbGRWZWN0b3JzOiBmaWVsZFZlY3RvcnMsXG4gICAgaW52ZXJ0ZWRJbmRleDogaW52ZXJ0ZWRJbmRleCxcbiAgICBwaXBlbGluZTogdGhpcy5waXBlbGluZS50b0pTT04oKVxuICB9XG59XG5cbi8qKlxuICogTG9hZHMgYSBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgbHVuci5JbmRleFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXJpYWxpemVkSW5kZXggLSBBIHByZXZpb3VzbHkgc2VyaWFsaXplZCBsdW5yLkluZGV4XG4gKiBAcmV0dXJucyB7bHVuci5JbmRleH1cbiAqL1xubHVuci5JbmRleC5sb2FkID0gZnVuY3Rpb24gKHNlcmlhbGl6ZWRJbmRleCkge1xuICB2YXIgYXR0cnMgPSB7fSxcbiAgICAgIGZpZWxkVmVjdG9ycyA9IHt9LFxuICAgICAgc2VyaWFsaXplZFZlY3RvcnMgPSBzZXJpYWxpemVkSW5kZXguZmllbGRWZWN0b3JzLFxuICAgICAgaW52ZXJ0ZWRJbmRleCA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICBzZXJpYWxpemVkSW52ZXJ0ZWRJbmRleCA9IHNlcmlhbGl6ZWRJbmRleC5pbnZlcnRlZEluZGV4LFxuICAgICAgdG9rZW5TZXRCdWlsZGVyID0gbmV3IGx1bnIuVG9rZW5TZXQuQnVpbGRlcixcbiAgICAgIHBpcGVsaW5lID0gbHVuci5QaXBlbGluZS5sb2FkKHNlcmlhbGl6ZWRJbmRleC5waXBlbGluZSlcblxuICBpZiAoc2VyaWFsaXplZEluZGV4LnZlcnNpb24gIT0gbHVuci52ZXJzaW9uKSB7XG4gICAgbHVuci51dGlscy53YXJuKFwiVmVyc2lvbiBtaXNtYXRjaCB3aGVuIGxvYWRpbmcgc2VyaWFsaXNlZCBpbmRleC4gQ3VycmVudCB2ZXJzaW9uIG9mIGx1bnIgJ1wiICsgbHVuci52ZXJzaW9uICsgXCInIGRvZXMgbm90IG1hdGNoIHNlcmlhbGl6ZWQgaW5kZXggJ1wiICsgc2VyaWFsaXplZEluZGV4LnZlcnNpb24gKyBcIidcIilcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2VyaWFsaXplZFZlY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdHVwbGUgPSBzZXJpYWxpemVkVmVjdG9yc1tpXSxcbiAgICAgICAgcmVmID0gdHVwbGVbMF0sXG4gICAgICAgIGVsZW1lbnRzID0gdHVwbGVbMV1cblxuICAgIGZpZWxkVmVjdG9yc1tyZWZdID0gbmV3IGx1bnIuVmVjdG9yKGVsZW1lbnRzKVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXJpYWxpemVkSW52ZXJ0ZWRJbmRleC5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0dXBsZSA9IHNlcmlhbGl6ZWRJbnZlcnRlZEluZGV4W2ldLFxuICAgICAgICB0ZXJtID0gdHVwbGVbMF0sXG4gICAgICAgIHBvc3RpbmcgPSB0dXBsZVsxXVxuXG4gICAgdG9rZW5TZXRCdWlsZGVyLmluc2VydCh0ZXJtKVxuICAgIGludmVydGVkSW5kZXhbdGVybV0gPSBwb3N0aW5nXG4gIH1cblxuICB0b2tlblNldEJ1aWxkZXIuZmluaXNoKClcblxuICBhdHRycy5maWVsZHMgPSBzZXJpYWxpemVkSW5kZXguZmllbGRzXG5cbiAgYXR0cnMuZmllbGRWZWN0b3JzID0gZmllbGRWZWN0b3JzXG4gIGF0dHJzLmludmVydGVkSW5kZXggPSBpbnZlcnRlZEluZGV4XG4gIGF0dHJzLnRva2VuU2V0ID0gdG9rZW5TZXRCdWlsZGVyLnJvb3RcbiAgYXR0cnMucGlwZWxpbmUgPSBwaXBlbGluZVxuXG4gIHJldHVybiBuZXcgbHVuci5JbmRleChhdHRycylcbn1cbi8qIVxuICogbHVuci5CdWlsZGVyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBsdW5yLkJ1aWxkZXIgcGVyZm9ybXMgaW5kZXhpbmcgb24gYSBzZXQgb2YgZG9jdW1lbnRzIGFuZFxuICogcmV0dXJucyBpbnN0YW5jZXMgb2YgbHVuci5JbmRleCByZWFkeSBmb3IgcXVlcnlpbmcuXG4gKlxuICogQWxsIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGluZGV4IGlzIGRvbmUgdmlhIHRoZSBidWlsZGVyLCB0aGVcbiAqIGZpZWxkcyB0byBpbmRleCwgdGhlIGRvY3VtZW50IHJlZmVyZW5jZSwgdGhlIHRleHQgcHJvY2Vzc2luZ1xuICogcGlwZWxpbmUgYW5kIGRvY3VtZW50IHNjb3JpbmcgcGFyYW1ldGVycyBhcmUgYWxsIHNldCBvbiB0aGVcbiAqIGJ1aWxkZXIgYmVmb3JlIGluZGV4aW5nLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByb3BlcnR5IHtzdHJpbmd9IF9yZWYgLSBJbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGRvY3VtZW50IHJlZmVyZW5jZSBmaWVsZC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IF9maWVsZHMgLSBJbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGRvY3VtZW50IGZpZWxkcyB0byBpbmRleC5cbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBpbnZlcnRlZEluZGV4IC0gVGhlIGludmVydGVkIGluZGV4IG1hcHMgdGVybXMgdG8gZG9jdW1lbnQgZmllbGRzLlxuICogQHByb3BlcnR5IHtvYmplY3R9IGRvY3VtZW50VGVybUZyZXF1ZW5jaWVzIC0gS2VlcHMgdHJhY2sgb2YgZG9jdW1lbnQgdGVybSBmcmVxdWVuY2llcy5cbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBkb2N1bWVudExlbmd0aHMgLSBLZWVwcyB0cmFjayBvZiB0aGUgbGVuZ3RoIG9mIGRvY3VtZW50cyBhZGRlZCB0byB0aGUgaW5kZXguXG4gKiBAcHJvcGVydHkge2x1bnIudG9rZW5pemVyfSB0b2tlbml6ZXIgLSBGdW5jdGlvbiBmb3Igc3BsaXR0aW5nIHN0cmluZ3MgaW50byB0b2tlbnMgZm9yIGluZGV4aW5nLlxuICogQHByb3BlcnR5IHtsdW5yLlBpcGVsaW5lfSBwaXBlbGluZSAtIFRoZSBwaXBlbGluZSBwZXJmb3JtcyB0ZXh0IHByb2Nlc3Npbmcgb24gdG9rZW5zIGJlZm9yZSBpbmRleGluZy5cbiAqIEBwcm9wZXJ0eSB7bHVuci5QaXBlbGluZX0gc2VhcmNoUGlwZWxpbmUgLSBBIHBpcGVsaW5lIGZvciBwcm9jZXNzaW5nIHNlYXJjaCB0ZXJtcyBiZWZvcmUgcXVlcnlpbmcgdGhlIGluZGV4LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGRvY3VtZW50Q291bnQgLSBLZWVwcyB0cmFjayBvZiB0aGUgdG90YWwgbnVtYmVyIG9mIGRvY3VtZW50cyBpbmRleGVkLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IF9iIC0gQSBwYXJhbWV0ZXIgdG8gY29udHJvbCBmaWVsZCBsZW5ndGggbm9ybWFsaXphdGlvbiwgc2V0dGluZyB0aGlzIHRvIDAgZGlzYWJsZWQgbm9ybWFsaXphdGlvbiwgMSBmdWxseSBub3JtYWxpemVzIGZpZWxkIGxlbmd0aHMsIHRoZSBkZWZhdWx0IHZhbHVlIGlzIDAuNzUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gX2sxIC0gQSBwYXJhbWV0ZXIgdG8gY29udHJvbCBob3cgcXVpY2tseSBhbiBpbmNyZWFzZSBpbiB0ZXJtIGZyZXF1ZW5jeSByZXN1bHRzIGluIHRlcm0gZnJlcXVlbmN5IHNhdHVyYXRpb24sIHRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuMi5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0ZXJtSW5kZXggLSBBIGNvdW50ZXIgaW5jcmVtZW50ZWQgZm9yIGVhY2ggdW5pcXVlIHRlcm0sIHVzZWQgdG8gaWRlbnRpZnkgYSB0ZXJtcyBwb3NpdGlvbiBpbiB0aGUgdmVjdG9yIHNwYWNlLlxuICogQHByb3BlcnR5IHthcnJheX0gbWV0YWRhdGFXaGl0ZWxpc3QgLSBBIGxpc3Qgb2YgbWV0YWRhdGEga2V5cyB0aGF0IGhhdmUgYmVlbiB3aGl0ZWxpc3RlZCBmb3IgZW50cnkgaW4gdGhlIGluZGV4LlxuICovXG5sdW5yLkJ1aWxkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX3JlZiA9IFwiaWRcIlxuICB0aGlzLl9maWVsZHMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHRoaXMuX2RvY3VtZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdGhpcy5pbnZlcnRlZEluZGV4ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB0aGlzLmZpZWxkVGVybUZyZXF1ZW5jaWVzID0ge31cbiAgdGhpcy5maWVsZExlbmd0aHMgPSB7fVxuICB0aGlzLnRva2VuaXplciA9IGx1bnIudG9rZW5pemVyXG4gIHRoaXMucGlwZWxpbmUgPSBuZXcgbHVuci5QaXBlbGluZVxuICB0aGlzLnNlYXJjaFBpcGVsaW5lID0gbmV3IGx1bnIuUGlwZWxpbmVcbiAgdGhpcy5kb2N1bWVudENvdW50ID0gMFxuICB0aGlzLl9iID0gMC43NVxuICB0aGlzLl9rMSA9IDEuMlxuICB0aGlzLnRlcm1JbmRleCA9IDBcbiAgdGhpcy5tZXRhZGF0YVdoaXRlbGlzdCA9IFtdXG59XG5cbi8qKlxuICogU2V0cyB0aGUgZG9jdW1lbnQgZmllbGQgdXNlZCBhcyB0aGUgZG9jdW1lbnQgcmVmZXJlbmNlLiBFdmVyeSBkb2N1bWVudCBtdXN0IGhhdmUgdGhpcyBmaWVsZC5cbiAqIFRoZSB0eXBlIG9mIHRoaXMgZmllbGQgaW4gdGhlIGRvY3VtZW50IHNob3VsZCBiZSBhIHN0cmluZywgaWYgaXQgaXMgbm90IGEgc3RyaW5nIGl0IHdpbGwgYmVcbiAqIGNvZXJjZWQgaW50byBhIHN0cmluZyBieSBjYWxsaW5nIHRvU3RyaW5nLlxuICpcbiAqIFRoZSBkZWZhdWx0IHJlZiBpcyAnaWQnLlxuICpcbiAqIFRoZSByZWYgc2hvdWxkIF9ub3RfIGJlIGNoYW5nZWQgZHVyaW5nIGluZGV4aW5nLCBpdCBzaG91bGQgYmUgc2V0IGJlZm9yZSBhbnkgZG9jdW1lbnRzIGFyZVxuICogYWRkZWQgdG8gdGhlIGluZGV4LiBDaGFuZ2luZyBpdCBkdXJpbmcgaW5kZXhpbmcgY2FuIGxlYWQgdG8gaW5jb25zaXN0ZW50IHJlc3VsdHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJlZiAtIFRoZSBuYW1lIG9mIHRoZSByZWZlcmVuY2UgZmllbGQgaW4gdGhlIGRvY3VtZW50LlxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgdGhpcy5fcmVmID0gcmVmXG59XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gZXh0cmFjdCBhIGZpZWxkIGZyb20gYSBkb2N1bWVudC5cbiAqXG4gKiBMdW5yIGV4cGVjdHMgYSBmaWVsZCB0byBiZSBhdCB0aGUgdG9wIGxldmVsIG9mIGEgZG9jdW1lbnQsIGlmIGhvd2V2ZXIgdGhlIGZpZWxkXG4gKiBpcyBkZWVwbHkgbmVzdGVkIHdpdGhpbiBhIGRvY3VtZW50IGFuIGV4dHJhY3RvciBmdW5jdGlvbiBjYW4gYmUgdXNlZCB0byBleHRyYWN0XG4gKiB0aGUgcmlnaHQgZmllbGQgZm9yIGluZGV4aW5nLlxuICpcbiAqIEBjYWxsYmFjayBmaWVsZEV4dHJhY3RvclxuICogQHBhcmFtIHtvYmplY3R9IGRvYyAtIFRoZSBkb2N1bWVudCBiZWluZyBhZGRlZCB0byB0aGUgaW5kZXguXG4gKiBAcmV0dXJucyB7PyhzdHJpbmd8b2JqZWN0fG9iamVjdFtdKX0gb2JqIC0gVGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgaW5kZXhlZCBmb3IgdGhpcyBmaWVsZC5cbiAqIEBleGFtcGxlIDxjYXB0aW9uPkV4dHJhY3RpbmcgYSBuZXN0ZWQgZmllbGQ8L2NhcHRpb24+XG4gKiBmdW5jdGlvbiAoZG9jKSB7IHJldHVybiBkb2MubmVzdGVkLmZpZWxkIH1cbiAqL1xuXG4vKipcbiAqIEFkZHMgYSBmaWVsZCB0byB0aGUgbGlzdCBvZiBkb2N1bWVudCBmaWVsZHMgdGhhdCB3aWxsIGJlIGluZGV4ZWQuIEV2ZXJ5IGRvY3VtZW50IGJlaW5nXG4gKiBpbmRleGVkIHNob3VsZCBoYXZlIHRoaXMgZmllbGQuIE51bGwgdmFsdWVzIGZvciB0aGlzIGZpZWxkIGluIGluZGV4ZWQgZG9jdW1lbnRzIHdpbGxcbiAqIG5vdCBjYXVzZSBlcnJvcnMgYnV0IHdpbGwgbGltaXQgdGhlIGNoYW5jZSBvZiB0aGF0IGRvY3VtZW50IGJlaW5nIHJldHJpZXZlZCBieSBzZWFyY2hlcy5cbiAqXG4gKiBBbGwgZmllbGRzIHNob3VsZCBiZSBhZGRlZCBiZWZvcmUgYWRkaW5nIGRvY3VtZW50cyB0byB0aGUgaW5kZXguIEFkZGluZyBmaWVsZHMgYWZ0ZXJcbiAqIGEgZG9jdW1lbnQgaGFzIGJlZW4gaW5kZXhlZCB3aWxsIGhhdmUgbm8gZWZmZWN0IG9uIGFscmVhZHkgaW5kZXhlZCBkb2N1bWVudHMuXG4gKlxuICogRmllbGRzIGNhbiBiZSBib29zdGVkIGF0IGJ1aWxkIHRpbWUuIFRoaXMgYWxsb3dzIHRlcm1zIHdpdGhpbiB0aGF0IGZpZWxkIHRvIGhhdmUgbW9yZVxuICogaW1wb3J0YW5jZSB3aGVuIHJhbmtpbmcgc2VhcmNoIHJlc3VsdHMuIFVzZSBhIGZpZWxkIGJvb3N0IHRvIHNwZWNpZnkgdGhhdCBtYXRjaGVzIHdpdGhpblxuICogb25lIGZpZWxkIGFyZSBtb3JlIGltcG9ydGFudCB0aGFuIG90aGVyIGZpZWxkcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZmllbGROYW1lIC0gVGhlIG5hbWUgb2YgYSBmaWVsZCB0byBpbmRleCBpbiBhbGwgZG9jdW1lbnRzLlxuICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZXMgLSBPcHRpb25hbCBhdHRyaWJ1dGVzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGZpZWxkLlxuICogQHBhcmFtIHtudW1iZXJ9IFthdHRyaWJ1dGVzLmJvb3N0PTFdIC0gQm9vc3QgYXBwbGllZCB0byBhbGwgdGVybXMgd2l0aGluIHRoaXMgZmllbGQuXG4gKiBAcGFyYW0ge2ZpZWxkRXh0cmFjdG9yfSBbYXR0cmlidXRlcy5leHRyYWN0b3JdIC0gRnVuY3Rpb24gdG8gZXh0cmFjdCBhIGZpZWxkIGZyb20gYSBkb2N1bWVudC5cbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZpZWxkTmFtZSBjYW5ub3QgY29udGFpbiB1bnN1cHBvcnRlZCBjaGFyYWN0ZXJzICcvJ1xuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmZpZWxkID0gZnVuY3Rpb24gKGZpZWxkTmFtZSwgYXR0cmlidXRlcykge1xuICBpZiAoL1xcLy8udGVzdChmaWVsZE5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IgKFwiRmllbGQgJ1wiICsgZmllbGROYW1lICsgXCInIGNvbnRhaW5zIGlsbGVnYWwgY2hhcmFjdGVyICcvJ1wiKVxuICB9XG5cbiAgdGhpcy5fZmllbGRzW2ZpZWxkTmFtZV0gPSBhdHRyaWJ1dGVzIHx8IHt9XG59XG5cbi8qKlxuICogQSBwYXJhbWV0ZXIgdG8gdHVuZSB0aGUgYW1vdW50IG9mIGZpZWxkIGxlbmd0aCBub3JtYWxpc2F0aW9uIHRoYXQgaXMgYXBwbGllZCB3aGVuXG4gKiBjYWxjdWxhdGluZyByZWxldmFuY2Ugc2NvcmVzLiBBIHZhbHVlIG9mIDAgd2lsbCBjb21wbGV0ZWx5IGRpc2FibGUgYW55IG5vcm1hbGlzYXRpb25cbiAqIGFuZCBhIHZhbHVlIG9mIDEgd2lsbCBmdWxseSBub3JtYWxpc2UgZmllbGQgbGVuZ3Rocy4gVGhlIGRlZmF1bHQgaXMgMC43NS4gVmFsdWVzIG9mIGJcbiAqIHdpbGwgYmUgY2xhbXBlZCB0byB0aGUgcmFuZ2UgMCAtIDEuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIFRoZSB2YWx1ZSB0byBzZXQgZm9yIHRoaXMgdHVuaW5nIHBhcmFtZXRlci5cbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5iID0gZnVuY3Rpb24gKG51bWJlcikge1xuICBpZiAobnVtYmVyIDwgMCkge1xuICAgIHRoaXMuX2IgPSAwXG4gIH0gZWxzZSBpZiAobnVtYmVyID4gMSkge1xuICAgIHRoaXMuX2IgPSAxXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fYiA9IG51bWJlclxuICB9XG59XG5cbi8qKlxuICogQSBwYXJhbWV0ZXIgdGhhdCBjb250cm9scyB0aGUgc3BlZWQgYXQgd2hpY2ggYSByaXNlIGluIHRlcm0gZnJlcXVlbmN5IHJlc3VsdHMgaW4gdGVybVxuICogZnJlcXVlbmN5IHNhdHVyYXRpb24uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuMi4gU2V0dGluZyB0aGlzIHRvIGEgaGlnaGVyIHZhbHVlIHdpbGwgZ2l2ZVxuICogc2xvd2VyIHNhdHVyYXRpb24gbGV2ZWxzLCBhIGxvd2VyIHZhbHVlIHdpbGwgcmVzdWx0IGluIHF1aWNrZXIgc2F0dXJhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gVGhlIHZhbHVlIHRvIHNldCBmb3IgdGhpcyB0dW5pbmcgcGFyYW1ldGVyLlxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmsxID0gZnVuY3Rpb24gKG51bWJlcikge1xuICB0aGlzLl9rMSA9IG51bWJlclxufVxuXG4vKipcbiAqIEFkZHMgYSBkb2N1bWVudCB0byB0aGUgaW5kZXguXG4gKlxuICogQmVmb3JlIGFkZGluZyBmaWVsZHMgdG8gdGhlIGluZGV4IHRoZSBpbmRleCBzaG91bGQgaGF2ZSBiZWVuIGZ1bGx5IHNldHVwLCB3aXRoIHRoZSBkb2N1bWVudFxuICogcmVmIGFuZCBhbGwgZmllbGRzIHRvIGluZGV4IGFscmVhZHkgaGF2aW5nIGJlZW4gc3BlY2lmaWVkLlxuICpcbiAqIFRoZSBkb2N1bWVudCBtdXN0IGhhdmUgYSBmaWVsZCBuYW1lIGFzIHNwZWNpZmllZCBieSB0aGUgcmVmIChieSBkZWZhdWx0IHRoaXMgaXMgJ2lkJykgYW5kXG4gKiBpdCBzaG91bGQgaGF2ZSBhbGwgZmllbGRzIGRlZmluZWQgZm9yIGluZGV4aW5nLCB0aG91Z2ggbnVsbCBvciB1bmRlZmluZWQgdmFsdWVzIHdpbGwgbm90XG4gKiBjYXVzZSBlcnJvcnMuXG4gKlxuICogRW50aXJlIGRvY3VtZW50cyBjYW4gYmUgYm9vc3RlZCBhdCBidWlsZCB0aW1lLiBBcHBseWluZyBhIGJvb3N0IHRvIGEgZG9jdW1lbnQgaW5kaWNhdGVzIHRoYXRcbiAqIHRoaXMgZG9jdW1lbnQgc2hvdWxkIHJhbmsgaGlnaGVyIGluIHNlYXJjaCByZXN1bHRzIHRoYW4gb3RoZXIgZG9jdW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBkb2MgLSBUaGUgZG9jdW1lbnQgdG8gYWRkIHRvIHRoZSBpbmRleC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVzIC0gT3B0aW9uYWwgYXR0cmlidXRlcyBhc3NvY2lhdGVkIHdpdGggdGhpcyBkb2N1bWVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbYXR0cmlidXRlcy5ib29zdD0xXSAtIEJvb3N0IGFwcGxpZWQgdG8gYWxsIHRlcm1zIHdpdGhpbiB0aGlzIGRvY3VtZW50LlxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChkb2MsIGF0dHJpYnV0ZXMpIHtcbiAgdmFyIGRvY1JlZiA9IGRvY1t0aGlzLl9yZWZdLFxuICAgICAgZmllbGRzID0gT2JqZWN0LmtleXModGhpcy5fZmllbGRzKVxuXG4gIHRoaXMuX2RvY3VtZW50c1tkb2NSZWZdID0gYXR0cmlidXRlcyB8fCB7fVxuICB0aGlzLmRvY3VtZW50Q291bnQgKz0gMVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkc1tpXSxcbiAgICAgICAgZXh0cmFjdG9yID0gdGhpcy5fZmllbGRzW2ZpZWxkTmFtZV0uZXh0cmFjdG9yLFxuICAgICAgICBmaWVsZCA9IGV4dHJhY3RvciA/IGV4dHJhY3Rvcihkb2MpIDogZG9jW2ZpZWxkTmFtZV0sXG4gICAgICAgIHRva2VucyA9IHRoaXMudG9rZW5pemVyKGZpZWxkLCB7XG4gICAgICAgICAgZmllbGRzOiBbZmllbGROYW1lXVxuICAgICAgICB9KSxcbiAgICAgICAgdGVybXMgPSB0aGlzLnBpcGVsaW5lLnJ1bih0b2tlbnMpLFxuICAgICAgICBmaWVsZFJlZiA9IG5ldyBsdW5yLkZpZWxkUmVmIChkb2NSZWYsIGZpZWxkTmFtZSksXG4gICAgICAgIGZpZWxkVGVybXMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgICB0aGlzLmZpZWxkVGVybUZyZXF1ZW5jaWVzW2ZpZWxkUmVmXSA9IGZpZWxkVGVybXNcbiAgICB0aGlzLmZpZWxkTGVuZ3Roc1tmaWVsZFJlZl0gPSAwXG5cbiAgICAvLyBzdG9yZSB0aGUgbGVuZ3RoIG9mIHRoaXMgZmllbGQgZm9yIHRoaXMgZG9jdW1lbnRcbiAgICB0aGlzLmZpZWxkTGVuZ3Roc1tmaWVsZFJlZl0gKz0gdGVybXMubGVuZ3RoXG5cbiAgICAvLyBjYWxjdWxhdGUgdGVybSBmcmVxdWVuY2llcyBmb3IgdGhpcyBmaWVsZFxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGVybXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciB0ZXJtID0gdGVybXNbal1cblxuICAgICAgaWYgKGZpZWxkVGVybXNbdGVybV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZpZWxkVGVybXNbdGVybV0gPSAwXG4gICAgICB9XG5cbiAgICAgIGZpZWxkVGVybXNbdGVybV0gKz0gMVxuXG4gICAgICAvLyBhZGQgdG8gaW52ZXJ0ZWQgaW5kZXhcbiAgICAgIC8vIGNyZWF0ZSBhbiBpbml0aWFsIHBvc3RpbmcgaWYgb25lIGRvZXNuJ3QgZXhpc3RcbiAgICAgIGlmICh0aGlzLmludmVydGVkSW5kZXhbdGVybV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBwb3N0aW5nID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgICAgICBwb3N0aW5nW1wiX2luZGV4XCJdID0gdGhpcy50ZXJtSW5kZXhcbiAgICAgICAgdGhpcy50ZXJtSW5kZXggKz0gMVxuXG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgZmllbGRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgcG9zdGluZ1tmaWVsZHNba11dID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dID0gcG9zdGluZ1xuICAgICAgfVxuXG4gICAgICAvLyBhZGQgYW4gZW50cnkgZm9yIHRoaXMgdGVybS9maWVsZE5hbWUvZG9jUmVmIHRvIHRoZSBpbnZlcnRlZEluZGV4XG4gICAgICBpZiAodGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dW2ZpZWxkTmFtZV1bZG9jUmVmXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dW2ZpZWxkTmFtZV1bZG9jUmVmXSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICAgIH1cblxuICAgICAgLy8gc3RvcmUgYWxsIHdoaXRlbGlzdGVkIG1ldGFkYXRhIGFib3V0IHRoaXMgdG9rZW4gaW4gdGhlXG4gICAgICAvLyBpbnZlcnRlZCBpbmRleFxuICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCB0aGlzLm1ldGFkYXRhV2hpdGVsaXN0Lmxlbmd0aDsgbCsrKSB7XG4gICAgICAgIHZhciBtZXRhZGF0YUtleSA9IHRoaXMubWV0YWRhdGFXaGl0ZWxpc3RbbF0sXG4gICAgICAgICAgICBtZXRhZGF0YSA9IHRlcm0ubWV0YWRhdGFbbWV0YWRhdGFLZXldXG5cbiAgICAgICAgaWYgKHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXVtmaWVsZE5hbWVdW2RvY1JlZl1bbWV0YWRhdGFLZXldID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXVtmaWVsZE5hbWVdW2RvY1JlZl1bbWV0YWRhdGFLZXldID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXVtmaWVsZE5hbWVdW2RvY1JlZl1bbWV0YWRhdGFLZXldLnB1c2gobWV0YWRhdGEpXG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhdmVyYWdlIGRvY3VtZW50IGxlbmd0aCBmb3IgdGhpcyBpbmRleFxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuY2FsY3VsYXRlQXZlcmFnZUZpZWxkTGVuZ3RocyA9IGZ1bmN0aW9uICgpIHtcblxuICB2YXIgZmllbGRSZWZzID0gT2JqZWN0LmtleXModGhpcy5maWVsZExlbmd0aHMpLFxuICAgICAgbnVtYmVyT2ZGaWVsZHMgPSBmaWVsZFJlZnMubGVuZ3RoLFxuICAgICAgYWNjdW11bGF0b3IgPSB7fSxcbiAgICAgIGRvY3VtZW50c1dpdGhGaWVsZCA9IHt9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkZpZWxkczsgaSsrKSB7XG4gICAgdmFyIGZpZWxkUmVmID0gbHVuci5GaWVsZFJlZi5mcm9tU3RyaW5nKGZpZWxkUmVmc1tpXSksXG4gICAgICAgIGZpZWxkID0gZmllbGRSZWYuZmllbGROYW1lXG5cbiAgICBkb2N1bWVudHNXaXRoRmllbGRbZmllbGRdIHx8IChkb2N1bWVudHNXaXRoRmllbGRbZmllbGRdID0gMClcbiAgICBkb2N1bWVudHNXaXRoRmllbGRbZmllbGRdICs9IDFcblxuICAgIGFjY3VtdWxhdG9yW2ZpZWxkXSB8fCAoYWNjdW11bGF0b3JbZmllbGRdID0gMClcbiAgICBhY2N1bXVsYXRvcltmaWVsZF0gKz0gdGhpcy5maWVsZExlbmd0aHNbZmllbGRSZWZdXG4gIH1cblxuICB2YXIgZmllbGRzID0gT2JqZWN0LmtleXModGhpcy5fZmllbGRzKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkc1tpXVxuICAgIGFjY3VtdWxhdG9yW2ZpZWxkTmFtZV0gPSBhY2N1bXVsYXRvcltmaWVsZE5hbWVdIC8gZG9jdW1lbnRzV2l0aEZpZWxkW2ZpZWxkTmFtZV1cbiAgfVxuXG4gIHRoaXMuYXZlcmFnZUZpZWxkTGVuZ3RoID0gYWNjdW11bGF0b3Jcbn1cblxuLyoqXG4gKiBCdWlsZHMgYSB2ZWN0b3Igc3BhY2UgbW9kZWwgb2YgZXZlcnkgZG9jdW1lbnQgdXNpbmcgbHVuci5WZWN0b3JcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmNyZWF0ZUZpZWxkVmVjdG9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGZpZWxkVmVjdG9ycyA9IHt9LFxuICAgICAgZmllbGRSZWZzID0gT2JqZWN0LmtleXModGhpcy5maWVsZFRlcm1GcmVxdWVuY2llcyksXG4gICAgICBmaWVsZFJlZnNMZW5ndGggPSBmaWVsZFJlZnMubGVuZ3RoLFxuICAgICAgdGVybUlkZkNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGRSZWZzTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZmllbGRSZWYgPSBsdW5yLkZpZWxkUmVmLmZyb21TdHJpbmcoZmllbGRSZWZzW2ldKSxcbiAgICAgICAgZmllbGROYW1lID0gZmllbGRSZWYuZmllbGROYW1lLFxuICAgICAgICBmaWVsZExlbmd0aCA9IHRoaXMuZmllbGRMZW5ndGhzW2ZpZWxkUmVmXSxcbiAgICAgICAgZmllbGRWZWN0b3IgPSBuZXcgbHVuci5WZWN0b3IsXG4gICAgICAgIHRlcm1GcmVxdWVuY2llcyA9IHRoaXMuZmllbGRUZXJtRnJlcXVlbmNpZXNbZmllbGRSZWZdLFxuICAgICAgICB0ZXJtcyA9IE9iamVjdC5rZXlzKHRlcm1GcmVxdWVuY2llcyksXG4gICAgICAgIHRlcm1zTGVuZ3RoID0gdGVybXMubGVuZ3RoXG5cblxuICAgIHZhciBmaWVsZEJvb3N0ID0gdGhpcy5fZmllbGRzW2ZpZWxkTmFtZV0uYm9vc3QgfHwgMSxcbiAgICAgICAgZG9jQm9vc3QgPSB0aGlzLl9kb2N1bWVudHNbZmllbGRSZWYuZG9jUmVmXS5ib29zdCB8fCAxXG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRlcm1zTGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciB0ZXJtID0gdGVybXNbal0sXG4gICAgICAgICAgdGYgPSB0ZXJtRnJlcXVlbmNpZXNbdGVybV0sXG4gICAgICAgICAgdGVybUluZGV4ID0gdGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dLl9pbmRleCxcbiAgICAgICAgICBpZGYsIHNjb3JlLCBzY29yZVdpdGhQcmVjaXNpb25cblxuICAgICAgaWYgKHRlcm1JZGZDYWNoZVt0ZXJtXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlkZiA9IGx1bnIuaWRmKHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXSwgdGhpcy5kb2N1bWVudENvdW50KVxuICAgICAgICB0ZXJtSWRmQ2FjaGVbdGVybV0gPSBpZGZcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlkZiA9IHRlcm1JZGZDYWNoZVt0ZXJtXVxuICAgICAgfVxuXG4gICAgICBzY29yZSA9IGlkZiAqICgodGhpcy5fazEgKyAxKSAqIHRmKSAvICh0aGlzLl9rMSAqICgxIC0gdGhpcy5fYiArIHRoaXMuX2IgKiAoZmllbGRMZW5ndGggLyB0aGlzLmF2ZXJhZ2VGaWVsZExlbmd0aFtmaWVsZE5hbWVdKSkgKyB0ZilcbiAgICAgIHNjb3JlICo9IGZpZWxkQm9vc3RcbiAgICAgIHNjb3JlICo9IGRvY0Jvb3N0XG4gICAgICBzY29yZVdpdGhQcmVjaXNpb24gPSBNYXRoLnJvdW5kKHNjb3JlICogMTAwMCkgLyAxMDAwXG4gICAgICAvLyBDb252ZXJ0cyAxLjIzNDU2Nzg5IHRvIDEuMjM0LlxuICAgICAgLy8gUmVkdWNpbmcgdGhlIHByZWNpc2lvbiBzbyB0aGF0IHRoZSB2ZWN0b3JzIHRha2UgdXAgbGVzc1xuICAgICAgLy8gc3BhY2Ugd2hlbiBzZXJpYWxpc2VkLiBEb2luZyBpdCBub3cgc28gdGhhdCB0aGV5IGJlaGF2ZVxuICAgICAgLy8gdGhlIHNhbWUgYmVmb3JlIGFuZCBhZnRlciBzZXJpYWxpc2F0aW9uLiBBbHNvLCB0aGlzIGlzXG4gICAgICAvLyB0aGUgZmFzdGVzdCBhcHByb2FjaCB0byByZWR1Y2luZyBhIG51bWJlcidzIHByZWNpc2lvbiBpblxuICAgICAgLy8gSmF2YVNjcmlwdC5cblxuICAgICAgZmllbGRWZWN0b3IuaW5zZXJ0KHRlcm1JbmRleCwgc2NvcmVXaXRoUHJlY2lzaW9uKVxuICAgIH1cblxuICAgIGZpZWxkVmVjdG9yc1tmaWVsZFJlZl0gPSBmaWVsZFZlY3RvclxuICB9XG5cbiAgdGhpcy5maWVsZFZlY3RvcnMgPSBmaWVsZFZlY3RvcnNcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdG9rZW4gc2V0IG9mIGFsbCB0b2tlbnMgaW4gdGhlIGluZGV4IHVzaW5nIGx1bnIuVG9rZW5TZXRcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmNyZWF0ZVRva2VuU2V0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnRva2VuU2V0ID0gbHVuci5Ub2tlblNldC5mcm9tQXJyYXkoXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnZlcnRlZEluZGV4KS5zb3J0KClcbiAgKVxufVxuXG4vKipcbiAqIEJ1aWxkcyB0aGUgaW5kZXgsIGNyZWF0aW5nIGFuIGluc3RhbmNlIG9mIGx1bnIuSW5kZXguXG4gKlxuICogVGhpcyBjb21wbGV0ZXMgdGhlIGluZGV4aW5nIHByb2Nlc3MgYW5kIHNob3VsZCBvbmx5IGJlIGNhbGxlZFxuICogb25jZSBhbGwgZG9jdW1lbnRzIGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgaW5kZXguXG4gKlxuICogQHJldHVybnMge2x1bnIuSW5kZXh9XG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2FsY3VsYXRlQXZlcmFnZUZpZWxkTGVuZ3RocygpXG4gIHRoaXMuY3JlYXRlRmllbGRWZWN0b3JzKClcbiAgdGhpcy5jcmVhdGVUb2tlblNldCgpXG5cbiAgcmV0dXJuIG5ldyBsdW5yLkluZGV4KHtcbiAgICBpbnZlcnRlZEluZGV4OiB0aGlzLmludmVydGVkSW5kZXgsXG4gICAgZmllbGRWZWN0b3JzOiB0aGlzLmZpZWxkVmVjdG9ycyxcbiAgICB0b2tlblNldDogdGhpcy50b2tlblNldCxcbiAgICBmaWVsZHM6IE9iamVjdC5rZXlzKHRoaXMuX2ZpZWxkcyksXG4gICAgcGlwZWxpbmU6IHRoaXMuc2VhcmNoUGlwZWxpbmVcbiAgfSlcbn1cblxuLyoqXG4gKiBBcHBsaWVzIGEgcGx1Z2luIHRvIHRoZSBpbmRleCBidWlsZGVyLlxuICpcbiAqIEEgcGx1Z2luIGlzIGEgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2l0aCB0aGUgaW5kZXggYnVpbGRlciBhcyBpdHMgY29udGV4dC5cbiAqIFBsdWdpbnMgY2FuIGJlIHVzZWQgdG8gY3VzdG9taXNlIG9yIGV4dGVuZCB0aGUgYmVoYXZpb3VyIG9mIHRoZSBpbmRleFxuICogaW4gc29tZSB3YXkuIEEgcGx1Z2luIGlzIGp1c3QgYSBmdW5jdGlvbiwgdGhhdCBlbmNhcHN1bGF0ZWQgdGhlIGN1c3RvbVxuICogYmVoYXZpb3VyIHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgd2hlbiBidWlsZGluZyB0aGUgaW5kZXguXG4gKlxuICogVGhlIHBsdWdpbiBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBpbmRleCBidWlsZGVyIGFzIGl0cyBhcmd1bWVudCwgYWRkaXRpb25hbFxuICogYXJndW1lbnRzIGNhbiBhbHNvIGJlIHBhc3NlZCB3aGVuIGNhbGxpbmcgdXNlLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWRcbiAqIHdpdGggdGhlIGluZGV4IGJ1aWxkZXIgYXMgaXRzIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcGx1Z2luIFRoZSBwbHVnaW4gdG8gYXBwbHkuXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICBhcmdzLnVuc2hpZnQodGhpcylcbiAgZm4uYXBwbHkodGhpcywgYXJncylcbn1cbi8qKlxuICogQ29udGFpbnMgYW5kIGNvbGxlY3RzIG1ldGFkYXRhIGFib3V0IGEgbWF0Y2hpbmcgZG9jdW1lbnQuXG4gKiBBIHNpbmdsZSBpbnN0YW5jZSBvZiBsdW5yLk1hdGNoRGF0YSBpcyByZXR1cm5lZCBhcyBwYXJ0IG9mIGV2ZXJ5XG4gKiBsdW5yLkluZGV4flJlc3VsdC5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXJtIC0gVGhlIHRlcm0gdGhpcyBtYXRjaCBkYXRhIGlzIGFzc29jaWF0ZWQgd2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIC0gVGhlIGZpZWxkIGluIHdoaWNoIHRoZSB0ZXJtIHdhcyBmb3VuZFxuICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhIC0gVGhlIG1ldGFkYXRhIHJlY29yZGVkIGFib3V0IHRoaXMgdGVybSBpbiB0aGlzIGZpZWxkXG4gKiBAcHJvcGVydHkge29iamVjdH0gbWV0YWRhdGEgLSBBIGNsb25lZCBjb2xsZWN0aW9uIG9mIG1ldGFkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGRvY3VtZW50LlxuICogQHNlZSB7QGxpbmsgbHVuci5JbmRleH5SZXN1bHR9XG4gKi9cbmx1bnIuTWF0Y2hEYXRhID0gZnVuY3Rpb24gKHRlcm0sIGZpZWxkLCBtZXRhZGF0YSkge1xuICB2YXIgY2xvbmVkTWV0YWRhdGEgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgbWV0YWRhdGFLZXlzID0gT2JqZWN0LmtleXMobWV0YWRhdGEgfHwge30pXG5cbiAgLy8gQ2xvbmluZyB0aGUgbWV0YWRhdGEgdG8gcHJldmVudCB0aGUgb3JpZ2luYWxcbiAgLy8gYmVpbmcgbXV0YXRlZCBkdXJpbmcgbWF0Y2ggZGF0YSBjb21iaW5hdGlvbi5cbiAgLy8gTWV0YWRhdGEgaXMga2VwdCBpbiBhbiBhcnJheSB3aXRoaW4gdGhlIGludmVydGVkXG4gIC8vIGluZGV4IHNvIGNsb25pbmcgdGhlIGRhdGEgY2FuIGJlIGRvbmUgd2l0aFxuICAvLyBBcnJheSNzbGljZVxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1ldGFkYXRhS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBtZXRhZGF0YUtleXNbaV1cbiAgICBjbG9uZWRNZXRhZGF0YVtrZXldID0gbWV0YWRhdGFba2V5XS5zbGljZSgpXG4gIH1cblxuICB0aGlzLm1ldGFkYXRhID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIGlmICh0ZXJtICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdID0gY2xvbmVkTWV0YWRhdGFcbiAgfVxufVxuXG4vKipcbiAqIEFuIGluc3RhbmNlIG9mIGx1bnIuTWF0Y2hEYXRhIHdpbGwgYmUgY3JlYXRlZCBmb3IgZXZlcnkgdGVybSB0aGF0IG1hdGNoZXMgYVxuICogZG9jdW1lbnQuIEhvd2V2ZXIgb25seSBvbmUgaW5zdGFuY2UgaXMgcmVxdWlyZWQgaW4gYSBsdW5yLkluZGV4flJlc3VsdC4gVGhpc1xuICogbWV0aG9kIGNvbWJpbmVzIG1ldGFkYXRhIGZyb20gYW5vdGhlciBpbnN0YW5jZSBvZiBsdW5yLk1hdGNoRGF0YSB3aXRoIHRoaXNcbiAqIG9iamVjdHMgbWV0YWRhdGEuXG4gKlxuICogQHBhcmFtIHtsdW5yLk1hdGNoRGF0YX0gb3RoZXJNYXRjaERhdGEgLSBBbm90aGVyIGluc3RhbmNlIG9mIG1hdGNoIGRhdGEgdG8gbWVyZ2Ugd2l0aCB0aGlzIG9uZS5cbiAqIEBzZWUge0BsaW5rIGx1bnIuSW5kZXh+UmVzdWx0fVxuICovXG5sdW5yLk1hdGNoRGF0YS5wcm90b3R5cGUuY29tYmluZSA9IGZ1bmN0aW9uIChvdGhlck1hdGNoRGF0YSkge1xuICB2YXIgdGVybXMgPSBPYmplY3Qua2V5cyhvdGhlck1hdGNoRGF0YS5tZXRhZGF0YSlcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRlcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRlcm0gPSB0ZXJtc1tpXSxcbiAgICAgICAgZmllbGRzID0gT2JqZWN0LmtleXMob3RoZXJNYXRjaERhdGEubWV0YWRhdGFbdGVybV0pXG5cbiAgICBpZiAodGhpcy5tZXRhZGF0YVt0ZXJtXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubWV0YWRhdGFbdGVybV0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgfVxuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBmaWVsZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciBmaWVsZCA9IGZpZWxkc1tqXSxcbiAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMob3RoZXJNYXRjaERhdGEubWV0YWRhdGFbdGVybV1bZmllbGRdKVxuXG4gICAgICBpZiAodGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IGtleXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNba11cblxuICAgICAgICBpZiAodGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldID0gb3RoZXJNYXRjaERhdGEubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldID0gdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XS5jb25jYXQob3RoZXJNYXRjaERhdGEubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0pXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFkZCBtZXRhZGF0YSBmb3IgYSB0ZXJtL2ZpZWxkIHBhaXIgdG8gdGhpcyBpbnN0YW5jZSBvZiBtYXRjaCBkYXRhLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXJtIC0gVGhlIHRlcm0gdGhpcyBtYXRjaCBkYXRhIGlzIGFzc29jaWF0ZWQgd2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIC0gVGhlIGZpZWxkIGluIHdoaWNoIHRoZSB0ZXJtIHdhcyBmb3VuZFxuICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhIC0gVGhlIG1ldGFkYXRhIHJlY29yZGVkIGFib3V0IHRoaXMgdGVybSBpbiB0aGlzIGZpZWxkXG4gKi9cbmx1bnIuTWF0Y2hEYXRhLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodGVybSwgZmllbGQsIG1ldGFkYXRhKSB7XG4gIGlmICghKHRlcm0gaW4gdGhpcy5tZXRhZGF0YSkpIHtcbiAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdID0gbWV0YWRhdGFcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICghKGZpZWxkIGluIHRoaXMubWV0YWRhdGFbdGVybV0pKSB7XG4gICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF0gPSBtZXRhZGF0YVxuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIG1ldGFkYXRhS2V5cyA9IE9iamVjdC5rZXlzKG1ldGFkYXRhKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWV0YWRhdGFLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IG1ldGFkYXRhS2V5c1tpXVxuXG4gICAgaWYgKGtleSBpbiB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXSkge1xuICAgICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XSA9IHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0uY29uY2F0KG1ldGFkYXRhW2tleV0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0gPSBtZXRhZGF0YVtrZXldXG4gICAgfVxuICB9XG59XG4vKipcbiAqIEEgbHVuci5RdWVyeSBwcm92aWRlcyBhIHByb2dyYW1tYXRpYyB3YXkgb2YgZGVmaW5pbmcgcXVlcmllcyB0byBiZSBwZXJmb3JtZWRcbiAqIGFnYWluc3QgYSB7QGxpbmsgbHVuci5JbmRleH0uXG4gKlxuICogUHJlZmVyIGNvbnN0cnVjdGluZyBhIGx1bnIuUXVlcnkgdXNpbmcgdGhlIHtAbGluayBsdW5yLkluZGV4I3F1ZXJ5fSBtZXRob2RcbiAqIHNvIHRoZSBxdWVyeSBvYmplY3QgaXMgcHJlLWluaXRpYWxpemVkIHdpdGggdGhlIHJpZ2h0IGluZGV4IGZpZWxkcy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcm9wZXJ0eSB7bHVuci5RdWVyeX5DbGF1c2VbXX0gY2xhdXNlcyAtIEFuIGFycmF5IG9mIHF1ZXJ5IGNsYXVzZXMuXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBhbGxGaWVsZHMgLSBBbiBhcnJheSBvZiBhbGwgYXZhaWxhYmxlIGZpZWxkcyBpbiBhIGx1bnIuSW5kZXguXG4gKi9cbmx1bnIuUXVlcnkgPSBmdW5jdGlvbiAoYWxsRmllbGRzKSB7XG4gIHRoaXMuY2xhdXNlcyA9IFtdXG4gIHRoaXMuYWxsRmllbGRzID0gYWxsRmllbGRzXG59XG5cbi8qKlxuICogQ29uc3RhbnRzIGZvciBpbmRpY2F0aW5nIHdoYXQga2luZCBvZiBhdXRvbWF0aWMgd2lsZGNhcmQgaW5zZXJ0aW9uIHdpbGwgYmUgdXNlZCB3aGVuIGNvbnN0cnVjdGluZyBhIHF1ZXJ5IGNsYXVzZS5cbiAqXG4gKiBUaGlzIGFsbG93cyB3aWxkY2FyZHMgdG8gYmUgYWRkZWQgdG8gdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgdGVybSB3aXRob3V0IGhhdmluZyB0byBtYW51YWxseSBkbyBhbnkgc3RyaW5nXG4gKiBjb25jYXRlbmF0aW9uLlxuICpcbiAqIFRoZSB3aWxkY2FyZCBjb25zdGFudHMgY2FuIGJlIGJpdHdpc2UgY29tYmluZWQgdG8gc2VsZWN0IGJvdGggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2lsZGNhcmRzLlxuICpcbiAqIEBjb25zdGFudFxuICogQGRlZmF1bHRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWxkY2FyZC5OT05FIC0gVGhlIHRlcm0gd2lsbCBoYXZlIG5vIHdpbGRjYXJkcyBpbnNlcnRlZCwgdGhpcyBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvdXJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWxkY2FyZC5MRUFESU5HIC0gUHJlcGVuZCB0aGUgdGVybSB3aXRoIGEgd2lsZGNhcmQsIHVubGVzcyBhIGxlYWRpbmcgd2lsZGNhcmQgYWxyZWFkeSBleGlzdHNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWxkY2FyZC5UUkFJTElORyAtIEFwcGVuZCBhIHdpbGRjYXJkIHRvIHRoZSB0ZXJtLCB1bmxlc3MgYSB0cmFpbGluZyB3aWxkY2FyZCBhbHJlYWR5IGV4aXN0c1xuICogQHNlZSBsdW5yLlF1ZXJ5fkNsYXVzZVxuICogQHNlZSBsdW5yLlF1ZXJ5I2NsYXVzZVxuICogQHNlZSBsdW5yLlF1ZXJ5I3Rlcm1cbiAqIEBleGFtcGxlIDxjYXB0aW9uPnF1ZXJ5IHRlcm0gd2l0aCB0cmFpbGluZyB3aWxkY2FyZDwvY2FwdGlvbj5cbiAqIHF1ZXJ5LnRlcm0oJ2ZvbycsIHsgd2lsZGNhcmQ6IGx1bnIuUXVlcnkud2lsZGNhcmQuVFJBSUxJTkcgfSlcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnF1ZXJ5IHRlcm0gd2l0aCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aWxkY2FyZDwvY2FwdGlvbj5cbiAqIHF1ZXJ5LnRlcm0oJ2ZvbycsIHtcbiAqICAgd2lsZGNhcmQ6IGx1bnIuUXVlcnkud2lsZGNhcmQuTEVBRElORyB8IGx1bnIuUXVlcnkud2lsZGNhcmQuVFJBSUxJTkdcbiAqIH0pXG4gKi9cblxubHVuci5RdWVyeS53aWxkY2FyZCA9IG5ldyBTdHJpbmcgKFwiKlwiKVxubHVuci5RdWVyeS53aWxkY2FyZC5OT05FID0gMFxubHVuci5RdWVyeS53aWxkY2FyZC5MRUFESU5HID0gMVxubHVuci5RdWVyeS53aWxkY2FyZC5UUkFJTElORyA9IDJcblxuLyoqXG4gKiBDb25zdGFudHMgZm9yIGluZGljYXRpbmcgd2hhdCBraW5kIG9mIHByZXNlbmNlIGEgdGVybSBtdXN0IGhhdmUgaW4gbWF0Y2hpbmcgZG9jdW1lbnRzLlxuICpcbiAqIEBjb25zdGFudFxuICogQGVudW0ge251bWJlcn1cbiAqIEBzZWUgbHVuci5RdWVyeX5DbGF1c2VcbiAqIEBzZWUgbHVuci5RdWVyeSNjbGF1c2VcbiAqIEBzZWUgbHVuci5RdWVyeSN0ZXJtXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5xdWVyeSB0ZXJtIHdpdGggcmVxdWlyZWQgcHJlc2VuY2U8L2NhcHRpb24+XG4gKiBxdWVyeS50ZXJtKCdmb28nLCB7IHByZXNlbmNlOiBsdW5yLlF1ZXJ5LnByZXNlbmNlLlJFUVVJUkVEIH0pXG4gKi9cbmx1bnIuUXVlcnkucHJlc2VuY2UgPSB7XG4gIC8qKlxuICAgKiBUZXJtJ3MgcHJlc2VuY2UgaW4gYSBkb2N1bWVudCBpcyBvcHRpb25hbCwgdGhpcyBpcyB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICovXG4gIE9QVElPTkFMOiAxLFxuXG4gIC8qKlxuICAgKiBUZXJtJ3MgcHJlc2VuY2UgaW4gYSBkb2N1bWVudCBpcyByZXF1aXJlZCwgZG9jdW1lbnRzIHRoYXQgZG8gbm90IGNvbnRhaW5cbiAgICogdGhpcyB0ZXJtIHdpbGwgbm90IGJlIHJldHVybmVkLlxuICAgKi9cbiAgUkVRVUlSRUQ6IDIsXG5cbiAgLyoqXG4gICAqIFRlcm0ncyBwcmVzZW5jZSBpbiBhIGRvY3VtZW50IGlzIHByb2hpYml0ZWQsIGRvY3VtZW50cyB0aGF0IGRvIGNvbnRhaW5cbiAgICogdGhpcyB0ZXJtIHdpbGwgbm90IGJlIHJldHVybmVkLlxuICAgKi9cbiAgUFJPSElCSVRFRDogM1xufVxuXG4vKipcbiAqIEEgc2luZ2xlIGNsYXVzZSBpbiBhIHtAbGluayBsdW5yLlF1ZXJ5fSBjb250YWlucyBhIHRlcm0gYW5kIGRldGFpbHMgb24gaG93IHRvXG4gKiBtYXRjaCB0aGF0IHRlcm0gYWdhaW5zdCBhIHtAbGluayBsdW5yLkluZGV4fS5cbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBsdW5yLlF1ZXJ5fkNsYXVzZVxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gZmllbGRzIC0gVGhlIGZpZWxkcyBpbiBhbiBpbmRleCB0aGlzIGNsYXVzZSBzaG91bGQgYmUgbWF0Y2hlZCBhZ2FpbnN0LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtib29zdD0xXSAtIEFueSBib29zdCB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHdoZW4gbWF0Y2hpbmcgdGhpcyBjbGF1c2UuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2VkaXREaXN0YW5jZV0gLSBXaGV0aGVyIHRoZSB0ZXJtIHNob3VsZCBoYXZlIGZ1enp5IG1hdGNoaW5nIGFwcGxpZWQsIGFuZCBob3cgZnV6enkgdGhlIG1hdGNoIHNob3VsZCBiZS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3VzZVBpcGVsaW5lXSAtIFdoZXRoZXIgdGhlIHRlcm0gc2hvdWxkIGJlIHBhc3NlZCB0aHJvdWdoIHRoZSBzZWFyY2ggcGlwZWxpbmUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3dpbGRjYXJkPWx1bnIuUXVlcnkud2lsZGNhcmQuTk9ORV0gLSBXaGV0aGVyIHRoZSB0ZXJtIHNob3VsZCBoYXZlIHdpbGRjYXJkcyBhcHBlbmRlZCBvciBwcmVwZW5kZWQuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3ByZXNlbmNlPWx1bnIuUXVlcnkucHJlc2VuY2UuT1BUSU9OQUxdIC0gVGhlIHRlcm1zIHByZXNlbmNlIGluIGFueSBtYXRjaGluZyBkb2N1bWVudHMuXG4gKi9cblxuLyoqXG4gKiBBZGRzIGEge0BsaW5rIGx1bnIuUXVlcnl+Q2xhdXNlfSB0byB0aGlzIHF1ZXJ5LlxuICpcbiAqIFVubGVzcyB0aGUgY2xhdXNlIGNvbnRhaW5zIHRoZSBmaWVsZHMgdG8gYmUgbWF0Y2hlZCBhbGwgZmllbGRzIHdpbGwgYmUgbWF0Y2hlZC4gSW4gYWRkaXRpb25cbiAqIGEgZGVmYXVsdCBib29zdCBvZiAxIGlzIGFwcGxpZWQgdG8gdGhlIGNsYXVzZS5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUXVlcnl+Q2xhdXNlfSBjbGF1c2UgLSBUaGUgY2xhdXNlIHRvIGFkZCB0byB0aGlzIHF1ZXJ5LlxuICogQHNlZSBsdW5yLlF1ZXJ5fkNsYXVzZVxuICogQHJldHVybnMge2x1bnIuUXVlcnl9XG4gKi9cbmx1bnIuUXVlcnkucHJvdG90eXBlLmNsYXVzZSA9IGZ1bmN0aW9uIChjbGF1c2UpIHtcbiAgaWYgKCEoJ2ZpZWxkcycgaW4gY2xhdXNlKSkge1xuICAgIGNsYXVzZS5maWVsZHMgPSB0aGlzLmFsbEZpZWxkc1xuICB9XG5cbiAgaWYgKCEoJ2Jvb3N0JyBpbiBjbGF1c2UpKSB7XG4gICAgY2xhdXNlLmJvb3N0ID0gMVxuICB9XG5cbiAgaWYgKCEoJ3VzZVBpcGVsaW5lJyBpbiBjbGF1c2UpKSB7XG4gICAgY2xhdXNlLnVzZVBpcGVsaW5lID0gdHJ1ZVxuICB9XG5cbiAgaWYgKCEoJ3dpbGRjYXJkJyBpbiBjbGF1c2UpKSB7XG4gICAgY2xhdXNlLndpbGRjYXJkID0gbHVuci5RdWVyeS53aWxkY2FyZC5OT05FXG4gIH1cblxuICBpZiAoKGNsYXVzZS53aWxkY2FyZCAmIGx1bnIuUXVlcnkud2lsZGNhcmQuTEVBRElORykgJiYgKGNsYXVzZS50ZXJtLmNoYXJBdCgwKSAhPSBsdW5yLlF1ZXJ5LndpbGRjYXJkKSkge1xuICAgIGNsYXVzZS50ZXJtID0gXCIqXCIgKyBjbGF1c2UudGVybVxuICB9XG5cbiAgaWYgKChjbGF1c2Uud2lsZGNhcmQgJiBsdW5yLlF1ZXJ5LndpbGRjYXJkLlRSQUlMSU5HKSAmJiAoY2xhdXNlLnRlcm0uc2xpY2UoLTEpICE9IGx1bnIuUXVlcnkud2lsZGNhcmQpKSB7XG4gICAgY2xhdXNlLnRlcm0gPSBcIlwiICsgY2xhdXNlLnRlcm0gKyBcIipcIlxuICB9XG5cbiAgaWYgKCEoJ3ByZXNlbmNlJyBpbiBjbGF1c2UpKSB7XG4gICAgY2xhdXNlLnByZXNlbmNlID0gbHVuci5RdWVyeS5wcmVzZW5jZS5PUFRJT05BTFxuICB9XG5cbiAgdGhpcy5jbGF1c2VzLnB1c2goY2xhdXNlKVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQSBuZWdhdGVkIHF1ZXJ5IGlzIG9uZSBpbiB3aGljaCBldmVyeSBjbGF1c2UgaGFzIGEgcHJlc2VuY2Ugb2ZcbiAqIHByb2hpYml0ZWQuIFRoZXNlIHF1ZXJpZXMgcmVxdWlyZSBzb21lIHNwZWNpYWwgcHJvY2Vzc2luZyB0byByZXR1cm5cbiAqIHRoZSBleHBlY3RlZCByZXN1bHRzLlxuICpcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xubHVuci5RdWVyeS5wcm90b3R5cGUuaXNOZWdhdGVkID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2xhdXNlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0aGlzLmNsYXVzZXNbaV0ucHJlc2VuY2UgIT0gbHVuci5RdWVyeS5wcmVzZW5jZS5QUk9ISUJJVEVEKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKipcbiAqIEFkZHMgYSB0ZXJtIHRvIHRoZSBjdXJyZW50IHF1ZXJ5LCB1bmRlciB0aGUgY292ZXJzIHRoaXMgd2lsbCBjcmVhdGUgYSB7QGxpbmsgbHVuci5RdWVyeX5DbGF1c2V9XG4gKiB0byB0aGUgbGlzdCBvZiBjbGF1c2VzIHRoYXQgbWFrZSB1cCB0aGlzIHF1ZXJ5LlxuICpcbiAqIFRoZSB0ZXJtIGlzIHVzZWQgYXMgaXMsIGkuZS4gbm8gdG9rZW5pemF0aW9uIHdpbGwgYmUgcGVyZm9ybWVkIGJ5IHRoaXMgbWV0aG9kLiBJbnN0ZWFkIGNvbnZlcnNpb25cbiAqIHRvIGEgdG9rZW4gb3IgdG9rZW4tbGlrZSBzdHJpbmcgc2hvdWxkIGJlIGRvbmUgYmVmb3JlIGNhbGxpbmcgdGhpcyBtZXRob2QuXG4gKlxuICogVGhlIHRlcm0gd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYSBzdHJpbmcgYnkgY2FsbGluZyBgdG9TdHJpbmdgLiBNdWx0aXBsZSB0ZXJtcyBjYW4gYmUgcGFzc2VkIGFzIGFuXG4gKiBhcnJheSwgZWFjaCB0ZXJtIGluIHRoZSBhcnJheSB3aWxsIHNoYXJlIHRoZSBzYW1lIG9wdGlvbnMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8b2JqZWN0W119IHRlcm0gLSBUaGUgdGVybShzKSB0byBhZGQgdG8gdGhlIHF1ZXJ5LlxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtIEFueSBhZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gYWRkIHRvIHRoZSBxdWVyeSBjbGF1c2UuXG4gKiBAcmV0dXJucyB7bHVuci5RdWVyeX1cbiAqIEBzZWUgbHVuci5RdWVyeSNjbGF1c2VcbiAqIEBzZWUgbHVuci5RdWVyeX5DbGF1c2VcbiAqIEBleGFtcGxlIDxjYXB0aW9uPmFkZGluZyBhIHNpbmdsZSB0ZXJtIHRvIGEgcXVlcnk8L2NhcHRpb24+XG4gKiBxdWVyeS50ZXJtKFwiZm9vXCIpXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5hZGRpbmcgYSBzaW5nbGUgdGVybSB0byBhIHF1ZXJ5IGFuZCBzcGVjaWZ5aW5nIHNlYXJjaCBmaWVsZHMsIHRlcm0gYm9vc3QgYW5kIGF1dG9tYXRpYyB0cmFpbGluZyB3aWxkY2FyZDwvY2FwdGlvbj5cbiAqIHF1ZXJ5LnRlcm0oXCJmb29cIiwge1xuICogICBmaWVsZHM6IFtcInRpdGxlXCJdLFxuICogICBib29zdDogMTAsXG4gKiAgIHdpbGRjYXJkOiBsdW5yLlF1ZXJ5LndpbGRjYXJkLlRSQUlMSU5HXG4gKiB9KVxuICogQGV4YW1wbGUgPGNhcHRpb24+dXNpbmcgbHVuci50b2tlbml6ZXIgdG8gY29udmVydCBhIHN0cmluZyB0byB0b2tlbnMgYmVmb3JlIHVzaW5nIHRoZW0gYXMgdGVybXM8L2NhcHRpb24+XG4gKiBxdWVyeS50ZXJtKGx1bnIudG9rZW5pemVyKFwiZm9vIGJhclwiKSlcbiAqL1xubHVuci5RdWVyeS5wcm90b3R5cGUudGVybSA9IGZ1bmN0aW9uICh0ZXJtLCBvcHRpb25zKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHRlcm0pKSB7XG4gICAgdGVybS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7IHRoaXMudGVybSh0LCBsdW5yLnV0aWxzLmNsb25lKG9wdGlvbnMpKSB9LCB0aGlzKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB2YXIgY2xhdXNlID0gb3B0aW9ucyB8fCB7fVxuICBjbGF1c2UudGVybSA9IHRlcm0udG9TdHJpbmcoKVxuXG4gIHRoaXMuY2xhdXNlKGNsYXVzZSlcblxuICByZXR1cm4gdGhpc1xufVxubHVuci5RdWVyeVBhcnNlRXJyb3IgPSBmdW5jdGlvbiAobWVzc2FnZSwgc3RhcnQsIGVuZCkge1xuICB0aGlzLm5hbWUgPSBcIlF1ZXJ5UGFyc2VFcnJvclwiXG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2VcbiAgdGhpcy5zdGFydCA9IHN0YXJ0XG4gIHRoaXMuZW5kID0gZW5kXG59XG5cbmx1bnIuUXVlcnlQYXJzZUVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvclxubHVuci5RdWVyeUxleGVyID0gZnVuY3Rpb24gKHN0cikge1xuICB0aGlzLmxleGVtZXMgPSBbXVxuICB0aGlzLnN0ciA9IHN0clxuICB0aGlzLmxlbmd0aCA9IHN0ci5sZW5ndGhcbiAgdGhpcy5wb3MgPSAwXG4gIHRoaXMuc3RhcnQgPSAwXG4gIHRoaXMuZXNjYXBlQ2hhclBvc2l0aW9ucyA9IFtdXG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RhdGUgPSBsdW5yLlF1ZXJ5TGV4ZXIubGV4VGV4dFxuXG4gIHdoaWxlIChzdGF0ZSkge1xuICAgIHN0YXRlID0gc3RhdGUodGhpcylcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLnNsaWNlU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3ViU2xpY2VzID0gW10sXG4gICAgICBzbGljZVN0YXJ0ID0gdGhpcy5zdGFydCxcbiAgICAgIHNsaWNlRW5kID0gdGhpcy5wb3NcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXNjYXBlQ2hhclBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIHNsaWNlRW5kID0gdGhpcy5lc2NhcGVDaGFyUG9zaXRpb25zW2ldXG4gICAgc3ViU2xpY2VzLnB1c2godGhpcy5zdHIuc2xpY2Uoc2xpY2VTdGFydCwgc2xpY2VFbmQpKVxuICAgIHNsaWNlU3RhcnQgPSBzbGljZUVuZCArIDFcbiAgfVxuXG4gIHN1YlNsaWNlcy5wdXNoKHRoaXMuc3RyLnNsaWNlKHNsaWNlU3RhcnQsIHRoaXMucG9zKSlcbiAgdGhpcy5lc2NhcGVDaGFyUG9zaXRpb25zLmxlbmd0aCA9IDBcblxuICByZXR1cm4gc3ViU2xpY2VzLmpvaW4oJycpXG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIHRoaXMubGV4ZW1lcy5wdXNoKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHN0cjogdGhpcy5zbGljZVN0cmluZygpLFxuICAgIHN0YXJ0OiB0aGlzLnN0YXJ0LFxuICAgIGVuZDogdGhpcy5wb3NcbiAgfSlcblxuICB0aGlzLnN0YXJ0ID0gdGhpcy5wb3Ncbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5lc2NhcGVDaGFyYWN0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZXNjYXBlQ2hhclBvc2l0aW9ucy5wdXNoKHRoaXMucG9zIC0gMSlcbiAgdGhpcy5wb3MgKz0gMVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnBvcyA+PSB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIuRU9TXG4gIH1cblxuICB2YXIgY2hhciA9IHRoaXMuc3RyLmNoYXJBdCh0aGlzLnBvcylcbiAgdGhpcy5wb3MgKz0gMVxuICByZXR1cm4gY2hhclxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLndpZHRoID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5wb3MgLSB0aGlzLnN0YXJ0XG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUuaWdub3JlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5zdGFydCA9PSB0aGlzLnBvcykge1xuICAgIHRoaXMucG9zICs9IDFcbiAgfVxuXG4gIHRoaXMuc3RhcnQgPSB0aGlzLnBvc1xufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLmJhY2t1cCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wb3MgLT0gMVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLmFjY2VwdERpZ2l0UnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY2hhciwgY2hhckNvZGVcblxuICBkbyB7XG4gICAgY2hhciA9IHRoaXMubmV4dCgpXG4gICAgY2hhckNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMClcbiAgfSB3aGlsZSAoY2hhckNvZGUgPiA0NyAmJiBjaGFyQ29kZSA8IDU4KVxuXG4gIGlmIChjaGFyICE9IGx1bnIuUXVlcnlMZXhlci5FT1MpIHtcbiAgICB0aGlzLmJhY2t1cCgpXG4gIH1cbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5tb3JlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5wb3MgPCB0aGlzLmxlbmd0aFxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIuRU9TID0gJ0VPUydcbmx1bnIuUXVlcnlMZXhlci5GSUVMRCA9ICdGSUVMRCdcbmx1bnIuUXVlcnlMZXhlci5URVJNID0gJ1RFUk0nXG5sdW5yLlF1ZXJ5TGV4ZXIuRURJVF9ESVNUQU5DRSA9ICdFRElUX0RJU1RBTkNFJ1xubHVuci5RdWVyeUxleGVyLkJPT1NUID0gJ0JPT1NUJ1xubHVuci5RdWVyeUxleGVyLlBSRVNFTkNFID0gJ1BSRVNFTkNFJ1xuXG5sdW5yLlF1ZXJ5TGV4ZXIubGV4RmllbGQgPSBmdW5jdGlvbiAobGV4ZXIpIHtcbiAgbGV4ZXIuYmFja3VwKClcbiAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuRklFTEQpXG4gIGxleGVyLmlnbm9yZSgpXG4gIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4VGV4dFxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIubGV4VGVybSA9IGZ1bmN0aW9uIChsZXhlcikge1xuICBpZiAobGV4ZXIud2lkdGgoKSA+IDEpIHtcbiAgICBsZXhlci5iYWNrdXAoKVxuICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlRFUk0pXG4gIH1cblxuICBsZXhlci5pZ25vcmUoKVxuXG4gIGlmIChsZXhlci5tb3JlKCkpIHtcbiAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRleHRcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIubGV4RWRpdERpc3RhbmNlID0gZnVuY3Rpb24gKGxleGVyKSB7XG4gIGxleGVyLmlnbm9yZSgpXG4gIGxleGVyLmFjY2VwdERpZ2l0UnVuKClcbiAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuRURJVF9ESVNUQU5DRSlcbiAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhUZXh0XG59XG5cbmx1bnIuUXVlcnlMZXhlci5sZXhCb29zdCA9IGZ1bmN0aW9uIChsZXhlcikge1xuICBsZXhlci5pZ25vcmUoKVxuICBsZXhlci5hY2NlcHREaWdpdFJ1bigpXG4gIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLkJPT1NUKVxuICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRleHRcbn1cblxubHVuci5RdWVyeUxleGVyLmxleEVPUyA9IGZ1bmN0aW9uIChsZXhlcikge1xuICBpZiAobGV4ZXIud2lkdGgoKSA+IDApIHtcbiAgICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5URVJNKVxuICB9XG59XG5cbi8vIFRoaXMgbWF0Y2hlcyB0aGUgc2VwYXJhdG9yIHVzZWQgd2hlbiB0b2tlbmlzaW5nIGZpZWxkc1xuLy8gd2l0aGluIGEgZG9jdW1lbnQuIFRoZXNlIHNob3VsZCBtYXRjaCBvdGhlcndpc2UgaXQgaXNcbi8vIG5vdCBwb3NzaWJsZSB0byBzZWFyY2ggZm9yIHNvbWUgdG9rZW5zIHdpdGhpbiBhIGRvY3VtZW50LlxuLy9cbi8vIEl0IGlzIHBvc3NpYmxlIGZvciB0aGUgdXNlciB0byBjaGFuZ2UgdGhlIHNlcGFyYXRvciBvbiB0aGVcbi8vIHRva2VuaXplciBzbyBpdCBfbWlnaHRfIGNsYXNoIHdpdGggYW55IG90aGVyIG9mIHRoZSBzcGVjaWFsXG4vLyBjaGFyYWN0ZXJzIGFscmVhZHkgdXNlZCB3aXRoaW4gdGhlIHNlYXJjaCBzdHJpbmcsIGUuZy4gOi5cbi8vXG4vLyBUaGlzIG1lYW5zIHRoYXQgaXQgaXMgcG9zc2libGUgdG8gY2hhbmdlIHRoZSBzZXBhcmF0b3IgaW5cbi8vIHN1Y2ggYSB3YXkgdGhhdCBtYWtlcyBzb21lIHdvcmRzIHVuc2VhcmNoYWJsZSB1c2luZyBhIHNlYXJjaFxuLy8gc3RyaW5nLlxubHVuci5RdWVyeUxleGVyLnRlcm1TZXBhcmF0b3IgPSBsdW5yLnRva2VuaXplci5zZXBhcmF0b3JcblxubHVuci5RdWVyeUxleGVyLmxleFRleHQgPSBmdW5jdGlvbiAobGV4ZXIpIHtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgY2hhciA9IGxleGVyLm5leHQoKVxuXG4gICAgaWYgKGNoYXIgPT0gbHVuci5RdWVyeUxleGVyLkVPUykge1xuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhFT1NcbiAgICB9XG5cbiAgICAvLyBFc2NhcGUgY2hhcmFjdGVyIGlzICdcXCdcbiAgICBpZiAoY2hhci5jaGFyQ29kZUF0KDApID09IDkyKSB7XG4gICAgICBsZXhlci5lc2NhcGVDaGFyYWN0ZXIoKVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAoY2hhciA9PSBcIjpcIikge1xuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhGaWVsZFxuICAgIH1cblxuICAgIGlmIChjaGFyID09IFwiflwiKSB7XG4gICAgICBsZXhlci5iYWNrdXAoKVxuICAgICAgaWYgKGxleGVyLndpZHRoKCkgPiAwKSB7XG4gICAgICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlRFUk0pXG4gICAgICB9XG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleEVkaXREaXN0YW5jZVxuICAgIH1cblxuICAgIGlmIChjaGFyID09IFwiXlwiKSB7XG4gICAgICBsZXhlci5iYWNrdXAoKVxuICAgICAgaWYgKGxleGVyLndpZHRoKCkgPiAwKSB7XG4gICAgICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlRFUk0pXG4gICAgICB9XG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleEJvb3N0XG4gICAgfVxuXG4gICAgLy8gXCIrXCIgaW5kaWNhdGVzIHRlcm0gcHJlc2VuY2UgaXMgcmVxdWlyZWRcbiAgICAvLyBjaGVja2luZyBmb3IgbGVuZ3RoIHRvIGVuc3VyZSB0aGF0IG9ubHlcbiAgICAvLyBsZWFkaW5nIFwiK1wiIGFyZSBjb25zaWRlcmVkXG4gICAgaWYgKGNoYXIgPT0gXCIrXCIgJiYgbGV4ZXIud2lkdGgoKSA9PT0gMSkge1xuICAgICAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuUFJFU0VOQ0UpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRleHRcbiAgICB9XG5cbiAgICAvLyBcIi1cIiBpbmRpY2F0ZXMgdGVybSBwcmVzZW5jZSBpcyBwcm9oaWJpdGVkXG4gICAgLy8gY2hlY2tpbmcgZm9yIGxlbmd0aCB0byBlbnN1cmUgdGhhdCBvbmx5XG4gICAgLy8gbGVhZGluZyBcIi1cIiBhcmUgY29uc2lkZXJlZFxuICAgIGlmIChjaGFyID09IFwiLVwiICYmIGxleGVyLndpZHRoKCkgPT09IDEpIHtcbiAgICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlBSRVNFTkNFKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhUZXh0XG4gICAgfVxuXG4gICAgaWYgKGNoYXIubWF0Y2gobHVuci5RdWVyeUxleGVyLnRlcm1TZXBhcmF0b3IpKSB7XG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRlcm1cbiAgICB9XG4gIH1cbn1cblxubHVuci5RdWVyeVBhcnNlciA9IGZ1bmN0aW9uIChzdHIsIHF1ZXJ5KSB7XG4gIHRoaXMubGV4ZXIgPSBuZXcgbHVuci5RdWVyeUxleGVyIChzdHIpXG4gIHRoaXMucXVlcnkgPSBxdWVyeVxuICB0aGlzLmN1cnJlbnRDbGF1c2UgPSB7fVxuICB0aGlzLmxleGVtZUlkeCA9IDBcbn1cblxubHVuci5RdWVyeVBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubGV4ZXIucnVuKClcbiAgdGhpcy5sZXhlbWVzID0gdGhpcy5sZXhlci5sZXhlbWVzXG5cbiAgdmFyIHN0YXRlID0gbHVuci5RdWVyeVBhcnNlci5wYXJzZUNsYXVzZVxuXG4gIHdoaWxlIChzdGF0ZSkge1xuICAgIHN0YXRlID0gc3RhdGUodGhpcylcbiAgfVxuXG4gIHJldHVybiB0aGlzLnF1ZXJ5XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucHJvdG90eXBlLnBlZWtMZXhlbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmxleGVtZXNbdGhpcy5sZXhlbWVJZHhdXG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucHJvdG90eXBlLmNvbnN1bWVMZXhlbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsZXhlbWUgPSB0aGlzLnBlZWtMZXhlbWUoKVxuICB0aGlzLmxleGVtZUlkeCArPSAxXG4gIHJldHVybiBsZXhlbWVcbn1cblxubHVuci5RdWVyeVBhcnNlci5wcm90b3R5cGUubmV4dENsYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvbXBsZXRlZENsYXVzZSA9IHRoaXMuY3VycmVudENsYXVzZVxuICB0aGlzLnF1ZXJ5LmNsYXVzZShjb21wbGV0ZWRDbGF1c2UpXG4gIHRoaXMuY3VycmVudENsYXVzZSA9IHt9XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucGFyc2VDbGF1c2UgPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIucGVla0xleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN3aXRjaCAobGV4ZW1lLnR5cGUpIHtcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5QUkVTRU5DRTpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlUHJlc2VuY2VcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5GSUVMRDpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGRcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5URVJNOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VUZXJtXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcImV4cGVjdGVkIGVpdGhlciBhIGZpZWxkIG9yIGEgdGVybSwgZm91bmQgXCIgKyBsZXhlbWUudHlwZVxuXG4gICAgICBpZiAobGV4ZW1lLnN0ci5sZW5ndGggPj0gMSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UgKz0gXCIgd2l0aCB2YWx1ZSAnXCIgKyBsZXhlbWUuc3RyICsgXCInXCJcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIGxleGVtZS5zdGFydCwgbGV4ZW1lLmVuZClcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlUHJlc2VuY2UgPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIuY29uc3VtZUxleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN3aXRjaCAobGV4ZW1lLnN0cikge1xuICAgIGNhc2UgXCItXCI6XG4gICAgICBwYXJzZXIuY3VycmVudENsYXVzZS5wcmVzZW5jZSA9IGx1bnIuUXVlcnkucHJlc2VuY2UuUFJPSElCSVRFRFxuICAgICAgYnJlYWtcbiAgICBjYXNlIFwiK1wiOlxuICAgICAgcGFyc2VyLmN1cnJlbnRDbGF1c2UucHJlc2VuY2UgPSBsdW5yLlF1ZXJ5LnByZXNlbmNlLlJFUVVJUkVEXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJ1bnJlY29nbmlzZWQgcHJlc2VuY2Ugb3BlcmF0b3InXCIgKyBsZXhlbWUuc3RyICsgXCInXCJcbiAgICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cblxuICB2YXIgbmV4dExleGVtZSA9IHBhcnNlci5wZWVrTGV4ZW1lKClcblxuICBpZiAobmV4dExleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJleHBlY3RpbmcgdGVybSBvciBmaWVsZCwgZm91bmQgbm90aGluZ1wiXG4gICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIGxleGVtZS5zdGFydCwgbGV4ZW1lLmVuZClcbiAgfVxuXG4gIHN3aXRjaCAobmV4dExleGVtZS50eXBlKSB7XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRklFTEQ6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUZpZWxkXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuVEVSTTpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlVGVybVxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJleHBlY3RpbmcgdGVybSBvciBmaWVsZCwgZm91bmQgJ1wiICsgbmV4dExleGVtZS50eXBlICsgXCInXCJcbiAgICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBuZXh0TGV4ZW1lLnN0YXJ0LCBuZXh0TGV4ZW1lLmVuZClcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGQgPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIuY29uc3VtZUxleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChwYXJzZXIucXVlcnkuYWxsRmllbGRzLmluZGV4T2YobGV4ZW1lLnN0cikgPT0gLTEpIHtcbiAgICB2YXIgcG9zc2libGVGaWVsZHMgPSBwYXJzZXIucXVlcnkuYWxsRmllbGRzLm1hcChmdW5jdGlvbiAoZikgeyByZXR1cm4gXCInXCIgKyBmICsgXCInXCIgfSkuam9pbignLCAnKSxcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gXCJ1bnJlY29nbmlzZWQgZmllbGQgJ1wiICsgbGV4ZW1lLnN0ciArIFwiJywgcG9zc2libGUgZmllbGRzOiBcIiArIHBvc3NpYmxlRmllbGRzXG5cbiAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbGV4ZW1lLnN0YXJ0LCBsZXhlbWUuZW5kKVxuICB9XG5cbiAgcGFyc2VyLmN1cnJlbnRDbGF1c2UuZmllbGRzID0gW2xleGVtZS5zdHJdXG5cbiAgdmFyIG5leHRMZXhlbWUgPSBwYXJzZXIucGVla0xleGVtZSgpXG5cbiAgaWYgKG5leHRMZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiZXhwZWN0aW5nIHRlcm0sIGZvdW5kIG5vdGhpbmdcIlxuICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cblxuICBzd2l0Y2ggKG5leHRMZXhlbWUudHlwZSkge1xuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlRFUk06XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm1cbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiZXhwZWN0aW5nIHRlcm0sIGZvdW5kICdcIiArIG5leHRMZXhlbWUudHlwZSArIFwiJ1wiXG4gICAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbmV4dExleGVtZS5zdGFydCwgbmV4dExleGVtZS5lbmQpXG4gIH1cbn1cblxubHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm0gPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIuY29uc3VtZUxleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHBhcnNlci5jdXJyZW50Q2xhdXNlLnRlcm0gPSBsZXhlbWUuc3RyLnRvTG93ZXJDYXNlKClcblxuICBpZiAobGV4ZW1lLnN0ci5pbmRleE9mKFwiKlwiKSAhPSAtMSkge1xuICAgIHBhcnNlci5jdXJyZW50Q2xhdXNlLnVzZVBpcGVsaW5lID0gZmFsc2VcbiAgfVxuXG4gIHZhciBuZXh0TGV4ZW1lID0gcGFyc2VyLnBlZWtMZXhlbWUoKVxuXG4gIGlmIChuZXh0TGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN3aXRjaCAobmV4dExleGVtZS50eXBlKSB7XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuVEVSTTpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlVGVybVxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkZJRUxEOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VGaWVsZFxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkVESVRfRElTVEFOQ0U6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUVkaXREaXN0YW5jZVxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkJPT1NUOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VCb29zdFxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlBSRVNFTkNFOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VQcmVzZW5jZVxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJVbmV4cGVjdGVkIGxleGVtZSB0eXBlICdcIiArIG5leHRMZXhlbWUudHlwZSArIFwiJ1wiXG4gICAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbmV4dExleGVtZS5zdGFydCwgbmV4dExleGVtZS5lbmQpXG4gIH1cbn1cblxubHVuci5RdWVyeVBhcnNlci5wYXJzZUVkaXREaXN0YW5jZSA9IGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgdmFyIGxleGVtZSA9IHBhcnNlci5jb25zdW1lTGV4ZW1lKClcblxuICBpZiAobGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGVkaXREaXN0YW5jZSA9IHBhcnNlSW50KGxleGVtZS5zdHIsIDEwKVxuXG4gIGlmIChpc05hTihlZGl0RGlzdGFuY2UpKSB7XG4gICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiZWRpdCBkaXN0YW5jZSBtdXN0IGJlIG51bWVyaWNcIlxuICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cblxuICBwYXJzZXIuY3VycmVudENsYXVzZS5lZGl0RGlzdGFuY2UgPSBlZGl0RGlzdGFuY2VcblxuICB2YXIgbmV4dExleGVtZSA9IHBhcnNlci5wZWVrTGV4ZW1lKClcblxuICBpZiAobmV4dExleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKG5leHRMZXhlbWUudHlwZSkge1xuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlRFUk06XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm1cbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5GSUVMRDpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGRcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5FRElUX0RJU1RBTkNFOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VFZGl0RGlzdGFuY2VcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5CT09TVDpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlQm9vc3RcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5QUkVTRU5DRTpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlUHJlc2VuY2VcbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiVW5leHBlY3RlZCBsZXhlbWUgdHlwZSAnXCIgKyBuZXh0TGV4ZW1lLnR5cGUgKyBcIidcIlxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIG5leHRMZXhlbWUuc3RhcnQsIG5leHRMZXhlbWUuZW5kKVxuICB9XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucGFyc2VCb29zdCA9IGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgdmFyIGxleGVtZSA9IHBhcnNlci5jb25zdW1lTGV4ZW1lKClcblxuICBpZiAobGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGJvb3N0ID0gcGFyc2VJbnQobGV4ZW1lLnN0ciwgMTApXG5cbiAgaWYgKGlzTmFOKGJvb3N0KSkge1xuICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcImJvb3N0IG11c3QgYmUgbnVtZXJpY1wiXG4gICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIGxleGVtZS5zdGFydCwgbGV4ZW1lLmVuZClcbiAgfVxuXG4gIHBhcnNlci5jdXJyZW50Q2xhdXNlLmJvb3N0ID0gYm9vc3RcblxuICB2YXIgbmV4dExleGVtZSA9IHBhcnNlci5wZWVrTGV4ZW1lKClcblxuICBpZiAobmV4dExleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKG5leHRMZXhlbWUudHlwZSkge1xuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlRFUk06XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm1cbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5GSUVMRDpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGRcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5FRElUX0RJU1RBTkNFOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VFZGl0RGlzdGFuY2VcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5CT09TVDpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlQm9vc3RcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5QUkVTRU5DRTpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlUHJlc2VuY2VcbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiVW5leHBlY3RlZCBsZXhlbWUgdHlwZSAnXCIgKyBuZXh0TGV4ZW1lLnR5cGUgKyBcIidcIlxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIG5leHRMZXhlbWUuc3RhcnQsIG5leHRMZXhlbWUuZW5kKVxuICB9XG59XG5cbiAgLyoqXG4gICAqIGV4cG9ydCB0aGUgbW9kdWxlIHZpYSBBTUQsIENvbW1vbkpTIG9yIGFzIGEgYnJvd3NlciBnbG9iYWxcbiAgICogRXhwb3J0IGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdW1kanMvdW1kL2Jsb2IvbWFzdGVyL3JldHVybkV4cG9ydHMuanNcbiAgICovXG4gIDsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgICBkZWZpbmUoZmFjdG9yeSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgLyoqXG4gICAgICAgKiBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAgICAqIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgICAgKiBsaWtlIE5vZGUuXG4gICAgICAgKi9cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG4gICAgICByb290Lmx1bnIgPSBmYWN0b3J5KClcbiAgICB9XG4gIH0odGhpcywgZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEp1c3QgcmV0dXJuIGEgdmFsdWUgdG8gZGVmaW5lIHRoZSBtb2R1bGUgZXhwb3J0LlxuICAgICAqIFRoaXMgZXhhbXBsZSByZXR1cm5zIGFuIG9iamVjdCwgYnV0IHRoZSBtb2R1bGVcbiAgICAgKiBjYW4gcmV0dXJuIGEgZnVuY3Rpb24gYXMgdGhlIGV4cG9ydGVkIHZhbHVlLlxuICAgICAqL1xuICAgIHJldHVybiBsdW5yXG4gIH0pKVxufSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2x1bnIvbHVuci5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgUG9zaXRpb24gZnJvbSBcIi4vU2lkZWJhci9Qb3NpdGlvblwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIE1vZHVsZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFBvc2l0aW9uXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2lkZWJhci5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24ge1xuXG4gIC8qKlxuICAgKiBTZXQgc2lkZWJhcnMgdG8gbG9ja2VkIHN0YXRlIGFuZCBsaW1pdCBoZWlnaHQgdG8gcGFyZW50IG5vZGVcbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsXyAtIFNpZGViYXJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gcGFyZW50XyAtIFNpZGViYXIgY29udGFpbmVyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGhlYWRlcl8gLSBIZWFkZXJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IGhlaWdodF8gLSBDdXJyZW50IHNpZGViYXIgaGVpZ2h0XG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBvZmZzZXRfIC0gQ3VycmVudCBwYWdlIHktb2Zmc2V0XG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gcGFkXyAtIFBhZCB3aGVuIGhlYWRlciBpcyBmaXhlZFxuICAgKlxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBoZWFkZXIgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsLCBoZWFkZXIpIHtcbiAgICBsZXQgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcbiAgICAgIDogZWxcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHxcbiAgICAgICAgIShyZWYucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgIHRoaXMuZWxfID0gcmVmXG4gICAgdGhpcy5wYXJlbnRfID0gcmVmLnBhcmVudE5vZGVcblxuICAgIC8qIFJldHJpZXZlIGhlYWRlciAqL1xuICAgIHJlZiA9ICh0eXBlb2YgaGVhZGVyID09PSBcInN0cmluZ1wiKVxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhlYWRlcilcbiAgICAgIDogaGVhZGVyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgdGhpcy5oZWFkZXJfID0gcmVmXG5cbiAgICAvKiBJbml0aWFsaXplIGN1cnJlbnQgaGVpZ2h0IGFuZCB0ZXN0IHdoZXRoZXIgaGVhZGVyIGlzIGZpeGVkICovXG4gICAgdGhpcy5oZWlnaHRfID0gMFxuICAgIHRoaXMucGFkXyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuaGVhZGVyXykucG9zaXRpb24gPT09IFwiZml4ZWRcIlxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgc2lkZWJhciBzdGF0ZVxuICAgKi9cbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgdG9wID0gQXJyYXkucHJvdG90eXBlLnJlZHVjZS5jYWxsKFxuICAgICAgdGhpcy5wYXJlbnRfLmNoaWxkcmVuLCAob2Zmc2V0LCBjaGlsZCkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgob2Zmc2V0LCBjaGlsZC5vZmZzZXRUb3ApXG4gICAgICB9LCAwKVxuXG4gICAgLyogU2V0IGxvY2sgb2Zmc2V0IGZvciBlbGVtZW50IHdpdGggbGFyZ2VzdCB0b3Agb2Zmc2V0ICovXG4gICAgdGhpcy5vZmZzZXRfID0gdG9wIC0gKHRoaXMucGFkXyA/IHRoaXMuaGVhZGVyXy5vZmZzZXRIZWlnaHQgOiAwKVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgbG9ja2VkIHN0YXRlIGFuZCBoZWlnaHRcbiAgICpcbiAgICogVGhlIGlubmVyIGhlaWdodCBvZiB0aGUgd2luZG93ICg9IHRoZSB2aXNpYmxlIGFyZWEpIGlzIHRoZSBtYXhpbXVtXG4gICAqIHBvc3NpYmxlIGhlaWdodCBmb3IgdGhlIHN0cmV0Y2hpbmcgc2lkZWJhci4gVGhpcyBoZWlnaHQgbXVzdCBiZSBkZWR1Y3RlZFxuICAgKiBieSB0aGUgaGVpZ2h0IG9mIHRoZSBmaXhlZCBoZWFkZXIgKDU2cHgpLiBEZXBlbmRpbmcgb24gdGhlIHBhZ2UgeS1vZmZzZXQsXG4gICAqIHRoZSB0b3Agb2Zmc2V0IG9mIHRoZSBzaWRlYmFyIG11c3QgYmUgdGFrZW4gaW50byBhY2NvdW50LCBhcyB3ZWxsIGFzIHRoZVxuICAgKiBjYXNlIHdoZXJlIHRoZSB3aW5kb3cgaXMgc2Nyb2xsZWQgYmV5b25kIHRoZSBzaWRlYmFyIGNvbnRhaW5lci5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudD99IGV2IC0gRXZlbnRcbiAgICovXG4gIHVwZGF0ZShldikge1xuICAgIGNvbnN0IG9mZnNldCAgPSB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICBjb25zdCB2aXNpYmxlID0gd2luZG93LmlubmVySGVpZ2h0XG5cbiAgICAvKiBVcGRhdGUgb2Zmc2V0LCBpbiBjYXNlIHdpbmRvdyBpcyByZXNpemVkICovXG4gICAgaWYgKGV2ICYmIGV2LnR5cGUgPT09IFwicmVzaXplXCIpXG4gICAgICB0aGlzLnNldHVwKClcblxuICAgIC8qIFNldCBib3VuZHMgb2Ygc2lkZWJhciBjb250YWluZXIgLSBtdXN0IGJlIGNhbGN1bGF0ZWQgb24gZXZlcnkgcnVuLCBhc1xuICAgICAgIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRlbnQgbWlnaHQgY2hhbmdlIGR1ZSB0byBsb2FkaW5nIGltYWdlcyBldGMuICovXG4gICAgY29uc3QgYm91bmRzID0ge1xuICAgICAgdG9wOiB0aGlzLnBhZF8gPyB0aGlzLmhlYWRlcl8ub2Zmc2V0SGVpZ2h0IDogMCxcbiAgICAgIGJvdHRvbTogdGhpcy5wYXJlbnRfLm9mZnNldFRvcCArIHRoaXMucGFyZW50Xy5vZmZzZXRIZWlnaHRcbiAgICB9XG5cbiAgICAvKiBDYWxjdWxhdGUgbmV3IG9mZnNldCBhbmQgaGVpZ2h0ICovXG4gICAgY29uc3QgaGVpZ2h0ID0gdmlzaWJsZSAtIGJvdW5kcy50b3BcbiAgICAgICAgICAgICAgICAgLSBNYXRoLm1heCgwLCB0aGlzLm9mZnNldF8gLSBvZmZzZXQpXG4gICAgICAgICAgICAgICAgIC0gTWF0aC5tYXgoMCwgb2Zmc2V0ICsgdmlzaWJsZSAtIGJvdW5kcy5ib3R0b20pXG5cbiAgICAvKiBJZiBoZWlnaHQgY2hhbmdlZCwgdXBkYXRlIGVsZW1lbnQgKi9cbiAgICBpZiAoaGVpZ2h0ICE9PSB0aGlzLmhlaWdodF8pXG4gICAgICB0aGlzLmVsXy5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmhlaWdodF8gPSBoZWlnaHR9cHhgXG5cbiAgICAvKiBTaWRlYmFyIHNob3VsZCBiZSBsb2NrZWQsIGFzIHdlJ3JlIGJlbG93IHBhcmVudCBvZmZzZXQgKi9cbiAgICBpZiAob2Zmc2V0ID49IHRoaXMub2Zmc2V0Xykge1xuICAgICAgaWYgKHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSAhPT0gXCJsb2NrXCIpXG4gICAgICAgIHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSA9IFwibG9ja1wiXG5cbiAgICAvKiBTaWRlYmFyIHNob3VsZCBiZSB1bmxvY2tlZCwgaWYgbG9ja2VkICovXG4gICAgfSBlbHNlIGlmICh0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPT09IFwibG9ja1wiKSB7XG4gICAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IGxvY2tlZCBzdGF0ZSBhbmQgaGVpZ2h0XG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXG4gICAgdGhpcy5lbF8uc3R5bGUuaGVpZ2h0ID0gXCJcIlxuICAgIHRoaXMuaGVpZ2h0XyA9IDBcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NpZGViYXIvUG9zaXRpb24uanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBBZGFwdGVyIGZyb20gXCIuL1NvdXJjZS9BZGFwdGVyXCJcbmltcG9ydCBSZXBvc2l0b3J5IGZyb20gXCIuL1NvdXJjZS9SZXBvc2l0b3J5XCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogTW9kdWxlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgQWRhcHRlcixcbiAgUmVwb3NpdG9yeVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IEdpdEh1YiBmcm9tIFwiLi9BZGFwdGVyL0dpdEh1YlwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIE1vZHVsZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEdpdEh1YlxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS9BZGFwdGVyLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgQWJzdHJhY3QgZnJvbSBcIi4vQWJzdHJhY3RcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaXRIdWIgZXh0ZW5kcyBBYnN0cmFjdCB7XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIHJlcG9zaXRvcnkgaW5mb3JtYXRpb24gZnJvbSBHaXRIdWJcbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lXyAtIE5hbWUgb2YgdGhlIHJlcG9zaXRvcnlcbiAgICpcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxBbmNob3JFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgc3VwZXIoZWwpXG5cbiAgICAvKiBFeHRyYWN0IHVzZXIgKGFuZCByZXBvc2l0b3J5IG5hbWUpIGZyb20gVVJMLCBhcyB3ZSBoYXZlIHRvIHF1ZXJ5IGZvciBhbGxcbiAgICAgICByZXBvc2l0b3JpZXMsIHRvIG9taXQgNDA0IGVycm9ycyBmb3IgcHJpdmF0ZSByZXBvc2l0b3JpZXMgKi9cbiAgICBjb25zdCBtYXRjaGVzID0gL14uK2dpdGh1YlxcLmNvbVxcLyhbXi9dKylcXC8/KFteL10rKT8uKiQvXG4gICAgICAuZXhlYyh0aGlzLmJhc2VfKVxuICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID09PSAzKSB7XG4gICAgICBjb25zdCBbLCB1c2VyLCBuYW1lXSA9IG1hdGNoZXNcblxuICAgICAgLyogSW5pdGlhbGl6ZSBiYXNlIFVSTCBhbmQgcmVwb3NpdG9yeSBuYW1lICovXG4gICAgICB0aGlzLmJhc2VfID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VyfS9yZXBvc2BcbiAgICAgIHRoaXMubmFtZV8gPSBuYW1lXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoIHJlbGV2YW50IHJlcG9zaXRvcnkgaW5mb3JtYXRpb24gZnJvbSBHaXRIdWJcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxBcnJheTxzdHJpbmc+Pn0gUHJvbWlzZSByZXR1cm5pbmcgYW4gYXJyYXkgb2YgZmFjdHNcbiAgICovXG4gIGZldGNoXygpIHtcbiAgICBjb25zdCBwYWdpbmF0ZSA9IChwYWdlID0gMCkgPT4ge1xuICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZV99P3Blcl9wYWdlPTMwJnBhZ2U9JHtwYWdlfWApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgaWYgKCEoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSlcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3JcblxuICAgICAgICAgIC8qIERpc3BsYXkgbnVtYmVyIG9mIHN0YXJzIGFuZCBmb3JrcywgaWYgcmVwb3NpdG9yeSBpcyBnaXZlbiAqL1xuICAgICAgICAgIGlmICh0aGlzLm5hbWVfKSB7XG4gICAgICAgICAgICBjb25zdCByZXBvID0gZGF0YS5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSB0aGlzLm5hbWVfKVxuICAgICAgICAgICAgaWYgKCFyZXBvICYmIGRhdGEubGVuZ3RoID09PSAzMClcbiAgICAgICAgICAgICAgcmV0dXJuIHBhZ2luYXRlKHBhZ2UgKyAxKVxuXG4gICAgICAgICAgICAvKiBJZiB3ZSBmb3VuZCBhIHJlcG8sIGV4dHJhY3QgdGhlIGZhY3RzICovXG4gICAgICAgICAgICByZXR1cm4gcmVwb1xuICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICBgJHt0aGlzLmZvcm1hdF8ocmVwby5zdGFyZ2F6ZXJzX2NvdW50KX0gU3RhcnNgLFxuICAgICAgICAgICAgICAgIGAke3RoaXMuZm9ybWF0XyhyZXBvLmZvcmtzX2NvdW50KX0gRm9ya3NgXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgOiBbXVxuXG4gICAgICAgICAgLyogRGlzcGxheSBudW1iZXIgb2YgcmVwb3NpdG9yaWVzLCBvdGhlcndpc2UgKi9cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgYCR7ZGF0YS5sZW5ndGh9IFJlcG9zaXRvcmllc2BcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyogUGFnaW5hdGUgdGhyb3VnaCByZXBvcyAqL1xuICAgIHJldHVybiBwYWdpbmF0ZSgpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvQWRhcHRlci9HaXRIdWIuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdCB7XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIHJlcG9zaXRvcnkgaW5mb3JtYXRpb25cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEFuY2hvckVsZW1lbnR9IGVsXyAtIExpbmsgdG8gcmVwb3NpdG9yeVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gYmFzZV8gLSBBUEkgYmFzZSBVUkxcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IHNhbHRfIC0gVW5pcXVlIGlkZW50aWZpZXJcbiAgICpcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxBbmNob3JFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgY29uc3QgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcbiAgICAgIDogZWxcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkpXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICB0aGlzLmVsXyA9IHJlZlxuXG4gICAgLyogUmV0cmlldmUgYmFzZSBVUkwgKi9cbiAgICB0aGlzLmJhc2VfID0gdGhpcy5lbF8uaHJlZlxuICAgIHRoaXMuc2FsdF8gPSB0aGlzLmhhc2hfKHRoaXMuYmFzZV8pXG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgZGF0YSBmcm9tIENvb2tpZSBvciBmZXRjaCBmcm9tIHJlc3BlY3RpdmUgQVBJXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXk8c3RyaW5nPj59IFByb21pc2UgdGhhdCByZXR1cm5zIGFuIGFycmF5IG9mIGZhY3RzXG4gICAqL1xuICBmZXRjaCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBjb25zdCBjYWNoZWQgPSBDb29raWVzLmdldEpTT04oYCR7dGhpcy5zYWx0X30uY2FjaGUtc291cmNlYClcbiAgICAgIGlmICh0eXBlb2YgY2FjaGVkICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJlc29sdmUoY2FjaGVkKVxuXG4gICAgICAvKiBJZiB0aGUgZGF0YSBpcyBub3QgY2FjaGVkIGluIGEgY29va2llLCBpbnZva2UgZmV0Y2ggYW5kIHNldFxuICAgICAgICAgYSBjb29raWUgdGhhdCBhdXRvbWF0aWNhbGx5IGV4cGlyZXMgaW4gMTUgbWludXRlcyAqL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mZXRjaF8oKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIENvb2tpZXMuc2V0KGAke3RoaXMuc2FsdF99LmNhY2hlLXNvdXJjZWAsIGRhdGEsIHsgZXhwaXJlczogMSAvIDk2IH0pXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWJzdHJhY3QgcHJpdmF0ZSBmdW5jdGlvbiB0aGF0IGZldGNoZXMgcmVsZXZhbnQgcmVwb3NpdG9yeSBpbmZvcm1hdGlvblxuICAgKlxuICAgKiBAYWJzdHJhY3RcbiAgICovXG4gIGZldGNoXygpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmZXRjaF8oKTogTm90IGltcGxlbWVudGVkXCIpXG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IGEgbnVtYmVyIHdpdGggc3VmZml4XG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBOdW1iZXIgdG8gZm9ybWF0XG4gICAqIEByZXR1cm4ge3N0cmluZ30gRm9ybWF0dGVkIG51bWJlclxuICAgKi9cbiAgZm9ybWF0XyhudW1iZXIpIHtcbiAgICBpZiAobnVtYmVyID4gMTAwMDApXG4gICAgICByZXR1cm4gYCR7KG51bWJlciAvIDEwMDApLnRvRml4ZWQoMCl9a2BcbiAgICBlbHNlIGlmIChudW1iZXIgPiAxMDAwKVxuICAgICAgcmV0dXJuIGAkeyhudW1iZXIgLyAxMDAwKS50b0ZpeGVkKDEpfWtgXG4gICAgcmV0dXJuIGAke251bWJlcn1gXG4gIH1cblxuICAvKipcbiAgICogU2ltcGxlIGhhc2ggZnVuY3Rpb25cbiAgICpcbiAgICogVGFrZW4gZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NjE2NDg0LzEwNjU1ODRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIElucHV0IHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9IEhhc2hlZCBzdHJpbmdcbiAgICovXG4gIGhhc2hfKHN0cikge1xuICAgIGxldCBoYXNoID0gMFxuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSByZXR1cm4gaGFzaFxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzdHIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGhhc2ggID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBzdHIuY2hhckNvZGVBdChpKVxuICAgICAgaGFzaCB8PSAwIC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICAgIH1cbiAgICByZXR1cm4gaGFzaFxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlL0FkYXB0ZXIvQWJzdHJhY3QuanMiLCIvKiFcbiAqIEphdmFTY3JpcHQgQ29va2llIHYyLjIuMFxuICogaHR0cHM6Ly9naXRodWIuY29tL2pzLWNvb2tpZS9qcy1jb29raWVcbiAqXG4gKiBDb3B5cmlnaHQgMjAwNiwgMjAxNSBLbGF1cyBIYXJ0bCAmIEZhZ25lciBCcmFja1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKi9cbjsoZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0dmFyIHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IGZhbHNlO1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKCFyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIpIHtcblx0XHR2YXIgT2xkQ29va2llcyA9IHdpbmRvdy5Db29raWVzO1xuXHRcdHZhciBhcGkgPSB3aW5kb3cuQ29va2llcyA9IGZhY3RvcnkoKTtcblx0XHRhcGkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5Db29raWVzID0gT2xkQ29va2llcztcblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fTtcblx0fVxufShmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIGV4dGVuZCAoKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRmb3IgKDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHNbIGkgXTtcblx0XHRcdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdHJlc3VsdFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gaW5pdCAoY29udmVydGVyKSB7XG5cdFx0ZnVuY3Rpb24gYXBpIChrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBXcml0ZVxuXG5cdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0YXR0cmlidXRlcyA9IGV4dGVuZCh7XG5cdFx0XHRcdFx0cGF0aDogJy8nXG5cdFx0XHRcdH0sIGFwaS5kZWZhdWx0cywgYXR0cmlidXRlcyk7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBhdHRyaWJ1dGVzLmV4cGlyZXMgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdFx0dmFyIGV4cGlyZXMgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHRcdGV4cGlyZXMuc2V0TWlsbGlzZWNvbmRzKGV4cGlyZXMuZ2V0TWlsbGlzZWNvbmRzKCkgKyBhdHRyaWJ1dGVzLmV4cGlyZXMgKiA4NjRlKzUpO1xuXHRcdFx0XHRcdGF0dHJpYnV0ZXMuZXhwaXJlcyA9IGV4cGlyZXM7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBXZSdyZSB1c2luZyBcImV4cGlyZXNcIiBiZWNhdXNlIFwibWF4LWFnZVwiIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUVcblx0XHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzID8gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdFx0XHRpZiAoL15bXFx7XFxbXS8udGVzdChyZXN1bHQpKSB7XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IHJlc3VsdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cblx0XHRcdFx0aWYgKCFjb252ZXJ0ZXIud3JpdGUpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKVxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8M0F8M0N8M0V8M0R8MkZ8M0Z8NDB8NUJ8NUR8NUV8NjB8N0J8N0R8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBjb252ZXJ0ZXIud3JpdGUodmFsdWUsIGtleSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpO1xuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnw1RXw2MHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KTtcblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1tcXChcXCldL2csIGVzY2FwZSk7XG5cblx0XHRcdFx0dmFyIHN0cmluZ2lmaWVkQXR0cmlidXRlcyA9ICcnO1xuXG5cdFx0XHRcdGZvciAodmFyIGF0dHJpYnV0ZU5hbWUgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0XHRcdGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnOyAnICsgYXR0cmlidXRlTmFtZTtcblx0XHRcdFx0XHRpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnPScgKyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAoZG9jdW1lbnQuY29va2llID0ga2V5ICsgJz0nICsgdmFsdWUgKyBzdHJpbmdpZmllZEF0dHJpYnV0ZXMpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZWFkXG5cblx0XHRcdGlmICgha2V5KSB7XG5cdFx0XHRcdHJlc3VsdCA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUbyBwcmV2ZW50IHRoZSBmb3IgbG9vcCBpbiB0aGUgZmlyc3QgcGxhY2UgYXNzaWduIGFuIGVtcHR5IGFycmF5XG5cdFx0XHQvLyBpbiBjYXNlIHRoZXJlIGFyZSBubyBjb29raWVzIGF0IGFsbC4gQWxzbyBwcmV2ZW50cyBvZGQgcmVzdWx0IHdoZW5cblx0XHRcdC8vIGNhbGxpbmcgXCJnZXQoKVwiXG5cdFx0XHR2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZSA/IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKSA6IFtdO1xuXHRcdFx0dmFyIHJkZWNvZGUgPSAvKCVbMC05QS1aXXsyfSkrL2c7XG5cdFx0XHR2YXIgaSA9IDA7XG5cblx0XHRcdGZvciAoOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFydHMgPSBjb29raWVzW2ldLnNwbGl0KCc9Jyk7XG5cdFx0XHRcdHZhciBjb29raWUgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCc9Jyk7XG5cblx0XHRcdFx0aWYgKCF0aGlzLmpzb24gJiYgY29va2llLmNoYXJBdCgwKSA9PT0gJ1wiJykge1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvb2tpZS5zbGljZSgxLCAtMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBuYW1lID0gcGFydHNbMF0ucmVwbGFjZShyZGVjb2RlLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvbnZlcnRlci5yZWFkID9cblx0XHRcdFx0XHRcdGNvbnZlcnRlci5yZWFkKGNvb2tpZSwgbmFtZSkgOiBjb252ZXJ0ZXIoY29va2llLCBuYW1lKSB8fFxuXHRcdFx0XHRcdFx0Y29va2llLnJlcGxhY2UocmRlY29kZSwgZGVjb2RlVVJJQ29tcG9uZW50KTtcblxuXHRcdFx0XHRcdGlmICh0aGlzLmpzb24pIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGNvb2tpZSA9IEpTT04ucGFyc2UoY29va2llKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gbmFtZSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gY29va2llO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFrZXkpIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtuYW1lXSA9IGNvb2tpZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0YXBpLnNldCA9IGFwaTtcblx0XHRhcGkuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cmV0dXJuIGFwaS5jYWxsKGFwaSwga2V5KTtcblx0XHR9O1xuXHRcdGFwaS5nZXRKU09OID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGFwaS5hcHBseSh7XG5cdFx0XHRcdGpzb246IHRydWVcblx0XHRcdH0sIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG5cdFx0fTtcblx0XHRhcGkuZGVmYXVsdHMgPSB7fTtcblxuXHRcdGFwaS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5LCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRhcGkoa2V5LCAnJywgZXh0ZW5kKGF0dHJpYnV0ZXMsIHtcblx0XHRcdFx0ZXhwaXJlczogLTFcblx0XHRcdH0pKTtcblx0XHR9O1xuXG5cdFx0YXBpLndpdGhDb252ZXJ0ZXIgPSBpbml0O1xuXG5cdFx0cmV0dXJuIGFwaTtcblx0fVxuXG5cdHJldHVybiBpbml0KGZ1bmN0aW9uICgpIHt9KTtcbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pzLWNvb2tpZS9zcmMvanMuY29va2llLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9zaXRvcnkge1xuXG4gIC8qKlxuICAgKiBSZW5kZXIgcmVwb3NpdG9yeSBpbmZvcm1hdGlvblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gUmVwb3NpdG9yeSBpbmZvcm1hdGlvblxuICAgKlxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxuICAgKi9cbiAgY29uc3RydWN0b3IoZWwpIHtcbiAgICBjb25zdCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxuICAgICAgOiBlbFxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgIHRoaXMuZWxfID0gcmVmXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgcmVwb3NpdG9yeVxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGZhY3RzIC0gRmFjdHMgdG8gYmUgcmVuZGVyZWRcbiAgICovXG4gIGluaXRpYWxpemUoZmFjdHMpIHtcbiAgICBpZiAoZmFjdHMubGVuZ3RoICYmIHRoaXMuZWxfLmNoaWxkcmVuLmxlbmd0aClcbiAgICAgIHRoaXMuZWxfLmNoaWxkcmVuW3RoaXMuZWxfLmNoaWxkcmVuLmxlbmd0aCAtIDFdLmFwcGVuZENoaWxkKFxuICAgICAgICA8dWwgY2xhc3M9XCJtZC1zb3VyY2VfX2ZhY3RzXCI+XG4gICAgICAgICAge2ZhY3RzLm1hcChmYWN0ID0+IDxsaSBjbGFzcz1cIm1kLXNvdXJjZV9fZmFjdFwiPntmYWN0fTwvbGk+KX1cbiAgICAgICAgPC91bD5cbiAgICAgIClcblxuICAgIC8qIEZpbmlzaCByZW5kZXJpbmcgd2l0aCBhbmltYXRpb24gKi9cbiAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcImRvbmVcIlxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlL1JlcG9zaXRvcnkuanN4IiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgVG9nZ2xlIGZyb20gXCIuL1RhYnMvVG9nZ2xlXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogTW9kdWxlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVG9nZ2xlXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFicy5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9nZ2xlIHtcblxuICAvKipcbiAgICogVG9nZ2xlIHRhYnMgdmlzaWJpbGl0eSBkZXBlbmRpbmcgb24gcGFnZSB5LW9mZnNldFxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gQ29udGVudCBjb250YWluZXJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IG9mZnNldF8gLSBUb2dnbGUgcGFnZS15IG9mZnNldFxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGFjdGl2ZV8gLSBUYWJzIHZpc2liaWxpdHlcbiAgICpcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgY29uc3QgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcbiAgICAgIDogZWxcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBOb2RlKSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgIHRoaXMuZWxfID0gcmVmXG5cbiAgICAvKiBJbml0aWFsaXplIG9mZnNldCBhbmQgc3RhdGUgKi9cbiAgICB0aGlzLmFjdGl2ZV8gPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB2aXNpYmlsaXR5XG4gICAqL1xuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgYWN0aXZlID0gd2luZG93LnBhZ2VZT2Zmc2V0ID49XG4gICAgICB0aGlzLmVsXy5jaGlsZHJlblswXS5vZmZzZXRUb3AgKyAoNSAtIDQ4KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHF1aWNrIGhhY2sgdG8gZW5hYmxlIHNhbWUgaGFuZGxpbmcgZm9yIGhlcm9cbiAgICBpZiAoYWN0aXZlICE9PSB0aGlzLmFjdGl2ZV8pXG4gICAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSAodGhpcy5hY3RpdmVfID0gYWN0aXZlKSA/IFwiaGlkZGVuXCIgOiBcIlwiXG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdmlzaWJpbGl0eVxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID0gXCJcIlxuICAgIHRoaXMuYWN0aXZlXyA9IGZhbHNlXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9UYWJzL1RvZ2dsZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=