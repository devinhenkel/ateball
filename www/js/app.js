var app = angular.module('ateball', ['ionic', 'ngCordova']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('AteBallController', ['$scope', '$ionicPlatform', '$cordovaDeviceMotion', function($scope, $ionicPlatform, $cordovaDeviceMotion){
  $scope.accel = 1.00;

/*  $ionicPlatform.ready(function() {
    $scope.accel = 2;
    var options = { frequency: 100 };
    $scope.watch = $cordovaDeviceMotion.watchAcceleration(options);
    $scope.watch.then(
      null,
      function(error) {
      // An error occurred
      },
      function(result) {
        $scope.accel = 3;
        var X = result.x;
        var Y = result.y;
        var Z = result.z;
        var timeStamp = result.timestamp;
        $scope.$apply(function(){
          //$scope.accel = Math.abs(X + Y + Z);
        });
      });
  });*/

}]);
