<template>
  <div>
      <div class="Connecter">
  <b-navbar  toggleable="lg " type="dark nav" variant="dark" class="navi" flex>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav >
        <b-navbar-brand href="/"><img src="../../../public/img/Weeb2.png" alt="" class="image" ></b-navbar-brand>
        <b-nav-item href="/">Accueil</b-nav-item>
        <b-nav-item href="/fan_arts">Fan-art</b-nav-item>
        <b-nav-item href="/actu">Actualité</b-nav-item>
        <b-nav-item href="#">Evènements</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Recherche"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">recherche</b-button>
        </b-nav-form>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>utilisateur</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item v-on:click="logout">Déconnexion</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        logout:function(){
            window.localStorage.removeItem("token");
            window.location.reload();
        }
    }
}
</script>

<style scoped>
    .image{
  width: 80%;
  margin: auto;
  padding: 0;
}
.navbar-brand{
  width: 10%;
}
.nav-item {
  justify-content: space-around;
  font-size: 1.1rem;
  width: 10%;
  margin-top: auto;
  margin-bottom: auto;
}
.Connecter, .nonConnecter{
  width: 100%;
}
</style>