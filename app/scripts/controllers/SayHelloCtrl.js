/**
 * Copyright © 2014 by eBusiness Information
 * All rights reserved. This source code or any portion thereof
 * may not be reproduced or used in any manner whatsoever
 * without the express written permission of eBusiness Information.
 *
 * Created by mbibos on 10/03/15.
 */

var SayHelloCtrl = function ($scope, sayHelloService) {

  /*===============================*/
  /*======scope variables==========*/
  /*===============================*/

  //Put scope variable declaration here


  /*========================================*/
  /*======== init scope variables ==========*/
  /*========================================*/

  //Put scope variable init here


  /*========================================*/
  /*======== init scope functions ==========*/
  /*========================================*/

  $scope.sayHello1 = function () { throw "Empty!"; };
  $scope.sayHello2 = function () { throw "Empty!"; };
  $scope.sayHello3 = function () { throw "Empty!"; };


  /*===============================*/
  /*======private variables========*/
  /*===============================*/

  //Put here private variable


  /*===============================*/
  /*======scope functions==========*/
  /*===============================*/

  $scope.sayHello1 = function () {
    $scope.sayHello2("coucou");
  };

  $scope.sayHello2 = function (message) {
    console.log(message);
  };

  $scope.sayHello3 = function () {
    sayHelloService.sayHello();
  };
};

angular.module('unitTestingWorkshopApp').controller('SayHelloCtrl', ['$scope', 'sayHelloService', SayHelloCtrl]);