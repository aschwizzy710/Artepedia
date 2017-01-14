(function() {
  angular.module('ArtePedia')
        .factory('ArtService', ArtService);

  ArtService.$inject = ['$http'];

  function ArtService($http){
    init();
    var albums = [];
    return {
      get: getAllAlbums,
      create: createOneAlbum,
      update: updateOneAlbum,
      delete: deleteOneAlbum
    };
