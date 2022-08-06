// Arrow function v/s Normal Function

// Arrow function has lexical scope for "this"
let obj1 = {
    greeting : "Good Morning",
    names : ["Harry","Ajay","Abhishek"],
    speak(){
        this.names.forEach((student) => {
            console.log(this.greeting + " -Balle balle- " + student);
        })
    }
}

obj1.speak();


// Normal function
let obj2 = {
    greeting : "Good Morning",
    names : ["Harry","Ajay","Abhishek"],
    speak(){
        this.names.forEach(function(student) {
            console.log(this.greeting + " -Balle balle- " + student);
        })
    }
}

obj2.speak();