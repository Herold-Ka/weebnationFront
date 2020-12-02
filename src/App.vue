<template>
  <div id="app">
    <div class="navP">
      <NavBar :navbars="navbars" class="NavPrincipale"/>
    </div>  
    <router-view/>
    <div class="footer">
      <Footer :footers="fouters" class=""/>
    </div>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/footer.vue'
export default {
  data(){
    return{
        navbars:{},
        fouters:{},
    };
    },
  components: {
    NavBar,
    Footer,
    }
}
</script>>

<style>
#app{
  background-image: url("../public/img/Bulle.jpg");
}
.navP{
  position: fixed;
  z-index: 99;
  width: 100%;
}
.navPrincipale{
  width: 100%;
}

</style>
