import {getMsAfterDelay} from './timeout';

async function resultAfter(s) {
  var ms = await getMsAfterDelay(1000 * s);
  return `<${ms}>`;
}

async function doStuff() {
  console.log('promises');
  var promises = [];
  for (let n of [1, 3, 2, 4]) {
    console.log('push resultAfter(%d)', n);
    promises.push(resultAfter(n));
  }
  console.log(promises);

  console.log('results');
  var results = [];
  for (let n of promises) {
    let result = await n;
    console.log('push result %s', result);
    results.push(result);
  }
  console.log(results);
}

doStuff();
