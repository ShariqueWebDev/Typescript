class UserDetials {
    private _currentSalary: number | undefined
  constructor(
    public name: string,
    public id: number,
    protected qualification: string
    ){}
    // SET METHOD TO STORE A VALUE IN A VARIABLE
    public set salary(salary:number){
      if(salary >= 300000){
        throw new Error("salary number are invalid")
      }
      this._currentSalary = salary;
    }
    
    // GET METHOD TO STORE A VALUE IN A VARIABLE
    public get returnSalary():number{
        if(this._currentSalary === undefined){
          throw new Error("input dont have a valid value!")
        }
        return this._currentSalary;
        
    }

    parentFun(): string{
        return `my name is ${this.name} and my salary is ${this._currentSalary}`
    }
}

const printParentFun:UserDetials = new UserDetials("safiya", 2, "llb") 
console.log(printParentFun.salary = 2000) //
console.log(printParentFun.parentFun());
console.log(printParentFun.returnSalary);


class Company1 extends UserDetials {
    constructor(
        name: string,
        id: number,
        qualification: string,
        public company: string,
  ) {
    super(name, id, qualification);
  }

  introduce(): string {
    return `my name is ${this.name} and i am currently working in ${this.company}`;
  }
}

const userDet: UserDetials = new UserDetials("Sharique", 1, "BCA");
console.log(userDet);

const emp1: Company1 = new Company1("sharique", 5, "CS", "Amazon");
console.log(emp1.introduce());
