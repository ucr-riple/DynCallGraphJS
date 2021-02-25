const util = require('util')
const exec = util.promisify(require('child_process').exec)
const fs = require('fs')
const path = require('path')

describe('DCG Test Suite', () => {
    const resultsPath = path.join(__dirname, '/expected')
    const excludePath = __dirname.replace('test_suite','examples/')
    const pathRe = new RegExp(`${excludePath}`, 'g')
    var casesAmount = 0
    var cases = []
    var expectedResults = new Map()

    fs.readdirSync(resultsPath).forEach(element => {
        let testName = element.replace(".txt", "")
        let fullPath = path.join(resultsPath, element)
        var results = fs.readFileSync(fullPath).toString()
        expectedResults[testName] = results
        casesAmount += 1
    })

    for(var i = 1; i <= casesAmount; i++){
        cases[i] = i
    }

    test.each(cases)('test', async (i) => {
        const dcg = await executeDCG(`test${i}.js`)
        strDCG = dcg['stdout'].toString()
        strDCG = strDCG.replace(pathRe, "")
        strDCG = strDCG.replace(/^[^\]{]*/, "")
        strDCG = strDCG.replace(/\s/g, "")
    
        expect(strDCG).toBe(expectedResults[`test${i}`].replace(/\s/g, ""))
    })
})

async function executeDCG(testFile){
    return await exec(`node node_modules/jalangi2/src/js/commands/jalangi.js --inlineIID --inlineSource --analysis DCG.js examples/${testFile}`)
}
