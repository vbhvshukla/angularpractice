var myApp = angular
  .module("myModule", ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "../components/home.html",
        controller: "homeController",
      })
      .when("/courses", {
        templateUrl: "../components/courses.html",
        controller: "coursesController",
      })
      .when("/students", {
        templateUrl: "../components/students.html",
        controller: "studentsController",
      })
      .when("/students/:id", {
        templateUrl: "../components/studentDetails.html",
        controller: "studentsDetailsController",
      })
      .otherwise({
        redirectTo: "/home"
      });
      // $locationProvider.html5Mode(true);
  })
  .controller("homeController", function ($scope) {
    $scope.message = "Home Page";
  })
  .controller("coursesController", function ($scope) {
    $scope.courses = ["C#", "VB.NET", "CPP", "ASP.NET"];
  })
  .controller("studentsController", function ($scope) {
    $scope.students = [
      {
        id: 1,
        name: "John Doe",
        gender: "Male",
        city: "New York",
      },
      {
        id: 2,
        name: "Jane Smith",
        gender: "Female",
        city: "Los Angeles",
      },
      {
        id: 3,
        name: "Michael Johnson",
        gender: "Male",
        city: "Chicago",
      },
      {
        id: 4,
        name: "Emily Davis",
        gender: "Female",
        city: "Houston",
      },
      {
        id: 5,
        name: "Chris Lee",
        gender: "Male",
        city: "San Francisco",
      },
      {
        id: 6,
        name: "Sophia Martinez",
        gender: "Female",
        city: "Miami",
      },
    ];
  })
  .controller("studentDetailsController",function($scope,$routeParams){
    $scope.studentId = $routeParams.id;
  })

  
