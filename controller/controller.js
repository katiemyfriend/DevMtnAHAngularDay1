angular.module("ctrlApp").controller("ctrl", function($scope, $timeout) {
  $scope.name = "Frederick";

  $timeout(function(){
    $scope.name = "Jeeves";
  }, 2000);


});
