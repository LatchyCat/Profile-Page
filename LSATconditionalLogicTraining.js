let array = ['g', 'h', 'j', 'k', 'l', 'm', 'n', 'o'];

let cat = function(arr) {
    let empty = [];

    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] !== arr[i + 1] && arr[i] !== arr[i + 2]) {
            empty.push(arr[i + 2]);
        }
    };

    return empty;
};

console.log(cat(array));
