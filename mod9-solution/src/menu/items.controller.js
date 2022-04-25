(function () {
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);

// Version with resolving to 1 item based on $stateParams in route config
ItemsController.$inject = ['$stateParams', 'items'];
function ItemsController($stateParams, items) {
    var itemsList = this;

    itemsList.items = items.menu_items;
    itemsList.category = $stateParams.name;
}

})();
