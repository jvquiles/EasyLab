app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/components/home/homeView.html",
            controller: "homeController"
        })
        .when("/about", {
            templateUrl: "app/components/about/aboutView.html",
            controller: "aboutController"
        })
        .when("/contact", {
            templateUrl: "app/components/contact/contactView.html",
            controller: "contactController"
        });
    $locationProvider.html5Mode(true);
}]);