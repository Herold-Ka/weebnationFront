<template>
  <div class="cardContainer">
    <b-container v-for="card in card" :key="card.id">
      <b-card
    :title="`${card.titre}`"
    :img-src="`${card.image}`"
    :img-alt="`${card.alt}`"
    img-top
    img-height="250"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 card"
    
  >
    <b-card-text>
      {{card.description}}
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
  </b-container>
  </div>
</template>

<script scoped>
//const lien = this.$route.params.article.image; 
export default {
    data(){
        return{
           //image: lien[1].Image, description: "image1", alt: "altImg"      
          card:{

          }
,//{{card.description}}
        }
    },
    components:{},
    created:function(){
      this.axios.get('http://localhost:3000/article/affichageArticle/4/event')
      .then((res)=>{
        this.card = res.data.articles;
        //console.log(this.cards.length);
        console.log(res.data); 
      })
      .catch((err)=>{
        console.log(err);
      });
    }
}
</script>

<style>
    .cardContainer{
      display: flex;
      top: 0vh;
    }
</style>