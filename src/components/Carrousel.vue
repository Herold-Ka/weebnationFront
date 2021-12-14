<template>
  <div>
<b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="80"
    class="carousel"
    fixed
    background-image="cover"
  >
    <b-carousel-slide class="slide" v-for="slide in slides" :key="slide"
      :img-src=slide
    ></b-carousel-slide>
  
  </b-carousel>
  </div>
</template>

<script>
export default {
  data(){
    return{
      slides: [
        "../img/slider1.jpg",
        "../img/slider2.jpg",
      ]
    }
  }
}
</script>

<style>
  .slide img{
    height: 70vh;
    width: 100%;
  }
  .carousel{
    top: 0;
  }
</style>