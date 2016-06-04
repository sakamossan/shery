'use strict';

describe('Controller: ItemListCtrl', function () {

  // load the controller's module
  beforeEach(module('sheryApp'));

  var $httpBackend;
  var ItemListCtrl;
  var scope;
  var q;

  beforeEach(inject(function ($injector, $rootScope, $controller, $q) {
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET(/rakuten\/item/).respond(readJSON('test/mock/GET-rakuten-item-noargs.json'));
    scope = $rootScope.$new();
    ItemListCtrl = $controller('ItemListCtrl', {'$scope': scope});
    q = $q;
  }));


  it('pushNextItemsが呼ばれたらGetリクエストを投げてlistを更新する', function () {

    expect(scope.list.length).toBe(0);
    expect(scope.page).toBe(0);

    q.all([
      scope.pushNextItems(),
      scope.pushNextItems()
    ]).then(function () {
      expect(scope.list.length).toBe(20);
      $httpBackend.flush();
      expect(scope.page).toBe(0);
    });
  });
});
