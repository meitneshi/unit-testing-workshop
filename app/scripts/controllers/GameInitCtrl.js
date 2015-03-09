/**
 * Copyright © 2014 by eBusiness Information
 * All rights reserved. This source code or any portion thereof
 * may not be reproduced or used in any manner whatsoever
 * without the express written permission of eBusiness Information.
 *
 * Created by mbibos on 10/03/15.
 */

var SimpleGameCtrl = function ($scope) {

  /*===============================*/
  /*======scope variables==========*/
  /*===============================*/

  $scope.playerList = null;

  $scope.currentPlayer = null;
  $scope.inGame = null;
  $scope.winner = null;

  $scope.player1Score = null;
  $scope.player2Score = null;


  /*========================================*/
  /*======== init scope functions ==========*/
  /*========================================*/

  $scope.init = function () { throw "Empty!"; };
  $scope.playTurn = function () { throw "Empty!"; };
  $scope.detectEnd = function () { throw "Empty!"; };
  $scope.getWinner = function () { throw "Empty!"; };


  /*===============================*/
  /*======private variables========*/
  /*===============================*/

  //Put here private variable


  /*===============================*/
  /*======scope functions==========*/
  /*===============================*/

  $scope.init = function () {
    $scope.playerList = ["player1", "player2"];
    $scope.player1Score = 0;
    $scope.player2Score = 0;
    $scope.currentPlayer = "player1";
    $scope.inGame = true;
    $scope.winner = null;
  };

  $scope.playTurn = function () {
    if ($scope.playerList.indexOf($scope.currentPlayer) == -1) {
      throw "Unknown player";
    }

    if ($scope.currentPlayer === "player1") {
      $scope.player1Score ++;
      $scope.currentPlayer = "player2";
    } else if ($scope.currentPlayer === "player2") {
      $scope.player2Score ++;
      $scope.currentPlayer = "player1";
    }
  };

  $scope.detectEnd = function () {
    $scope.inGame =  ($scope.player1Score == 5 || $scope.player2Score == 5);
  };

  $scope.getWinner = function () {
    if ($scope.player1Score == 5) {
      $scope.winner = "player1";
    } else if ($scope.player2Score == 5) {
      $scope.winner = "player2";
    }
  }

};
angular.module('unitTestingWorkshopApp').controller('SimpleGameCtrl', ['$scope', SimpleGameCtrl]);