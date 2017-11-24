<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    {{total_price}}
    <apple></apple>
    <banana></banana>
    {{done_todos}}
    <ul>
      <router-link tag="li" to="*">hello</router-link>
      <router-link tag="li" to="/cmpA">componentA</router-link>
      <router-link tag="li" to="/cmpB">componentB</router-link>
    </ul>
    <router-view/>
  </div>
</template>

<script>
import apple from './components/componentA'
import banana from './components/componentB'
export default {
  name: 'app',
  components:{
    apple,
    banana
  },
  computed:{
    total_price(){
      return this.$store.state.total_price;
    },
    done_todos(){
      return this.$store.getters.done_todos;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
