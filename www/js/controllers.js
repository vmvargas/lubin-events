angular.module('starter.controllers', ['starter.services', 'jett.ionic.filter.bar'])
    // .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    //     // With the new view caching in Ionic, Controllers are only called
    //     // when they are recreated or on app start, instead of every page change.
    //     // To listen for when this page is active (for example, to refresh data),
    //     // listen for the $ionicView.enter event:
    //     //$scope.$on('$ionicView.enter', function(e) {
    //     //});

    //     // Form data for the login modal
    //     $scope.loginData = {};

    //     // Create the login modal that we will use later
    //     $ionicModal.fromTemplateUrl('templates/login.html', {
    //         scope: $scope
    //     }).then(function (modal) {
    //         $scope.modal = modal;
    //     });

    //     // Triggered in the login modal to close it
    //     $scope.closeLogin = function () {
    //         $scope.modal.hide();
    //     };

    //     // Open the login modal
    //     $scope.login = function () {
    //         $scope.modal.show();
    //     };

    //     // Perform the login action when the user submits the login form
    //     $scope.doLogin = function () {
    //         console.log('Doing login', $scope.loginData);

    //         // Simulate a login delay. Remove this and replace with your login
    //         // code if using a login system
    //         $timeout(function () {
    //             $scope.closeLogin();
    //         }, 1000);
    //     };
    // })

.controller('SearchCtrl', function ($scope, Session) {
    $scope.addToCalendar = function () {
        if (window.plugins && window.plugins.calendar) {
            // var hour = $scope.session.time.substring(0,$scope.session.time.indexOf(':'));
            // if ($scope.session.time.indexOf("pm")>-1)
            //     hour = parseInt(hour)+12;

            var today = new Date();
            console.log("Date year" + today.getFullYear() + " mo " + today.getMonth() + " day " + today.getDate());
            var startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 15, 00, 00);
            var endDate = new Date();
            var title = "Swapnil Tandel Title";
            var room = "W404"
            var description = "description description description description description description description description description.";
            endDate.setTime(startDate.getTime() + 3600000); //one hour
            alert(startDate);

            window.plugins.calendar.createEvent(title, room, description, startDate, endDate,
                function () {
                    alert(title + " has been added to your calendar.");
                },
                function (error) {
                    console.log("Calendar fail " + error);
                });
        } else console.log("Calendar plugin not available.");
    }

})

.controller('SessionsCtrl', function ($scope, $timeout, $ionicFilterBar, Session) {
      console.log('SessionsCtrl');
    var filterBarInstance;

    $scope.sessions = Session.query();
    console.log($scope.sessions);
    
    $scope.showFilterBar = function () {
        filterBarInstance = $ionicFilterBar.show({
            items: $scope.sessions,
            update: function (filteredItems, filterText) {
                $scope.sessions = filteredItems;
                if (filterText) {
                    console.log(filterText);
                }
            }
        });
    };

$scope.getDayName  = function (month, day, year) {
    var d = new Date(year, month, day);
    var weekday = new Array(7);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[d.getDay()];
}

$scope.getMonthName  = function (month) {
    // var d = new Date(year, month, day);
    var monthArr = new Array();
    monthArr[0] = "January";
    monthArr[1] = "February";
    monthArr[2] = "March";
    monthArr[3] = "April";
    monthArr[4] = "May";
    monthArr[5] = "June";
    monthArr[6] = "July";
    monthArr[7] = "August";
    monthArr[8] = "September";
    monthArr[9] = "October";
    monthArr[10] = "November";
    monthArr[11] = "December";

    return monthArr[month-1];
}

$scope.tmptest  = function (tmpVal) {
    return tmpVal;
}

$scope.convertTo24Hour  = function (time) {
    var hours = parseInt(time.substr(0, 2));
    if(time.indexOf('a.m.') != -1 && hours == 12) {
        time = time.replace('12', '0');
    }
    console.log(time);
    if(time.indexOf('p.m.')  != -1 && hours < 12) {
        time = time.replace(hours, (hours + 12));
    }
    console.log(time.replace(/(a.m.|p.m.)/, ''));

    return time.replace(/(a.m.|p.m.)/, '');
}

    // $scope.refreshItems = function () {
    //     if (filterBarInstance) {
    //         filterBarInstance();
    //         filterBarInstance = null;
    //     }

    //     $timeout(function () {
    //         getItems();
    //         $scope.$broadcast('scroll.refreshComplete');
    //     }, 1000);
    // };

$scope.dayNumber = 0;
$scope.showDate  = function (num) {
    if($scope.dayNumber!=num){
        $scope.dayNumber=num;
        return true;
    }else{
        $scope.dayNumber=num;
        return false;
    }
}

})

.controller('SessionCtrl', function ($scope, $stateParams, Session) {

    // singleSesson.get().then(function(session) {
    //     console.log("events", session);  
    //     $scope.session = session;
    // });


console.log(Session.sessionsvar);

        $scope.session = Session.get({
            sessionId: $stateParams.sessionId
        });

        $scope.addToCalendar = function (mess) {
            alert(mess);
            if (window.plugins && window.plugins.calendar) {
                // var hour = $scope.session.time.substring(0,$scope.session.time.indexOf(':'));
                // if ($scope.session.time.indexOf("pm")>-1)
                //     hour = parseInt(hour)+12;

                var today = new Date();
                console.log("Date year" + today.getFullYear() + " mo " + today.getMonth() + " day " + today.getDate());
                var startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 15, 00, 00);
                var endDate = new Date();
                var title = "Swapnil Tandel Title";
                var room = "W404"
                var description = "description description description description description description description description description.";
                endDate.setTime(startDate.getTime() + 3600000); //one hour
                alert(startDate);

                window.plugins.calendar.createEvent(title, room, description, startDate, endDate,
                    function () {
                        alert(title + " has been added to your calendar.");
                    },
                    function (error) {
                        console.log("Calendar fail " + error);
                    });
            } else console.log("Calendar plugin not available.");
        };

    })
    .controller('ExampleController', function ($scope, Events) {

        Events.get($cordovaCalendar).then(function (events) {
            console.log("events", events);
            $scope.events = events;
        });
    });