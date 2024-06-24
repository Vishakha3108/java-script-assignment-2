/* As a web devloper ,your task is to build a function that eamines a sentence and counts how many times  each unique word appears in it. Using a Map, the function efficiently keeps track of the occurrence of each word in the sentence.*/

function wordCounter(sentence) {
    const wordFrequencyMap = new Map();
    const words = sentence.split(/\s+/)

    for (const word of words) {
        const cleanWord = word.toLowerCase().replace(',' , '');

        if(cleanWord.length > 0) {
            wordFrequencyMap.set(cleanWord,(wordFrequencyMap.get(cleanWord) || 0) + 1);
        }
    }
    return wordFrequencyMap;
}

const sentence = "Hey there i am vishakha Bhojak. Learning web devlopment from PW ";
const result = wordCounter(sentence);

console.log(result)