// JavaScript source code
(function () {
    'use strict';

    angular.module('NarrowItDown', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                myTitle: '@title',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService', '$http'];
    function NarrowItDownController(MenuSearchService) {
        var list = this;

        list.searchMenu = function (searchTerm) {
            MenuSearchService.getMatchedMenuItems(searchTerm).then(
                function (foundItems) {
                    list.found = foundItems;
                    list.title = "Menu Items Found" + " (" + list.found.length + " items)"
                }
            );
        }

        list.title = "Menu Items Found";

        list.removeItem = function (index) {
            MenuSearchService.removeItem(index);
            list.title = "Menu Items Found" + " (" + list.found.length + " items)"
        }
    }

    function MenuSearchService($http) {
        var service = this;
        var foundItems = [];

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                mathod: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            }).then(function (result) {
                foundItems = [];
                angular.forEach(result.data.menu_items, function (value, key) {
                    if (searchTerm &&
                        value.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                        foundItems.push(value);
                    }
                })

                return foundItems;
            })
        }

        service.removeItem = function (index) {
            foundItems.splice(index, 1);
        }
    }

})();