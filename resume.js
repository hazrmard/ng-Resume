var Resume = angular.module("Resume", []);
Resume.controller("resumeController", function($scope, $http) {
    $http.get("resume.json")
        .success(function(response){
            $scope.resumeData = response;
        });
});
