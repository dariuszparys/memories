(function() {

    function MemoriesPageController(DataService) {
        var vm = this;

        vm.memories = DataService.memories;
    }

    angular
        .module("memories")
        .controller("MemoriesPageController", MemoriesPageController);

})();

