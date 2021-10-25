["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/labs/useragent/engine.js"],"~:js","goog.provide(\"goog.labs.userAgent.engine\");\ngoog.require(\"goog.array\");\ngoog.require(\"goog.labs.userAgent.util\");\ngoog.require(\"goog.string\");\ngoog.labs.userAgent.engine.isPresto = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"Presto\");\n};\ngoog.labs.userAgent.engine.isTrident = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"Trident\") || goog.labs.userAgent.util.matchUserAgent(\"MSIE\");\n};\ngoog.labs.userAgent.engine.isEdge = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"Edge\");\n};\ngoog.labs.userAgent.engine.isWebKit = function() {\n  return goog.labs.userAgent.util.matchUserAgentIgnoreCase(\"WebKit\") && !goog.labs.userAgent.engine.isEdge();\n};\ngoog.labs.userAgent.engine.isGecko = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"Gecko\") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge();\n};\ngoog.labs.userAgent.engine.getVersion = function() {\n  var userAgentString = goog.labs.userAgent.util.getUserAgent();\n  if (userAgentString) {\n    var tuples = goog.labs.userAgent.util.extractVersionTuples(userAgentString);\n    var engineTuple = goog.labs.userAgent.engine.getEngineTuple_(tuples);\n    if (engineTuple) {\n      if (engineTuple[0] == \"Gecko\") {\n        return goog.labs.userAgent.engine.getVersionForKey_(tuples, \"Firefox\");\n      }\n      return engineTuple[1];\n    }\n    var browserTuple = tuples[0];\n    var info;\n    if (browserTuple && (info = browserTuple[2])) {\n      var match = /Trident\\/([^\\s;]+)/.exec(info);\n      if (match) {\n        return match[1];\n      }\n    }\n  }\n  return \"\";\n};\ngoog.labs.userAgent.engine.getEngineTuple_ = function(tuples) {\n  if (!goog.labs.userAgent.engine.isEdge()) {\n    return tuples[1];\n  }\n  for (var i = 0; i < tuples.length; i++) {\n    var tuple = tuples[i];\n    if (tuple[0] == \"Edge\") {\n      return tuple;\n    }\n  }\n};\ngoog.labs.userAgent.engine.isVersionOrHigher = function(version) {\n  return goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), version) >= 0;\n};\ngoog.labs.userAgent.engine.getVersionForKey_ = function(tuples, key) {\n  var pair = goog.array.find(tuples, function(pair) {\n    return key == pair[0];\n  });\n  return pair && pair[1] || \"\";\n};\n","~:source","// Copyright 2013 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Closure user agent detection.\n * @see http://en.wikipedia.org/wiki/User_agent\n * For more information on browser brand, platform, or device see the other\n * sub-namespaces in goog.labs.userAgent (browser, platform, and device).\n *\n */\n\ngoog.provide('goog.labs.userAgent.engine');\n\ngoog.require('goog.array');\ngoog.require('goog.labs.userAgent.util');\ngoog.require('goog.string');\n\n\n/**\n * @return {boolean} Whether the rendering engine is Presto.\n */\ngoog.labs.userAgent.engine.isPresto = function() {\n  return goog.labs.userAgent.util.matchUserAgent('Presto');\n};\n\n\n/**\n * @return {boolean} Whether the rendering engine is Trident.\n */\ngoog.labs.userAgent.engine.isTrident = function() {\n  // IE only started including the Trident token in IE8.\n  return goog.labs.userAgent.util.matchUserAgent('Trident') ||\n      goog.labs.userAgent.util.matchUserAgent('MSIE');\n};\n\n\n/**\n * @return {boolean} Whether the rendering engine is EdgeHTML.\n */\ngoog.labs.userAgent.engine.isEdge = function() {\n  return goog.labs.userAgent.util.matchUserAgent('Edge');\n};\n\n\n/**\n * @return {boolean} Whether the rendering engine is WebKit. This will return\n * true for Chrome, Blink-based Opera (15+), Edge Chromium and Safari.\n */\ngoog.labs.userAgent.engine.isWebKit = function() {\n  return goog.labs.userAgent.util.matchUserAgentIgnoreCase('WebKit') &&\n      !goog.labs.userAgent.engine.isEdge();\n};\n\n\n/**\n * @return {boolean} Whether the rendering engine is Gecko.\n */\ngoog.labs.userAgent.engine.isGecko = function() {\n  return goog.labs.userAgent.util.matchUserAgent('Gecko') &&\n      !goog.labs.userAgent.engine.isWebKit() &&\n      !goog.labs.userAgent.engine.isTrident() &&\n      !goog.labs.userAgent.engine.isEdge();\n};\n\n\n/**\n * @return {string} The rendering engine's version or empty string if version\n *     can't be determined.\n */\ngoog.labs.userAgent.engine.getVersion = function() {\n  var userAgentString = goog.labs.userAgent.util.getUserAgent();\n  if (userAgentString) {\n    var tuples = goog.labs.userAgent.util.extractVersionTuples(userAgentString);\n\n    var engineTuple = goog.labs.userAgent.engine.getEngineTuple_(tuples);\n    if (engineTuple) {\n      // In Gecko, the version string is either in the browser info or the\n      // Firefox version.  See Gecko user agent string reference:\n      // http://goo.gl/mULqa\n      if (engineTuple[0] == 'Gecko') {\n        return goog.labs.userAgent.engine.getVersionForKey_(tuples, 'Firefox');\n      }\n\n      return engineTuple[1];\n    }\n\n    // MSIE has only one version identifier, and the Trident version is\n    // specified in the parenthetical. IE Edge is covered in the engine tuple\n    // detection.\n    var browserTuple = tuples[0];\n    var info;\n    if (browserTuple && (info = browserTuple[2])) {\n      var match = /Trident\\/([^\\s;]+)/.exec(info);\n      if (match) {\n        return match[1];\n      }\n    }\n  }\n  return '';\n};\n\n\n/**\n * @param {!Array<!Array<string>>} tuples Extracted version tuples.\n * @return {!Array<string>|undefined} The engine tuple or undefined if not\n *     found.\n * @private\n */\ngoog.labs.userAgent.engine.getEngineTuple_ = function(tuples) {\n  if (!goog.labs.userAgent.engine.isEdge()) {\n    return tuples[1];\n  }\n  for (var i = 0; i < tuples.length; i++) {\n    var tuple = tuples[i];\n    if (tuple[0] == 'Edge') {\n      return tuple;\n    }\n  }\n};\n\n\n/**\n * @param {string|number} version The version to check.\n * @return {boolean} Whether the rendering engine version is higher or the same\n *     as the given version.\n */\ngoog.labs.userAgent.engine.isVersionOrHigher = function(version) {\n  return goog.string.compareVersions(\n             goog.labs.userAgent.engine.getVersion(), version) >= 0;\n};\n\n\n/**\n * @param {!Array<!Array<string>>} tuples Version tuples.\n * @param {string} key The key to look for.\n * @return {string} The version string of the given key, if present.\n *     Otherwise, the empty string.\n * @private\n */\ngoog.labs.userAgent.engine.getVersionForKey_ = function(tuples, key) {\n  // TODO(nnaze): Move to util if useful elsewhere.\n\n  var pair = goog.array.find(tuples, function(pair) { return key == pair[0]; });\n\n  return pair && pair[1] || '';\n};\n","~:compiled-at",1635155853997,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.labs.useragent.engine.js\",\n\"lineCount\":62,\n\"mappings\":\"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\",\n\"sources\":[\"goog/labs/useragent/engine.js\"],\n\"sourcesContent\":[\"// Copyright 2013 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Closure user agent detection.\\n * @see http://en.wikipedia.org/wiki/User_agent\\n * For more information on browser brand, platform, or device see the other\\n * sub-namespaces in goog.labs.userAgent (browser, platform, and device).\\n *\\n */\\n\\ngoog.provide('goog.labs.userAgent.engine');\\n\\ngoog.require('goog.array');\\ngoog.require('goog.labs.userAgent.util');\\ngoog.require('goog.string');\\n\\n\\n/**\\n * @return {boolean} Whether the rendering engine is Presto.\\n */\\ngoog.labs.userAgent.engine.isPresto = function() {\\n  return goog.labs.userAgent.util.matchUserAgent('Presto');\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the rendering engine is Trident.\\n */\\ngoog.labs.userAgent.engine.isTrident = function() {\\n  // IE only started including the Trident token in IE8.\\n  return goog.labs.userAgent.util.matchUserAgent('Trident') ||\\n      goog.labs.userAgent.util.matchUserAgent('MSIE');\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the rendering engine is EdgeHTML.\\n */\\ngoog.labs.userAgent.engine.isEdge = function() {\\n  return goog.labs.userAgent.util.matchUserAgent('Edge');\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the rendering engine is WebKit. This will return\\n * true for Chrome, Blink-based Opera (15+), Edge Chromium and Safari.\\n */\\ngoog.labs.userAgent.engine.isWebKit = function() {\\n  return goog.labs.userAgent.util.matchUserAgentIgnoreCase('WebKit') &&\\n      !goog.labs.userAgent.engine.isEdge();\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the rendering engine is Gecko.\\n */\\ngoog.labs.userAgent.engine.isGecko = function() {\\n  return goog.labs.userAgent.util.matchUserAgent('Gecko') &&\\n      !goog.labs.userAgent.engine.isWebKit() &&\\n      !goog.labs.userAgent.engine.isTrident() &&\\n      !goog.labs.userAgent.engine.isEdge();\\n};\\n\\n\\n/**\\n * @return {string} The rendering engine's version or empty string if version\\n *     can't be determined.\\n */\\ngoog.labs.userAgent.engine.getVersion = function() {\\n  var userAgentString = goog.labs.userAgent.util.getUserAgent();\\n  if (userAgentString) {\\n    var tuples = goog.labs.userAgent.util.extractVersionTuples(userAgentString);\\n\\n    var engineTuple = goog.labs.userAgent.engine.getEngineTuple_(tuples);\\n    if (engineTuple) {\\n      // In Gecko, the version string is either in the browser info or the\\n      // Firefox version.  See Gecko user agent string reference:\\n      // http://goo.gl/mULqa\\n      if (engineTuple[0] == 'Gecko') {\\n        return goog.labs.userAgent.engine.getVersionForKey_(tuples, 'Firefox');\\n      }\\n\\n      return engineTuple[1];\\n    }\\n\\n    // MSIE has only one version identifier, and the Trident version is\\n    // specified in the parenthetical. IE Edge is covered in the engine tuple\\n    // detection.\\n    var browserTuple = tuples[0];\\n    var info;\\n    if (browserTuple && (info = browserTuple[2])) {\\n      var match = /Trident\\\\/([^\\\\s;]+)/.exec(info);\\n      if (match) {\\n        return match[1];\\n      }\\n    }\\n  }\\n  return '';\\n};\\n\\n\\n/**\\n * @param {!Array<!Array<string>>} tuples Extracted version tuples.\\n * @return {!Array<string>|undefined} The engine tuple or undefined if not\\n *     found.\\n * @private\\n */\\ngoog.labs.userAgent.engine.getEngineTuple_ = function(tuples) {\\n  if (!goog.labs.userAgent.engine.isEdge()) {\\n    return tuples[1];\\n  }\\n  for (var i = 0; i < tuples.length; i++) {\\n    var tuple = tuples[i];\\n    if (tuple[0] == 'Edge') {\\n      return tuple;\\n    }\\n  }\\n};\\n\\n\\n/**\\n * @param {string|number} version The version to check.\\n * @return {boolean} Whether the rendering engine version is higher or the same\\n *     as the given version.\\n */\\ngoog.labs.userAgent.engine.isVersionOrHigher = function(version) {\\n  return goog.string.compareVersions(\\n             goog.labs.userAgent.engine.getVersion(), version) >= 0;\\n};\\n\\n\\n/**\\n * @param {!Array<!Array<string>>} tuples Version tuples.\\n * @param {string} key The key to look for.\\n * @return {string} The version string of the given key, if present.\\n *     Otherwise, the empty string.\\n * @private\\n */\\ngoog.labs.userAgent.engine.getVersionForKey_ = function(tuples, key) {\\n  // TODO(nnaze): Move to util if useful elsewhere.\\n\\n  var pair = goog.array.find(tuples, function(pair) { return key == pair[0]; });\\n\\n  return pair && pair[1] || '';\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"labs\",\"userAgent\",\"engine\",\"isPresto\",\"goog.labs.userAgent.engine.isPresto\",\"util\",\"matchUserAgent\",\"isTrident\",\"goog.labs.userAgent.engine.isTrident\",\"isEdge\",\"goog.labs.userAgent.engine.isEdge\",\"isWebKit\",\"goog.labs.userAgent.engine.isWebKit\",\"matchUserAgentIgnoreCase\",\"isGecko\",\"goog.labs.userAgent.engine.isGecko\",\"getVersion\",\"goog.labs.userAgent.engine.getVersion\",\"userAgentString\",\"getUserAgent\",\"tuples\",\"extractVersionTuples\",\"engineTuple\",\"getEngineTuple_\",\"getVersionForKey_\",\"browserTuple\",\"info\",\"match\",\"exec\",\"goog.labs.userAgent.engine.getEngineTuple_\",\"i\",\"length\",\"tuple\",\"isVersionOrHigher\",\"goog.labs.userAgent.engine.isVersionOrHigher\",\"version\",\"string\",\"compareVersions\",\"goog.labs.userAgent.engine.getVersionForKey_\",\"key\",\"pair\",\"array\",\"find\"]\n}\n"]