var myApp = angular
  .module("myModule", ["ui.router"])
  .config(function (
    $stateProvider,
    $urlMatcherFactoryProvider,
    $urlRouterProvider,
    $locationProvider
  ) {
    $locationProvider.html5Mode(true)
    $urlMatcherFactoryProvider.caseInsensitive(true); //this ensures case senstivity is not here in url
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "/components/home.html",
        controller: "homeController",
        controllerAs: "homeCtrl",
        data: {
          customData1: "Custom Data 1",
          customData2: "Custom Data 2",
        },
      })
      .state("courses", {
        url: "/courses",
        templateUrl: "/components/courses.html",
        controller: "coursesController",
        controllerAs: "coursesCtrl",
        data :{
          coursesCustomData :"Courses custom data"
        }
      })
      .state("students", {
        url: "/students",
        templateUrl: "/components/students.html",
        controller: "studentsController",
        controllerAs: "studentsCtrl",
      })
      .state("contact", {
        url: "/contact",
        templateUrl: "/components/contact.html",
        // controller: "contactController",
        // controllerAs: "contactCtrl",
      });
  })
  .controller("homeController", function ($scope, $state) {
    $scope.message = "Home Page";
    //For custom data
    $scope.customData = $state.current.data.customData1;
    //For another url's custom data
    $scope.coursesData = $state.get("courses").data.courseCustomData;
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
  .controller("studentDetailsController", function ($scope, $stateParams) {
    $scope.studentId = $stateParams.id;
  })
  .controller("mainController", function () {
    this.message = "Hello Angular";
  });
