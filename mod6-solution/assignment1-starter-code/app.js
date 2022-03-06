// JavaScript source code
(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.message = "";
        $scope.lunchItems = "";
        $scope.fontBorderColor = "";

        $scope.checkAmount = function () {
            var arrItems = $scope.lunchItems.split(',');
            arrItems = arrItems.filter(x => x && !x.match(/^\s+$/));

            console.log(arrItems);

            if ($scope.lunchItems < 1) {
                $scope.message = "Please enter data first";
                $scope.fontBorderColor = "red";
            } else if (arrItems.length > 3) {
                $scope.message = "Too much!"
                $scope.fontBorderColor = "green";
            } else {
                $scope.message = "Enjoy!"
                $scope.fontBorderColor = "green";
            }
        }


    };
})();