const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// want to have a variable which holds the sum of all battery ammounts in the provided array 
// easy I think. 

const totalBatteries = batteryBatches.reduce(function(accumulator, element) {
    return accumulator += element}, 0)

 // based on below provided example. 
 // I think how this works is: 
//  passed in a callback function and just standard element
//  iterates through all the elements in the array
//  On each iteration through, takes the value of the accumulator, starts at 0
//  and adds the element to the accumulator. 
 
//  So on the next iteration through, the value of accumulator is 4, and adds the 5 (the next element)



// const doubledAndSummed = [1, 2, 3].reduce(function(accumulator, element) {
//     return element * 2 + accumulator}, 0)

// Passed the callback function, and the initial value for the accumulator
// Executes teh callback function for each element, passes in the current value of the accumulator 
    // and the current element through each step of the iteration. 

    //The callback updates the value of the accumulator in each iteration, and that updated value is then passed 
    // as the first argument to the callback in the next iteration.




















const products = [
    { name: 'Shampoo', price: 4.99 },
    { name: 'Donuts', price: 7.99 },
    { name: 'Cookies', price: 6.49 },
    { name: 'Bath Gel', price: 13.99 }
  ];


// very specific, not generic enough. Only works for something that has price as a Key.
function getTotalAmountForProducts(products) {
    let totalPrice = 0; 

    for (const product of products) {
        totalPrice += product.price;
    }

    return totalPrice;
}

//this one is more generic, having to accept an initial value and a callback function that implements the reduce functionality. 

const couponLocations = [
    { room: 'Living room', amount: 5 },
    { room: 'Kitchen', amount: 2 },
    { room: 'Bathroom', amount: 1 },
    { room: 'Master bedroom', amount: 7 }
  ];


// takes three arguments
// sets accum to inital value passed in 
// Iteratres through the array, setting accum to the return value of the callback fuction (reducer)

 function ourReduce(arr, reducer, init) {
     let accum = init; 
     for (const element of arr) {
         accum = reducer(accum, element);
     };
     return accum
 } 

 function couponCounter(totalAmount, location) {
     return totalAmount + location.amount;
 }

 // Still shaky on these callback functions, but somehow this does the same as reduce.

 // alternatively, just do couponLocations.reduce(cb, initialValue)

 console.log(couponLocations.reduce(couponCounter, 0));

 const doubledAndSummed = [1, 2, 3].reduce(function(accumulator, element) {
    return element * 2 + accumulator}, 0)

// Passed the callback function, and the initial value for the accumulator
// Executes teh callback function for each element, passes in the current value of the accumulator 
    // and the current element through each step of the iteration. 

    //The callback updates the value of the accumulator in each iteration, and that updated value is then passed 
    // as the first argument to the callback in the next iteration.
 


// using reduce with an object as the return value 
const showcases = {
    "Dance": [],
    "Visual": [],
    "Music": [],
    "Theater": [],
    "Writing": []
  }
// Want to create a roster of student based on art discipline.  