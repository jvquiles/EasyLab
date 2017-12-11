app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/components/home/homeView.html",
            controllerUrl: "app/components/home/homeController.js"
        })
        .when("/about", {
            templateUrl: "app/components/about/aboutView.html",
            controllerUrl: "app/components/about/aboutController.js"
        })
        .when("/contact", {
            templateUrl: "app/components/contact/contactView.html",
            controllerUrl: "app/components/contact/contactController.js"
        });
});