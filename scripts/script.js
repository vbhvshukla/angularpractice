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
    // var employees = [
    //   {
    //     firstName: "Vaibhav",
    //     lastName: "Shukla",
    //     age: "12",
    //   },
    //   {
    //     firstName: "Ben",
    //     lastName: "Hastings",
    //     age: "32",
    //   },
    //   {
    //     firstName: "Sara",
    //     lastName: "Paul",
    //     age: "44",
    //   },
    //   {
    //     firstName: "Mark",
    //     lastName: "Holland",
    //     age: "65",
    //   },
    //   {
    //     firstName: "Pam",
    //     lastName: "Macintosh",
    //     age: "76",
    //   },
    //   {
    //     firstName: "Todd",
    //     lastName: "Barber",
    //     age: "24",
    //   },
    // ];
    // var countries = [
    //     {
    //         name : "UK",
    //         cities : ["London","Birmingham","Manchester"]
    //     },
    //     {
    //         name : "USA",
    //         cities : ["Los Angeles","Chicago","Houston"]
    //     },
    //     {
    //         name : "India",
    //         cities : ["Hyderabad","Chennai","Mumbai"]
    //     }

    // ]
    // var languages = [
    //     {
    //         name:"C#",
    //         likes:"0",
    //         dislikes:"0"
    //     },
    //     {
    //         name:"ASP.net",
    //         likes:"0",
    //         dislikes:"0"
    //     },
    //     {
    //         name:"CPP",
    //         likes:"0",
    //         dislikes:"0"
    //     },
    //     {
    //         name:"Python",
    //         likes:"0",
    //         dislikes:"0"
    //     }
    // ]

    // $scope.message = "Hello!";
    // $scope.employees = employees;
    // $scope.countries = countries;
    // $scope.languages = languages;
    // $scope.clickLike = function(language){
    //     language.likes++;
    // }
    // $scope.clickDislike = function(language){
    //     language.dislikes--;
    // }
    var employees = [
      {
        name: "Ben",
        dateOfBirth: new Date("November 23, 1980"),
        gender: 1,
        salary: "55000.788",
      },
      {
        name: "Anna",
        dateOfBirth: new Date("March 15, 1990"),
        gender: 2,
        salary: "62000.500",
      },
      {
        name: "John",
        dateOfBirth: new Date("July 10, 1985"),
        gender: 1,
        salary: "48000.250",
      },
      {
        name: "Emma",
        dateOfBirth: new Date("December 5, 1992"),
        gender: 2,
        salary: "71000.125",
      },
      {
        name: "Michael",
        dateOfBirth: new Date("August 22, 1978"),
        gender: 3,
        salary: "83000.900",
      },
    ];
    $scope.employees = employees;
    $scope.sorttby = "name";
    $scope.rowLimit = 5;
    $scope.search = function (item) {
      if ($scope.searchText == undefined) {
        return true;
      } else {
        if (
          item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) !=
            -1 ||
          item.gender.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
        ) {
          return true;
        }
      }
    };
  });
