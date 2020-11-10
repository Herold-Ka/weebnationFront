<template>
  <Mailregister :mailregisters="mailregisters"/>
</template>

<script>
import Mailregister from "../components/mailRegister"
export default {
    name: "mailregister",
        data(){
            return{
                mailregisters:{},
            }
        },
        components:{
            Mailregister,
        }
}
</script>

<style>

</style>