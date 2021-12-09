

//THIS IS THE ALGORITHM
/** Step 1: Start
    Step 2: Create a function for generating numbers
    Step 3: assign function to a variable
    step 4: Create another function passing in string x, y and z as parameters
    Step 5: Instantiate the function generating numbers in this function passing parameters x into it, then assign the function to a variable1
    step 6: Instantiate the function generating numbers in this function passing parameters y into it, then assign the function to a variable2
    step 7: If z = "-" , then return the value of variable1 - variable2
    step 8: If z = "+" , then return the value of variable1 + variable2
    step 9: If z = "*", then return the value of variable1 * variable2
    step 10:If z = "/", then return the value of variable1 / variable2

    Step 6: Stop

 *  */





//CODE
let generateInt = function (x) {
    let temp = 0;
    while (true) {
        //where == equality compares only value and not type
        if (temp == x) return temp;
        temp++;
    }
   
}

let calculateNumbers = function (x, y, z) {
    let numb1 = generateInt(x);
    let numb2 = generateInt(y);
    if (z == '-') return numb1 - numb2
    else if (z == '+') return numb1 + numb2;
    else if (z == '/') return numb1 / numb2;
    else return numb1 * numb2;
}

console.log(calculateNumbers('2', '2', '+'));
console.log(calculateNumbers('2', '2', '-'));
console.log(calculateNumbers('2', '2', '*'));
console.log(calculateNumbers('2', '2', '/'));