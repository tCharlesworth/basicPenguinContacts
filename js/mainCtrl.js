angular.module('penguin').controller('mainCtrl', function($scope, penguinSvc) {
   
   $scope.penguins = penguinSvc.getPenguins();
   
   $scope.addNewPenguin = function(penguin) {
       penguinSvc.addNewPenguin(penguin);
   }
   
   $scope.openModal = function() {
       $('#modal1').openModal();
   };
});