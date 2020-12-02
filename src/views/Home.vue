<template>
  <div class="home">
    <div class="CarouselDiv">
      <Carrousel :carrousels="carrousels" class="Carousel"/>
    </div>
    <div class="secondNav">
      <Secondnav :secondnavs="secondnavs" class="Secondnav"/>
    </div>
    <div class="thirdNav">
      <Thirdnav :thirdnavs="thirdnavs" class="Thirdnav"/>
    </div>
  </div>
</template>


<script>
import Carrousel from "../components/Carrousel";
import Secondnav from "../components/navM_A_J";
import Thirdnav from "../components/navC_C_E";
export default {
  data(){
    return {
      
    }
  },
  components: {
    Carrousel,
    Secondnav,
    Thirdnav,
  }
}
</script>

<style>
.home{
  overflow: hidden;
}
.CarouselDiv{
  width: 100%;
}
.Carousel{
  width: 100%;
}
.secondNav{
  position: relative;
  top: -.5rem;
  z-index: 20 !important;
}
</style>