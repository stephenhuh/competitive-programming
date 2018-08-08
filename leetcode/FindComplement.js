var findComplement = function(num) {
  let binary = (num).toString(2);
  let reverse = String(binary).split('').map(s => {
    return ( s === '0' ? '1' : 0);
  })
  const reversedString = reverse.join('')
  return parseInt(reversedString, 2)
}
