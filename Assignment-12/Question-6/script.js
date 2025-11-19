let count = 0;

function controller() {
    function increment() {
        count++;
        console.log(count);
    }
    function decrement() {
        count--;
        console.log(count);
    }

    increment();
    increment();
    decrement();
}

controller();
