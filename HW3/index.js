// task1
// 1. Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for знайдіть добуток елементів цього масиву. 
// Також реалізуйте завдання через while.
let array = [2, 3, 4, 5];
let total = 1;

for (let i = 0; i < array.length; i++) {
    total *= array[i];
}; 
console.log(total);

let array2 = [2, 3, 4, 5];
let total2 = 1;
let i = 0;

while (i < array2.length) {
  total2 *= array2[i]; 
  i++; 
};
console.log(total2);

// task2
// 2. Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15. Для кожної ітерації він перевірятиме, 
// чи є поточне число парним чи непарним, і відображатиме повідомлення на екрані.
// Sample Output: 
// "0 is even" 
// "1 is odd" 
// "2 is even" 
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      alert([i] + " is odd");
    }
    else {
      alert([i] + " is even");
    }
};


// task3
// 3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
// Sample Output:
// randArray(5);  // [399,310,232,379,40]

// task4
// 4. Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b. 
// Функція працює тільки з цілими числами. Реалізувати інтерфейс введення чисел a, b з клавіатури.
// Sample Output:
// raiseToDegree(3, 4);  // 81
let a = parseInt(prompt("Type a"));
let b = parseInt(prompt("Type b"));

console.log(raiseToDegree(a,b));

function raiseToDegree (a,b) {
  let result = a ** b;
  return result;
}

// task5
// 5. Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість числових аргументів і повертати той, 
// який має найменше значення. Порада: для розв’язку можете скористатися спеціальним масивом arguments.
// Sample Output:
// findMin(12, 14, 4, -4, 0.2); // => -4
function findMin() {
  var i = 0,
      min = arguments[0];

  for (i = 1; i < arguments.length; i++) {
      if (min > arguments[i]) {
          min = arguments[i];
      }
  }
  return min;
}
console.log(findMin(12, 14, 4, -4, 0.2));

// task6
// 6. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. 
// Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// Sample Output:
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true

// task7
// 7. Напишіть функцію, яка повертає останній елемент масиву. Функція може приймати 
// 2 параметра: 1-ий масив, 2-ий числовий параметр, що відповідає кількості 'х' останніх елементів масиву, які треба вивести.
// Sample Output:
// console.log(lastElem([3, 4, 10, -5]));      // -5
// console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
// console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]


// task8
// 8. Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка в верхній регістр.
// Input string: 'i love java script' 
// Output string: 'I Love Java Script'
