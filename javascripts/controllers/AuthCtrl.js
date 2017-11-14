"use strict";

//scope exists in the controller and rootscope exists in the whole application
// $location changes url
// $scope.$apply once you get to here help it along - basically a force reload of the dom
app.controller("AuthCtrl", function($location, $rootScope, $scope, AuthService){
		$scope.authenticate = () => {
			AuthService.authenticateGoogle().then((result) => {
				$rootScope.uid = result.user.uid;
				$scope.$apply(() => {
					$location.url("/search");
				});
				
			}).catch((err) => {
				console.log("error in authenticateGoogle", err);
			});
	};
});