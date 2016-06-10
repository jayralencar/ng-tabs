'use strict';
/**
*  Module ng tabs
*
* To build tab based apps in angularJS
*/
var ngTabs = angular.module('ng.tabs',[]);

ngTabs.provider('$Tabs',function(){
	this.tabs = [];
	this.routes = [];

	this.tab = function(data){
		if(!data.controller){
			throw "Please, inform a controller!";
		}
		if(!data.templateUrl){
			throw "Please, inform a templateUrl!";
		}
		data.name = data.name || (new Date()).getTime();
		data.title = data.title || "My tab";
		this.tabs.push(data);
		return this;
	}

	this.$get = function(){
		return {};
	}

	return this;
});

ngTabs.directive('navTabs',function (){
	return{
		restrict: "AE",
		link: function(scope, elemt, attrs){
			var tabsClass = attrs.tabsClass || '';
		}
	}
})

ngTabs.directive('navContent', function (){
	return{
		restrict: "AE",
		link: function(scope, elemt, attrs){

		}
	}
});
