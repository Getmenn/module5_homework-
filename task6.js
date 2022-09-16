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