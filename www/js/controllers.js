angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('SearchCtrl', function($scope, Session) {
        $scope.addToCalendar = function() {
    if (window.plugins && window.plugins.calendar) {
        // var hour = $scope.session.time.substring(0,$scope.session.time.indexOf(':'));
        // if ($scope.session.time.indexOf("pm")>-1)
        //     hour = parseInt(hour)+12;
        
        var today = new Date();
        console.log("Date year" + today.getFullYear() + " mo " + today.getMonth()+ " day " + today.getDate());
        var startDate = new Date(today.getFullYear(),today.getMonth(),today.getDate(),15,00,00);
        var endDate = new Date();
        var title = "Swapnil Tandel Title";
        var room = "W404"
        var description = "description description description description description description description description description.";
        endDate.setTime(startDate.getTime() + 3600000);//one hour
        alert(startDate);
        
        window.plugins.calendar.createEvent(title, room, description, startDate, endDate,
            function () {
                alert(title + " has been added to your calendar.");
            },
            function (error) {
                console.log("Calendar fail " + error);
            });
    }
    else console.log("Calendar plugin not available.");
} 

})

.controller('SessionsCtrl', function($scope, Session) {
    $scope.sessions = Session.query();
})

.controller('SessionCtrl', function($scope, $stateParams, Session) {
    $scope.session = Session.get({sessionId: $stateParams.sessionId});

        $scope.addToCalendar = function() {
    if (window.plugins && window.plugins.calendar) {
        // var hour = $scope.session.time.substring(0,$scope.session.time.indexOf(':'));
        // if ($scope.session.time.indexOf("pm")>-1)
        //     hour = parseInt(hour)+12;

        var today = new Date();
        console.log("Date year" + today.getFullYear() + " mo " + today.getMonth()+ " day " + today.getDate());
        var startDate = new Date(today.getFullYear(),today.getMonth(),today.getDate(),15,00,00);
        var endDate = new Date();
        var title = "Swapnil Tandel Title";
        var room = "W404"
        var description = "description description description description description description description description description.";
        endDate.setTime(startDate.getTime() + 3600000);//one hour
        alert(startDate);
        
        window.plugins.calendar.createEvent(title, room, description, startDate, endDate,
            function () {
                alert(title + " has been added to your calendar.");
            },
            function (error) {
                console.log("Calendar fail " + error);
            });
    }
    else console.log("Calendar plugin not available.");
} 

});