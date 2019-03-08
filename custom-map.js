var words = ["ground", "control", "to", "major", "tom"];

function map(array, action) {
  let new_array = [];
  for (i = 0; i < array.length; i++) {
    new_array.push(action(array[i]));
  }
  return new_array;
  // return array.map(action);
}

console.log(map(words, function(word) {
  return word.length;
}));

console.log(map(words, function(word) {
  return word.toUpperCase();
}));

console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}));

