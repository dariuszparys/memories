(function() {

    function MemoryPageController($stateParams, DataService) {
        var vm = this;

        var result = _.find(DataService.memories, function (item) {
            return item.id == $stateParams.memoryId;
        });

        vm.memory = result;
    }

    angular
        .module("memories")
        .controller("MemoryPageController", MemoryPageController);

})();

