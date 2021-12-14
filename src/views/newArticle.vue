<template>
  <div>
      <NewA :news="news" class="newA"/>
  </div>
</template>

<script>
import NewA from "../components/admin/createArticle"
export default {
    data(){
        return{

        }
    },
    components:{
        NewA,
    }
}
</script>

<style scoped>
    .newA{
        z-index: 2;
    }
</style>