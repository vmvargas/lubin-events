angular.module('starter.services', ['ngResource'])

.factory('Session', function ($resource) {
    console.log("Hello1");
    console.log($resource.sessionId);
    console.log("Hello2");
    /*
    var rtnSession;
    var sessionsvar = $resource('https://appsrv.pace.edu/Lubin/ListServMobile/getEventsJSON.cfm?EventId=:sessionId')
    
    sessionsvar.get()
                .$promise.then(function(sessions) {
                    rtnSession = sessions;
                  });

    //return $resource('https://appsrv.pace.edu/Lubin/ListServMobile/getEventsJSON.cfm?EventId=:sessionId');

    
    var SessionQuery = $resource('http://172.20.104.142:5000/sessions/:sessionId', {sessionId:'@id'});


    var sessionsvar = SessionQuery.get({sessionId:$resource.sessionId}, function() {
        //user.abc = true;
        sessionsvar.$save();
    });

    //sessionsvar = $resource('http://172.20.104.142:5000/sessions/:sessionId');
    console.log("Data ---");
    console.log(sessionsvar.data);
    console.log("--- Data");
    */
    //return $resource('http://172.20.104.142:5000/sessions/:sessionId');
    return $resource('https://appsrv.pace.edu/Lubin/ListServMobile/getEventsJSON.cfm?EventId=:sessionId');
});