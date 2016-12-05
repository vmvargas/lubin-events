angular.module('starter.services', ['ngResource'])
.factory('Event', function ($resource) {
    return $resource('https://appsrv.pace.edu/Lubin/ListServMobile/getEventsJSON.cfm?EventId=:eventId');
})
.factory('Announ', function ($resource) {
    return $resource('https://appsrv.pace.edu/Lubin/ListServMobile/getAnnounsJSON.cfm?AnnounId=:announId');
});