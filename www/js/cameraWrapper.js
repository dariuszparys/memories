angular.module("starter.plugins.camera", [])

.factory("$cameraWrapper", ["$q", function ($q) {

    return {
        takePicture: function (options) {

            var q = $q.defer();

            if (!navigator.camera) {
                q.resolve(null);
                return q.promise;
            }

            navigator.camera.getPicture(function (imageData) {
                q.resolve(imageData);
            }, function (error) {
                q.reject(error);
            }, options);

            return q.promise;
        },

        cleanup: function () {
            var q = $q.defer();

            navigator.camera.cleanup(function () {
                q.resolve();
            }, function (error) {
                q.reject(error);
            });

            return q.promise;
        }
    };
}]);