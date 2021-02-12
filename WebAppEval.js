const puppeteer = require('puppeteer');
var express = require('express');
var app = express();
const fs = require('fs');
const path = require('path');
const process = require('process');
var jalangi = require('./node_modules/jalangi2/src/js/utils/api');
var root = "/tmp"
var inputDir =[]
inputDir.push(process.argv[2])
var options = {
        instrumentInline: true,
        inlineIID: true,
        inlineSource: true,
        inlineJalangi: true,
        analysis: ['./node_modules/jalangi2/src/js/sample_analyses/ChainedAnalyses.js', './node_modules/jalangi2/src/js/sample_analyses/dlint/Utils.js', './DCG.js'],
        outputDir: '/tmp',
        inputFiles: inputDir
};
var arr =((process.argv[2]).split(path.sep)).filter(el=> el!=="");
var last = arr[arr.length-1] || arr[arr.length-2];
root=path.join(root,last)
var isMain = (element,index) => arr[index].includes("todomvc") && arr[index+1]=="examples"
var mainInd = arr.findIndex(isMain);
var main = path.sep + path.join(...arr.slice(0,mainInd+1))+path.sep;
var siteassets = path.sep+ path.join(main,"site-assets")+path.sep;
app.use(express.static(root));
app.use(express.static(main));
app.use(express.static(siteassets));
app.get('/', function(req, res) {
  res.sendFile(root + '/index.html');
  //res.sendFile(inpath);
});
console.log(root,main,siteassets)
var server = app.listen(8080);
(async () => {
  if (process.argv.length < 5) {
    console.log("Please provide arguments in the following sequence : 1:Input directory 2:web app 3:Output file path")
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
  await page.goto('http://localhost:8080', { waitUntil: 'domcontentloaded' })
  
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
  fs.writeFile(outpath, JSON.stringify(data,null,2), function (err) {
    if (err) throw err;
    console.log('complete');
  });
  await browser.close();
  server.close();
})();

//node WebappEval.js file/to/read/ output/path