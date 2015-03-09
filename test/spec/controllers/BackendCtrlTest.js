/**
 * Copyright © 2014 by eBusiness Information
 * All rights reserved. This source code or any portion thereof
 * may not be reproduced or used in any manner whatsoever
 * without the express written permission of eBusiness Information.
 *
 * Created by mbibos on 10/03/15.
 */

describe('BackendCtrl', function() {
  var $scope, controller;

  beforeEach(module('unitTestingWorkshopApp'));

  beforeEach(inject(function ($rootScope, $controller) {
    $scope = $rootScope.$new();
    $location = jasmine.createSpyObj('$location', ['url']);
    controller = $controller('BackendCtrl', {
      $scope: $scope,
      $location: $location
    });
  }));

  it('should set save function', function() {
    expect($scope.save).toBeDefined();
  });

  it('should call /api/foo.json on $scope.save()', inject(function($httpBackend) {
    $scope.save();

    $httpBackend.expectPOST('/api/foo.json').respond();
    $httpBackend.flush();
  }));

  it('should redirect to /redirect/to/url if success', inject(function($httpBackend) {
    $scope.save();
    $httpBackend.whenPOST('/api/foo.json').respond(200);
    $httpBackend.flush();

    expect($location.url).toHaveBeenCalledWith('/redirect/to/url');
  }));

  it('should redirect to /redirect/to/error/url if error', inject(function($httpBackend) {
    $scope.save();
    $httpBackend.whenPOST('/api/foo.json').respond(500);
    $httpBackend.flush();

    expect($location.url).toHaveBeenCalledWith('/redirect/to/error/url');
  }));

});