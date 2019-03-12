const stripPunctuation = (s) => {
  const res = s
    .replace(/[^a-z\s]/g, '') //strip any thing not lowercase english character or whitespace
    .replace(/\s+/g, ' '); //squash multiwhitespaces
  console.log(res);
}


const main = () => {
  stripPunctuation("hello!   there+ buddy * xh")
}

main();

