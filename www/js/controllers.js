angular.module('PickBeauty')

.controller('SearchCtrl', function($scope, Search) {
	$scope.search = {};
	$scope.$watch('search.query', function(term) {
		$scope.searchResults = Search.search(term);
	})
})

.controller('CompaniesCtrl', function($scope) { })

.controller('CategoriesCtrl', function($scope) {})

.controller('ProductsCtrl', function($scope, $stateParams) {
	$scope.categoryName = $stateParams.category;
})

.controller('AboutCtrl', function($scope) {});

