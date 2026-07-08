const playerguess = 8
const correctanswer = 6
let msg = ""
msg = playerguess=== correctanswer? "correct":playerguess>correctanswer? "too high":"too low"
console.log(msg)