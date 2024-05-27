let a : number  = 1
a = 2
console.log(a);


function sum(a:number, b:number):number{
    return a+b
}

const dec = (a:number, b:number):number=>{
    return a-b
}

console.log(sum(10, 5));
console.log(dec(10, 5));

let b: number = NaN
console.log(b);

const isDivisibleBy4and8 = (a:number):boolean =>{
    if(a%4===0 && a%8===0){
        return true
    }
    else{
        return false
    }
}
console.log(isDivisibleBy4and8(32));

// BIG INTEGER
let bigNumber:bigint = 9007199254740992n; // First method to initialize big integer
console.log(bigNumber);

let anotherBigInt = BigInt("90071992547409925")  // Second method to initialize big integer
console.log(anotherBigInt);

let sumOfBigInt:bigint= bigNumber + anotherBigInt; 
console.log(sumOfBigInt);


// PROMISING AND DATA FETCHING

// async function fetchData ():Promise<unknown> {
//     const response = await fetch('https://dummyjson.com/products')
//     const data = await response.json()
//     return data
// }

// async function getData(){
//     const response = await fetchData()
//     if(typeof response === "object"){
//         return response;        // there will be some code
//     }
// }

// console.log(getData().then((info)=>console.log(info)
// ));
// let resData;
// async function fetchData():Promise<unknown> {
//     const response = await fetch("https://dummyjson.com/products")
//     if(typeof response === "object"){
//         const data = await response.json()
//         return data
//     }
// }

// const getData = async () =>{
//     let storeData = await fetchData()
//     return storeData;
// }
// getData().then((p)=>console.log(p)
// )

// CHECK IS PALINDROME
function isPalindrome(palin:string):boolean{
    let bol:boolean = true
    let convStr = palin.toLowerCase()
    let splitPalin = convStr.split("").reverse().join("")

    if(convStr === splitPalin){
        return bol;
    }
    else{
        bol = false
    }
    return bol
}

console.log(isPalindrome("Madams"));


let arr = [1,10,25,65,25,21,32]
function findMaxValue([...arr]):number{
    let findMaxnum = Math.max(...arr)
    return findMaxnum
}

console.log(findMaxValue([...arr]));


// CREATE ARRAY USING CONSTRUCTOR
let array:number[] = new Array(1,2,3)
console.log(array);

let array1:string[] = Array.of("sharique", "aslam", "anzalna") 
console.log(array1);

let addElement = [1,2,3,4] 
console.log(addElement);


// ADD ELEMENT TO CHCEK MUTABILITY OF PARENT ELEMENT
let addedElem = addElement.push(5)
console.log(addedElem);
console.log(addElement);


// FILTER METHOD IN TYPESCRIPT
let stringOfArray = ["Anzalna", "Safiya", "Rukhsana", "Aslam", "Aafiya", "Aiza", "Adil", "Darakhsha", "kahekasha"]
console.log(stringOfArray);


function filterMethod(stringOfArray:string[]){
    let filterName:string[] = stringOfArray.filter((itrator)=>{
        if(itrator.charAt(0)==="A")
        return itrator;
    })
    return filterName;

}

console.log(filterMethod(stringOfArray));

// OBJECT IN TYPESCRIPT

type Product = {
    name:string;
    quantity:number;
    price:number
}

const product:Product= {
    name:"dell cover",
    quantity:500,
    price:50
}

const calculateThePrice = (products:Product) =>{
    let totalPrice:number = products.price * products.quantity
    return totalPrice;
}

console.log(calculateThePrice(product));


// SIGNITURE CALL IN TYPESCRIPT

type Student = {
    name:string;
    age:number;
    gender?:number
    greet:(country:string)=>string
}

const student:Student = {
    name:"sharique",
    age:29,
    greet:(country)=>`Hi ${student.name} i am ${student.age}, am from ${country}`
}

console.log(student.greet("india"));




 
  

















