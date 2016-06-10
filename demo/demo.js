var app = angular.module('app_test',['ng.tabs']);

app.config(function($TabsProvider){
	$TabsProvider.tab({
		controller:"Controller",
		templateUrl:"test.html"
	}).tab({
		controller:"Controller",
		templateUrl:"test.html"
	})
});

app.controller('Controller', ['$scope', function($scope){
	$scope.init = function(){
		$scope.message = "Teste";
	}
}])