//directives
angularApp.directive('weatherRaport', [
  '$log',
  function ($log) {
    return {
      restrict: 'E',
      templateUrl: './directives/weatherRaportDirective.html',
      replace: true,
      scope: {
        infoDate: '@',
        infoTemp: '@',
        convertToStandard: '&',
        convertToDate: '&',
        dateFormat: '@',
      },
    };
  },
]);
