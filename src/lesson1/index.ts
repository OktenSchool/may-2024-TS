// const asd = (names: string[], flat: number): number[] => {
//     console.log(names[0]);
//     return
// }
//
// asd(['Name', 'Max'], 36)
//
// asd(['Name', 'Max'], 36)
//
// asd(['Name', 'Max'], 36)
//
// interface IUser<T> {
//     name: string,
//     age: number,
//     house: number,
//     data:T
// }
//
// // const user: IUser = {name: 'max', age: 25, house: 255}
//
// // const user:IUser<number[]> = {age:15, house:24,data:[1,2,3], name:'kokos'}
// const user:IUser<string> = {age:15, house:24,data:'some string', name:'kokos'}
//
// console.log(user);


class User {
    // name:string;
    // age:number;
    // status:boolean

    constructor(private _name: string, private _age: number, private _status: boolean) {
        // this.name = name;
        // this.age = age;
        // this.status = status;
    }

    // getName():string{
    //     return this._name
    // }
    //
    // setName(name:string):void{
    //     this._name = name
    // }

    // get
    //
    // set name(value:string):void{
    //     this._name = value
    // }

}

const user = new User('max', 15, true);
// console.log(user.getName());
//
// user.setName("Borys")
// console.log(user.getName());

// console.log(user.name);

// const users:User[] = [
//     new User('kesha', 15, true),
//     new User('kesha', 15, true),
//     new User('kesha', 15, true),
//     new User('kesha', 15, true),
//     new User('kesha', 15, true),
// ]


abstract class Shape {
    abstract perimeter(): number

    abstract area(): number
}

// const shape = new Shape();

class Rectangle extends Shape {
    constructor(private a: number, private b: number) {
        super();
    }

    perimeter(): number {
        return (this.a + this.b) * 2
    }

    area(): number {
        return this.a * this.b
    }

}

interface ITools{
    greeting:()=>void
}
interface ITools2{
    count:()=>number
}

class Triangle extends Shape implements ITools, ITools2{
    constructor(private a: number, private b: number, private c: number) {
        super();
    }

    count: () => number;

    greeting(){
        console.log('Hello')

    };

    perimeter(): number {
        return this.a + this.b + this.c
    }

    area(): number {
        return this.c * this.b / this.a * 2
    }

}

const shapes:Shape[] = [
    new Rectangle(2,3),
    new Rectangle(6,7),
    new Triangle(1,2,3)
]


for (let shape of shapes) {
    console.log(shape.area());
    console.log(shape.perimeter());
}