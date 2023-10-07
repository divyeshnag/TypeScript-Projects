"use strict";
console.log("Hello World");
let age = 20;
let numbers = [1, 2, 3];
numbers.forEach(element => {
    console.log(element);
});
let letters = ["A", "B", "c"];
letters.forEach(letter => console.log(letter.toLowerCase()));
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Large;
let student;
student = "20";
console.log(mySize);
let emp1 = {
    id: 1,
    name: "divyesh",
    printDate: (date) => {
        console.log(date);
    }
};
emp1.printDate(new Date("2023-01-16"));
