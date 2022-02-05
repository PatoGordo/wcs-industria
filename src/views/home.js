export class Home {
  template = `
    <div>
      <h2>Bem-vindo a WCS Indústria S.A</h2>
      <p>Nossa empresa é focada na comunicação que é a solução para qualquer negócio.</p>
      
      <br />
      
      <h3>Nossos Posts</h3>
      
      <br />
      
      <ul class="posts">
        <li class="post" v-for="post in $store.state.posts" :key="post.id">
          <h4>{{ post.title }}</h4>
          <small>{{ post.created_at }}</small>
          <p>{{ post.description }}</p>
          <router-link :to="'/post/'+post.id">Ler mais</router-link>
        </li>
      </ul>
      
      <br />
      <br />
      
      <router-link class="quiz-btn button-like" to="/quiz">Teste seus conhecimentos aqui!</router-link>
    </div>
  `
}
