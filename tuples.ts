type PersonalInfo = readonly [string, number, boolean];

const person1:PersonalInfo = ["Sharique", 29, true]
const person2:PersonalInfo = ["Tarique", 27, false]

const isPersonDetails=(p1:PersonalInfo ):string=>{
    const [name, age, bol] = p1
    // p1.push("sharique Aslam") is not valid if we use readonly property in tuple of array
    console.log(p1);
    if(bol === true){
        return `he is ${name} his is ${age} he has driving licence ${bol}`
    }
    else{

        return `he is ${name} his is ${age} he has driving licence ${bol}`
    }
    
}

console.log(isPersonDetails(person2));
// console.log(isPersonDetails(person2));
