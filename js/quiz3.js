// if (grade >= 81){
//     grade = "A"
// }else if (grade >=71 && grade <= 80){
//     grade = "B"
// }else if (grade >=61 && grade <= 70){
//     grade = "C"
// }else if (grade >=51 && grade <= 60){
//     grade = "D"
// }else if(grade >=0 && grade <= 50){
//     grade = "F"
// }
// console.log(grade)

const result = 61
result < 50 ? console.log('F') : 
result >= 50 && result < 60 ? console.log('D') : 
result >= 60 && result < 70 ? console.log('C') : 
result >= 70 && result < 80 ? console.log('B') :
result >= 80 && result <= 100 ? console.log('A') : console.log('Error')
console.log(result)