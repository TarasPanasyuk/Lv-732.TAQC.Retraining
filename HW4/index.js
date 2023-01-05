// // 1. Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width 
// // і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, 
// // якщо функції передано не числові параметри.
// // Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
// function calcRectangleArea( ){
//     let width = +prompt("Value for width");
//     let height =  +prompt("Value for height");
//     let area = width * height;
//     if (isNaN(width)){
//         throw new Error("Value for width is not a number");
//     } else if (isNaN(height)){
//         throw new Error("Value for height is not a number");
//     } else if (width >= 100) {
//         throw new Error("Value for width is to big");
//     } else if (height >= 100) {
//         throw new Error("Value for height is to big");
//     }
//     return area;
//     }

//     try{
//         let result = calcRectangleArea();
//         console.log(result);
//     } catch(exception){
//         console.log(exception.name);
//     }

// 2. Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати в модальному вікні помилки у випадку, коли: 
// 	- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”), 
// 	- нечислове значення
// 	- вік юзера менше 14 років. 
// В іншому разі юзер отримує доступ до перегляду фільму.
// В блокові catch передбачити виведення назви і опису помилки.
function checkAge(){
    let age = +prompt("Your age");
    if (age == null || age == ""){
        throw new Error ("The field is empty! Please enter your age");
    } else if (isNaN(age)){
        throw new Error("Value for age is not a number");
    } else if (age <= 14) {
        throw new Error("You are too young");
    } else if (age >= 14) {
        alert("You have access to movie");
    }
    return age;
    }

    try{
        let result = checkAge();
        console.log(result);
    } catch(exception){
        alert(exception.stack);
        alert(exception.message);
    }

// 3. Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням 'MonthException'.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. 
// Функція повертає назву місяця відповідно до введеного номера місяця. 
// У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням 'Incorrect month number'.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// 	Приклад роботи програми:
// > console.log(showMonthName(5)); 
// May
// > console.log(showMonthName(14)); 
// MonthException Incorrect month number

// 4. Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. 
// Також функція викидає помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням функції showUser() 
// кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення про помилку. 
// Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.
// 	Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]
