// var data = document.getElementById('para');

// localStorage.setItem('myData', data.innerText);

// var savedData = localStorage.getItem('myData');

// console.log(savedData);

// var data = document.getElementById('para')
// localStorage.setItem('mydata', data.innerText)
// var savedData = localStorage.getItem('mydata')
// console.log(savedData);



// var data = document.getElementById('para')
// localStorage.setItem('mydata', data.innerText)
// var savedData = localStorage.getItem('mydata')
// console.log(savedData);



// var student = {
//     name: "Majeed ",
//     age: 24,
//     Department: "computer system"
// };

// localStorage.setItem('student', JSON.stringify(student));

// var data = JSON.parse(localStorage.getItem('student'));

// console.log(data.name);
// console.log(data.age);



// var student = {
//     name:"Gul Muhammad",
//     age: 22,
//     Department: "computer engineering"
// }

//  localStorage.setItem('student', JSON.stringify(student))
// var data = JSON.parse(localStorageg.etItem('student'));
// console.log(data.name," ", data.age, ' ' ,data.Department);



var data = document.getElementById('para')
localStorage.setItem('mydata',data.innerText)
var savedata = localStorage.getItem('mydata')
console.log(savedata);

var student1 = {
    name: "al waziri",
    age : 59,
    village: "Hisuri"
}

localStorage.setItem(JSON.stringify('student1', student1))
var data1 = localStorage.getItem(JSON.parse(student1))

console.log(student1.name);


var student2 = {
    name: "al muhaib",
    age: 90,
    village: "MIR ALI"
}
localStorage.setItem(JSON.stringify('student2', student2))
var data2 = localStorage.getItem(JSON.parse(student2))
console.log(student2.name, student2.age, student2.village);
