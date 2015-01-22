angular.module('PickBeauty').run(function($http, $rootScope, $log) {

	var domain = 'http://www.animal-testing-api.com/v1';

	$http.get(domain + '/product').success(function(products) {
		$rootScope.products = products;
	});

	$http.get(domain + '/company').success(function(companies) {
		$rootScope.companies = companies;
	});

	$http.get(domain + '/category').success(function(categories) {
		$rootScope.categories = categories;
	});

})