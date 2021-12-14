<template>
  <div class="home">
    <div class="CarouselDiv">
      <Carrousel  class="Carousel"/>
    </div>
    <div class="corpsHome">
      <div class="menuSelectHome">
        <div class="firstPart">
          <Secondnav class="secondNav"/>
          <Ranking class="ranking"/>
        </div>
        <div class="secondPart">
          <Thirdnav />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Carrousel from "../components/Carrousel";
import Secondnav from "../components/pageHome/navM_A_J";
import Thirdnav from "../components/pageHome/navC_C_E";
import Ranking from "../components/pageHome/ranking.vue";
export default {
  data(){
    return {  
    }
  },
  components: {
    Carrousel,
    Secondnav,
    Ranking,
    Thirdnav,
  },
  
}
</script>

<style scoped>
.home{
  overflow: hidden;
  min-height: 100vh;
}
.CarouselDiv{
  width: 100%;
}
.Carousel{
  width: 100%;
}
.firstPart{
  height: 120vh;
  width: 100%;
  display: flex;
}
.secondNav{
  height: 100%;
  width: 75%;
}
.ranking{
  height: 100%;
  width: 25%;
}
.secondPart{
  height: 120vh;
  width: 100%;
}
@media screen and (max-width:768px) {
    .ranking{
      display: none;
    }
    .secondNav{
      width: 100%;
    }
}
@media screen  and (max-width:425px) {
  .firstPart{
    height: 240vh;
  }
  .secondPart{
    height: 240vh;
  }
}
</style>