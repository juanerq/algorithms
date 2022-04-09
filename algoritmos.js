// const isUnique = (array = []) => {
//   const breadCrums = {}

//   for(let i = 0; i < array.length; i++) {
//     if(breadCrums[array[i]]) {
//       return false
//     } else {
//       breadCrums[array[i]] = true
//     }
//   }

//   return true
// }

// const array = [1, 2, 5, 3, 8, 1]

// console.log( isUnique(array) )

// ------------------------- Operador: in ------------------------- //

// console.log( 
//   'hola' in { hola: '' },         // true
//   'juanerq' in { 'juanerq': '' }, // true
//   'fer' in { 'fernanda': 'fer' }, // false
//   'fer' in ['fer', 'maria'],      // false
//   1 in ['fer', 'maria'],          // true
//   2 in ['fer', 'maria']           // false
// )

// ------------------------- Cache ------------------------- //

const times10 = (n) => {
  return n * 10
}

let cache = {} // El resultado se guarda en el global scope

const saveInCache = (n) => {
  if(n in cache) {
    console.log('Fetching from cache:', n)
    return cache[n]
  } else {
    console.log('Calculating result');
    return cache[n] = times10(n)
  }
}

// console.log( saveInCache(8) );
// console.log( saveInCache(8) );
// console.log( saveInCache(8) );
// console.log( saveInCache(8) );


// ------------------------- Closure ------------------------- //

/*Un closure o clausura es la combinación de una función y el ámbito léxico en el que se declaró dicha función. Es decir los closures o clausuras son funciones que manejan variables independientes. En otras palabras, la función definida en el closure “recuerda” el ámbito en el que se ha creado.*/

// const memoizedCloure = () => {
//   let cache = {}

//   return (n) => {
//     if(n in cache) {
//       console.log('Fetching from cache:', n)
//       return cache[n]
//     } else {
//       console.log('Calculating result');
//       return cache[n] = times10(n)
//     }
//   }
// }

// const memoClosureTimes10 = memoizedCloure() // resultado de la primera operación se almacena dentro del closure
// console.log( memoClosureTimes10(8) )
// console.log( memoClosureTimes10(8) )


// const closure = () => {
//   let cont = 0

//   return {
//     getCont: () => cont,
//     increment: () => cont += 1,
//     decrement: () => cont -= 1
//   }
// }

// // const enviromentLexico = closure()
// // console.log(enviromentLexico.getCont());

// const closure = (() => {
//   let cont = 0

//   return {
//     getCont: () => cont,
//     increment: () => cont += 1,
//     decrement: () => cont -= 1
//   }
// })()

// closure.increment()
// closure.increment()
// closure.increment()
// console.log('result closure:', closure.getCont());

// const defaultStyles = 'color: white;'
// const message = (title, style) => {
//   return (message) => {
//     console.log(`%c ${title}: ${message} `, defaultStyles + style);
//   }
// }

// const error = message('Error', 'background: red;')
// const warning = message('Error', 'background: orange;')
// const exit = message('Error', 'background: green; border-radius: 10px;')


// console.log(error('Mensage de error'));
// console.log(warning('Mensage de warning'));
// console.log(exit('Mensage de exit'));
