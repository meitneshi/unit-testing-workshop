/**
 * Copyright © 2014 by eBusiness Information
 * All rights reserved. This source code or any portion thereof
 * may not be reproduced or used in any manner whatsoever
 * without the express written permission of eBusiness Information.
 *
 * Created by mbibos on 10/03/15.
 */

describe('Controller: GameInitCtrl', function () {

  // load the controller's module
  beforeEach(module('unitTestingWorkshopApp'));

  var controller, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('SimpleGameCtrl', {
      $scope: scope
    });
  }));

  it('should have existing variables', function () {
    expect(scope.playerList).toBeDefined();
    expect(scope.currentPlayer).toBeDefined();
    expect(scope.inGame).toBeDefined();
    expect(scope.player1Score).toBeDefined();
    expect(scope.player2Score).toBeDefined();
  });

  it('should have initialized values', function () {
    scope.init();
    expect(scope.playerList.length).toEqual(2);
    expect(scope.currentPlayer).toBe("player1");
    expect(scope.inGame).toBeTruthy();
    expect(scope.player1Score).toEqual(0);
    expect(scope.player2Score).toEqual(0);
  });

  it('should increase by one the score of the current player during a turn', function () {
    scope.playerList = ["player1", "player2"];
    scope.player1Score = 3;
    scope.player2Score = 3;
    scope.currentPlayer = "player1";
    scope.playTurn();
    expect(scope.player2Score).toEqual(3);
    expect(scope.player1Score).toEqual(4);
  });

  it('should change the current player after a turn', function () {
    scope.playerList = ["player1", "player2"];
    scope.currentPlayer = "player1";
    scope.playTurn();
    expect(scope.currentPlayer).toBe("player2");
    scope.playTurn();
    expect(scope.currentPlayer).toBe("player1");
  });

  it('should throw an exception if trying to play turn of an unknown player', function () {
    scope.playerList = ["player1", "player2"];
    scope.currentPlayer = "player3";
    expect(scope.playTurn).toThrow();
  });

  it('should stop the game when end condition are reached', function () {
    scope.player1Score = 4;
    scope.player2Score = 4;
    scope.detectEnd();
    expect(scope.inGame).toBeFalsy();
    scope.player2Score++;
    scope.detectEnd();
    expect(scope.inGame).toBeTruthy();
  });

  it('should select the winner', function () {
    scope.player1Score = 5;
    scope.player2Score = 4;
    scope.getWinner();
    expect(scope.winner).toBe("player1");
  });
});
