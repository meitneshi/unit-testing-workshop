/**
 * Copyright © 2014 by eBusiness Information
 * All rights reserved. This source code or any portion thereof
 * may not be reproduced or used in any manner whatsoever
 * without the express written permission of eBusiness Information.
 *
 * Created by mbibos on 10/03/15.
 */

var PopupCtrl = function ($scope, sayHelloService) {

  /*===============================*/
  /*======scope variables==========*/
  /*===============================*/
  $scope.onConfiguration = null;


  /*========================================*/
  /*======== init scope variables ==========*/
  /*========================================*/
  $scope.onConfiguration = {};


  /*========================================*/
  /*======== init scope functions ==========*/
  /*========================================*/
  $scope.reset = function () { throw "Empty!"; };


  /*===============================*/
  /*======private variables========*/
  /*===============================*/

  //Put here private variable


  /*===============================*/
  /*======scope functions==========*/
  /*===============================*/
  $scope.reset = function () {
    if(confirm('Do you want to Reset ?')){
      $scope.onConfiguration = null;
      sayHelloService.sayHello();
    }
  };
};

angular.module('unitTestingWorkshopApp').controller('PopupCtrl', ['$scope', 'sayHelloService', PopupCtrl]);
