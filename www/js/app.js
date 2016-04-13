var app = angular.module('ateball', ['ionic', 'ngCordova']);

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

app.controller('AteBallController', ['$scope', function($scope){
  $scope.accel = 'poop';

  $ionicPlatform.ready(function() {
    $scope.accel = 2;
    var options = { frequency: 100 };
    var watch = $cordovaDeviceMotion.watchAcceleration(options)
    .then(
      function(result) {
        $scope.accel = 3;
        var X = result.x;
        var Y = result.y;
        var Z = result.z;
        var timeStamp = result.timestamp;
        $scope.$apply(function(){
          $scope.accel = Math.abs(X + Y + Z);
        },
        function(error) {
        // An error occurred
          $scope.accel = error;
        }
      );
      });
  });



}]);
