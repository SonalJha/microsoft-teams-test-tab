/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():undefined}(window,function(){return function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=13)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(){}return e.initializeCalled=!1,e.initializeCompleted=!1,e.additionalValidOrigins=[],e.additionalValidOriginsRegexp=null,e.initializeCallbacks=[],e.isFramelessWindow=!1,e.parentMessageQueue=[],e.childMessageQueue=[],e.nextMessageId=0,e.handlers={},e.callbacks={},e.printCapabilityEnabled=!1,e}();n.GlobalVars=a},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(5),r=t(4),o=t(0),i=t(3);function s(e,n){return(!o.GlobalVars.currentWindow||e!==o.GlobalVars.currentWindow)&&(!!(o.GlobalVars.currentWindow&&o.GlobalVars.currentWindow.location&&n&&n===o.GlobalVars.currentWindow.location.origin)||!!(r.validOriginRegExp.test(n.toLowerCase())||o.GlobalVars.additionalValidOriginsRegexp&&o.GlobalVars.additionalValidOriginsRegexp.test(n.toLowerCase())))}function l(e,n){!o.GlobalVars.parentWindow||o.GlobalVars.parentWindow.closed||e===o.GlobalVars.parentWindow?(o.GlobalVars.parentWindow=e,o.GlobalVars.parentOrigin=n):o.GlobalVars.childWindow&&!o.GlobalVars.childWindow.closed&&e!==o.GlobalVars.childWindow||(o.GlobalVars.childWindow=e,o.GlobalVars.childOrigin=n),o.GlobalVars.parentWindow&&o.GlobalVars.parentWindow.closed&&(o.GlobalVars.parentWindow=null,o.GlobalVars.parentOrigin=null),o.GlobalVars.childWindow&&o.GlobalVars.childWindow.closed&&(o.GlobalVars.childWindow=null,o.GlobalVars.childOrigin=null),p(o.GlobalVars.parentWindow),p(o.GlobalVars.childWindow)}function u(e){if("id"in e.data&&"number"==typeof e.data.id){var n=e.data,t=o.GlobalVars.callbacks[n.id];t&&(t.apply(null,n.args),delete o.GlobalVars.callbacks[n.id])}else if("func"in e.data&&"string"==typeof e.data.func){n=e.data;var a=o.GlobalVars.handlers[n.func];a&&a.apply(this,n.args)}}function c(e){if("id"in e.data&&"func"in e.data){var n=e.data,t=n.func?o.GlobalVars.handlers[n.func]:null;if(t){var a=t.apply(this,n.args);void 0!==a&&b(n.id,Array.isArray(a)?a:[a])}else{var r=g(n.func,n.args);o.GlobalVars.callbacks[r]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];o.GlobalVars.childWindow&&b(n.id,e)}}}}function d(e){return e===o.GlobalVars.parentWindow?o.GlobalVars.parentMessageQueue:e===o.GlobalVars.childWindow?o.GlobalVars.childMessageQueue:[]}function f(e){return e===o.GlobalVars.parentWindow?o.GlobalVars.parentOrigin:e===o.GlobalVars.childWindow?o.GlobalVars.childOrigin:null}function p(e){for(var n=f(e),t=d(e);e&&n&&t.length>0;)e.postMessage(t.shift(),n)}function g(e,n){var t=o.GlobalVars.parentWindow,a=m(e,n);if(o.GlobalVars.isFramelessWindow)o.GlobalVars.currentWindow&&o.GlobalVars.currentWindow.nativeInterface&&o.GlobalVars.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(a));else{var r=f(t);t&&r?t.postMessage(a,r):d(t).push(a)}return a.id}function b(e,n){var t=o.GlobalVars.childWindow,a=v(e,n),r=f(t);t&&r&&t.postMessage(a,r)}function h(e,n){var t=o.GlobalVars.childWindow,a=C(e,n),r=f(t);t&&r?t.postMessage(a,r):d(t).push(a)}function m(e,n){return{id:o.GlobalVars.nextMessageId++,func:e,args:n||[]}}function v(e,n){return{id:e,args:n||[]}}function C(e,n){return{func:e,args:n||[]}}o.GlobalVars.handlers.themeChange=function(e){o.GlobalVars.themeChangeHandler&&o.GlobalVars.themeChangeHandler(e);o.GlobalVars.childWindow&&h("themeChange",[e])},o.GlobalVars.handlers.fullScreenChange=function(e){o.GlobalVars.fullScreenChangeHandler&&o.GlobalVars.fullScreenChangeHandler(e)},o.GlobalVars.handlers.backButtonPress=function(){o.GlobalVars.backButtonPressHandler&&o.GlobalVars.backButtonPressHandler()||a.navigateBack()},o.GlobalVars.handlers.load=function(e){o.GlobalVars.loadHandler&&o.GlobalVars.loadHandler(e);o.GlobalVars.childWindow&&h("load",[e])},o.GlobalVars.handlers.beforeUnload=function(){var e=function(){g("readyToUnload",[])};o.GlobalVars.beforeUnloadHandler&&o.GlobalVars.beforeUnloadHandler(e)||e()},o.GlobalVars.handlers.changeSettings=function(){o.GlobalVars.changeSettingsHandler&&o.GlobalVars.changeSettingsHandler()},o.GlobalVars.handlers.startConversation=function(e,n,t,a){o.GlobalVars.onStartConversationHandler&&o.GlobalVars.onStartConversationHandler({subEntityId:e,conversationId:n,channelId:t,entityId:a})},o.GlobalVars.handlers.closeConversation=function(e,n,t,a){o.GlobalVars.onCloseConversationHandler&&o.GlobalVars.onCloseConversationHandler({subEntityId:e,conversationId:n,channelId:t,entityId:a})},o.GlobalVars.handlers.appButtonClick=function(){o.GlobalVars.appButtonClickHandler&&o.GlobalVars.appButtonClickHandler()},o.GlobalVars.handlers.appButtonHover=function(){o.GlobalVars.appButtonHoverHandler&&o.GlobalVars.appButtonHoverHandler()},n.ensureInitialized=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(!o.GlobalVars.initializeCalled)throw new Error("The library has not yet been initialized");if(o.GlobalVars.frameContext&&e&&e.length>0){for(var t=!1,a=0;a<e.length;a++)if(e[a]===o.GlobalVars.frameContext){t=!0;break}if(!t)throw new Error("This call is not allowed in the '"+o.GlobalVars.frameContext+"' context")}},n.isAPISupportedByPlatform=function(e){void 0===e&&(e=r.defaultSDKVersionForCompatCheck);var n=i.compareSDKVersions(o.GlobalVars.clientSupportedSDKVersion,e);return!isNaN(n)&&n>=0},n.processMessage=function(e){if(e&&e.data&&"object"==typeof e.data){var n=e.source||e.originalEvent&&e.originalEvent.source,t=e.origin||e.originalEvent&&e.originalEvent.origin;s(n,t)&&(l(n,t),n===o.GlobalVars.parentWindow?u(e):n===o.GlobalVars.childWindow&&c(e))}},n.handleParentMessage=u,n.processAdditionalValidOrigins=function(e){var n=o.GlobalVars.additionalValidOrigins.concat(e.filter(function(e){return"string"==typeof e&&r.userOriginUrlValidationRegExp.test(e)})),t={};n=n.filter(function(e){return!t[e]&&(t[e]=!0,!0)}),o.GlobalVars.additionalValidOrigins=n,o.GlobalVars.additionalValidOrigins.length>0?o.GlobalVars.additionalValidOriginsRegexp=i.generateRegExpFromUrls(o.GlobalVars.additionalValidOrigins):o.GlobalVars.additionalValidOriginsRegexp=null},n.waitForMessageQueue=function(e,n){var t=o.GlobalVars.currentWindow.setInterval(function(){0===d(e).length&&(clearInterval(t),n())},100)},n.sendMessageRequestToParent=g,n.sendMessageEventToChild=h},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.desktop="desktop",e.web="web",e.android="android",e.ios="ios",e.rigel="rigel"}(n.HostClientType||(n.HostClientType={})),function(e){e.settings="settings",e.content="content",e.authentication="authentication",e.remove="remove",e.task="task",e.sidePanel="sidePanel",e.stage="stage"}(n.FrameContexts||(n.FrameContexts={})),function(e){e[e.Standard=0]="Standard",e[e.Edu=1]="Edu",e[e.Class=2]="Class",e[e.Plc=3]="Plc",e[e.Staff=4]="Staff"}(n.TeamType||(n.TeamType={})),function(e){e[e.Admin=0]="Admin",e[e.User=1]="User",e[e.Guest=2]="Guest"}(n.UserTeamRole||(n.UserTeamRole={})),function(e){e.Large="large",e.Medium="medium",e.Small="small"}(n.TaskModuleDimension||(n.TaskModuleDimension={})),function(e){e.Regular="Regular",e.Private="Private"}(n.ChannelType||(n.ChannelType={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(16);function r(e){for(var n="^",t=e.split("."),a=0;a<t.length;a++)n+=(a>0?"[.]":"")+t[a].replace("*","[^/^.]+");return n+="$"}n.generateRegExpFromUrls=function(e){for(var n="",t=0;t<e.length;t++)n+=(0===t?"":"|")+r(e[t]);return new RegExp(n)},n.getGenericOnCompleteHandler=function(e){return function(n,t){if(!n)throw new Error(e||t)}},n.compareSDKVersions=function(e,n){if("string"!=typeof e||"string"!=typeof n)return NaN;var t=e.split("."),a=n.split(".");function r(e){return/^\d+$/.test(e)}if(!t.every(r)||!a.every(r))return NaN;for(;t.length<a.length;)t.push("0");for(;a.length<t.length;)a.push("0");for(var o=0;o<t.length;++o)if(t[o]!=a[o])return t[o]>a[o]?1:-1;return 0},n.generateGUID=function(){return a.v4()}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(3);n.version="1.8.0-beta.3",n.defaultSDKVersionForCompatCheck="1.6.0",n.validOrigins=["https://teams.microsoft.com","https://teams.microsoft.us","https://gov.teams.microsoft.us","https://dod.teams.microsoft.us","https://int.teams.microsoft.com","https://devspaces.skype.com","https://ssauth.skype.com","https://local.teams.office.com","https://local.teams.office.com:8080","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com","https://*.teams.microsoft.com","https://www.office.com","https://word.office.com","https://excel.office.com","https://powerpoint.office.com","https://www.officeppe.com","https://*.www.office.com","http://127.0.0.1:5000"],n.validOriginRegExp=a.generateRegExpFromUrls(n.validOrigins),n.userOriginUrlValidationRegExp=/^https\:\/\//},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(4),i=t(8),s=t(3),l=t(9),u=t(2);function c(e,n){if(!r.GlobalVars.initializeCalled){r.GlobalVars.initializeCalled=!0;var t=function(e){return a.processMessage(e)};r.GlobalVars.currentWindow=r.GlobalVars.currentWindow||window,r.GlobalVars.parentWindow=r.GlobalVars.currentWindow.parent!==r.GlobalVars.currentWindow.self?r.GlobalVars.currentWindow.parent:r.GlobalVars.currentWindow.opener,r.GlobalVars.parentWindow?r.GlobalVars.currentWindow.addEventListener("message",t,!1):(r.GlobalVars.isFramelessWindow=!0,window.onNativeMessage=a.handleParentMessage);try{r.GlobalVars.parentOrigin="*";var s=a.sendMessageRequestToParent("initialize",[o.version]);r.GlobalVars.callbacks[s]=function(e,n,t){void 0===t&&(t=o.defaultSDKVersionForCompatCheck),r.GlobalVars.frameContext=e,r.GlobalVars.hostClientType=n,r.GlobalVars.clientSupportedSDKVersion=t,r.GlobalVars.initializeCallbacks.forEach(function(e){return e()}),r.GlobalVars.initializeCallbacks=[],r.GlobalVars.initializeCompleted=!0}}finally{r.GlobalVars.parentOrigin=null}this._uninitialize=function(){r.GlobalVars.frameContext&&(f(null),p(null),g(null),h(null),b(null),l.logs.registerGetLogHandler(null)),r.GlobalVars.frameContext===u.FrameContexts.settings&&i.settings.registerOnSaveHandler(null),r.GlobalVars.frameContext===u.FrameContexts.remove&&i.settings.registerOnRemoveHandler(null),r.GlobalVars.isFramelessWindow||r.GlobalVars.currentWindow.removeEventListener("message",t,!1),r.GlobalVars.initializeCalled=!1,r.GlobalVars.initializeCompleted=!1,r.GlobalVars.initializeCallbacks=[],r.GlobalVars.additionalValidOrigins=[],r.GlobalVars.parentWindow=null,r.GlobalVars.parentOrigin=null,r.GlobalVars.parentMessageQueue=[],r.GlobalVars.childWindow=null,r.GlobalVars.childOrigin=null,r.GlobalVars.childMessageQueue=[],r.GlobalVars.nextMessageId=0,r.GlobalVars.callbacks={},r.GlobalVars.frameContext=null,r.GlobalVars.hostClientType=null,r.GlobalVars.isFramelessWindow=!1}}Array.isArray(n)&&a.processAdditionalValidOrigins(n),e&&(r.GlobalVars.initializeCompleted?e():r.GlobalVars.initializeCallbacks.push(e))}function d(){window.print()}function f(e){a.ensureInitialized(),r.GlobalVars.themeChangeHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["themeChange"])}function p(e){a.ensureInitialized(),r.GlobalVars.fullScreenChangeHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["fullScreen"])}function g(e){a.ensureInitialized(),r.GlobalVars.backButtonPressHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["backButton"])}function b(e){a.ensureInitialized(),r.GlobalVars.loadHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["load"])}function h(e){a.ensureInitialized(),r.GlobalVars.beforeUnloadHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["beforeUnload"])}function m(e){a.ensureInitialized(u.FrameContexts.content),a.sendMessageRequestToParent("setFrameContext",[e])}n.initialize=c,n._initialize=function(e){r.GlobalVars.currentWindow=e},n._uninitialize=function(){},n.enablePrintCapability=function(){r.GlobalVars.printCapabilityEnabled||(r.GlobalVars.printCapabilityEnabled=!0,a.ensureInitialized(),document.addEventListener("keydown",function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(d(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))},n.print=d,n.getContext=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("getContext");r.GlobalVars.callbacks[n]=function(n){n.frameContext||(n.frameContext=r.GlobalVars.frameContext),e(n)}},n.registerOnThemeChangeHandler=f,n.registerFullScreenHandler=p,n.registerAppButtonClickHandler=function(e){a.ensureInitialized(),r.GlobalVars.appButtonClickHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["appButtonClick"])},n.registerAppButtonHoverHandler=function(e){a.ensureInitialized(),r.GlobalVars.appButtonHoverHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["appButtonHover"])},n.registerBackButtonHandler=g,n.navigateBack=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("navigateBack",[]);r.GlobalVars.callbacks[n]=e||s.getGenericOnCompleteHandler("Back navigation is not supported in the current client or context.")},n.registerOnLoadHandler=b,n.registerBeforeUnloadHandler=h,n.registerChangeSettingsHandler=function(e){a.ensureInitialized(u.FrameContexts.content),r.GlobalVars.changeSettingsHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["changeSettings"])},n.navigateCrossDomain=function(e,n){a.ensureInitialized(u.FrameContexts.content,u.FrameContexts.sidePanel,u.FrameContexts.settings,u.FrameContexts.remove,u.FrameContexts.task);var t=a.sendMessageRequestToParent("navigateCrossDomain",[e]);r.GlobalVars.callbacks[t]=n||s.getGenericOnCompleteHandler("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.")},n.getTabInstances=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("getTabInstances",[n]);r.GlobalVars.callbacks[t]=e},n.getMruTabInstances=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("getMruTabInstances",[n]);r.GlobalVars.callbacks[t]=e},n.shareDeepLink=function(e){a.ensureInitialized(u.FrameContexts.content,u.FrameContexts.sidePanel),a.sendMessageRequestToParent("shareDeepLink",[e.subEntityId,e.subEntityLabel,e.subEntityWebUrl])},n.executeDeepLink=function(e,n){a.ensureInitialized(u.FrameContexts.content,u.FrameContexts.sidePanel,u.FrameContexts.settings,u.FrameContexts.task);var t=a.sendMessageRequestToParent("executeDeepLink",[e]);r.GlobalVars.callbacks[t]=n||s.getGenericOnCompleteHandler()},n.navigateToTab=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("navigateToTab",[e]);r.GlobalVars.callbacks[t]=n||s.getGenericOnCompleteHandler("Invalid internalTabInstanceId and/or channelId were/was provided")},n.setFrameContext=m,n.initializeWithFrameContext=function(e,n,t){c(n,t),m(e)}},function(e,n){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var a=new Uint8Array(16);e.exports=function(){return t(a),a}}else{var r=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0==(3&n)&&(e=4294967296*Math.random()),r[n]=e>>>((3&n)<<3)&255;return r}}},function(e,n){for(var t=[],a=0;a<256;++a)t[a]=(a+256).toString(16).substr(1);e.exports=function(e,n){var a=n||0,r=t;return[r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]]].join("")}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(2),i=t(3);!function(e){var n,t;r.GlobalVars.handlers["settings.save"]=function(e){var t=new s(e);n?n(t):t.notifySuccess()},r.GlobalVars.handlers["settings.remove"]=function(){var e=new l;t?t(e):e.notifySuccess()},e.setValidityState=function(e){a.ensureInitialized(o.FrameContexts.settings,o.FrameContexts.remove),a.sendMessageRequestToParent("settings.setValidityState",[e])},e.getSettings=function(e){a.ensureInitialized(o.FrameContexts.content,o.FrameContexts.settings,o.FrameContexts.remove);var n=a.sendMessageRequestToParent("settings.getSettings");r.GlobalVars.callbacks[n]=e},e.setSettings=function(e,n){a.ensureInitialized(o.FrameContexts.content,o.FrameContexts.settings);var t=a.sendMessageRequestToParent("settings.setSettings",[e]);r.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler()},e.registerOnSaveHandler=function(e){a.ensureInitialized(o.FrameContexts.settings),n=e,e&&a.sendMessageRequestToParent("registerHandler",["save"])},e.registerOnRemoveHandler=function(e){a.ensureInitialized(o.FrameContexts.remove),t=e,e&&a.sendMessageRequestToParent("registerHandler",["remove"])};var s=function(){function e(e){this.notified=!1,this.result=e||{}}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),a.sendMessageRequestToParent("settings.save.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),a.sendMessageRequestToParent("settings.save.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},e}();var l=function(){function e(){this.notified=!1}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),a.sendMessageRequestToParent("settings.remove.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),a.sendMessageRequestToParent("settings.remove.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},e}()}(n.settings||(n.settings={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0);!function(e){r.GlobalVars.handlers["log.request"]=function(){if(r.GlobalVars.getLogHandler){var e=r.GlobalVars.getLogHandler();a.sendMessageRequestToParent("log.receive",[e])}},e.registerGetLogHandler=function(e){a.ensureInitialized(),r.GlobalVars.getLogHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["log.request"])}}(n.logs||(n.logs={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e[e.NOT_SUPPORTED_ON_PLATFORM=100]="NOT_SUPPORTED_ON_PLATFORM",e[e.INTERNAL_ERROR=500]="INTERNAL_ERROR",e[e.PERMISSION_DENIED=1e3]="PERMISSION_DENIED",e[e.NETWORK_ERROR=2e3]="NETWORK_ERROR",e[e.NO_HW_SUPPORT=3e3]="NO_HW_SUPPORT",e[e.INVALID_ARGUMENTS=4e3]="INVALID_ARGUMENTS",e[e.UNAUTHORIZED_USER_OPERATION=5e3]="UNAUTHORIZED_USER_OPERATION",e[e.INSUFFICIENT_RESOURCES=6e3]="INSUFFICIENT_RESOURCES",e[e.THROTTLE=7e3]="THROTTLE",e[e.USER_ABORT=8e3]="USER_ABORT",e[e.OLD_PLATFORM=9e3]="OLD_PLATFORM",e[e.FILE_NOT_FOUND=404]="FILE_NOT_FOUND",e[e.SIZE_EXCEEDED=1e4]="SIZE_EXCEEDED"}(n.ErrorCode||(n.ErrorCode={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(2),i=t(3),s=function(){function e(){}return e.prototype.postMessage=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("messageForChild",[e]);r.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler()},e.prototype.addEventListener=function(e,n){"message"===e&&(r.GlobalVars.handlers.messageForParent=n)},e}();n.ChildAppWindow=s;var l=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!0,configurable:!0}),e.prototype.postMessage=function(e,n){a.ensureInitialized(o.FrameContexts.task);var t=a.sendMessageRequestToParent("messageForParent",[e]);r.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler()},e.prototype.addEventListener=function(e,n){"message"===e&&(r.GlobalVars.handlers.messageForChild=n)},e}();n.ParentAppWindow=l},function(e,n,t){"use strict";var a=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])};return function(n,t){function a(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}}();Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),o=t(10),i=t(1),s=t(2),l=t(3),u=t(27),c="1.7.0",d="1.8.0";!function(e){e.Base64="base64",e.ID="id"}(n.FileFormat||(n.FileFormat={}));var f=function(){return function(){}}();n.File=f,n.captureImage=function(e){if(!e)throw new Error("[captureImage] Callback cannot be null");if(i.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),r.GlobalVars.isFramelessWindow)if(i.isAPISupportedByPlatform(c)){var n=i.sendMessageRequestToParent("captureImage");r.GlobalVars.callbacks[n]=e}else e({errorCode:o.ErrorCode.OLD_PLATFORM},void 0);else e({errorCode:o.ErrorCode.NOT_SUPPORTED_ON_PLATFORM},void 0)};var p=function(e){function n(n){void 0===n&&(n=null);var t=e.call(this)||this;return n&&(t.content=n.content,t.format=n.format,t.mimeType=n.mimeType,t.name=n.name,t.preview=n.preview,t.size=n.size),t}return a(n,e),n.prototype.getMedia=function(e){if(!e)throw new Error("[get Media] Callback cannot be null");if(i.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),i.isAPISupportedByPlatform(d))if(u.validateGetMediaInputs(this.mimeType,this.format,this.content)){var n=l.generateGUID(),t={mediaMimeType:this.mimeType,assembleAttachment:[]},a=[n,this.content];this.content&&e&&i.sendMessageRequestToParent("getMedia",a),r.GlobalVars.handlers["getMedia"+n]=function(a){if(e){var i=JSON.parse(a);if(i.error)e(i.error,null),r.GlobalVars.handlers["getMedia"+n]=null;else if(i.mediaChunk)if(i.mediaChunk.chunkSequence<=0){var s=u.createFile(t.assembleAttachment,t.mediaMimeType);e(i.error,s),r.GlobalVars.handlers["getMedia"+n]=null}else{var l=u.decodeAttachment(i.mediaChunk,t.mediaMimeType);t.assembleAttachment.push(l)}else e({errorCode:o.ErrorCode.INTERNAL_ERROR,message:"data receieved is null"},null),r.GlobalVars.handlers["getMedia"+n]=null}}}else{var c={errorCode:o.ErrorCode.INVALID_ARGUMENTS};e(c,null)}else{var f={errorCode:o.ErrorCode.OLD_PLATFORM};e(f,null)}},n}(f);n.Media=p,function(e){e[e.Photo=1]="Photo",e[e.Document=2]="Document",e[e.Whiteboard=3]="Whiteboard",e[e.BusinessCard=4]="BusinessCard"}(n.CameraStartMode||(n.CameraStartMode={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(n.Source||(n.Source={})),function(e){e[e.Image=1]="Image",e[e.Audio=4]="Audio"}(n.MediaType||(n.MediaType={})),function(e){e[e.ID=1]="ID",e[e.URL=2]="URL"}(n.ImageUriType||(n.ImageUriType={})),n.selectMedia=function(e,n){if(!n)throw new Error("[select Media] Callback cannot be null");if(i.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),i.isAPISupportedByPlatform(d))if(u.validateSelectMediaInputs(e)){var t=[e],a=i.sendMessageRequestToParent("selectMedia",t);r.GlobalVars.callbacks[a]=function(e,t){if(t){for(var a=[],r=0,o=t;r<o.length;r++){var i=o[r];a.push(new p(i))}n(e,a)}else n(e,null)}}else{var l={errorCode:o.ErrorCode.INVALID_ARGUMENTS};n(l,null)}else{var c={errorCode:o.ErrorCode.OLD_PLATFORM};n(c,null)}},n.viewImages=function(e,n){if(!n)throw new Error("[view images] Callback cannot be null");if(i.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),i.isAPISupportedByPlatform(d))if(u.validateViewImagesInput(e)){var t=[e],a=i.sendMessageRequestToParent("viewImages",t);r.GlobalVars.callbacks[a]=n}else n({errorCode:o.ErrorCode.INVALID_ARGUMENTS});else n({errorCode:o.ErrorCode.OLD_PLATFORM})}},function(e,n,t){"use strict";function a(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}Object.defineProperty(n,"__esModule",{value:!0}),a(t(14)),a(t(23))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(15);n.bot=a.bot;var r=t(19);n.menus=r.menus;var o=t(9);n.logs=o.logs;var i=t(20);n.NotificationTypes=i.NotificationTypes;var s=t(21);n.enterFullscreen=s.enterFullscreen,n.exitFullscreen=s.exitFullscreen,n.getChatMembers=s.getChatMembers,n.getConfigSetting=s.getConfigSetting,n.getUserJoinedTeams=s.getUserJoinedTeams,n.openFilePreview=s.openFilePreview,n.sendCustomMessage=s.sendCustomMessage,n.showNotification=s.showNotification,n.sendCustomEvent=s.sendCustomEvent,n.registerCustomHandler=s.registerCustomHandler,n.uploadCustomApp=s.uploadCustomApp;var l=t(22);n.conversations=l.conversations},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t(1);!function(e){e.sendQuery=function(e,n,t){r.ensureInitialized();var o=r.sendMessageRequestToParent("bot.executeQuery",[e]);a.GlobalVars.callbacks[o]=function(e,a){e?n(a):t(a)}},e.getSupportedCommands=function(e,n){r.ensureInitialized();var t=r.sendMessageRequestToParent("bot.getSupportedCommands");a.GlobalVars.callbacks[t]=function(t,a){t?e(a):n(a)}},e.authenticate=function(e,n,t){r.ensureInitialized();var o=r.sendMessageRequestToParent("bot.authenticate",[e]);a.GlobalVars.callbacks[o]=function(e,a){e?n(a):t(a)}},function(e){e.Results="Results",e.Auth="Auth"}(e.ResponseType||(e.ResponseType={}))}(n.bot||(n.bot={}))},function(e,n,t){var a=t(17),r=t(18),o=r;o.v1=a,o.v4=r,e.exports=o},function(e,n,t){var a,r,o=t(6),i=t(7),s=0,l=0;e.exports=function(e,n,t){var u=n&&t||0,c=n||[],d=(e=e||{}).node||a,f=void 0!==e.clockseq?e.clockseq:r;if(null==d||null==f){var p=o();null==d&&(d=a=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==f&&(f=r=16383&(p[6]<<8|p[7]))}var g=void 0!==e.msecs?e.msecs:(new Date).getTime(),b=void 0!==e.nsecs?e.nsecs:l+1,h=g-s+(b-l)/1e4;if(h<0&&void 0===e.clockseq&&(f=f+1&16383),(h<0||g>s)&&void 0===e.nsecs&&(b=0),b>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=g,l=b,r=f;var m=(1e4*(268435455&(g+=122192928e5))+b)%4294967296;c[u++]=m>>>24&255,c[u++]=m>>>16&255,c[u++]=m>>>8&255,c[u++]=255&m;var v=g/4294967296*1e4&268435455;c[u++]=v>>>8&255,c[u++]=255&v,c[u++]=v>>>24&15|16,c[u++]=v>>>16&255,c[u++]=f>>>8|128,c[u++]=255&f;for(var C=0;C<6;++C)c[u+C]=d[C];return n||i(c)}},function(e,n,t){var a=t(6),r=t(7);e.exports=function(e,n,t){var o=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||a)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n)for(var s=0;s<16;++s)n[o+s]=i[s];return n||r(i)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0);!function(e){var n,t,o,i=function(){return function(){this.enabled=!0}}();e.MenuItem=i,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),r.GlobalVars.handlers.navBarMenuItemPress=function(e){n&&n(e)||(a.ensureInitialized(),a.sendMessageRequestToParent("handleNavBarMenuItemPress",[e]))},r.GlobalVars.handlers.actionMenuItemPress=function(e){t&&t(e)||(a.ensureInitialized(),a.sendMessageRequestToParent("handleActionMenuItemPress",[e]))},r.GlobalVars.handlers.setModuleView=function(e){o&&o(e)||(a.ensureInitialized(),a.sendMessageRequestToParent("viewConfigItemPress",[e]))},e.setUpViews=function(e,n){a.ensureInitialized(),o=n,a.sendMessageRequestToParent("setUpViews",[e])},e.setNavBarMenu=function(e,t){a.ensureInitialized(),n=t,a.sendMessageRequestToParent("setNavBarMenu",[e])},e.showActionMenu=function(e,n){a.ensureInitialized(),t=n,a.sendMessageRequestToParent("showActionMenu",[e])}}(n.menus||(n.menus={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.fileDownloadStart="fileDownloadStart",e.fileDownloadComplete="fileDownloadComplete"}(n.NotificationTypes||(n.NotificationTypes={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(2),i=t(3);n.getUserJoinedTeams=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("getUserJoinedTeams",[n]);r.GlobalVars.callbacks[t]=e},n.enterFullscreen=function(){a.ensureInitialized(o.FrameContexts.content),a.sendMessageRequestToParent("enterFullscreen",[])},n.exitFullscreen=function(){a.ensureInitialized(o.FrameContexts.content),a.sendMessageRequestToParent("exitFullscreen",[])},n.openFilePreview=function(e){a.ensureInitialized(o.FrameContexts.content);var n=[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId];a.sendMessageRequestToParent("openFilePreview",n)},n.showNotification=function(e){a.ensureInitialized(o.FrameContexts.content);var n=[e.message,e.notificationType];a.sendMessageRequestToParent("showNotification",n)},n.uploadCustomApp=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("uploadCustomApp",[e]);r.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler()},n.sendCustomMessage=function(e,n,t){a.ensureInitialized();var o=a.sendMessageRequestToParent(e,n);return"function"==typeof t&&(r.GlobalVars.callbacks[o]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];t.apply(null,e)}),o},n.sendCustomEvent=function(e,n){if(a.ensureInitialized(),!r.GlobalVars.childWindow)throw new Error("The child window has not yet been initialized or is not present");a.sendMessageEventToChild(e,n)},n.registerCustomHandler=function(e,n){var t=this;a.ensureInitialized(),r.GlobalVars.handlers[e]=function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];return n.apply(t,e)}},n.getChatMembers=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("getChatMembers");r.GlobalVars.callbacks[n]=e},n.getConfigSetting=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("getConfigSetting",[n]);r.GlobalVars.callbacks[t]=e}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(2);!function(e){e.openConversation=function(e){a.ensureInitialized(o.FrameContexts.content);var n=a.sendMessageRequestToParent("conversations.openConversation",[{title:e.title,subEntityId:e.subEntityId,conversationId:e.conversationId,channelId:e.channelId,entityId:e.entityId}]);r.GlobalVars.onCloseConversationHandler=e.onCloseConversation,r.GlobalVars.onStartConversationHandler=e.onStartConversation,r.GlobalVars.callbacks[n]=function(e,n){if(!e)throw new Error(n)}},e.closeConversation=function(){a.ensureInitialized(o.FrameContexts.content),a.sendMessageRequestToParent("conversations.closeConversation"),r.GlobalVars.onCloseConversationHandler=null,r.GlobalVars.onStartConversationHandler=null}}(n.conversations||(n.conversations={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(24);n.appInitialization=a.appInitialization;var r=t(25);n.authentication=r.authentication;var o=t(2);n.FrameContexts=o.FrameContexts,n.HostClientType=o.HostClientType,n.TaskModuleDimension=o.TaskModuleDimension,n.TeamType=o.TeamType,n.UserTeamRole=o.UserTeamRole;var i=t(10);n.ErrorCode=i.ErrorCode;var s=t(5);n.enablePrintCapability=s.enablePrintCapability,n.executeDeepLink=s.executeDeepLink,n.getContext=s.getContext,n.getMruTabInstances=s.getMruTabInstances,n.getTabInstances=s.getTabInstances,n.initialize=s.initialize,n.initializeWithFrameContext=s.initializeWithFrameContext,n.navigateBack=s.navigateBack,n.navigateCrossDomain=s.navigateCrossDomain,n.navigateToTab=s.navigateToTab,n.print=s.print,n.registerBackButtonHandler=s.registerBackButtonHandler,n.registerBeforeUnloadHandler=s.registerBeforeUnloadHandler,n.registerChangeSettingsHandler=s.registerChangeSettingsHandler,n.registerFullScreenHandler=s.registerFullScreenHandler,n.registerOnLoadHandler=s.registerOnLoadHandler,n.registerOnThemeChangeHandler=s.registerOnThemeChangeHandler,n.registerAppButtonClickHandler=s.registerAppButtonClickHandler,n.registerAppButtonHoverHandler=s.registerAppButtonHoverHandler,n.setFrameContext=s.setFrameContext,n.shareDeepLink=s.shareDeepLink;var l=t(8);n.settings=l.settings;var u=t(26);n.tasks=u.tasks;var c=t(11);n.ChildAppWindow=c.ChildAppWindow,n.ParentAppWindow=c.ParentAppWindow;var d=t(12);n.captureImage=d.captureImage,n.File=d.File,n.FileFormat=d.FileFormat,n.selectMedia=d.selectMedia,n.viewImages=d.viewImages,n.Media=d.Media},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(4);!function(e){e.notifyAppLoaded=function(){a.ensureInitialized(),a.sendMessageRequestToParent("appInitialization.appLoaded",[r.version])},e.notifySuccess=function(){a.ensureInitialized(),a.sendMessageRequestToParent("appInitialization.success",[r.version])},e.notifyFailure=function(e){a.ensureInitialized(),a.sendMessageRequestToParent("appInitialization.failure",[e.reason,e.message])},function(e){e.AuthFailed="AuthFailed",e.Timeout="Timeout",e.Other="Other"}(e.FailedReason||(e.FailedReason={}))}(n.appInitialization||(n.appInitialization={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(2);!function(e){var n,t;function i(){l();try{r.GlobalVars.childWindow&&r.GlobalVars.childWindow.close()}finally{r.GlobalVars.childWindow=null,r.GlobalVars.childOrigin=null}}function s(e){n=e,i();var t=n.width||600,a=n.height||400;t=Math.min(t,r.GlobalVars.currentWindow.outerWidth-400),a=Math.min(a,r.GlobalVars.currentWindow.outerHeight-200);var o=document.createElement("a");o.href=n.url;var s=void 0!==r.GlobalVars.currentWindow.screenLeft?r.GlobalVars.currentWindow.screenLeft:r.GlobalVars.currentWindow.screenX,l=void 0!==r.GlobalVars.currentWindow.screenTop?r.GlobalVars.currentWindow.screenTop:r.GlobalVars.currentWindow.screenY;s+=r.GlobalVars.currentWindow.outerWidth/2-t/2,l+=r.GlobalVars.currentWindow.outerHeight/2-a/2,r.GlobalVars.childWindow=r.GlobalVars.currentWindow.open(o.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+l+", left="+s+", width="+t+", height="+a),r.GlobalVars.childWindow?u():c("FailedToOpenWindow")}function l(){t&&(clearInterval(t),t=0),delete r.GlobalVars.handlers.initialize,delete r.GlobalVars.handlers.navigateCrossDomain}function u(){l(),t=r.GlobalVars.currentWindow.setInterval(function(){if(!r.GlobalVars.childWindow||r.GlobalVars.childWindow.closed)c("CancelledByUser");else{var e=r.GlobalVars.childOrigin;try{r.GlobalVars.childOrigin="*",a.sendMessageEventToChild("ping")}finally{r.GlobalVars.childOrigin=e}}},100),r.GlobalVars.handlers.initialize=function(){return[o.FrameContexts.authentication,r.GlobalVars.hostClientType]},r.GlobalVars.handlers.navigateCrossDomain=function(){return!1}}function c(e){try{n&&n.failureCallback&&n.failureCallback(e)}finally{n=null,i()}}function d(e,n,t){if(e){var a=document.createElement("a");a.href=decodeURIComponent(e),a.host&&a.host!==window.location.host&&"outlook.office.com"===a.host&&a.search.indexOf("client_type=Win32_Outlook")>-1&&(n&&"result"===n&&(t&&(a.href=f(a.href,"result",t)),r.GlobalVars.currentWindow.location.assign(f(a.href,"authSuccess",""))),n&&"reason"===n&&(t&&(a.href=f(a.href,"reason",t)),r.GlobalVars.currentWindow.location.assign(f(a.href,"authFailure",""))))}}function f(e,n,t){var a=e.indexOf("#"),r=-1===a?"#":e.substr(a);return r=r+"&"+n+(""!==t?"="+t:""),(e=-1===a?e:e.substr(0,a))+r}r.GlobalVars.handlers["authentication.authenticate.success"]=function(e){try{n&&n.successCallback&&n.successCallback(e)}finally{n=null,i()}},r.GlobalVars.handlers["authentication.authenticate.failure"]=c,e.registerAuthenticationHandlers=function(e){n=e},e.authenticate=function(e){var t=void 0!==e?e:n;if(a.ensureInitialized(o.FrameContexts.content,o.FrameContexts.sidePanel,o.FrameContexts.settings,o.FrameContexts.remove,o.FrameContexts.task),r.GlobalVars.hostClientType===o.HostClientType.desktop||r.GlobalVars.hostClientType===o.HostClientType.android||r.GlobalVars.hostClientType===o.HostClientType.ios||r.GlobalVars.hostClientType===o.HostClientType.rigel){var i=document.createElement("a");i.href=t.url;var l=a.sendMessageRequestToParent("authentication.authenticate",[i.href,t.width,t.height]);r.GlobalVars.callbacks[l]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}}else s(t)},e.getAuthToken=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("authentication.getAuthToken",[e.resources,e.claims,e.silent]);r.GlobalVars.callbacks[n]=function(n,t){n?e.successCallback(t):e.failureCallback(t)}},e.getUser=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("authentication.getUser");r.GlobalVars.callbacks[n]=function(n,t){n?e.successCallback(t):e.failureCallback(t)}},e.notifySuccess=function(e,n){d(n,"result",e),a.ensureInitialized(o.FrameContexts.authentication),a.sendMessageRequestToParent("authentication.authenticate.success",[e]),a.waitForMessageQueue(r.GlobalVars.parentWindow,function(){return setTimeout(function(){return r.GlobalVars.currentWindow.close()},200)})},e.notifyFailure=function(e,n){d(n,"reason",e),a.ensureInitialized(o.FrameContexts.authentication),a.sendMessageRequestToParent("authentication.authenticate.failure",[e]),a.waitForMessageQueue(r.GlobalVars.parentWindow,function(){return setTimeout(function(){return r.GlobalVars.currentWindow.close()},200)})}}(n.authentication||(n.authentication={}))},function(e,n,t){"use strict";var a=this&&this.__rest||function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&(t[a[r]]=e[a[r]])}return t};Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(0),i=t(2),s=t(11);!function(e){e.startTask=function(e,n){r.ensureInitialized(i.FrameContexts.content,i.FrameContexts.sidePanel);var t=r.sendMessageRequestToParent("tasks.startTask",[e]);return o.GlobalVars.callbacks[t]=n,new s.ChildAppWindow},e.updateTask=function(e){r.ensureInitialized(i.FrameContexts.content,i.FrameContexts.sidePanel,i.FrameContexts.task),e.width,e.height;var n=a(e,["width","height"]);if(Object.keys(n).length)throw new Error("updateTask requires a taskInfo argument containing only width and height");r.sendMessageRequestToParent("tasks.updateTask",[e])},e.submitTask=function(e,n){r.ensureInitialized(i.FrameContexts.content,i.FrameContexts.sidePanel,i.FrameContexts.task),r.sendMessageRequestToParent("tasks.completeTask",[e,Array.isArray(n)?n:[n]])}}(n.tasks||(n.tasks={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(12);n.createFile=function(e,n){if(null==e||null==n||e.length<=0)return null;var t,a=1;return e.sort(function(e,n){return e.sequence>n.sequence?1:-1}),e.forEach(function(e){e.sequence==a&&(t=t?new Blob([t,e.file],{type:n}):new Blob([e.file],{type:n}),a++)}),t},n.decodeAttachment=function(e,n){if(null==e||null==n)return null;for(var t=atob(e.chunk),a=new Array(t.length),r=0;r<t.length;r++)a[r]=t.charCodeAt(r);var o=new Uint8Array(a),i=new Blob([o],{type:n});return{sequence:e.chunkSequence,file:i}},n.validateSelectMediaInputs=function(e){return!(null==e||e.maxMediaCount>10)},n.validateGetMediaInputs=function(e,n,t){return null!=e&&null!=n&&n==a.FileFormat.ID&&null!=t},n.validateViewImagesInput=function(e){return!(null==e||e.length<=0||e.length>10)}}])});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/utils.ts
let inputs = {};
let container = document.createElement("div");
container.classList.add("moduleContainer");
function addModule(config) {
    var element = document.createElement("div");
    var button = document.createElement("button");
    button.appendChild(document.createTextNode(config.name));
    button.id = "button-" + config.name;
    element.appendChild(button);
    element.appendChild(document.createElement("br"));
    if (config.inputs) {
        element.appendChild(document.createElement("br"));
        for (var i = 0; i < config.inputs.length; i++) {
            var label = document.createElement("label");
            label.appendChild(document.createTextNode(config.inputs[i].name + ":"));
            element.appendChild(label);
            element.appendChild(document.createElement("br"));
            let input;
            let valueGetter;
            switch (config.inputs[i].type) {
                case "string":
                    input = document.createElement("input");
                    valueGetter = function () {
                        return input.value;
                    };
                    break;
                case "boolean":
                    input = document.createElement("input");
                    input.type = "checkbox";
                    valueGetter = function () {
                        return input.checked;
                    };
                    break;
                case "object":
                    input = document.createElement("textarea");
                    valueGetter = function () {
                        input.style.backgroundColor = "";
                        try {
                            return JSON.parse(input.value);
                        }
                        catch (e) {
                            input.style.backgroundColor = "red";
                            return null;
                        }
                    };
                    break;
            }
            config.inputs[i].valueGetter = valueGetter;
            input.id = "input-" + config.name + "-" + i;
            element.appendChild(input);
            inputs[input.id] = input;
            element.appendChild(document.createElement("br"));
        }
    }
    if (config.hasOutput) {
        var label = document.createElement("label");
        element.appendChild(document.createElement("br"));
        label.appendChild(document.createTextNode("Output:"));
        element.appendChild(label);
        element.appendChild(document.createElement("br"));
        var textarea = document.createElement("textarea");
        textarea.id = "textarea-" + config.name;
        element.appendChild(textarea);
    }
    container.appendChild(element);
    button.addEventListener("click", function () {
        var args = [];
        if (config.inputs) {
            for (var i = 0; i < config.inputs.length; i++) {
                var inputValue = config.inputs[i].valueGetter();
                if (inputValue === null) {
                    return;
                }
                args.push(inputValue);
            }
        }
        if (config.hasOutput) {
            args.push(function (result) {
                if (typeof result !== "string") {
                    result = JSON.stringify(result);
                }
                textarea.value = result;
            });
        }
        config.action.apply(null, args);
    });
}
function restoreState() {
    var stateStr = localStorage.getItem("state");
    if (!stateStr) {
        return;
    }
    var state = JSON.parse(stateStr);
    for (var id in state) {
        inputs[id].value = state[id];
    }
}
function saveState() {
    var state = {};
    for (var id in inputs) {
        state[id] = inputs[id].value;
    }
    localStorage.setItem("state", JSON.stringify(state));
}
function downloadHandler() {
    var input = document.querySelector("#image_uploads");
    var preview = document.querySelector(".fileUploadPreview");
    input.style.opacity = 0;
    input.addEventListener("change", updateImageDisplay);
    function updateImageDisplay() {
        while (preview.firstChild) {
            preview.removeChild(preview.firstChild);
        }
        var curFiles = input.files;
        if (curFiles.length === 0) {
            var para = document.createElement("p");
            para.textContent = "No files currently selected for upload";
            preview.appendChild(para);
        }
        else {
            var list = document.createElement("ol");
            preview.appendChild(list);
            for (var i = 0; i < curFiles.length; i++) {
                var listItem = document.createElement("li");
                var para = document.createElement("p");
                if (validFileType(curFiles[i])) {
                    para.textContent =
                        "File name " +
                            curFiles[i].name +
                            ", file size " +
                            returnFileSize(curFiles[i].size) +
                            ".";
                    var image = document.createElement("img");
                    image.src = window.URL.createObjectURL(curFiles[i]);
                    listItem.appendChild(image);
                    listItem.appendChild(para);
                }
                else {
                    para.textContent =
                        "File name " +
                            curFiles[i].name +
                            ": Not a valid file type. Update your selection.";
                    listItem.appendChild(para);
                }
                list.appendChild(listItem);
            }
        }
    }
    var fileTypes = ["image/jpeg", "image/pjpeg", "image/png"];
    function validFileType(file) {
        for (var i = 0; i < fileTypes.length; i++) {
            if (file.type === fileTypes[i]) {
                return true;
            }
        }
        return false;
    }
    function returnFileSize(number) {
        if (number < 1024) {
            return number + "bytes";
        }
        else if (number >= 1024 && number < 1048576) {
            return (number / 1024).toFixed(1) + "KB";
        }
        else if (number >= 1048576) {
            return (number / 1048576).toFixed(1) + "MB";
        }
    }
}

// EXTERNAL MODULE: ./node_modules/@microsoft/teams-js/dist/MicrosoftTeams.min.js
var MicrosoftTeams_min = __webpack_require__(0);

// CONCATENATED MODULE: ./src/app.ts


const initializeAppModules = () => {
    try {
        var childWindow;
        let totalStates = 0;
        MicrosoftTeams_min["initialize"]();
        MicrosoftTeams_min["appInitialization"].notifyAppLoaded();
        addModule({
            name: "getContext",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["getContext"](output);
            }
        });
        addModule({
            name: "getTabInstances",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["getTabInstances"](output);
            }
        });
        addModule({
            name: "getMRUTabInstances",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["getMruTabInstances"](output);
            }
        });
        addModule({
            name: "navigateCrossDomain",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "url"
                }],
            action: function (url) {
                MicrosoftTeams_min["navigateCrossDomain"](url);
            }
        });
        addModule({
            name: "registerOnThemeChangeHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["registerOnThemeChangeHandler"](output);
            }
        });
        addModule({
            name: "navigateCrossDomain",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "url"
                }],
            action: function (url) {
                MicrosoftTeams_min["navigateCrossDomain"](url);
            }
        });
        addModule({
            name: "registerOnThemeChangeHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["registerOnThemeChangeHandler"](output);
            }
        });
        addModule({
            name: "registerChangeSettingsHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["registerChangeSettingsHandler"](function () {
                    output("Change Settings Event recieved");
                });
            }
        });
        addModule({
            name: "registerAppButtonClickHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["registerAppButtonClickHandler"](function () {
                    output("Click event recieved");
                });
            }
        });
        addModule({
            name: "registerAppButtonHoverHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["registerAppButtonHoverHandler"](function () {
                    const date = new Date();
                    output(`Hover event recieved ${date}`);
                });
            }
        });
        addModule({
            name: "shareDeepLink",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "deepLinkParameters"
                }],
            action: function (deepLinkParameters) {
                MicrosoftTeams_min["shareDeepLink"](deepLinkParameters);
            }
        });
        addModule({
            name: "executeDeepLink",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "deepLink"
                }],
            action: function (deepLink) {
                MicrosoftTeams_min["executeDeepLink"](deepLink);
            }
        });
        addModule({
            name: "authentication.authenticate",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "url"
                }],
            hasOutput: true,
            action: function (url, output) {
                MicrosoftTeams_min["authentication"].authenticate({
                    url: url,
                    successCallback: function (result) {
                        output("Success:" + result);
                    },
                    failureCallback: function (reason) {
                        output("Failure:" + reason);
                        MessageEvent;
                    },
                });
            }
        });
        addModule({
            name: "tasks.startTask and listen for task module messages",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "taskInfo"
                }],
            action: function (taskInfo, output) {
                childWindow = MicrosoftTeams_min["tasks"].startTask(taskInfo);
                childWindow.addEventListener("message", function (message) {
                    output("Message from task module: " + message);
                    childWindow.postMessage("tab received - " + message);
                });
            }
        });
        addModule({
            name: "send message to Child Window(tab to task module)",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "string",
                    name: "message"
                }],
            action: function (message, output) {
                if (childWindow) {
                    childWindow.postMessage(message);
                }
                else {
                    output("child window not available");
                }
            }
        });
        addModule({
            name: "send message to parent Window(task module to tab)",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "string",
                    name: "message"
                }],
            action: function (message, output) {
                var parentWindow = MicrosoftTeams_min["ParentAppWindow"].Instance;
                if (parentWindow) {
                    parentWindow.postMessage(message);
                    output("message sent to parent(tab)");
                }
                else {
                    output("parent window not available");
                }
            }
        });
        addModule({
            name: "register listener for parent message(tab to task module)",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                var parentWindow = MicrosoftTeams_min["ParentAppWindow"].Instance;
                if (parentWindow) {
                    parentWindow.addEventListener("message", function (message) {
                        output("message from tab: " + message);
                    });
                }
                else {
                    output("parent window not available");
                }
            }
        });
        addModule({
            name: "downloadFile ShowNotificationOnly",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "showNotificationParameters"
                }],
            action: function (showNotificationParameters) {
                MicrosoftTeams_min["showNotification"](showNotificationParameters);
            }
        });
        addModule({
            name: "getAuthToken",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "getAuthTokenParameters"
                }],
            action: function (getAuthTokenParameters, output) {
                getAuthTokenParameters.successCallback = (token) => {
                    output("Success: " + token);
                };
                getAuthTokenParameters.failureCallback = (reason) => {
                    output("Failure: " + reason);
                };
                MicrosoftTeams_min["authentication"].getAuthToken(getAuthTokenParameters);
            }
        });
        addModule({
            name: "authentication.notifyFailure",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "reason"
                }],
            action: function (reason) {
                MicrosoftTeams_min["authentication"].notifyFailure(reason);
            }
        });
        addModule({
            name: "authentication.notifySuccess",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "result"
                }],
            action: function (result) {
                MicrosoftTeams_min["authentication"].notifySuccess(result);
            }
        });
        addModule({
            name: "settings.getSettings",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["settings"].getSettings(output);
            }
        });
        addModule({
            name: "settings.registerOnSaveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["settings"].registerOnSaveHandler(function (saveEvent) {
                    window.saveEvent = saveEvent;
                    const configUrl = window.location.href;
                    MicrosoftTeams_min["settings"].setSettings({
                        websiteUrl: configUrl,
                        contentUrl: configUrl,
                        entityId: "tabconfig",
                        suggestedDisplayName: "Test Tab RegisterOnSave"
                    });
                    output("SaveEvent recieved");
                });
            }
        });
        addModule({
            name: "settings.registerOnSaveHandler.notifyFailure",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "reason"
                }],
            action: function (reason) {
                window.saveEvent && window.saveEvent.notifyFailure(reason);
            }
        });
        addModule({
            name: "settings.registerOnSaveHandler.notifySuccess",
            initializedRequired: true,
            action: function () {
                window.saveEvent && window.saveEvent.notifySuccess();
            }
        });
        addModule({
            name: "settings.setSettings",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "settings"
                }],
            hasOutput: true,
            action: function (settings, output) {
                MicrosoftTeams_min["settings"].setSettings(settings);
            }
        });
        addModule({
            name: "settings.setValidityState",
            initializedRequired: true,
            inputs: [{
                    type: "boolean",
                    name: "validityState"
                }],
            action: function (validityState) {
                MicrosoftTeams_min["settings"].setValidityState(validityState);
            }
        });
        addModule({
            name: "settings.registerOnRemoveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["settings"].registerOnRemoveHandler(function (removeEvent) {
                    window.removeEvent = removeEvent;
                    output("RemoveEvent recieved");
                });
            }
        });
        addModule({
            name: "settings.registerOnRemoveHandler.notifyFailure",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "reason"
                }],
            action: function (reason) {
                window.removeEvent && window.removeEvent.notifyFailure(reason);
            }
        });
        addModule({
            name: "settings.registerOnRemoveHandler.notifySuccess",
            initializedRequired: true,
            action: function () {
                window.removeEvent && window.removeEvent.notifySuccess();
            }
        });
        addModule({
            name: "openFilePreview",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "filePreviewParameters"
                }],
            action: function (filePreviewParameters) {
                MicrosoftTeams_min["openFilePreview"](filePreviewParameters);
            }
        });
        addModule({
            name: "task.submitTask",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "result"
                },
                {
                    type: "string",
                    name: "appId"
                }],
            action: function (result, appId) {
                MicrosoftTeams_min["tasks"].submitTask(result, appId);
            }
        });
        addModule({
            name: "tasks.startTask",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "taskInfo"
                }],
            hasOutput: true,
            action: function (taskInfo, output) {
                MicrosoftTeams_min["tasks"].startTask(taskInfo, (error, result) => {
                    if (error) {
                        output("Error: " + error);
                    }
                    else {
                        output("Result: " + result);
                    }
                });
            }
        });
        addModule({
            name: "tasks.updateTask",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "taskInfo"
                }],
            action: function (taskInfo) {
                MicrosoftTeams_min["tasks"].updateTask(taskInfo);
            }
        });
        addModule({
            name: "downloadFile ShowNotificationOnly",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "showNotificationParameters"
                }],
            action: function (showNotificationParameters) {
                MicrosoftTeams_min["showNotification"](showNotificationParameters);
            }
        });
        addModule({
            name: "getAuthToken",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "getAuthTokenParameters"
                }],
            action: function (getAuthTokenParameters, output) {
                getAuthTokenParameters.successCallback = (token) => {
                    output("Success: " + token);
                };
                getAuthTokenParameters.failureCallback = (reason) => {
                    output("Failure: " + reason);
                };
                MicrosoftTeams_min["authentication"].getAuthToken(getAuthTokenParameters);
            }
        });
        addModule({
            name: "getChatMembers",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["getChatMembers"](output);
            }
        });
        addModule({
            name: "getUserJoinedTeams",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min;
                MicrosoftTeams_min["getUserJoinedTeams"](output);
            }
        });
        addModule({
            name: "registerBeforeUnload",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "readyToUnloadDelay"
                }],
            action: function (readyToUnloadDelay) {
                const delay = Number(readyToUnloadDelay);
                MicrosoftTeams_min["registerBeforeUnloadHandler"](function (readyToUnload) {
                    window.readyToUnload = readyToUnload;
                    setTimeout(() => {
                        readyToUnload();
                    }, delay);
                    alert(`beforeUnload recieved; calling readyToUnload in ${delay / 1000} seconds`);
                    return true;
                });
            }
        });
        addModule({
            name: "readyToUnload",
            initializedRequired: true,
            action: function () {
                window.readyToUnload && window.readyToUnload();
            }
        });
        addModule({
            name: "add states",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                totalStates++;
                window.history.pushState({ some: 'state', id: totalStates }, "tab state" + totalStates, '/testTab');
                output("total States: " + totalStates);
                window.addEventListener('popstate', function (event) {
                    if (event.state && event.state.id) {
                        output("onpopstate: back button clicked. total remaining state: " + event.state.id);
                    }
                }, false);
            }
        });
        addModule({
            name: "registerBackButtonHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                output("total States: " + totalStates);
                MicrosoftTeams_min["registerBackButtonHandler"](function () {
                    if (totalStates > 0) {
                        totalStates--;
                        output("back button clicked. total remaining state: " + totalStates);
                        return true;
                    }
                    return false;
                });
            }
        });
        addModule({
            name: "conversations.openConversation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "openConversationRequest"
                }],
            action: function (openConversationRequest, output) {
                openConversationRequest.onStartConversation = (conversationResponse) => {
                    output("Start Conversation Subentity Id " + conversationResponse.subEntityId + " Conversation Id: " + conversationResponse.conversationId + " Entity Id: " + conversationResponse.entityId + " Channel Id: " + conversationResponse.channelId);
                };
                openConversationRequest.onCloseConversation = (conversationResponse) => {
                    output("Start Conversation Subentity Id " + conversationResponse.subEntityId + " Conversation Id: " + conversationResponse.conversationId + " Entity Id: " + conversationResponse.entityId + " Channel Id: " + conversationResponse.channelId);
                };
                try {
                    MicrosoftTeams_min["conversations"].openConversation(openConversationRequest);
                }
                catch (e) {
                    output("Error" + e);
                }
            }
        });
        addModule({
            name: "conversations.closeConversation",
            initializedRequired: true,
            action: function () {
                MicrosoftTeams_min["conversations"].closeConversation();
            }
        });
        addModule({
            name: "captureImage",
            initializedRequired: true,
            hasOutput: true,
            action: (output) => {
                MicrosoftTeams_min["captureImage"]((err, files) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    const file = files[0];
                    let content = "";
                    let len = 20;
                    if (file.content) {
                        len = Math.min(len, file.content.length);
                        content = file.content.substr(0, len);
                    }
                    output("format: " + file.format + ", size: " + file.size + ", mimeType: " + file.mimeType + ", content: " + content);
                });
            }
        });
        addModule({
            name: "selectMedia",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "mediaInputs"
                }],
            action: (mediaInputs, output) => {
                MicrosoftTeams_min["selectMedia"](mediaInputs, (err, medias) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    let message = "";
                    for (let i = 0; i < medias.length; i++) {
                        const media = medias[i];
                        let preview = "";
                        let len = 20;
                        if (media.preview) {
                            len = Math.min(len, media.preview.length);
                            preview = media.preview.substr(0, len);
                        }
                        message += "[format: " + media.format + ", size: " + media.size
                            + ", mimeType: " + media.mimeType + ", content: " + media.content
                            + ", preview: " + preview + "],";
                    }
                    output(message);
                });
            }
        });
        addModule({
            name: "getMedia",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "mediaInputs"
                }],
            action: (mediaInputs, output) => {
                MicrosoftTeams_min["selectMedia"](mediaInputs, (err, medias) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    const media = medias[0];
                    media.getMedia((gmErr, blob) => {
                        if (gmErr) {
                            output(gmErr);
                            return;
                        }
                        var reader = new FileReader();
                        reader.readAsDataURL(blob);
                        reader.onloadend = () => {
                            if (reader.result) {
                                output("Received Blob");
                            }
                        };
                    });
                });
            }
        });
        addModule({
            name: "viewImagesWithId",
            initializedRequired: true,
            hasOutput: true,
            action: (output) => {
                const mediaInputs = {
                    maxMediaCount: 5,
                    mediaType: 1 //microsoftTeams.MediaType.Image
                };
                MicrosoftTeams_min["selectMedia"](mediaInputs, (err, medias) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    const urlList = [];
                    for (let i = 0; i < medias.length; i++) {
                        const media = medias[i];
                        urlList.push({
                            value: media.content,
                            type: 1 //microsoftTeams.ImageUriType.ID
                        });
                    }
                    MicrosoftTeams_min["viewImages"](urlList, (gmErr) => {
                        if (gmErr) {
                            output(gmErr);
                            return;
                        }
                        output("Success");
                    });
                });
            }
        });
        addModule({
            name: "viewImagesWithUrls",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "imageUrls"
                }],
            action: (imageUrls, output) => {
                const urlList = [];
                for (let i = 0; i < imageUrls.length; i++) {
                    const imageUrl = imageUrls[i];
                    urlList.push({
                        value: imageUrl,
                        type: 2 //microsoftTeams.ImageUriType.URL
                    });
                }
                MicrosoftTeams_min["viewImages"](urlList, (err) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output("Success");
                });
            }
        });
        // Get the modal
        var modal = document.getElementById("myModal");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        };
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
        MicrosoftTeams_min["appInitialization"].notifySuccess();
    }
    catch (err) {
        MicrosoftTeams_min["appInitialization"].notifyFailure({ reason: MicrosoftTeams_min["appInitialization"].FailedReason.Other, message: err.message });
    }
};

// CONCATENATED MODULE: ./src/index.ts


(function () {
    initializeAppModules();
    document.body.appendChild(container);
    // Give the DOM a chance to update from the appendChild above
    setTimeout(restoreState, 0);
    window.addEventListener("beforeunload", saveState);
    window.addEventListener("load", downloadHandler);
})();


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map