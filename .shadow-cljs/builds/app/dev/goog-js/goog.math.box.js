["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/math/box.js"],"~:js","goog.provide(\"goog.math.Box\");\ngoog.require(\"goog.asserts\");\ngoog.require(\"goog.math.Coordinate\");\ngoog.math.Box = function(top, right, bottom, left) {\n  this.top = top;\n  this.right = right;\n  this.bottom = bottom;\n  this.left = left;\n};\ngoog.math.Box.boundingBox = function(var_args) {\n  var box = new goog.math.Box(arguments[0].y, arguments[0].x, arguments[0].y, arguments[0].x);\n  for (var i = 1; i < arguments.length; i++) {\n    box.expandToIncludeCoordinate(arguments[i]);\n  }\n  return box;\n};\ngoog.math.Box.prototype.getWidth = function() {\n  return this.right - this.left;\n};\ngoog.math.Box.prototype.getHeight = function() {\n  return this.bottom - this.top;\n};\ngoog.math.Box.prototype.clone = function() {\n  return new goog.math.Box(this.top, this.right, this.bottom, this.left);\n};\nif (goog.DEBUG) {\n  goog.math.Box.prototype.toString = function() {\n    return \"(\" + this.top + \"t, \" + this.right + \"r, \" + this.bottom + \"b, \" + this.left + \"l)\";\n  };\n}\ngoog.math.Box.prototype.contains = function(other) {\n  return goog.math.Box.contains(this, other);\n};\ngoog.math.Box.prototype.expand = function(top, opt_right, opt_bottom, opt_left) {\n  if (goog.isObject(top)) {\n    this.top -= top.top;\n    this.right += top.right;\n    this.bottom += top.bottom;\n    this.left -= top.left;\n  } else {\n    this.top -= top;\n    this.right += Number(opt_right);\n    this.bottom += Number(opt_bottom);\n    this.left -= Number(opt_left);\n  }\n  return this;\n};\ngoog.math.Box.prototype.expandToInclude = function(box) {\n  this.left = Math.min(this.left, box.left);\n  this.top = Math.min(this.top, box.top);\n  this.right = Math.max(this.right, box.right);\n  this.bottom = Math.max(this.bottom, box.bottom);\n};\ngoog.math.Box.prototype.expandToIncludeCoordinate = function(coord) {\n  this.top = Math.min(this.top, coord.y);\n  this.right = Math.max(this.right, coord.x);\n  this.bottom = Math.max(this.bottom, coord.y);\n  this.left = Math.min(this.left, coord.x);\n};\ngoog.math.Box.equals = function(a, b) {\n  if (a == b) {\n    return true;\n  }\n  if (!a || !b) {\n    return false;\n  }\n  return a.top == b.top && a.right == b.right && a.bottom == b.bottom && a.left == b.left;\n};\ngoog.math.Box.contains = function(box, other) {\n  if (!box || !other) {\n    return false;\n  }\n  if (other instanceof goog.math.Box) {\n    return other.left >= box.left && other.right <= box.right && other.top >= box.top && other.bottom <= box.bottom;\n  }\n  return other.x >= box.left && other.x <= box.right && other.y >= box.top && other.y <= box.bottom;\n};\ngoog.math.Box.relativePositionX = function(box, coord) {\n  if (coord.x < box.left) {\n    return coord.x - box.left;\n  } else {\n    if (coord.x > box.right) {\n      return coord.x - box.right;\n    }\n  }\n  return 0;\n};\ngoog.math.Box.relativePositionY = function(box, coord) {\n  if (coord.y < box.top) {\n    return coord.y - box.top;\n  } else {\n    if (coord.y > box.bottom) {\n      return coord.y - box.bottom;\n    }\n  }\n  return 0;\n};\ngoog.math.Box.distance = function(box, coord) {\n  var x = goog.math.Box.relativePositionX(box, coord);\n  var y = goog.math.Box.relativePositionY(box, coord);\n  return Math.sqrt(x * x + y * y);\n};\ngoog.math.Box.intersects = function(a, b) {\n  return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom;\n};\ngoog.math.Box.intersectsWithPadding = function(a, b, padding) {\n  return a.left <= b.right + padding && b.left <= a.right + padding && a.top <= b.bottom + padding && b.top <= a.bottom + padding;\n};\ngoog.math.Box.prototype.ceil = function() {\n  this.top = Math.ceil(this.top);\n  this.right = Math.ceil(this.right);\n  this.bottom = Math.ceil(this.bottom);\n  this.left = Math.ceil(this.left);\n  return this;\n};\ngoog.math.Box.prototype.floor = function() {\n  this.top = Math.floor(this.top);\n  this.right = Math.floor(this.right);\n  this.bottom = Math.floor(this.bottom);\n  this.left = Math.floor(this.left);\n  return this;\n};\ngoog.math.Box.prototype.round = function() {\n  this.top = Math.round(this.top);\n  this.right = Math.round(this.right);\n  this.bottom = Math.round(this.bottom);\n  this.left = Math.round(this.left);\n  return this;\n};\ngoog.math.Box.prototype.translate = function(tx, opt_ty) {\n  if (tx instanceof goog.math.Coordinate) {\n    this.left += tx.x;\n    this.right += tx.x;\n    this.top += tx.y;\n    this.bottom += tx.y;\n  } else {\n    goog.asserts.assertNumber(tx);\n    this.left += tx;\n    this.right += tx;\n    if (typeof opt_ty === \"number\") {\n      this.top += opt_ty;\n      this.bottom += opt_ty;\n    }\n  }\n  return this;\n};\ngoog.math.Box.prototype.scale = function(sx, opt_sy) {\n  var sy = typeof opt_sy === \"number\" ? opt_sy : sx;\n  this.left *= sx;\n  this.right *= sx;\n  this.top *= sy;\n  this.bottom *= sy;\n  return this;\n};\n","~:source","// Copyright 2006 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview A utility class for representing a numeric box.\n */\n\n\ngoog.provide('goog.math.Box');\n\ngoog.require('goog.asserts');\ngoog.require('goog.math.Coordinate');\n\n\n\n/**\n * Class for representing a box. A box is specified as a top, right, bottom,\n * and left. A box is useful for representing margins and padding.\n *\n * This class assumes 'screen coordinates': larger Y coordinates are further\n * from the top of the screen.\n *\n * @param {number} top Top.\n * @param {number} right Right.\n * @param {number} bottom Bottom.\n * @param {number} left Left.\n * @struct\n * @constructor\n */\ngoog.math.Box = function(top, right, bottom, left) {\n  /**\n   * Top\n   * @type {number}\n   */\n  this.top = top;\n\n  /**\n   * Right\n   * @type {number}\n   */\n  this.right = right;\n\n  /**\n   * Bottom\n   * @type {number}\n   */\n  this.bottom = bottom;\n\n  /**\n   * Left\n   * @type {number}\n   */\n  this.left = left;\n};\n\n\n/**\n * Creates a Box by bounding a collection of goog.math.Coordinate objects\n * @param {...goog.math.Coordinate} var_args Coordinates to be included inside\n *     the box.\n * @return {!goog.math.Box} A Box containing all the specified Coordinates.\n */\ngoog.math.Box.boundingBox = function(var_args) {\n  var box = new goog.math.Box(\n      arguments[0].y, arguments[0].x, arguments[0].y, arguments[0].x);\n  for (var i = 1; i < arguments.length; i++) {\n    box.expandToIncludeCoordinate(arguments[i]);\n  }\n  return box;\n};\n\n\n/**\n * @return {number} width The width of this Box.\n */\ngoog.math.Box.prototype.getWidth = function() {\n  return this.right - this.left;\n};\n\n\n/**\n * @return {number} height The height of this Box.\n */\ngoog.math.Box.prototype.getHeight = function() {\n  return this.bottom - this.top;\n};\n\n\n/**\n * Creates a copy of the box with the same dimensions.\n * @return {!goog.math.Box} A clone of this Box.\n */\ngoog.math.Box.prototype.clone = function() {\n  return new goog.math.Box(this.top, this.right, this.bottom, this.left);\n};\n\n\nif (goog.DEBUG) {\n  /**\n   * Returns a nice string representing the box.\n   * @return {string} In the form (50t, 73r, 24b, 13l).\n   * @override\n   */\n  goog.math.Box.prototype.toString = function() {\n    return '(' + this.top + 't, ' + this.right + 'r, ' + this.bottom + 'b, ' +\n        this.left + 'l)';\n  };\n}\n\n\n/**\n * Returns whether the box contains a coordinate or another box.\n *\n * @param {goog.math.Coordinate|goog.math.Box} other A Coordinate or a Box.\n * @return {boolean} Whether the box contains the coordinate or other box.\n */\ngoog.math.Box.prototype.contains = function(other) {\n  return goog.math.Box.contains(this, other);\n};\n\n\n/**\n * Expands box with the given margins.\n *\n * @param {number|goog.math.Box} top Top margin or box with all margins.\n * @param {number=} opt_right Right margin.\n * @param {number=} opt_bottom Bottom margin.\n * @param {number=} opt_left Left margin.\n * @return {!goog.math.Box} A reference to this Box.\n */\ngoog.math.Box.prototype.expand = function(\n    top, opt_right, opt_bottom, opt_left) {\n  if (goog.isObject(top)) {\n    this.top -= top.top;\n    this.right += top.right;\n    this.bottom += top.bottom;\n    this.left -= top.left;\n  } else {\n    this.top -= /** @type {number} */ (top);\n    this.right += Number(opt_right);\n    this.bottom += Number(opt_bottom);\n    this.left -= Number(opt_left);\n  }\n\n  return this;\n};\n\n\n/**\n * Expand this box to include another box.\n * NOTE(user): This is used in code that needs to be very fast, please don't\n * add functionality to this function at the expense of speed (variable\n * arguments, accepting multiple argument types, etc).\n * @param {goog.math.Box} box The box to include in this one.\n */\ngoog.math.Box.prototype.expandToInclude = function(box) {\n  this.left = Math.min(this.left, box.left);\n  this.top = Math.min(this.top, box.top);\n  this.right = Math.max(this.right, box.right);\n  this.bottom = Math.max(this.bottom, box.bottom);\n};\n\n\n/**\n * Expand this box to include the coordinate.\n * @param {!goog.math.Coordinate} coord The coordinate to be included\n *     inside the box.\n */\ngoog.math.Box.prototype.expandToIncludeCoordinate = function(coord) {\n  this.top = Math.min(this.top, coord.y);\n  this.right = Math.max(this.right, coord.x);\n  this.bottom = Math.max(this.bottom, coord.y);\n  this.left = Math.min(this.left, coord.x);\n};\n\n\n/**\n * Compares boxes for equality.\n * @param {goog.math.Box} a A Box.\n * @param {goog.math.Box} b A Box.\n * @return {boolean} True iff the boxes are equal, or if both are null.\n */\ngoog.math.Box.equals = function(a, b) {\n  if (a == b) {\n    return true;\n  }\n  if (!a || !b) {\n    return false;\n  }\n  return a.top == b.top && a.right == b.right && a.bottom == b.bottom &&\n      a.left == b.left;\n};\n\n\n/**\n * Returns whether a box contains a coordinate or another box.\n *\n * @param {goog.math.Box} box A Box.\n * @param {goog.math.Coordinate|goog.math.Box} other A Coordinate or a Box.\n * @return {boolean} Whether the box contains the coordinate or other box.\n */\ngoog.math.Box.contains = function(box, other) {\n  if (!box || !other) {\n    return false;\n  }\n\n  if (other instanceof goog.math.Box) {\n    return other.left >= box.left && other.right <= box.right &&\n        other.top >= box.top && other.bottom <= box.bottom;\n  }\n\n  // other is a Coordinate.\n  return other.x >= box.left && other.x <= box.right && other.y >= box.top &&\n      other.y <= box.bottom;\n};\n\n\n/**\n * Returns the relative x position of a coordinate compared to a box.  Returns\n * zero if the coordinate is inside the box.\n *\n * @param {goog.math.Box} box A Box.\n * @param {goog.math.Coordinate} coord A Coordinate.\n * @return {number} The x position of `coord` relative to the nearest\n *     side of `box`, or zero if `coord` is inside `box`.\n */\ngoog.math.Box.relativePositionX = function(box, coord) {\n  if (coord.x < box.left) {\n    return coord.x - box.left;\n  } else if (coord.x > box.right) {\n    return coord.x - box.right;\n  }\n  return 0;\n};\n\n\n/**\n * Returns the relative y position of a coordinate compared to a box.  Returns\n * zero if the coordinate is inside the box.\n *\n * @param {goog.math.Box} box A Box.\n * @param {goog.math.Coordinate} coord A Coordinate.\n * @return {number} The y position of `coord` relative to the nearest\n *     side of `box`, or zero if `coord` is inside `box`.\n */\ngoog.math.Box.relativePositionY = function(box, coord) {\n  if (coord.y < box.top) {\n    return coord.y - box.top;\n  } else if (coord.y > box.bottom) {\n    return coord.y - box.bottom;\n  }\n  return 0;\n};\n\n\n/**\n * Returns the distance between a coordinate and the nearest corner/side of a\n * box. Returns zero if the coordinate is inside the box.\n *\n * @param {goog.math.Box} box A Box.\n * @param {goog.math.Coordinate} coord A Coordinate.\n * @return {number} The distance between `coord` and the nearest\n *     corner/side of `box`, or zero if `coord` is inside\n *     `box`.\n */\ngoog.math.Box.distance = function(box, coord) {\n  var x = goog.math.Box.relativePositionX(box, coord);\n  var y = goog.math.Box.relativePositionY(box, coord);\n  return Math.sqrt(x * x + y * y);\n};\n\n\n/**\n * Returns whether two boxes intersect.\n *\n * @param {goog.math.Box} a A Box.\n * @param {goog.math.Box} b A second Box.\n * @return {boolean} Whether the boxes intersect.\n */\ngoog.math.Box.intersects = function(a, b) {\n  return (\n      a.left <= b.right && b.left <= a.right && a.top <= b.bottom &&\n      b.top <= a.bottom);\n};\n\n\n/**\n * Returns whether two boxes would intersect with additional padding.\n *\n * @param {goog.math.Box} a A Box.\n * @param {goog.math.Box} b A second Box.\n * @param {number} padding The additional padding.\n * @return {boolean} Whether the boxes intersect.\n */\ngoog.math.Box.intersectsWithPadding = function(a, b, padding) {\n  return (\n      a.left <= b.right + padding && b.left <= a.right + padding &&\n      a.top <= b.bottom + padding && b.top <= a.bottom + padding);\n};\n\n\n/**\n * Rounds the fields to the next larger integer values.\n *\n * @return {!goog.math.Box} This box with ceil'd fields.\n */\ngoog.math.Box.prototype.ceil = function() {\n  this.top = Math.ceil(this.top);\n  this.right = Math.ceil(this.right);\n  this.bottom = Math.ceil(this.bottom);\n  this.left = Math.ceil(this.left);\n  return this;\n};\n\n\n/**\n * Rounds the fields to the next smaller integer values.\n *\n * @return {!goog.math.Box} This box with floored fields.\n */\ngoog.math.Box.prototype.floor = function() {\n  this.top = Math.floor(this.top);\n  this.right = Math.floor(this.right);\n  this.bottom = Math.floor(this.bottom);\n  this.left = Math.floor(this.left);\n  return this;\n};\n\n\n/**\n * Rounds the fields to nearest integer values.\n *\n * @return {!goog.math.Box} This box with rounded fields.\n */\ngoog.math.Box.prototype.round = function() {\n  this.top = Math.round(this.top);\n  this.right = Math.round(this.right);\n  this.bottom = Math.round(this.bottom);\n  this.left = Math.round(this.left);\n  return this;\n};\n\n\n/**\n * Translates this box by the given offsets. If a `goog.math.Coordinate`\n * is given, then the left and right values are translated by the coordinate's\n * x value and the top and bottom values are translated by the coordinate's y\n * value.  Otherwise, `tx` and `opt_ty` are used to translate the x\n * and y dimension values.\n *\n * @param {number|goog.math.Coordinate} tx The value to translate the x\n *     dimension values by or the the coordinate to translate this box by.\n * @param {number=} opt_ty The value to translate y dimension values by.\n * @return {!goog.math.Box} This box after translating.\n */\ngoog.math.Box.prototype.translate = function(tx, opt_ty) {\n  if (tx instanceof goog.math.Coordinate) {\n    this.left += tx.x;\n    this.right += tx.x;\n    this.top += tx.y;\n    this.bottom += tx.y;\n  } else {\n    goog.asserts.assertNumber(tx);\n    this.left += tx;\n    this.right += tx;\n    if (typeof opt_ty === 'number') {\n      this.top += opt_ty;\n      this.bottom += opt_ty;\n    }\n  }\n  return this;\n};\n\n\n/**\n * Scales this coordinate by the given scale factors. The x and y dimension\n * values are scaled by `sx` and `opt_sy` respectively.\n * If `opt_sy` is not given, then `sx` is used for both x and y.\n *\n * @param {number} sx The scale factor to use for the x dimension.\n * @param {number=} opt_sy The scale factor to use for the y dimension.\n * @return {!goog.math.Box} This box after scaling.\n */\ngoog.math.Box.prototype.scale = function(sx, opt_sy) {\n  var sy = (typeof opt_sy === 'number') ? opt_sy : sx;\n  this.left *= sx;\n  this.right *= sx;\n  this.top *= sy;\n  this.bottom *= sy;\n  return this;\n};\n","~:compiled-at",1635155854030,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.math.box.js\",\n\"lineCount\":155,\n\"mappings\":\"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\",\n\"sources\":[\"goog/math/box.js\"],\n\"sourcesContent\":[\"// Copyright 2006 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview A utility class for representing a numeric box.\\n */\\n\\n\\ngoog.provide('goog.math.Box');\\n\\ngoog.require('goog.asserts');\\ngoog.require('goog.math.Coordinate');\\n\\n\\n\\n/**\\n * Class for representing a box. A box is specified as a top, right, bottom,\\n * and left. A box is useful for representing margins and padding.\\n *\\n * This class assumes 'screen coordinates': larger Y coordinates are further\\n * from the top of the screen.\\n *\\n * @param {number} top Top.\\n * @param {number} right Right.\\n * @param {number} bottom Bottom.\\n * @param {number} left Left.\\n * @struct\\n * @constructor\\n */\\ngoog.math.Box = function(top, right, bottom, left) {\\n  /**\\n   * Top\\n   * @type {number}\\n   */\\n  this.top = top;\\n\\n  /**\\n   * Right\\n   * @type {number}\\n   */\\n  this.right = right;\\n\\n  /**\\n   * Bottom\\n   * @type {number}\\n   */\\n  this.bottom = bottom;\\n\\n  /**\\n   * Left\\n   * @type {number}\\n   */\\n  this.left = left;\\n};\\n\\n\\n/**\\n * Creates a Box by bounding a collection of goog.math.Coordinate objects\\n * @param {...goog.math.Coordinate} var_args Coordinates to be included inside\\n *     the box.\\n * @return {!goog.math.Box} A Box containing all the specified Coordinates.\\n */\\ngoog.math.Box.boundingBox = function(var_args) {\\n  var box = new goog.math.Box(\\n      arguments[0].y, arguments[0].x, arguments[0].y, arguments[0].x);\\n  for (var i = 1; i < arguments.length; i++) {\\n    box.expandToIncludeCoordinate(arguments[i]);\\n  }\\n  return box;\\n};\\n\\n\\n/**\\n * @return {number} width The width of this Box.\\n */\\ngoog.math.Box.prototype.getWidth = function() {\\n  return this.right - this.left;\\n};\\n\\n\\n/**\\n * @return {number} height The height of this Box.\\n */\\ngoog.math.Box.prototype.getHeight = function() {\\n  return this.bottom - this.top;\\n};\\n\\n\\n/**\\n * Creates a copy of the box with the same dimensions.\\n * @return {!goog.math.Box} A clone of this Box.\\n */\\ngoog.math.Box.prototype.clone = function() {\\n  return new goog.math.Box(this.top, this.right, this.bottom, this.left);\\n};\\n\\n\\nif (goog.DEBUG) {\\n  /**\\n   * Returns a nice string representing the box.\\n   * @return {string} In the form (50t, 73r, 24b, 13l).\\n   * @override\\n   */\\n  goog.math.Box.prototype.toString = function() {\\n    return '(' + this.top + 't, ' + this.right + 'r, ' + this.bottom + 'b, ' +\\n        this.left + 'l)';\\n  };\\n}\\n\\n\\n/**\\n * Returns whether the box contains a coordinate or another box.\\n *\\n * @param {goog.math.Coordinate|goog.math.Box} other A Coordinate or a Box.\\n * @return {boolean} Whether the box contains the coordinate or other box.\\n */\\ngoog.math.Box.prototype.contains = function(other) {\\n  return goog.math.Box.contains(this, other);\\n};\\n\\n\\n/**\\n * Expands box with the given margins.\\n *\\n * @param {number|goog.math.Box} top Top margin or box with all margins.\\n * @param {number=} opt_right Right margin.\\n * @param {number=} opt_bottom Bottom margin.\\n * @param {number=} opt_left Left margin.\\n * @return {!goog.math.Box} A reference to this Box.\\n */\\ngoog.math.Box.prototype.expand = function(\\n    top, opt_right, opt_bottom, opt_left) {\\n  if (goog.isObject(top)) {\\n    this.top -= top.top;\\n    this.right += top.right;\\n    this.bottom += top.bottom;\\n    this.left -= top.left;\\n  } else {\\n    this.top -= /** @type {number} */ (top);\\n    this.right += Number(opt_right);\\n    this.bottom += Number(opt_bottom);\\n    this.left -= Number(opt_left);\\n  }\\n\\n  return this;\\n};\\n\\n\\n/**\\n * Expand this box to include another box.\\n * NOTE(user): This is used in code that needs to be very fast, please don't\\n * add functionality to this function at the expense of speed (variable\\n * arguments, accepting multiple argument types, etc).\\n * @param {goog.math.Box} box The box to include in this one.\\n */\\ngoog.math.Box.prototype.expandToInclude = function(box) {\\n  this.left = Math.min(this.left, box.left);\\n  this.top = Math.min(this.top, box.top);\\n  this.right = Math.max(this.right, box.right);\\n  this.bottom = Math.max(this.bottom, box.bottom);\\n};\\n\\n\\n/**\\n * Expand this box to include the coordinate.\\n * @param {!goog.math.Coordinate} coord The coordinate to be included\\n *     inside the box.\\n */\\ngoog.math.Box.prototype.expandToIncludeCoordinate = function(coord) {\\n  this.top = Math.min(this.top, coord.y);\\n  this.right = Math.max(this.right, coord.x);\\n  this.bottom = Math.max(this.bottom, coord.y);\\n  this.left = Math.min(this.left, coord.x);\\n};\\n\\n\\n/**\\n * Compares boxes for equality.\\n * @param {goog.math.Box} a A Box.\\n * @param {goog.math.Box} b A Box.\\n * @return {boolean} True iff the boxes are equal, or if both are null.\\n */\\ngoog.math.Box.equals = function(a, b) {\\n  if (a == b) {\\n    return true;\\n  }\\n  if (!a || !b) {\\n    return false;\\n  }\\n  return a.top == b.top && a.right == b.right && a.bottom == b.bottom &&\\n      a.left == b.left;\\n};\\n\\n\\n/**\\n * Returns whether a box contains a coordinate or another box.\\n *\\n * @param {goog.math.Box} box A Box.\\n * @param {goog.math.Coordinate|goog.math.Box} other A Coordinate or a Box.\\n * @return {boolean} Whether the box contains the coordinate or other box.\\n */\\ngoog.math.Box.contains = function(box, other) {\\n  if (!box || !other) {\\n    return false;\\n  }\\n\\n  if (other instanceof goog.math.Box) {\\n    return other.left >= box.left && other.right <= box.right &&\\n        other.top >= box.top && other.bottom <= box.bottom;\\n  }\\n\\n  // other is a Coordinate.\\n  return other.x >= box.left && other.x <= box.right && other.y >= box.top &&\\n      other.y <= box.bottom;\\n};\\n\\n\\n/**\\n * Returns the relative x position of a coordinate compared to a box.  Returns\\n * zero if the coordinate is inside the box.\\n *\\n * @param {goog.math.Box} box A Box.\\n * @param {goog.math.Coordinate} coord A Coordinate.\\n * @return {number} The x position of `coord` relative to the nearest\\n *     side of `box`, or zero if `coord` is inside `box`.\\n */\\ngoog.math.Box.relativePositionX = function(box, coord) {\\n  if (coord.x < box.left) {\\n    return coord.x - box.left;\\n  } else if (coord.x > box.right) {\\n    return coord.x - box.right;\\n  }\\n  return 0;\\n};\\n\\n\\n/**\\n * Returns the relative y position of a coordinate compared to a box.  Returns\\n * zero if the coordinate is inside the box.\\n *\\n * @param {goog.math.Box} box A Box.\\n * @param {goog.math.Coordinate} coord A Coordinate.\\n * @return {number} The y position of `coord` relative to the nearest\\n *     side of `box`, or zero if `coord` is inside `box`.\\n */\\ngoog.math.Box.relativePositionY = function(box, coord) {\\n  if (coord.y < box.top) {\\n    return coord.y - box.top;\\n  } else if (coord.y > box.bottom) {\\n    return coord.y - box.bottom;\\n  }\\n  return 0;\\n};\\n\\n\\n/**\\n * Returns the distance between a coordinate and the nearest corner/side of a\\n * box. Returns zero if the coordinate is inside the box.\\n *\\n * @param {goog.math.Box} box A Box.\\n * @param {goog.math.Coordinate} coord A Coordinate.\\n * @return {number} The distance between `coord` and the nearest\\n *     corner/side of `box`, or zero if `coord` is inside\\n *     `box`.\\n */\\ngoog.math.Box.distance = function(box, coord) {\\n  var x = goog.math.Box.relativePositionX(box, coord);\\n  var y = goog.math.Box.relativePositionY(box, coord);\\n  return Math.sqrt(x * x + y * y);\\n};\\n\\n\\n/**\\n * Returns whether two boxes intersect.\\n *\\n * @param {goog.math.Box} a A Box.\\n * @param {goog.math.Box} b A second Box.\\n * @return {boolean} Whether the boxes intersect.\\n */\\ngoog.math.Box.intersects = function(a, b) {\\n  return (\\n      a.left <= b.right && b.left <= a.right && a.top <= b.bottom &&\\n      b.top <= a.bottom);\\n};\\n\\n\\n/**\\n * Returns whether two boxes would intersect with additional padding.\\n *\\n * @param {goog.math.Box} a A Box.\\n * @param {goog.math.Box} b A second Box.\\n * @param {number} padding The additional padding.\\n * @return {boolean} Whether the boxes intersect.\\n */\\ngoog.math.Box.intersectsWithPadding = function(a, b, padding) {\\n  return (\\n      a.left <= b.right + padding && b.left <= a.right + padding &&\\n      a.top <= b.bottom + padding && b.top <= a.bottom + padding);\\n};\\n\\n\\n/**\\n * Rounds the fields to the next larger integer values.\\n *\\n * @return {!goog.math.Box} This box with ceil'd fields.\\n */\\ngoog.math.Box.prototype.ceil = function() {\\n  this.top = Math.ceil(this.top);\\n  this.right = Math.ceil(this.right);\\n  this.bottom = Math.ceil(this.bottom);\\n  this.left = Math.ceil(this.left);\\n  return this;\\n};\\n\\n\\n/**\\n * Rounds the fields to the next smaller integer values.\\n *\\n * @return {!goog.math.Box} This box with floored fields.\\n */\\ngoog.math.Box.prototype.floor = function() {\\n  this.top = Math.floor(this.top);\\n  this.right = Math.floor(this.right);\\n  this.bottom = Math.floor(this.bottom);\\n  this.left = Math.floor(this.left);\\n  return this;\\n};\\n\\n\\n/**\\n * Rounds the fields to nearest integer values.\\n *\\n * @return {!goog.math.Box} This box with rounded fields.\\n */\\ngoog.math.Box.prototype.round = function() {\\n  this.top = Math.round(this.top);\\n  this.right = Math.round(this.right);\\n  this.bottom = Math.round(this.bottom);\\n  this.left = Math.round(this.left);\\n  return this;\\n};\\n\\n\\n/**\\n * Translates this box by the given offsets. If a `goog.math.Coordinate`\\n * is given, then the left and right values are translated by the coordinate's\\n * x value and the top and bottom values are translated by the coordinate's y\\n * value.  Otherwise, `tx` and `opt_ty` are used to translate the x\\n * and y dimension values.\\n *\\n * @param {number|goog.math.Coordinate} tx The value to translate the x\\n *     dimension values by or the the coordinate to translate this box by.\\n * @param {number=} opt_ty The value to translate y dimension values by.\\n * @return {!goog.math.Box} This box after translating.\\n */\\ngoog.math.Box.prototype.translate = function(tx, opt_ty) {\\n  if (tx instanceof goog.math.Coordinate) {\\n    this.left += tx.x;\\n    this.right += tx.x;\\n    this.top += tx.y;\\n    this.bottom += tx.y;\\n  } else {\\n    goog.asserts.assertNumber(tx);\\n    this.left += tx;\\n    this.right += tx;\\n    if (typeof opt_ty === 'number') {\\n      this.top += opt_ty;\\n      this.bottom += opt_ty;\\n    }\\n  }\\n  return this;\\n};\\n\\n\\n/**\\n * Scales this coordinate by the given scale factors. The x and y dimension\\n * values are scaled by `sx` and `opt_sy` respectively.\\n * If `opt_sy` is not given, then `sx` is used for both x and y.\\n *\\n * @param {number} sx The scale factor to use for the x dimension.\\n * @param {number=} opt_sy The scale factor to use for the y dimension.\\n * @return {!goog.math.Box} This box after scaling.\\n */\\ngoog.math.Box.prototype.scale = function(sx, opt_sy) {\\n  var sy = (typeof opt_sy === 'number') ? opt_sy : sx;\\n  this.left *= sx;\\n  this.right *= sx;\\n  this.top *= sy;\\n  this.bottom *= sy;\\n  return this;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"math\",\"Box\",\"goog.math.Box\",\"top\",\"right\",\"bottom\",\"left\",\"boundingBox\",\"goog.math.Box.boundingBox\",\"var_args\",\"box\",\"arguments\",\"y\",\"x\",\"i\",\"length\",\"expandToIncludeCoordinate\",\"prototype\",\"getWidth\",\"goog.math.Box.prototype.getWidth\",\"getHeight\",\"goog.math.Box.prototype.getHeight\",\"clone\",\"goog.math.Box.prototype.clone\",\"DEBUG\",\"toString\",\"goog.math.Box.prototype.toString\",\"contains\",\"goog.math.Box.prototype.contains\",\"other\",\"expand\",\"goog.math.Box.prototype.expand\",\"opt_right\",\"opt_bottom\",\"opt_left\",\"isObject\",\"Number\",\"expandToInclude\",\"goog.math.Box.prototype.expandToInclude\",\"Math\",\"min\",\"max\",\"goog.math.Box.prototype.expandToIncludeCoordinate\",\"coord\",\"equals\",\"goog.math.Box.equals\",\"a\",\"b\",\"goog.math.Box.contains\",\"relativePositionX\",\"goog.math.Box.relativePositionX\",\"relativePositionY\",\"goog.math.Box.relativePositionY\",\"distance\",\"goog.math.Box.distance\",\"sqrt\",\"intersects\",\"goog.math.Box.intersects\",\"intersectsWithPadding\",\"goog.math.Box.intersectsWithPadding\",\"padding\",\"ceil\",\"goog.math.Box.prototype.ceil\",\"floor\",\"goog.math.Box.prototype.floor\",\"round\",\"goog.math.Box.prototype.round\",\"translate\",\"goog.math.Box.prototype.translate\",\"tx\",\"opt_ty\",\"Coordinate\",\"asserts\",\"assertNumber\",\"scale\",\"goog.math.Box.prototype.scale\",\"sx\",\"opt_sy\",\"sy\"]\n}\n"]