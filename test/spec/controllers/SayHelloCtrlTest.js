/**
 * Copyright © 2014 by eBusiness Information
 * All rights reserved. This source code or any portion thereof
 * may not be reproduced or used in any manner whatsoever
 * without the express written permission of eBusiness Information.
 *
 * Created by mbibos on 10/03/15.
 */

describe('Controller: SayHelloCtrl', function () {

  // load the controller's module
  beforeEach(module('unitTestingWorkshopApp'));

  var controller, scope, sayHelloService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('SayHelloCtrl', {$scope: scope});
  }));

  beforeEach(inject(function (_sayHelloService_) {
    sayHelloService = _sayHelloService_;
  }));

  it('sayHello1 should call sayHello2', function () {
    spyOn(scope, 'sayHello2');
    scope.sayHello1();
    expect(scope.sayHello2).toHaveBeenCalled();
    expect(scope.sayHello2).toHaveBeenCalledWith("coucou");
  });

  it('sayHello3 should called say hello of service', function () {
    spyOn(sayHelloService, 'sayHello');
    scope.sayHello3();
    expect(sayHelloService.sayHello).toHaveBeenCalled();
  });
});
