<template>
  <div>     
      <p>Veuillez confirmer le mail de validation dans votre adresse email.</p>
  </div>
</template>

<script>

export default {
   
    data(){
        return{
            email: this.$route.params.email,
            obj: "mail confirmation",
            text: "http://localhost:8080",
        }
    },
    components:{},
    created: function(){
        console.log(this.$route.params);
        this.axios.post("http://localhost:3000/nodemailer/sendmail",{
            email: this.email,
            obj: this.obj,
            text: this.text
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) =>{
            console.log(err);
        });
    
    },
    mounted(){
       const refresh = setTimeout(()=>{
           this.$router.push({
               name: "Home", params: {message: "Message envoyé vous devez le validé et vous connecté"}})
       }, 3000);
       refresh;
    }
}
</script>

<style>

</style>