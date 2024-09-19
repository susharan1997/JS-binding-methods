console.log('Apply method example:-\n');
console.log('The Apply method binds the 1st parameter passed to it with the "this" object of the function on which it has been called. It expects any additional params to be passed within an array. As a result, the rest parameter doesn"t behave like it does when the function is called with call() or bind() methods.\n');
 
function printThisAndData(...args) {
    console.log(this.data, ...args);
}
 
const obj = {
    data: 10,
    objArr: ['a', 'b', 'c'],
}
const arr = [1, 2, 3];
 
printThisAndData.apply(obj, arr); // output->  10 1 2 3
//printThisAndData.apply(obj, ...arr); // output->  TypeError: CreateListFromArrayLike called on non-object since the passed arguments are not in the form of an array.
 
console.log('\n\n');
console.log('Complex example->\n');
 
const bindFunc = (context, fn, ...bindArgs) =>
    (...args) => context[fn].apply(context, [...bindArgs, ...args]);
 
const bindAll = (obj, ...fns) => {
    const boundFuncs = {};
    fns.forEach(fn => {
        const f = obj[fn];
        obj[fn] = function (...args) {
            return f.apply(obj, args);
        }
        boundFuncs[fn] = obj[fn];
    }
    )
    return boundFuncs;
}
 
const userObj = {
    user: 'Alex',
    greet: function (greeting, punctuation) {
        return greeting + ' ' + this.user + punctuation;
    },
    meet: function (param) {
        return this.user + ',' + ' ' + param;
    }
}
 
const bindUser = bindFunc(userObj, 'greet');
console.log(bindUser('Hi', '!')); // output-> Hi Alex!
 
console.log('\n\n multiple functions bind example:-\n');
 
const { greet: firstCall, meet: secondCall } = bindAll(userObj, ...['greet', 'meet']);
 
console.log(firstCall('Hi', '!')); // output-> Hi Alex!
console.log(secondCall('Let us meet soon.')); // output-> Let us meet soon.