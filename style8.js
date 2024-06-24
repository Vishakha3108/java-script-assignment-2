/* As a web devloper, you need to creat a function that takes a username string as input and checks if it contains only unique characters.Use a set to implement this efficiently.*/

function uniqueCharactersCheck(inputString){
    const charSet = new Set();

    for (const char of inputString) {
        if (charSet.has(char)) {
            console.log("The input string contains duplicates.");
            return false;
        }
        charSet.add(char);
    }
    console.log("The input string contains unique characters.");
    return true;
}
uniqueCharactersCheck("Mithun")

uniqueCharactersCheck("anurag")
