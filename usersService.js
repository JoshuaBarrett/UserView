(function() {
    var userService = function($http) {
        
        var getUsers = function()
        {
            return $http.get("users.json")
                .then(function(response) {
                    return response.data;
                });
        }
        
        return {
            getUsers: getUsers
        };
    }
    
    var module = angular.module("usersViewer");
    module.factory("usersService", userService);
})();