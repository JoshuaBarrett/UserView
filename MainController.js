(function() {
    var module = angular.module("usersViewer");    

    var MainController = function($scope, usersService) {

        var onUsers = function(data) {
            $scope.users = data;
            console.log($scope.users);
        };

        var onError = function(reason) {
            console.log("Failed");
        };

        $scope.resetBalance = function() {
            $scope.users.forEach((user) => user.balance = 0);
        };

        usersService.getUsers().then(onUsers, onError);
        
        $scope.userOrderByField = 'name';
        $scope.userOrderReverseSort = false;
    };

    module.controller("MainController", MainController);

    module.filter('removeSpaces', function () {
        return function(string) {
            if (!angular.isString(string)) {
                return string;
            }
            return string.replace(/[\s]/g, '');
        };
    });

    module.filter('removeCommas', function () {
        return function(string) {
            if (!angular.isString(string)) {
                return string;
            }
            return string.replace(/,/g, '');
        };
    });
})();

