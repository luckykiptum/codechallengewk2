//funtion numGen that generates numbers between two numbers

function numGen(num1, num2) {


    let generated = [];

    for (let i = num1; i <= num2; i++) {
        generated.push(i);

    }
    return generated;
}

let generated = numGen(1, 4);

console.log(generated);

