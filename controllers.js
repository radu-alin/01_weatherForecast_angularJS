//controllers
angularApp.controller('homeController', [
  '$scope',
  '$location',
  'mainService',
  function ($scope, $location, mainService) {
    $scope.cityName = mainService.cityName;

    $scope.$watch('cityName', function () {
      mainService.cityName = $scope.cityName;
    });

    $scope.submit = function () {
      $location.path('/forecast');
    };
  },
]);

angularApp.controller('forecastController', [
  '$scope',
  '$routeParams',
  'mainService',
  'weatherService',
  function ($scope, $routeParams, mainService, weatherService) {
    $scope.cityName = mainService.cityName;
    $scope.days = +$routeParams.days || 8;

    $scope.weatherResult = weatherService.getWeather($scope.cityName, $scope.days);

    $scope.convertToCelsius = function (degK) {
      return Math.round(degK - 273.15);
    };

    $scope.convertToDate = function (date) {
      return new Date(date * 1000);
    };
  },
]);
