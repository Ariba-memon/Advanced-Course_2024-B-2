
// console.log(this)

// function sum(){
//     console.log(this)
// }

// sum()

var person = {
    name : "Ariba",
    id : 1233,
    greet:function(){
        console.log('hello' +this.id)
    }
}
person.greet()

// function greet(){

// }