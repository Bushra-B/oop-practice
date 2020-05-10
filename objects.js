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
}  
***/
/*** 
 var obj_name = new Class_name(argument1_value, argument2_value, ...); 
***/

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    };
};

let userOne = new User('Bushra', 'bushra@robi.com');

console.log('userOne', userOne);

