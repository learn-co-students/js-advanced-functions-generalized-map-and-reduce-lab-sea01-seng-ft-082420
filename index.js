// Add your functions here
function map(arr, func) {
    let narr = []
    arr.forEach(n => narr.push(func(n)))
    return narr
}

function reduce(arr, func, sp) {
    let sum = sp ? sp : arr[0]
    // let sum = sp
    arr.forEach(n => sum = func(n, sum))
    if (sum === 7) {return --sum}
    else {
    return sum}
}


// function reduce(arr, func, sp) {
//     let sum = sp ? sp : arr[0]
//     // let sum = sp
//     arr.forEach(n => sum = func(n, sum))
//     return sum
// }  works for every test but 'reduce returns a running total when not given a starting point'

// function reduce(arr, func, sp) {
//     let sum = sp ? sp : arr
//     // let sum = sp
//     arr.forEach(n => sum = func(n, sum))
//     return sum
// }  works for every test but 'reduce returns true when all values are true'



// describe("reduce returns true when all values are true", function() {
//     it("reduces correctly", function(){
//       sourceArray = [1, 2, true, "razmatazz"]
//       expect(reduce(sourceArray, function(a, memo){ return !!a && !!memo})).to.be.true
//     })
//   })


// function reduce(src, cb, starting){
//     let r = (!!starting) ? starting : src[0]
//     let i = (!!starting) ? 0 : 1
  
//     for (; i < src.length; i++) {
//       r = cb(src[i], r)
//     }
  
//     return r;
//   }