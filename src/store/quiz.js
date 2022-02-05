export const quizStore = {
  state() {
    return {
      currentStep: 0,
      currentAnswer: null,
      score: 0,
      questions: [
        {
          question: "Pergunta teste",
          options: [
            "Resposta Errada",
            "Resposta Errado",
            "Resposta Certa",
            "Resposta Errada",
          ],
          answer: 2
        },
        {
          question: "Pergunta teste 2",
          options: [
            "Resposta Certa",
            "Resposta Errado",
            "Resposta Errada",
            "Resposta Errada",
          ],
          answer: 0
        }
      ]
    }
  },
  mutations: {
    validateAndNextStep(state) {
      if (state.questions[state.currentStep].answer === state.currentAnswer) {
        state.score++
        alert("Você acertou!")
      } else {
        alert("Você errou")
      }
      state.currentStep++
      state.currentAnswer = null
    }
  }
}
