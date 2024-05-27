class Practice {
  constructor(public name: string, public city: string) {}
}

const p: Practice = new Practice("sharique", "bhiwandi");
console.log(p);

class SubPractice extends Practice {
  private _ages: number | undefined;
  constructor(name: string, city: string, public quali: string) {
    super(name, city);
  }
  public set catchError(age: number) {
    if (age > 120) {
      throw new Error("is it not valid number!");
    }
    this._ages = age;
  }
  print(): string {
    return `my ${this.name} and my age is ${this._ages}`;
  }
}

const p1 = new SubPractice("Aslam", "mumbai", "10")
console.log(p1.catchError = 55);

console.log(p1.print());

