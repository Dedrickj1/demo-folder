let person = {
    name: "John",
    age: 30,
    profession: "Engineer",
    greet: function(){
    console.log("Hello, my name is " + this.name);
}
};

console.log(person.name); 
console.log(person.age);  
person.greet();