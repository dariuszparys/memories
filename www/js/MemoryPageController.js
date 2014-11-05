(function() {

    function MemoryPageController($stateParams) {
        var vm = this;

        vm.p = $stateParams;
    }

    angular
        .module("starter")
        .controller("MemoryPageController", MemoryPageController);

})();

