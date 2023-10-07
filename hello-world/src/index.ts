console.log("Hello World");
let age = 20;
let numbers:number[] = [1,2,3];

numbers.forEach(element => {
    console.log(element)
});

let letters : string[] = ["A","B","c"];

letters.forEach(letter => console.log(letter.toLowerCase()));

enum Size{ Small=1,Medium,Large };

let mySize = Size.Large;

let student : string;

student = "20";

console.log(mySize);

type Employee = {
    readonly id :number,
    name : string,
    printDate:(date:Date) => void
}

let emp1 : Employee = {
    id:1,
    name:"divyesh",
    printDate:(date)=>{
        console.log(date)
    }
}

emp1.printDate(new Date("2023-01-16"));