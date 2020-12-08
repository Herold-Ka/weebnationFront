<template>
  <div>
    <div class="cardContainer">
    <b-container v-for="card in card" :key="card.id">
      <b-card
    :title="`${card.titre}`"
    :img-src="`${card.image}`"
    :img-alt="`${card.alt}`"
    img-top
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
  </div>
</template>

<script scoped>
export default {
    data(){
        return{
            card:{},
        }
    },
    components:{},
    created:function(){
    this.axios.get('http://localhost:3000/article/nbArticlePageArticle/10')
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

</style>