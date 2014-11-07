(function() {

    function AddPageController($ionicActionSheet) {
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
            buttonClicked: function(index) {
              return true;
            }
          });          
        };
      
        vm.title = "";
        vm.place = "";
        vm.comment = "";
      
        vm.add = function() {
          
        };
        
    }

    angular
        .module("starter")
        .controller("AddPageController", AddPageController);

})();

