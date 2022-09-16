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