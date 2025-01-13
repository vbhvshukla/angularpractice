// var myApp = angular.module("myModule", []);

// myApp.controller("myController", function ($scope) {
//     var employee = {
//         firstName : "Vaibhav",
//         lastName : "Shukla",
//         age : "9696"
//     }
//     $scope.message = "Hello!";
//     $scope.employee = employee;
// });

//Method chaining
var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope, stringService) {
    $scope.transformString = function(input){
        $scope.output = stringService.processString(input);
    }
  });
