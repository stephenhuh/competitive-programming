//Read CSV File in and order alphabetically.

const readCSV = (csv) => {
  /*
   *  Read in as rows
   *
   */
  const rows = csv
    .split('\n')
    .map((el) => el.split(','));

  const transpose = (mdA) => {
    return mdA[0].map((col,i) => mdA.map(row => row[i]));
  }

  const records = transpose(rows);

  //Sorting function callback : smaller result = lower index
  records.sort((rowA, rowB) => {
    if (rowA[0] < rowB[0]){
      return -1;
    }
    if (rowA[0] > rowB[0]) {
      return 1; 
    }
    return 0;
  });

  return transpose(records);
}

console.log(readCSV('B,A,D,C\n100B,200A,300D,400C\n1B,2A,3D,4C'));
