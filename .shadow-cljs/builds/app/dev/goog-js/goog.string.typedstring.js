["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/string/typedstring.js"],"~:js","goog.provide(\"goog.string.TypedString\");\ngoog.string.TypedString = function() {\n};\ngoog.string.TypedString.prototype.implementsGoogStringTypedString;\ngoog.string.TypedString.prototype.getTypedStringValue;\n","~:source","// Copyright 2013 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\ngoog.provide('goog.string.TypedString');\n\n\n\n/**\n * Wrapper for strings that conform to a data type or language.\n *\n * Implementations of this interface are wrappers for strings, and typically\n * associate a type contract with the wrapped string.  Concrete implementations\n * of this interface may choose to implement additional run-time type checking,\n * see for example `goog.html.SafeHtml`. If available, client code that\n * needs to ensure type membership of an object should use the type's function\n * to assert type membership, such as `goog.html.SafeHtml.unwrap`.\n * @interface\n */\ngoog.string.TypedString = function() {};\n\n\n/**\n * Interface marker of the TypedString interface.\n *\n * This property can be used to determine at runtime whether or not an object\n * implements this interface.  All implementations of this interface set this\n * property to `true`.\n * @type {boolean}\n */\ngoog.string.TypedString.prototype.implementsGoogStringTypedString;\n\n\n/**\n * Retrieves this wrapped string's value.\n * @return {string} The wrapped string's value.\n */\ngoog.string.TypedString.prototype.getTypedStringValue;\n","~:compiled-at",1635155853927,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.string.typedstring.js\",\n\"lineCount\":6,\n\"mappings\":\"AAcAA,IAAA,CAAKC,OAAL,CAAa,yBAAb,CAAA;AAeAD,IAAA,CAAKE,MAAL,CAAYC,WAAZ,GAA0BC,QAAQ,EAAG;CAArC;AAWAJ,IAAA,CAAKE,MAAL,CAAYC,WAAZ,CAAwBE,SAAxB,CAAkCC,+BAAlC;AAOAN,IAAA,CAAKE,MAAL,CAAYC,WAAZ,CAAwBE,SAAxB,CAAkCE,mBAAlC;;\",\n\"sources\":[\"goog/string/typedstring.js\"],\n\"sourcesContent\":[\"// Copyright 2013 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\ngoog.provide('goog.string.TypedString');\\n\\n\\n\\n/**\\n * Wrapper for strings that conform to a data type or language.\\n *\\n * Implementations of this interface are wrappers for strings, and typically\\n * associate a type contract with the wrapped string.  Concrete implementations\\n * of this interface may choose to implement additional run-time type checking,\\n * see for example `goog.html.SafeHtml`. If available, client code that\\n * needs to ensure type membership of an object should use the type's function\\n * to assert type membership, such as `goog.html.SafeHtml.unwrap`.\\n * @interface\\n */\\ngoog.string.TypedString = function() {};\\n\\n\\n/**\\n * Interface marker of the TypedString interface.\\n *\\n * This property can be used to determine at runtime whether or not an object\\n * implements this interface.  All implementations of this interface set this\\n * property to `true`.\\n * @type {boolean}\\n */\\ngoog.string.TypedString.prototype.implementsGoogStringTypedString;\\n\\n\\n/**\\n * Retrieves this wrapped string's value.\\n * @return {string} The wrapped string's value.\\n */\\ngoog.string.TypedString.prototype.getTypedStringValue;\\n\"],\n\"names\":[\"goog\",\"provide\",\"string\",\"TypedString\",\"goog.string.TypedString\",\"prototype\",\"implementsGoogStringTypedString\",\"getTypedStringValue\"]\n}\n"]