  function reverseWords(message) {

    // first we reverse all the characters in the entire message
    reverseCharacters(message, 0, message.length - 1);
    // this gives us the right word order
    // but with each word backward

    // now we'll make the words forward again
    // by reversing each word's characters

    // we hold the index of the *start* of the current word
    // as we look for the *end* of the current word
    var currentWordStartIndex = 0;
    for (var i = 0; i <= message.length; i++) {

        // found the end of the current word!
        if (i === message.length || message[i] === ' ') {

            // if we haven't exhausted the string our
            // next word's start is one character ahead
            reverseCharacters(message, currentWordStartIndex, i - 1);
            currentWordStartIndex = i + 1;
        }
    }
    return message;
}

function reverseCharacters(message, leftIndex, rightIndex) {

    // walk towards the middle, from both sides
    while (leftIndex < rightIndex) {

        // swap the left char and right char
        var temp = message[leftIndex];
        message[leftIndex] = message[rightIndex];
        message[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
}

/* Need to read the problems more carefully... */

