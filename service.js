var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {

  this.getUsers = function() {
    var deferred = $q.defer();
    $http({
        method: 'GET',
        url: 'http://reqr.es/api/users?page=1'
    }).then(function(response){
      var parsedResponse = response.data.data
      deferred.resolve(parsedResponse)
    })
    return deferred.promise;
  }

});
