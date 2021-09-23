const { compileScript, parse } = require('vue/compiler-sfc')
const fs = require('fs')
const { exit } = require('process')

const source = process.argv[2]
const target = process.argv[3]

if ( !source || !target ) {
    console.log('Missing source and target')
    exit(1)
}

const fileContent = fs.readFileSync(source)
const { descriptor } = parse(fileContent.toString())
const result = compileScript(descriptor, {
    id: 'xx',
    inlineTemplate: true,
})

fs.writeFileSync(target, result.content)
