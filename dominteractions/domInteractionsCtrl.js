angular.module("domIntApp").controller("domIntCtrl", function($scope, $timeout){
  $scope.name = "Georgen";
  $scope.search= {
    name: ""
  };
  $scope.style = {
    background: "yellow"
  };

  $scope.clicker = function() {
    
    $scope.style.background = "aqua"
  };

  var listOfPeople = [
    {
      name: "Jeff",
      age: 34
    },
    {
      name: "Greg",
      age: 24
    },
    {
      name: "Alice",
      age: 19
    },
    {
      name: "Brianna",
      age: 46
    },
  ];
  $scope.people = listOfPeople;
});
