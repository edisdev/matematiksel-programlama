const A = [[1,2,3], [2,3,4], [1,1,1]]
const B = [[4,5,6], [7,8,9], [4,5,7]]

const SIZEA = A[0].length
const SIZEB = B[0].length

const result = []

for (let i = 0; i<SIZEA; i++) {
  let rows = []
  for (let j=0; j<SIZEB; j++) {
    total = 0;
    for (let k =0; k<SIZEA; k++) {
      total += A[i][k] * B[k][j]
    }
    rows[j] = total
    console.log(total)
  }
  result[i] = rows
}

console.log('result', result)