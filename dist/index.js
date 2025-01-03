(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.DndAction = {}));
})(this, (function (exports) { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  // external events
  var FINALIZE_EVENT_NAME = "finalize";
  var CONSIDER_EVENT_NAME = "consider";

  /**
   * @typedef {Object} Info
   * @property {string} trigger
   * @property {string} id
   * @property {string} source
   * @param {Node} el
   * @param {Array} items
   * @param {Info} info
   */
  function dispatchFinalizeEvent(el, items, info) {
    el.dispatchEvent(new CustomEvent(FINALIZE_EVENT_NAME, {
      detail: {
        items: items,
        info: info
      }
    }));
  }

  /**
   * Dispatches a consider event
   * @param {Node} el
   * @param {Array} items
   * @param {Info} info
   */
  function dispatchConsiderEvent(el, items, info) {
    el.dispatchEvent(new CustomEvent(CONSIDER_EVENT_NAME, {
      detail: {
        items: items,
        info: info
      }
    }));
  }

  // internal events
  var DRAGGED_ENTERED_EVENT_NAME = "draggedEntered";
  var DRAGGED_LEFT_EVENT_NAME = "draggedLeft";
  var DRAGGED_OVER_INDEX_EVENT_NAME = "draggedOverIndex";
  var DRAGGED_LEFT_DOCUMENT_EVENT_NAME = "draggedLeftDocument";
  var DRAGGED_LEFT_TYPES = {
    LEFT_FOR_ANOTHER: "leftForAnother",
    OUTSIDE_OF_ANY: "outsideOfAny"
  };
  function dispatchDraggedElementEnteredContainer(containerEl, indexObj, draggedEl) {
    containerEl.dispatchEvent(new CustomEvent(DRAGGED_ENTERED_EVENT_NAME, {
      detail: {
        indexObj: indexObj,
        draggedEl: draggedEl
      }
    }));
  }

  /**
   * @param containerEl - the dropzone the element left
   * @param draggedEl - the dragged element
   * @param theOtherDz - the new dropzone the element entered
   */
  function dispatchDraggedElementLeftContainerForAnother(containerEl, draggedEl, theOtherDz) {
    containerEl.dispatchEvent(new CustomEvent(DRAGGED_LEFT_EVENT_NAME, {
      detail: {
        draggedEl: draggedEl,
        type: DRAGGED_LEFT_TYPES.LEFT_FOR_ANOTHER,
        theOtherDz: theOtherDz
      }
    }));
  }
  function dispatchDraggedElementLeftContainerForNone(containerEl, draggedEl) {
    containerEl.dispatchEvent(new CustomEvent(DRAGGED_LEFT_EVENT_NAME, {
      detail: {
        draggedEl: draggedEl,
        type: DRAGGED_LEFT_TYPES.OUTSIDE_OF_ANY
      }
    }));
  }
  function dispatchDraggedElementIsOverIndex(containerEl, indexObj, draggedEl) {
    containerEl.dispatchEvent(new CustomEvent(DRAGGED_OVER_INDEX_EVENT_NAME, {
      detail: {
        indexObj: indexObj,
        draggedEl: draggedEl
      }
    }));
  }
  function dispatchDraggedLeftDocument(draggedEl) {
    window.dispatchEvent(new CustomEvent(DRAGGED_LEFT_DOCUMENT_EVENT_NAME, {
      detail: {
        draggedEl: draggedEl
      }
    }));
  }

  var TRIGGERS = {
    DRAG_STARTED: "dragStarted",
    DRAGGED_ENTERED: DRAGGED_ENTERED_EVENT_NAME,
    DRAGGED_ENTERED_ANOTHER: "dragEnteredAnother",
    DRAGGED_OVER_INDEX: DRAGGED_OVER_INDEX_EVENT_NAME,
    DRAGGED_LEFT: DRAGGED_LEFT_EVENT_NAME,
    DRAGGED_LEFT_ALL: "draggedLeftAll",
    DROPPED_INTO_ZONE: "droppedIntoZone",
    DROPPED_INTO_ANOTHER: "droppedIntoAnother",
    DROPPED_OUTSIDE_OF_ANY: "droppedOutsideOfAny",
    DRAG_STOPPED: "dragStopped"
  };
  var SOURCES = {
    POINTER: "pointer",
    KEYBOARD: "keyboard"
  };
  var SHADOW_ITEM_MARKER_PROPERTY_NAME = "isDndShadowItem";
  var SHADOW_ELEMENT_ATTRIBUTE_NAME = "data-is-dnd-shadow-item-internal";
  var SHADOW_ELEMENT_HINT_ATTRIBUTE_NAME = "data-is-dnd-shadow-item-hint";
  var SHADOW_PLACEHOLDER_ITEM_ID = "id:dnd-shadow-placeholder-0000";
  var DRAGGED_ELEMENT_ID = "dnd-action-dragged-el";
  var ITEM_ID_KEY = "id";
  var activeDndZoneCount = 0;
  function incrementActiveDropZoneCount() {
    activeDndZoneCount++;
  }
  function decrementActiveDropZoneCount() {
    if (activeDndZoneCount === 0) {
      throw new Error("Bug! trying to decrement when there are no dropzones");
    }
    activeDndZoneCount--;
  }

  /**
   * Allows using another key instead of "id" in the items data. This is global and applies to all dndzones.
   * Has to be called when there are no rendered dndzones whatsoever.
   * @param {String} newKeyName
   * @throws {Error} if it was called when there are rendered dndzones or if it is given the wrong type (not a string)
   */
  function overrideItemIdKeyNameBeforeInitialisingDndZones(newKeyName) {
    if (activeDndZoneCount > 0) {
      throw new Error("can only override the id key before initialising any dndzone");
    }
    if (typeof newKeyName !== "string") {
      throw new Error("item id key has to be a string");
    }
    printDebug(function () {
      return ["overriding item id key name", newKeyName];
    });
    ITEM_ID_KEY = newKeyName;
  }
  var isOnServer = typeof window === "undefined";
  var printDebug = function printDebug() {};

  /**
   * Allows the user to show/hide console debug output
   * * @param {boolean} isDebug
   */
  function setDebugMode(isDebug) {
    if (isDebug) {
      printDebug = function printDebug(generateMessage) {
        var logFunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : console.debug;
        var message = generateMessage();
        if (Array.isArray(message)) {
          logFunction.apply(void 0, _toConsumableArray(message));
        } else {
          logFunction(message);
        }
      };
    } else {
      printDebug = function printDebug() {};
    }
  }

  // This is based off https://stackoverflow.com/questions/27745438/how-to-compute-getboundingclientrect-without-considering-transforms/57876601#57876601
  // It removes the transforms that are potentially applied by the flip animations
  /**
   * Gets the bounding rect but removes transforms (ex: flip animation)
   * @param {HTMLElement} el
   * @param {boolean} [onlyVisible] - use the visible rect defaults to true
   * @return {{top: number, left: number, bottom: number, right: number}}
   */
  function getBoundingRectNoTransforms(el) {
    var onlyVisible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var ta;
    var rect = onlyVisible ? getVisibleRectRecursive(el) : el.getBoundingClientRect();
    var style = getComputedStyle(el);
    var tx = style.transform;
    if (tx) {
      var sx, sy, dx, dy;
      if (tx.startsWith("matrix3d(")) {
        ta = tx.slice(9, -1).split(/, /);
        sx = +ta[0];
        sy = +ta[5];
        dx = +ta[12];
        dy = +ta[13];
      } else if (tx.startsWith("matrix(")) {
        ta = tx.slice(7, -1).split(/, /);
        sx = +ta[0];
        sy = +ta[3];
        dx = +ta[4];
        dy = +ta[5];
      } else {
        return rect;
      }
      var to = style.transformOrigin;
      var x = rect.x - dx - (1 - sx) * parseFloat(to);
      var y = rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(" ") + 1));
      var w = sx ? rect.width / sx : el.offsetWidth;
      var h = sy ? rect.height / sy : el.offsetHeight;
      return {
        x: x,
        y: y,
        width: w,
        height: h,
        top: y,
        right: x + w,
        bottom: y + h,
        left: x
      };
    } else {
      return rect;
    }
  }

  /**
   * Gets the absolute bounding rect (accounts for the window's scroll position and removes transforms)
   * @param {HTMLElement} el
   * @return {{top: number, left: number, bottom: number, right: number}}
   */
  function getAbsoluteRectNoTransforms(el) {
    var rect = getBoundingRectNoTransforms(el);
    return {
      top: rect.top + window.scrollY,
      bottom: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
      right: rect.right + window.scrollX
    };
  }

  /**
   * Gets the absolute bounding rect (accounts for the window's scroll position)
   * @param {HTMLElement} el
   * @return {{top: number, left: number, bottom: number, right: number}}
   */
  function getAbsoluteRect(el) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top + window.scrollY,
      bottom: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
      right: rect.right + window.scrollX
    };
  }

  /**
   * finds the center :)
   * @typedef {Object} Rect
   * @property {number} top
   * @property {number} bottom
   * @property {number} left
   * @property {number} right
   * @param {Rect} rect
   * @return {{x: number, y: number}}
   */
  function findCenter(rect) {
    return {
      x: (rect.left + rect.right) / 2,
      y: (rect.top + rect.bottom) / 2
    };
  }

  /**
   * @typedef {Object} Point
   * @property {number} x
   * @property {number} y
   * @param {Point} pointA
   * @param {Point} pointB
   * @return {number}
   */
  function calcDistance(pointA, pointB) {
    return Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2));
  }

  /**
   * @param {Point} point
   * @param {Rect} rect
   * @return {boolean|boolean}
   */
  function isPointInsideRect(point, rect) {
    return point.y <= rect.bottom && point.y >= rect.top && point.x >= rect.left && point.x <= rect.right;
  }

  /**
   * find the absolute coordinates of the center of a dom element
   * @param el {HTMLElement}
   * @returns {{x: number, y: number}}
   */
  function findCenterOfElement(el) {
    return findCenter(getAbsoluteRect(el));
  }

  /**
   * @param {HTMLElement} elA
   * @param {HTMLElement} elB
   * @return {boolean}
   */
  function isCenterOfAInsideB(elA, elB) {
    var centerOfA = findCenterOfElement(elA);
    var rectOfB = getAbsoluteRectNoTransforms(elB);
    return isPointInsideRect(centerOfA, rectOfB);
  }

  /**
   * @param {HTMLElement|ChildNode} elA
   * @param {HTMLElement|ChildNode} elB
   * @return {number}
   */
  function calcDistanceBetweenCenters(elA, elB) {
    var centerOfA = findCenterOfElement(elA);
    var centerOfB = findCenterOfElement(elB);
    return calcDistance(centerOfA, centerOfB);
  }

  /**
   * @param {HTMLElement} el - the element to check
   * @returns {boolean} - true if the element in its entirety is off-screen including the scrollable area (the normal dom events look at the mouse rather than the element)
   */
  function isElementOffDocument(el) {
    var rect = getAbsoluteRect(el);
    return rect.right < 0 || rect.left > document.documentElement.scrollWidth || rect.bottom < 0 || rect.top > document.documentElement.scrollHeight;
  }
  function getVisibleRectRecursive(element) {
    var rect = element.getBoundingClientRect();
    var visibleRect = {
      top: rect.top,
      bottom: rect.bottom,
      left: rect.left,
      right: rect.right
    };

    // Traverse up the DOM hierarchy, checking for scrollable ancestors
    var parent = element.parentElement;
    while (parent && parent !== document.body) {
      var parentRect = parent.getBoundingClientRect();

      // Check if the parent has a scrollable overflow
      var overflowY = window.getComputedStyle(parent).overflowY;
      var overflowX = window.getComputedStyle(parent).overflowX;
      var isScrollableY = overflowY === "scroll" || overflowY === "auto";
      var isScrollableX = overflowX === "scroll" || overflowX === "auto";

      // Constrain the visible area to the parent's visible area
      if (isScrollableY) {
        visibleRect.top = Math.max(visibleRect.top, parentRect.top);
        visibleRect.bottom = Math.min(visibleRect.bottom, parentRect.bottom);
      }
      if (isScrollableX) {
        visibleRect.left = Math.max(visibleRect.left, parentRect.left);
        visibleRect.right = Math.min(visibleRect.right, parentRect.right);
      }
      parent = parent.parentElement;
    }

    // Finally, constrain the visible rect to the viewport
    visibleRect.top = Math.max(visibleRect.top, 0);
    visibleRect.bottom = Math.min(visibleRect.bottom, window.innerHeight);
    visibleRect.left = Math.max(visibleRect.left, 0);
    visibleRect.right = Math.min(visibleRect.right, window.innerWidth);

    // Return the visible rectangle, ensuring that all values are valid
    return {
      top: visibleRect.top,
      bottom: visibleRect.bottom,
      left: visibleRect.left,
      right: visibleRect.right,
      width: Math.max(0, visibleRect.right - visibleRect.left),
      height: Math.max(0, visibleRect.bottom - visibleRect.top)
    };
  }

  var dzToShadowIndexToRect;

  /**
   * Resets the cache that allows for smarter "would be index" resolution. Should be called after every drag operation
   */
  function resetIndexesCache() {
    printDebug(function () {
      return "resetting indexes cache";
    });
    dzToShadowIndexToRect = new Map();
  }
  resetIndexesCache();

  /**
   * Caches the coordinates of the shadow element when it's in a certain index in a certain dropzone.
   * Helpful in order to determine "would be index" more effectively
   * @param {HTMLElement} dz
   * @return {number} - the shadow element index
   */
  function cacheShadowRect(dz) {
    var shadowElIndex = Array.from(dz.children).findIndex(function (child) {
      return child.getAttribute(SHADOW_ELEMENT_ATTRIBUTE_NAME);
    });
    if (shadowElIndex >= 0) {
      if (!dzToShadowIndexToRect.has(dz)) {
        dzToShadowIndexToRect.set(dz, new Map());
      }
      dzToShadowIndexToRect.get(dz).set(shadowElIndex, getAbsoluteRectNoTransforms(dz.children[shadowElIndex]));
      return shadowElIndex;
    }
    return undefined;
  }

  /**
   * @typedef {Object} Index
   * @property {number} index - the would be index
   * @property {boolean} isProximityBased - false if the element is actually over the index, true if it is not over it but this index is the closest
   */
  /**
   * Find the index for the dragged element in the list it is dragged over
   * @param {HTMLElement} floatingAboveEl
   * @param {HTMLElement} collectionBelowEl
   * @returns {Index|null} -  if the element is over the container the Index object otherwise null
   */
  function findWouldBeIndex(floatingAboveEl, collectionBelowEl) {
    if (!isCenterOfAInsideB(floatingAboveEl, collectionBelowEl)) {
      return null;
    }
    var children = collectionBelowEl.children;
    // the container is empty, floating element should be the first
    if (children.length === 0) {
      return {
        index: 0,
        isProximityBased: true
      };
    }
    var shadowElIndex = cacheShadowRect(collectionBelowEl);

    // the search could be more efficient but keeping it simple for now
    // a possible improvement: pass in the lastIndex it was found in and check there first, then expand from there
    for (var i = 0; i < children.length; i++) {
      if (isCenterOfAInsideB(floatingAboveEl, children[i])) {
        var cachedShadowRect = dzToShadowIndexToRect.has(collectionBelowEl) && dzToShadowIndexToRect.get(collectionBelowEl).get(i);
        if (cachedShadowRect) {
          if (!isPointInsideRect(findCenterOfElement(floatingAboveEl), cachedShadowRect)) {
            return {
              index: shadowElIndex,
              isProximityBased: false
            };
          }
        }
        return {
          index: i,
          isProximityBased: false
        };
      }
    }
    // this can happen if there is space around the children so the floating element has
    //entered the container but not any of the children, in this case we will find the nearest child
    var minDistanceSoFar = Number.MAX_VALUE;
    var indexOfMin = undefined;
    // we are checking all of them because we don't know whether we are dealing with a horizontal or vertical container and where the floating element entered from
    for (var _i = 0; _i < children.length; _i++) {
      var distance = calcDistanceBetweenCenters(floatingAboveEl, children[_i]);
      if (distance < minDistanceSoFar) {
        minDistanceSoFar = distance;
        indexOfMin = _i;
      }
    }
    return {
      index: indexOfMin,
      isProximityBased: true
    };
  }

  /**
   * @param {Object} object
   * @return {string}
   */
  function toString(object) {
    return JSON.stringify(object, null, 2);
  }

  /**
   * Finds the depth of the given node in the DOM tree
   * @param {HTMLElement} node
   * @return {number} - the depth of the node
   */
  function getDepth(node) {
    if (!node) {
      throw new Error("cannot get depth of a falsy node");
    }
    return _getDepth(node, 0);
  }
  function _getDepth(node) {
    var countSoFar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (!node.parentElement) {
      return countSoFar - 1;
    }
    return _getDepth(node.parentElement, countSoFar + 1);
  }

  /**
   * A simple util to shallow compare objects quickly, it doesn't validate the arguments so pass objects in
   * @param {Object} objA
   * @param {Object} objB
   * @return {boolean} - true if objA and objB are shallow equal
   */
  function areObjectsShallowEqual(objA, objB) {
    if (Object.keys(objA).length !== Object.keys(objB).length) {
      return false;
    }
    for (var keyA in objA) {
      if (!{}.hasOwnProperty.call(objB, keyA) || objB[keyA] !== objA[keyA]) {
        return false;
      }
    }
    return true;
  }

  /**
   * Shallow compares two arrays
   * @param arrA
   * @param arrB
   * @return {boolean} - whether the arrays are shallow equal
   */
  function areArraysShallowEqualSameOrder(arrA, arrB) {
    if (arrA.length !== arrB.length) {
      return false;
    }
    for (var i = 0; i < arrA.length; i++) {
      if (arrA[i] !== arrB[i]) {
        return false;
      }
    }
    return true;
  }

  var INTERVAL_MS = 200;
  var TOLERANCE_PX = 10;
  var next;

  /**
   * Tracks the dragged elements and performs the side effects when it is dragged over a drop zone (basically dispatching custom-events scrolling)
   * @param {Set<HTMLElement>} dropZones
   * @param {HTMLElement} draggedEl
   * @param {number} [intervalMs = INTERVAL_MS]
   * @param {MultiScroller} multiScroller
   */
  function observe(draggedEl, dropZones) {
    var intervalMs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : INTERVAL_MS;
    var multiScroller = arguments.length > 3 ? arguments[3] : undefined;
    // initialization
    var lastDropZoneFound;
    var lastIndexFound;
    var lastIsDraggedInADropZone = false;
    var lastCentrePositionOfDragged;
    // We are sorting to make sure that in case of nested zones of the same type the one "on top" is considered first
    var dropZonesFromDeepToShallow = Array.from(dropZones).sort(function (dz1, dz2) {
      return getDepth(dz2) - getDepth(dz1);
    });

    /**
     * The main function in this module. Tracks where everything is/ should be a take the actions
     */
    function andNow() {
      var currentCenterOfDragged = findCenterOfElement(draggedEl);
      var scrolled = multiScroller.multiScrollIfNeeded();
      // we only want to make a new decision after the element was moved a bit to prevent flickering
      if (!scrolled && lastCentrePositionOfDragged && Math.abs(lastCentrePositionOfDragged.x - currentCenterOfDragged.x) < TOLERANCE_PX && Math.abs(lastCentrePositionOfDragged.y - currentCenterOfDragged.y) < TOLERANCE_PX) {
        next = window.setTimeout(andNow, intervalMs);
        return;
      }
      if (isElementOffDocument(draggedEl)) {
        printDebug(function () {
          return "off document";
        });
        dispatchDraggedLeftDocument(draggedEl);
        return;
      }
      lastCentrePositionOfDragged = currentCenterOfDragged;
      // this is a simple algorithm, potential improvement: first look at lastDropZoneFound
      var isDraggedInADropZone = false;
      var _iterator = _createForOfIteratorHelper(dropZonesFromDeepToShallow),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var dz = _step.value;
          if (scrolled) resetIndexesCache();
          var indexObj = findWouldBeIndex(draggedEl, dz);
          if (indexObj === null) {
            // it is not inside
            continue;
          }
          var index = indexObj.index;
          isDraggedInADropZone = true;
          // the element is over a container
          if (dz !== lastDropZoneFound) {
            lastDropZoneFound && dispatchDraggedElementLeftContainerForAnother(lastDropZoneFound, draggedEl, dz);
            dispatchDraggedElementEnteredContainer(dz, indexObj, draggedEl);
            lastDropZoneFound = dz;
          } else if (index !== lastIndexFound) {
            dispatchDraggedElementIsOverIndex(dz, indexObj, draggedEl);
            lastIndexFound = index;
          }
          // we handle looping with the 'continue' statement above
          break;
        }
        // the first time the dragged element is not in any dropzone we need to notify the last dropzone it was in
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (!isDraggedInADropZone && lastIsDraggedInADropZone && lastDropZoneFound) {
        dispatchDraggedElementLeftContainerForNone(lastDropZoneFound, draggedEl);
        lastDropZoneFound = undefined;
        lastIndexFound = undefined;
        lastIsDraggedInADropZone = false;
      } else {
        lastIsDraggedInADropZone = true;
      }
      next = window.setTimeout(andNow, intervalMs);
    }
    andNow();
  }

  // assumption - we can only observe one dragged element at a time, this could be changed in the future
  function unobserve() {
    printDebug(function () {
      return "unobserving";
    });
    clearTimeout(next);
    resetIndexesCache();
  }

  var SCROLL_ZONE_PX = 30;

  /**
   * Will make a scroller that can scroll any element given to it in any direction
   * @returns {{scrollIfNeeded: function(Point, HTMLElement): boolean, resetScrolling: function(void):void}}
   */
  function makeScroller() {
    var scrollingInfo;
    function resetScrolling() {
      scrollingInfo = {
        directionObj: undefined,
        stepPx: 0
      };
    }
    resetScrolling();
    // directionObj {x: 0|1|-1, y:0|1|-1} - 1 means down in y and right in x
    function scrollContainer(containerEl) {
      var _scrollingInfo = scrollingInfo,
        directionObj = _scrollingInfo.directionObj,
        stepPx = _scrollingInfo.stepPx;
      if (directionObj) {
        containerEl.scrollBy(directionObj.x * stepPx, directionObj.y * stepPx);
        window.requestAnimationFrame(function () {
          return scrollContainer(containerEl);
        });
      }
    }
    function calcScrollStepPx(distancePx) {
      return SCROLL_ZONE_PX - distancePx;
    }

    /**
     * @param {Point} pointer - the pointer will be used to decide in which direction to scroll
     * @param {HTMLElement} elementToScroll - the scroll container
     * If the pointer is next to the sides of the element to scroll, will trigger scrolling
     * Can be called repeatedly with updated pointer and elementToScroll values without issues
     * @return {boolean} - true if scrolling was needed
     */
    function scrollIfNeeded(pointer, elementToScroll) {
      if (!elementToScroll) {
        return false;
      }
      var distances = calcInnerDistancesBetweenPointAndSidesOfElement(pointer, elementToScroll);
      var isAlreadyScrolling = !!scrollingInfo.directionObj;
      if (distances === null) {
        if (isAlreadyScrolling) resetScrolling();
        return false;
      }
      var scrollingVertically = false,
        scrollingHorizontally = false;
      // vertical
      if (elementToScroll.scrollHeight > elementToScroll.clientHeight) {
        if (distances.bottom < SCROLL_ZONE_PX) {
          scrollingVertically = true;
          scrollingInfo.directionObj = {
            x: 0,
            y: 1
          };
          scrollingInfo.stepPx = calcScrollStepPx(distances.bottom);
        } else if (distances.top < SCROLL_ZONE_PX) {
          scrollingVertically = true;
          scrollingInfo.directionObj = {
            x: 0,
            y: -1
          };
          scrollingInfo.stepPx = calcScrollStepPx(distances.top);
        }
        if (!isAlreadyScrolling && scrollingVertically) {
          scrollContainer(elementToScroll);
          return true;
        }
      }
      // horizontal
      if (elementToScroll.scrollWidth > elementToScroll.clientWidth) {
        if (distances.right < SCROLL_ZONE_PX) {
          scrollingHorizontally = true;
          scrollingInfo.directionObj = {
            x: 1,
            y: 0
          };
          scrollingInfo.stepPx = calcScrollStepPx(distances.right);
        } else if (distances.left < SCROLL_ZONE_PX) {
          scrollingHorizontally = true;
          scrollingInfo.directionObj = {
            x: -1,
            y: 0
          };
          scrollingInfo.stepPx = calcScrollStepPx(distances.left);
        }
        if (!isAlreadyScrolling && scrollingHorizontally) {
          scrollContainer(elementToScroll);
          return true;
        }
      }
      resetScrolling();
      return false;
    }
    return {
      scrollIfNeeded: scrollIfNeeded,
      resetScrolling: resetScrolling
    };
  }

  /**
   * If the point is inside the element returns its distances from the sides, otherwise returns null
   * @param {Point} point
   * @param {HTMLElement} el
   * @return {null|{top: number, left: number, bottom: number, right: number}}
   */
  function calcInnerDistancesBetweenPointAndSidesOfElement(point, el) {
    // Even if the scrolling element is small it acts as a scroller for the viewport
    var rect = el === document.scrollingElement ? {
      top: 0,
      bottom: window.innerHeight,
      left: 0,
      right: window.innerWidth
    } : el.getBoundingClientRect();
    if (!isPointInsideRect(point, rect)) {
      return null;
    }
    return {
      top: point.y - rect.top,
      bottom: rect.bottom - point.y,
      left: point.x - rect.left,
      right: rect.right - point.x
    };
  }

  /**
   @typedef {Object} MultiScroller
   @property {function():boolean} multiScrollIfNeeded - call this on every "tick" to scroll containers if needed, returns true if anything was scrolled
  /**
   * Creates a scroller than can scroll any of the provided containers or any of their scrollable parents (including the document's scrolling element)
   * @param {HTMLElement[]} baseElementsForScrolling
   * @param {function():Point} getPointerPosition
   * @return {MultiScroller}
   */
  function createMultiScroller() {
    var baseElementsForScrolling = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var getPointerPosition = arguments.length > 1 ? arguments[1] : undefined;
    printDebug(function () {
      return "creating multi-scroller";
    });
    var scrollingContainersSet = findRelevantScrollContainers(baseElementsForScrolling);
    var scrollingContainersDeepToShallow = Array.from(scrollingContainersSet).sort(function (dz1, dz2) {
      return getDepth(dz2) - getDepth(dz1);
    });
    var _makeScroller = makeScroller(),
      scrollIfNeeded = _makeScroller.scrollIfNeeded,
      resetScrolling = _makeScroller.resetScrolling;

    /**
     * @return {boolean} - was any container scrolled
     */
    function tick() {
      var mousePosition = getPointerPosition();
      if (!mousePosition || !scrollingContainersDeepToShallow) {
        return false;
      }
      var scrollContainersUnderCursor = scrollingContainersDeepToShallow.filter(function (el) {
        return isPointInsideRect(mousePosition, el.getBoundingClientRect()) || el === document.scrollingElement;
      });
      for (var i = 0; i < scrollContainersUnderCursor.length; i++) {
        var scrolled = scrollIfNeeded(mousePosition, scrollContainersUnderCursor[i]);
        if (scrolled) {
          return true;
        }
      }
      return false;
    }
    return {
      multiScrollIfNeeded: scrollingContainersSet.size > 0 ? tick : function () {
        return false;
      },
      destroy: function destroy() {
        return resetScrolling();
      }
    };
  }

  // internal utils
  function findScrollableParents(element) {
    if (!element) {
      return [];
    }
    var scrollableContainers = [];
    var parent = element;
    while (parent) {
      var _window$getComputedSt = window.getComputedStyle(parent),
        overflow = _window$getComputedSt.overflow;
      if (overflow.split(" ").some(function (o) {
        return o.includes("auto") || o.includes("scroll");
      })) {
        scrollableContainers.push(parent);
      }
      parent = parent.parentElement;
    }
    return scrollableContainers;
  }
  function findRelevantScrollContainers(dropZones) {
    var scrollingContainers = new Set();
    var _iterator = _createForOfIteratorHelper(dropZones),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var dz = _step.value;
        findScrollableParents(dz).forEach(function (container) {
          return scrollingContainers.add(container);
        });
      }
      // The scrolling element might have overflow visible and still be scrollable
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (document.scrollingElement.scrollHeight > document.scrollingElement.clientHeight || document.scrollingElement.scrollWidth > document.scrollingElement.clientHeight) {
      scrollingContainers.add(document.scrollingElement);
    }
    return scrollingContainers;
  }

  /**
   * Fixes svelte issue when cloning node containing (or being) <select> which will loose it's value.
   * Since svelte manages select value internally.
   * @see https://github.com/sveltejs/svelte/issues/6717
   * @see https://github.com/isaacHagoel/svelte-dnd-action/issues/306
   *
   * @param {HTMLElement} el
   * @returns
   */
  function svelteNodeClone(el) {
    var cloned = el.cloneNode(true);
    var values = [];
    var elIsSelect = el.tagName === "SELECT";
    var selects = elIsSelect ? [el] : _toConsumableArray(el.querySelectorAll("select"));
    var _iterator = _createForOfIteratorHelper(selects),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _select = _step.value;
        values.push(_select.value);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (selects.length > 0) {
      var clonedSelects = elIsSelect ? [cloned] : _toConsumableArray(cloned.querySelectorAll("select"));
      for (var i = 0; i < clonedSelects.length; i++) {
        var select = clonedSelects[i];
        var value = values[i];
        var optionEl = select.querySelector("option[value=\"".concat(value, "\""));
        if (optionEl) {
          optionEl.setAttribute("selected", true);
        }
      }
    }
    var elIsCanvas = el.tagName === "CANVAS";
    var canvases = elIsCanvas ? [el] : _toConsumableArray(el.querySelectorAll("canvas"));
    if (canvases.length > 0) {
      var clonedCanvases = elIsCanvas ? [cloned] : _toConsumableArray(cloned.querySelectorAll("canvas"));
      for (var _i = 0; _i < clonedCanvases.length; _i++) {
        var canvas = canvases[_i];
        var clonedCanvas = clonedCanvases[_i];
        clonedCanvas.width = canvas.width;
        clonedCanvas.height = canvas.height;
        if (canvas.width > 0 && canvas.height > 0) {
          clonedCanvas.getContext("2d").drawImage(canvas, 0, 0);
        }
      }
    }
    return cloned;
  }

  /**
   * @type {{USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: string}}
   */
  var FEATURE_FLAG_NAMES = Object.freeze({
    // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
    USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
  });
  var featureFlagsMap = _defineProperty({}, FEATURE_FLAG_NAMES.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, false);

  /**
   * @param {FEATURE_FLAG_NAMES} flagName
   * @param {boolean} flagValue
   */
  function setFeatureFlag(flagName, flagValue) {
    if (!FEATURE_FLAG_NAMES[flagName]) throw new Error("Can't set non existing feature flag ".concat(flagName, "! Supported flags: ").concat(Object.keys(FEATURE_FLAG_NAMES)));
    featureFlagsMap[flagName] = !!flagValue;
  }

  /**
   *
   * @param {FEATURE_FLAG_NAMES} flagName
   * @return {boolean}
   */
  function getFeatureFlag(flagName) {
    if (!FEATURE_FLAG_NAMES[flagName]) throw new Error("Can't get non existing feature flag ".concat(flagName, "! Supported flags: ").concat(Object.keys(FEATURE_FLAG_NAMES)));
    return featureFlagsMap[flagName];
  }

  var TRANSITION_DURATION_SECONDS = 0.2;

  /**
   * private helper function - creates a transition string for a property
   * @param {string} property
   * @return {string} - the transition string
   */
  function trs(property) {
    return "".concat(property, " ").concat(TRANSITION_DURATION_SECONDS, "s ease");
  }
  /**
   * clones the given element and applies proper styles and transitions to the dragged element
   * @param {HTMLElement} originalElement
   * @param {Point} [positionCenterOnXY]
   * @return {Node} - the cloned, styled element
   */
  function createDraggedElementFrom(originalElement, positionCenterOnXY) {
    var rect = originalElement.getBoundingClientRect();
    var draggedEl = svelteNodeClone(originalElement);
    copyStylesFromTo(originalElement, draggedEl);
    draggedEl.id = DRAGGED_ELEMENT_ID;
    draggedEl.style.position = "fixed";
    var elTopPx = rect.top;
    var elLeftPx = rect.left;
    draggedEl.style.top = "".concat(elTopPx, "px");
    draggedEl.style.left = "".concat(elLeftPx, "px");
    if (positionCenterOnXY) {
      var center = findCenter(rect);
      elTopPx -= center.y - positionCenterOnXY.y;
      elLeftPx -= center.x - positionCenterOnXY.x;
      window.setTimeout(function () {
        draggedEl.style.top = "".concat(elTopPx, "px");
        draggedEl.style.left = "".concat(elLeftPx, "px");
      }, 0);
    }
    draggedEl.style.margin = "0";
    // we can't have relative or automatic height and width or it will break the illusion
    draggedEl.style.boxSizing = "border-box";
    draggedEl.style.height = "".concat(rect.height, "px");
    draggedEl.style.width = "".concat(rect.width, "px");
    draggedEl.style.transition = "".concat(trs("top"), ", ").concat(trs("left"), ", ").concat(trs("background-color"), ", ").concat(trs("opacity"), ", ").concat(trs("color"), " ");
    // this is a workaround for a strange browser bug that causes the right border to disappear when all the transitions are added at the same time
    window.setTimeout(function () {
      return draggedEl.style.transition += ", ".concat(trs("width"), ", ").concat(trs("height"));
    }, 0);
    draggedEl.style.zIndex = "9999";
    draggedEl.style.cursor = "grabbing";
    return draggedEl;
  }

  /**
   * styles the dragged element to a 'dropped' state
   * @param {HTMLElement} draggedEl
   */
  function moveDraggedElementToWasDroppedState(draggedEl) {
    draggedEl.style.cursor = "grab";
  }

  /**
   * Morphs the dragged element style, maintains the mouse pointer within the element
   * @param {HTMLElement} draggedEl
   * @param {HTMLElement} copyFromEl - the element the dragged element should look like, typically the shadow element
   * @param {number} currentMouseX
   * @param {number} currentMouseY
   */
  function morphDraggedElementToBeLike(draggedEl, copyFromEl, currentMouseX, currentMouseY) {
    copyStylesFromTo(copyFromEl, draggedEl);
    var newRect = copyFromEl.getBoundingClientRect();
    var draggedElRect = draggedEl.getBoundingClientRect();
    var widthChange = newRect.width - draggedElRect.width;
    var heightChange = newRect.height - draggedElRect.height;
    if (widthChange || heightChange) {
      var relativeDistanceOfMousePointerFromDraggedSides = {
        left: (currentMouseX - draggedElRect.left) / draggedElRect.width,
        top: (currentMouseY - draggedElRect.top) / draggedElRect.height
      };
      if (!getFeatureFlag(FEATURE_FLAG_NAMES.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT)) {
        draggedEl.style.height = "".concat(newRect.height, "px");
        draggedEl.style.width = "".concat(newRect.width, "px");
      }
      draggedEl.style.left = "".concat(parseFloat(draggedEl.style.left) - relativeDistanceOfMousePointerFromDraggedSides.left * widthChange, "px");
      draggedEl.style.top = "".concat(parseFloat(draggedEl.style.top) - relativeDistanceOfMousePointerFromDraggedSides.top * heightChange, "px");
    }
  }

  /**
   * @param {HTMLElement} copyFromEl
   * @param {HTMLElement} copyToEl
   */
  function copyStylesFromTo(copyFromEl, copyToEl) {
    var computedStyle = window.getComputedStyle(copyFromEl);
    Array.from(computedStyle).filter(function (s) {
      return s.startsWith("background") || s.startsWith("padding") || s.startsWith("font") || s.startsWith("text") || s.startsWith("align") || s.startsWith("justify") || s.startsWith("display") || s.startsWith("flex") || s.startsWith("border") || s === "opacity" || s === "color" || s === "list-style-type" ||
      // copying with and height to make up for rect update timing issues in some browsers
      getFeatureFlag(FEATURE_FLAG_NAMES.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) && (s === "width" || s === "height");
    }).forEach(function (s) {
      return copyToEl.style.setProperty(s, computedStyle.getPropertyValue(s), computedStyle.getPropertyPriority(s));
    });
  }

  /**
   * makes the element compatible with being draggable
   * @param {HTMLElement} draggableEl
   * @param {boolean} dragDisabled
   */
  function styleDraggable(draggableEl, dragDisabled) {
    draggableEl.draggable = false;
    draggableEl.ondragstart = function () {
      return false;
    };
    if (!dragDisabled) {
      draggableEl.style.userSelect = "none";
      draggableEl.style.WebkitUserSelect = "none";
      draggableEl.style.cursor = "grab";
    } else {
      draggableEl.style.userSelect = "";
      draggableEl.style.WebkitUserSelect = "";
      draggableEl.style.cursor = "";
    }
  }

  /**
   * Hides the provided element so that it can stay in the dom without interrupting
   * @param {HTMLElement} dragTarget
   */
  function hideElement(dragTarget) {
    dragTarget.style.display = "none";
    dragTarget.style.position = "fixed";
    dragTarget.style.zIndex = "-5";
  }

  /**
   * styles the shadow element
   * @param {HTMLElement} shadowEl
   */
  function decorateShadowEl(shadowEl) {
    shadowEl.style.visibility = "hidden";
    shadowEl.setAttribute(SHADOW_ELEMENT_ATTRIBUTE_NAME, "true");
  }

  /**
   * undo the styles the shadow element
   * @param {HTMLElement} shadowEl
   */
  function unDecorateShadowElement(shadowEl) {
    shadowEl.style.visibility = "";
    shadowEl.removeAttribute(SHADOW_ELEMENT_ATTRIBUTE_NAME);
  }

  /**
   * will mark the given dropzones as visually active
   * @param {Array<HTMLElement>} dropZones
   * @param {Function} getStyles - maps a dropzone to a styles object (so the styles can be removed)
   * @param {Function} getClasses - maps a dropzone to a classList
   */
  function styleActiveDropZones(dropZones) {
    var getStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var getClasses = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
      return [];
    };
    dropZones.forEach(function (dz) {
      var styles = getStyles(dz);
      Object.keys(styles).forEach(function (style) {
        dz.style[style] = styles[style];
      });
      getClasses(dz).forEach(function (c) {
        return dz.classList.add(c);
      });
    });
  }

  /**
   * will remove the 'active' styling from given dropzones
   * @param {Array<HTMLElement>} dropZones
   * @param {Function} getStyles - maps a dropzone to a styles object
   * @param {Function} getClasses - maps a dropzone to a classList
   */
  function styleInactiveDropZones(dropZones) {
    var getStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var getClasses = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
      return [];
    };
    dropZones.forEach(function (dz) {
      var styles = getStyles(dz);
      Object.keys(styles).forEach(function (style) {
        dz.style[style] = "";
      });
      getClasses(dz).forEach(function (c) {
        return dz.classList.contains(c) && dz.classList.remove(c);
      });
    });
  }

  /**
   * will prevent the provided element from shrinking by setting its minWidth and minHeight to the current width and height values
   * @param {HTMLElement} el
   * @return {function(): void} - run this function to undo the operation and restore the original values
   */
  function preventShrinking(el) {
    var originalMinHeight = el.style.minHeight;
    el.style.minHeight = window.getComputedStyle(el).getPropertyValue("height");
    var originalMinWidth = el.style.minWidth;
    el.style.minWidth = window.getComputedStyle(el).getPropertyValue("width");
    return function undo() {
      el.style.minHeight = originalMinHeight;
      el.style.minWidth = originalMinWidth;
    };
  }

  var DEFAULT_DROP_ZONE_TYPE$1 = "--any--";
  var MIN_OBSERVATION_INTERVAL_MS = 100;
  var DISABLED_OBSERVATION_INTERVAL_MS = 20;
  var MIN_MOVEMENT_BEFORE_DRAG_START_PX = 3;
  var DEFAULT_DROP_TARGET_STYLE$1 = {
    outline: "rgba(255, 255, 102, 0.7) solid 2px"
  };
  var ORIGINAL_DRAGGED_ITEM_MARKER_ATTRIBUTE = "data-is-dnd-original-dragged-item";
  var originalDragTarget;
  var draggedEl;
  var draggedElData;
  var draggedElType;
  var originDropZone;
  var originIndex;
  var shadowElData;
  var shadowElDropZone;
  var dragStartMousePosition;
  var currentMousePosition;
  var isWorkingOnPreviousDrag = false;
  var finalizingPreviousDrag = false;
  var unlockOriginDzMinDimensions;
  var isDraggedOutsideOfAnyDz = false;
  var scheduledForRemovalAfterDrop = [];
  var multiScroller;

  // a map from type to a set of drop-zones
  var typeToDropZones$1 = new Map();
  // important - this is needed because otherwise the config that would be used for everyone is the config of the element that created the event listeners
  var dzToConfig$1 = new Map();
  // this is needed in order to be able to cleanup old listeners and avoid stale closures issues (as the listener is defined within each zone)
  var elToMouseDownListener = new WeakMap();

  /* drop-zones registration management */
  function registerDropZone$1(dropZoneEl, type) {
    printDebug(function () {
      return "registering drop-zone if absent";
    });
    if (!typeToDropZones$1.has(type)) {
      typeToDropZones$1.set(type, new Set());
    }
    if (!typeToDropZones$1.get(type).has(dropZoneEl)) {
      typeToDropZones$1.get(type).add(dropZoneEl);
      incrementActiveDropZoneCount();
    }
  }
  function unregisterDropZone$1(dropZoneEl, type) {
    typeToDropZones$1.get(type)["delete"](dropZoneEl);
    decrementActiveDropZoneCount();
    if (typeToDropZones$1.get(type).size === 0) {
      typeToDropZones$1["delete"](type);
    }
  }

  /* functions to manage observing the dragged element and trigger custom drag-events */
  function watchDraggedElement() {
    printDebug(function () {
      return "watching dragged element";
    });
    var dropZones = typeToDropZones$1.get(draggedElType);
    var _iterator = _createForOfIteratorHelper(dropZones),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var dz = _step.value;
        dz.addEventListener(DRAGGED_ENTERED_EVENT_NAME, handleDraggedEntered);
        dz.addEventListener(DRAGGED_LEFT_EVENT_NAME, handleDraggedLeft);
        dz.addEventListener(DRAGGED_OVER_INDEX_EVENT_NAME, handleDraggedIsOverIndex);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    window.addEventListener(DRAGGED_LEFT_DOCUMENT_EVENT_NAME, handleDrop$1);

    // it is important that we don't have an interval that is faster than the flip duration because it can cause elements to jump bach and forth
    var setIntervalMs = Math.max.apply(Math, _toConsumableArray(Array.from(dropZones.keys()).map(function (dz) {
      return dzToConfig$1.get(dz).dropAnimationDurationMs;
    })));
    var observationIntervalMs = setIntervalMs === 0 ? DISABLED_OBSERVATION_INTERVAL_MS : Math.max(setIntervalMs, MIN_OBSERVATION_INTERVAL_MS); // if setIntervalMs is 0 it goes to 20, otherwise it is max between it and min observation.
    multiScroller = createMultiScroller(dropZones, function () {
      return currentMousePosition;
    });
    observe(draggedEl, dropZones, observationIntervalMs * 1.07, multiScroller);
  }
  function unWatchDraggedElement() {
    printDebug(function () {
      return "unwatching dragged element";
    });
    var dropZones = typeToDropZones$1.get(draggedElType);
    var _iterator2 = _createForOfIteratorHelper(dropZones),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var dz = _step2.value;
        dz.removeEventListener(DRAGGED_ENTERED_EVENT_NAME, handleDraggedEntered);
        dz.removeEventListener(DRAGGED_LEFT_EVENT_NAME, handleDraggedLeft);
        dz.removeEventListener(DRAGGED_OVER_INDEX_EVENT_NAME, handleDraggedIsOverIndex);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    window.removeEventListener(DRAGGED_LEFT_DOCUMENT_EVENT_NAME, handleDrop$1);
    if (multiScroller) {
      multiScroller.destroy();
    }
    multiScroller = undefined;
    unobserve();
  }
  function findShadowElementIdx(items) {
    return items.findIndex(function (item) {
      return !!item[SHADOW_ITEM_MARKER_PROPERTY_NAME];
    });
  }
  function createShadowElData(draggedElData) {
    var _objectSpread2$1;
    return _objectSpread2(_objectSpread2({}, draggedElData), {}, (_objectSpread2$1 = {}, _defineProperty(_objectSpread2$1, SHADOW_ITEM_MARKER_PROPERTY_NAME, true), _defineProperty(_objectSpread2$1, ITEM_ID_KEY, SHADOW_PLACEHOLDER_ITEM_ID), _objectSpread2$1));
  }

  /* custom drag-events handlers */
  function handleDraggedEntered(e) {
    printDebug(function () {
      return ["dragged entered", e.currentTarget, e.detail];
    });
    var _dzToConfig$get = dzToConfig$1.get(e.currentTarget),
      items = _dzToConfig$get.items,
      dropFromOthersDisabled = _dzToConfig$get.dropFromOthersDisabled;
    if (dropFromOthersDisabled && e.currentTarget !== originDropZone) {
      printDebug(function () {
        return "ignoring dragged entered because drop is currently disabled";
      });
      return;
    }
    isDraggedOutsideOfAnyDz = false;
    // this deals with another race condition. in rare occasions (super rapid operations) the list hasn't updated yet
    items = items.filter(function (item) {
      return item[ITEM_ID_KEY] !== shadowElData[ITEM_ID_KEY];
    });
    printDebug(function () {
      return "dragged entered items ".concat(toString(items));
    });
    if (originDropZone !== e.currentTarget) {
      var originZoneItems = dzToConfig$1.get(originDropZone).items;
      var newOriginZoneItems = originZoneItems.filter(function (item) {
        return !item[SHADOW_ITEM_MARKER_PROPERTY_NAME];
      });
      dispatchConsiderEvent(originDropZone, newOriginZoneItems, {
        trigger: TRIGGERS.DRAGGED_ENTERED_ANOTHER,
        id: draggedElData[ITEM_ID_KEY],
        source: SOURCES.POINTER
      });
    }
    var _e$detail$indexObj = e.detail.indexObj,
      index = _e$detail$indexObj.index,
      isProximityBased = _e$detail$indexObj.isProximityBased;
    var shadowElIdx = isProximityBased && index === e.currentTarget.children.length - 1 ? index + 1 : index;
    shadowElDropZone = e.currentTarget;
    items.splice(shadowElIdx, 0, shadowElData);
    dispatchConsiderEvent(e.currentTarget, items, {
      trigger: TRIGGERS.DRAGGED_ENTERED,
      id: draggedElData[ITEM_ID_KEY],
      source: SOURCES.POINTER
    });
  }
  function handleDraggedLeft(e) {
    // dealing with a rare race condition on extremely rapid clicking and dropping
    if (!isWorkingOnPreviousDrag) return;
    printDebug(function () {
      return ["dragged left", e.currentTarget, e.detail];
    });
    var _dzToConfig$get2 = dzToConfig$1.get(e.currentTarget),
      originalItems = _dzToConfig$get2.items,
      dropFromOthersDisabled = _dzToConfig$get2.dropFromOthersDisabled;
    if (dropFromOthersDisabled && e.currentTarget !== originDropZone && e.currentTarget !== shadowElDropZone) {
      printDebug(function () {
        return "drop is currently disabled";
      });
      return;
    }
    var items = _toConsumableArray(originalItems);
    var shadowElIdx = findShadowElementIdx(items);
    if (shadowElIdx !== -1) {
      items.splice(shadowElIdx, 1);
    }
    var origShadowDz = shadowElDropZone;
    shadowElDropZone = undefined;
    var _e$detail = e.detail,
      type = _e$detail.type,
      theOtherDz = _e$detail.theOtherDz;
    if (type === DRAGGED_LEFT_TYPES.OUTSIDE_OF_ANY || type === DRAGGED_LEFT_TYPES.LEFT_FOR_ANOTHER && theOtherDz !== originDropZone && dzToConfig$1.get(theOtherDz).dropFromOthersDisabled) {
      printDebug(function () {
        return "dragged left all, putting shadow element back in the origin dz";
      });
      isDraggedOutsideOfAnyDz = true;
      shadowElDropZone = originDropZone;
      // if the last zone it left is the origin dz, we will put it back into items (which we just removed it from)
      var originZoneItems = origShadowDz === originDropZone ? items : _toConsumableArray(dzToConfig$1.get(originDropZone).items);
      originZoneItems.splice(originIndex, 0, shadowElData);
      dispatchConsiderEvent(originDropZone, originZoneItems, {
        trigger: TRIGGERS.DRAGGED_LEFT_ALL,
        id: draggedElData[ITEM_ID_KEY],
        source: SOURCES.POINTER
      });
    }
    // for the origin dz, when the dragged is outside of any, this will be fired in addition to the previous. this is for simplicity
    dispatchConsiderEvent(e.currentTarget, items, {
      trigger: TRIGGERS.DRAGGED_LEFT,
      id: draggedElData[ITEM_ID_KEY],
      source: SOURCES.POINTER
    });
  }
  function handleDraggedIsOverIndex(e) {
    printDebug(function () {
      return ["dragged is over index", e.currentTarget, e.detail];
    });
    var _dzToConfig$get3 = dzToConfig$1.get(e.currentTarget),
      originalItems = _dzToConfig$get3.items,
      dropFromOthersDisabled = _dzToConfig$get3.dropFromOthersDisabled;
    if (dropFromOthersDisabled && e.currentTarget !== originDropZone) {
      printDebug(function () {
        return "drop is currently disabled";
      });
      return;
    }
    var items = _toConsumableArray(originalItems);
    isDraggedOutsideOfAnyDz = false;
    var index = e.detail.indexObj.index;
    var shadowElIdx = findShadowElementIdx(items);
    if (shadowElIdx !== -1) {
      items.splice(shadowElIdx, 1);
    }
    items.splice(index, 0, shadowElData);
    dispatchConsiderEvent(e.currentTarget, items, {
      trigger: TRIGGERS.DRAGGED_OVER_INDEX,
      id: draggedElData[ITEM_ID_KEY],
      source: SOURCES.POINTER
    });
  }

  // Global mouse/touch-events handlers
  function handleMouseMove(e) {
    e.preventDefault();
    var c = e.touches ? e.touches[0] : e;
    currentMousePosition = {
      x: c.clientX,
      y: c.clientY
    };
    draggedEl.style.transform = "translate3d(".concat(currentMousePosition.x - dragStartMousePosition.x, "px, ").concat(currentMousePosition.y - dragStartMousePosition.y, "px, 0)");
  }
  function handleDrop$1() {
    printDebug(function () {
      return "dropped";
    });
    finalizingPreviousDrag = true;
    // cleanup
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("touchmove", handleMouseMove);
    window.removeEventListener("mouseup", handleDrop$1);
    window.removeEventListener("touchend", handleDrop$1);
    unWatchDraggedElement();
    moveDraggedElementToWasDroppedState(draggedEl);
    if (!shadowElDropZone) {
      printDebug(function () {
        return "element was dropped right after it left origin but before entering somewhere else";
      });
      shadowElDropZone = originDropZone;
    }
    printDebug(function () {
      return ["dropped in dz", shadowElDropZone];
    });
    var _dzToConfig$get4 = dzToConfig$1.get(shadowElDropZone),
      items = _dzToConfig$get4.items,
      type = _dzToConfig$get4.type;
    styleInactiveDropZones(typeToDropZones$1.get(type), function (dz) {
      return dzToConfig$1.get(dz).dropTargetStyle;
    }, function (dz) {
      return dzToConfig$1.get(dz).dropTargetClasses;
    });
    var shadowElIdx = findShadowElementIdx(items);
    // the handler might remove the shadow element, ex: dragula like copy on drag
    if (shadowElIdx === -1) {
      if (shadowElDropZone === originDropZone) {
        shadowElIdx = originIndex;
      }
    }
    items = items.map(function (item) {
      return item[SHADOW_ITEM_MARKER_PROPERTY_NAME] ? draggedElData : item;
    });
    function finalizeWithinZone() {
      unlockOriginDzMinDimensions();
      dispatchFinalizeEvent(shadowElDropZone, items, {
        trigger: isDraggedOutsideOfAnyDz ? TRIGGERS.DROPPED_OUTSIDE_OF_ANY : TRIGGERS.DROPPED_INTO_ZONE,
        id: draggedElData[ITEM_ID_KEY],
        source: SOURCES.POINTER
      });
      if (shadowElDropZone !== originDropZone) {
        // letting the origin drop zone know the element was permanently taken away
        dispatchFinalizeEvent(originDropZone, dzToConfig$1.get(originDropZone).items, {
          trigger: TRIGGERS.DROPPED_INTO_ANOTHER,
          id: draggedElData[ITEM_ID_KEY],
          source: SOURCES.POINTER
        });
      }
      if (shadowElIdx !== -1) unDecorateShadowElement(shadowElDropZone.children[shadowElIdx]);
      cleanupPostDrop();
    }
    if (dzToConfig$1.get(shadowElDropZone).dropAnimationDisabled) {
      finalizeWithinZone();
    } else {
      animateDraggedToFinalPosition(shadowElIdx, finalizeWithinZone);
    }
  }

  // helper function for handleDrop
  function animateDraggedToFinalPosition(shadowElIdx, callback) {
    var shadowElRect = shadowElIdx > -1 ? getBoundingRectNoTransforms(shadowElDropZone.children[shadowElIdx], false) : getBoundingRectNoTransforms(shadowElDropZone, false);
    var newTransform = {
      x: shadowElRect.left - parseFloat(draggedEl.style.left),
      y: shadowElRect.top - parseFloat(draggedEl.style.top)
    };
    var _dzToConfig$get5 = dzToConfig$1.get(shadowElDropZone),
      dropAnimationDurationMs = _dzToConfig$get5.dropAnimationDurationMs;
    var transition = "transform ".concat(dropAnimationDurationMs, "ms ease");
    draggedEl.style.transition = draggedEl.style.transition ? draggedEl.style.transition + "," + transition : transition;
    draggedEl.style.transform = "translate3d(".concat(newTransform.x, "px, ").concat(newTransform.y, "px, 0)");
    window.setTimeout(callback, dropAnimationDurationMs);
  }
  function scheduleDZForRemovalAfterDrop(dz, destroy) {
    scheduledForRemovalAfterDrop.push({
      dz: dz,
      destroy: destroy
    });
    window.requestAnimationFrame(function () {
      hideElement(dz);
      document.body.appendChild(dz);
    });
  }
  /* cleanup */
  function cleanupPostDrop() {
    draggedEl.remove();
    originalDragTarget.remove();
    if (scheduledForRemovalAfterDrop.length) {
      printDebug(function () {
        return ["will destroy zones that were removed during drag", scheduledForRemovalAfterDrop];
      });
      scheduledForRemovalAfterDrop.forEach(function (_ref) {
        var dz = _ref.dz,
          destroy = _ref.destroy;
        destroy();
        dz.remove();
      });
      scheduledForRemovalAfterDrop = [];
    }
    draggedEl = undefined;
    originalDragTarget = undefined;
    draggedElData = undefined;
    draggedElType = undefined;
    originDropZone = undefined;
    originIndex = undefined;
    shadowElData = undefined;
    shadowElDropZone = undefined;
    dragStartMousePosition = undefined;
    currentMousePosition = undefined;
    isWorkingOnPreviousDrag = false;
    finalizingPreviousDrag = false;
    unlockOriginDzMinDimensions = undefined;
    isDraggedOutsideOfAnyDz = false;
  }
  function dndzone$2(node, options) {
    var initialized = false;
    var config = {
      items: undefined,
      type: undefined,
      flipDurationMs: 0,
      dragDisabled: false,
      morphDisabled: false,
      dropFromOthersDisabled: false,
      dropTargetStyle: DEFAULT_DROP_TARGET_STYLE$1,
      dropTargetClasses: [],
      transformDraggedElement: function transformDraggedElement() {},
      centreDraggedOnCursor: false,
      dropAnimationDisabled: false
    };
    printDebug(function () {
      return ["dndzone good to go options: ".concat(toString(options), ", config: ").concat(toString(config)), {
        node: node
      }];
    });
    var elToIdx = new Map();
    function addMaybeListeners() {
      window.addEventListener("mousemove", handleMouseMoveMaybeDragStart, {
        passive: false
      });
      window.addEventListener("touchmove", handleMouseMoveMaybeDragStart, {
        passive: false,
        capture: false
      });
      window.addEventListener("mouseup", handleFalseAlarm, {
        passive: false
      });
      window.addEventListener("touchend", handleFalseAlarm, {
        passive: false
      });
    }
    function removeMaybeListeners() {
      window.removeEventListener("mousemove", handleMouseMoveMaybeDragStart);
      window.removeEventListener("touchmove", handleMouseMoveMaybeDragStart);
      window.removeEventListener("mouseup", handleFalseAlarm);
      window.removeEventListener("touchend", handleFalseAlarm);
    }
    function handleFalseAlarm(e) {
      removeMaybeListeners();
      originalDragTarget = undefined;
      dragStartMousePosition = undefined;
      currentMousePosition = undefined;

      // dragging initiated by touch events prevents onclick from initially firing
      if (e.type === "touchend") {
        e.target.click();
      }
    }
    function handleMouseMoveMaybeDragStart(e) {
      e.preventDefault();
      var c = e.touches ? e.touches[0] : e;
      currentMousePosition = {
        x: c.clientX,
        y: c.clientY
      };
      if (Math.abs(currentMousePosition.x - dragStartMousePosition.x) >= MIN_MOVEMENT_BEFORE_DRAG_START_PX || Math.abs(currentMousePosition.y - dragStartMousePosition.y) >= MIN_MOVEMENT_BEFORE_DRAG_START_PX) {
        removeMaybeListeners();
        handleDragStart();
      }
    }
    function handleMouseDown(e) {
      // on safari clicking on a select element doesn't fire mouseup at the end of the click and in general this makes more sense
      if (e.target !== e.currentTarget && (e.target.value !== undefined || e.target.isContentEditable)) {
        printDebug(function () {
          return "won't initiate drag on a nested input element";
        });
        return;
      }
      // prevents responding to any button but left click which equals 0 (which is falsy)
      if (e.button) {
        printDebug(function () {
          return "ignoring none left click button: ".concat(e.button);
        });
        return;
      }
      if (isWorkingOnPreviousDrag) {
        printDebug(function () {
          return "cannot start a new drag before finalizing previous one";
        });
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      var c = e.touches ? e.touches[0] : e;
      dragStartMousePosition = {
        x: c.clientX,
        y: c.clientY
      };
      currentMousePosition = _objectSpread2({}, dragStartMousePosition);
      originalDragTarget = e.currentTarget;
      addMaybeListeners();
    }
    function handleDragStart() {
      printDebug(function () {
        return ["drag start config: ".concat(toString(config)), originalDragTarget];
      });
      isWorkingOnPreviousDrag = true;

      // initialising globals
      var currentIdx = elToIdx.get(originalDragTarget);
      originIndex = currentIdx;
      originDropZone = originalDragTarget.parentElement;
      /** @type {ShadowRoot | HTMLDocument | Element } */
      var rootNode = originDropZone.closest("dialog") || originDropZone.getRootNode();
      var originDropZoneRoot = rootNode.body || rootNode;
      var originalItems = config.items,
        type = config.type,
        centreDraggedOnCursor = config.centreDraggedOnCursor;
      var items = _toConsumableArray(originalItems);
      draggedElData = items[currentIdx];
      draggedElType = type;
      shadowElData = createShadowElData(draggedElData);

      // creating the draggable element
      draggedEl = createDraggedElementFrom(originalDragTarget, centreDraggedOnCursor && currentMousePosition);
      originalDragTarget.setAttribute(ORIGINAL_DRAGGED_ITEM_MARKER_ATTRIBUTE, true);

      // We will keep the original dom node in the dom because touch events keep firing on it, we want to re-add it after the framework removes it
      function keepOriginalElementInDom() {
        if (!draggedEl.parentElement) {
          originDropZoneRoot.appendChild(draggedEl);
          // to prevent the outline from disappearing
          draggedEl.focus();
          watchDraggedElement();
          hideElement(originalDragTarget);
          originDropZoneRoot.appendChild(originalDragTarget);
          // after the removal of the original element we can give the shadow element the original item id so that the host zone can find it and render it correctly if it does lookups by id
          shadowElData[ITEM_ID_KEY] = draggedElData[ITEM_ID_KEY];
        } else {
          window.requestAnimationFrame(keepOriginalElementInDom);
        }
      }
      window.requestAnimationFrame(keepOriginalElementInDom);
      styleActiveDropZones(Array.from(typeToDropZones$1.get(config.type)).filter(function (dz) {
        return dz === originDropZone || !dzToConfig$1.get(dz).dropFromOthersDisabled;
      }), function (dz) {
        return dzToConfig$1.get(dz).dropTargetStyle;
      }, function (dz) {
        return dzToConfig$1.get(dz).dropTargetClasses;
      });

      // removing the original element by removing its data entry
      items.splice(currentIdx, 1, shadowElData);
      unlockOriginDzMinDimensions = preventShrinking(originDropZone);
      dispatchConsiderEvent(originDropZone, items, {
        trigger: TRIGGERS.DRAG_STARTED,
        id: draggedElData[ITEM_ID_KEY],
        source: SOURCES.POINTER
      });

      // handing over to global handlers - starting to watch the element
      window.addEventListener("mousemove", handleMouseMove, {
        passive: false
      });
      window.addEventListener("touchmove", handleMouseMove, {
        passive: false,
        capture: false
      });
      window.addEventListener("mouseup", handleDrop$1, {
        passive: false
      });
      window.addEventListener("touchend", handleDrop$1, {
        passive: false
      });
    }
    function configure(_ref2) {
      var _ref2$items = _ref2.items,
        items = _ref2$items === void 0 ? undefined : _ref2$items,
        _ref2$flipDurationMs = _ref2.flipDurationMs,
        dropAnimationDurationMs = _ref2$flipDurationMs === void 0 ? 0 : _ref2$flipDurationMs,
        _ref2$type = _ref2.type,
        newType = _ref2$type === void 0 ? DEFAULT_DROP_ZONE_TYPE$1 : _ref2$type,
        _ref2$dragDisabled = _ref2.dragDisabled,
        dragDisabled = _ref2$dragDisabled === void 0 ? false : _ref2$dragDisabled,
        _ref2$morphDisabled = _ref2.morphDisabled,
        morphDisabled = _ref2$morphDisabled === void 0 ? false : _ref2$morphDisabled,
        _ref2$dropFromOthersD = _ref2.dropFromOthersDisabled,
        dropFromOthersDisabled = _ref2$dropFromOthersD === void 0 ? false : _ref2$dropFromOthersD,
        _ref2$dropTargetStyle = _ref2.dropTargetStyle,
        dropTargetStyle = _ref2$dropTargetStyle === void 0 ? DEFAULT_DROP_TARGET_STYLE$1 : _ref2$dropTargetStyle,
        _ref2$dropTargetClass = _ref2.dropTargetClasses,
        dropTargetClasses = _ref2$dropTargetClass === void 0 ? [] : _ref2$dropTargetClass,
        _ref2$transformDragge = _ref2.transformDraggedElement,
        transformDraggedElement = _ref2$transformDragge === void 0 ? function () {} : _ref2$transformDragge,
        _ref2$centreDraggedOn = _ref2.centreDraggedOnCursor,
        centreDraggedOnCursor = _ref2$centreDraggedOn === void 0 ? false : _ref2$centreDraggedOn,
        _ref2$dropAnimationDi = _ref2.dropAnimationDisabled,
        dropAnimationDisabled = _ref2$dropAnimationDi === void 0 ? false : _ref2$dropAnimationDi;
      config.dropAnimationDurationMs = dropAnimationDurationMs;
      if (config.type && newType !== config.type) {
        unregisterDropZone$1(node, config.type);
      }
      config.type = newType;
      config.items = _toConsumableArray(items);
      config.dragDisabled = dragDisabled;
      config.morphDisabled = morphDisabled;
      config.transformDraggedElement = transformDraggedElement;
      config.centreDraggedOnCursor = centreDraggedOnCursor;
      config.dropAnimationDisabled = dropAnimationDisabled;

      // realtime update for dropTargetStyle
      if (initialized && isWorkingOnPreviousDrag && !finalizingPreviousDrag && (!areObjectsShallowEqual(dropTargetStyle, config.dropTargetStyle) || !areArraysShallowEqualSameOrder(dropTargetClasses, config.dropTargetClasses))) {
        styleInactiveDropZones([node], function () {
          return config.dropTargetStyle;
        }, function () {
          return dropTargetClasses;
        });
        styleActiveDropZones([node], function () {
          return dropTargetStyle;
        }, function () {
          return dropTargetClasses;
        });
      }
      config.dropTargetStyle = dropTargetStyle;
      config.dropTargetClasses = _toConsumableArray(dropTargetClasses);

      // realtime update for dropFromOthersDisabled
      function getConfigProp(dz, propName) {
        return dzToConfig$1.get(dz) ? dzToConfig$1.get(dz)[propName] : config[propName];
      }
      if (initialized && isWorkingOnPreviousDrag && config.dropFromOthersDisabled !== dropFromOthersDisabled) {
        if (dropFromOthersDisabled) {
          styleInactiveDropZones([node], function (dz) {
            return getConfigProp(dz, "dropTargetStyle");
          }, function (dz) {
            return getConfigProp(dz, "dropTargetClasses");
          });
        } else {
          styleActiveDropZones([node], function (dz) {
            return getConfigProp(dz, "dropTargetStyle");
          }, function (dz) {
            return getConfigProp(dz, "dropTargetClasses");
          });
        }
      }
      config.dropFromOthersDisabled = dropFromOthersDisabled;
      dzToConfig$1.set(node, config);
      registerDropZone$1(node, newType);
      var shadowElIdx = isWorkingOnPreviousDrag ? findShadowElementIdx(config.items) : -1;
      for (var idx = 0; idx < node.children.length; idx++) {
        var draggableEl = node.children[idx];
        styleDraggable(draggableEl, dragDisabled);
        if (idx === shadowElIdx) {
          if (!morphDisabled) {
            morphDraggedElementToBeLike(draggedEl, draggableEl, currentMousePosition.x, currentMousePosition.y);
          }
          config.transformDraggedElement(draggedEl, draggedElData, idx);
          decorateShadowEl(draggableEl);
          continue;
        }
        draggableEl.removeEventListener("mousedown", elToMouseDownListener.get(draggableEl));
        draggableEl.removeEventListener("touchstart", elToMouseDownListener.get(draggableEl));
        if (!dragDisabled) {
          draggableEl.addEventListener("mousedown", handleMouseDown);
          draggableEl.addEventListener("touchstart", handleMouseDown);
          elToMouseDownListener.set(draggableEl, handleMouseDown);
        }
        // updating the idx
        elToIdx.set(draggableEl, idx);
        if (!initialized) {
          initialized = true;
        }
      }
    }
    configure(options);
    return {
      update: function update(newOptions) {
        printDebug(function () {
          return "pointer dndzone will update newOptions: ".concat(toString(newOptions));
        });
        configure(newOptions);
      },
      destroy: function destroy() {
        function destroyDz() {
          printDebug(function () {
            return "pointer dndzone will destroy";
          });
          unregisterDropZone$1(node, dzToConfig$1.get(node).type);
          dzToConfig$1["delete"](node);
        }
        if (isWorkingOnPreviousDrag && !node.closest("[".concat(ORIGINAL_DRAGGED_ITEM_MARKER_ATTRIBUTE, "]"))) {
          printDebug(function () {
            return "pointer dndzone will be scheduled for destruction";
          });
          scheduleDZForRemovalAfterDrop(node, destroyDz);
        } else {
          destroyDz();
        }
      }
    };
  }

  var _ID_TO_INSTRUCTION;
  var INSTRUCTION_IDs$1 = {
    DND_ZONE_ACTIVE: "dnd-zone-active",
    DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
  };
  var ID_TO_INSTRUCTION = (_ID_TO_INSTRUCTION = {}, _defineProperty(_ID_TO_INSTRUCTION, INSTRUCTION_IDs$1.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), _defineProperty(_ID_TO_INSTRUCTION, INSTRUCTION_IDs$1.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list"), _ID_TO_INSTRUCTION);
  var ALERT_DIV_ID = "dnd-action-aria-alert";
  var alertsDiv;
  function initAriaOnBrowser() {
    if (alertsDiv) {
      // it is already initialized
      return;
    }
    // setting the dynamic alerts
    alertsDiv = document.createElement("div");
    (function initAlertsDiv() {
      alertsDiv.id = ALERT_DIV_ID;
      // tab index -1 makes the alert be read twice on chrome for some reason
      //alertsDiv.tabIndex = -1;
      alertsDiv.style.position = "fixed";
      alertsDiv.style.bottom = "0";
      alertsDiv.style.left = "0";
      alertsDiv.style.zIndex = "-5";
      alertsDiv.style.opacity = "0";
      alertsDiv.style.height = "0";
      alertsDiv.style.width = "0";
      alertsDiv.setAttribute("role", "alert");
    })();
    document.body.prepend(alertsDiv);

    // setting the instructions
    Object.entries(ID_TO_INSTRUCTION).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        id = _ref2[0],
        txt = _ref2[1];
      return document.body.prepend(instructionToHiddenDiv(id, txt));
    });
  }

  /**
   * Initializes the static aria instructions so they can be attached to zones
   * @return {{DND_ZONE_ACTIVE: string, DND_ZONE_DRAG_DISABLED: string} | null} - the IDs for static aria instruction (to be used via aria-describedby) or null on the server
   */
  function initAria() {
    if (isOnServer) return null;
    if (document.readyState === "complete") {
      initAriaOnBrowser();
    } else {
      window.addEventListener("DOMContentLoaded", initAriaOnBrowser);
    }
    return _objectSpread2({}, INSTRUCTION_IDs$1);
  }

  /**
   * Removes all the artifacts (dom elements) added by this module
   */
  function destroyAria() {
    if (isOnServer || !alertsDiv) return;
    Object.keys(ID_TO_INSTRUCTION).forEach(function (id) {
      var _document$getElementB;
      return (_document$getElementB = document.getElementById(id)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.remove();
    });
    alertsDiv.remove();
    alertsDiv = undefined;
  }
  function instructionToHiddenDiv(id, txt) {
    var div = document.createElement("div");
    div.id = id;
    div.innerHTML = "<p>".concat(txt, "</p>");
    div.style.display = "none";
    div.style.position = "fixed";
    div.style.zIndex = "-5";
    return div;
  }

  /**
   * Will make the screen reader alert the provided text to the user
   * @param {string} txt
   */
  function alertToScreenReader(txt) {
    if (isOnServer) return;
    if (!alertsDiv) {
      initAriaOnBrowser();
    }
    alertsDiv.innerHTML = "";
    var alertText = document.createTextNode(txt);
    alertsDiv.appendChild(alertText);
    // this is needed for Safari
    alertsDiv.style.display = "none";
    alertsDiv.style.display = "inline";
  }

  var DEFAULT_DROP_ZONE_TYPE = "--any--";
  var DEFAULT_DROP_TARGET_STYLE = {
    outline: "rgba(255, 255, 102, 0.7) solid 2px"
  };
  var isDragging = false;
  var draggedItemType;
  var focusedDz;
  var focusedDzLabel = "";
  var focusedItem;
  var focusedItemId;
  var focusedItemLabel = "";
  var allDragTargets = new WeakSet();
  var elToKeyDownListeners = new WeakMap();
  var elToFocusListeners = new WeakMap();
  var dzToHandles = new Map();
  var dzToConfig = new Map();
  var typeToDropZones = new Map();

  /* TODO (potentially)
   * what's the deal with the black border of voice-reader not following focus?
   * maybe keep focus on the last dragged item upon drop?
   */

  var INSTRUCTION_IDs;

  /* drop-zones registration management */
  function registerDropZone(dropZoneEl, type) {
    printDebug(function () {
      return "registering drop-zone if absent";
    });
    if (typeToDropZones.size === 0) {
      printDebug(function () {
        return "adding global keydown and click handlers";
      });
      INSTRUCTION_IDs = initAria();
      window.addEventListener("keydown", globalKeyDownHandler);
      window.addEventListener("click", globalClickHandler);
    }
    if (!typeToDropZones.has(type)) {
      typeToDropZones.set(type, new Set());
    }
    if (!typeToDropZones.get(type).has(dropZoneEl)) {
      typeToDropZones.get(type).add(dropZoneEl);
      incrementActiveDropZoneCount();
    }
  }
  function unregisterDropZone(dropZoneEl, type) {
    printDebug(function () {
      return "unregistering drop-zone";
    });
    if (focusedDz === dropZoneEl) {
      handleDrop();
    }
    typeToDropZones.get(type)["delete"](dropZoneEl);
    decrementActiveDropZoneCount();
    if (typeToDropZones.get(type).size === 0) {
      typeToDropZones["delete"](type);
    }
    if (typeToDropZones.size === 0) {
      printDebug(function () {
        return "removing global keydown and click handlers";
      });
      window.removeEventListener("keydown", globalKeyDownHandler);
      window.removeEventListener("click", globalClickHandler);
      INSTRUCTION_IDs = undefined;
      destroyAria();
    }
  }
  function globalKeyDownHandler(e) {
    if (!isDragging) return;
    switch (e.key) {
      case "Escape":
        {
          handleDrop();
          break;
        }
    }
  }
  function globalClickHandler() {
    if (!isDragging) return;
    if (!allDragTargets.has(document.activeElement)) {
      printDebug(function () {
        return "clicked outside of any draggable";
      });
      handleDrop();
    }
  }
  function handleZoneFocus(e) {
    printDebug(function () {
      return "zone focus";
    });
    if (!isDragging) return;
    var newlyFocusedDz = e.currentTarget;
    if (newlyFocusedDz === focusedDz) return;
    focusedDzLabel = newlyFocusedDz.getAttribute("aria-label") || "";
    var _dzToConfig$get = dzToConfig.get(focusedDz),
      originItems = _dzToConfig$get.items;
    var originItem = originItems.find(function (item) {
      return item[ITEM_ID_KEY] === focusedItemId;
    });
    var originIdx = originItems.indexOf(originItem);
    var itemToMove = originItems.splice(originIdx, 1)[0];
    var _dzToConfig$get2 = dzToConfig.get(newlyFocusedDz),
      targetItems = _dzToConfig$get2.items,
      autoAriaDisabled = _dzToConfig$get2.autoAriaDisabled;
    if (newlyFocusedDz.getBoundingClientRect().top < focusedDz.getBoundingClientRect().top || newlyFocusedDz.getBoundingClientRect().left < focusedDz.getBoundingClientRect().left) {
      targetItems.push(itemToMove);
      if (!autoAriaDisabled) {
        alertToScreenReader("Moved item ".concat(focusedItemLabel, " to the end of the list ").concat(focusedDzLabel));
      }
    } else {
      targetItems.unshift(itemToMove);
      if (!autoAriaDisabled) {
        alertToScreenReader("Moved item ".concat(focusedItemLabel, " to the beginning of the list ").concat(focusedDzLabel));
      }
    }
    var dzFrom = focusedDz;
    dispatchFinalizeEvent(dzFrom, originItems, {
      trigger: TRIGGERS.DROPPED_INTO_ANOTHER,
      id: focusedItemId,
      source: SOURCES.KEYBOARD
    });
    dispatchFinalizeEvent(newlyFocusedDz, targetItems, {
      trigger: TRIGGERS.DROPPED_INTO_ZONE,
      id: focusedItemId,
      source: SOURCES.KEYBOARD
    });
    focusedDz = newlyFocusedDz;
  }
  function triggerAllDzsUpdate() {
    dzToHandles.forEach(function (_ref, dz) {
      var update = _ref.update;
      return update(dzToConfig.get(dz));
    });
  }
  function handleDrop() {
    var dispatchConsider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    printDebug(function () {
      return "drop";
    });
    if (!dzToConfig.get(focusedDz).autoAriaDisabled) {
      alertToScreenReader("Stopped dragging item ".concat(focusedItemLabel));
    }
    if (allDragTargets.has(document.activeElement)) {
      document.activeElement.blur();
    }
    if (dispatchConsider) {
      dispatchConsiderEvent(focusedDz, dzToConfig.get(focusedDz).items, {
        trigger: TRIGGERS.DRAG_STOPPED,
        id: focusedItemId,
        source: SOURCES.KEYBOARD
      });
    }
    styleInactiveDropZones(typeToDropZones.get(draggedItemType), function (dz) {
      return dzToConfig.get(dz).dropTargetStyle;
    }, function (dz) {
      return dzToConfig.get(dz).dropTargetClasses;
    });
    focusedItem = null;
    focusedItemId = null;
    focusedItemLabel = "";
    draggedItemType = null;
    focusedDz = null;
    focusedDzLabel = "";
    isDragging = false;
    triggerAllDzsUpdate();
  }
  //////
  function dndzone$1(node, options) {
    var config = {
      items: undefined,
      type: undefined,
      dragDisabled: false,
      zoneTabIndex: 0,
      zoneItemTabIndex: 0,
      dropFromOthersDisabled: false,
      dropTargetStyle: DEFAULT_DROP_TARGET_STYLE,
      dropTargetClasses: [],
      autoAriaDisabled: false
    };
    function swap(arr, i, j) {
      if (arr.length <= 1) return;
      arr.splice(j, 1, arr.splice(i, 1, arr[j])[0]);
    }
    function handleKeyDown(e) {
      printDebug(function () {
        return ["handling key down", e.key];
      });
      switch (e.key) {
        case "Enter":
        case " ":
          {
            // we don't want to affect nested input elements or clickable elements
            if ((e.target.disabled !== undefined || e.target.href || e.target.isContentEditable) && !allDragTargets.has(e.target)) {
              return;
            }
            e.preventDefault(); // preventing scrolling on spacebar
            e.stopPropagation();
            if (isDragging) {
              // TODO - should this trigger a drop? only here or in general (as in when hitting space or enter outside of any zone)?
              handleDrop();
            } else {
              // drag start
              handleDragStart(e);
            }
            break;
          }
        case "ArrowDown":
        case "ArrowRight":
          {
            if (!isDragging) return;
            e.preventDefault(); // prevent scrolling
            e.stopPropagation();
            var _dzToConfig$get3 = dzToConfig.get(node),
              items = _dzToConfig$get3.items;
            var children = Array.from(node.children);
            var idx = children.indexOf(e.currentTarget);
            printDebug(function () {
              return ["arrow down", idx];
            });
            if (idx < children.length - 1) {
              if (!config.autoAriaDisabled) {
                alertToScreenReader("Moved item ".concat(focusedItemLabel, " to position ").concat(idx + 2, " in the list ").concat(focusedDzLabel));
              }
              swap(items, idx, idx + 1);
              dispatchFinalizeEvent(node, items, {
                trigger: TRIGGERS.DROPPED_INTO_ZONE,
                id: focusedItemId,
                source: SOURCES.KEYBOARD
              });
            }
            break;
          }
        case "ArrowUp":
        case "ArrowLeft":
          {
            if (!isDragging) return;
            e.preventDefault(); // prevent scrolling
            e.stopPropagation();
            var _dzToConfig$get4 = dzToConfig.get(node),
              _items = _dzToConfig$get4.items;
            var _children = Array.from(node.children);
            var _idx = _children.indexOf(e.currentTarget);
            printDebug(function () {
              return ["arrow up", _idx];
            });
            if (_idx > 0) {
              if (!config.autoAriaDisabled) {
                alertToScreenReader("Moved item ".concat(focusedItemLabel, " to position ").concat(_idx, " in the list ").concat(focusedDzLabel));
              }
              swap(_items, _idx, _idx - 1);
              dispatchFinalizeEvent(node, _items, {
                trigger: TRIGGERS.DROPPED_INTO_ZONE,
                id: focusedItemId,
                source: SOURCES.KEYBOARD
              });
            }
            break;
          }
      }
    }
    function handleDragStart(e) {
      printDebug(function () {
        return "drag start";
      });
      setCurrentFocusedItem(e.currentTarget);
      focusedDz = node;
      draggedItemType = config.type;
      isDragging = true;
      var dropTargets = Array.from(typeToDropZones.get(config.type)).filter(function (dz) {
        return dz === focusedDz || !dzToConfig.get(dz).dropFromOthersDisabled;
      });
      styleActiveDropZones(dropTargets, function (dz) {
        return dzToConfig.get(dz).dropTargetStyle;
      }, function (dz) {
        return dzToConfig.get(dz).dropTargetClasses;
      });
      if (!config.autoAriaDisabled) {
        var msg = "Started dragging item ".concat(focusedItemLabel, ". Use the arrow keys to move it within its list ").concat(focusedDzLabel);
        if (dropTargets.length > 1) {
          msg += ", or tab to another list in order to move the item into it";
        }
        alertToScreenReader(msg);
      }
      dispatchConsiderEvent(node, dzToConfig.get(node).items, {
        trigger: TRIGGERS.DRAG_STARTED,
        id: focusedItemId,
        source: SOURCES.KEYBOARD
      });
      triggerAllDzsUpdate();
    }
    function handleClick(e) {
      if (!isDragging) return;
      if (e.currentTarget === focusedItem) return;
      e.stopPropagation();
      handleDrop(false);
      handleDragStart(e);
    }
    function setCurrentFocusedItem(draggableEl) {
      var _dzToConfig$get5 = dzToConfig.get(node),
        items = _dzToConfig$get5.items;
      var children = Array.from(node.children);
      var focusedItemIdx = children.indexOf(draggableEl);
      focusedItem = draggableEl;
      focusedItem.tabIndex = config.zoneItemTabIndex;
      focusedItemId = items[focusedItemIdx][ITEM_ID_KEY];
      focusedItemLabel = children[focusedItemIdx].getAttribute("aria-label") || "";
    }
    function configure(_ref2) {
      var _ref2$items = _ref2.items,
        items = _ref2$items === void 0 ? [] : _ref2$items,
        _ref2$type = _ref2.type,
        newType = _ref2$type === void 0 ? DEFAULT_DROP_ZONE_TYPE : _ref2$type,
        _ref2$dragDisabled = _ref2.dragDisabled,
        dragDisabled = _ref2$dragDisabled === void 0 ? false : _ref2$dragDisabled,
        _ref2$zoneTabIndex = _ref2.zoneTabIndex,
        zoneTabIndex = _ref2$zoneTabIndex === void 0 ? 0 : _ref2$zoneTabIndex,
        _ref2$zoneItemTabInde = _ref2.zoneItemTabIndex,
        zoneItemTabIndex = _ref2$zoneItemTabInde === void 0 ? 0 : _ref2$zoneItemTabInde,
        _ref2$dropFromOthersD = _ref2.dropFromOthersDisabled,
        dropFromOthersDisabled = _ref2$dropFromOthersD === void 0 ? false : _ref2$dropFromOthersD,
        _ref2$dropTargetStyle = _ref2.dropTargetStyle,
        dropTargetStyle = _ref2$dropTargetStyle === void 0 ? DEFAULT_DROP_TARGET_STYLE : _ref2$dropTargetStyle,
        _ref2$dropTargetClass = _ref2.dropTargetClasses,
        dropTargetClasses = _ref2$dropTargetClass === void 0 ? [] : _ref2$dropTargetClass,
        _ref2$autoAriaDisable = _ref2.autoAriaDisabled,
        autoAriaDisabled = _ref2$autoAriaDisable === void 0 ? false : _ref2$autoAriaDisable;
      config.items = _toConsumableArray(items);
      config.dragDisabled = dragDisabled;
      config.dropFromOthersDisabled = dropFromOthersDisabled;
      config.zoneTabIndex = zoneTabIndex;
      config.zoneItemTabIndex = zoneItemTabIndex;
      config.dropTargetStyle = dropTargetStyle;
      config.dropTargetClasses = dropTargetClasses;
      config.autoAriaDisabled = autoAriaDisabled;
      if (config.type && newType !== config.type) {
        unregisterDropZone(node, config.type);
      }
      config.type = newType;
      registerDropZone(node, newType);
      if (!autoAriaDisabled) {
        node.setAttribute("aria-disabled", dragDisabled);
        node.setAttribute("role", "list");
        node.setAttribute("aria-describedby", dragDisabled ? INSTRUCTION_IDs.DND_ZONE_DRAG_DISABLED : INSTRUCTION_IDs.DND_ZONE_ACTIVE);
      }
      dzToConfig.set(node, config);
      if (isDragging) {
        node.tabIndex = node === focusedDz || focusedItem.contains(node) || config.dropFromOthersDisabled || focusedDz && config.type !== dzToConfig.get(focusedDz).type ? -1 : 0;
      } else {
        node.tabIndex = config.zoneTabIndex;
      }
      node.addEventListener("focus", handleZoneFocus);
      var _loop = function _loop(i) {
        var draggableEl = node.children[i];
        allDragTargets.add(draggableEl);
        draggableEl.tabIndex = isDragging ? -1 : config.zoneItemTabIndex;
        if (!autoAriaDisabled) {
          draggableEl.setAttribute("role", "listitem");
        }
        draggableEl.removeEventListener("keydown", elToKeyDownListeners.get(draggableEl));
        draggableEl.removeEventListener("click", elToFocusListeners.get(draggableEl));
        if (!dragDisabled) {
          draggableEl.addEventListener("keydown", handleKeyDown);
          elToKeyDownListeners.set(draggableEl, handleKeyDown);
          draggableEl.addEventListener("click", handleClick);
          elToFocusListeners.set(draggableEl, handleClick);
        }
        if (isDragging && config.items[i][ITEM_ID_KEY] === focusedItemId) {
          printDebug(function () {
            return ["focusing on", {
              i: i,
              focusedItemId: focusedItemId
            }];
          });
          // if it is a nested dropzone, it was re-rendered and we need to refresh our pointer
          focusedItem = draggableEl;
          focusedItem.tabIndex = config.zoneItemTabIndex;
          // without this the element loses focus if it moves backwards in the list
          draggableEl.focus();
        }
      };
      for (var i = 0; i < node.children.length; i++) {
        _loop(i);
      }
    }
    configure(options);
    var handles = {
      update: function update(newOptions) {
        printDebug(function () {
          return "keyboard dndzone will update newOptions: ".concat(toString(newOptions));
        });
        configure(newOptions);
      },
      destroy: function destroy() {
        printDebug(function () {
          return "keyboard dndzone will destroy";
        });
        unregisterDropZone(node, config.type);
        dzToConfig["delete"](node);
        dzToHandles["delete"](node);
      }
    };
    dzToHandles.set(node, handles);
    return handles;
  }

  var _excluded = ["items", "flipDurationMs", "type", "dragDisabled", "morphDisabled", "dropFromOthersDisabled", "zoneTabIndex", "zoneItemTabIndex", "dropTargetStyle", "dropTargetClasses", "transformDraggedElement", "autoAriaDisabled", "centreDraggedOnCursor", "dropAnimationDisabled"];

  /**
   * A custom action to turn any container to a dnd zone and all of its direct children to draggables
   * Supports mouse, touch and keyboard interactions.
   * Dispatches two events that the container is expected to react to by modifying its list of items,
   * which will then feed back in to this action via the update function
   *
   * @typedef {object} Options
   * @property {array} items - the list of items that was used to generate the children of the given node (the list used in the #each block
   * @property {string} [type] - the type of the dnd zone. children dragged from here can only be dropped in other zones of the same type, default to a base type
   * @property {number} [flipDurationMs] - if the list animated using flip (recommended), specifies the flip duration such that everything syncs with it without conflict, defaults to zero
   * @property {boolean} [dragDisabled]
   * @property {boolean} [morphDisabled] - whether dragged element should morph to zone dimensions
   * @property {boolean} [dropFromOthersDisabled]
   * @property {number} [zoneTabIndex] - set the tabindex of the list container when not dragging
   * @property {number} [zoneItemTabIndex] - set the tabindex of the list container items when not dragging
   * @property {object} [dropTargetStyle]
   * @property {string[]} [dropTargetClasses]
   * @property {boolean} [dropAnimationDisabled] - cancels the drop animation to place
   * @property {function} [transformDraggedElement]
   * @param {HTMLElement} node - the element to enhance
   * @param {Options} options
   * @return {{update: function, destroy: function}}
   */
  function dndzone(node, options) {
    if (shouldIgnoreZone(node)) {
      return {
        update: function update() {},
        destroy: function destroy() {}
      };
    }
    validateOptions(options);
    var pointerZone = dndzone$2(node, options);
    var keyboardZone = dndzone$1(node, options);
    return {
      update: function update(newOptions) {
        validateOptions(newOptions);
        pointerZone.update(newOptions);
        keyboardZone.update(newOptions);
      },
      destroy: function destroy() {
        pointerZone.destroy();
        keyboardZone.destroy();
      }
    };
  }

  /**
   * If the user marked something in the ancestry of our node as shadow element, we can ignore it
   * We need the user to mark it for us because svelte updates the action from deep to shallow (but renders top down)
   * @param {HTMLElement} node
   * @return {boolean}
   */
  function shouldIgnoreZone(node) {
    return !!node.closest("[".concat(SHADOW_ELEMENT_HINT_ATTRIBUTE_NAME, "=\"true\"]"));
  }
  function validateOptions(options) {
    /*eslint-disable*/
    var items = options.items;
      options.flipDurationMs;
      options.type;
      options.dragDisabled;
      options.morphDisabled;
      options.dropFromOthersDisabled;
      var zoneTabIndex = options.zoneTabIndex,
      zoneItemTabIndex = options.zoneItemTabIndex;
      options.dropTargetStyle;
      var dropTargetClasses = options.dropTargetClasses;
      options.transformDraggedElement;
      options.autoAriaDisabled;
      options.centreDraggedOnCursor;
      options.dropAnimationDisabled;
      var rest = _objectWithoutProperties(options, _excluded);
    /*eslint-enable*/
    if (Object.keys(rest).length > 0) {
      console.warn("dndzone will ignore unknown options", rest);
    }
    if (!items) {
      throw new Error("no 'items' key provided to dndzone");
    }
    var itemWithMissingId = items.find(function (item) {
      return !{}.hasOwnProperty.call(item, ITEM_ID_KEY);
    });
    if (itemWithMissingId) {
      throw new Error("missing '".concat(ITEM_ID_KEY, "' property for item ").concat(toString(itemWithMissingId)));
    }
    if (dropTargetClasses && !Array.isArray(dropTargetClasses)) {
      throw new Error("dropTargetClasses should be an array but instead it is a ".concat(_typeof(dropTargetClasses), ", ").concat(toString(dropTargetClasses)));
    }
    if (zoneTabIndex && !isInt(zoneTabIndex)) {
      throw new Error("zoneTabIndex should be a number but instead it is a ".concat(_typeof(zoneTabIndex), ", ").concat(toString(zoneTabIndex)));
    }
    if (zoneItemTabIndex && !isInt(zoneItemTabIndex)) {
      throw new Error("zoneItemTabIndex should be a number but instead it is a ".concat(_typeof(zoneItemTabIndex), ", ").concat(toString(zoneItemTabIndex)));
    }
  }
  function isInt(value) {
    return !isNaN(value) && function (x) {
      return (x | 0) === x;
    }(parseFloat(value));
  }

  function createStore(initialValue) {
    var _val = initialValue;
    var subs = new Set();
    return {
      get: function get() {
        return _val;
      },
      set: function set(newVal) {
        _val = newVal;
        Array.from(subs).forEach(function (cb) {
          return cb(_val);
        });
      },
      subscribe: function subscribe(cb) {
        subs.add(cb);
        cb(_val);
      },
      unsubscribe: function unsubscribe(cb) {
        subs["delete"](cb);
      }
    };
  }

  var isItemsDragDisabled = createStore(true);
  function getAddedOptions() {
    var isItemsDragDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    return {
      dragDisabled: isItemsDragDisabled,
      zoneItemTabIndex: -1
    };
  }

  /**
   * This is an action that wraps around the dndzone action to make it easy to work with drag handles
   * When using this you must also use the 'dragHandle' action (see below) on an element inside each item within the zone
   * Credit for the idea and initial implementation goes to @gleuch (Greg Leuch) and @geovie (Georg Vienna)
   *
   * @param {HTMLElement} node
   * @param options - will be passed down to the dndzone
   * @return {{update: (newOptions: Object) => {}, destroy: () => {}}}
   */
  function dragHandleZone(node, options) {
    var currentOptions = options;
    var zone = dndzone(node, _objectSpread2(_objectSpread2({}, currentOptions), getAddedOptions()));
    function isItemDisabledCB(isItemsDragDisabled) {
      zone.update(_objectSpread2(_objectSpread2({}, currentOptions), getAddedOptions(isItemsDragDisabled)));
    }
    isItemsDragDisabled.subscribe(isItemDisabledCB);
    function consider(e) {
      var _e$detail$info = e.detail.info,
        source = _e$detail$info.source,
        trigger = _e$detail$info.trigger;
      // Ensure dragging is stopped on drag finish via keyboard
      if (source === SOURCES.KEYBOARD && trigger === TRIGGERS.DRAG_STOPPED) {
        isItemsDragDisabled.set(true);
      }
    }
    function finalize(e) {
      var source = e.detail.info.source;
      // Ensure dragging is stopped on drag finish via pointer (mouse, touch)
      if (source === SOURCES.POINTER) {
        isItemsDragDisabled.set(true);
      }
    }
    node.addEventListener("consider", consider);
    node.addEventListener("finalize", finalize);
    return {
      update: function update(newOptions) {
        currentOptions = newOptions;
        zone.update(_objectSpread2(_objectSpread2({}, currentOptions), getAddedOptions(isItemsDragDisabled.get())));
      },
      destroy: function destroy() {
        node.removeEventListener("consider", consider);
        node.removeEventListener("finalize", finalize);
        isItemsDragDisabled.unsubscribe(isItemDisabledCB);
      }
    };
  }

  /**
   * This should be used to mark drag handles inside items that belong to a 'dragHandleZone' (see above)
   * @param {HTMLElement} handle
   * @return {{update: *, destroy: *}}
   */
  function dragHandle(handle) {
    handle.setAttribute("role", "button");
    function startDrag(e) {
      // preventing default to prevent lag on touch devices (because of the browser checking for screen scrolling)
      e.preventDefault();
      isItemsDragDisabled.set(false);
    }
    function handleKeyDown(e) {
      if (e.key === "Enter" || e.key === " ") isItemsDragDisabled.set(false);
    }
    isItemsDragDisabled.subscribe(function (disabled) {
      handle.tabIndex = disabled ? 0 : -1;
      handle.style.cursor = disabled ? "grab" : "grabbing";
    });
    handle.addEventListener("mousedown", startDrag);
    handle.addEventListener("touchstart", startDrag);
    handle.addEventListener("keydown", handleKeyDown);
    return {
      update: function update() {},
      destroy: function destroy() {
        handle.removeEventListener("mousedown", startDrag);
        handle.removeEventListener("touchstart", startDrag);
        handle.removeEventListener("keydown", handleKeyDown);
      }
    };
  }

  exports.DRAGGED_ELEMENT_ID = DRAGGED_ELEMENT_ID;
  exports.FEATURE_FLAG_NAMES = FEATURE_FLAG_NAMES;
  exports.SHADOW_ITEM_MARKER_PROPERTY_NAME = SHADOW_ITEM_MARKER_PROPERTY_NAME;
  exports.SHADOW_PLACEHOLDER_ITEM_ID = SHADOW_PLACEHOLDER_ITEM_ID;
  exports.SOURCES = SOURCES;
  exports.TRIGGERS = TRIGGERS;
  exports.alertToScreenReader = alertToScreenReader;
  exports.dndzone = dndzone;
  exports.dragHandle = dragHandle;
  exports.dragHandleZone = dragHandleZone;
  exports.overrideItemIdKeyNameBeforeInitialisingDndZones = overrideItemIdKeyNameBeforeInitialisingDndZones;
  exports.setDebugMode = setDebugMode;
  exports.setFeatureFlag = setFeatureFlag;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
