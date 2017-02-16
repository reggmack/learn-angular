var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    
    $scope.name = 'Mack';
    
    $timeout(function() {
       $scope.name = 'Everybody'; 
    }, 3000);
    
}]);