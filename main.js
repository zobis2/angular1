/**
 * Created by or on 24/09/2017.
 */
var contacts = [
    {
        id:1,
        name: "Friends",
        type: "Group",
        contacts: [
            {id:2, name: "Udi", type: "Contact"},
            {id:3, name: "Tommy", type: "Contact"},
            {
                id:6,
                name: "Old Friends",
                type: "Group",
                contacts: [
                    {id:7, name: "Itay", type: "Contact"},
                ]
            },
        ]
    },
    {
        id:4,
        name: "Family",
        type: "Group",
        contacts: [
            {id:5, name: "Roni", type: "Contact"},
        ]
    },
    {id: 8, name: "Ori", type: "Contact"},
];
var myApp = angular.module('examapp', ['ngRoute']);




myApp.controller('listctrl', function($scope, $compile,$rootScope,$routeParams) {
    $scope.intial=function(arrayinput){

        var array=angular.copy(arrayinput);
        for(i=0;i<array.length;i++){
          //  array[i].contacts=null; /// making sure it wont be rendered
            $scope.contact.push(array[i]);
        }

    };
$scope.itemclicked=function(elem){  /// ng-if is needed since it will not be displayed on the dome
    elem.clicked=!elem.clicked;

}
$scope.contact=[];
$scope.intial(contacts);
});
