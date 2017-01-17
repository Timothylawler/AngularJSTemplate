angular.module('app')
	.controller('greetingsController',
function ($scope, $http) {
	var self = this;
	
	this.greetings = "Hello World!";
	
});