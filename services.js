//custom-service
angularApp.service('mainService', [
  '$log',
  function ($log) {
    this.cityName = 'Sibiu';
  },
]);

angularApp.service('weatherService', [
  '$resource',
  function ($resource) {
    this.getWeather = function (city, days) {
      var weaterAPI = $resource(
        'http://api.openweathermap.org/data/2.5/forecast',
        {
          callback: 'JSON_CALLBACK',
        },
        { get: { method: 'JSONP' } }
      );

      return weaterAPI.get({
        q: city,
        cnt: days,
        appid: '6ef068fef07887c83763f06b58598a26',
      });
    };
  },
]);
