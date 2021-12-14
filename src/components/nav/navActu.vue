<template>
  <div class="fourthNav">
      <div class="divNavActu">
          <ul>
              <li class="navActu" v-on:click="show(0)">Actus</li>
              <li class="navManga" v-on:click="show(1)">Manga</li>
              <li class="navAnimation" v-on:click="show(2)">Animé</li>
              <li class="navJeuxvideo" v-on:click="show(3)">Jeux vidéo</li>
              <li class="navComics" v-on:click="show(4)">Comics</li>
              <li class="navAdaptation" v-on:click="show(5)">Adapatation</li>
              <li class="navEvenement" v-on:click="show(6)">Evenement</li>   
          </ul>
      </div>
      <div class="divCardActu" v-show="divActu">
          <Cardactu :cardactus="cardactus" class="cardActu"/>
      </div>
      <div class="divCardManga" v-show="divManga">
        <Cardmanga :cardmangas="cardmangas" class="cardManga"/>
      </div>
      <div class="divCardAnimation" v-show="divAnimation">
        <Cardanime :cardanimes="cardanimes" class="cardAnime"/>
      </div>
      <div class="divCardJeuxvideo" v-show="divJeuxvideo">
        <Cardjeuxvideo :cardjeuxvideos="cardjeuxvideos" class="cardJeuxvideo"/>
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

<script scoped>
import Cardactu from "../cardActu/cardActu";
import Cardmanga from "../cardActu/cardActuManga";
import Cardanime from "../cardActu/cardActuAnime";
import Cardjeuxvideo from "../cardActu/cardActuJeuxvideo";
import Cardcomics from "../cardActu/cardActuComics";
import Cardadaptation from "../cardActu/cardActuAdaptation";
import Cardevenement from "../cardActu/cardActuEvenement";
export default {
    data(){
        return{
            divActu: true,
            divManga: false,
            divAnimation: false,
            divJeuxvideo: false,
            divComics: false,
            divAdaptation: false,
            divEvenement: false,
        }
    },
    components:{
        Cardactu,
        Cardmanga,
        Cardanime,
        Cardjeuxvideo,
        Cardcomics,
        Cardadaptation,
        Cardevenement,
    },
    methods:{
        show: function(affiche){
            if(affiche == 0){
            this.divActu = true;
            this.divManga = false;
            this.divAnimation = false;
            this.divJeuxvideo = false;
            this.divComics = false;
            this.divAdaptation = false;
            this.divEvenement = false;
            }
            else if(affiche == 1){
            this.divActu = false;
            this.divManga = true;
            this.divAnimation = false;
            this.divJeuxvideo = false;
            this.divComics = false;
            this.divAdaptation = false;
            this.divEvenement = false;
            }
            else if(affiche == 2){
            this.divActu = false;
            this.divManga = false;
            this.divAnimation = true;
            this.divJeuxvideo = false;
            this.divComics = false;
            this.divAdaptation = false;
            this.divEvenement = false;
            }
            else if(affiche == 3){
            this.divActu = false;
            this.divManga = false;
            this.divAnimation = false;
            this.divJeuxvideo = true;
            this.divComics = false;
            this.divAdaptation = false;
            this.divEvenement = false;
            }
            else if(affiche == 4){
            this.divActu = false;
            this.divManga = false;
            this.divAnimation = false;
            this.divJeuxvideo = false;
            this.divComics = true;
            this.divAdaptation = false;
            this.divEvenement = false;
            }
            else if(affiche == 5){
            this.divActu = false;
            this.divManga = false;
            this.divAnimation = false;
            this.divJeuxvideo = false;
            this.divComics = false;
            this.divAdaptation = true;
            this.divEvenement = false;
            }
            else if(affiche == 6){
            this.divActu = false;
            this.divManga = false;
            this.divAnimation = false;
            this.divJeuxvideo = false;
            this.divComics = false;
            this.divAdaptation = false;
            this.divEvenement = true;
            }
        }
    }
}
</script>

<style scoped>
    .fourthNav{
    width: 100%;
    margin: auto;
    top: 7rem;
    }
    .fourthNav ul{
    display: flex;
    justify-content: space-around;
    list-style:none;
    margin: auto;
    padding-left:0;
    background-color: #007bff;
    height: 2.5rem;
    }
    .fourthNav li{
    margin: auto;
    text-align: center;
    color: white;
    }
    .fourthNav a{
    background-color: #007bff;
    border: none;
    margin: auto;
    }
    .navActu, .navManga, .navAnimation, .navJeuxvideo, .navComics, .navAdaptation, .navEvenement{
        cursor: pointer;
    }
</style>