<template>
<div class="contenu">
  <b-container fluid >
    <b-row class="my-1 connexion" >
      <b-col sm="3">
        <label :for="`type-${type}`" class="mail"> <code>email</code>:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type" v-model="email" class="pass"></b-form-input>
      </b-col>
    </b-row>
     <b-row class="my-1 connexion" >
      <b-col sm="3">
        <label :for="`type-${type}`" class="mail"> <code>password</code>:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type" v-model="password" class="pass"></b-form-input>
      </b-col>
    </b-row>
     <b-button type="submit" variant="primary" class="submit" v-on:click='dologin'>Submit</b-button>
  </b-container>
</div>
</template>

<script scoped>
import jwt from "vue-jwt-decode";
  export default {
    data() {
      return {
        
          email: '',
          password:'',
        
      }
    },
    methods:{
      dologin: function (){
            this.axios.post("http://localhost:3000/user/login",{
                email:this.email,
                password:this.password,
            })
            .then(res =>{
            console.log(res.data);
                if(res.data.token){
                    localStorage.setItem("token",res.data.token);
                    var user = jwt.decode(res.data.token);
                   
                    if (user.role == "admin") {
                         this.$router.push({ path: "/admin/home" });
                    } else {
                    this.$router.push({name: '/'})
                    window.location.reload();
                    }
                }
                else{
                    alert(res.data.auth);
                    this.$router.push({name: "register", params: {msg: "non connecté"} });
                    window.location.reload();
                }
            })
            .catch(err => {
                console.log(err);
            })

        },
    },
  }
</script>

<style scoped>
    .contenu{
        width: 40%;
        margin: 10rem auto;
    }
    .connexion{
      justify-content: space-around;
    }
    .submit{
      margin-left: 85%;
    }
    .mail{
      float: right;
    }
    .pass{
      float: right;
    }
</style>