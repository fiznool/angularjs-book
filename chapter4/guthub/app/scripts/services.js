'use strict';

var services = angular.module('guthub.services', ['ngResource']);

services.factory('Recipe', ['$resource', function($resource) {
  return $resource('/recipes/:id', { id: '@id' });
}]);

services.factory('Promise', ['$q', function($q) {
  return function(workFn) {
    return function() {
      var df = $q.defer();
      workFn(df.resolve, df.reject);
      return df.promise;
    };
  };
}]);

services.factory('MultiRecipeLoader', ['Recipe', 'Promise', function(Recipe, Promise) {
  return Promise(function(resolve, reject) {
    var error = function() {
      reject('Unable to fetch recipes');
    };
    Recipe.query(resolve, error);
  });
}]);

services.factory('RecipeLoader', ['Recipe', '$route', 'Promise',
  function(Recipe, $route, Promise) {
    return Promise(function(resolve, reject) {
      var error = function() {
        reject('Unable to fetch recipe ' + $route.current.params.recipeId);
      };
      var id = $route.current.params.recipeId;
      Recipe.get({id:id}, resolve, error);
    });
}]);

/*services.factory('MultiRecipeLoader', ['Recipe', '$q',
    function(Recipe, $q) {
  return function() {
    var delay = $q.defer();
    Recipe.query(function(recipes) {
      delay.resolve(recipes);
    }, function() {
      delay.reject('Unable to fetch recipes');
    });
    return delay.promise;
  };
}]);

services.factory('RecipeLoader', ['Recipe', '$route', '$q',
    function(Recipe, $route, $q) {
  return function() {
    var delay = $q.defer();
    Recipe.get({id: $route.current.params.recipeId}, function(recipe) {
      delay.resolve(recipe);
    }, function() {
      delay.reject('Unable to fetch recipe '  + $route.current.params.recipeId);
    });
    return delay.promise;
  };
}]);*/