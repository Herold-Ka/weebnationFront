<template>
  <Register :registers="registers"/>
</template>

<script>
import Register from "../components/Register"
export default {
    name: "register",
    data(){
        return{
            registers: {},
        }
    },
    components:{
        Register,
    }
}
</script>

<style>

</style>