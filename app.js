angular.module('myApp',[])
  .controller('AppController', function($scope){ //コントローラー名,実装。$scopeに入れたものがHTMLで使える。
    $scope.username = ''; //入力ユーザー名を保持
    $scope.users=[]; //ユーザー一覧。空の配列で初期化
    $scope.submit = function(){
      //新しいユーザーをユーザー一覧に登録
      $scope.users.push({
        username:$scope.username,
        url:'https://twitter.com/'+$scope.username
      });
    };
  });