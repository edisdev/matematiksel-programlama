let u = 14
let v = 105


function calculateXY () {
  let diffSqrt = Math.sqrt(Math.pow(u, 2) - v)

  let x = (u + diffSqrt) / 2
  let y = (u - diffSqrt) / 2

  return { x, y }
}

function calculateP () {
  let p = Math.sqrt(u + Math.sqrt(v))

  let { x, y } = calculateXY()
  let isInteger = Number.isInteger(x) && x > 0 && Number.isInteger(y) && y > 0
  let isEqual = p === (Math.sqrt(x) + Math.sqrt(y))

  if (!isInteger || !isEqual) {
    u -= 1 // u = u -1
    v -= 3 // v = v -3

    p = calculateP()
  }

  return p
}

let p = calculateP()
let { x, y } = calculateXY()

console.log('p value =>', p)
console.log('x value =>', x)
console.log('y value =>', y)