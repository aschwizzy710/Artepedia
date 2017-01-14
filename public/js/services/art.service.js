(function() {
  angular.module('ArtePedia')
        .factory('ArtService', ArtService);

  ArtService.$inject = ['$http'];

  function ArtService($http){
    init();
    var artGallery = [];
    return {
      get: getAllArt
    };

    function init(){ // this is going to make our first data request upon file load
      $http.get('/artGallery')
            .then(function(response){
              albums = response.data.artGallery;
            })
            .catch(function(err){
              console.log(err);
            });
    }
    function getAllArt(){
      return artGallery;
    }
