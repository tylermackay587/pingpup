<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <div id="footerButton">
    <a href="https://the-mathacademy.herokuapp.com/#/"><button id="signup" type="button" class="btn btn-block btn-success try">Sign up</button></a>
    </div>
    <pagefooter></pagefooter>
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue"
import Hello from "./components/Hello.vue"
import Info from "./components/info.vue"
import Pagefooter from "./components/PageFooter.vue"
export default {
  name: 'app',
  data() {
    return {}
  },
  components: { Navbar, Hello, Info, Pagefooter }
}
</script>

<style>
html, body {
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}
#footerButton {
  width: 70%;
  margin: auto;
  padding-bottom: 2vh;
  max-width: 1200px;
}
a:hover {
  text-decoration: none;
}
.try {
  font-size: 25px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  position: relative;
}
</style>
