import { collection, setDoc, getDocs, doc, query, orderBy, limit, updateDoc } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js"

import { db } from "../firebase.js"

import { questions } from "./quiz.js"

export class QuizResult {
  setup() {
    const store = Vuex.useStore()
    
    let alreadyHaveAUserName = Vue.ref(false)
    let existentUserScore = Vue.ref("")
    const playerName = Vue.ref(localStorage.getItem("player:name") || "")
    const isLoading = Vue.ref(false)
    
    const finalScore = store.state.score
    const questionLength = questions.length
    
    const ranking = Vue.ref([])
    
    Vue.watch(playerName, (value) => {
      localStorage.setItem("player:name", playerName.value)
    })
    
    Vue.onBeforeMount(async () => {
      isLoading.value = true
      const q = query(collection(db, "ranking"), orderBy("score", "desc"), limit(5))
      const querySnapshot = await getDocs(q)
      
      querySnapshot.forEach((doc) => {
        ranking.value.push(doc.data())
      })
      
      isLoading.value = false
      
      if (localStorage.getItem("player:name") !== null) {
        alreadyHaveAUserName.value = true
      }
    })
    
    async function saveProgress() {
      try {
        const docRef = await setDoc(doc(db, "ranking", playerName.value), {
          name: playerName.value,
          score: Number(finalScore)
        }, { marge: true })
        
        window.location.reload()
      } catch (e) {
        console.log(e);
        alert(e)
      }
    }
    
    return {
      isLoading,
      alreadyHaveAUserName,
      saveProgress,
      playerName,
      ranking,
      finalScore,
      questionLength
    }
  }
  
  template = `
    <div class="quiz-result">
      <h2>Parabéns seu placar final foi de {{ finalScore }} pontos!</h2>
      
      <h3>Pódio global</h3>
      <div v-if="isLoading"><br />{{ isLoading? 'Carregando pódio...' : '' }}</div>
      <ol class="ranking">
        <li class="rank" v-for="(rank, index) in ranking" :key="index">
          {{ index + 1 }}° - {{ rank.name }} acertou {{ rank.score }}/{{ questionLength }}!
        </li>
      </ol>
      
      <br />
      
      <input v-if="!alreadyHaveAUserName && !isLoading" v-model="playerName" placeholder="Qual é o seu nome?" />
      
      <button v-if="!isLoading" @click="saveProgress" :disabled="!playerName">Salvar meu progrsso no ranking</button>
    </div>
  `
}
