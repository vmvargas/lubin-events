// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })
    .state('tabs.events', {
      url: "/events",
      views: {
        'events-tab': {
          templateUrl: "templates/sessions.html",
          controller: 'SessionsCtrl'
        }
      }
    })
    .state('tabs.eventDiscription', {
      url: "/events/:sessionId",
      views: {
        'events-tab': {
          templateUrl: "templates/session.html",
          controller: 'SessionCtrl'
        }
      }
    })
    .state('tabs.announcements', {
      url: "/announcements",
      views: {
        'announcements-tab': {
          templateUrl: "templates/announcements.html"
        }
      }
    })
    // .state('app.search', {
    //   url: '/search',
    //   views: {
    //     'menuContent': {
    //       templateUrl: 'templates/search.html',
    //       controller: 'SearchCtrl'
    //     }
    //   }
    // })

  // .state('app.browse', {
  //     url: '/browse',
  //     views: {
  //       'menuContent': {
  //         templateUrl: 'templates/browse.html',
  //         controller: 'ExampleController'
  //       }
  //     }
  //   })
  // .state('tabs.sessions', {
  //     url: "/sessions",
  //     views: {
  //         'menuContent': {
  //             templateUrl: "templates/sessions.html",
  //             controller: 'SessionsCtrl'
  //         }
  //       }
  //   })
  .state('tabs.contact', {
    url: "/contact",
    views: {
      'contact-tab': {
        templateUrl: "templates/contact.html"
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/events');
});