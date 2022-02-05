import { App } from "./app.js"

import { router } from "./router/index.js"
import { mainStore } from "./store/main.js"

const app = Vue.createApp(new App())

app.use(router)
app.use(mainStore)

app.mount("#app")
