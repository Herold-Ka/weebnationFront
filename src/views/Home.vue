<template>
  <div class="home">
    <Carrousel :carrousels="carrousels"/>
    <div class="secondNav">
      <Secondnav :secondnavs="secondnavs"/>
    </div>
  </div>
</template>


<script>
import Carrousel from "../components/Carrousel";
import Secondnav from "../components/navM_A_J";
export default {
  data(){
    return {
      
    }
  },
  components: {
    Carrousel,
    Secondnav,
  }
}
</script>

<style>
</style>