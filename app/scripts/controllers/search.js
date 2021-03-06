;(function(angular){
    'use strict';

    // a maybe SEO friendly URL
    /*
     function generateEventUrl2 (event) {
     var xs = [''],
     eventId = '' + event.id,
     eventUrl = event.eventUrl.replace('-' + eventId, '');

     if (event.performers && event.performers.length >= 1) {
     xs.push(event.performers[0].url);
     }

     return xs.concat([eventUrl, 'event', eventId]).join('/');
     }
     */

    function generateEventUrl (event) {
        var eventId = '' + event.id,
            eventUrl = event.eventUrl.replace('-' + eventId, '');
        return '/event/' + eventUrl + '/' + eventId;
    }

    /**
     * @ngdoc function
     * @name ngBrxApp.controller:SearchCtrl
     * @description
     * # SearchCtrl
     * Controller of the ngBrxApp
     */
    angular.module('ngBrxApp')
        .controller('SearchCtrl', function ($scope, $location, searchApi) {
            var so = $location.search();

            searchApi.events(so)
                .success(function (data) {
                    if (!!data) {
                        $scope.data = data;
                        $scope.eventUrl = generateEventUrl;
                    }
                });
        });

})(angular);
