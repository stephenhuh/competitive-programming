/*
 * Python Recursive solution translated
 */

function isMatch(text, pattern) {
  if (!pattern) {
    return !text 
  }

  let firstMatch = text && pattern[0] == text[0] || pattern[0] == '.';

  if (pattern.length >=2 && pattern[1] == '*') {
    return (isMatch(text, pattern.slice(2))) ||
      first_match && isMatch(text.slice(1), pattern)
  } else {
    return first_match && isMatch(text.slice(1), pattern(2))  
  }
}


/*
  just letters
*/
function isMatchLetters(text, pattern) {
  if (text.length !== pattern.length) {
    return false;
  }
  for (let i = 0; i < text.length; i++){
    if (text[i] === pattern[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

/*
  just dots and letters
*/

function isMatchDotsLetters(text, pattern) {
  if (text.length !== pattern.length) {
    return false;
  }
  for (let i = 0; i < text.length; i++){
    if (pattern[i] === '.') {
      continue;
    }
    if (text[i] === pattern[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isMatchDotsLetters('abc', 'a.c'));
console.log(isMatchDotsLetters('abc', 'abcd'));
console.log(isMatchDotsLetters('abc', 'abc'));
console.log(isMatchDotsLetters('abc', 'a..'));
console.log(isMatchDotsLetters('abc', '...'));

/*
  just stars and letters
  aaaaac, a*c
*/

function isMatchStarsLetters(text, pattern) {
  let j = 0;
  let prevChar;
  for (let i = 0; i < text.length; i++, j++){
    let starIdx = pattern.indexOf('*', j);
    //There is a star
    if (starIdx !== -1){
      prevChar = pattern[starIdx-1];
    }
    //We're at a star
    if (j === starIdx) {
      while (text[i] == prevChar) {
        i++;
      }
      continue;
    }
    if (text[i] !== pattern[j]) {
      return false;
    }
  }
  return true;
}

function isMatch(text, pattern) {
  let j = 0;
  let prevChar;
  for (let i = 0; i < text.length; i++, j++){
    let starIdx = pattern.indexOf('*', j);
    if (pattern[j] === '.') {
      continue;
    }
    //There is a star
    if (starIdx !== -1){
      prevChar = pattern[starIdx-1];
    }
    //We're at a star
    if (j === starIdx) {
      if (prevChar === '.') {
        while (text[i-1] === text[i]){
          i++;
        }
      }
      while (text[i] == prevChar) {
        i++;
      }
      continue;
    }
    if (text[i] !== pattern[j] && pattern[j+1] !== '*') {
      return false;
    }
  }
  return true;
}
/*
  aa, a -> false
  aa, aa -> true
  abc, a.c -> true
  abbb, ab* -> true
  acd, ab*c -> true
*/

/*
Notes:
if theres a dot or star, we need to keep track of what the previous character is.
we can start off with an iterative solution
params are both strings

whenever pattern has no special characters, we can just check the length of the two args.
In a way the dot is similar to the star.

Not sure if my solution works on all cases
*/


/*
 * Recursive sol'n
 *function isMatch(text, pattern):
    return isMatchHelper(text, pattern, 0, 0)


#  Input:
#    text - the text to check,
#    pattern - the regular expression to be checked,
#    textIndex - the index the text is checked from
#    patIndex -  the index the pattern is checked from
#  Output:
#   true if the text from the index textIndex matches
#   the regular expression pattern from the pattern Index.
#   E.g. isMatchHelper(“aaabb”,”cab*”,2, 1) since the text
#   from index 2 (“abb”) matches the pattern from index 1 (“ab*”)

function isMatchHelper(text, pattern, textIndex, patIndex):
    # base cases - one of the indexes reached the end of text or pattern
    if (textIndex >= text.length):
        if (patIndex >= pattern.length):
            return true
        else:
            if (patIndex+1 < pattern.length) AND  (pattern[patIndex+1] == '*'):
                return isMatchHelper(text, pattern, textIndex, patIndex + 2)
            else:
                return false

    else if (patIndex >= pattern.length) AND (textIndex < text.length):
        return false

    # string matching for character followed by '*'
    else if (patIndex+1 < pattern.length) AND (pattern[patIndex+1] == '*'):
        if (pattern[patIndex] == '.') OR (text[textIndex] == pattern[patIndex]):
            return (isMatchHelper(text, pattern, textIndex, patIndex + 2) OR
                    isMatchHelper(text, pattern, textIndex + 1, patIndex))
        else:
            return isMatchHelper(text, pattern, textIndex, patIndex + 2)

    # string matching for '.' or ordinary char.
    else if (pattern[patIndex] == '.') OR
            (pattern[patIndex] == text[textIndex]):
        return  isMatchHelper(text, pattern, textIndex + 1, patIndex + 1)
    else:
        return false

 *
 *
 */
