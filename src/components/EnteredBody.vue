<template>
  <div class="EnteredBody">
    <!-- <EnteredCop></EnteredCop> -->
    <menu2></menu2>
    <menu3></menu3>
  </div>
</template>

<script>
import EnteredCop from  "./EnteredCop/EnteredCop"
import menu2 from  "./publicCop/menu2"
import menu3 from  "./publicCop/menu3"



export default {
  components:{
    EnteredCop,
    menu2,
    menu3,
  },
  data(){
    return{
      
    }
  }
}
</script>
<style scoped>
.EnteredBody{
  width: 80%;
  min-width: 1440px;
  margin: auto;
  margin-top: 20px;
}
</style>
