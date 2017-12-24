var app = angular.module('EasyLabApp', ['ngRoute']);

var homeController = app.controller('homeController', function ($scope) {
    $scope.message = "Home";
});

var aboutController = app.controller('aboutController', function ($scope) {
    $scope.message = "About";
});

var contactController = app.controller('contactController', function ($scope) {
    $scope.message = "Contact";
});