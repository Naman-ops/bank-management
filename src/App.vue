<template>
  <div id="app">
        <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
    import header from './components/header.vue'
export default {
  components:{
            'app-header':header,
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
