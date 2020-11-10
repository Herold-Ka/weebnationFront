<template>
  <div class="contenu">
  <b-container fluid >
    <b-row class="my-1" >
      <b-col sm="3">
        <label >email :</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="email" type="email" v-model="email"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-1" >
      <b-col sm="3">
        <label >password :</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="password" type="password" v-model="password"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-1" >
      <b-col sm="3">
        <label >pseudo :</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="pseudo" type="text" v-model="pseudo"></b-form-input>
      </b-col>
    </b-row>
     <b-button type="submit" variant="primary" id="register">Submit</b-button>
  </b-container>
</div>
</template>

<script>
export default {
    data() {
      return {
        email: "",
        password: "",
        pseudo: "",

    }
  },
  components:{},
  methods:{
       doregister: function (){
            this.axios.post("http://localhost:3000/user/register",{
                email: this.email,
                password: this.password,
                pseudo: this.pseudo,
            })
            .then(res =>{
                console.log(res);
               if(res.data.token){
                    localStorage.setItem("token",res.data.token)
                    this.$router.push({name: 'connexion'})
                    window.location.reload();        
                }
                else{
                    this.$router.push({name: "mailregister", params: {msg: "non connecté", email: this.email} })
                }
            })
            .catch(err => {
                console.log(err);
            })
        },
  },
  mounted(){
      const boutonRegister = document.getElementById("register");
      //const contenu = document.getElementsByClassName("contenu");
      boutonRegister.addEventListener("click", ()=>{
          this.doregister();
      });
  }
}
</script>

<style>

</style>