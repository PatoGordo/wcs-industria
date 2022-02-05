import { Navbar } from "./components/navbar.js"

export class App {
  components = {
    navbar: new Navbar()
  }
  
  template = `
    <navbar />
    <router-view class="page" />
  `
}
