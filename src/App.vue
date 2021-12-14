<template>
  <div id="app">
    <div class="navP">
      <div class="navCo">
        <NavBarCo v-show="connecter"/>
      </div>
      <div class="navOut">
        <NavBarOut v-show="nonConnecter"/>
      </div>
    </div> 
    <router-view class="router"/>
    <div class="divFooter">
      <Footer :footers="fouters" class="footer"/>
    </div> 
  </div>
</template>
<script>


import Footer from './components/footer.vue'
import NavBarCo from "./components/nav/navBarCo";
import NavBarOut from "./components/nav/navBarOut";
export default {
  data(){
    return{
        navbars:{},
        fouters:{},
        connecter: false,
        nonConnecter: true,
    };
    },
  components: {
    //NavBar,
    Footer,
    NavBarCo,
    NavBarOut,
    },
    created:function(){
      if(localStorage.getItem("token")){
      this.connecter = true;
      this.nonConnecter = false;
      console.log("bite");
    }else{
      this.connecter = false;
      this.nonConnecter = true;
      console.log("cul");
    }
    }
}
</script>

<style scoped>
#app{
  /*background-image: url("../public/img/Bulle.jpg");*/
  background-color: #202124;
}
.navP{
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
}
.router{
  position: relative;
  z-index: 10;
}
.divFooter{
  position: relative;
  z-index: 1;
}
</style>
