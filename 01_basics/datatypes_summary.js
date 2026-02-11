// #primitive
// 7 types: String,Number,Boolean ,Null, undefined,Symbol,BigInt

//example
const score =100
const scoreValue=100.3

const isLoggedIn =false
const outSideTemp=null
let userEmail;

const id = Symbol('123')
const anotherId=Symbol('123')
console.table([id,anotherId])
console.log( id===anotherId);

//Reference type / Non primitive
//Array,Objects,Functions
const heros =["shaktiman","ben 10"," ironman"]
let myObj={
    name:"ritesh",
    age:21,
}
const myfunction=function(){
     console.log("hello ritik");
}
//// ++++++++++++++++++++++++++++++++

//stack memory(primitive),heap memory(Non Primitive)
let myYoutubeName="ritiksaini"
let anotherName=myYoutubeName
anotherName="ritesh"

console.log(myYoutubeName);
console.log(anotherName);

