angular.module("fcc-stockstream").controller("stockstreamCtrl", ["$scope", "$meteor", 
    function ($scope, $meteor) {
        
        $meteor.subscribe("symbolsList").then(function() {
            $scope.symbols = $meteor.collection(Symbols);
        });
        
        
        $scope.addSymbol = function (symbol) {
            Symbols.insert({name: symbol});
        };
        
        $scope.removeSymbol = function (symbol) {
            Symbols.remove({_id: symbol._id});
        };
        
}]);