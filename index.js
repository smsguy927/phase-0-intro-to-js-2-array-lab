// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return;
}

function appendCat(name) {
    let result = cats.slice();
    result.push(name);
    return result;
}

function prependCat(name) {
    let result = cats.slice();
    result.unshift(name);
    return result;
}

function removeLastCat() {
    return cats.slice(0,cats.length - 1);
}

function removeFirstCat() {
   return cats.slice(1);
}