const puppeteer = require("puppeteer");
const fs = require("fs");
var jalangi = require("./node_modules/jalangi2/src/js/utils/api");
const waitForAnySelector = require("./helpers.js");
var express = require("express");
var app = express();
var path = require("path");
var root = "/tmp";
var inputDir = [];
inputDir.push(process.argv[2]);
var options = {
  instrumentInline: true,
  inlineIID: true,
  inlineSource: true,
  inlineJalangi: true,
  analysis: [
    "./node_modules/jalangi2/src/js/sample_analyses/ChainedAnalyses.js",
    "./node_modules/jalangi2/src/js/sample_analyses/dlint/Utils.js",
    "DCG.js",
  ],
  outputDir: "/tmp",
  inputFiles: inputDir,
};
var arr = process.argv[2].split(path.sep).filter((el) => el !== "");
var name = process.argv[2].toString()
var last = arr[arr.length - 1] || arr[arr.length - 2];
root = path.join(root, last);
var isMain = (element, index) =>
  arr[index].includes("todomvc") && arr[index + 1] == "examples";
var mainInd = arr.findIndex(isMain);
var main = path.sep + path.join(...arr.slice(0, mainInd + 1)) + path.sep;
var siteassets = path.sep + path.join(main, "site-assets") + path.sep;
app.use(express.static(root));
app.use(express.static(main));
app.use(express.static(siteassets));

// viewed at http://localhost:8080
app.get("/", function (req, res) {
  res.sendFile(root + "/index.html");
});
var server = app.listen(8080);
module.exports = (async () => {
  if (process.argv.length < 3) {
    console.log(
      "Please provide arguments in the following sequence : 1:Input directory 2:Output file path"
    );
    return;
  }
  var outpath = process.argv[3];
  await new Promise((resolve, reject) => {
    try {
      resolve(jalangi.instrumentDir(options));
    } catch (err) {
      reject(err.toString());
    }
  });
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--shm-size=3gb",
      "--single-process",
    ],
  });
  const page = await browser.newPage();

  await Promise.all([page.coverage.startJSCoverage()]);
  await page.waitForTimeout(3000);
  await Promise.race([
    page.goto("http://localhost:8080", { waitUntil: ["load", "networkidle2"] }),
    page.waitForTimeout("body"),
  ]);
  await page.waitForTimeout(5000);
  const selector = await waitForAnySelector(page, ["#new-todo", ".new-todo"]);
  if (name.endsWith("mithril/")) {
    //Try typing a todo and then escape
    await page.type(selector, "0").then(async () => {
      await page.keyboard.press("Escape");
    });
  }
  await page.waitForTimeout(1000);
  for (var i = 0; i < 5; i++) {
    await page.waitForTimeout(500);
    if (i == 4) {
      //try adding blank todo
      await page.type(selector, "    ").then(async () => {
        await page.keyboard.press("Enter");
      });
    } else {
      await page.type(selector, i.toString()).then(async () => {
        await page.keyboard.press("Enter");
      });
    }
    await page.waitForTimeout(500);
  }
  await page.waitForTimeout(1000);
  const changeText = await waitForAnySelector(page, [
    ".view label",
    ".td-item",
  ]);
  if (name.endsWith("knockback/")) {
    const element = await page.$(changeText);
    await page.waitForTimeout(1000);
    await element.click({ visible: true, clickCount: 2 });
    await page.keyboard.press("Tab");
    await page.keyboard.press("ArrowRight");
    await page.type(changeText, " changed");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(3000);
    await element.click({ visible: true, clickCount: 2 });
    await page.keyboard.press("Tab");
    await page.keyboard.press("ArrowRight");
    await page.type(changeText, " changed");
    await page.keyboard.press("Escape");
    await page.waitForTimeout(3000);
    await element.click({ visible: true, clickCount: 2 });
    await page.keyboard.press("Tab");
    await page.keyboard.down("Control");
    await page.keyboard.press("A");
    await page.keyboard.up("Control");
    for (var i = 0; i < 10; i++) {
      await page.keyboard.down("Backspace");
    }
    await page.keyboard.press("Enter");
    await page.waitForTimeout(3000);
    await page.click(changeText, { visible: true, clickCount: 2 });
    await page.keyboard.press("Tab");
    await page.keyboard.press("ArrowLeft");
    await page.type(changeText, " ");
    await page.keyboard.press("Enter");
  } else {
    await page.click(changeText, { visible: true, clickCount: 2 });
    await page.type(changeText, " changed");
    await page.keyboard.press("Enter");

    // do again but this time do not save the change
    await page.waitForTimeout(3000);
    await page.click(changeText, { visible: true, clickCount: 2 });
    await page.type(changeText, " changed");
    await page.keyboard.press("Escape");
    
    //Edit a todo and delete its text, then press enter, this removes the todo since it is now blank
    await page.waitForTimeout(3000);
    await page.click(changeText, { visible: true, clickCount: 2 });
    await page.keyboard.down("Control");
    await page.keyboard.press("A");
    await page.keyboard.up("Control");
    for (var i = 0; i < 10; i++) {
      await page.keyboard.down("Backspace");
    }
    await page.keyboard.press("Enter");
    await page.waitForTimeout(3000);
    await page.click(changeText, { visible: true, clickCount: 2 });
    await page.type(changeText, " ");
    await page.keyboard.press("Enter");
  }
  await page.waitForTimeout(3000);
  if (root.endsWith("mithril/")) {
    const checkBox = await waitForAnySelector(page, [
      "input.toggle[type=checkbox]",
    ]);
    try {
      if (checkBox != undefined && checkBox.length != 0) {
        await page.click(checkBox);
        await page.click(checkBox);
      }
    } catch (e) {
      console.error(e);
    }
  }
  await page.waitForTimeout(3000);

  const toggleAll = await waitForAnySelector(page, [
    "label[for='toggle-all']",
    "input[class='toggle-all']",
    "input[class='toggle-all']",
  ]);
  await page.click(toggleAll);
  await page.waitForTimeout(500);

  await page.$$eval(".toggle", (checks) => {
    checks[1].click();
  });
  await page.waitForTimeout(500);
  await page.$$eval(".destroy", (destroys) => {
    destroys[2].click();
  });
  const aElementsCompleted = await page.$x("//a[contains(., 'Completed')]");
  if (aElementsCompleted != undefined && aElementsCompleted.length != 0) {
    await aElementsCompleted[0].click();
  } else {
    console.log("fail");
  }
  const aElementsActive = await page.$x("//a[contains(., 'Active')]");
  if (aElementsActive != undefined && aElementsActive.length !== 0) {
    await aElementsActive[0].click();
  } else {
    console.log("fail");
  }
  const clearCompleted = await waitForAnySelector(page, [
    "#clear-completed",
    ".clear-completed",
  ]);

  if (clearCompleted != undefined && clearCompleted.length != 0) {
    await page.click(clearCompleted);
  } else {
    console.log("fail");
  }
  const getAll = await waitForAnySelector(page, [
    'a[href="#/"]',
    'a[href="#!"]',
    'a[href="#/all"]',
    'a[class="selected"]',
  ]);
  if (getAll != undefined && getAll.length != 0) {
    await page.click(getAll);
  } else {
    console.log("fail");
  }
  await page.keyboard.down("Shift");
  await page.keyboard.down("Alt");
  await page.keyboard.press("KeyT");
  await page.keyboard.up("Shift");
  const jsCoverage = await Promise.all([page.coverage.stopJSCoverage()]);
  const js_coverage = [...jsCoverage];
  //Parse collected JS Coverage
  let cov = {};
  cnt = 0;
  for (const entry of js_coverage[0]) {
    if (!(entry.url in cov)) {
      cov[entry.url] = {
        js_total_bytes: 0,
        js_used_bytes: 0,
      };
    }
    cov[entry.url]["js_total_bytes"] =
      cov[entry.url]["js_total_bytes"] + entry.text.length;

    for (const range of entry.ranges) {
      cov[entry.url]["js_used_bytes"] =
        cov[entry.url]["js_used_bytes"] + range.end - range.start;
    }
  }
  for (entry in cov) {
    console.log(
      `Utilization percetages ${entry}: ${
        (cov[entry]["js_used_bytes"] / cov[entry]["js_total_bytes"]) * 100
      }%`
    );
  }
  const data = await page.evaluate("J$.callList");
  fs.writeFile(outpath, JSON.stringify(data, null, "    "), function (err) {
    if (err) throw err;
    console.log("complete");
  });
  await browser.close();
  server.close();
})();
//node experiments/pupServ.js ToDoMVC-framework-folder output-json-file
