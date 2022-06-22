const printHello = () => {
  console.log ('Hello');
}

const executeAfterDelay = (delay, method) => {
  let n = delay * 1000
  return setTimeout(method,(n));
}

console.log (executeAfterDelay(5, printHello))