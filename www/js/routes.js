angular.module('PickBeauty').config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

		// setup an abstract state for the tabs directive
		.state('tab', {
			url: "/tab",
			abstract: true,
			templateUrl: "templates/tabs.html"
		})

		// Each tab has its own nav history stack:

		.state('tab.dash', {
			url: '/dash',
			views: {
				'tab-dash': {
					templateUrl: 'templates/tab-search.html',
					controller: 'DashCtrl'
				}
			}
		})

		.state('tab.chats', {
			url: '/chats',
			views: {
				'tab-chats': {
					templateUrl: 'templates/tab-chats.html',
					controller: 'ChatsCtrl'
				}
			}
		})
		.state('tab.chat-detail', {
			url: '/chats/:chatId',
			views: {
				'tab-chats': {
					templateUrl: 'templates/chat-detail.html',
					controller: 'ChatDetailCtrl'
				}
			}
		})

		.state('tab.companies', {
			url: '/companies',
			views: {
				'tab-companies': {
					templateUrl: 'templates/tab-companies.html',
					controller: 'CompaniesCtrl'
				}
			}
		})
		.state('tab.friend-detail', {
			url: '/friend/:friendId',
			views: {
				'tab-friends': {
					templateUrl: 'templates/friend-detail.html',
					controller: 'FriendDetailCtrl'
				}
			}
		})

		.state('tab.categories', {
			url: '/categories',
			views: {
				'tab-categories': {
					templateUrl: 'templates/tab-categories.html',
					controller: 'CategoriesCtrl'
				}
			}
		})
		.state('tab.products', {
			url: '/products/:category',
			views: {
				'tab-categories': {
					templateUrl: 'templates/products.html',
					controller: 'ProductsCtrl'
				}
			}
		});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/tab/dash');

});