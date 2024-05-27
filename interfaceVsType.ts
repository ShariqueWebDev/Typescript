interface Data{
    name:string
    roll:string
}
interface ExData{
    city:string
    id:number
}

interface AllData extends Data, ExData{} 

class UserDet implements AllData{
    constructor(
        public name:string,
        public roll:string,
        public city:string,
        public id:number
    ){}

    introduce():string{
        return `${this.name} and his id is ${this.id} and he live in ${this.city}`
    }
}

const a1 = new UserDet("sharique", "Developer", "bhiwandi", 5);

console.log(a1.introduce());

class Sharique1 extends UserDet{
    private _uid: number | undefined
    constructor(
        name:string,
        roll:string,
        city:string,
        id:number,
        public contact:number,
    ){
        super(name, roll, city, id)
    }

    public set setUid(uid:any){
        uid = uid.toString()
        uid = uid.split("")
        if(uid.length > 8 || uid.length < 8){
            throw new Error("please add atleast 8 character")
        }
        uid = uid.join("")
        uid = +uid
        this._uid = uid
    }

    public get getUid():number | undefined{
        return this._uid
    }
}

const user3 = new Sharique1("tarique", "software engineer", "bhiwandi", 10, 8237256670)
console.log(user3);
const testingLength = user3.setUid = 9512365
console.log(user3.getUid);


