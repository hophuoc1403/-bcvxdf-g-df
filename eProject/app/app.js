var myApp = angular.module("myApp", ["ngRoute"]);

myApp.controller("myCtrl", ($scope, $routeParams, $interval, $location) => {
  var controller = this;
  controller.date = new Date();
  $interval(function () {
    controller.date = new Date();
  }, 1000);
  $interval(function () {
    window.location.href = window.location.href + "?rnd=" + Math.random;
  }, 1800000);

  $scope.viewers = $interval(()=>{$scope.viewer = Math.floor(Math.random()*100000000)}, 100); 
  $scope.arrayMenu = ["", "", "", "", "active", "", ""];
  $scope.menuActive = function (param) {
    for (let i = 0; i < $scope.arrayMenu.length; i++) {
      $scope.arrayMenu[i] = "";
    }
    if (param == "traditional") {
      $scope.arrayMenu[0] = "active";
    } else if (param == "temporary") $scope.arrayMenu[1] = "active";
    else if (param == "design") $scope.arrayMenu[2] = "active";
    else if (param == "modern") $scope.arrayMenu[3] = "active";
    else if (param == "home") $scope.arrayMenu[4] = "active";
    else if (param == "contact") $scope.arrayMenu[5] = "active";
    else if (param == "about") $scope.arrayMenu[6] = "active";
  };

});

myApp.controller("divCtrl", ($scope, $routeParams, $interval, $location) => {
  $scope.date = new Date();
  $interval(function () {
    $scope.date = new Date();
  }, 1000);
  $interval(function () {
    window.location.href = window.location.href + "?rnd=" + Math.random;
  }, 1800000);
});

myApp.controller("feedBack", ($scope, $routeParams, $interval, $location) => {
  $scope.subMitForm = (name, mail, mess) => {
    $scope.feedbacks = JSON.parse(localStorage.getItem("feedback") || "[]");
    console.log(typeof($scope.feedbacks));
    
    $scope.feedback = {name,mail,mess}
    $scope.feedbacks.push($scope.feedback)
    localStorage.setItem("feedback",JSON.stringify($scope.feedbacks))
    $location.path("/")
  }
});

myApp.controller("traditionCrt", ($scope, $http) => {
  $scope.filter = ["active", "", ""];
  $scope.filterBox = [true, false, false];

  $scope.filterActive = (param) => {
    for (let i = 0; i < $scope.filter.length; i++) {
      $scope.filter[i] = "";
      $scope.filterBox[i] = false;
    }
    if (param == 0) {
      $scope.filter[0] = "active";
      $scope.filterBox[0] = true;
    } else if (param == 1) {
      $scope.filter[1] = "active";
      $scope.filterBox[1] = true;
    } else if (param == 2) {
      $scope.filter[2] = "active";
      $scope.filterBox[2] = true;
    }
  };
  $scope.TraditionalArabic = [];
  $scope.TraditionalIndic = [];
  $scope.TraditionalGreek = [];
  $http.get("db.json").then(function (response) {
    $scope.TraditionalArabic = response.data.traditional.arabic;
    $scope.TraditionalIndic = response.data.traditional.indic;
    $scope.TraditionalGreek = response.data.traditional.greek;
  });
});

myApp.controller("designCrt", ($scope) => {
  $scope.filter = ["active", "", ""];
  $scope.filterBox = [true, false, false];

  $scope.filterActive = (param) => {
    for (let i = 0; i < $scope.filter.length; i++) {
      $scope.filter[i] = "";
      $scope.filterBox[i] = false;
    }
    if (param == 0) {
      $scope.filter[0] = "active";
      $scope.filterBox[0] = true;
    } else if (param == 1) {
      $scope.filter[1] = "active";
      $scope.filterBox[1] = true;
    } else if (param == 2) {
      $scope.filter[2] = "active";
      $scope.filterBox[2] = true;
    }
  };
});

myApp.controller("contemporaryCrt", ($scope) => {
  $scope.filter = ["active", "", ""];
  $scope.filterBox = [true, false, false];

  $scope.filterActive = (param) => {
    for (let i = 0; i < $scope.filter.length; i++) {
      $scope.filter[i] = "";
      $scope.filterBox[i] = false;
    }
    if (param == 0) {
      $scope.filter[0] = "active";
      $scope.filterBox[0] = true;
    } else if (param == 1) {
      $scope.filter[1] = "active";
      $scope.filterBox[1] = true;
    } else if (param == 2) {
      $scope.filter[2] = "active";
      $scope.filterBox[2] = true;
    }
  };
});
myApp.controller("modernCtr", ($scope) => {
  $scope.filter = ["active", "", ""];
  $scope.filterBox = [true, false, false];

  $scope.filterActive = (param) => {
    for (let i = 0; i < $scope.filter.length; i++) {
      $scope.filter[i] = "";
      $scope.filterBox[i] = false;
    }
    if (param == 0) {
      $scope.filter[0] = "active";
      $scope.filterBox[0] = true;
    } else if (param == 1) {
      $scope.filter[1] = "active";
      $scope.filterBox[1] = true;
    } else if (param == 2) {
      $scope.filter[2] = "active";
      $scope.filterBox[2] = true;
    }
  };
});

myApp.controller("footerCtr", function ($scope) {
  $scope.date = new Date().toString();
});

myApp.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "home.html",
    })
    .when("/traditional", {
      templateUrl: "traditional.html",
    })
    .when("/contemporary", {
      templateUrl: "contemporary.html",
    })
    .when("/design", {
      templateUrl: "design.html",
    })
    .when("/modern", {
      templateUrl: "modern.html",
    })
    .when("/contact", {
      templateUrl: "contact.html",
    })
    .when("/feedback", {
      templateUrl: "feedBack.html",
    })
    .when("/about", {
      templateUrl: "about.html",
    });
});
