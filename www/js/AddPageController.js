(function() {

    function AddPageController($ionicActionSheet, $cameraWrapper) {
        var vm = this;


        vm.show = function() {
          
          sheet = $ionicActionSheet.show({
            buttons: [
              { text: "Ort per GPS ermitteln" },
              { text: "Foto hinzufügen" },
              { text: "Fotografieren" }
            ],
            titleText: "Aktionen",
            cancelText: "Abbrechen",
            cancel: function() {
              // do something
              return false;
            },
            buttonClicked: function (index) {

                var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 100,
                    targetHeight: 100,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };

                switch (index) {
                    case 1:
                        options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
                        break;
                    case 2:
                        options.sourceType = Camera.PictureSourceType.CAMERA;
                        break;
                }

                $cameraWrapper.takePicture(options).then(function (imageData) {
                    vm.picture = "data:image/jpeg;base64," + imageData;
                    vm.isPictureAvailable = true;
                });
              return true;
            }
          });          
        };
      
        vm.title = "";
        vm.place = "";
        vm.comment = "";
        vm.isPictureAvailable = false;
      
        vm.add = function() {
          
        };
        
    }

    angular
        .module("starter")
        .controller("AddPageController", AddPageController);

})();

