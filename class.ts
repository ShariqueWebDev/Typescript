
class Persons {
    name: string;
    age: number;
    hobbies:string[];

    constructor(name:string, age:number, hobbies:string[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}

// SHORTHEND METHOD TO DEFINE A CLASS OF OBJECT AND ITS PROPERTIES
class Persons1 {
    constructor(
        public name:string,
        public age:number, 
        public hobbies:string[]
    ){}
}
const persons1:Persons1 = new Persons1("sharique", 29, ["reading, coding"])
console.log(persons1);

const persons2:Persons = new Persons("tarique", 27, ["Business, body fitness"])
console.log(persons2);

const persons3:Persons1 = new Persons1("Anazlana", 16, ["chappan tikli", "chapri giri"])


