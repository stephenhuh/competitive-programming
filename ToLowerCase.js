//Implement toLowerCase

const toLowerCase = (str) => {
  const diff = 'A'.charCodeAt(0) - 'a'.charCodeAt(0);
  return Array
        .from(str)
        .map((ch) => (ch >= 'A' && ch <= 'Z') ? String.fromCharCode(ch.charCodeAt(0) + diff) : ch)
        .join('');
}

const _toLowerCase = (str) => str.toLowerCase();

/*
 * charCodeAt(0)
 * comparisons work on characters by codepoint
 */
