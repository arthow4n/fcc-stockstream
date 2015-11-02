angular.module("fcc-stockstream").config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);
    
    $stateProvider
        .state("stockstreamMain", {
            url: "/stockstream",
            templateUrl: "client/stockstream/views/stockstream.ng.html",
            controller: "stockstreamCtrl"
        });
    
    $urlRouterProvider.otherwise("/stockstream");
    
});