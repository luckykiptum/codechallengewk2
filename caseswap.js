
// funtion swapCase that swaps the case of characters in a string 

function swapCase(string) { 


    return string.split('').map(char => { //splits  the string into an array of characters

        if (char === char.toUpperCase()) {
            return char.toLowerCase();


        } else {
            return char.toUpperCase();
        }
    }).join('');  //Joins the split characters back to a string
}

let input = 'bonana'
 
let output = swapCase(input)

console.log(output)