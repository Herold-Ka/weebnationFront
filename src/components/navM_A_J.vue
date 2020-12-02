<template>
  <div class="secondNav">
      <div class="navM_A_J">
          <ul>
              <li class="navManga" v-on:click="show(0)">Manga</li>
              <li class="navAnimation" v-on:click="show(1)">Animé</li>
              <li class="navJeuxvideo" v-on:click="show(2)">Jeux vidéo</li>  
          </ul>
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
  </div>
</template>

<script>
import Cardmanga from "../components/cardManga";
import Cardanime from "../components/cardAnime";
import Cardjeuxvideo from "../components/cardJeuxvideo";
/*var manga = document.getElementsByClassName("divCardManga");
var anime = document.getElementsByClassName("divCardAnimation");
var Jvideo = document.getElementsByClassName("divCardJeuxvideo");*/
export default {
    data(){
        return{
            divManga: true,
            divAnimation: false,
            divJeuxvideo: false,
        }
    },
    components: {
        Cardmanga,
        Cardanime,
        Cardjeuxvideo,
    },
    methods:{
            show:function(affiche){
            if(affiche == 0){
            this.divManga = true;
            this.divAnimation = false;
            this.divJeuxvideo = false;
            }
            else if(affiche == 1){
            this.divManga = false;
            this.divAnimation = true;
            this.divJeuxvideo = false;
            }
            else if(affiche == 2){
            this.divManga = false;
            this.divAnimation = false;
            this.divJeuxvideo = true;
            }
        }
    }
}
</script>

<style>
.navM_A_J{
    width: 55%;
    margin: auto;
    top: 7rem;
}
.navM_A_J ul{
    display: flex;
    justify-content: space-around;
    list-style:none;
    margin: auto;
    padding-left:0;
    border-radius: 30px 30px;
    background-color: #007bff;
    height: 2.5rem;
}
.navM_A_J li{
    margin: auto;
    text-align: center;
    color: white;
}
.navM_A_J a{
    background-color: #007bff;
    border: none;
    
    margin: auto;
}
.navAnimation{ 
  border-color: white;
  /*border-style: solid;
  border-width: 0 1px;
  padding: 0 3rem;*/
}
/**card manga */
.divCardManga{
    position: relative;
    top:5rem;
    left:2rem;
}
.divCardAnimation{
    position: relative;
    top:5rem;
    left:2rem;
}
.divCardJeuxvideo{
    position: relative;
    top:5rem;
    left:2rem;
}
</style>