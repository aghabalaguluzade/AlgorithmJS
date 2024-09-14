const LongestWord = (sen) => {
    // 1. Using RegEx to remove punctuation and special characters, leaving only letters and numbers
	// 2. Splitting the string into words
	// 3. Comparing the lengths of the words and choosing the longest word

    // Using RegEx we separate words that contain only letters and numbers
    const words = sen.match(/\w+/g);
    
    // If no word is found (in case of empty string), return empty string
    if (!words) return '';

    // Find the longest word
    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(LongestWord("a confusing /:sentence:/[ this is not!!!!!!!~"));