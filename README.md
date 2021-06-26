# DynCallGraphJS
A dynamic call graph generator using Jalangi2

[![Node.js CI](https://github.com/ucr-riple/DynCallGraphJS/actions/workflows/ci.yml/badge.svg)](https://github.com/ucr-riple/DynCallGraphJS/actions/workflows/ci.yml) 
<img src="https://img.shields.io/badge/Maintained%3F-yes%20-brightgreen"></img>

## Installation
Clone the repository, and then run:

```bash
npm install
```

## Usage
To generate Dynamic Call Graph of a JavaScript program.
```bash
node node_modules/jalangi2/src/js/commands/jalangi.js --inlineIID --inlineSource --analysis src/DCG.js examples/example1.js
```
To generate Dynamic Call Graph in a browser using offline instrumentation
```bash
node node_modules/jalangi2/src/js/commands/instrument.js --inlineIID --inlineSource -i --inlineJalangi --analysis node_modules/jalangi2/src/js/sample_analyses/ChainedAnalyses.js --analysis node_modules/jalangi2/src/js/sample_analyses/dlint/Utils.js --analysis src/DCG.js --outputDir /tmp examples/html/

open file:///tmp/html/index.html
```
For web applications you can also out puppeteer based script which allows you to retrieve the results in a JSON file
```bash
node scripts/WebappEval.js examples/html/ file:///tmp/html/index.html temp.json
```

## Output Format
The DCG is represented as list of objects where each key is a calling Location and the values are the called functions. The Native functions do not have an address associated with them and are represented as ``` FunctionName (Native) ``` and non-native functions are represented as ```(file:startrow:startcolumn:endrow:endcolumn) ```

### Sample Run

```javascript
function foo() {
  return;
}
function bar() {
  foo.call(this);
}
bar();
```
The above program would have a Dynamic Call Graph as follows:
```
{ '(/testDirectory/testFile.js:7:1:7:6)':
   [ '(/testDirectory/testFile.js:4:1:6:2)' ],
  '(/testDirectory/testFile:5:3:5:17)': [ 'call (Native)' ],
  'call (Native)':
   [ '(testDirectory/testFile.js:1:1:3:2)' ] }
```

## Work in Progress
We are still working on DCG_detailed.js which provides the function names for non-native functions and location identifier for native functions. It would allow you to identify the non-native functions by name and distinguish between two native callers. You can use DCG_detailed the same way as DCG.
```bash
node node_modules/jalangi2/src/js/commands/jalangi.js --inlineIID --inlineSource --analysis src/DCG_detailed.js examples/example1.js
```

