const logAndReturn=<Type>(value:Type):Type=>{
    return value
}

console.log(logAndReturn<number>(59));
console.log(logAndReturn<string>("Hello World"));
console.log(logAndReturn<boolean>(true));

// OVERLOADING IN GENERICS
const add =<T, U> (a:T, b:U) =>{
    return console.log(a, b);
    
    
}

add<number, number>(5, 20);
add<number, string>(5, "Hi");


const sub =<T, U> (c:T, d:U, e:boolean) =>{
    return console.log(a, b, c);
}

sub<number, string>(15, "hi", false)
