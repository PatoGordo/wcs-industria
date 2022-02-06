import { Home } from "../views/home.js"
import { Quiz } from "../views/quiz.js"
import { QuizResult } from "../views/quiz-result.js"
import { Post } from "../views/post.js"

export const views = [
  {
    name: "home",
    path: '/',
    component: new Home()
  },
  {
    name: "quiz",
    path: '/quiz',
    component: new Quiz()
  },
  {
    name: 'quiz-result',
    path: '/quiz-result',
    component: new QuizResult()
  },
  {
    name: "post",
    path: "/post/:id",
    component: new Post()
  }
]
