What is an angular contorller?
  The bridge between the view(HTML) and the angular app(javascript).

What is a controllers purpose?
  Talk to the HTML.

How to create a controller?
  angular.module("").controller("", function() {

    })

How does a controller communicate with the DOM?
  $scope(object) the wiring between a controller and the HTMl

What is double binding?
  When the $scope changes the DOM changes

How does a controller know what part of the html is in its scope?
  ng-controller="name of ctrl"
