var app = angular.module("myApp",[]);
app.controller("myCtr",['$scope',function($scope){
	$scope.clickme=function(){
		// $scope.updatname = name;
		// $scope.updatdesc = desc;
		// $location.path('login.html');
		 
		 // window.location.href = 'https://www.facebook.com';
		  window.location.href = 'login.html';

	}
}]);

app.controller("signup",function($scope,$http){
	$scope.signup=function(){

		window.location.href = 'signup.html';
	}
	$scope.login=function(){
		console.log("hello oday")
		$http({
			method:'post',
			url:'/login',
			data:JSON.stringify({
				username:$scope.username1,
				password:$scope.password1
			}),
		headers: {'Content-Type': "application/json; charset = utf-8"}
		}).then(function(response){
			alert('hello correct')
		}).catch(function(){
			console.log('big error')
		})
	}
})

app.controller('Regester',function($scope,$http){
	$scope.Regester = function(){
		console.log($scope.username)
		$http({
			method:'post',
			url:'/signup',
			data:JSON.stringify({
				username:$scope.username,
				password:$scope.password,
				location:$scope.location,
				phoneNumber:$scope.phoneNumber,
				description:$scope.description,
				rating:$scope.rating,
				imgUrl:$scope.imgUrl
			}),
		headers: {'Content-Type': "application/json; charset = utf-8"}
		}).then(function(response){
			console.log(response.data)
			window.location.href = 'login.html';
			return 
		}).catch(function(){
			console.log('erooooor')
		})


// 	$http({
// 		method:'GET',
// 		url:'/all'
// 	}).then(function(response){
// 		console.log(response.data)	
// },function(error){
// 		console.log('errrrrrrrrrrrrrrrrrrrrrr')
// 	})
	}
})

// app.controller("signup",['$scope',function($scope){
// 	$scope.signup=function(){

// 		window.location.href = 'signup.html';
// 	}
// }])