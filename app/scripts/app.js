'use strict';

var myModule = angular.module('myModule', []);

myModule.controller('myController',  function($scope) {
    $scope.skills = [
        {id: '25', title: 'WordPress', skillCat: '533ac874f7d909710656225f'},
        {id: '94', title: 'AngularJS', skillCat: '533ac874f7d909710656294f'},
        {id: '99', title: 'Bootstrap', skillCat: '533ac874f7d909710656299f'},
        {id: '61', title: 'Javascript', skillCat: '533ac874f7d909710656210f'},
        {id: '10', title: 'CSS3', skillCat: '533ac874f7d909710656210f'},
    ];
    $scope.categories = [
        {id: '533ac874f7d909710656299f', title: 'Framework'},
        {id: '533ac874f7d909710656210f', title: 'Language'},
        {id: '533ac874f7d909710656299f', title: 'Other'},
        {id: '533ac874f7d909710656225f', title: 'CMS'},
        {id: '533ac874f7d909710656294f', title: 'Libary'},
        {id: '533ac874f7d909710656210f', title: 'Technique'},
    ];
});

myModule.filter('lookInside', function(){
    return function(item, array){
        for (var i=0; i<array.length; i++){
	        if (array[i].id === item.skillCat) {
	            // return array[i].title;
	            return array[i].title;
	        }
        }
    };
});
