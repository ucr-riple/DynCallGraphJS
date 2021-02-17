const util = require('util');
const exec = util.promisify(require('child_process').exec);

test('test1', async () => {
    const dcg = await executeDCG('test1.js')
    strDCG = dcg['stdout'].toString()

    expect(strDCG).toBe(`{
  '(/home/renzo/research/dynamic_call_graph_id/examples/test1.js:9:1:9:10)': [
    '(/home/renzo/research/dynamic_call_graph_id/examples/test1.js:1:1:3:2)'
  ],
  '(/home/renzo/research/dynamic_call_graph_id/examples/test1.js:2:3:2:6)': [
    '(/home/renzo/research/dynamic_call_graph_id/examples/test1.js:4:1:6:2)'
  ]
}
`)
})

async function executeDCG(testFile){
    return await exec(`node node_modules/jalangi2/src/js/commands/jalangi.js --inlineIID --inlineSource --analysis DCG.js examples/${testFile}`)
}
