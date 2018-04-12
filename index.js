const nestedArray = [[[[5, [2, ['a,', true]]]], , [undefined], '8', 'heyyy'], null];
console.log('nestedArray: ', nestedArray);

const nestedArrayOfIntegers = [[1, 2, [3]], 4]; // original example
console.log('nestedArrayOfIntegers: ', nestedArrayOfIntegers);

/**
 * this is more of a production-quality bit of code. it will handle nested arrays of integers, as well as
 * nested arrays that contain other elements besides integers.
 */
function flattenArray(arrayInput) {
  let flattenedArray = [];
  const flatten = arr => {
    arr.forEach(currentValue => {
      if (Array.isArray(currentValue)) {
        flatten(currentValue); // recurse for nested arrays
      } else {
        flattenedArray.push(currentValue);
      }
    });
  };

  // call the inner flatten function
  flatten(arrayInput);
  return flattenedArray;
}

/**
 * this is a bonus function that also flattens an infinitely nested array, using a bit of trickery.
 * the reason i include it as a secondary solution is because i think it is very clean and simple (and mildly clever).
 *
 * the one major downside i can see is that it modifies the original data.
 *
 * but i would still argue that the original requirements are being satisfied, which was to convert an
 * arbitrarily nested array of *integers*, and return a flattened array of integers. so if we were guaranteed
 * to be given an array of integers only, this code would be fine. obviously it's naive code though, hence the
 * primary solution above that is more generalized to handle many cases of nested arrays.
 */
function flattenArrayOfIntegers(arrayInput) {
  // this bit of magic flattens the array (we could call it a day here :P ...j/k)
  const newArray = arrayInput.toString().split(',');

  // but we want to return an array of integers, so here we go
  return newArray.map(currentValue => parseFloat(currentValue));
}

const flattenedArray = flattenArray(nestedArray);
console.log('flattenedArray: ', flattenedArray);

const flattenedArrayOfIntegers = flattenArrayOfIntegers(nestedArrayOfIntegers);
console.log('flattenedArrayOfIntegers: ', flattenedArrayOfIntegers);

module.exports = { flattenArray, flattenArrayOfIntegers };
