app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/components/home/homeView.html",
            controller: "homeController"
        })
        .when("/tomato", {
            template: "<h1>Tomato</h1><p>Tomatoes contain around 95% water.</p>"
        })
        .when("/orange", {
            template: "app/components/home/homeView.html",
            controller: "homeController"
        });
});