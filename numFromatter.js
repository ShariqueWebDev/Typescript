function numberFormat(amount){
    const formatter = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency:"USD",
        minimumFractionDigits:2
    })
    return formatter.format(amount)
}

console.log(numberFormat(Math.random(Math.ceil(100000))));


// let a = 20
// let b;
// b=a
// b=30
// console.log(a);

// var val = Math.floor(1000 + Math.random() * 9000);
// console.log(val);

var a = Math.floor(100000 + Math.random() * 900000);   
a = String(a);
// a = a.substring(0,4);
console.log(a);

function ab(){
    let z = {
        name:"sharique",
        func: function fun(){
            return this.name
        }
    }
    
    return z.func()
}

let returnVal = ab()
console.log(ab());

// IT IS THE FIRST WAY TO HANDLE HIGHER ORDER FUNCTION RETURN BY VALUE
function abc(){
    let y = function xyz(){
        return "xyz"
    }

    // return y We can return the function value in such way as well
    return y()
}
let x = abc()
console.log(x)

// IT IS THE SECOND WAY TO HANDLE HIGHER ORDER FUNCTION RETURN FUNCTION
function pqr(){
    return function def(){
        return "def"
    }
}

let w = pqr()
console.log(w());
