console.log('Call method example:-\n');
console.log('The call method binds the 1st parameter passed to it with the "this" object of the function on which it has been called.\n')
 
function printThisAndData(...args){
    console.log(this.data, ...args);
}
 
const obj = {
    data: 10,
    objArr: ['a','b','c'],
}
const arr = [1,2,3];
 
printThisAndData.call(obj, arr); // output->  10 [ 1, 2, 3 ]
printThisAndData.call(obj, ...arr); // output->  10 1 2 3