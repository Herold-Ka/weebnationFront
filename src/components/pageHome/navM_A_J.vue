<template>
  <div>
      <div class="navM_A_J">
          <ul>
              <li class="navManga" v-on:click="show(0)"><p>manga</p></li>
              <li class="navAnimation" v-on:click="show(1)"><p>animé</p></li>
              <li class="navJeuxvideo" v-on:click="show(2)"><p>Jeux vidéo</p></li>
              <li class="navComics" v-on:click="show(3)"><p>Comics</p></li> 
              <li class="navAdaptation" v-on:click="show(4)"><p>Cinéma</p></li> 
          </ul>
      </div>
      <div class="divArticle">
          <div class="divCardManga" v-show="divManga">
            <Cardmanga class="Sousmenu"/>
          </div>
          <div class="divCardAnimation" v-show="divAnimation">
            <Cardanime class="Sousmenu"/>
          </div>
          <div class="divCardJeuxvideo" v-show="divJeuxvideo">
            <Cardjeuxvideo class="Sousmenu"/>
          </div>
          <div class="divCardComics" v-show="divComics">
            <Cardcomics class="Sousmenu"/>
          </div>
          <div class="divCardAdaptation" v-show="divAdaptation">
            <Cardadaptation class="Sousmenu"/>
          </div>
      </div>
  </div>
</template>

<script>
import Cardmanga from "./card/cardManga.vue";
import Cardanime from "./card/cardAnime.vue";
import Cardjeuxvideo from "./card/cardJeuxvideo.vue";
import Cardcomics from "./card/cardComics.vue";
import Cardadaptation from "./card/cardAdaptation.vue"; 

export default {
    data(){
        return{
            divManga: true,
            divAnimation: false,
            divJeuxvideo: false,
            divComics: false,
            divAdaptation: false,

        }
    },
    components: {
        Cardmanga,
        Cardanime,
        Cardjeuxvideo,
        Cardcomics,
        Cardadaptation,
    },
    methods:{
            show:function(affiche){
            if(affiche == 0){
                this.divManga = true;
                this.divAnimation = false;
                this.divJeuxvideo = false;
                this.divComics = false;
                this.divAdaptation = false;
            }
            else if(affiche == 1){
                this.divManga = false;
                this.divAnimation = true;
                this.divJeuxvideo = false;
                this.divComics = false;
                this.divAdaptation = false;
            }
            else if(affiche == 2){
                this.divManga = false;
                this.divAnimation = false;
                this.divJeuxvideo = true;
                this.divComics = false;
                this.divAdaptation = false;
            }
            if(affiche == 3){
                this.divManga = false;
                this.divAnimation = false;
                this.divJeuxvideo = false;
                this.divComics = true;
                this.divAdaptation = false;
            }
            else if(affiche == 4){
                this.divManga = false;
                this.divAnimation = false;
                this.divJeuxvideo = false;
                this.divComics = false;
                this.divAdaptation = true;
            }
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    
}
.navM_A_J{
    width: 100%;
    margin: auto;
    position: relative;
    height: 8vh;
}
.navM_A_J ul{
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    list-style:none;
    margin: auto;
    border: solid;
    background-color: #343a40;
    height: 100%;
}
.navM_A_J li{
    display: block;
    width: 33.3%;
    margin: auto;
    text-align: center;
    position: relative;
}
.navM_A_J a{
    background-color: #343a40;
    border: none;
    margin: auto;
}
.navM_A_J p{
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-align: center;
    color: antiquewhite;
}
/**card manga */
.divArticle{
    height: 90%;
    width: 90%;
    position: relative;
    margin: auto;
}
.divCardManga, .divCardAnimation, .divCardJeuxvideo, .divCardComics, .divCardAdaptation{
    position: relative;
    height: 100%;
    margin: auto;
}
@media screen  and (max-width:425px){
    .divArticle{
        height: 98%;
    }
    .navM_A_J p{
        font-size: 10px;
    }
}

/*.navManga, .navAnimation, .navJeuxvideo{
    cursor: pointer;
}
.Sousmenu{
    height: 100%;
    margin: auto;
    position: static;
}*/
</style>