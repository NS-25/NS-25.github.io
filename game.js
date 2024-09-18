// Game start function!
const startGame = document.querySelector(".start-btn");
const showContent = document.querySelector(".content");
////////Scramble words and alphabet/////////
const scrambleWords = document.querySelector(".word");
const refreshWords = document.querySelector(".refresh");
////////////Inut value and check value ///////
const inputWords = document.querySelector(".txt");
const checkWords = document.querySelector(".check")




let pickedValue; /// which is shufflewords

// Game start function!
const startFunc = () => {
  startGame.style.display = "none";
  showContent.style.display = "block";
}
////////Scramble words and alphabet/////////
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
  let shuffleWords = words[Math.floor(Math.random() * words.length)]; // picked word
  pickedValue = shuffleWords
  let shaffelded = shuffleAlphabet(shuffleWords.word);

  scrambleWords.innerText = shaffelded;
}
scramble();

refreshWords.addEventListener('click', () => {
  scramble();
})

////////////Inut value and check value ///////
/**
 * if pickedword == input > success
 */
checkWords.addEventListener('click', () => {
  console.log(inputWords.value, pickedValue);

  if (inputWords.value == pickedValue.word) {

    console.log("success")
  } else {
    console.log("fail");
  }

})