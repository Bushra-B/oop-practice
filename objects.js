'use strict';

//creating an obj. using object literals :- 
/*** 
 var obj_name = {
    property_name: proprety_value,
    .
    .
    .
    method_name(){
        function code;
    },
}  
***/
var userOne = {
    email: 'bushra@robi.com',
    name: 'Bushra',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

console.log(userOne.name);

////////////////////////////////////////
//REM: Updating Object Properties//
/*** 
#Method One: Dot Notation :- 
``obj_name.property_name = new_property_vlaue;``
=> userOne.name = 'updated name';

#Method Two: Using Square Brackets :- 
``obj_name['property_name'] = new_property_value;``
=> userOne['email'] = 'updated email';
***/
//Method Two is useful to access dynamic properties because you can pass a variable in the [] for the property.
/////////////////////////////////////////

////////////////////////////////////////
//REM: Creating New Object Properties and Methods//
/*** 
#A new obj. property can be added after the obj. is created by :-
``obj_name.new_property_name = property_vlaue;``
=> userOne.age = 24;

#A new obj. mathod can be added after the obj. is created by :-
``obj_name.method_name = function(){function code};``
=> userOne.logInfo = function(){//any code here};
***/
/////////////////////////////////////////


