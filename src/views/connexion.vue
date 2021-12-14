<template>
  <div class="divConnexion">
      <Connexion :connexions="connexions" class="connexion"/>
  </div>
</template>

<script>
import Connexion from "../components/Connexion"

export default {
    name: "connexion",
    data() {
         
        return{
          
        }
    },
    components: {
        Connexion,
    },
}

</script>

<style scoped>
  .divConnexion{
    height: 100vh;
  }
</style>