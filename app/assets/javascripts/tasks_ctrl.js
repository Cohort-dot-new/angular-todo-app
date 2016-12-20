/* global angular */

(function() {
  angular.module("app").controller("tasksCtrl", function($scope) {
    $scope.task1 = "Take out the garbage";
    $scope.task2 = "Clean my boots";
    $scope.task3 = "Shovel the snow";

    // $scope.message = "Hello!";
  });
})();
