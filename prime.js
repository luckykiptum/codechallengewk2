
//function findPrime that finds prime numbers in an array

function findPrime(arr) {
    let sortedArray = []; //Where to store the prime numbers

    arr.forEach((num) => {
        let factors = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                factors++;
            }
        }
        if (factors === 2) {
            sortedArray.push(num);
        }
    });

         sortedArray.sort((a, b) => a - b); //method to sort prime numbers in an ascending order

    return sortedArray;
}

console.log(findPrime([2, 3,11,23,39,67,22,33,43,17,5]))
