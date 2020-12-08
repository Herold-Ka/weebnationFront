<template>
  <div class="cardContainer">
    <div class="container" v-for="card in card" :key="card.id">
      <div class="divImg">
        <img :src="`${card.image}`" :alt="`${card.titre}`">
      </div>
      <div class="divInfoImg">
        <div class="divTitre">
      <h3 class="titre">{{card.titre}}</h3>
        </div>
      <div class="divDesc">
        <p class="desc">{{card.description}}</p>
      </div>
      
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
      this.axios.get('http://localhost:3000/article/affichageArticle/4/manga' )
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

<style scoped>
    .cardContainer{
      display: flex;
      top: 0vh;
      width: auto;
    }
    .container{
      height: 100%;
      width: 20%;
      border: solid 1px black;
      background-color: white;
      border-radius: 0.3rem;
    }
    img{
      height: 100%;
      width: 80%;
      margin: auto;
    }
</style>