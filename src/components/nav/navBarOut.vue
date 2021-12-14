<template>
  <div>
    <div class="buttonContainer" id="buttonContainer">
      <button type="button" id="sidebarCollapse" class="btn btn-secondary center-block" v-on:click="sideBar()">
        <i class="fas fa-align-justify"></i>
      </button>
    </div>
    <div class="nonConnecter" id="nonConnecter">
      <div class="divLogo">
        <a href="/"><img src="../../../public/img/Weeb2.png" alt="logo"></a>
      </div>
      <div class="divNavigation">
        <ul>
          <li><a href="/"><p>Accueil</p></a></li>
          <li><a href="/fan_arts"><p>Fan-Art</p></a></li>
          <li><a href="/actu"><p>Actulité</p></a></li>
          <li><a href="#"><p>Evènements</p></a></li>
        </ul>
      </div>
      <div class="divConnexion">
        <ul>
          <li><a href="/connexion"><p>Connexion</p></a></li>
          <li><a href="/register"><p>Inscription</p></a></li>
          <li v-on:click="sideBar()" id="liFermeture"><p>Fermer</p></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
          nb: 0,
        }
    },
    methods:{
      sideBar: function(){
        if(this.nb==0){
          this.nb ++;
          document.getElementById('buttonContainer').style.display = "none";
          document.getElementById('nonConnecter').style.display = "block";
          document.getElementById('liFermeture').style.display = "block";
        }
        else if(this.nb != 0){
          this.nb = 0;
          document.getElementById('buttonContainer').style.display = "block";
          document.getElementById('nonConnecter').style.display = "none";
          document.getElementById('liFermeture').style.display = "none";
        }
      }
    }
}
</script>

<style scoped>
*{
  list-style: none;
}
    .buttonContainer{
      display: none;
    }
    #liFermeture{
      display: none;
    }

    .nonConnecter{
      height: 13vh;
      width: 100%;
      background-color: #343a40;
      display: flex;
    }
    .divLogo{
      height: 100%;
      width: 12%;
      margin: auto;
    }
    .divLogo img{
      height: 95%;
      margin: auto;
    }
    .divNavigation{
      height: 100%;
      width: 60%;
      margin: auto;
      display: block;
      position: relative;
    }
    .divNavigation ul{
      display: flex;
      margin: auto;
      justify-content: space-around;
      height: 100%;
    }
    .divNavigation li{
      margin: auto;
      display: block;
    }
    .divNavigation a{
      margin: auto;
      display: block;
    }
    .divNavigation p{
      color: antiquewhite;
      text-align: center;
      cursor: pointer;
    }
    .divConnexion{
      width: 25%;
    }
    .divConnexion ul{
      display: flex;
      margin: auto;
      justify-content: space-around;
      height: 100%;
    }
    .divConnexion li{
      margin: auto;
      display: block;
    }
    .divConnexion a{
      margin: auto;
      display: block;
    }
    .divConnexion p{
      color: antiquewhite;
      text-align: center;
      cursor: pointer;
    }
    @media screen and (max-width:900px) {
      .buttonContainer{
        display: block;
        height: 10vh;
      }
      
      .buttonContainer button{
        height: 70px;
        width: 70px;
      }
      .nonConnecter{
        height: 100vh;
        width: 25%;
        flex-direction: column;
        display: none;
      }
      .divLogo{
        width: 100%;
        height: 12%;
        margin: auto;
      }
      .divLogo img{
        margin: auto;
        display: block;
      }
      .divNavigation{
        width: 100%;
        height: 50%;
        margin: auto;
        display: block;
      }
      .divNavigation ul{
        flex-direction: column;
      }
      
      .divConnexion{
        height: 20%;
      }
      .divConnexion ul{
        flex-direction: column;
      }
    }
    @media screen and (max-width:540px) {
      .nonConnecter{
        width: 40%;
      }
      p{
        font-size: 13px;
      }
    }
</style>