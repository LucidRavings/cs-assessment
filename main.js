
const sumZero = (arr) => {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length;j++) {
            if (arr[i] + arr[j] === 0){
                return true
            }
        }
    }
    return false
}

console.log("sumZero:")
console.log(sumZero([]))
console.log(sumZero([1]))
console.log(sumZero([1, 2, 3]))
console.log(sumZero([1, 2, 3, -2]))
console.log("- - - - - - - - - - - - - - - - - - - -")

//The runtime for sumZero is O(n^2) because every additional increase to arr has a multiplicative effect on the function.
//The space complexity for sumZero is O(n) because only one copy of the array is stored, but the array can be any size.

const uniqueCharacters = (str) => {
    newString = str.toLowerCase(str)
    strArray = newString.split('')
    emptyArray = []
    for (i = 0; i < str.length; i++){
        if(emptyArray.includes(strArray[i])){
            return false
        } else {
            emptyArray.push(strArray[i])
        }
    }
    return true
}

console.log("uniqueCharacters:")
console.log(uniqueCharacters("Monday"))
console.log(uniqueCharacters("Moonday"))
console.log("- - - - - - - - - - - - - - - - - - - -")

// uniqueCharacters has a runtime of O(n) from creating an array based on the input string, which could be any length, and then runs a loop once through that array.
// uniqueCharacters has a space complexity of O(n) for creating two arrays, one which is a copy of the input string which has linear indefinite growth, and a second array which is limited to unique characters and cannot grow infinitely.

const isPangram = (str) => {
    let testString = str.toLowerCase()
    let testArray = testString.split('')
    if (testArray.includes("a") && 
    testArray.includes("b") && 
    testArray.includes("c") && 
    testArray.includes("d") && 
    testArray.includes("e") && 
    testArray.includes("f") && 
    testArray.includes("g") && 
    testArray.includes("h") && 
    testArray.includes("i") && 
    testArray.includes("j") && 
    testArray.includes("k") && 
    testArray.includes("l") && 
    testArray.includes("m") && 
    testArray.includes("n") && 
    testArray.includes("o") && 
    testArray.includes("p") && 
    testArray.includes("q") && 
    testArray.includes("r") && 
    testArray.includes("s") && 
    testArray.includes("t") && 
    testArray.includes("u") && 
    testArray.includes("v") && 
    testArray.includes("w") && 
    testArray.includes("x") && 
    testArray.includes("y") && 
    testArray.includes("z")) {
        return true
    } else {
        return false
    }
}

console.log("isPangram")
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))
console.log("- - - - - - - - - - - - - - - - - - - -")

// isPangram has a runtime of O(n) because it runs several loops once, each with a length equal to the string input for a proportional linear increase in runtime for each addition length of the string.
// isPangram has a space complexity of O(n) because it creates a modified copy of the string, and an array, both of which will expand proportionally to the length of the input string.

const findLongestWord = (arr) => {
    let longestWord = 0
    for (i =0; i < arr.length; i++){
        if (arr[i].length > longestWord){
            longestWord = arr[i].length
        }
    }
    return  longestWord
}

console.log("findLongestWord")
console.log(findLongestWord(["hi", "hello"]))

// findLongestWord has a runtime of O(n) because it runs a loop with the length property of the input array, which can grow linearly.
// findLongestWord has a space complexity of O(1) because it only creates two variables and does not store any inputs.