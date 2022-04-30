(function () {
    "use strict";

    angular.module('common')
        .service('UserService', UserService);


    UserService.$inject = ['$http', 'ApiPath'];
    function UserService($http, ApiPath) {
        var service = this;

        var user = {};

        service.getShortName = function (dishName) {
            return $http.get(ApiPath + '/menu_items/' + dishName + '.json').then(function (response) {
                return response.data;
            });
        };

        service.saveUser = function (userInfo) {
            user.firstName = userInfo.firstname;
            user.lastName = userInfo.lastname;
            user.email = userInfo.email;
            user.phone = userInfo.phone;
            user.faveDish = userInfo.menuItem;
        }

        service.getUserInfo = function () {
            return user;
        }

    }



})();
