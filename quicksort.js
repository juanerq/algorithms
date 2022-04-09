const array = [1,5,6,2,4,9,11,5]

const quicksort = (array = []) => {
  const menor = []
  const mayor = []
  const pivot = array[0]

  if(array.length < 1) {
    return []
  }
  for(let i = 1; i < array.length; i++) {
    if(array[i] > pivot) {
      mayor.push(array[i])
    }else{
      menor.push(array[i])
    }
  }

  return [...quicksort(menor), pivot,...quicksort(mayor)]
}

// console.log( quicksort(array) )



// const mult10 = (n) => n * 10

// const multiplicar = () => {
//   const cache = {}

//   fer = (n) => {
//     if(cache[n]) {
//       console.log("busca en cache");
//       return cache[n]
//     } 
//     console.log("usa la función");
//     cache[n] = mult10(n)
//     return cache[n]
//   }

//   return { fer }
// }
 
// lexico

// console.log( multiplicar().fer(8) )


function num(number) {
  return {
    sumar: () => number += 1,
    restar:() => number -= 1,
    print:() => number
  }
}

const funcionNum = num(7)
funcionNum.sumar()
funcionNum.sumar()
funcionNum.sumar()
console.log(funcionNum.print())


const defaultStyles = 'color: white;'
const message = (title, style) => {
  return (message) => {
    console.log(`%c ${title}: ${message} `, defaultStyles + style);
  }
}

const error = message('Error', 'background: red;')
const warning = message('Warning', 'background: orange;')
const exit = message('Exit', 'background: green; border-radius: 10px;')


console.log(error('Mensage de error'));
console.log(warning('Mensage de warning'));
console.log(exit('Mensage de exit'));