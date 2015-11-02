angular.module("fcc-stockstream").controller("stockstreamCtrl", ["$scope", "$meteor", 
    function ($scope, $meteor) {
        
        $meteor.subscribe("symbolsList").then(function() {
            $scope.symbolsList = $meteor.object(Stocklist, {name: "stocklist"}).list;
            console.log($scope.symbolsList.list);
        });
        
        
        
        
}]);