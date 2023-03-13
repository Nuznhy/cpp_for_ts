const libModule = require('./build/Release/calc.node');

console.log('smts')

console.log('Exports : ', libModule);
console.log('calc() :', libModule.calculateFunction(4.222, 8.21409271895712894, 2, 'result'));
