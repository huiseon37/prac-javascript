function bind(fn, context, ...args) {
  return function(...args2){
    const newArgs = [...args, ...args2]
    return fn.call(context, ...newArgs);
  };
}

const obj = {
  title: "hello",
}

function logTitle() {
  console.log(this.title);
}

const fn = bind(logTitle, obj);

fn(); // "hello"

function add (a, b) {
  return a + b + this.age;
}

const obj2 = {
  age: 5,
}

const fn2 = bind(add, obj2, 1, 2);

const result = fn2(3);

console.log(result); // 8