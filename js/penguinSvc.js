angular.module('penguin').service('penguinSvc', function($firebaseObject, $firebaseArray) {
   var url = 'https://penguin-contacts.firebaseio.com/';
   
   var listRef = new Firebase(url+'penguins');
   
   this.addNewPenguin = function(newPenguin) {
       $firebaseArray(listRef).$add(newPenguin);
   }
   
   this.getPenguins = function() {
       return $firebaseArray(listRef);
   }
   
});