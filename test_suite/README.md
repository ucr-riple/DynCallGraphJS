# Test Suite
A test suite for our Dynamic Call Graph generation.

# Notes
* Created using jest testing framework.
* Tested using nodejs v10.19.0

## Adding a Test
To add a test:

1. Add a test file under /examples, with the filename being of the form test{#}.js
2. Add an expected output for your test under /test_suite/expected, with the filename being of the form test{#}.txt

Here is an example of the contexts of an expected output file
```
{
  '(test1.js:9:1:9:10)': [
    '(test1.js:1:1:3:2)'
  ],
  '(test1.js:2:3:2:6)': [
    '(test1.js:4:1:6:2)'
  ]
}
```

3. Run the test suite and verify your results.

## Usage
To run the test suite, execute the following command.
```
npm test
```
