import { infograficoSVG } from "../assets/infografico.js"

export const mainStore = Vuex.createStore({
  state() {
    return {
      score: 0,
      posts: [
        {
          id: "0",
          title: "Entenda a importância das Soft Skills.",
          description: "Soft skills é um termo em inglês usado por profissionais de recursos humanos para definir habilidades comportamentais, competências subjetivas difíceis de avaliar. Também são conhecidas como people skills (habilidades com pessoas) e interpersonal skills (habilidades interpessoais).",
          content: `
            Soft skills é um termo em inglês usado por profissionais de recursos humanos para definir habilidades comportamentais, competências subjetivas difíceis de avaliar. Também são conhecidas como people skills (habilidades com pessoas) e interpersonal skills (habilidades interpessoais).<br/><br/>
            São normalmente analisadas junto com as hard skills (habilidades técnicas) na seleção e contratação de profissionais pelos departamentos de RH.<br/><br/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk_HxCdBCCYLgkoxYEGKuPdhjt5VlBCeb2OQ&usqp=CAU"><br/><br/>
            Podemos citar alguns exemplos de soft skills: Criatividade, Persuasão, Colaboração, Adaptabilidade e Inteligência Emocional. Essas 5 aparecem no topo das mais procuradas segundo o linkedin em uma pesquisa realizada no ano de 2020. Criatividade e Adaptabilidade são importantes nos dias de hoje pois vivemos num período de mudanças, de muita informação e, principalmente Inteligência Artificial.<br/><br/>
          `,
          references: [
            {
              title: "Soft Skills e Hard Skills – você precisa definir as suas!",
              provider: "Innovare Jr",
              url: "https://innovarejr.com.br/2020/09/01/soft-skills-e-hard-skills-voce-precisa-definir-as-suas/",
              acessed_at: "05/02/2022"
            },
            {
              title: "Soft skills",
              provider: "Wikipedia",
              url: "https://pt.m.wikipedia.org/wiki/Soft_skills",
              acessed_at: "05/02/2022"
            }
          ],
          created_at: "05/02/2022",
        },
        {
          id: "1",
          title: "Dicas para Apresentação em Público.",
          description: "Nesse breve podcast vamos dar dicas sobre oratória focado no ambiente de trabalho.",
          content: `
            Nesse breve podcast vamos dar dicas sobre oratória focado no ambiente de trabalho.
          `,
          created_at: "05/02/2022",
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
            <iframe class="video" src="https://youtube.com/embed/dQw4w9WgXcQ" frameborder="0"></iframe>
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
