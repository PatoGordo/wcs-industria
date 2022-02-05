export class Post {
  setup() {
    const route = VueRouter.useRoute()
    const store = Vuex.useStore()
    
    const postID = route.params.id
    
    const post = store.state.posts.find((p) => p.id === postID)
    
    return {
      postID,
      post
    }
  }
  
  template = `
    <div>
      <h2>{{ post.title }}</h2>
      <small>Post criado em: {{ post.created_at }}</small>
      
      <br />
      
      <p v-html="post.content"></p>
      
      <br />
      
      <ul class="references">
        <li class="reference" v-for="(reference, index) in post.references" :key="index">
          <span style="text-transform:uppercase;font-weight: 500">{{ reference.title }}</span>. {{ reference.provider }}. Disponível em: &lt;<a :href="reference.url">{{ reference.url }}</a>&gt;. Acesso em: {{ reference.acessed_at }}
        </li>
      </ul>
    </div>
  `
}
