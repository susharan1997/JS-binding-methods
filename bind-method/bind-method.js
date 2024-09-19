console.log('Bind method example:-\n');
console.log('The Bind method binds the 1st parameter passed to it with the "this" object of the function on which it has been called. It returns the function with it"s this object bound with the 1st passed param and prints any additional params passed after passing the binding parameter(1st param).\n')
 
function printThisAndData(...args){
    console.log(this.data, ...args);
}
 
const obj = {
    data: 10,
    objArr: ['a','b','c'],
}
const arr = [1,2,3];
 
const firstCall = printThisAndData.bind(obj, 10);
firstCall(arr); // output ->  10 10 [ 1, 2, 3 ]
firstCall(...arr); // output->  10 10 1 2 3