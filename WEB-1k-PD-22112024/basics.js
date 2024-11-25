let personAge = 17;

// if (personAge >= 18){
//     console.log("Pilngadīgs!")
// }
// else {
//     console.log("Nepilngadīgs!")
// };

// let namesArray =  ["Jānis", "Anna", "Zaiga"];
// for (let i=0; i<= namesArray.length; i++){
//     console.log(i);
//     console.log(namesArray[i]);
// }

function sayHello(name){
    // console.log("Labdien, "+ name)
    return ` Labdien, ${name}`
}
console.log(sayHello("Elza"));

function printErrorStatus(text, code){
    return `${code} - ${text}`;
}
console.log(printErrorStatus(502, "Bad Gateway"));