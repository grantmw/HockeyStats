app.controller('MainController', ['$scope', '$http', function($scope, $http) {
  
  $scope.ovechkin = {}
  $scope.backstrom = {}
  $scope.getPlayers = function() {
    $http.get('/players').success(function(response){
    	$scope.ovechkin = response[0]
    	$scope.backstrom = response[1]
    });
  };
  $scope.getPlayers();
  this.slide = 'ovechkin1'

 


}]);