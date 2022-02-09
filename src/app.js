import { AppNavbar } from "./components/app-navbar.js"
import { AppFooter } from "./components/app-footer.js"

export class App {
  components = {
    'app-navbar': new AppNavbar(),
    'app-footer': new AppFooter()
  }
  
  template = `
    <app-navbar />
    <router-view class="page" />
    <app-footer />
  `
}
