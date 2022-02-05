import { collection, setDoc, getDocs, doc, query, orderBy, limit, updateDoc } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js"

import { db } from "../firebase.js"

export class QuizResult {
  setup() {
    const route = VueRouter.useRoute()
    
    let alreadyHaveAUserName = Vue.ref(false)
    let existentUserScore = Vue.ref("")
    const playerName = Vue.ref(localStorage.getItem("player:name") || "")
    const finalScore = route.params.score
    const questionLength = 5
    
    const ranking = Vue.ref([])
    
    Vue.watch(playerName, (value) => {
      localStorage.setItem("player:name", playerName.value)
    })
    
    Vue.onBeforeMount(async () => {
      const q = query(collection(db, "ranking"), orderBy("score", "desc"), limit(3))
      const querySnapshot = await getDocs(q)
      
      querySnapshot.forEach((doc) => {
        ranking.value.push(doc.data())
      })
      
      if (localStorage.getItem("player:name") !== null) {
        alreadyHaveAUserName.value = true
      }
    })
    
    async function saveProgress() {
      try {
        const docRef = await setDoc(doc(db, "ranking", playerName.value), {
          name: playerName.value,
          score: finalScore
        }, { marge: true })
        
        window.location.reload()
      } catch (e) {
        console.log(e);
        alert(e)
      }
    }
    
    return {
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
      
      <h3>Pódio</h3>
      <ol class="ranking">
        <li class="rank" v-for="(rank, index) in ranking" :key="index">
          {{ index + 1 }}° - {{ rank.name }} acertou {{ rank.score }}/{{ questionLength }}!
        </li>
      </ol>
      
      <br />
      
      <input v-if="!alreadyHaveAUserName" v-model="playerName" placeholder="Qual é o seu nome?" />
      
      <button @click="saveProgress" :disabled="!playerName">Salvar meu progrsso no ranking</button>
    </div>
  `
}
