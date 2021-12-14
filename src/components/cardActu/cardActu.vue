<template>
<div class="divActu">
  <div class="cardContainer">
  <div class="card" v-for="card in card" :key="card.id">
  <img :src="`${card.image}`" class="card-img-top" :alt="`${card.titre}`" 
  style="height: 15rem; background-image: cover; ">
  <div class="card-body">
    <h5 class="card-title">{{card.titre}}</h5>
    <p class="card-text">{{card.description}}</p>
    <a :id="`${card.id}`" class="btn btn-primary" v-on:click="linkArticle">Voir l'article</a>
  </div>
  </div>
  </div>
  <button type="button" class="btn btn-primary btn-lg btn-block"
   style="width: 90%; margin: auto;"
   v-on:click="voirPlus(8)" >Voir plus</button>
</div>
</template>

<script scoped>

export default {
    data(){ 
        return{  
          nbArticle: 8,  
          card:{

          }
,//{{card.description}}
        }
    },
    components:{},
    methods:{
      linkArticle: function(event){
        //const id = document.getElementsByClassName('button'); v-on:click="linkArticle"
        const hrefId = event.target.getAttribute("id");
        this.$router.push({name: "article", params: { 
          id: hrefId,
          } })
      },
      voirPlus: function(add){
      this.nbArticle += add;
      this.axios.get(`${this.$Apiurl}article/nbArticlePageArticle/${this.nbArticle}`)
      .then((res)=>{
        this.card = res.data.articles;
        console.log(res.data); 
      })
      .catch((err)=>{
        console.log(err);
      });
      }
    },
    created:function(){
      this.axios.get(`${this.$Apiurl}article/nbArticlePageArticle/${this.nbArticle}` )
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
    .divActu{
      height: 100%;
    }
    .cardContainer{
      display: flex;
      top: 0vh;
      justify-content: space-around;
      width: 95%;
      flex-wrap: wrap;
      margin: auto;
    }
    .card{
      width: 15rem;
      max-height: 30rem;
      margin: auto;
    }
    img{
      margin: auto;
    }
</style>