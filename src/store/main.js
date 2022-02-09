import { infograficoSVG } from "../assets/infografico.js"

export const mainStore = Vuex.createStore({
  state() {
    return {
      score: 0,
      posts: [
        {
          id: "0",
          title: "Entenda a importância das Soft Skills.",
          description: "As definições de \"soft skills\" e \"hard skills\" podem variar de acordo com a cultura e o idioma, mas em geral, \"soft skills\" são habilidades não acadêmicas, como comunicação, liderança, resolução de problemas e tomada de decisão, enquanto \"hard skills\" são habilidades acadêmicas, como conhecimento específico de uma área de estudo.",
          content: `
            As definições de "soft skills" e "hard skills" podem variar de acordo com a cultura e o idioma, mas em geral, "soft skills" são habilidades não acadêmicas, como comunicação, liderança, resolução de problemas e tomada de decisão, enquanto "hard skills" são habilidades acadêmicas, como conhecimento específico de uma área de estudo.<br /><br />
            No Brasil, "soft skills" são consideradas habilidades essenciais para o sucesso na vida profissional, pois são habilidades que não podem ser aprendidas em sala de aula. "Hard skills" são importantes, mas não tão cruciais quanto "soft skills".<br /><br />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk_HxCdBCCYLgkoxYEGKuPdhjt5VlBCeb2OQ&usqp=CAU"><br/><br/>
            As empresas buscam cada vez mais profissionais com habilidades socioemocionais. Isso porque essas competências são cruciais para o sucesso na gestão de pessoas e na construção de relacionamentos.<br /><br />
            A capacidade de se comunicar bem, de lidar com conflitos, de trabalhar em equipe e de ter iniciativa são algumas das principais características de um profissional com habilidades socioemocionais.<br /><br />
            Essas habilidades não podem ser aprendidas em sala de aula. Elas são frutos da experiência e da interação com outras pessoas. Por isso, é importante que os profissionais busquem o desenvolvimento dessas competências ao longo da vida.<br /><br />
            As habilidades socioemocionais são fundamentais para o sucesso na carreira. Elas ajudam a construir relacionamentos saudáveis e a gerir pessoas de forma eficiente. Por isso, é importante que os profissionais busquem o desenvolvimento dessas competências ao longo da vida.<br /><br />
          `,
          references: [
            {
              title: "Soft Skills e Hard Skills – você precisa definir as suas!",
              provider: "Innovare Jr",
              url: "https://innovarejr.com.br/2020/09/01/soft-skills-e-hard-skills-voce-precisa-definir-as-suas/",
              accessed_at: "05/02/2022"
            },
          ],
          created_at: "05/02/2022",
        },
        {
          id: "1",
          title: "Dicas para Apresentação em Público.",
          description: "Nesse breve podcast vamos dar dicas sobre como melhorar a sua oratória.",
          content: `
            Nesse breve podcast vamos dar dicas sobre como melhorar a sua oratória.<br /><br />
            <audio class="audio" id="podcast-player" controls autoplay>
              <source id="mp3_src" src="src/assets/podcast.mp3" type="audio/mp3">
              Seu navegador não suporta audios!
            </audio>
          `,
          created_at: "08/02/2022",
        },
        {
          id: "2",
          title: "Como controlar o nervosismo no momento de se comunicar.",
          description: "Com esse artigo, você vai aprender a como controlar o nervosismo natual que surge na hora de se comunicar para muitas pessoas.",
          content: `
            Com esse artigo, você vai aprender a como controlar o nervosismo natural que surge na hora de se comunicar para muitas pessoas.<br /><br />
            <iframe class="video" src="https://youtube.com/embed/hk-R1op7lTA" frameborder="0"></iframe>
          `,
          created_at: "07/02/2022",
        },
        {
          id: "3",
          title: "A importância da linguagem verbal e não verbal no ambiente de trabalho.",
          description: "Vamos mostrar com um simples vídeo a importância da linguagem verbal e não verbal no ambiente de trabalho, mostrando exemplos e ensinando quando usar cada.",
          content: `
            Vamos mostrar com um simples vídeo a importância da linguagem verbal e não verbal no ambiente de trabalho, mostrando exemplos e ensinando quando usar cada.<br /><br />
            <iframe class="video" src="https://youtube.com/embed/RBHrv8X9AH0" frameborder="0"></iframe>
          `,
          created_at: "07/02/2022",
        },
        {
          id: "4",
          title: "Entenda os documentos técnicos com um simples infográfico.",
          description: "Aprenda como usar e formular as ordens de serviço, catálogos, manuais de fabricante, relatórios e solicitações de compras.",
          content: `
            Aprenda como usar e formular as ordens de serviço, catálogos, manuais de fabricante, relatórios e solicitações de compras.<br /><br />
            ${infograficoSVG}
          `,
          created_at: "07/02/2022",
        }
      ]
    }
  },
  mutations: {
    incrementScore(state) {
      state.score++
    }
  }
})
