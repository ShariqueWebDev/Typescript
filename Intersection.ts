type User1 = {
    name:string;
    rollNo:number
}

type Locations = {
    city:string;
    area?:string
}

type CombOfUSandLoc = User1 | Locations //We can use union to justify both of Objects or ignore any one or more  

const userDetials:CombOfUSandLoc = {
    name:"sharique",
    rollNo:51,
    city:"Bhiwandi",
}


type interSectionOfUsandLoc = User1 & Locations //INTERSECTION

const userDetials1:interSectionOfUsandLoc = {
    name: "Tarique",
    rollNo:50,
    city:"Thane",
    area:"Bhao Nagar"
}

let num = "1"
 parseInt(num)
console.log((typeof num));
