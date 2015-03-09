/**
 * Copyright © 2014 by eBusiness Information
 * All rights reserved. This source code or any portion thereof
 * may not be reproduced or used in any manner whatsoever
 * without the express written permission of eBusiness Information.
 *
 * Created by mbibos on 10/03/15.
 */

describe('Controller: PopupCtrl', function () {

  // load the controller's module
  beforeEach(module('unitTestingWorkshopApp'));

  var controller, scope, sayHelloService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('PopupCtrl', {
      $scope: scope
    });
  }));

  beforeEach(inject(function (_sayHelloService_) {
    sayHelloService = _sayHelloService_;
  }));

  it('should put null in onConfiguration and call sayHello from sayHelloService if confirm', function () {
    scope.onConfiguration = "something";
    spyOn(window, 'confirm').and.callFake(function () { return true; });
    spyOn(sayHelloService, 'sayHello');

    scope.reset();
    expect(scope.onConfiguration).toBeNull();
    expect(sayHelloService.sayHello).toHaveBeenCalled();
  });

  it('should not change onConfiguration if not confirm', function () {
    scope.onConfiguration = "something";
    spyOn(window, 'confirm').and.callFake(function () { return false; });

    scope.reset();
    expect(scope.onConfiguration).toEqual("something");
  });
});