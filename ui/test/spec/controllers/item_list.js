'use strict';

describe('Controller: ItemListCtrl', function () {

  // load the controller's module
  beforeEach(module('sheryApp'));

  var $httpBackend;
  var ItemListCtrl;
  var scope;

  beforeEach(inject(function ($injector, $rootScope, $controller) {
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET('/rakuten/item/').respond(readJSON('test/mock/GET-rakuten-item-noargs.json'));

    scope = $rootScope.$new();
    ItemListCtrl = $controller('ItemListCtrl', {'$scope': scope});
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    $httpBackend.flush();
    expect(scope.list.length).toBe(10);
  });
});
