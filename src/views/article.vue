<template>
  <div class="divArticle">
      <Article :articles="articles"/>
  </div>
</template>

<script>
import Article from "../components/Articles"
export default {
    data(){
        return{
        }
    },
    components:{
        Article,
    }
}
</script>

<style scoped>
</style>