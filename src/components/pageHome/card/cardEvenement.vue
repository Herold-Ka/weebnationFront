<template>
   <div class="cardContainer">
    <div class="card" v-for="card in card" :key="card.id" id="test">
      <div class="card-img">
        <a :id="`${card.id}`" v-on:click="linkArticle">
        <img :src="require(`../../../../public/img/${card.image}`)" class="" :alt="`${card.titre}`">
        </a>
      </div>
        <div class="card-body" id="card">
          <h5 class="card-title">{{card.titre}}</h5>
          <p class="card-text">{{card.description}}</p>
        </div>
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
    methods:{
      linkArticle: function(event){
        const hrefId = event.target.getAttribute("id");
        this.$router.push({name: "article", params: { 
          id: hrefId,
          } })
      }
    },
    created:function(){
      //this.axios.get('http://51.210.97.80:3000/article/affichageArticle/4/manga' )
      this.axios.get(`${this.$Apiurl}article/affichageArticle/8/anime` )
      .then((res)=>{
        this.card = res.data.articles;
        console.log(res.data);
        const yo = document.getElementsByClassName('btn');
        const hrefId = yo.target.getAttribute("id");
        console.log("plus "+ hrefId); 
      })
      .catch((err)=>{
        console.log(err);
      });
    },
}
</script>

<style scoped>
    .cardContainer{
      display: flex;
      /*flex: wrap;*/
      justify-content: center;
      width: 100%;
      height: 90%;
    }
    .card{
      width: 22%;
      padding: 0;
      height: 46vh;
      position: relative;
      margin: auto;
    }
    .card-img{
      height: 24vh;
      width: 100%;
      overflow: hidden;
    }
    img{
      width: 100%;
    }
    .card-body a{
      position: absolute;
      bottom: 30px;
    }
</style>