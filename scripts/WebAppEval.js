const puppeteer = require('puppeteer');
var express = require('express');
var app = express();
const fs = require('fs');
const path = require('path');
const process = require('process');
var jalangi = require('jalangi2');
var root = "/tmp"
var inputDir =[]
inputDir.push(process.argv[2])
var options = {
        instrumentInline: true,
        inlineIID: true,
        inlineSource: true,
        inlineJalangi: true,
        analysis: ['./node_modules/jalangi2/src/js/sample_analyses/ChainedAnalyses.js', './node_modules/jalangi2/src/js/sample_analyses/dlint/Utils.js', './src/DCG.js'],
        outputDir: '/tmp',
        inputFiles: inputDir
};
(async () => {
  if (process.argv.length < 5) {
    console.log("Please provide arguments in the following sequence : 1:Input directory 2:web app 3:Output path")
    return;
  }
  inpath = process.argv[3]
  outpath = process.argv[4]
  await new Promise((resolve, reject) => {
    try {
      resolve(jalangi.instrumentDir(options));
    } catch (err) {
      reject(err.toString());
    }
  });
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  var data = "";
  await page.goto(inpath)
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      try {
        document.addEventListener("keydown", (function (evt) {
          evt = evt || window.event;
          if (evt.shiftKey && evt.altKey && evt.keyCode == 84) {
            resolve();
          }
        })
        )
      } catch (err) {
        reject(err.toString());
      }
    });
  });
  data = (await page.evaluate('J$.callList'));
  fs.writeFile(outpath, JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log('complete');
  });
  await browser.close();
})();

//node scripts/WebappEval.js file/to/read/ output/path