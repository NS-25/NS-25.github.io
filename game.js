// Game start function!
const startGame = document.querySelector(".start-btn");
const showContent = document.querySelector(".content");
////////Scramble words and alphabet/////////
const scrambleWords = document.querySelector(".word");
const refreshWords = document.querySelector(".refresh");
////////////Inut value and check value ///////
const inputWords = document.querySelector(".txt");
const checkWords = document.querySelector(".check")
////////countdown seconds///////
const countSeconds = document.querySelector(".time")

//////Hints///////
const hintElement = document.querySelector(".hint")
const hintDisplayElement = document.querySelector("#hint-location")

////////score//////
const scoreBoard = document.querySelector(".value")
let score = 0



let pickedValue; /// which is shufflewords

hintElement.addEventListener("click", () => {
  hintDisplayElement.innerText = pickedValue.hint
})

// Game start function!
const startFunc = () => {
  startGame.style.display = "none";
  showContent.style.display = "block";
}
////////Scramble words and alphabet/////////
/////// function expression cannot hoist from globle scope
/////// function declaration can hoist from globle scope
const shuffleAlphabet = (shuffleWord) => {
  let letterArray = shuffleWord.split("");
  for (let i = letterArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letterArray[i], letterArray[j]] = [letterArray[j], letterArray[i]];
  }
  // console.log(letterArray)

  return letterArray.join("");
}
///////
const scramble = () => {
  if (words.length === 0) {
    scrambleWords.innerText = `Game Over! You scored ${score} points`
  }

  let randomIdx = Math.floor(Math.random() * words.length)
  let shuffleWords = words.splice(randomIdx, 1)[0]
  // let shuffleWords = words[Math.floor(Math.random() * words.length)]; // picked word
  pickedValue = shuffleWords
  let shaffelded = shuffleAlphabet(shuffleWords.word);

  scrambleWords.innerText = shaffelded;
  inputWords.value = "" // clear the input field
  hintDisplayElement.innerText = "" // clear hint
  inputWords.focus()
}
scramble();

refreshWords.addEventListener('click', () => {
  scramble();
})
////////////<----><-------->

////----counter seconds function----//////////
let timer = 30;
















////////////Inut value and check value ///////
/**
 * if pickedword == input > success
 */
checkWords.addEventListener('click', () => {
  console.log(inputWords.value, pickedValue);

  if (inputWords.value == pickedValue.word) {
    score++
    scoreBoard.innerText = score
    scramble()
    console.log("success")
  } else {
    score--
    scoreBoard.innerText = score
    console.log("fail");
  }

})