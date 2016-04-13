var app = angular.module('ateball', ['ionic', 'ngCordova']);
var acceltemp = 0;

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('AteBallController', ['$scope', '$ionicPlatform', function($scope, $ionicPlatform){
  $scope.accel = 555;

  $scope.getAccel = function() {
    $scope.accel = 5555;
    var options = { frequency: 100 };
  };

  $scope.getAccel();
}]);
