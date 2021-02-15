//controllers
angularApp.controller('homeController', [
  '$scope',
  '$log',
  '$location',
  'mainService',
  function ($scope, $log, $location, mainService) {
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
  '$log',
  '$resource',
  '$routeParams',
  'mainService',
  function ($scope, $log, $resource, $routeParams, mainService) {
    $scope.cityName = mainService.cityName;
    $scope.days = +$routeParams.days || 8;

    $scope.weaterAPI = $resource(
      'http://api.openweathermap.org/data/2.5/forecast',
      {
        callback: 'JSON_CALLBACK',
      },
      { get: { method: 'JSONP' } }
    );

    $scope.weatherResult = $scope.weaterAPI.get({
      q: $scope.cityName,
      cnt: $scope.days,
      appid: '6ef068fef07887c83763f06b58598a26',
    });

    $scope.convertToCelsius = function (degK) {
      return Math.round(degK - 273.15);
    };

    $scope.convertToDate = function (date) {
      return new Date(date * 1000);
    };
  },
]);
