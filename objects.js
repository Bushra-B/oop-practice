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
        this.score = 0;
    };
    login(){
        console.log(this.email, 'just logged in');
        return this;
    };
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    };
    updateScore(){
        this.score++;
        console.log(this.name, 'now has a score of ', this.score);
        return this;
    }
};

let userOne = new User('Bushra', 'bushra@robi.com');

console.log('userOne', userOne);
// userOne.login(); userOne.logout(); //the regular way of calling methods on an object
userOne.login().updateScore().updateScore().updateScore().logout();


////////////////////////////////////////
//NOTE: Using Method Chaining//
/*** 
#Method Chaining: 
- with method chaining we can call several methods on an object in one line of code useing the dot notation.

- to be able to do that we need to return the object (this) after each method so that we can call the other
  methods on that same object.   --without doing this we would be calling the other methods on (undefined)--
***/
/////////////////////////////////////////

