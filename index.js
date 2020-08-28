// Array

const maxItemOfArray = (arr) => […arr].sort((a, b) => b — a).slice(0, 1)[0];

const areAllEqual = array => array.every(item => item === array[0]);

const removeFalsyValues = arr => arr.filter(item => item);

const removeDuplicatedValues = array => […new Set(array)];

const castArray = val => (Array.isArray(val) ? val : [val]);

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)

const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

const immutablyUnshift = (arr, n = 1) => arr.slice(n);

const immutablyPop = (arr, n = 1) => arr.slice(0, -n);

const shuffle = ([…array]) => {
  let m = array.length;
  
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [array[m], array[i]] = [array[i], array[m]];
  }
  return array;
};

const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');

// Math
const averageOf = (…numbers) => numbers.reduce((a, b) => a + b, 0) / numbers.length;

const sumOf = (…numbers) => numbers.reduce((a, b) => a + b, 0);

const radianToDegree = radian => (radian * 180.0) / Math.PI;

const isValidNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) === n;

const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

const digitize = n => [...`${n}`].map(i => parseInt(i)); // digitize(123) => [1,2,3]

const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

// String

const reverseString = str => […str].reverse().join(‘’);

const findAndReplace = (string, wordToFind, wordToReplace) => string.split(wordToFind).join(wordToReplace);

const capitalizeAllWords = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

const toWords = (string, pattern = /[^a-zA-Z-]+/) => string.split(pattern).filter(item => item);

const byteSizeOfString = str => new Blob([str]).size;

// Color

const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, ‘0’);


// Date

const getTimeFromDate = date => date.toTimeString().slice(0, 8);

const getDayDiff = (date1, date2) => (date2 — date1) / (1000 * 3600 * 24);

const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  
// Objects 

const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

// DOM

const scrollToTop = () => {
  const t = document.documentElement.scrollTop || document.body.scrollTop;
  if (t > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, t — t / 8);
  }
};

const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
  
const elementContains = (parent, child) => parent !== child && parent.contains(child);

// JSON

const isValidJSON = string => {
  try {
    JSON.parse(string);
    return true;
  } catch (error) {
    return false;
  }
};

// Error handling

const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};

// File system (requires fs)

const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);

// Execution

const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

