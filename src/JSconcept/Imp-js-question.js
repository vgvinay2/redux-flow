let Employee = (function() {
  var id = 0;
  return function(name) {
    this.id = ++id;
    this.name = name;
  };
})();

const emp1 = new Employee("Vinay"); //{id: 1 , name: 'Vinay'}
const emp2 = new Employee("Ashish"); //{id: 2 , name: 'Ashish'}


//Singleton pattern
const singleInstance = (function () {
  let  instance ;
  function createInstance() {
    this.name = "Ashish"
  } 
  return function (){
    if(instance) return instance;
    instance = new createInstance()
    return instance;
  }
})();

var person1 =  singleInstance();
var person2 = singleInstance();
console.log(person1)





let Employee = (function() {
  var id = 0;
  return function(name) {
    this.id = ++id;
    this.name = name;
  };
})();

const emp1 = new Employee("Vinay"); //{id: 1 , name: 'Vinay'}
const emp2 = new Employee("Ashish"); //{id: 2 , name: 'Ashish'}
const emp3 = new Employee("Ashish"); //{id: 2 , name: 'Ashish'}


console.log(emp1)

console.log(emp3)



const Employee = (function () {
  var id = 0 ;
  return function (name) {
    this.id = ++id;
    this.name = name;
  }
} )



const emp1 = new Employee('Vinay') //{id: 1 , name: 'Vinay'}
const emp2 = new Employee('Ashish') //{id: 2 , name: 'Ashish'}



let debounceFunction = function (func, time){
  let functionCall
 return () => {
  if (functionCall) {
    clearTimeout(functionCall)
  }
   functionCall = setTimeout(func, time)
 }
};

function hi() {
  console.log("HI")
}

const debounceFunctionHI = debounceFunction(hi, 1000)

debounceFunctionHI() //first time invoke
debounceFunctionHI()  //skip
debounceFunctionHI()
debounceFunctionHI()
debounceFunctionHI()
debounceFunctionHI()
debounceFunctionHI()