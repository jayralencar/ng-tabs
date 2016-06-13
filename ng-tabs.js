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

ngTabs.controller('ngTabsController', function($scope, $Tabs){
	$scope.initTabs = function(){
		console.log($Tabs.tabs)
		$scope.tabs = $Tabs.tabs;
	}
});

ngTabs.directive('navTabs',function (){
	return{
		restrict: "AE",
		controller: "ngTabsController",
		template: '<ul ng-init="initTabs()" class="nav nav-tabs" role="tablist"> <li ng-repeat="tab in tabs">tab.name</li> </ul>',
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
