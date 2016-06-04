'use strict';

describe('Controller: ItemListCtrl', () => {

    // load the controller's module
    beforeEach(angular.mock.module('sheryApp'));

    var $httpBackend;
    var ItemListCtrl;
    var scope;
    var q;

    beforeEach(inject(($injector, $rootScope, $controller, $q) => {
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.whenGET(/rakuten\/item/).respond(readJSON('test/mock/GET-rakuten-item-noargs.json'));
        scope = $rootScope.$new();
        ItemListCtrl = $controller('ItemListCtrl', {'$scope': scope});
        q = $q;
    }));


    it('pushNextItemsが呼ばれたらGetリクエストを投げてlistを更新する', () => {

        expect(scope.list.length).toBe(0);
        expect(scope.page).toBe(0);

        q.all([
            scope.pushNextItems(),
            scope.pushNextItems()
        ]).then(() => {
            expect(scope.list.length).toBe(20);
            $httpBackend.flush();
            expect(scope.page).toBe(0);
        });
    });
});
