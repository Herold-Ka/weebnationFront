<template>
<div class="contenu">
  <b-container fluid >
    <b-row class="my-1 connexion" v-for="type in types" :key="type">
      <b-col sm="3">
        <label :for="`type-${type}`" class="mail"> <code>{{ type }}</code>:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type" class="pass"></b-form-input>
      </b-col>
    </b-row>
     <b-button type="submit" variant="primary" class="submit">Submit</b-button>
  </b-container>
</div>
</template>

<script>
  export default {
    data() {
      return {
        types: [
          'email',
          'password',
        ]
      }
    }
  }
</script>

<style>
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