;(function(angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name ngBrxApp.controller:NavCtrl
     * @description
     * # NavCtrl
     * Controller of the ngBrxApp
     */
    angular.module('ngBrxApp')
        .controller('NavCtrl', ['$scope', '$window', 'localStorageService', 'C_LOCALE_KEY', function ($scope, $window, localStorageService, LOCALE_KEY) {
            var langs = [ { name: 'US', value: 'en-us'},
                          { name: 'ZH', value: 'zh-cn'},
                          { name: 'DE', value: 'de-de'}
                        ];
            var topCategory = [ { nameKey: 'nav_sports', url: '/category/sports-tickets/28'},
                                  { nameKey: 'nav_concerts', url: '/category/concerts-tickets/1'},
                                  { nameKey: 'nav_theater', url: '/category/theater-tickets/174'}
                                ];

            $scope.category = topCategory;
            $scope.langs = langs;
            $scope.switchLang = function (v) {
                localStorageService.set(LOCALE_KEY, v);
                $window.location.reload(); // check stubhub.js about dynamic load i18n file.
            };
        }]);

})(angular);
