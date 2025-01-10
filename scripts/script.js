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
  .controller("myController", function ($scope) {
    var employees = [
      {
        firstName: "Vaibhav",
        lastName: "Shukla",
        age: "12",
      },
      {
        firstName: "Ben",
        lastName: "Hastings",
        age: "32",
      },
      {
        firstName: "Sara",
        lastName: "Paul",
        age: "44",
      },
      {
        firstName: "Mark",
        lastName: "Holland",
        age: "65",
      },
      {
        firstName: "Pam",
        lastName: "Macintosh",
        age: "76",
      },
      {
        firstName: "Todd",
        lastName: "Barber",
        age: "24",
      },
    ];
    var countries = [
        {
            name : "UK",
            cities : ["London","Birmingham","Manchester"]
        },
        {
            name : "USA",
            cities : ["Los Angeles","Chicago","Houston"]
        },
        {
            name : "India",
            cities : ["Hyderabad","Chennai","Mumbai"]
        }

    ]
    $scope.message = "Hello!";
    $scope.employees = employees;
    $scope.countries = countries;
  });
