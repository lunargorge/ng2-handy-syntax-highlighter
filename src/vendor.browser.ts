// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// TODO(gdi2290): switch to DLLs

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

// AngularClass
import '@angularclass/hmr';

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import 'prismjs';
//import 'prismjs/components/prism-core';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-less';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-apacheconf';
import 'prismjs/components/prism-nginx';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-jade';
import 'prismjs/components/prism-ini';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-perl';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-ruby';

if ('production' === ENV) {
  // Production


} else {
  // Development

}
