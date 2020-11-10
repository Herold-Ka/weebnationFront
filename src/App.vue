<template>
  <div id="app">
    <NavBar :navbars="navbars"/>
    <router-view/>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'

export default {
  data(){
    return{
        navbars:{},
    };
    },
  components: {NavBar}
}
</script>>

<style>

</style>
