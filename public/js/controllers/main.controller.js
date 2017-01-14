(function() {
  angular.module('ArtePedia')
        .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'ArtService', 'ModalService'];

  function MainController($scope, ArtService, ModalService){
  $scope.artGallery = ArtService.get();

  $scope.$watch(function(){
    return ArtService.get();
  }, function(){
    $scope.artGallery = ArtService.get();
  });

  $scope.alertSomething = function() {
                      // The .open() method returns a promise that will be either
                      // resolved or rejected when the modal window is closed.
                      var promise = ModalService.open(
                          "alert",
                          {
                              message: "I think you are kind of beautiful!"
                          }
                      );
                      promise.then(
                          function handleResolve( response ) {
                              console.log( "Alert resolved." );
                          },
                          function handleReject( error ) {
                              console.warn( "Alert rejected!" );
                          }
                      );
                  };

  $scope.open = function () {
      $scope.showModal = true;
  };

  $scope.ok = function () {
      $scope.showModal = false;
  };

  $scope.cancel = function () {
      $scope.showModal = false;
  };

}
}
);
