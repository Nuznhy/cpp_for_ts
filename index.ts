const libModule = require('./build/Release/calc.node');

console.log('smts')

const nativeTSCalcFunction = (float: number, double: number, int: number, str: string) => {
    return `${float*2} ${double/2} ${int + 2} ${str}`
}

// performance test
console.log('Exports : ', libModule);
let startTime = performance.now();
console.log('calc() :', libModule.calculateFunction(4.222, 8.21409271895712894, 2, 'result'));
let endTime = performance.now()
console.log(`Native C++ took ${endTime-startTime} milliseconds`)

startTime = performance.now();
console.log('nativeTSCalcFunction(): ', nativeTSCalcFunction(4.222, 8.21409271895712894, 2, 'result'))
endTime = performance.now()
console.log(`Native TS took ${endTime-startTime} milliseconds`)
// error handling
try {
    console.log('calc() 2: ', libModule.calculateFunction());
} catch (e: any) {
    console.error(e.message);
}