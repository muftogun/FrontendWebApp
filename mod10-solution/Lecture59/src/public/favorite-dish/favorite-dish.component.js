(function () {
    "use strict";

    angular.module('public')
        .component('faveDish', {
            templateUrl: 'src/public/favorite-dish/favorite-dish.html',
            bindings: {
                menuItem: '<'
            },
            controller: FaveDishController
        });


    FaveDishController.$inject = ['ApiPath'];
    function FaveDishController(ApiPath) {
        var $ctrl = this;
        $ctrl.basePath = ApiPath;
    }

})();
