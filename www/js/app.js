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

app.controller('AteBallController', ['$scope', '$ionicPlatform', '$cordovaDeviceMotion', function($scope, $ionicPlatform, $cordovaDeviceMotion){
  $scope.accel = 555;

  $scope.getAccel = function() {
    $scope.accel = 5555;

    $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
      $scope.accel = 55555;
      var X = result.x;
      var Y = result.y;
      var Z = result.z;
      var timeStamp = result.timestamp;
      $scope.$apply(function(){
        $scope.accel = Math.abs(X + Y + Z);
      });
    }, function(err) {
      // An error occurred. Show a message to the user
      $scope.$apply(function(){
        $scope.accel = -666;
      });
    });
  };

  $scope.getAccel();
}]);
