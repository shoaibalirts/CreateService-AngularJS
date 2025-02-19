const myApp = angular.module("myApp", ['ngRoute']);
myApp.config(function($routeProvider,$locationProvider){
  $routeProvider
  .when('/',{
    templateUrl:'pages/main.html',
    controller: 'mainController'
  })
  .when('/first',{
    templateUrl:'pages/first.html',
    controller: 'firstController'
  })
  .when('/second', {
    templateUrl:'pages/second.html',
    controller: 'secondController'
  })
  .when('/third', {
    templateUrl:'pages/third.html',
    controller: 'thirdController'
  })
  .when('/third/:num', {
    templateUrl:'pages/third.html',
    controller: 'thirdController'
  })
  $locationProvider.hashPrefix('');

  
});

myApp.service("nameService", function(){
  var self = this;
  this.name="Shoaib Ali";
  this.nameLength = function(){
    return self.name.length;
  }
});
myApp.controller("mainController",['$scope', '$log', function($scope, $log){
  $scope.message = "Main Controller of this App";
}]);

myApp.controller("firstController",['$scope', '$log', function($scope, $log){
  $scope.message = "First Controller of this App";
}]);

myApp.controller("secondController",['$scope', '$log', 'nameService', function($scope, $log, nameService){
  $scope.message = "Second Controller of this App";
  $log.log(nameService.name);
  $log.log(nameService.nameLength());
  $scope.name = nameService.name;
  $scope.$watch('name',function(){
    nameService.name = $scope.name;
  });

  $scope.nameCharacters = nameService.nameLength();
}]);

myApp.controller("thirdController",['$scope', '$log','nameService', '$routeParams', function($scope, $log, nameService, $routeParams){
  $scope.message = "Third Controller of this App";
  $scope.name = nameService.name;
  $scope.$watch('name',function(){
    nameService.name = $scope.name;
  });
  $scope.myPar = $routeParams.num || 1;
}]);

/*
const myApp = angular.module("myApp", []);
myApp.controller("mainController", [
  "$scope",
  "$filter",
  "$timeout",
  function ($scope, $filter, $timeout) {
    $scope.handle = "";
    $scope.lowerCaseHandle = function () {
      return $filter("lowercase")($scope.handle);
    };
    $scope.characters=5;
    // $scope.$watch("handle", function (oldVal, newVal) {
    //   console.log("watched!");
    //   console.log("Old: "+ oldVal);
    //   console.log("New: "+ newVal);
    // });

    // $timeout(function () {
      
    //     $scope.handle = "newtwitterhandle";
    //     console.log("Scope Changed!");
      
    // }, 3000);
  },
]);
*/