<template>
  <Register class="Register"/>
</template>

<script>
import Register from "../../components/register/Register"
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

<style scoped>
    .Register{
        margin: auto;
        min-height: 100vh;
    }
</style>