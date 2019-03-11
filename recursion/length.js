const recurse = (s) => {
  if (s.length === 0) return 0;
  len = recurse(s.slice(1)) + 1;
  return len;
}

const tail = (s, i, len) => {
  if (i >= s.length) return i;
  len = tail(s, i+1);
  return len;
}

function main() {
  const res = recurse("abcd");
  const res2 = tail("abcd", 0);
  console.log(res);
  console.log(res2);
}

main();
