export function shuffleQuestions(array: string[]) {
  const shuffledArray = [...array]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }
  return shuffledArray
}

export function shuffleAnswers(array: string[], questionAnswer: string) {
  let answerInTopFour = false
  while (!answerInTopFour) {
    for (let i = 0; i < array.length; i++) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }

    const topFour: string[] = array.slice(0, 4)

    for (let i = 0; i < topFour.length; i++) {
      console.log(questionAnswer)
      if (topFour[i] === questionAnswer) {
        answerInTopFour = true
      }
    }
  }
  return array.slice(0, 4)
}
