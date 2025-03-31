// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-same-value@v0.2.2-esm/index.mjs";function e(e,s,n){var a;return n<0&&(n+=e.length)<0&&(n=0),(a=r(e)).accessorProtocol?function(r,e,s){var n,a,o;for(n=r.data,a=r.accessors[0],o=s;o<n.length;o++)if(t(e,a(n,o)))return o;return-1}(a,s,n):function(r,e,s){var n;for(n=s;n<r.length;n++)if(t(e,r[n]))return n;return-1}(e,s,n)}export{e as default};
//# sourceMappingURL=index.mjs.map
