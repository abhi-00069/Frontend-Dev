function applyOperation(numbers, operation) {
    const result = [];
    for (let num of numbers) {
        result.push(operation(num));
    }
    return result;
}

const doubled = applyOperation([1,2,3,4], num => num * 2);
console.log(doubled);

const squared = applyOperation([1,2,3,4], num => num * num);
console.log(squared);
