//routes
angularApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './pages/homePage.html',
      controller: 'homeController',
    })
    .when('/forecast', {
      templateUrl: './pages/forecastPage.html',
      controller: 'forecastController',
    })
    .when('/forecast/:days', {
      templateUrl: './pages/forecastPage.html',
      controller: 'forecastController',
    });
});
