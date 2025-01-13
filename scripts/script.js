var myApp = angular
  .module("myModule", [])
  .controller(
    "myController",
    function ($scope, $http, $location, $anchorScroll) {
      $scope.data = "";
      (() => {
        $http.get("https://api.github.com/users/vbhvshukla").then((res) => {
          $scope.data = res.data;
        
        });
      })();
      
      $scope.scrollTo = function(scrollLocation) {
        $location.hash(scrollLocation);
        $anchorScroll();
        // Now you can use $scope.data if needed
        console.log($scope.data);
      };
    }
  );
