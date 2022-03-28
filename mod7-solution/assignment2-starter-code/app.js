// JavaScript source code
(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .filter('angularDollars', AngularDollarsFilter)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyList = this;

        toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

        toBuyList.buyItem = function (item, itemIndex) {
            ShoppingListCheckOffService.removeFromToBuy(itemIndex);
            ShoppingListCheckOffService.addToBought(item);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtList = this;

        boughtList.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var itemsBought = [];
        var itemsToBuy = [{ name: "cookies", quantity: 10, pricePerItem: 2 },
        { name: "apples", quantity: 5, pricePerItem: 3 },
        { name: "bananas", quantity: 15, pricePerItem: 1 },
        { name: "bagels", quantity: 3, pricePerItem: 4 },
        { name: "bottles of juice", quantity: 2, pricePerItem: 7.50 }];

        service.removeFromToBuy = function (itemIndex) {
            itemsToBuy.splice(itemIndex, 1);
        };

        service.addToBought = function (item) {
            var item = {
                name: item.name,
                quantity: item.quantity,
                pricePerItem: item.pricePerItem
            };

            itemsBought.push(item);
        }

        service.getToBuyItems = function () {
            return itemsToBuy;
        }

        service.getBoughtItems = function () {
            return itemsBought;
        }
    }

    function AngularDollarsFilter() {
        return function (input) {
            return '$$$' + parseFloat(input).toFixed(2);
        }
    }

})();