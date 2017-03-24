angular.module('slex.browse', [])

.controller('BrowseController', function ($scope, $window, $location, Auth) {
  $scope.profiles = [];

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.slex', token);
        $location.path('/profile');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.slex', token);
        $location.path('/profile');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
