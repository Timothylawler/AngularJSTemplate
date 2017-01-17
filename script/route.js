app
.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	
	$urlRouterProvider.otherwise('/second');
	
	$stateProvider
	.state('main',{
		url: '/',
		abstract: true,
		templateUrl:'templates/first.html',
		controller:'greetingsController as controller'
	})
		
		.state('main.second',{
			url: 'second',
			templateUrl:'templates/second.html'
		})
		
		.state('main.third',{
			url: 'third',
			templateUrl:'templates/third.html'
		})
	
	$locationProvider.hashPrefix('');
});