const normalPerson = {
    firstName  : 'Rahim',
    lastName : 'Uddin',
    salary : 15000,
    getFullName: function(){
        console.log(this.firstName,this.lastName);
    },
    chargeBill : function(amount,tax,tips){
        console.log(this);
        this.salary =  this.salary -amount ;
        return this.salary;
    }
    
}
console.log(normalPerson);
normalPerson.chargeBill(150);
console.log(normalPerson.salary);
normalPerson.getFullName();


const heroPerson = {
    firstName : 'Hero',
    lastName : 'Alom',
    salary : 50000,
}
const heroPerson1 = {
    firstName : 'Hero',
    lastName : 'Balam',
    salary : 50000,
}

const heroPerson2 = {
    firstName : 'Hero',
    lastName : 'Kalam',
    salary : 50000,
}

// let's learn bind
const hero = normalPerson.chargeBill.bind(heroPerson);
hero(2000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);

const hero1 = normalPerson.chargeBill.bind(heroPerson1);
hero1(10000);
console.log(heroPerson1.salary);
const heroFullName =  normalPerson.getFullName.bind(heroPerson);
heroFullName();
const heroFullName1 = normalPerson.getFullName.bind(heroPerson1);
const heroFullName2 = normalPerson.getFullName.bind(heroPerson2);
heroFullName1();
heroFullName2();


// let's learn call

normalPerson.chargeBill.call(heroPerson,2000);
normalPerson.chargeBill.call(heroPerson2,10000);
console.log(heroPerson.salary);
console.log(heroPerson2.salary);

normalPerson.chargeBill.call(heroPerson2,4000);
console.log(heroPerson2.salary);

normalPerson.getFullName.call(heroPerson2);




// lets learn apply

normalPerson.chargeBill.apply(heroPerson,[4000]);
normalPerson.chargeBill.apply(heroPerson2,[6000]);
console.log(heroPerson.salary);
console.log(heroPerson2.salary);