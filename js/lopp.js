for(let i = 1; i <= 20; i+=1){
    console.log(i)
}

let temp =['apple', 'banana', 'kiwi']
// temp.forEach((element, idx) =>{
//     console.log(idx, element)
// });

// temp.map(element => console.log(element))

let newValue = temp.map((element, idx) => {
    return `${idx+1}.${element}`
})
console.log(newValue)

let filferMoreThanZero = [-1,2,3,56,6,-93,0,4].filter(el => el >= 0)
console.log(filferMoreThanZero)