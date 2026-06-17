let age = 2;
if (age < 18) {

    console.log("несовершеннолетний") 
}
else if (age>=18 && age<65) {

    console.log ("взрослый")
}

else {

    console.log("пенсионер")
}

let day="воскресенье";

switch (day) {

    case "суббота": 
        console.log("выходной день");
        break;
    case "воскресенье":
        console.log("выходной день");
        break;

    default:
        console.log("рабочий день");
} 

let a=5;
let b=10;
for (let i=a; i<=b; i++) {

    if (i%2===0) {
        console.log(`${i} - четное число`);
    }
        else {
            console.log (`${i} - нечетное число`);
        }
}



