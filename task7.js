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