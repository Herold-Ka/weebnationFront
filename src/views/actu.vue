<template>
  <div>
      <Actucard :actucards="actucards" class="actuViews"/>
  </div>
</template>

<script>
import Actucard from "../components/nav/navActu";
export default {
    data(){
        return{
        }
    },
    components: {
        Actucard,
    }
}
</script>

<style scoped>
    .actuViews{
        position: relative;
        top: 6rem;
    }
</style>