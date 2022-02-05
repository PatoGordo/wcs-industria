export class Quiz {
  setup() {
    const router = VueRouter.useRouter()
    
    const currentStep = Vue.ref(0)
    const currentAnswer = Vue.ref(null)
    const score = Vue.ref(0)
    
    const questions = [
      {
        question: "Assinale a alternativa correta sobre o significado de catálogo.",
        options: [
          "lista de compras para fazer no supermercado.",
          "Um documento que apresenta o número de pessoas no estabelecimento.",
          "Uma publicação empresarial que promove os produtos ou serviços de uma empresa.",
          "Papel que contém somente informações da empresa."
        ],
        answer: 2
      },
      {
        question: "Assinale a alternativa CORRETA sobre como falar bem em público.",
        options: [
          "Falta de ordenação lógica do raciocínio.",
          "Descontrole de falar em público.",
          "Domine o assunto sobre o qual irá falar.",
          "Medo de falar em público.",
        ],
        answer: 2
      },
      {
        question: "Leia as alternativas a seguir e assinale a alternativa INCORRETA sobre como falar bem em público.",
        options: [
          "Conheça o público.",
          "Escrever uma cola na mão.",
          "Pratique em casa.",
          "Bom humor."
        ],
        answer: 1
      },
      {
        question: "Qual a importância da linguagem verbal e não verbal no ambiente de trabalho?",
        options: [
          "Atingir somente conversas de grau elevado.",
          "Assim como acontece na vida pessoal, o ambiente de trabalho exige o desenvolvimento de boas formas de comunicaçao interpessoal.",
          "Nao ter eficacia nas mensagens.",
          "Nao possui importancia."
        ],
        answer: 1
      },
      {
        question: "Assinale a alternativa que apresenta elementos que compõem a comunicação eficaz.",
        options: [
          "Emissor, receptor, mensagem e coerência.",
          "Emissor e receptor.",
          "Receptor e mensagem.",
          "Emissor, receptor, linguagem e mensagem."
        ],
        answer: 3
      }
    ]
    
    const currentQuestion = Vue.ref([questions[0]])
    
    function validateAndNextStep() {
      if (currentAnswer.value === null) {
        return
      }
      
      if (questions[currentStep.value].answer === currentAnswer.value) {
        score.value++
      }
      
      if (questions.length - 1 !== currentStep.value) {
        currentStep.value++
        currentQuestion.value = [questions[currentStep.value]]
        currentAnswer.value = null
      } else {
        router.push(`/quiz-result/${score.value}`)
      }
    }

    return {
      questions,
      currentStep,
      currentAnswer,
      validateAndNextStep,
      currentQuestion
    }
  }

  template = `
    <div>
      <section class="current-question" v-for="(question, index) in currentQuestion" :key="index">
        <h2>{{ question.question }}</h2>
        <p v-if="question.description">{{ question.description }}</p>
        
        <ul class="questions">
          <li class="option button-like" :class="currentAnswer === index? 'selected' : ''" v-for="(answer, index) in question.options" :key="index" @click="currentAnswer = index">
            {{ answer }}
          </li>
        </ul>
        
        <button class="submit" @click="validateAndNextStep" :disabled="currentAnswer === null">
          {{ questions.length - 1 !== currentStep? 'Proxima' : 'Finalizar' }}
        </button>
      </section>
    </div>
  `
}
