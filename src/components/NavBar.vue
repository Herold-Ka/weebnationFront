<template>
  <div>
  <div class="Connecter" v-show="Connecter">
  <b-navbar  toggleable="lg " type="dark nav" variant="dark" class="navi" flex>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav >
        <b-navbar-brand href="#"><img src="../../public/img/Weeb2.png" alt="" class="image" ></b-navbar-brand>
        <b-nav-item href="#">home</b-nav-item>
        <b-nav-item href="#">fan-art</b-nav-item>
        <b-nav-item href="#">actualité</b-nav-item>
        <b-nav-item href="#">évènement</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">recherche</b-button>
        </b-nav-form>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>utilisateur</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Déconnexion</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
<div class="nonConnecter" v-show="nonConnecter">
    <b-navbar  toggleable="lg " type="dark nav" variant="dark" class="navi" flex>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav >
        <b-navbar-brand href="#"><img src="../../public/img/Weeb2.png" alt="" class="image" ></b-navbar-brand>
        <b-nav-item href="#">home</b-nav-item>
        <b-nav-item href="#">fan-art</b-nav-item>
        <b-nav-item href="#">actualité</b-nav-item>
        <b-nav-item href="#">évènement</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">recherche</b-button>
        </b-nav-form>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>utilisateur</em>
          </template>
          <b-dropdown-item href="#">S'inscrire</b-dropdown-item>
          <b-dropdown-item href="#">Se connecter</b-dropdown-item>
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
      connecter: false,
      nonConnecter: true,
    }
  }
}
</script>

<style>
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
</style>