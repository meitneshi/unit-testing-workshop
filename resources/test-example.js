describe("MainCtrl", function () {
  var scope, ctrl, configureService, steppingService, mainService, utilsService, pricingService;
  beforeEach(module('dmaWebsiteApp'));
  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('MainCtrl', {$scope: scope} );
  }));
  describe('test init', function () {
    it('should have initialized variables', function () {
      expect(scope.termsAccepted).toBeFalsy();
      expect(scope.appNamePlaceholder).toBe("My First App");
      expect(scope.placeholderLabel.templates).toBe("placeholder.search-style");
      expect(scope.placeholderLabel.options).toBe("placeholder.search-options");
      expect(scope.inputText.searchText).toBe("");
      expect(scope.inputText.appName).toBe("");
      expect(scope.onConfiguration).toBeNull();
      expect(scope.animation).toBeTruthy();
      expect(scope.onMediaShown).toBeNull();
      expect(scope.modalId).toBeNull();
      expect(scope.arrowAnim).toBeFalsy();
      expect(scope.steppingManager).toBeDefined();
      expect(scope.pricingManager).toBeDefined();
    });
  });
  describe('test functions that only call functions', function () {
    beforeEach(inject(function (_configureService_, _steppingService_, _mainService_, _utilsService_, _pricingService_) {
      configureService = _configureService_;
      steppingService = _steppingService_;
      mainService = _mainService_;
      utilsService = _utilsService_;
      pricingService = _pricingService_;
    }));
    it('set step should called stepping service function', function () {
      spyOn(steppingService, 'setStep');
      scope.setStep(2);
      expect(steppingService.setStep).toHaveBeenCalled();
    });
    it('previousStep should called stepping service function', function () {
      spyOn(steppingService, 'previousStep');
      scope.previousStep();
      expect(steppingService.previousStep).toHaveBeenCalled();
    });
    it('setOverStep should called stepping service function', function () {
      spyOn(steppingService, 'setOverStep');
      scope.setOverStep();
      expect(steppingService.setOverStep).toHaveBeenCalled();
    });
    it('removeSource should called stepping service function', function () {
      spyOn(mainService, 'removeSource');
      scope.removeSource();
      expect(mainService.removeSource).toHaveBeenCalled();
    });
    it('onSynchronized should called stepping service function', function () {
      spyOn(mainService, 'onSynchronized');
      scope.onSynchronized();
      expect(mainService.onSynchronized).toHaveBeenCalled();
    });
    it('onNotifiabled should called stepping service function', function () {
      spyOn(mainService, 'onNotifiabled');
      scope.onNotifiabled();
      expect(mainService.onNotifiabled).toHaveBeenCalled();
    });
    it('resetApp should called stepping service function if confirmation', function () {
      spyOn(mainService, 'resetApp');
      spyOn(window, 'confirm').andCallFake(function () { return true; });
      scope.resetApp();
      expect(mainService.resetApp).toHaveBeenCalled();
    });
    it('resetApp should not called stepping service function if no confirmation', function () {
      spyOn(mainService, 'resetApp');
      spyOn(window, 'confirm').andCallFake(function () { return false; });
      scope.resetApp();
      expect(mainService.resetApp).not.toHaveBeenCalled();
    });
    it('isValidEmail should called stepping service function', function () {
      spyOn(utilsService, 'isValidEmail');
      scope.isValidEmail(mailMock);
      expect(utilsService.isValidEmail).toHaveBeenCalled();
    });
    it('addMailToCarbonCopy should called stepping service function', function () {
      spyOn(mainService, 'addMailToCarbonCopy');
      scope.addMailToCarbonCopy(mailMock);
      expect(mainService.addMailToCarbonCopy).toHaveBeenCalled();
    });
    it('calculateSourcePrice should called stepping service function', function () {
      spyOn(pricingService, 'calculateSourcePrice');
      scope.calculateSourcePrice(sourceMock);
      expect(pricingService.calculateSourcePrice).toHaveBeenCalled();
    });
    it('submit should called stepping service function', function () {
      spyOn(mainService, 'submit');
      scope.submit();
      expect(mainService.submit).toHaveBeenCalled();
    });
    it('isAvailableTarget should called stepping service function', function () {
      spyOn(mainService, 'isAvailableTarget');
      scope.isAvailableTarget("android");
      expect(mainService.isAvailableTarget).toHaveBeenCalled();
    });
  });
  describe('test listeners behaviors', function () {
    it('when listener steppingService.steppingManager is toggle, steppingManager should change', function () {
      scope.steppingManager = null;
      scope.$emit('steppingService.steppingManager', {});
      expect(scope.steppingManager).toNotBe(null);
    });
    it('when listener steppingService.overStep is toggle, over step should change', function () {
      scope.steppingManager.overstep = null;
      scope.$emit('steppingManager.overStep', {});
      expect(scope.steppingManager.overStep).toNotBe(null);
    });
    it('when listener pricingService.pricingManager is toggle, pricingManager should change', function () {
      scope.pricingManager = null;
      scope.$emit('pricingService.pricingManager', {});
      expect(scope.pricingManager).toNotBe(null);
    });
    it('when listener currentInStep is toggle, if currentInStep is not null set onConfiguration, else set to null', function () {
      scope.onConfiguration = null;
      scope.$emit('configureService.currentInStep', {});
      expect(scope.onConfiguration).toNotBe(null);
      scope.$emit('configureService.currentInStep', null);
      expect(scope.onConfiguration).toBe(null);
    });
    it('when listener openVideo is toggle, if videoUrl is present put the variable video', function () {
      scope.onMediaShown = null;
      scope.$emit('templateService.openVideo', "www.youtube.com");
      expect(scope.onMediaShown.video).toBeDefined();
      expect(scope.onMediaShown.error).toBeUndefined();
    });
    it('when listener openVideo is toggle, if videoUrl is absent put the variable error', function () {
      scope.onMediaShown = null;
      scope.$emit('templateService.openVideo');
      expect(scope.onMediaShown.video).toBeUndefined();
      expect(scope.onMediaShown.error).toBeDefined();
    });
    it('when modalIn listener is toggle, modalId variable should change', function () {
      scope.modalId = 1;
      scope.$emit('modal.toggle', 2);
      expect(scope.modalId).toEqual(2);
    });
    it('when confirmation listener is toggle, confirmation variable should change', function () {
      scope.confirmation = false;
      scope.$emit('mainService.confirmation', true);
      expect(scope.confirmation).toBeTruthy();
    });
    it('when submitting listener is toggle, submitting variable should change', function () {
      scope.submitInformations = false;
      scope.$emit('mainService.isSubmitting', true);
      expect(scope.submitInformations).toBeTruthy();
    });
  });
  describe('test functions behaviors', function () {
    it('closeConfig should put null in onConfiguration variable', function () {
      scope.onConfiguration = "something";
      scope.closeConfig();
      expect(scope.onConfiguration).toBe(null);
    });
    it('if in configuration and step set to different of 2, config should be null', function () {
      scope.onConfiguration = "something";
      scope.setStep(1);
      expect(scope.onConfiguration).toBe(null);
    });
    it('show custom modal should put the right id in modalId variable', function () {
      scope.showCustomModal("id");
      expect(scope.modalId).toBe("id");
    });
    it('hide custom modal should put modalId to null', function () {
      scope.showCustomModal("id");
      scope.hideCustomModal("id");
      expect(scope.modalId).toBe(null);
    });
    it('source Icon display should return the url of the source icon and the marker icon', function () {
      expect(scope.onSourceIconDisplay(sourceMock)).toNotBe("images/sources/source_orange.png");
      expect(scope.onMarkerIconDisplay(sourceMock)).toNotBe("images/markers/marker_orange.png");
      sourceMock.hasCustomIcon = false;
      sourceMock.markerIcon = "marker_orange.png";
      sourceMock.sourceIcon = "source_orange.png";
      expect(scope.onSourceIconDisplay(sourceMock)).toBe("images/sources/source_orange.png");
      expect(scope.onMarkerIconDisplay(sourceMock)).toBe("images/markers/marker_orange.png");
    });
    it('reset app should put null in onConfiguration if confirmation', function () {
      scope.onConfiguration = "something";
      spyOn(window, 'confirm').andCallFake(function () { return true; });
      scope.resetApp();
      expect(scope.onConfiguration).toBeNull();
    });
    it('reset app should not modif onConfiguration if no confirmation', function () {
      scope.onConfiguration = "something";
      spyOn(window, 'confirm').andCallFake(function () { return false; });
      scope.resetApp();
      expect(scope.onConfiguration).toEqual("something");
    });
  });
});