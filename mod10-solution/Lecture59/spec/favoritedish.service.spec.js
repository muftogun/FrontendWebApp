describe('favoritedish', function () {

    var userService;
    var $httpBackend;
    var ApiBasePath;

    beforeEach(function () {
        module('common');

        inject(function ($injector) {
            userService = $injector.get('UserService');
            $httpBackend = $injector.get('$httpBackend');
            ApiBasePath = $injector.get('ApiPath');
        });
    });

    it('should return A1 menu item', function () {
        $httpBackend.whenGET(ApiBasePath + '/menu_items/A1.json').respond(
            {short_name: 'A1'});
        userService.getShortName('A1').then(function (response) {
            expect(response).toEqual({ short_name: 'A1' });
        });
        $httpBackend.flush();
    });

});

