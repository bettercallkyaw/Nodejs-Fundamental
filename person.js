// const person={
//     fullName:'bob smith',
//     email:'bob@gmail.com',
//     age:33,
//     hobbies:['hiking','paint','movies'],
//     links:[
//         {
//             facebook:'www.facebook.com/profile.php?id=4567890'
//         },
//         {
//             website:'www.bobsmith.com/info'
//         }
//     ]
// };

// module.exports=person;

////////////////////////////////

//module wrapper function
// (function(exports,require,module,__filename,__dirname){

// });

console.log(__dirname,__filename);

class Person{
    constructor(fullName,email,age){
        this.fullName=fullName;
        this.email=email;
        this.age=age;
    }
    greeting(){
        console.log(`hello my name is ${this.fullName}.my email address is ${this.email}.I am ${this.age} year old.`);
    }
}

module.exports=Person;