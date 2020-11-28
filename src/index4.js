// const body = document.querySelector('body')
// const promise = new Promise((resolve, reject) => {
//     const ok = Math.random() < 0.5
//     setTimeout(() => {
//         if (ok) {
//             resolve('все нормально')
//         }
//         reject('все пропало')
//     }, 3000)
//         //     if (ok) {
//         //     resolve('все нормально')
//         // }
//         // reject('все пропало')
// })
// promise.then(
//     result => {
//         console.log(result)
//         return result
//     }

// ).then(x => {
//     console.log(x)
//     return x
// }
// ).then(x => {
// return Math.random() > 0.5
// }).then(x => {
//     console.log(x)
//     return x
// }).catch(error => 
//     console.log(error)
// ).finally(body.style.backgroundColor = 'red')






// const makeDish = (dish) => {
//     const promise = new Promise((resolve, reject) => {
//     const passed = Math.random() < 0.5
//     setTimeout(() => {
//         if (passed) {
//     resolve('садитесь жрать')
//         } else {
//     reject('горите в Аду!')
// }
//     }, 2000)
//     })
//     return promise
// }
// makeDish('хрень').then(fn1).catch(fn2)
// function fn1 (result) {
//     console.log(result)
// }
// function fn2(result) {
//     console.log(result)
// }






// const makeDish = dish => {
// return Promise.resolve('садитесь жрать')
// }
// makeDish('хрень').then(fn)

// function fn (result) {
//     console.log(result)
// }









// function fetchPokemonById(id) {
//    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then(r => r.json())
// }
// fetchPokemonById(1).then(onSucces).catch(onError)
// fetchPokemonById(2).then(onSucces).catch(onError)
//   fetchPokemonById(3).then(onSucces).catch(onError)


// function onSucces (pokemon) {
//     console.log(pokemon)
// }

// function onError (error) {
//     console.log('это косяк')
// }


const refs = {
    startbtn: document.querySelector('.js-start-race'),
    winnerField: document.querySelector('.js-winner'),
    progressField: document.querySelector('.js-progress'),
    tableBody: document.querySelector('.js-results-table')
}
refs.startbtn.addEventListener('click', () => {
    const promises = horses.map(run)
    // console.log(promises)
    refs.winnerField.textContent = ''
    refs.progressField.textContent = `Заезд начался, ставки не принимаются`

    Promise.race(promises).then(({ hourse, time }) => {
    refs.winnerField.textContent = `победил ${hourse} за ${time} мс время`
    })

    Promise.all(promises).then(() => {
        refs.progressField.textContent = `Заезд окончен, принимаются ставки`
    })
})

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function run(hourse) {
    return new Promise(resolve => {
        const time = getRandomTime(2000, 3500)
        setTimeout(() => {
resolve({ hourse, time })
        }, time)
    })
}
// run('коняка').then(x => console.log(x))

// const promises = horses.map(run)
// console.log(promises)

