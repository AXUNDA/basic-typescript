
// Basic types
let id : Number = 7
let company : String = "Amazon"
let isPublished:Boolean = true
let X:any = 5
X= true
let age:Number 
age = 5

// Arrays
let ids:Number[]=[1,2,3]
let arr:any[]= [1,2,"hello",true,1.5,X]

// tuples
let person:[Number,String,Boolean]=[1,"Chris",true]

// tuple array(exact types in the array)
let employee:[Number,String][]=[[1,"bradDon"],[2,"james"],[3,"vlad"]]

// Union
let pid:Number | String
pid = 22
pid = "22"
// Enum


enum Direction1{
      up = 1,down,left,right
      
}
enum Direction2{
      up = "up",down='down',left='left',right='right',
      
}


// objects
type User ={
      id:number,
      name:string
}
const user:User={id:1,name:"frank"
}

// type assertions
let cid :any=1
// let customerId= <number>cid
let customerId =cid as number
customerId= 3

// functions
function addNum(x:number,y:number):number {
      return x + y
}
// void
function log(message:string | number |boolean|[string,string]):void {
      console.log(message)
}
log(["hello","hi"])

// interface
interface UserInterface {
      readonly id:number,
      name:string,
      // optional parameters
      age?:number
}
const user1:UserInterface={id:1,name:"frank"
}
// interface function
interface MatFunc{
      (x:number, y:number):number
}
const add:MatFunc = (x:number, y:number):number => {return x + y}
const sub:MatFunc = (x:number, y:number):number => {return x - y}

// classes
class Person{
      // private is only accessible within the class
     private id:number
      name:string

      constructor(id:number,name:string){
            this.id = id;
            this.name = name;

      }
      register(){
            return `${this.name} is now registered  `
      }

}
const brad = new Person(1,"brad")
