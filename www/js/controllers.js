angular.module('starter.controllers', ['starter.services', 'jett.ionic.filter.bar', 'ngCordova', 'ionic', 'ngSanitize'])
  .controller('EventsCtrl', function ($scope, $timeout, $ionicFilterBar, $ionicLoading, Event) {
    //console.log('EventsCtrl');
    var filterBarInstance;

    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });

    $scope.appendToMin = function (min) {
      if (min < 10) {
        return "0" + min;
      } else
        return min;
    }

    $scope.sessions = Event.query().$promise.then(function (result) {
      //console.log(result);
      $scope.sessions = result;
      $ionicLoading.hide();
    }, function (error) {
      //console.log(error);
      $ionicLoading.hide();
      $ionicLoading.show({
        template: 'An error occurred. Please try again in a few minutes.',
        scope: $scope
      });
      $timeout(function () {
        $ionicLoading.hide();
      }, 2000);
    })

    $scope.showFilterBar = function () {
      filterBarInstance = $ionicFilterBar.show({
        items: $scope.sessions,
        update: function (filteredItems, filterText) {
          $scope.sessions = filteredItems;
          if (filterText) {
            //console.log(filterText);
          }
        }
      });
    };

    $scope.getDayName = function (month, day, year) {
      var d = new Date(year, (month - 1), day);
      //console.log(year + '-' + month + '-' + day);

      var weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";

      return weekday[d.getDay()];
    }

    $scope.getMonthName = function (month) {
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

      return monthArr[month - 1];
    }

    $scope.tmptest = function (tmpVal) {
      return tmpVal;
    }

    $scope.convertTo24Hour = function (time) {
      var hours = parseInt(time.substr(0, 2));
      if (time.indexOf('a.m.') != -1 && hours == 12) {
        time = time.replace('12', '0');
      }
      if (time.indexOf('p.m.') != -1 && hours < 12) {
        time = time.replace(hours, (hours + 12));
      }
      return time.replace(/(a.m.|p.m.)/, '');
    }

    $scope.dayNumber = 0;
    $scope.showDate = function (num) {
      if ($scope.dayNumber != num) {
        $scope.dayNumber = num;
        return true;
      } else {
        $scope.dayNumber = num;
        return false;
      }
    }

  })

  .controller('EventCtrl', function ($scope, $stateParams, $cordovaSocialSharing, $ionicActionSheet, $timeout, $ionicLoading, $ionicPopup, Event) {


    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });

    $scope.session = Event.get({
      eventId: $stateParams.eventId
    }).$promise.then(function (result) {
      //console.log(result);
      $scope.session = result;
      $ionicLoading.hide();
    }, function (error) {
      //console.log(error);
      $ionicLoading.hide();
      $ionicLoading.show({
        template: 'An error occurred. Please try again in a few minutes.',
        scope: $scope
      });
      $timeout(function () {
        $ionicLoading.hide();
      }, 2000);
    })


    // Triggered on a button click, or some other target
    $scope.show = function () {

      // Show the action sheet
      var hideSheet = $ionicActionSheet.show({
        buttons: [{
          text: '<i class="icon ion-android-textsms"></i> SMS'
        }, {
          text: '<i class="icon ion-email"></i> Email'
        }, {
          text: '<i class="icon ion-social-whatsapp"></i> Whatsapp'
        }, {
          text: '<i class="icon ion-social-facebook"></i> Facebook'
        }, {
          text: '<i class="icon ion-social-twitter"></i> Twitter'
        }],
        //destructiveText: 'Delete',
        titleText: 'Share this Via',
        cancelText: 'Cancel',
        cancel: function () {
          // add cancel code..
        },
        buttonClicked: function (index) {
          switch (index) {
            case 0:
              $cordovaSocialSharing.shareViaSMS($scope.session.Message);
              return true;
            case 1:
              $cordovaSocialSharing.shareViaEmail($scope.session.Message, $scope.session.Sponsored_by + " presents", null, null, null, null);
              return true;
            case 2:
              $cordovaSocialSharing.shareViaWhatsApp($scope.session.Message, null, null);
              return true;
            case 3:
              $cordovaSocialSharing.shareViaFacebook($scope.session.Message, null, null);
              return true;
            case 4:
              $cordovaSocialSharing.shareViaTwitter($scope.session.Message);
              return true;
          }
        }
      });
    };

    $scope.showAlert = function (title, message) {
      var alertPopup = $ionicPopup.alert({
        title: title,
        template: message
      });
    }

    $scope.shareAnywhere = function () {
      $cordovaSocialSharing.shareViaSMS("This is your message");
    }

    $scope.showFood = false;
    if ($scope.session.Food_Provided != 'No') {
      $scope.showFood = true;
    }
    $scope.openInExternalBrowser = function (url) {
      // Open in external browser
      window.open(url, '_system', 'location=yes');
    };

    $scope.convertTo24Hour = function (time) {
      var hours = parseInt(time.substr(0, 2));
      if (time.indexOf('a.m.') != -1 && hours == 12) {
        time = time.replace('12', '0');
      }
      //console.log(time);
      if (time.indexOf('p.m.') != -1 && hours < 12) {
        time = time.replace(hours, (hours + 12));
      }
      //console.log(time.replace(/(a.m.|p.m.)/, ''));

      return time.replace(/(a.m.|p.m.)/, '');
    }
    $scope.getDayName = function (month, day, year) {
      var d = new Date(year, month, day);
      var weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";

      return weekday[d.getDay()];
    }

    $scope.getMonthName = function (month) {
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

      return monthArr[month - 1];
    }

    $scope.appendToMin = function (min) {
      if (min < 10) {
        return "0" + min;
      } else
        return min;
    }

    $scope.addToCalendar = function (session) {
      //alert(session.Message);
      var start_time = $scope.convertTo24Hour(session.Start_TimeHr + ':' + session.Start_TimeMin + ' ' + session.Start_TimeAMPM);
      var end_time = $scope.convertTo24Hour(session.End_Time_Hr + ':' + session.End_Time_Min + ' ' + session.End_Time_AMPM);

      if (window.plugins && window.plugins.calendar) {

        var startDate = new Date(session.Start_Year, session.Start_Month - 1, session.Start_Day,
          start_time.split(':')[0], start_time.split(':')[1], 0, 0);
        var endDate = new Date(session.Start_Year, session.Start_Month - 1, session.Start_Day,
          end_time.split(':')[0], end_time.split(':')[1], 0, 0);

        var title = session.Headline;
        var room = session.Room + " " + session.Building + " " + session.Campus;
        var description = session.Message;
        //endDate.setTime(startDate.getTime() + 3600000); //one hour
        //alert(startDate);

        window.plugins.calendar.createEvent(title, room, description, startDate, endDate,
          function () {
            $scope.showAlert("Success", title + " has been added to your calendar.");
          },
          function (error) {
            $scope.showAlert("Calendar fail", error);
            //alert("Calendar fail " + error);
          });
      } else {
        $scope.showAlert("Calendar fail", "Calendar plugin not available.");
        // console.log("Calendar plugin not available.");
      }
    };

  })
  .controller('AnnounCtrl', function ($scope, $stateParams, $ionicLoading, Announ) {


    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
    $scope.announ = Announ.get({
      announId: $stateParams.announId
    }).$promise.then(function (result) {
      // console.log(result);
      $scope.announ = result;
      $ionicLoading.hide();
    }, function (error) {
      //console.log(error);
      $ionicLoading.hide();
      $ionicLoading.show({
        template: 'An error occurred. Please try again in a few minutes.',
        scope: $scope
      });
      $timeout(function () {
        $ionicLoading.hide();
      }, 2000);
    })

    $scope.openInExternalBrowser = function (url) {
      // Open in external browser
      window.open(url, '_system', 'location=yes');
    };
  })
  .controller('AnnounsCtrl', function ($scope, $timeout, $ionicFilterBar, $ionicLoading, Announ) {
    //console.log('AnnounsCtrl');
    var filterBarInstance;

    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
    //$scope.announs = Announ.query();
    //console.log($scope.announs);

    $scope.announs = Announ.query().$promise.then(function (result) {
      //console.log(result);
      $scope.announs = result;
      $ionicLoading.hide();
    }, function (error) {
      //console.log(error);
      $ionicLoading.hide();
      $ionicLoading.show({
        template: 'An error occurred. Please try again in a few minutes.',
        scope: $scope
      });
      $timeout(function () {
        $ionicLoading.hide();
      }, 2000);
    })

    $scope.showFilterBar = function () {
      filterBarInstance = $ionicFilterBar.show({
        items: $scope.announs,
        update: function (filteredItems, filterText) {
          $scope.announs = filteredItems;
          if (filterText) {
            //console.log(filterText);
          }
        }
      });
    };

  })
  .controller('ContactCtrl', function ($scope) {
    $scope.openInExternalBrowser = function (url) {
      // Open in external browser
      window.open(url, '_system', 'location=yes');
    };
    $scope.copyright_year = new Date().getFullYear();
  });
