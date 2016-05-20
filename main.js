/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog


/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ($scope, $location, $http) {
  console.log("Page Controller reporting for duty.");
   
  //alert("dssf");
$scope.check1=function()
         {
    
        
        // $http.defaults.useXDomain = true;
         //alert($scope.w1);
        var response = $http.get('http://api.openweathermap.org/data/2.5/weather?q='+$scope.w1+'&units=metric&APPID=a6e6288c6b1b998d136476cfcbae2b01');

        response.success(function(data, status, headers, config) {

            $scope.t1=data.main.temp+"'C"+" "+data.name;
            
            if(data.weather[0].main=="Rain")
            $scope.selectedMeal="http://newtopwallpapers.com/wp-content/uploads/2013/04/Rain-Falling-Background.jpg";
            else if(data.weather[0].main=="Clouds")
            $scope.selectedMeal="http://constantine.typepad.com/.a/6a0120a7fc3be9970b01bb08d49380970d-pi";
            else
            $scope.selectedMeal="http://www.youwall.com/wallpapers/201207/sunny-day-wallpaper-1440x900.jpg";



        });

        response.error(function(data, status, headers, config) {
            $scope.t1="Error";
        });

    
};
$scope.check2=function()
         {
    
        
        // $http.defaults.useXDomain = true;
         //alert($scope.w1);
        var response = $http.get('http://api.openweathermap.org/data/2.5/weather?q='+$scope.w2+'&units=metric&APPID=a6e6288c6b1b998d136476cfcbae2b01');

        response.success(function(data, status, headers, config) {

            $scope.t2=data.main.temp+"'C"+" "+data.name;
            if(data.weather[0].main=="Rain")
            $scope.selectedMeal2="http://newtopwallpapers.com/wp-content/uploads/2013/04/Rain-Falling-Background.jpg";
            else if(data.weather[0].main=="Clouds")
            $scope.selectedMeal2="http://constantine.typepad.com/.a/6a0120a7fc3be9970b01bb08d49380970d-pi";
            else
            $scope.selectedMeal2="http://www.youwall.com/wallpapers/201207/sunny-day-wallpaper-1440x900.jpg";
        });

        response.error(function(data, status, headers, config) {
            $scope.t2="Error";
        });

    
};
 $scope.check3=function()
         {
    
        
        // $http.defaults.useXDomain = true;
         //alert($scope.w1);
        var response = $http.get('http://api.openweathermap.org/data/2.5/weather?q='+$scope.w3+'&units=metric&APPID=a6e6288c6b1b998d136476cfcbae2b01');

        response.success(function(data, status, headers, config) {

            $scope.t3=data.main.temp+"'C"+" "+data.name;

            if(data.weather[0].main=="Rain")
            $scope.selectedMeal3="http://newtopwallpapers.com/wp-content/uploads/2013/04/Rain-Falling-Background.jpg";
            else if(data.weather[0].main=="Clouds")
            $scope.selectedMeal3="http://constantine.typepad.com/.a/6a0120a7fc3be9970b01bb08d49380970d-pi";
            else
            $scope.selectedMeal3="http://www.youwall.com/wallpapers/201207/sunny-day-wallpaper-1440x900.jpg";
        });

        response.error(function(data, status, headers, config) {
            $scope.t3="Error";
        });

    
};
$scope.check4=function()
         {
    
        
        // $http.defaults.useXDomain = true;
         //alert($scope.w1);
        var response = $http.get('http://api.openweathermap.org/data/2.5/weather?q='+$scope.w4+'&units=metric&APPID=a6e6288c6b1b998d136476cfcbae2b01');

        response.success(function(data, status, headers, config) {

            $scope.t4=data.main.temp+"'C"+" "+data.name;

            if(data.weather[0].main=="Rain")
            $scope.selectedMeal4="http://newtopwallpapers.com/wp-content/uploads/2013/04/Rain-Falling-Background.jpg";
            else if(data.weather[0].main=="Clouds")
            $scope.selectedMeal4="http://constantine.typepad.com/.a/6a0120a7fc3be9970b01bb08d49380970d-pi";
            else
            $scope.selectedMeal4="http://www.youwall.com/wallpapers/201207/sunny-day-wallpaper-1440x900.jpg";
        });

        response.error(function(data, status, headers, config) {
            $scope.t4="Error";
        });

    
};
$scope.check5=function()
         {
    
        
        // $http.defaults.useXDomain = true;
         //alert($scope.w1);
        var response = $http.get('http://api.openweathermap.org/data/2.5/weather?q='+$scope.w5+'&units=metric&APPID=a6e6288c6b1b998d136476cfcbae2b01');

        response.success(function(data, status, headers, config) {

            $scope.t5=data.main.temp+"'C"+" "+data.name;

            if(data.weather[0].main=="Rain")
            $scope.selectedMeal5="http://newtopwallpapers.com/wp-content/uploads/2013/04/Rain-Falling-Background.jpg";
            else if(data.weather[0].main=="Clouds")
            $scope.selectedMeal5="http://constantine.typepad.com/.a/6a0120a7fc3be9970b01bb08d49380970d-pi";
            else
            $scope.selectedMeal5="http://www.youwall.com/wallpapers/201207/sunny-day-wallpaper-1440x900.jpg";
        });

        response.error(function(data, status, headers, config) {
            $scope.t5="Error";
        });

    
};
$scope.check6=function()
         {
    
        
        // $http.defaults.useXDomain = true;
         //alert($scope.w1);
        var response = $http.get('http://api.openweathermap.org/data/2.5/weather?q='+$scope.w6+'&units=metric&APPID=a6e6288c6b1b998d136476cfcbae2b01');

        response.success(function(data, status, headers, config) {

            $scope.t6=data.main.temp+"'C"+" "+data.name;

            if(data.weather[0].main=="Rain")
            $scope.selectedMeal6="http://newtopwallpapers.com/wp-content/uploads/2013/04/Rain-Falling-Background.jpg";
            else if(data.weather[0].main=="Clouds")
            $scope.selectedMeal6="http://constantine.typepad.com/.a/6a0120a7fc3be9970b01bb08d49380970d-pi";
            else
            $scope.selectedMeal6="http://www.youwall.com/wallpapers/201207/sunny-day-wallpaper-1440x900.jpg";
        });

        response.error(function(data, status, headers, config) {
            $scope.t6="Error";
        });

    
};
$scope.check7=function()
         {
    
        
        // $http.defaults.useXDomain = true;
         //alert($scope.w1);
        var response = $http.get('http://api.openweathermap.org/data/2.5/weather?q='+$scope.w7+'&units=metric&APPID=a6e6288c6b1b998d136476cfcbae2b01');

        response.success(function(data, status, headers, config) {

            $scope.t7=data.main.temp+"'C"+" "+data.name;

            if(data.weather[0].main=="Rain")
            $scope.selectedMeal7="http://newtopwallpapers.com/wp-content/uploads/2013/04/Rain-Falling-Background.jpg";
            else if(data.weather[0].main=="Clouds")
            $scope.selectedMeal7="http://constantine.typepad.com/.a/6a0120a7fc3be9970b01bb08d49380970d-pi";
            else
            $scope.selectedMeal7="http://www.youwall.com/wallpapers/201207/sunny-day-wallpaper-1440x900.jpg";
        });

        response.error(function(data, status, headers, config) {
            $scope.t7="Error";
        });

    
};
$scope.check8=function()
         {
    
        
        // $http.defaults.useXDomain = true;
         //alert($scope.w1);
        var response = $http.get('http://api.openweathermap.org/data/2.5/weather?q='+$scope.w8+'&units=metric&APPID=a6e6288c6b1b998d136476cfcbae2b01');

        response.success(function(data, status, headers, config) {

            $scope.t8=data.main.temp+"'C"+" "+data.name;

            if(data.weather[0].main=="Rain")
            $scope.selectedMeal8="http://newtopwallpapers.com/wp-content/uploads/2013/04/Rain-Falling-Background.jpg";
            else if(data.weather[0].main=="Clouds")
            $scope.selectedMeal8="http://constantine.typepad.com/.a/6a0120a7fc3be9970b01bb08d49380970d-pi";
            else
            $scope.selectedMeal8="http://www.youwall.com/wallpapers/201207/sunny-day-wallpaper-1440x900.jpg";
        });

        response.error(function(data, status, headers, config) {
            $scope.t8="Error";
        });

    
};
$scope.check9=function()
         {
    
        
        // $http.defaults.useXDomain = true;
         //alert($scope.w1);
        var response = $http.get('http://api.openweathermap.org/data/2.5/weather?q='+$scope.w9+'&units=metric&APPID=a6e6288c6b1b998d136476cfcbae2b01');

        response.success(function(data, status, headers, config) {

            $scope.t9=data.main.temp+"'C"+" "+data.name;

            if(data.weather[0].main=="Rain")
            $scope.selectedMeal9="http://newtopwallpapers.com/wp-content/uploads/2013/04/Rain-Falling-Background.jpg";
            else if(data.weather[0].main=="Clouds")
            $scope.selectedMeal9="http://constantine.typepad.com/.a/6a0120a7fc3be9970b01bb08d49380970d-pi";
            else
            $scope.selectedMeal9="http://www.youwall.com/wallpapers/201207/sunny-day-wallpaper-1440x900.jpg";
        });

        response.error(function(data, status, headers, config) {
            $scope.t9="Error";
        });

    
};
 
});