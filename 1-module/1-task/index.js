<<<<<<< HEAD
function factorial(n) {
  // ваш код...
}
=======
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


  for (let i = 0; i < v; i++) { // выведет 0, затем 1, затем 2
    y = y * (x - z)
   
    z = z + 1
   
    console.log('y:', y)
  }

  console.log('yy:', y)

return y

}

// console.log(factorial(1))

>>>>>>> origin/master
