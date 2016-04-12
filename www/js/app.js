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
	$scope.accel = 0.0;

	$scope.ask = function() {
		$scope.answered = false;
		$scope.prediction = "Reading the tea leaves...";
		$timeout(function(){
			$scope.prediction = predictionList[Math.floor(Math.random()*predictionList.length)];
			$scope.answered = true;
		}, 1500);
	};

	// watch Acceleration
  var options = { frequency: 1000 };

  document.addEventListener("deviceready", function () {

  var watch = $cordovaDeviceMotion.watchAcceleration(options);
	$scope.accel = 5;
  watch.then(
    null,
    function(error) {
	    $scope.accel = 10;
    },
    function(result) {
      var X = result.x;
      var Y = result.y;
      var Z = result.z;
      var timeStamp = result.timestamp;
			$scope.$apply(function(){
				$scope.accel=15;
			});
  });

});
});
