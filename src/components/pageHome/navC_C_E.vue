<template>
  <div>
      <div class="navC_C_E">
          <ul>
              <li class="navTech" v-on:click="show(5)"><p>Tech</p></li>
              <li class="navEvenement" v-on:click="show(6)"><p>Evènement</p></li>  
          </ul>
      </div>
      <div class="divArticle">
          <div class="divCardTech" v-show="divTech">
            <Cardtech class="Sousmenu"/>
          </div>
          <div class="divCardEvenement" v-show="divEvenement">
            <Cardevenement class="Sousmenu"/>
          </div>
      </div>
  </div>
</template>

<script>
import Cardtech from "./card/cardTech.vue";
import Cardevenement from "./card/cardEvenement.vue";
export default {
    data(){
        return{
            divTech: true,
            divEvenement: false,
        }
    },
    components: {
        Cardtech,
        Cardevenement,
    },
    methods:{
            show:function(affiche){
            if(affiche == 5){
                this.divTech = true; 
                this.divEvenement = false;
            }
            else if(affiche == 6){
                this.divTech = false; 
                this.divEvenement = true;
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
.navC_C_E{
    width: 80%;
    margin: auto;
    position: relative;
    height: 8vh;
}
.navC_C_E ul{
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
.navC_C_E li{
    display: block;
    width: 33.3%;
    margin: auto;
    text-align: center;
    position: relative;
}
.navC_C_E a{
    background-color: #343a40;
    border: none;
    margin: auto;
}
.navC_C_E p{
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
.divCardTech, .divCardEvenement{
    position: relative;
    height: 100%;
    margin: auto;
}
@media screen and (max-width:768px){
    .navC_C_E{
        width: 100%;
    }
}
/*.Sousmenu{
    position: relative;
    margin: auto;
    height: 80%;
}*/
</style>