var MainCtrl = function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
};

angular.module('unitTestingWorkshopApp').controller('MainCtrl', ['$scope', MainCtrl]);