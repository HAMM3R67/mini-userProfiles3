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
    
  // Rather than creating your own promise you can just piggyBack off of the API with the below code,
  // this method allows you to not have to worry about handling errors that occur when
    
  //  $http.get('http://reqr.es/api/users?page=1')
  //    .then(function(response){
  //      return response.data.data
  //  })
  
  //return $q(function(resolve, reject){
  //  $.ajax({
  //    method: 'GET'
  //    url: 'http://reqr.es/api/users?page=1'
  // })
    
  }

});

  