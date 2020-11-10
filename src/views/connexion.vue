<template>
  <div>
      <Connexion :connexions="connexions" />
  </div>
</template>

<script>
import Connexion from "../components/Connexion"
export default {
    name: "connexion",
    data() {
         
        return{
          connexions:{}
        }
    },
    components: {
        Connexion,
    },
    created() {
    this.axios
      .get("http://localhost:3000/user/login")
      .then((res) => {
        this.connexions = res.data.connexions;
      })
      .catch((err) => {
        alert(err);
      });
  },
}

</script>

<style>

</style>