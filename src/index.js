/* 
**  Array
*/

export const areAllEqual = array => array.every(item => item === array[0]);

export const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');

export const castArray = val => (Array.isArray(val) ? val : [val]);

export const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)

export const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

export const forEachReversed = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);

export const immutablyPop = (arr, n = 1) => arr.slice(0, -n);

export const immutablyUnshift = (arr, n = 1) => arr.slice(n);

export const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

export const isIterable = obj => obj != null && typeof obj[Symbol.iterator] === 'function';

export const maxItemOfArray = (arr) => [...arr].sort((a, b) => b - a).slice(0, 1)[0];

export const removeFalsyValues = arr => arr.filter(item => item);

export const shuffle = ([...array]) => {
  let m = array.length;

  while (m) {
    const i = Math.floor(Math.random() * m--);
    [array[m], array[i]] = [array[i], array[m]];
  }
  return array;
};

export const union = (a, b) => Array.from(new Set([...a, ...b]));

export const unique = array => [...new Set(array)];

/* 
**  Browser
*/

export const isBrowser = () => ![typeof window, typeof document].includes('undefined');

export const isBrowserTabFocused = () => !document.hidden;

export const scrollToTop = () => {
  const t = document.documentElement.scrollTop || document.body.scrollTop;
  if (t > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, t - t / 8);
  }
};

/* 
**  Color
*/

export const randomHexColor = () => {
  const n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

export const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

/* 
**  Date
*/

export const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

export const getDayDiff = (date1, date2) => (date2 - date1) / (1000 * 3600 * 24);

export const getTimeFromDate = date => date.toTimeString().slice(0, 8);

export const isAfterDate = (dateA, dateB) => dateA > dateB;

export const isBeforeDate = (dateA, dateB) => dateA < dateB;

export const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();

export const tomorrow = () => {
  const t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};

/* 
**  DOM
*/

export const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();

export const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

export const elementContains = (parent, child) => parent !== child && parent.contains(child);

export const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

export const hasClass = (el, className) => el.classList.contains(className);

export const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

export const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

export const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

export const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);

export const scrollToElement = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });

export const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

export const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

export const show = (...el) => [...el].forEach(e => (e.style.display = ''));

export const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

export const toggleClass = (el, className) => el.classList.toggle(className);

/* 
**  Error
*/

export const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};

/* 
**  Execution
*/

export const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) { }
};

export const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const logExecutionTime = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

/* 
**  File system (requires fs)
*/

export const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);

export const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

/* 
**  Function
*/

export const functionName = fn => (console.debug(fn.name), fn);

/* 
**  JSON
*/

/**
 * @function isValidJSON
 * @param  {String} jsonString
 * @return {Boolean} is jsonString valid JSON
 */
export const isValidJSON = string => {
  try {
    JSON.parse(string);
    return true;
  } catch (error) {
    console.log(error.message)
    return false;
  }
};

/* 
**  Math
*/

/**
 * @function approximatelyEqual
 * @param  {Number} v1     
 * @param  {Number} v2     
 * @param  {Number} epsilon 
 * @return {Boolean}
 */
export const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

/**
 * @function averageOf
 * @param  {Numbers[]} ...numbers 
 * @return {Number} 
 */
export const averageOf = (...numbers) => numbers.reduce((a, b) => a + b, 0) / numbers.length;

export const degreeToRadians = (degrees) => degrees * (Math.PI / 180);

export const digitize = n => [...`${n}`].map(i => parseInt(i)); // digitize(123) => [1,2,3]

export const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

export const isValidNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) === n;

export const radianToDegree = radian => (radian * 180.0) / Math.PI;

export const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1))

export const sumOf = (...numbers) => numbers.reduce((a, b) => a + b, 0);

/* 
**  Promise
*/

export const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());

export const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';

/* 
**  Objects
*/

export const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

export const shallowClone = obj => Object.assign({}, obj);

/* 
**  String
*/

export const byteSizeOfString = str => new Blob([str]).size;

export const capitalizeAllWords = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

export const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

export const findAndReplace = (string, wordToFind, wordToReplace) => string.split(wordToFind).join(wordToReplace);

export const isLowerCase = str => str === str.toLowerCase();

export const reverseString = str => [...str].reverse().join('');

export const sortStringAlphabetically = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

export const splitLines = str => str.split(/\r?\n/);

export const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);

export const toDecimalMarkString = num => num.toLocaleString('en-US');

export const toWords = (string, pattern = /[^a-zA-Z-]+/) => string.split(pattern).filter(item => item);

/* 
**  Types
*/

export const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();

export const is = (type, val) => ![, null].includes(val) && val.constructor === type; // is(Array, [1]);



