(function() {
  angular.module('ArtePedia')
        .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'ArtService'];

  function MainController($scope, ArtService){
    $scope.artGallery = ArtService.get();

    $scope.$watch(function(){
      return ArtService.get();
    }, function(){
      $scope.artGallery = ArtService.get();
    });


};


}());
