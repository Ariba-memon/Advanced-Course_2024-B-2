class Person {
    age = 20;
    name= 'ayesha';
    greet(){
        console.log(this.name)
    }
    walk(){
        console.log(this.name + 'is walking')
    }
}

var PersonA = new Person();
console.log(PersonA.age)
