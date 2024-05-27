function inputValue(value: string | number | boolean) : string| number| boolean {
    let result:any;
  if (typeof value === "string") {
    result = value.toUpperCase();
  } else if (typeof value === "number") {
    result = value * 2;
  } else if(typeof value === "boolean") {
    result = value = false;
  }
  return result
}

console.log(inputValue(55));
console.log(inputValue("Hello World"));
console.log(inputValue(false));
