// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var e=[].slice.call(arguments);typeof console.log=="object"?log.apply.call(console.log,console,e):console.log.apply(console,e)}};(function(e){function t(){}for(var n="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),r;r=n.pop();)e[r]=e[r]||t})(function(){try{console.log();return window.console}catch(e){return window.console={}}}());