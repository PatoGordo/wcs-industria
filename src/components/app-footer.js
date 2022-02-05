export class AppFooter {
  template = `
    <footer class="app-footer" v-if="$route.name === 'home'">
      <a href="https://github.com/patogordo/WCS-Industria">Acesse o código fonte do projeto.</a>
    </footer>
  `
}
