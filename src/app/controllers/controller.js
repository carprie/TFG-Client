var myApp = angular.module('App', []);

myApp.controller('H1Controller', ['$scope', function($scope) {
    $scope.index  = ['a', 'a', 'a'];
    $scope.h1 = function(h1) {
        $scope.h1 = [h1, 'a', 'a'];
    };
}]);

