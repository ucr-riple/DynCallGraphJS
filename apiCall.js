var jalangi = require('./node_modules/jalangi2/src/js/utils/api');
const fs = require('fs');
const path = require('path');
const os = require("os");
var inputDir =[];
var outputDir = './outputs';
var analyses =  ['./node_modules/jalangi2/src/js/sample_analyses/ChainedAnalyses.js', './node_modules/jalangi2/src/js/sample_analyses/dlint/Utils.js', './DCG.js']
inputDir.push(process.argv[2])
var options = {
  instrumentInline: true,
  inlineIID: true,
  inlineSource: true,
  inlineJalangi: true,
  analysis: analyses,
  outputDir: outputDir,
  inputFiles: inputDir
};
(async () => {
var x = await new Promise((resolve, reject) => {
  try {
    resolve(jalangi.instrumentDir(options));
  } catch (err) {
    reject(err.toString());
  }
});
var y = await new Promise((resolve, reject) => {
  try {
    var resolvedAnalyses = analyses.map(function (f) {
      return path.resolve(f)
    });
    var code = path.resolve(path.join(outputDir,path.basename(inputDir[0])))
    resolve(jalangi.analyze(code,resolvedAnalyses,{})).then(z = J$.callList);
  } catch (err) {
    reject(err.toString());
  }
});
console.log(z)
})()


/*var code = fs.readFileSync(process.argv[2]).toString()
//var tempFolder = '/tmp';
//var filePath = path.join(tempFolder, 'out.js');
var options = {
        //instrumentInline: true,
        inlineIID: true,
        inlineSource: true,
        //inlineJalangi: true,
        analysis: analyses,
        //outputDir: '/tmp',
        inputFileName: process.argv[2],
        outputFile: "out.js"
};
(async () => {
var x = await new Promise((resolve, reject) => {
        try {
          resolve(jalangi.instrumentString(code,options));
        } catch (err) {
          reject(err.toString());
        }
      });
console.log(fs.readFileSync(options.outputFile).toString())
var y = await new Promise((resolve, reject) => {
  try {
    //resolve(jalangi.analyze(fs.readFileSync(filePath).toString(),analyses));
    resolve(jalangi.analyze(options.outputFile,analyses))
  } catch (err) {
    reject(err.toString());
  }
});
//await jalangi.analyze(filePath,analyses)
console.log(y)
})()*/