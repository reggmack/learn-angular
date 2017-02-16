var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.service('nameService', function() {
    
    var self = this;
    this.name = 'John Doe';
    
    this.nameLength = function() {
        return self.name.length;
    }
});

myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {
    
    $scope.person = {
        name: 'John Doe',
        address: '555 Main St., New York NY 11111'
    }
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {
    

    
}]);

myApp.directive("searchResults", function() {
    return {
        
        restrict: 'AECM',
        templateUrl: 'directives/searchresults.html',
        replace: true,
        scope: {
            personObject: "="
        }
    }
});
