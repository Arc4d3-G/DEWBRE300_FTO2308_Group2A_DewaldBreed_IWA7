const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const owed = Math.abs(parseFloat(leoBalance) + parseFloat(sarahBalance)).toFixed(2)                                     // 13976.20
const leo = `${leoName + " " + leoSurname.substring(0,7)} (Owed: R ${Math.abs(parseFloat(leoBalance)).toFixed(2)})`     // Leo Musvair (Owed: R 9394.00)
const sarah = `${sarahName.substring(0,5)} ${sarahSurname} (Owed: R ${Math.abs(parseFloat(sarahBalance)).toFixed(2)})`  // Sarah Kleinhans (Owed: R 4582.20)
const total = `Total amount owed: R ${owed.substring(0,2)} ${(owed).substring(2,8)}`                                    // Total amount owed: R 13 976.20 
const result = `${leo}\n${sarah}\n\n${divider}\n${total}\n${divider}\n`


console.log(result)