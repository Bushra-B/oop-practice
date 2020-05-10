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
let users = []

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.score = 0;
        users.push(this);
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

////////////////////////////////////////
//NOTE: Using Method Chaining//
/*** 
#Method Chaining: 
- with method chaining we can call several methods on an object in one line of code using the dot notation.

- to be able to do that we need to return the object (this) after each method so that we can call the other
  methods on that same object.   --without doing this we would be calling the other methods on (undefined)--
***/
/////////////////////////////////////////

//class inheritance :- 
/*** 
 - we can create a new class that has all the properties and methods from another class with other new 
   properties and methods.

- using (extends keyword) => ``class2 extends class1`` in this case class2 will inherit class1
***/
class Admin extends User {
    deleteUser(deleteUser){
        users = users.filter(user => {
            return user.email != deleteUser.email;
        });
    };
};

let admin = new Admin('Bushra - Admin', 'bushra@robi.com');
let userOne = new User('Osama', 'osama@robi.com');
let userTwo = new User('Israa', 'israa@robi.com');
let userThree = new User('Raghad', 'raghad@robi.com');

console.log('adminUser', admin);
// userOne.login(); userOne.logout(); //the regular way of calling methods on an object

admin.login().updateScore().updateScore().updateScore().logout(); //this is method chaining

console.log('all users', users);

admin.deleteUser(userOne);

console.log('female users', users);
