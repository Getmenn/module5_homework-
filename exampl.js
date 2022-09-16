//Задание 1

let znach = +prompt('Введите значение');
let type = typeof znach;
if (Number.isNaN(znach)== true)
{
    console.log('Упс, кажется, вы ошиблись');
}
else if (znach%2 != 1 )
{
    console.log('Четное');
}
else
{
    console.log('Нечетное');
}



///2 Задание

let x ="true";
typeTwo = typeof(x);
if (typeTwo == "number")
{
    console.log(x + " - Число")
}
else if (typeTwo == "string")
{
    console.log(x + " - Строка")
}
else if (typeTwo == "boolean")
{
    console.log(x + " - логический тип")
}
else
{
    console.log(x + " - не определен")
}



// Задание 3

let string = 'Экстраординарные утверждения трубуют экстраординарных докозательств';
console.log(string.split("").reverse().join(""));


//Задание 4
let y = Math.floor(Math.random(1,100)*100);
console.log(y);


//Задание 5

let mass = [3,4,56,7,2,4]
console.log('длина массива: '+ mass.length);
mass.forEach(elem => {console.log(elem);})


//Задание 6

let mass2 = [2,4,65,7];
let lastElem;
let boolIndex=true;
mass2.forEach((elem,index) => {
  if (elem!=lastElem && index != 0)
  {
      boolIndex= false;
  }
  lastElem=elem;
})
console.log(boolIndex);


//Задание 7
let mass3= [2,5,6,7,'слово',6,'',0,8,7,0];
let massChet=[];
let massNechet=[];
let massNull=[];
mass3.forEach(elem => 
    {
        if(elem == 0 && typeof(elem)=="number")
        {
            massNull.push(elem);
        }
        else if(elem%2 != 1 && typeof(elem)=="number")
        {
            massChet.push(elem);
        }
        else if(elem%2 == 1)
        {
            massNechet.push(elem);
        }
        
    })
console.log(
    `Колличество четных элементов: ${massChet.length}
    Колличество нечетных элементов: ${massNechet.length}
    Колличество нулей: ${massNull.length}
`);


//Задание 8
let assMas = new Map();
assMas.set(1,'first');
assMas.set('two','second');
assMas.set(3, 'third');
assMas.set(4, 'four');
assMas.set(5, 'five');

for (let key of assMas.keys())
    {
      console.log(`Ключ - ${key}, значение - ${assMas.get(key)}`);
    }

