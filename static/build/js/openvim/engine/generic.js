var VIM_GENERIC=VIM_GENERIC||function(){function n(){}function r(n,r){return t(r,function(r){return r===n})}function t(n,r){for(var t=0,o=n.length;t<o;++t)if(r(n[t]))return!0;return!1}function o(n){return String.fromCharCode(n)}function e(n){return n.charCodeAt()}function i(n,r){for(var t=0,o=n.length;t<o;++t)r(n[t],t)}function u(n){return d([],n,function(n,r){return[r].concat(n)})}function c(n){return u(n.split("")).join("")}function f(n){return"[object Array]"===Object.prototype.toString.call(n)}function a(n){return"string"==typeof n}function h(n,r,t,o){function e(n){return void 0!==o?o(n):n}if(r!==t)throw"expected "+n+": "+e(r)+", actual: "+e(t)}function l(n,r){if(r)throw n}function s(n,r){for(var t=[],o=0;o<n;++o)t[o]=r;return t}function v(n){return[].concat(n)}function g(n,r){return d(!0,n,function(n,t){return n&&r(t)})}function p(n,r){for(var t=[],o=0,e=n.length;o<e;++o){var i=n[o];r(i)&&t.push(i)}return t}function y(n,r){for(var t=[],o=0,e=n.length;o<e;++o)t.push(r(n[o]));return t}function d(n,r,t){var o=a(r)?C(n,r,t):_(n,r,t);if(o.length!==r.length)throw"original collection differs in size with result collection";return o}function _(n,r,t){for(var o=n,e=0,i=r.length;e<i;++e)o=t(o,r[e]);return o}function C(n,r,t){for(var o=n,e=0,i=r.length;e<i;++e)o=t(o,r.charAt(e));return o}function w(n,r){a(n)?I(n,r):A(n,r)}function I(n,r){for(var t=0,o=n.length;t<o;++t)r(n.charAt(t))}function A(n,r){for(var t=0,o=n.length;t<o;++t)r(n[t])}function j(n){var r={};for(var t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r}return{for_all:g,map:y,filter:p,reduce:d,for_each:w,for_each_indexed:i,reverse:u,reverseString:c,copy_array:v,create_array:s,isPrimitiveArray:f,assert:h,okUnless:l,shallowCopyObject:j,intToChar:o,charToInt:e,existsIn:r,exists:t,nothing:n}}();