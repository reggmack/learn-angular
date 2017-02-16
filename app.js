var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
    
    $scope.alertClick = function() {
        alert("Clicked!")
    };
    
    $scope.name = 'John Doe';
    
}]); //end App