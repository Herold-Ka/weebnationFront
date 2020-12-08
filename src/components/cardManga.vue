<template>
  <div class="cardContainer">
  <div class="card" style="width: 18rem;" v-for="card in card" :key="card.id">
  <img :src="`${card.image}`" class="card-img-top" :alt="`${card.titre}`" style="width: 18rem; background-image: cover;">
  <div class="card-body">
    <h5 class="card-title">{{card.titre}}</h5>
    <p class="card-text">{{card.description}}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
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
      this.axios.get('http://51.210.97.80:3000/article/affichageArticle/4/manga' )
      .then((res)=>{
        this.card = res.data.articles;
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
    .card{
      width: 15rem;
      height: rem;
    }
</style>