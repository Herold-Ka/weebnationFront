<template>
  <div class="thirdNav">
      <div class="navC_C_E">
          <ul>
              <li class="navComics" v-on:click="show(3)">Comics</li>
              <li class="navAdaptation" v-on:click="show(4)">Adapatation</li>
              <li class="navEvenement" v-on:click="show(5)">Evènement</li>  
          </ul>
      </div>
      <div class="divCardComics" v-show="divComics">
        <Cardcomics :cardcomicss="cardcomicss" class="cardComics"/>
      </div>
      <div class="divCardAdaptation" v-show="divAdaptation">
        <Cardadaptation :cardadaptations="cardadaptations" class="cardAdaptation"/>
      </div>
      <div class="divCardEvenement" v-show="divEvenement">
        <Cardevenement :cardevenements="cardevenements" class="cardEvenement"/>
      </div>
  </div>
</template>

<script>
import Cardcomics from "../components/cardComics";
import Cardadaptation from "../components/cardAdaptation";
import Cardevenement from "../components/cardEvenement";
/*var manga = document.getElementsByClassName("divCardManga");
var anime = document.getElementsByClassName("divCardAnimation");
var Jvideo = document.getElementsByClassName("divCardJeuxvideo");*/
export default {
    data(){
        return{
            divComics: true,
            divAdaptation: false,
            divEvenement: false,
        }
    },
    components: {
        Cardcomics,
        Cardadaptation,
        Cardevenement,
    },
    methods:{
            show:function(affiche){
            if(affiche == 3){
            this.divComics = true;
            this.divAdaptation = false;
            this.divEvenement = false;
            }
            else if(affiche == 4){
            this.divComics = false;
            this.divAdaptation = true;
            this.divEvenement = false;
            }
            else if(affiche == 5){
            this.divComics = false;
            this.divAdaptation = false;
            this.divEvenement = true;
            }
        }
    }
}
</script>

<style>
.navC_C_E{
    position: relative;
    top: 15rem;
    width: 55%;
    margin: auto;
    top: 7rem;
}
.navC_C_E ul{
    display: flex;
    justify-content: space-around;
    list-style:none;
    margin: auto;
    padding-left:0;
    border-radius: 30px 30px;
    background-color: #007bff;
    height: 2.5rem;
}
.navC_C_E li{
    margin: auto;
    text-align: center;
    color: white;
}
.navC_C_E a{
    background-color: #007bff;
    border: none;
    margin: auto;
}
.divCardComics{
    position: relative;
    top:13rem;
    left:2rem;
}
.divCardAdaptation{
    position: relative;
    top:13rem;
    left:2rem;
}
.divCardEvenement{
    position: relative;
    top:13rem;
    left:2rem;
}
</style>