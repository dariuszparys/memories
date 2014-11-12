(function () {

    angular
        .module("memories")
        .service("DataService", function () {

            var that = this;

            this.memories = [
                { title: "MOA Berlin", id: 1, image: "img/moa.jpg" },
                { title: "München", id: 2, image: "img/moa.jpg" },
                { title: "Stuttgart", id: 3, image: "img/moa.jpg" },
                { title: "Frankfurt", id: 4, image: "img/moa.jpg" }
            ];

            this.addMemory = function(title, imageURL) {
                that.memories.push({title: title, id: 5, image: imageURL });
            }
        });

})();

