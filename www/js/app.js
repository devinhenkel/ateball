var app = angular.module('ateball', ['ionic', 'ngCordova']);

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
});


app.controller('PredictionController', function ($scope, $timeout, $cordovaDeviceMotion) {

	var predictionList = [
		"Signs point to yes",
		"Yes",
		"Reply hazy, try again",
		"Without a doubt",
		"My sources say no",
		"As I see it, yes",
		"You may rely on it",
		"Concentrate and ask again",
		"Outlook not so good",
		"It is decidedly so",
		"Better not tell you now",
		"Very doubtful",
		"Yes - definitely",
		"It is certain",
		"Cannot predict now",
		"Most likely",
		"Ask again later",
		"My reply is no",
		"Outlook good",
		"Don't count on it"
	];

	$scope.prediction = "Tap 8ball for an answer";
	$scope.answered = true;
	$scope.accel = 0.1;

	$scope.ask = function() {
		$scope.answered = false;
		$scope.prediction = "Reading the tea leaves...";
		$timeout(function(){
			$scope.prediction = predictionList[Math.floor(Math.random()*predictionList.length)];
			$scope.answered = true;
		}, 1500);
	};



  // watch Acceleration
  var options = { frequency: 100 };

  $scope.accelCheck = document.addEventListener("deviceready", function () {
		//$scope.accel = -6.6;

    watch = $cordovaDeviceMotion.watchAcceleration(options);
    watch.then(
      null,
      function(error) {
      // An error occurred
      },
      $scope.$apply(function(result) {
        var X = result.x;
        var Y = result.y;
        var Z = result.z;
        var timeStamp = result.timestamp;

				$scope.accel = 14;
    }));


    watch.clearWatch();
    // OR
    $cordovaDeviceMotion.clearWatch(watch)
      .then(function(result) {
        // success
        }, function (error) {
        // error
      });

  }, false);

});
