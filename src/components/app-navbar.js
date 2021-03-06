export class AppNavbar {
  template = `
    <nav class="app-navbar">
      <span class="content" :style="$route.name === 'home'? 'justify-content: center;' : ''">
        <h1 @click="$router.push('/')">
          WCS Indústria
        </h1>
        <span @click="$router.go(-1)" v-if="$route.name !== 'home'">
          <span class="iconify" data-icon="akar-icons:arrow-left"></span>
        </span>
      </span>
    </nav>
  `
}
