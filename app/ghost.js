var ghostApp = angular.module('ghost', ['ngRoute']).config(function($interpolateProvider){
        $interpolateProvider.startSymbol('[[').endSymbol(']]');
    }
);