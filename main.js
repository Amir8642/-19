let index = prompt("Введите индекс:");
index = Number(index);
let arr = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica'];
if (index >= 0 && index < arr.length) {
    const b = arr.splice(index, 1)[0];
    console.log(`Удален элемент: ${b}`);
} else {
    console.log("Такого элемента у нас нет");
}
console.log("Обновленный массив:", arr);


// let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22];
// let numbers = arr.filter(element => typeof element === 'number');
// if (numbers.length > 5) {
//     console.log('good');
// }