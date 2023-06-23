// Инициализация Array
var array = [];
console.time('Array - Добавление');
for (var i = 0; i < 100000; i++) {
  array.push(i);
}
console.timeEnd('Array - Добавление');

console.time('Array - Удаление');
for (var i = 99999; i >= 0; i--) {
  array.splice(i, 1);
}
console.timeEnd('Array - Удаление');

console.time('Array - Поиск');
array.indexOf(50000);
console.timeEnd('Array - Поиск');

// Инициализация Set
var set = new Set();
console.time('Set - Добавление');
for (var i = 0; i < 100000; i++) {
  set.add(i);
}
console.timeEnd('Set - Добавление');

console.time('Set - Удаление');
for (var i = 99999; i >= 0; i--) {
  set.delete(i);
}
console.timeEnd('Set - Удаление');

console.time('Set - Поиск');
set.has(50000);
console.timeEnd('Set - Поиск');
