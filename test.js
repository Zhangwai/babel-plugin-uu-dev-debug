const { transformSync } = require('@babel/core')
const code = `
    if(DEBUG){
        //在dev环境下执行
        //在生产环境不执行
        const a = 10;
        const b = 20;
        console.log(a+b);
    }
`
const babelConfig = {
    plugins: ['./index.js']
}
const output = transformSync(code, babelConfig);
console.log(output)