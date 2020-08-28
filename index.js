/* 
**  Array
*/

const maxItemOfArray = (arr) => […arr].sort((a, b) => b — a).slice(0, 1)[0];

const areAllEqual = array => array.every(item => item === array[0]);

const removeFalsyValues = arr => arr.filter(item => item);

const castArray = val => (Array.isArray(val) ? val : [val]);

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)

const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

const immutablyUnshift = (arr, n = 1) => arr.slice(n);

const immutablyPop = (arr, n = 1) => arr.slice(0, -n);

const isIterable = obj => obj != null && typeof obj[Symbol.iterator] === 'function';

const unique = array => […new Set(array)];

const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

const union = (a, b) => Array.from(new Set([...a, ...b]));

const forEachReversed = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);

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

/* 
**  Math
*/

const averageOf = (…numbers) => numbers.reduce((a, b) => a + b, 0) / numbers.length;

const sumOf = (…numbers) => numbers.reduce((a, b) => a + b, 0);

const radianToDegree = radian => (radian * 180.0) / Math.PI;

const degreeToRadians = (degrees) => degrees * (Math.PI / 180);

const isValidNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) === n;

const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

const digitize = n => [...`${n}`].map(i => parseInt(i)); // digitize(123) => [1,2,3]

const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1))

/* 
**  String
*/

const toDecimalMarkString = num => num.toLocaleString('en-US');

const reverseString = str => […str].reverse().join(‘’);

const findAndReplace = (string, wordToFind, wordToReplace) => string.split(wordToFind).join(wordToReplace);

const capitalizeAllWords = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

const toWords = (string, pattern = /[^a-zA-Z-]+/) => string.split(pattern).filter(item => item);

const byteSizeOfString = str => new Blob([str]).size;

const isLowerCase = str => str === str.toLowerCase();

const sortStringAlphabetically = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

const splitLines = str => str.split(/\r?\n/);

const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);

/* 
**  Color
*/

const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, ‘0’);

const randomHexColor = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

/* 
**  Date
*/

const getTimeFromDate = date => date.toTimeString().slice(0, 8);

const getDayDiff = (date1, date2) => (date2 — date1) / (1000 * 3600 * 24);

const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

const isBeforeDate = (dateA, dateB) => dateA < dateB;

const isAfterDate = (dateA, dateB) => dateA > dateB;

const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();

const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};
  
/* 
**  Objects
*/

const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

const shallowClone = obj => Object.assign({}, obj);

/* 
**  Browser
*/

const isBrowser = () => ![typeof window, typeof document].includes('undefined');

const isBrowserTabFocused = () => !document.hidden;

const scrollToTop = () => {
  const t = document.documentElement.scrollTop || document.body.scrollTop;
  if (t > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, t — t / 8);
  }
};

const scrollToElement = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });

const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

/* 
**  DOM
*/

const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);

const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();

const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');
  
const elementContains = (parent, child) => parent !== child && parent.contains(child);

const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

const hasClass = (el, className) => el.classList.contains(className);

const toggleClass = (el, className) => el.classList.toggle(className);

const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

const show = (...el) => [...el].forEach(e => (e.style.display = ''));

/* 
**  JSON
*/

const isValidJSON = string => {
  try {
    JSON.parse(string);
    return true;
  } catch (error) {
    return false;
  }
};

/* 
**  Error
*/

const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};

/* 
**  File system (requires fs)
*/

const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);

const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

/* 
**  Execution
*/

const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const logExecutionTime = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

/* 
**  Function
*/

const functionName = fn => (console.debug(fn.name), fn);

/* 
**  Types
*/

const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();

const is = (type, val) => ![, null].includes(val) && val.constructor === type; // is(Array, [1]);

// Promise

const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());

const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';

