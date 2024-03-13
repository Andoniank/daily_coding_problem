// 3-12-2024

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

const twoSum = function (array, sum) {
    for (let i = 0; i < array.length - 1; i++) {
        for (j = i + 1; j < array.length; j++) {
            if(array[i] + array[j] === sum) {
                return true
            }
        }
    }
    return false
}

console.log(twoSum([10, 15, 3, 7], 17))                // true
console.log(twoSum([1, 3, 7, 10], 9))                  // false
console.log(twoSum([50, 9, 36, 71, 16, 42, 19], 58))   // true
console.log(twoSum([1, 2, 3], 5))                      // true
console.log(twoSum([1, 3], 6))                         // false