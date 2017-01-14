(function() {
  angular.module('ArtePedia')
        .controller('ModalController', ModalController);

  ModalController.$inject = ['$scope', 'ModalService'];

  function ModalController($scope, ModalService){
    $scope.message = ( ModalService.params().message || "Whoa!" );
                // ---
                // PUBLIC METHODS.
                // ---
                // Wire the modal buttons into modal resolution actions.
                $scope.close = ModalService.resolve;
                // I jump from the current alert-modal to the confirm-modal.
                $scope.jumpToConfirm = function() {
                    // We could have used the .open() method to jump from one modal
                    // to the next; however, that would have implicitly "rejected" the
                    // current modal. By using .proceedTo(), we open the next window, but
                    // defer the resolution of the current modal until the subsequent
                    // modal is resolved or rejected.
                    ModalService.proceedTo(
                        "confirm",
                        {
                            message: "I just came from Alert - doesn't that blow your mind?",
                            confirmButton: "Eh, maybe a little",
                            denyButton: "Oh please"
                        }
                    )
                    .then(
                        function handleResolve() {
                            console.log( "Piped confirm resolved." );
                        },
                        function handleReject() {
                            console.warn( "Piped confirm rejected." );
                        }
                    );
                };
            }
          }
          $scope.cancel = ModalService.reject;
                // I process the form submission.
              $scope.submit = function() {
                  // If no input was provided, show the user an error message.
                  if ( ! $scope.form.input ) {
                      return( $scope.errorMessage = "Please provide something!" );
                  }
                  ModalService.resolve( $scope.form.input );
              };
            }
        );
