(function() {

    function AddPageController($ionicActionSheet, $cordovaCamera) {
        var vm = this;
      
        vm.show = function() {
          
          $ionicActionSheet.show({
            buttons: [
              { text: "Ort per GPS ermitteln" },
              { text: "Foto hinzufügen" },
              { text: "Fotografieren" }
            ],
            
            titleText: "Aktionen",
            
            cancelText: "Abbrechen",
            
            cancel: function() {
              return false;
            },
            
            buttonClicked: function (index) {

                var options = {
                    quality : 75,
                    destinationType : Camera.DestinationType.DATA_URL,
                    sourceType : Camera.PictureSourceType.CAMERA,
                    allowEdit : true,
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
                    default:
                      break;
                }

                $cordovaCamera.getPicture(options).then(function (imageData) {
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
          alert("works");
        };
        
    }

    angular
        .module("memories")
        .controller("AddPageController", AddPageController);

})();

