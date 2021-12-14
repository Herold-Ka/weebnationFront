<template>
  <div>
      <div class="latestNewsHome">
        <h3>Latest News</h3>
      </div>
      <div class="divLatestNews">
        <ul>
         <li class="listeActu" v-for="liste in liste" :key="liste.id">
            <a :id="`${liste.id}`" v-on:click="linkArticle">
              <p>{{liste.description}}</p>
            </a>
          </li>
      </ul>
      </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
        nbArticle: 8,
        liste:{},
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
      this.axios.get(`${this.$Apiurl}article/nbArticlePageArticle/${this.nbArticle}` )
      .then((res)=>{
        this.liste = res.data.articles;
        console.log(res.data); 
      })
      .catch((err)=>{
        console.log(err);
      });
    }
}
</script>

<style scoped>
*{
  list-style: none;
}
  .latestNewsHome{ 
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    list-style:none;
    margin: auto;
    border: solid;
    background-color: #343a40;
    height: 8vh;

  }
  .latestNewsHome h3{
    margin: center;
    text-align: center;
    font-size: 3vh;
    color: antiquewhite;
  }
  .divLatestNews{
    width: 100%;
    height:85%;
  }
  .divLatestNews li, .divLatestNewsn ul{
    width: 100%;
  }
  .divLatestNews li{
    height: 10vh;
    border-bottom: dotted 1px antiquewhite;
  }
  .divLatestNews a{
    margin: auto;
    width: 80%;
    display: block;
  }
  .divLatestNews p{
    padding-top: 3vh;
    text-align: justify;
    color: antiquewhite;
    cursor: pointer;
  }
</style>