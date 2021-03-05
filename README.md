# DynCallGraphJS
A dynamic call graph generator using Jalangi2

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

## Output Format
The DCG is represented as list of objects where each key is a calling Location and the values are the called functions. The Native functions do not have an address associated with them and are represented as ``` FunctionName (Native) ``` and non-native functions are represented as ```(file:startrow:startcolumn:endrow:endcolumn) ```

### Sample Run

```
function foo(baz) {
  return baz();
}
function bar() {
  return "bar";
}
foo(bar);
```
The above program would have a Dynamic Call Graph as follows:
{
  '(test2.js:7:1:7:9)': [
    '(test2.js:1:1:3:2)'
  ],
  '(test2.js:2:10:2:15)': [
    '(test2.js:4:1:6:2)'
  ]
}




