(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['UserService'];
    function SignUpController(UserService) {
        var $ctrl = this;

        $ctrl.submit = function () {
            UserService.saveUser($ctrl.user);
            $ctrl.completed = true;
        }

        $ctrl.validateDish = function () {
            if ($ctrl.user.dish) {
                UserService.getShortName($ctrl.user.dish)
                    .then(function (data) {
                        if (data) {
                            $ctrl.user.dishValid = true;
                            $ctrl.user.menuItem = data;
                        }
                    })
                    .catch(function (data) {
                        $ctrl.user.dishValid = false;
                    });
            }
        }
    }

})();
