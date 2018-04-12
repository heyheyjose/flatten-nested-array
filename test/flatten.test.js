const { expect } = require('chai');

const { flattenArrayOfIntegers, flattenArray } = require('../index');

describe('flattenArray()', function() {
  it('should return a flattened array of the elements from the original array', function() {
    const testArray1 = [[[-8, [2, 'a']]], [[4], 'undefined', 'null']];
    const testArray2 = [[['-8', [2, ['a']]]], [[4], [undefined], 'heyyy']];
    const testArray3 = [3, [[7, [2, ['a']], false]], [[4], [NaN], 'heyyy']];
    const testArray4 = [[[5, [2, ['a', true]]]], [[4], [undefined], 'heyyy'], null];
    const testArray5 = ['7070', [[31, ['2', ['a']]]], [[4, 4], '0', 'heyyy', '', 10, [11, '  +  ']]];
    const testArray6 = [[[0021, [{ hello: 'hey' }, ['a']]]], [[4, 4], [undefined], 0, 'heyyy', '', '10', [11, '   ']]];
    const testArray7 = [[9, [103, [{ eed2F: 3 }, ['a']]], 17], [[4, -4], [undefined], 0, 'heyyy', '', '10', [11, {}]]];
    const testArray8 = [[[[[[false], null], undefined], NaN], '']];
    const testArray9 = [[[[5, [2, ['a,', true]]]], [undefined], '8', 'heyyy'], null];
    const testArray10 = [];
    const testArray11 = [[251, [[[32546.2]]], [3534.566]], [[4], [10]], [[[[[1]]]]], [12, [8.67564534]]];

    const flatResult1 = flattenArray(testArray1);
    const flatResult2 = flattenArray(testArray2);
    const flatResult3 = flattenArray(testArray3);
    const flatResult4 = flattenArray(testArray4);
    const flatResult5 = flattenArray(testArray5);
    const flatResult6 = flattenArray(testArray6);
    const flatResult7 = flattenArray(testArray7);
    const flatResult8 = flattenArray(testArray8);
    const flatResult9 = flattenArray(testArray9);
    const flatResult10 = flattenArray(testArray10);
    const flatResult11 = flattenArray(testArray11);

    expect(flatResult1).to.deep.equal([-8, 2, 'a', 4, 'undefined', 'null']);
    expect(flatResult2).to.deep.equal(['-8', 2, 'a', 4, undefined, 'heyyy']);
    expect(flatResult3).to.deep.equal([3, 7, 2, 'a', false, 4, NaN, 'heyyy']);
    expect(flatResult4).to.deep.equal([5, 2, 'a', true, 4, undefined, 'heyyy', null]);
    expect(flatResult5).to.deep.equal(['7070', 31, '2', 'a', 4, 4, '0', 'heyyy', '', 10, 11, '  +  ']);
    expect(flatResult6).to.deep.equal([0021, { hello: 'hey' }, 'a', 4, 4, undefined, 0, 'heyyy', '', '10', 11, '   ']);
    expect(flatResult7).to.deep.equal([9, 103, { eed2F: 3 }, 'a', 17, 4, -4, undefined, 0, 'heyyy', '', '10', 11, {}]);
    expect(flatResult8).to.deep.equal([false, null, undefined, NaN, '']);
    expect(flatResult9).to.deep.equal([5, 2, 'a,', true, undefined, '8', 'heyyy', null]);
    expect(flatResult10).to.deep.equal([]);
    expect(flatResult11).to.deep.equal([251, 32546.2, 3534.566, 4, 10, 1, 12, 8.67564534]);
  });
});

describe('flattenArrayOfIntegers()', function() {
  it('should return a flattened array of the INTEGERS from the original array', function() {
    const integerArray1 = [[1, 2, [3]], 4]; // original example
    const integerArray2 = [[0.1, 920999, [3]], [4.125, 10.00001], 0, [12, [802]]];
    const integerArray3 = [[[1308, 0.52], [437]], [[4, 10], 0], [12, [802]]];
    const integerArray4 = [[251, [[[325462]]], [3534566]], [[4], [10]], [[[[[1]]]]], [12, [867564534]]];

    const result1 = flattenArrayOfIntegers(integerArray1);
    const result2 = flattenArrayOfIntegers(integerArray2);
    const result3 = flattenArrayOfIntegers(integerArray3);
    const result4 = flattenArrayOfIntegers(integerArray4);

    expect(result1).to.deep.equal([1, 2, 3, 4]);
    expect(result2).to.deep.equal([0.1, 920999, 3, 4.125, 10.00001, 0, 12, 802]);
    expect(result3).to.deep.equal([1308, 0.52, 437, 4, 10, 0, 12, 802]);
    expect(result4).to.deep.equal([251, 325462, 3534566, 4, 10, 1, 12, 867564534]);
  });
});
