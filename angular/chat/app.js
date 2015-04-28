'use strict';

var chatApp = angular.module('chatApp', []);

chatApp.service('SchoolService', ['$http', function($http){

	this.getSchools = function(){
		return $http({
			url: 'http://localhost:3000/api/school/getAll',
			method: 'GET'
		});
	};

	this.createSchool = function(_school){
		return $http({
			method: 'POST',
			url: 'http://localhost:3000/api/school/create',
			data: {
				school: _school
			}
		});
	};
}]);

chatApp.controller('MainChatCtrl', ['$scope', 'SchoolService', function($scope, SchoolService){

	$scope.schools = [];

	$scope.school = {};


	$scope.showName = function(name){
		alert("Clickeaste en "+name);
	};

	$scope.loadSchools = function(){

		SchoolService.getSchools()
		.success(function(response){
			if(!response.error){
				$scope.schools = response.schools;
			}else{
				console.log(response.message);
			}

		})
		.error(function(response){

		});	

	};

	$scope.registerSchool = function(){
		//$scope.school

		SchoolService.createSchool($scope.school)
		.success(function(response){
			if(!response.error){
				$scope.school = {};
				$scope.loadSchools();
			}else{
				console.log(error.message);
			}
		})	
		.error(function(response){

		});
	};



}]);

chatApp.controller('UsersChatCtrl', ['SchoolService', function(SchoolService){


	
}]);