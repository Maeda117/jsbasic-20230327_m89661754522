let n = 0
function factorial(n) {
 let x = n
  let y = n
  if(x === 0){
    return 1
  }
  if(x === 1){
    return 1
  }

let z = 1
let v = x -1
  // console.log('y:', y)

  for (let i = 0; i < v; i++) { // выведет 0, затем 1, затем 2
    y = y * (x - z)
    // console.log(y)
    z = z + 1
    // console.log('z:', z)
    // v = z + 3
    // console.log(v)
    console.log('y:', y)
  }

  console.log('yy:', y)

return y

}

// console.log(factorial(1))

