/* global angular */

(function() {
  angular.module("app").controller("tasksCtrl", function($scope) {
    $scope.tasks = [
      "Take out the garbage",
      "Clean my boots",
      "Shovel the snow"
    ];

    $scope.addTask = function(inputTask) {
      if (inputTask !== '' && inputTask !== undefined) {
        $scope.tasks.push(inputTask);
        $scope.newTask = '';
      }
    };
  });
})();
