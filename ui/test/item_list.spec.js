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

        // whenGETはbeforeEachで呼ばないとダメ
        $httpBackend.whenGET(/rakuten\/item\/\?page=\d/)
            .respond(200, readJSON('test/mock/GET-rakuten-item-noargs.json'));

        scope = $rootScope.$new();
        ItemListCtrl = $controller('ItemListCtrl', {'$scope': scope});
        q = $q;
    }));

    it('初期状態', () => {
        expect(scope.list.length).toBe(0);
        expect(scope.page).toBe(0);
    });

    it('pushNextItemsが呼ばれたらGetリクエストを投げてlistを更新する', (done) => {
        scope.pushNextItems().then(() => {
            expect(scope.list.length).toBe(10);
            expect(scope.page).toBe(1);
        }).catch((err) => expect(err).toBeUndefined()
        ).finally(done);
        $httpBackend.flush();
    });

});
