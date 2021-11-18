// Задание 3.2:
// Создать файл svetofor.js на es6
// и сделать светофор при помощи Switch case
// ( подсказка в видео уже сделано :) )

const color = 'Красный'
const svetofor = () => {
    switch (color) {
    case "Красный":
        console.log("Нельзя")
        break;
    case "Желтый":
        console.log("Предупреждение");
        break;
    case "Зеленый":
        console.log("Можно");
        break;
    default:
        console.log("Светофор не исправен")
}
}
svetofor()



// Задание 3:
// Создать файл svetofor.js
// и сделать светофор при помощи Switch case
// ( подсказка в видео уже сделано :) )

// var color = "Красный"
//
// switch (color) {
//     case "Красный":
//         console.log("Нельзя")
//         break;
//     case "Желтый":
//         console.log("Предупреждение");
//         break;
//     case "Зеленый":
//         console.log("Можно");
//         break;
//     default:
//         console.log("Светофор не исправен")
// }