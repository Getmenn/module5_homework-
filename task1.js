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