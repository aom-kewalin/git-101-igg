//1
for(let i = 1; i <= 20; i+=1){
    console.log(i)
}
//2
for(let i = 1; i <= 20; i++){
    console.log(i % 2 === 0? i : '')
}
//3
let result1 = [-1,2,3,56,6,-93,0,4].map(el => el *2)
console.log(result1)
//4
let result2 = [-1,2,3,56,6,-93,0,4].filter(el => el/2 >=0)
console.log(result2)

// //1
// const data = []
// for (let i = 0; i != 20; i++) {
//     data.push(i + 1)
// }
// console.log(data)
// //2
// data.forEach(e => e % 2 === 0 ? console.log(e) : '')
// //3
// data_1 = [-1, 2, 3, 56, 6, -93, 0, 4]
// const map_1 = data_1.map(e => e * 2)
// console.log(map_1)
// //4
// const data_2 = [10, 13, 44, 55, 89, 0, 12, 1]
// const result = []
// data_2.forEach(e => {
//     e % 2 === 0 ? result.push(e) : ''
// })
// console.log(result)