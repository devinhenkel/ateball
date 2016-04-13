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

  //Start Watching method
  $scope.startWatching = function() {
    $scope.options = { frequency: 100 };

    // Device motion configuration
    $scope.watch = $cordovaDeviceMotion.watchAcceleration($scope.options);

        // Device motion initilaization
        $scope.watch.then(null, function(error) {
            console.log(error);
            $scope.accel = 666;
        },function(result) {
            $scope.accel = 5555;
            // Set current data
            $scope.measurements.x = result.x;
            $scope.measurements.y = result.y;
            $scope.measurements.z = result.z;
            $scope.measurements.timestamp = result.timestamp;

            // Detecta shake
            $scope.accel = $scope.measurements.x;

        });
    };

  $scope.startWatching();
}]);
