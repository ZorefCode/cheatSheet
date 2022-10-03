/**
 * JS Array Methods & return types
 */

 const arr = [1, 2, 3, 4, 5]
 
 // returns string
 arr.join('') //12345
 
 // returns boolean
 arr.every((el) => el > 10) // false
 arr.some((el) => el > 4) // true
 arr.includes(2) //true

 //returns number
 arr.length //5
 
 // returns index
 arr.indexOf(3) //2
 arr.lastIndexOf(4) //3
 arr.findIndex((el) => el >= 3) //2

 // returns single value
 arr.at(2) //3
 arr.find((el) => el >= 4) //4
 arr.reduce((acc, curr) => acc + curr) //15
 
 // returns array & don't mutate original array
 arr.filter((el) => el > 2) //[3, 4, 5]
 arr.map((el) => el * 2) //[2, 4, 6, 8, 10]
 arr.concat(6) //[1, 2, 3, 4, 5, 6]
 arr.slice(1) //[2, 3, 4, 5]
 
 //returns array & mutate original array
 arr.splice(1, 2) //[2, 3] & arr becomes [1, 4, 5]
 
 //returns poped/shifted elements in array & mutate original array
 arr.pop() //5 & arr becomes [1, 2, 3, 4]
 arr.shift() //1 & arr becomes [2, 3, 4, 5]
 
 // mutate original array & returns mutated array length
 arr.push(6) //6 & arr becomes [1, 2, 3, 4, 5, 6]
 arr.unshift(0) //6 & arr becomes [0, 1, 2, 3, 4, 5]
 
 // returns array & mutate original array & length remains same
 arr.reverse() //[5, 4, 3, 2, 1]
 arr.sort((a, b) => b - a) //[5, 4, 3, 2, 1]
 arr.fill(10) //[10, 10, 10, 10, 10]
 arr.copyWithin(0, 1, 2) //[2, 2, 3, 4, 5]
 
/**************************************************************/

/**
 * Sub Array 
 *
 */
[1, 2, [3, 4, [5]]].flat(Infinity) //[1, 2, 3, 4, 5]
[1, 2].flatMap((el) => [el, el * 2]) //[1, 2, 2, 4]

/**
 * Array Constructor
 *
 */
 Array.isArray(arr) // true
 Array.from('123') // ['1','2','3']
 Array.of(1, 2, 3) // [1,2,3]
