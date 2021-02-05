const students = [
    {id:21,name:"Rimon"},
    {id:22,name:"Rifat"},
    {id:23,name:"Sumaiia"}
]
const name = students.map(s => s.name);
const ids = students.map(s => s.id);

const bigger = students.filter(s => s.id>22);
console.log(name);
console.log(ids);
console.log(bigger);