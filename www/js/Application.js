// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module("memories", ["ngCordova", "ionic"])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html"
    })

    .state('app.about', {
      url: "/about",
      views: {
        'menuContent' :{
          templateUrl: "templates/about.html"
        }
      }
    })

    .state('app.add', {
      url: "/add",
      views: {
        'menuContent' :{
          templateUrl: "templates/add.html"
        }
      }
    })
    .state('app.memories', {
      url: "/memories",
      views: {
        'menuContent' :{
          templateUrl: "templates/memories.html"
        }
      }
    })

    .state('app.memory', {
      url: "/memories/:memoryId",
      views: {
        'menuContent' :{
          templateUrl: "templates/memory.html"
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/memories');
});
