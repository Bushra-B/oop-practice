'use strict';

//creating objects using ES6 classes :- 
/*** 
 class Class_name {
    constructor(argument1, argument2, ...){
        this.property1_name = argument1;
        this.property2_name = argument2;
        .
        .
        .
    }
    method_name(){
        function code;
    }
}  
***/
/*** 
 var obj_name = new Class_name(argument1_value, argument2_value, ...); 
 obj_name.method_name();
***/

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    };
    login(){
        console.log(this.email, 'just logged in');
    };
    logout(){
        console.log(this.email, 'just logged out');
    };
};

let userOne = new User('Bushra', 'bushra@robi.com');

console.log('userOne', userOne);
userOne.login(); userOne.logout();

