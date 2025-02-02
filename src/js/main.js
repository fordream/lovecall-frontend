/* @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later */
'use strict';

require('angular');
require('angular-animate');
require('angular-aria');
require('angular-material');
require('angular-logex');

require('./ui/index');
require('./demo');

require('../../node_modules/angular-material/angular-material.css');
require('../sass/index.scss');

var mod = angular.module('lovecall/main', [
    'lovecall/ui/index',
    'lovecall/demo',
    'log.ex.uo'
]);

mod.config(function(logExProvider) {
  logExProvider.enableLogging(true);

  logExProvider.overrideLogPrefix(function(className) {
    var timeFrag = '[' + new Date().toISOString() + '] ';
    var classFrag = angular.isString(className) ? '[' + className + '] ' : '';

    return timeFrag + classFrag;
  });
});

angular.bootstrap(angular.element(document.getElementById('appmount')), ['lovecall/main', 'ngMaterial']);
/* @license-end */

// vim:set ai et ts=2 sw=2 sts=2 fenc=utf-8:
