<template>
  <div>
      <p>Votre mail est bien validé</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            email: this.route.params.email
        }
    },
    components: {},
    created: function(){
        this.axios.post(`${this.$Apiurl}user/validMail`,{
            email: this.email,
        })
        .then(res=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    },
    mounted(){
            const refresh = setTimeout(()=>{
            this.$router.push({
               name: "connexion", params: {message: "Votre mail est validé vous pouvez vous connecté"}})
       }, 3000);
       refresh;
    }
}
</script>

<style scoped>

</style>