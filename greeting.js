///Задание 1:
// создать файл greeting.js
// при запуске вы должны спросить имя юзера при помощи prompt (Google в помощь)
// после вывести в консоль приветствие
// пример: Привет Airas!

//
// const user = prompt('Введите имя пользователя', 'Имя');
// console.log('Привет ' + user + '!')


///Задание 1.2:
// создать файл greeting.js на es6!!!
// при запуске вы должны спросить имя юзера при помощи prompt (Google в помощь)
// после вывести в консоль приветствие
// пример: Привет Airas!

const user = () => {
    return(prompt('User Name'))
}
console.log('Hello ' + user())