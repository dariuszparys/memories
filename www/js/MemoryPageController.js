(function() {

    function MemoryPageController($stateParams) {
        var vm = this;

        vm.p = $stateParams;
    }

    angular
        .module("memories")
        .controller("MemoryPageController", MemoryPageController);

})();

