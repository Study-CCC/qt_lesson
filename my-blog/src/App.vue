<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'
// import Component from 'vue-class-component'
import Nav from '@/components/nav.vue'

@Component({
  components: {
    Nav,
  },
})

export default class App extends Vue {
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
