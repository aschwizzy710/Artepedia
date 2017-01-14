(function() {
  angular.module('ArtePedia')
        .factory('ModalService', ModalService);

  ArtService.$inject = ['$rootScope', '$q'];

  function ModalService($rootScope, $q){
    var modal = {
                    deferred: null,
                    params: null
                };
                // Return the public API.
                return({
                    open: open,
                    params: params,
                    proceedTo: proceedTo,
                    reject: reject,
                    resolve: resolve
                });
      }
