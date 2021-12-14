<template>
  <div class="containerArticle">
      <div class="divArticle">
          <div class="head">
              <div class="imgArticle">
                <img :src="require(`../../public/img/${article.image}`)" :alt="`${article.titre}`">
                </div>
              <div class="titreArticle">
                  <h1 class="titre">{{article.titre}}</h1>
              </div>
          </div>
          <div class="contenuArticle">
              <p>{{article.contenu}}</p>
          </div>
          
      </div>
  </div>
</template>

<script scoped>
export default {
    data(){
        return{
        article:{},
        id: this.$route.params.id,
        }
    },
    components:{},
    created: function(){
        console.log("bite");
        this.axios.get(`${this.$Apiurl}article/findById/${this.id}`)
        .then((res)=>{
            this.article = res.data.articles;
            console.log("bite2")
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}
</script>

<style scoped>
    .containerArticle{
        height: 250vh !important;
    }
    .head{
        background-color: #f7f7f7;
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: space-around;
        position: relative;
        top:10rem;
    }
    .imgArticle img{
        height: 20rem;
    }
    .titreArticle{
        margin: auto;
        display: block;
    }
    .titre{
        margin: auto;
    }
    .contenuArticle{
        position: relative;
        top:10rem;
        height: 150vh;
        background-color: white;
        width: 100%;
    }
    .containerArticle p{
        width: 70%;
        margin: auto;
    }
</style>