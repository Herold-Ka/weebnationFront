<template>
  <div class="componentCreationArticle">
      <div class="cretationArticle">
          <div class="toolbar">
              <div class="icon">
              <b-col class="divBold">
                  <b-icon icon="type-bold"></b-icon>
              </b-col>
              <b-col class="divItalique">
                  <b-icon icon="type-italic"></b-icon>
              </b-col>
              <b-col class="divUnderline">
                  <b-icon icon="type-underline"></b-icon>
              </b-col>
              <canvas class="palette">
                      <color-picker :color="color" @color-change="updateColor" />
                  </canvas>
              <b-col class="justifyLeft">
                    <b-icon icon="justify-left"></b-icon>
                </b-col>
              <b-col class="justify">
                  <b-icon icon="justify"></b-icon>
              </b-col>
              <b-col class="justifyRight">
                  <b-icon icon="justify-right"></b-icon>
              </b-col>
              </div>
          </div>
          <div class="contenuArticle">
          <div class="divTitre">
              <b-row class="my-1">
                <b-col sm="10">
                    <b-form-input 
                    id="input-small" 
                    size="sm" 
                    placeholder="Titre" 
                    class="titre"></b-form-input>
                </b-col>
              </b-row>
          </div>
          <div class="divDescription">
              <b-row class="my-1">
                <b-col sm="10">
                    <b-form-input 
                    id="input-small" 
                    size="sm" 
                    placeholder="Description" 
                    class="description"></b-form-input>
                </b-col>
               </b-row>
          </div>
          <div class="divContenu">
              <b-row class="my-1">
                <b-col sm="10">
                    <b-form-textarea
                        id="textarea-auto-height"
                        placeholder="contenu"
                        rows="10"
                        max-rows="70"
                        class="contenu"
                    ></b-form-textarea>
                </b-col>
              </b-row>
          </div>
      </div>
      </div>
  </div>
</template>

<script scoped>
import { ColorPicker } from 'vue-accessible-color-picker';
export default {
    data(){
        return{
            color: 'hsl(270 100% 50% / 0.8)',
        }
    },
    components:{
        ColorPicker,
    },
}
</script>

<style scoped>
    .componentCreationArticle{
        height: 100vh;
        position: relative;
        top: 10rem;
        margin: auto;
    }
    .cretationArticle{
        margin: auto;
    }
    .toolbar{
        display: flex;
        justify-content: center;
    }
    .icon{  
        display: flex;
    }
    .contenuArticle{
        margin: auto;
    }
    .divContenu{
        margin: auto;
    }
    .contenu{
        margin: auto;
    }
</style>