/**
 * Copyright © 2014 by eBusiness Information
 * All rights reserved. This source code or any portion thereof
 * may not be reproduced or used in any manner whatsoever
 * without the express written permission of eBusiness Information.
 *
 * Created by mbibos on 10/03/15.
 */

var BackendCtrl = function ($scope, $http, $location) {

  /*===============================*/
  /*======scope variables==========*/
  /*===============================*/

  $scope.model = null;


  /*========================================*/
  /*======== init scope variables ==========*/
  /*========================================*/

  $scope.model = {};


  /*========================================*/
  /*======== init scope functions ==========*/
  /*========================================*/

  $scope.save = function () { throw "Empty!"; };


  /*===============================*/
  /*======private variables========*/
  /*===============================*/

  //Put here private variable


  /*===============================*/
  /*======scope functions==========*/
  /*===============================*/

  $scope.save = function(model) {
    $http.post('/api/foo.json', model)
        .success(function() {
          $location.url('/redirect/to/url');
        })
        .error(function() {
          $location.url('/redirect/to/error/url');
        });
  };

};

angular.module('unitTestingWorkshopApp').controller('BackendCtrl', ['$scope', '$http', '$location', BackendCtrl]);