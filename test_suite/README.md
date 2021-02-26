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

## Sample Run
```
> dyncallgraphjs@1.0.0 test /home/..../DynCallGraphJS
> jest

 PASS  test_suite/DCG_tests.test.js (29.022 s)
  DCG Test Suite
    ✓ test (289 ms)
    ✓ test (289 ms)
    ✓ test (289 ms)
    ✓ test (287 ms)
    ✓ test (295 ms)
    ✓ test (300 ms)
    ✓ test (299 ms)
    ✓ test (296 ms)
    ✓ test (294 ms)
    ✓ test (298 ms)
    ✓ test (298 ms)
    ✓ test (302 ms)
    ✓ test (297 ms)
    ✓ test (298 ms)
    ✓ test (300 ms)
    ✓ test (316 ms)
    ✓ test (292 ms)
    ✓ test (284 ms)
    ✓ test (288 ms)
    ✓ test (287 ms)
    ✓ test (289 ms)
    ✓ test (286 ms)
    ✓ test (289 ms)
    ✓ test (287 ms)
    ✓ test (291 ms)
    ✓ test (291 ms)
    ✓ test (286 ms)
    ✓ test (297 ms)
    ✓ test (290 ms)
    ✓ test (292 ms)
    ✓ test (289 ms)
    ✓ test (287 ms)
    ✓ test (285 ms)
    ✓ test (288 ms)
    ✓ test (291 ms)
    ✓ test (292 ms)
    ✓ test (288 ms)
    ✓ test (288 ms)
    ✓ test (293 ms)
    ✓ test (287 ms)
    ✓ test (290 ms)
    ✓ test (286 ms)
    ✓ test (293 ms)
    ✓ test (292 ms)
    ✓ test (289 ms)
    ✓ test (285 ms)
    ✓ test (287 ms)
    ✓ test (287 ms)
    ✓ test (290 ms)
    ✓ test (285 ms)
    ✓ test (288 ms)
    ✓ test (295 ms)
    ✓ test (297 ms)
    ✓ test (291 ms)
    ✓ test (288 ms)
    ✓ test (293 ms)
    ✓ test (288 ms)
    ✓ test (293 ms)
    ✓ test (286 ms)
    ✓ test (290 ms)
    ✓ test (287 ms)
    ✓ test (286 ms)
    ✓ test (286 ms)
    ✓ test (287 ms)
    ✓ test (289 ms)
    ✓ test (288 ms)
    ✓ test (290 ms)
    ✓ test (291 ms)
    ✓ test (292 ms)
    ✓ test (292 ms)
    ✓ test (289 ms)
    ✓ test (287 ms)
    ✓ test (288 ms)
    ✓ test (295 ms)
    ✓ test (285 ms)
    ✓ test (287 ms)
    ✓ test (289 ms)
    ✓ test (288 ms)
    ✓ test (291 ms)
    ✓ test (289 ms)
    ✓ test (293 ms)
    ✓ test (295 ms)
    ✓ test (290 ms)
    ✓ test (292 ms)
    ✓ test (293 ms)
    ✓ test (292 ms)
    ✓ test (291 ms)
    ✓ test (293 ms)
    ✓ test (286 ms)
    ✓ test (284 ms)
    ✓ test (287 ms)
    ✓ test (287 ms)
    ✓ test (286 ms)
    ✓ test (288 ms)
    ✓ test (308 ms)
    ✓ test (292 ms)
    ✓ test (291 ms)
    ✓ test (295 ms)
    ✓ test (289 ms)

Test Suites: 1 passed, 1 total
Tests:       99 passed, 99 total
Snapshots:   0 total
Time:        29.341 s
Ran all test suites.

```


