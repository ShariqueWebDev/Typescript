interface ProductType{
    name:string;
    price:number;
    quantity:number
}

const greet:ProductType = {
    name:"Microsoft",
    price:20000,
    quantity:500
}

const productInfo = (greet:ProductType):string =>{
    return `${greet.name} software of Quantity ${greet.quantity} per price is ${greet.quantity}  `
}

console.log(productInfo(greet))